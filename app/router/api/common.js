'use strict'

module.exports = app => {
  const { controller, apiV1Router } = app
  // 获取mock数据
  apiV1Router.post('/upload/network',  app.jwt, controller.api.common.upload)
  apiV1Router.post('/upload/local',  app.jwt, controller.api.common.localUpload)
}
