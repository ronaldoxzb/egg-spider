// 数据库信息配置
exports.sequelize = {
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
};
exports.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'xier0571',
      db: 0,
    },
  }