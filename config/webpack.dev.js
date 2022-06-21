const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};

module.exports = merge(commonConfig, devConfig);
