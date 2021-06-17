'use strict'

module.exports = app => {
  const { controller, middleware, apiV1Router } = app
  // 获取mock数据
  apiV1Router.post('/mockdata',  app.jwt, controller.api.mock.getMockData)
  apiV1Router.post('/mockbackdata',  app.jwt, controller.api.mock.getBackMockData)

}
