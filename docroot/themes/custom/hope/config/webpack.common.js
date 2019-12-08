const webpack = require('webpack');
const path = require('path');
var glob = require("glob");

const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/js/theme.js', './src/scss/style.scss']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../','build/'),
    publicPath: '/build'
  },
  module: {
    rules:[
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              },
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      }
    ]
  },
  externals: {
    Drupal: 'Drupal',
    drupalSettings: 'drupalSettings',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new StyleLintPlugin({
    //   configFile: '.stylelintrc',
    //   context: 'src'
    // })
  ]
}
