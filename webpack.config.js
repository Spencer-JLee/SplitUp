const path = require('path');

module.exports = {
  entry: './frontend/splitup.jsx',
  output: {
    path: path.resolve(__dirname), 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/], 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'] 
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', '.jsx', '*'] 
  }
};