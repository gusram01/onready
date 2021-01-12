const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: !process.env.PROD ? 'development' : 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: '/',
  },
  devServer: {
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: './index.html',
    }),
  ],
};
