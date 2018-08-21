// const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  rules: [
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    { test: /\.tsx?$/, loader: 'awesome-typescript-loader'},

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader',
          options: {
            includePaths: ['node_modules/muicss/lib/sass']
          }
        }
      ]
    }
  ]
};
