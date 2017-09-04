import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new ExtractTextPlugin({
  filename: '[name]-[contenthash].css'
});