const plugins = require('./webpack/plugins');
const mod = require('./webpack/module');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  mode: 'development',
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
