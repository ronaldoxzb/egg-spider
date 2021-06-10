'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 用户登录
   */
  async login() {
    const { ctx, app } = this;
    const { user } = ctx.service;
    const { password, username } = ctx.request.body;
    ctx.validate({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    }, ctx.request.body);
    const result = await user.findByUsername(username);
    if (!result) {
      ctx.helper.fail({ ctx, res: '用户名或密码错误' });
      return;
    }
    if (!ctx.helper.bcompare(password, result.password)) {
      ctx.helper.fail({ ctx, res: '用户名或密码错误' });
      return;
    }
    ctx.helper.success({ ctx, res: app.getUserJson(result, ctx, 1) });
  }

  /**
   * 用户注册
   */
  async register() {
    const { ctx, app } = this;
    const { user } = ctx.service;
    const usert = ctx.request.body;
    ctx.validate({
      sex: { type: 'string', required: true },
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
      avatar: { type: 'string', required: true },
    }, usert);
    const { sex, username, avatar } = usert;
    const password = ctx.helper.bhash(usert.password);
    const newUser = {
      username,
      sex,
      password,
      avatar
    };
    // 创建用户
    const result = await user.create(newUser);
    ctx.status = 201;
    ctx.helper.success({ ctx, res: app.getUserJson(result, ctx, 0) });
  }
  /**
   * 获取用户信息
   */
  async getUserInfo() {
    const { ctx, app } = this;
    ctx.helper.success({ ctx, res: app.verifyToken(ctx) });
  }
  /**
   * 查询所有用户,用户列表
   */
  async getAllUser() {
    const { ctx } = this;
    let { page } = ctx;
    const { common } = ctx.service;
    page = {
      ...page,
      pageField: 'id',
      pageSort: 'DESC',
    };
    const [ total, items ] = await Promise.all([
      common.findCount({ modelName: 'User' }),
      common.findPage({ modelName: 'User', page }),
    ]);
    const res = { total, items, size: page.pageSize, page: page.pageIndex };
    ctx.helper.success({ ctx, res });
  }

  /**
   * 更新用户信息
   */
  async updateUserInfo() {
    const { ctx } = this;
    const { user } = ctx.service;
    const userData = ctx.request.body;
    const userId = { id: parseInt(ctx.params.id) };
    ctx.validate({
      id: { type: 'number', required: true },
    }, userId);
    if (userData.hasOwnProperty('password')) {
      userData.password = ctx.helper.bhash(userData.password);
    }
    const result = await user.update(userId.id, userData);
    ctx.helper.success({ ctx, res: result });
  }

  /**
   * 删除用户
   */
  async deleteUserById() {
    const { ctx } = this;
    const { user } = ctx.service;
    const userData = ctx.params;
    userData.id = parseInt(userData.id);
    ctx.validate({
      id: { type: 'number', required: true },
    }, userData);
    const result = await user.deleteById(userData.id);
    if (result !== 0) {
      ctx.helper.success({ ctx, res: '用户删除成功' });
    } else {
      ctx.helper.fail({ ctx, res: '用户删除失败' });
    }
  }
}

module.exports = UserController;
