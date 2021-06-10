"use strict";

const Controller = require("egg").Controller;
const os = require("os");
/**
* @controller SystemController(系统信息)
*/
class SystemController extends Controller {
  /**
    * @summary 根据Id获取信息
    * @description 根据Id获取信息
    * @router get /v1/book/getBook
    * @response 200 JsonResult 操作结果
    */
  /**
   * 查询所有用户,用户列表
   * @param {Number|String} freemem 系统空闲内存
   * @param {Array} cpus CPU核心数详细信息
   * @param {String} hostname 主机名
   * @param {String} platform Node.js编译时的操作系统平台
   * @param {String} release 系统发行版本
   * @param {Number|String} totalmem 系统内存总数
   * @param {String} type 操作系统类型
   * @param {String} percetage 内存占用率百分比
   * @param {String} constants 已经发生进程异常
   */
  async getSystemInfo() {
    const { ctx } = this;
    const { area } = ctx.service;
    const { code } = ctx.params;
    let {
      freemem,
      cpus,
      hostname,
      platform,
      release,
      totalmem,
      type,
      constants,
    } = os;
    let total = parseInt(totalmem() / 1024 / 1024);
    let num = parseInt(freemem() / 1024 / 1024);
    let percentage = parseInt(((total-num) / total) * 100);
    const res = {
      hostname: hostname(),
      platform: platform(),
      release: release(),
      percentage,
      type: type(),
      totalmem: `${total}MB`,
      freemem: `${num}MB`,
      constants: constants.SIGTRAP ? "1" : "0",
      cpu: cpus(),
    };
    ctx.helper.success({ ctx, res });
  }
}

module.exports = SystemController;
