"use strict";

const Controller = require("egg").Controller;
var Mock = require("mockjs");
class MockController extends Controller {
  async getMockData() {
    const { ctx } = this;
    // num 生成数量 header 表头
    const { header, num } = ctx.request.body;
    const keyObj = {} // 组装数据
    for (let i = 0; i < header.length; i++) {
      const element = header[i];
      keyObj[element] = Mock.mock('@integer(1, 9999999)')
    }
    const keyList = `list|${num}`;
    const res = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      [keyList]: [
        keyObj
      ],
    });
    ctx.helper.success({ ctx, res });
  }
  async getBackMockData() {
    //const mockTemp = [Mock.mock('@integer(1, 9999999)'), Mock.Random.integer(0, 1) ]
    const { ctx } = this;
    // num 生成数量 header 表头
    const { header, num } = ctx.request.body;
    const keyObj = {} // 组装数据
    for (let i = 0; i < header.length; i++) {
      const element = header[i];
      // keyObj[element] = Mock.mock('@integer(1, 9999999)')
      keyObj[element] = Mock.Random.cparagraph()
    }
    const keyList = `list|${num}`;
    const res = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      [keyList]: [
        keyObj
      ],
    });
    const headerMap = {}
    for (let i = 0; i < header.length; i++) {
      const element = header[i];
      headerMap[element] = element
    }
    ctx.helper.exportXLSX(ctx, '数据表格', '拿走不谢', headerMap, res.list)
  }
}

module.exports = MockController;
