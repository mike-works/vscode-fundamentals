const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const extractSass = require('./extract-sass');
const webpack = require('webpack');

let plugins = [
  new HtmlWebpackPlugin({
    template: './client/index.ejs',
    title: "Frontend Grocer",
    apiEndpoint: process.env.API_ENDPOINT || 'https://localhost:3000'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(false),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = plugins;