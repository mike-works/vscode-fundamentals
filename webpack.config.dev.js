const plugins = require('./webpack/plugins');
const mod = require('./webpack/module');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './client/index.tsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },

  devServer: {
    stats: 'minimal',
  },
  stats: 'minimal',
  module: mod,
  plugins
};
