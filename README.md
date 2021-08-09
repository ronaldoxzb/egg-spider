# Egg-spider
## Preview
### 线上预览地址 (https://ronaldoxzb.com/) [此项目暂不提供预览]如有需要可在个人博客下留言

## Project description
### [后端]egg.js(jwt) + mysql(sequelize) + redis + docker + docker-compose + nginx + vue + element-ui 全栈获取省市区数据（统计局数据）【工具】项目，实现在docker环境中一键部署

#### 1 实现用户注册登录
#### 2 实现统计局省市区数据的爬取
#### 3 实现大批量excel测试数据
#### 4 实现资源的监控
#### 5 实现羽雀API的调用
#### 6 实现邮件的发送（基于smtp.qq.com)

### [前端] element-ui (https://github.com/PanJiaChen/vue-admin-template) 🙏

#### PanJiaChen 大佬最精简的一副vue模版（拿来熟悉docker-compose的发布流程）
## Project back end structure description
### app
```
├── contract
│   └── type.js     swaggerdoc配置文件
├── controller
│   ├── api
│   │   ├── area.js     省市区乡镇村数据获取
│   │   ├── mock.js     生成mock数据生成Excel文件
│   │   ├── system.js       获取系统资源使用情况
│   │   ├── tool
│   │   │   └── email.js        发送邮件
│   │   ├── user.js
│   │   └── yuque.js        羽雀API调用
│   └── view
│       └── page.js     模版引擎渲染index
├── database
│   └── db.js       model层公用
├── extend
│   ├── application.js      app扩展函数
│   └── helper.js       公用函数封装
├── middleware
│   ├── error_handler.js    成功/出错处理等
│   ├── notfound_handler.js     404处理等
│   └── pagination.js       分页器封装
├── model
│   ├── cities.js       市表
│   ├── districts.js        街道表
│   ├── provinces.js        省表
│   ├── towns.js        乡镇表
│   ├── user.js     用户表
│   └── villages.js     村表
├── public      静态资源文件
├── router      路由表（不赘述）
│   ├── api
│   │   ├── area.js     
│   │   ├── mock.js
│   │   ├── system.js
│   │   ├── tool
│   │   │   └── email.js
│   │   ├── user.js
│   │   └── yuque.js
│   └── view
│       └── page.js
├── service     逻辑处理层
│   ├── area.js     
│   ├── cache.js
│   ├── common.js
│   └── user.js
├── utils       暂无
└── view        未做前后端分离前的模版引擎渲染的页面
    ├── index.html
    └── tool.html
```
### config
```
├── config.default.js   默认配置文件
├── config.local.js     本地开发配置文件
├── config.prod.js      生产配置文件
└── plugin.js       插件配置文件
```
### docker
```
├── mysql
│   ├── Dockerfile      mysql镜像文件
│   ├── init
│   │   └── init.sql        初始建库执行的sql   
│   └── mysqld.cnf      mysql配置文件
├── redis
│   ├── Dockerfile      redis镜像文件
│   └── redis.conf      redis配置文件
├── server
│   └── Dockerfile      server镜像文件启动
└── web
    ├── Dockerfile      web build 及 nginx镜像文件
    └── nginx.conf      nginx配置文件
```
## Author Info
👤 **ronaldoxzb**

* Github: [@ronaldoxzb](https://github.com/ronaldoxzb)
* email: queenxzb@163.com
* adress:  Zhe Jiang Province HangZhou city

## QuickStart
<!-- add docs here for user -->

see [egg docs][egg] for more detail.

## Development
### server(自行安装docker&docker-compose)
#### start mysql & redis

```bash
$ docker-compose -f docker-compose-dev.yml up     
```
#### start server

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
### web(自行安装node环境)

#### start web

```bash
$ npm i
$ npm run dev
$ open http://localhost:9028/
```
## Deploy(宿主机安装docker&&docker-compose)
<!-- start stop -->
```bash
$ docker-compose up
$ docker-compose stop
```
[egg]: https://eggjs.org
## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ronaldoxzb/egg-spider/issues).

## Show your support

Give a ⭐️ if this project helped you!
## License

[MIT](https://github.com/ronaldoxzb/egg-spider/blob/master/LICENSE) license.

Copyright (c) 2021 ronaldoxzb

