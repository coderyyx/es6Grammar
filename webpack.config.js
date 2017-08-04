var path = require('path');
var webpack = require('webpack');
var  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:['./src/js/grammar.js']
  ,
  output: { 
    path: path.join(__dirname, "dist"),
    filename: './js/bundle.js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  watch:true,
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,loader: 'babel-loader'
        // exclude: /node_modules/,
        // query: {presets: ['es2015', 'react']}
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'src/index.html',
      inject : true
    }),
  ]
};