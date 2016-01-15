module.exports = {
  entry: './js/components/App.js',

  output: {
    path: './public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // compile sass from source
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
