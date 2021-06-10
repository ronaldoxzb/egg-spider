"use strict";

const Controller = require("egg").Controller;
const cheerio = require("cheerio");
const iconv = require("iconv-lite"); //iconv-lite模块用于解码
class AreaController extends Controller {
  /**
   * 同步区域数据
   */
  async areaSync() {
    const { ctx, app } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;

    await this.getSheng();
    ctx.helper.success({ ctx, res: "success" });
  }
  async getSheng() {
    const { ctx } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;
    const $ = await this.getDataByPage("index.html");
    let htmlList = $(".provincetr td a");
    for (let i = 0; i < htmlList.length; i++) {
      let url = $(htmlList[i]).attr("href");
      let item = {
        name: $(htmlList[i]).text(),
        code: url.slice(0, 2) + "0000000000",
        desc: "省",
        year,
      };
      // 本条记录是否存在
      if (
        !(await this.isRegionExist(common, "Provinces", {
          code: item.code,
          year,
        }))
      ) {
        await common.create({ modelName: "Provinces", item });
      }
      await this.getShi(url, item);
    }
  }
  async getShi(url, shengItem) {
    const { ctx } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;
    const $ = await this.getDataByPage(url);
    let htmlList = $(".citytr");
    for (let i = 0; i < htmlList.length; i++) {
      let first = $(htmlList[i]).find("td").first().find("a");
      let last = $(htmlList[i]).find("td").last().find("a");
      let itemUrl = $(first).attr("href");

      let item = {
        name: $(last).text() || "市辖区补充name",
        code: $(first).text() || "市辖区补充code",
        desc: "市",
        provinceCode: shengItem.code,
        year,
      };
      // 本条记录是否存在
      if (
        !(await this.isRegionExist(common, "Cities", { code: item.code, year }))
      ) {
        await common.create({ modelName: "Cities", item });
      }
      await this.getQu(itemUrl, item);
    }
  }
  async getQu(url, shiItem) {
    const { ctx } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;
    const $ = await this.getDataByPage(url);
    let htmlList = $(".countytr");

    for (let i = 0; i < htmlList.length; i++) {
      let first = $(htmlList[i]).find("td").first().find("a");
      let last = $(htmlList[i]).find("td").last().find("a");
      let itemUrl = $(first).attr("href");
      let item = {
        name: $(last).text(),
        code: $(first).text(),
        desc: "区",
        cityCode: shiItem.code,
        year,
      };
      if (
        !(await this.isRegionExist(common, "Districts", {
          code: item.code,
          year,
        }))
      ) {
        await common.create({ modelName: "Districts", item });
      }
      if (itemUrl) await this.getXiang(itemUrl, item);
    }
  }

  async getXiang(url, quItem) {
    const { ctx } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;
    // 针对乡镇页面拼接url地址
    const extUrl = url.split("/")[1].substr(0, 2) + "/";
    url = extUrl + url;
    const $ = await this.getDataByPage(url);
    let htmlList = $(".towntr");

    for (let i = 0; i < htmlList.length; i++) {
      let first = $(htmlList[i]).find("td").first().find("a");
      let last = $(htmlList[i]).find("td").last().find("a");
      let itemUrl = $(first).attr("href");

      let item = {
        name: $(last).text(),
        code: $(first).text(),
        desc: "乡镇",
        districtCode: quItem.code,
        year,
      };
      if (
        !(await this.isRegionExist(common, "Towns", { code: item.code, year }))
      ) {
        await common.create({ modelName: "Towns", item });
      }
      if (itemUrl) await this.getCun(itemUrl, item);
    }
  }
  async getCun(url, xiangItem) {
    const { ctx } = this;
    const { common } = ctx.service;
    const { year } = ctx.params;
    // 针对村级页面拼接url地址
    const extUrl =
      url.split("/")[1].substr(0, 2) + "/" + url.substr(5, 2) + "/";
    url = extUrl + url;
    let $ = await this.getDataByPage(url);
    let htmlList = $(".villagetr");
    for (let i = 0; i < htmlList.length; i++) {
      let first = $(htmlList[i]).find("td").first();
      let last = $(htmlList[i]).find("td").last();
      if ($(last).text() && $(first).text()) {
        let item = {
          name: $(last).text(),
          code: $(first).text(),
          desc: "街道",
          townCode: xiangItem.code,
          year,
        };
        if (
          !(await this.isRegionExist(common, "Villages", {
            code: item.code,
            year,
          }))
        ) {
          await common.create({ modelName: "Villages", item });
        }
      }
    }
  }
  /**
   *
   * @param {*} url 请求地址
   * @param {*} try_times 重试次数
   * @returns 处理好的网页数据
   */
  async getDataByPage(url, try_times = 0) {
    try {
      const { ctx } = this;
      const { year } = ctx.params;
      const baseUrl = `http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/${year}/`;
      this.sleep(100);
      const { data } = await ctx.helper.request({
        ctx,
        method: "GET",
        url: baseUrl + url,
      });
      // 针对乱码处理
      const pageData = iconv.decode(data, "gb2312");
      let $ = cheerio.load(pageData);
      return $;
    } catch (err) {
      // 失败重试机制重试10次
      if (try_times < 10) {
        try_times += 1;
        console.warn("Retry to open page: " + url);
        return this.getDataByPage(url, try_times);
      }
      throw err;
    }
  }
  async isRegionExist(ctx, modelName, where) {
    const region = await ctx.findOne({
      modelName,
      where,
    });
    return region !== null;
  }
  sleep(d) {
    let t = new Date().getTime();
    while (new Date().getTime() - t <= d) {}
  }
  /**
   * 通过省code查询树形数据
   */
  async getAreaData() {
    const { ctx } = this;
    const { area } = ctx.service;
    const { code } = ctx.params;

    const res = await area.getAreaData(code);
    ctx.helper.success({ ctx, res });
  }
  /**
   * 获取所有省数量
   */
  async getAllProvince() {
    const { ctx } = this
    const { common } = ctx.service;
    const res = await common.findAll({ modelName: "Provinces" });
    ctx.helper.success({ ctx, res });
  }
  /**
   * 获取区域数量
   */
  async getAreaNumber() {
    const { ctx } = this;
    const { code } = ctx.params;
    const { common } = ctx.service;
    const [
      province_num,
      city_num,
      district_num,
      town_num,
      village_num,
    ] = await Promise.all([
      common.findCount({ modelName: "Provinces" }),
      common.findCount({ modelName: "Cities" }),
      common.findCount({ modelName: "Districts" }),
      common.findCount({ modelName: "Towns" }),
      common.findCount({ modelName: "Villages" }),
    ]);
    const res = {
      province_num,
      city_num,
      district_num,
      town_num,
      village_num,
    };
    ctx.helper.success({ ctx, res });
  }
}

module.exports = AreaController;
