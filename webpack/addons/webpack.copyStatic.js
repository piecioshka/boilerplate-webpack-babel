"use strict";

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "static", to: "static" }],
        }),
    ],
};
