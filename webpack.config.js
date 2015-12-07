module.exports = {
  entry: './app/entry.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=1000'
      }
    ]
  }
};