"use strict";

const Controller = require("egg").Controller;

class MediaController extends Controller {
  /**
   * 批量添加附件
   */
  async addMedia() {
    const { ctx } = this;
    const { common } = ctx.service;
    const { list } = ctx.request.body;
    
    const res = await common.bulkCreate({ modelName: 'Media', list } );
    ctx.helper.success({ ctx, res });
  }
  /**
   * 查询所有用户,用户列表
   */
  async getAllMedia() {
    const { ctx } = this;
    let { page } = ctx;
    const { common } = ctx.service;
    page = {
      ...page,
      pageField: "id",
      pageSort: "DESC",
    };
    const [total, items] = await Promise.all([
      common.findCount({ modelName: "Media" }),
      common.findPage({ modelName: "Media", page }),
    ]);
    const res = { total, items, size: page.pageSize, page: page.pageIndex };
    ctx.helper.success({ ctx, res });
  }
}

module.exports = MediaController;
