const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "index.js",
    publicPath: "/"
  }
};

module.exports = merge(commonConfig, prodConfig);
