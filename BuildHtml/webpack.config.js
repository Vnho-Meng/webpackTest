/**
 * @type {import("webpack").Configuration} // 补全 webpack 代码提示
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolve } = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: []
  },
  plugins: [
    // plugins 的配置
    // html-webpack-plugin
    // 功能:会默认创建一个空的HTML,自动引入打包输出的所有资源(JS/CSS)
    // 需求:需要有有结构的html
    new HtmlWebpackPlugin({
      // 复制 ./src/index.html,并自动引入css,less资源
      template: "./src/index.html"
    })
  ],
  mode: "development"
}