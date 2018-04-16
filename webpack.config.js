const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/www/index.html`,
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: `${__dirname}/www/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'transformed.js',
    path: `${__dirname}/build`,
  },
  plugins: [HTMLWebpackPluginConfig],
  mode: 'development',
};
