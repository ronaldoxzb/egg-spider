'use strict'

module.exports = app => {
  const { controller, middleware, apiV1Router } = app

  // 用户注册
  apiV1Router.post('/user',  app.jwt, controller.api.user.register)

  // 用户登录
  apiV1Router.post('/user/login', controller.api.user.login)

  // 获取用户列表
  apiV1Router.get('/user',  app.jwt, middleware.pagination, controller.api.user.getAllUser)

  // 获取单个用户
  apiV1Router.get('/user/info', app.jwt, controller.api.user.getUserInfo)

  // 更新用户信息
  apiV1Router.put('/user/:id', app.jwt, controller.api.user.updateUserInfo)

  // 删除用户信息
  apiV1Router.delete('/user/:id', app.jwt, controller.api.user.deleteUserById)

  
}
