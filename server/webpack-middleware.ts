import * as webpack from 'webpack';
import * as middleware from 'koa-webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import devConfig from '../webpack.config.dev';

const compiler = webpack(devConfig);

export function dev() {
  return devMiddleware(compiler, {
    // display no info to console (only warnings and errors)
    // noInfo: true,

    // display nothing to the console
    // quiet: true,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    // lazy: true,
    hot: true,
    // watch options (only lazy: false)
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: true
    // },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/",

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    // options for formating the statistics
    stats: 'minimal',
  });
}

export function hot() {
  return hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  });
}