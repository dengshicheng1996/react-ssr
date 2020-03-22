const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base');

module.exports = merge(webpackConfig, {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals()],
});
