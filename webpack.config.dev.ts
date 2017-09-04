import plugins from './webpack/plugins';
import module from './webpack/module';
import * as webpack from 'webpack';
export default <webpack.Configuration> {
  entry: {
    app: [
      './client/index.tsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist",
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  
  devServer: {
    stats: 'minimal',
  },
  stats: 'minimal',
  module,
  plugins
};