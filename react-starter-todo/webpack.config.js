'use strict'

module.exports =  {
    mode: 'development',
    entry: './src/main',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.sass$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.jsx', '.js', '.sass']
    }

  
}
