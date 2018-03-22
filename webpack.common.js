const path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');
const fs = require('fs');
const info = JSON.parse(fs.readFileSync('./info.json', 'utf-8'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            query: {
              exports: false,
              debug: false,
              compileDebug: false,
              cache: true,
              data: info
            }
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              // // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2)\w*/,
        loader: 'url-loader?limit=80000'
      },
      {
        test: /\.(png|svg)$/,
        loader: 'url-loader?limit=8192&name=./assets/[hash].[ext]'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('./assets/css/style.css'),
    new HtmlWebpackPlugin({
      title: 'Resume',
      filename: 'index.html',
      template: './src/templates/index.pug',
      inject: 'body', //js插入的位置
      hash: true,     //为静态资源生成hash值
      minify: {
        removeComments: true,     // 移除注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
  ]
}