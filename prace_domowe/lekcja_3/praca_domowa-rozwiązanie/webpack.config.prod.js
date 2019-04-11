const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distDir
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
