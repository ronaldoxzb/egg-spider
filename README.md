# egg-template

egg基础框架

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
#### server
#### first start mysql & redis

```bash
$ docker-compose-dev up
```
#### second start server
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

