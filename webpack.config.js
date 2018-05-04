const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const NotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: 'development',
  entry: [__dirname + '/src/index.tsx'],
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.css'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new NotifierPlugin({
      alwaysNotify: true,
      skipFirstNotification: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.template.ejs',
      inject: 'body'
    })
  ],
  performance: { hints: false }
};
