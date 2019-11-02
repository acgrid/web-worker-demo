module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.(j|t)s$/,
          use: { loader: 'worker-loader', options: { inline: true } }
        }
      ]
    }
  }
}
