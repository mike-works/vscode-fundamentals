const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = require('./extract-sass');
const webpack = require('webpack');

module.exports = [
  new HtmlWebpackPlugin({
    template: './client/index.ejs',
    apiEndpoint: process.env.API_ENDPOINT || 'https://localhost:3000'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(false),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  extractSass
];