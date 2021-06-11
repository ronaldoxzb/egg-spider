# egg-template

egg基础框架

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy
<!-- start stop -->
```bash
$ docker-compose up
$ docker-compose stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

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
