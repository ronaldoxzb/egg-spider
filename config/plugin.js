"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  // 发送邮件
  mailer: {
    enable: true,
    package: "egg-mailer",
  },
  // 自动生成sw文档
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc",
  },
  // redis插件
  redis: {
    enable: true,
    package: "egg-redis",
  },
  // Sequelize插件
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  // 校验插件
  validate: {
    enable: true,
    package: "egg-validate",
  },
  // 模版
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks",
  },
  // jwt插件
  jwt: {
    enable: true,
    package: "egg-jwt",
  },

  // 子路由
  routerPlus: {
    enable: true,
    package: "egg-router-plus",
  },

  // 跨域
  cors: {
    enable: true,
    package: "egg-cors",
  },
  
  // oss
  oss: {
    enable: true,
    package: "egg-oss",
  },
};
