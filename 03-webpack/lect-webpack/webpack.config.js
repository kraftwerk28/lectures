'use strict'

const HTMLWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  target: 'node',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config
