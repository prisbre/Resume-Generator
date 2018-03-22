const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = merge(common, {
  entry: path.join(src, 'js/index.prod.js'),
  output: {
    path: dist,
    publicPath: '',
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pdf$/,
        loader: 'file-loader?name=./assets/[name].[ext]'
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
  ]
});