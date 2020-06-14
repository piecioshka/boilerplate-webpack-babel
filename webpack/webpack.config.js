'use strict';

const path = require('path');
const root = path.join(__dirname, '..');
const merge = require('webpack-merge');

module.exports = (env) => {
    let config = {
        entry: {
            main: path.join(root, 'src', 'main')
        },

        output: {
            filename: 'bundle.js',
            path: path.join(root, 'dist')
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }
            ]
        },

        plugins: [],

        devServer: {
            overlay: true,
        }
    };

    // Builds
    const build = env && env.production ? 'prod': 'dev';
    config = merge.smart(
        config,
        require(path.join(root, 'webpack', 'builds', `webpack.config.${build}`))
    );

    // Addons
    const addons = getAddons(env);
    addons.forEach((addon) => {
        config = merge.smart(
            config,
            require(path.join(root, 'webpack', 'addons', `webpack.${addon}`))
        )
    });

    console.log(`Build mode: \x1b[33m${config.mode}\x1b[0m`);

    return config;
};

function getAddons(env) {
    if (!env || !env.addons) return [];
    if (typeof env.addons === 'string') return [env.addons];
    return env.addons;
}
