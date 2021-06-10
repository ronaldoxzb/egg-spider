'use strict'

module.exports = app => {
  const { controller, apiV1Router } = app
  // 获取语雀个人信息
  apiV1Router.get('/yuqueUserInfo', controller.api.yuque.getYuequeUserInfo)

}
