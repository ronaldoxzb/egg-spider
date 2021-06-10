'use strict'

module.exports = app => {
  const { controller, middleware, apiV1Router } = app
  // 获取mock数据
  apiV1Router.post('/mockdata', controller.api.mock.getMockData)
  apiV1Router.post('/mockbackdata', controller.api.mock.getBackMockData)

}
