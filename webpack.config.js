'use strict';

module.exports = {
    entry: {
        main: './src/main.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: './public/dist'
    },

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
