const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    // new StyleLintPlugin(),
    new BrowserSyncPlugin({
        host: 'local.woa.dd',
        port: 3000,
        proxy: 'http://local.woa.dd:8083/',
    })
  ],
  watchOptions: {
    aggregateTimeout: 500,
    poll: 800,
    ignored: /node_modules/
  }
})
