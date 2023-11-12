"use strict";

const common = require("./webpack.config.common");

module.exports = (env) => ({
    ...common(env),
    mode: "production",
});
