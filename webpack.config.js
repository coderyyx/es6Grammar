var path = require('path');
var webpack = require('webpack');
var  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:['./src/js/grammar.js','./src/js/variable.js']
  ,
  output: { 
    path: path.join(__dirname, "dist/js/"),
    publicPath:'./js',
    filename: 'bundle.js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  watch:true,
  devtool: 'eval-source-map',
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
      title:'MyIndexTitle',
      filename: 'ES6GRAMMAR/index.html',
      template:'./src/index.html',
      inject: 'body',
      hash:true
    }),
  ]
};