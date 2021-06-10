// 数据库信息配置
exports.sequelize = {
  // 数据库类型
  dialect: "mysql",
  // host
  host: process.env.EGG_MYSQL_HOST || "127.0.0.1", //Mysql host production
  // 端口号
  port: "3306",
  // 用户名
  username: "root",
  // 密码
  password: "abcd1234",
  // 数据库名
  database: "user",
};
exports.redis = {
  client: {
  host: process.env.EGG_REDIS_HOST || "127.0.0.1", // Redis host
  port: 6379, // Redis port
  password: "abcd1234",
  db: 0,
  },
};
