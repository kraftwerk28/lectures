'use strict'

module.exports = (env) => {
  const dev = env.prod || true
  const config = {
    mode: dev ? 'development' : 'production',
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
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          },
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

  if (dev) {
    config.devtool = 'source-map'
    config.devServer = {
      host: 'localhost',
      port: 8080,
      stats:'minimal',
      contentBase: 'dist'
    }
  }

  return config
}
