/* eslint-disable import/no-extraneous-dependencies */
// cleans/removes build folder(s) before building
const CleanWebpackPlugin = require('clean-webpack-plugin');
/* simplifies creation of HTML files to serve your webpack bundles.
This is especially useful for webpack bundles that include a
hash in the filename which changes every compilation
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// added to be used with HotModuleReplacementPlugin later on
const webpack = require('webpack');


module.exports = {
  entry: {
    // ready for React
    app: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      // JS-JSX loader with babel
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
        },
        exclude: /(node_modules)/,
      },
      // CSS loaders
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // Files loader
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // Fonts loader
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // Data Loaders
      // {
      //   test: /\.(csv|tsv)$/,
      //   use: [
      //     'csv-loader'
      //   ]
      // },
      // {
      //   test: /\.xml$/,
      //   use: [
      //     'xml-loader'
      //   ]
      // }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Weight Tracker App',
      template: './src/index.html',
    }),
    // It allows all kinds of modules to be updated at runtime without the need of a full refresh
    new webpack.HotModuleReplacementPlugin(),
  ],
};
