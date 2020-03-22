const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base.js');

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  }, 
});