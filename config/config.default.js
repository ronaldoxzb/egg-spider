/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  /**
   * 模版页面配置映射成html
   */
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks", // 左边写成.html后缀，会自动渲染.html文件
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1618564071193_4507";

  // add your middleware config here
  config.middleware = ["errorHandler", "notfoundHandler"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 注意oss多文件上传是file形式,本地上传是stream形式主义区别
  config.multipart = {
    mode: "stream",
    // fileSize: '50mb',  // 文件大小
    fileModeMatch: /^(\/api\/upload\/network)$/, // '/upload/local/'接口使用file模式，其他使用stream模式
  };
  // add your jwt config
  config.jwt = {
    secret: "zzestlgcjwtsecret",
    getToken(ctx) {
      if (
        ctx.headers.authorization &&
        (ctx.headers.authorization.split(" ")[0] === "Bearer" ||
          ctx.headers.authorization.split(" ")[0] === "Token")
      ) {
        return ctx.headers.authorization.split(" ")[1];
      } else if (ctx.query && ctx.query.token) {
        return ctx.query.token;
      }
      return null;
    },
  };
  config.oss = {
    // 这里需要的东西去自己的服务器里看，我用的阿里云
    client: {
      accessKeyId: "LTAI5tGAaZ49iG74WwZ6H92q",
      accessKeySecret: "1TDeDRHMXEt5Q1ltIJcNfeu0apgUhC",
      bucket: "ronaldoxzb",
      endpoint: "oss-cn-beijing.aliyuncs.com",
      timeout: "300s",
    },
  };
  // sequelise config
  config.sequelize = {
    // 数据库类型
    dialect: "mysql",
    // host
    host: "127.0.0.1",
    // 端口号
    port: "3306",
    // 用户名
    username: "root",
    // 密码
    password: "xier0571",
    // 数据库名
    database: "user",
    // 保存为本地时区
    timezone: "+08:00",
    // 查询时间
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  };
  // redis config
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: "127.0.0.1", // Redis host
      password: "xier0571",
      db: 0,
    },
  };
  // 跨域配置
  config.cors = {
    origin: "*",
    allowMethods: "GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS",
  };

  // CSRF 关闭
  config.security = {
    csrf: {
      enable: false,
    },
    nosniff: {
      enable: false,
    },
  };
  // 日志已json形式打印
  config.logger = {
    outputJSON: true,
  };
  config.multipart = {
    // fields: 50,//表单上传字段限制的个数
    fileSize: "200mb", //文件上传的大小限制
  };
  // 邮件服务器配置
  config.mailer = {
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "1101781068@qq.com", // generated ethereal user
      pass: "edcnoaztzdnfbadh", // generated ethereal password
    },
  };

  config.swaggerdoc = {
    dirScanner: "./app/controller/api", // 配置自动扫描的控制器路径
    // 接口文档的标题，描述或其它
    apiInfo: {
      title: "Render", // 接口文档的标题
      description: "swagger-ui for Render document.", // 接口文档描述
      version: "1.0.0", // 接口文档版本
    },
    schemes: ["http", "https"], // 配置支持的协议
    consumes: ["application/json"], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: ["application/json"], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {
      // 配置接口安全授权方式
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)
    enable: true, // 默认 true (启用)
  };
  return {
    ...config,
    ...userConfig,
  };
};
