/**
 * Created by weineel on 2017/3/13.
 */

const webpack = require('webpack');
const Path = require('path');

module.exports = {
    entry: Path.resolve(__dirname, 'asset/js/index.js'),
    output: {
        path: Path.resolve(__dirname, 'asset/js'),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};
