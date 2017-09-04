import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import extractSass from './extract-sass';
import * as webpack from 'webpack';

export default [
  new HtmlWebpackPlugin({
    template: './client/index.ejs',
    apiEndpoint: process.env.API_ENDPOINT || 'https://localhost:3000'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(false),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  extractSass
];