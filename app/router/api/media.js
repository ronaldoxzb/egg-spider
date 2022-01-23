'use strict'

module.exports = app => {
  const { controller, apiV1Router, middleware} = app
  // 获取mock数据
  apiV1Router.post('/media/add',  app.jwt, controller.api.media.addMedia)
  apiV1Router.get('/media/list',  app.jwt, middleware.pagination, controller.api.media.getAllMedia)
}