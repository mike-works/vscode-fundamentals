import * as Koa from 'koa';
import {dev as devMiddleware} from './webpack-middleware';
import * as mount from 'koa-mount';
import router from './router';
import * as Db from './db';
import * as koaStatic from 'koa-static';
import * as bodyParser from 'koa-bodyparser';

import * as path from 'path';

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
