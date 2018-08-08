/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
// minify JS code
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// minify CSS code
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
  ],
  // production source-map, lighter than the one in webpack.dev
  devtool: 'source-map',
});
