const path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
const src = path.join(__dirname, 'src');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: path.join(src, 'js/index.dev.js'),
  output: {
    path: src,
    publicPath: '',
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:80'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: process.env.HOST,  // 'localhost'
    port: 80,   // 8080
    hotOnly: true,
    inline: true, // 监控js变化
    overlay: {
      errors: true,
      warnings: true,
    }
  },
});