import * as webpack from 'webpack';
import * as middleware from 'koa-webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import devConfig from '../webpack.config.dev';

const compile = webpack(devConfig);

export function dev() {
  return devMiddleware(compile, {
    // display no info to console (only warnings and errors)
    noInfo: false,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    // lazy: true,

    hot: true,
    // watch options (only lazy: false)
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/",

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    // options for formating the statistics
    stats: {
      colors: true
    }
  });
}

export function hot() {
  return hotMiddleware(compile, {
    log: console.log,
    path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  });
}