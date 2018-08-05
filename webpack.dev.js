/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // enable the inline version of source-map devtool to debug on development
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
});
