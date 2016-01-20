var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/components/App'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  module: {
    loaders: [
      // compile sass from source
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },

      // compile sass from source
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },

      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'js'),
          path.join(__dirname, 'js/components')
        ]
      }
    ]
  },

  plugins: [
    // new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
