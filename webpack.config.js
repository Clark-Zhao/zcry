var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'zCry.js',
    library: 'zCry',
    libraryTarget: 'umd'
  },

  resolve: {
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src'),
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  },

  babel: {
    presets: ['es2015', "stage-2"],
    plugins: ["transform-runtime"]
  },

  eslint: {
    configFile: './.eslintrc.js'
  }
}
