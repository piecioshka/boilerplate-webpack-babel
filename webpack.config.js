'use strict';

const path = require('path');

module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve('./src/main.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./public/dist')
    },

    devtool: '#source-map',

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
