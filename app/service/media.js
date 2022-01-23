"use strict";

const Service = require("egg").Service;

class MediaService extends Service {
  /**
   * 创建用户
   * @param {Object} user 用户信息
   * @return {Object} 用户信息
   */
  async create(user) {
    return await this.ctx.model.Media.create(user);
  }
}

module.exports = MediaService;
