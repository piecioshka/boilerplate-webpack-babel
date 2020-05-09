'use strict';

const path = require('path');
const root = path.join(__dirname, '..');

module.exports = (env) => {
    const config = {
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
    Object.assign(config, require(
        path.join(root, 'webpack', 'builds', `webpack.config.${build}`)
    ));

    // Addons
    const addons = getAddons(env);
    addons.forEach((addon) => Object.assign(config, require(
        path.join(root, 'webpack', 'addons', `webpack.${addon}`)
    )));

    console.log(`Build mode: \x1b[33m${config.mode}\x1b[0m`);

    return config;
};

function getAddons(env) {
    if (!env || !env.addons) return [];
    if (typeof env.addons === 'string') return [env.addons];
    return env.addons;
}
