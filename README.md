# Egg-spider

## Project Description
### [后端]egg.js(jwt) + mysql(sequelize) + redis + docker + docker-compose + nginx + vue + element-ui 全栈获取省市区数据（统计局数据）【工具】项目，实现在docker环境中一键部署

#### 1 实现用户注册登录
#### 2 实现统计局省市区数据的爬取
#### 3 实现大批量excel测试数据
#### 4 实现资源的监控
#### 5 实现羽雀API的调用
#### 6 实现邮件的发送（基于smtp.qq.com)

### [前端] element-ui (https://github.com/PanJiaChen/vue-admin-template) 🙏
#### PanJiaChen 大佬最精简的一副vue模版（拿来熟悉docker-compose的发布流程）

## 5. 项目后端结构说明
```
├── contract
│   └── type.js
├── controller
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
├── database
│   └── db.js
├── extend
│   ├── application.js
│   └── helper.js
├── middleware
│   ├── error_handler.js
│   ├── notfound_handler.js
│   └── pagination.js
├── model
│   ├── cities.js
│   ├── districts.js
│   ├── provinces.js
│   ├── towns.js
│   ├── user.js
│   └── villages.js
├── public
├── router
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
├── service
│   ├── area.js
│   ├── cache.js
│   ├── common.js
│   └── user.js
├── utils
└── view
    ├── index.html
    └── tool.html
```
## Author Info
👤 **ronaldoxzb**

* Github: [@ronaldoxzb](https://github.com/ronaldoxzb)
* email: queenxzb@qq.com
* adress:  Zhe Jiang Province HangZhou city

## project 
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

## Development
### server(自行安装docker&docker-compose)
#### 1 start mysql & redis

```bash
$ docker-compose-dev up
```
### 2 start server

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
### web(自行安装node环境)

#### 1 start web

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

## License

[MIT](https://github.com/ronaldoxzb/egg-spider/blob/master/LICENSE) license.

Copyright (c) 2021 ronaldoxzb

