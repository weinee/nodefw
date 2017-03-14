/**
 * Created by weineel on 2017/3/13.
 */

const webpack = require('webpack');
const Path = require('path');

module.exports = {
    entry: Path.resolve(__dirname, 'asset/js/index.js'),
    output: {
        path: Path.resolve(__dirname, 'asset/js'), // 打包后的绝对路径
        publicPath: "http://localhost:8080/assets/", // 生成资源的url路径
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.html$/, loader: 'html-loader?interpolate'},
            {test: /\.png$/, loader: 'file-loader'},
            {test: /\.jpg$/, loader: 'file-loader'}
        ]
    }
};
