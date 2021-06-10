"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  /**
   * 数据插入
   * @param {Object} user 用户信息
   * @return {Object} 用户信息
   */
  async bulkCreate(user) {}
  /**
   *
   * @param {*} code 省code
   * @returns 区域树形结构
   */
  async getAreaData(code) {
    console.time() // 开始计时
    let result = await this.service.cache.get("tree" + code);
    // 没有redis缓存就去数据库查询
    if (!result) {
      console.log("没有redis缓存");
      result = await this.ctx.model.Provinces.findAll({
        where: {
          code,
        },
        include: [
          {
            model: this.ctx.model.Cities,
            as: "children",
            include: [
              {
                model: this.ctx.model.Districts,
                attributes: ["name", "code", "desc"],
                as: "children",
                include: [
                  {
                    model: this.ctx.model.Towns,
                    attributes: ["name", "code", "desc"],
                    as: "children",
                    include: [
                      {
                        model: this.ctx.model.Villages,
                        as: "children",
                        attributes: ["name", "code", "desc"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      this.service.cache.set("tree" + code, result);
    }
    console.timeEnd() // 打印时长
    return result;
  }
}

module.exports = UserService;
