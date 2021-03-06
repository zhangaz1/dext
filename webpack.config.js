const path = require('path');

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      path.resolve(__dirname, 'app', 'renderer', 'src', 'index'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'app', 'renderer', 'lib'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel'],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json'],
      },
    ],
  },
  target: 'electron',
};
