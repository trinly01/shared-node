const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    globalObject: 'this',
    path: path.resolve('dist'),
    filename: 'index.js',
    library: 'sharedNode',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
