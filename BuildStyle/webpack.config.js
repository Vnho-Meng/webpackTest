/**
 * webpack.config.js webpack的配置文件
 *    作用:指示 webpack 工作(配置webpack)
 *    所有构建工具都是基于 nodejs 平台 运行,模块化默认采用commonjs
 * @type {import("webpack").Configuration} // 补全 webpack 代码提示
 */

const { resolve } = require("path");

// webpack 配置
module.exports = {
  // 入口起点
  entry: "./src/index.js",
  output: {
    // 输出文件名
    filename: "built.js",
    // 输出路径
    path: resolve(__dirname, "build")
  },
  // loader 的配置
  module: {
    // 详细的 loader 配置
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些 loader
        use: [
          "style-loader", // 创建style标签,将js中的样式资源插入到里面后,再插入到head中生效
          "css-loader", // 将css文件变成commonjs模块加载js中,里面内容是样式字符串
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  // plugins 的配置
  plugins: [],
  // 模式
  mode: "development"
}