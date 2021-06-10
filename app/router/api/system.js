'use strict'

module.exports = app => {
  const { controller, middleware, apiV1Router } = app
  // 获取系统信息
  apiV1Router.get('/system', controller.api.system.getSystemInfo)

}
