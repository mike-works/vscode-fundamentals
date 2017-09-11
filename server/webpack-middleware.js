const webpack = require('webpack');
// @ts-ignore
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const devConfig = require('../webpack.config.dev');
// @ts-ignore
const compiler = webpack(devConfig);

function dev() {
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
    publicPath: '/',

    // custom headers
    headers: { 'X-Custom-Header': 'yes' },

    // options for formating the statistics
    stats: 'minimal',
  });
}

function hot() {
  return hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  });
}

module.exports = { dev, hot };