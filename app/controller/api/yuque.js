"use strict";

const Controller = require("egg").Controller;
/**
* @controller YuqueController(系统信息)
*/
class YuqueController extends Controller {
  /**
   * 获取语雀个人信息
   */
  async getYuequeUserInfo() {
    const { ctx } = this;
    const { data } = await ctx.helper.request({
        ctx,
        method: "GET",
        headers: {
            'X-Auth-Token': ctx.helper.yuqueToken
        },
        dataType: 'json',
        url: ctx.helper.yuqueApi + '/user',
      });
    ctx.helper.success({ ctx, res: data.data });
  }
}

module.exports = YuqueController;
