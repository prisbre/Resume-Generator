const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');
const HtmlPdfPlugin = require('html-pdf-plugin')

module.exports = merge(common, {
  entry: path.join(src, 'js/index.prod.js'),
  output: {
    path: dist,
    publicPath: '',
    filename: 'js/[name].[hash].bundle.js',
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlPdfPlugin({
      url: path.join(dist, 'index.html'),
      path: path.join(dist, 'assets'),
      filename: 'resume.pdf',
      format: 'A4',
      printBackground: true
    })
  ]
});