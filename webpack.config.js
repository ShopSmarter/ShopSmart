const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
   //starting point from which all dependencies are collected
  entry: './client/index.js',
  //where JS and other files are stored during build process
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  mode : process.env.NODE_ENV,
  module: {
    rules: [
      {
        //check for any js/jsx file names
        test: /\.(js|jsx)$/,
        //exclude node_modules from rule set
        exclude: /node_modules/,
        use: {
          //helper extension to help webpack deal with file extensions
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      }
    ]
  },
  // devtool: 'eval-source-map',
  devServer: {
    publicPath: '/build/',
    port: 8080,
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3005/',
      },
    ],
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './index.html'
  //   })
  // ]

}