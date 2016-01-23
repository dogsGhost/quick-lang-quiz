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

      // compile sass from source
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },

      // json
      {
        test: /\.json$/,
        loaders: ['json-loader']
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
