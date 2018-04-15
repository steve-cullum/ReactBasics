import HTMLWebpackPlugin from 'html-webpack-plugin';

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/www/index.html`,
  filename: 'index.html',
  inject: 'body',
});
export const entry = `${__dirname}/www/index.js`;
export const module = {
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
};
export const output = {
  filename: 'transformed.js',
  path: `${__dirname}/build`,
};
export const plugins = [HTMLWebpackPluginConfig];
