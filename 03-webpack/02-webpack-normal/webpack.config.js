'use strict'

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    filename: 'mybundle.js',
    path: __dirname + '/bundle'
  }
}
