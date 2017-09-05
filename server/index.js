const Koa = require('koa');
const {dev : devMiddleware} = require('./webpack-middleware');
const mount = require('koa-mount');
const router = require('./router');
const Db = require('./db');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const path = require('path');

const IMAGES_ROOT = 'server/images';

let app = new Koa();

Db.instance.start().then(() => {
  app
    .use(bodyParser())
    .use(mount('/images', koaStatic(IMAGES_ROOT)))
    .use(mount('/api', router.routes()))
    .use(mount('/api', router.allowedMethods()))
    .use(devMiddleware())
    .listen(process.env.PORT || 3000);
});
