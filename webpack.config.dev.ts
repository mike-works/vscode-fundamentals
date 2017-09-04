import plugins from './webpack/plugins';
import module from './webpack/module';

export default {
  entry: {
    app: [
      './client/index.tsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },

  module,
  plugins
};