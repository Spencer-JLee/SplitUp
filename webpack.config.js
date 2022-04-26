const path = require('path');

module.exports = {
  entry: './frontend/splitup.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), 
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
        },
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', '.jsx', '*'] 
  }
};