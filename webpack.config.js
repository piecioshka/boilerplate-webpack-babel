'use strict';

let path = require('path');

module.exports = {
    entry: {
        main: path.resolve('./src/main.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./public/dist')
    },

    devtool: '#cheap-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
