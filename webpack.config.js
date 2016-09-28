var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
	  // index : ['./es6.js'],
    // vendors:['react','react-dom','monkeyui']
    es6Grammar:'./es6Grammar.js'
  },
  output: { 
    path: path.join(__dirname, "dist"),
    filename: '/js/[name].js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  watch:true,
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  },
  plugins: [
  ]
};