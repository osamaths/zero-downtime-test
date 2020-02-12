const path = require("path");
const webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

module.exports = env => {
  return {
    mode: "production",
    target: "node",
    externals: nodeExternals(),
    entry: {
      server: ["./index.js"]
    },
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../build"),
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      }]
    },
    plugins: [new webpack.NamedModulesPlugin()]
  }
}
