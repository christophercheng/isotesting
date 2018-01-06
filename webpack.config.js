const path = require('path');

module.exports = {
  context: __dirname,
  entry: './client-index.js',
  output: {
    path: path.join(__dirname, '/assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'stage-0', 'react'],
        },
      },
    ],
  },
};

