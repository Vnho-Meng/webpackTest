/**
 * index.js:webpack入口起点文件
 * 1.运行指令:
 *    开发环境:webpack ./src/index.js -o ./build --mode=development
 *    webpack会以 ./src/index.js 为入口文件开始打包,打包后输出到 ./build/built.js
 *    打包环境为开发环境
 *    生产环境:webpack ./src/index.js -o ./build --mode=production
 *    webpack会以 ./src/index.js 为入口文件开始打包,打包后输出到 ./build/built.js
 *    打包环境为生产环境
 * 
 * 只可解析js文件和json文件
*/
import data from './data.json'
console.log(data);
function add (x, y) {
  return x + y;
}

console.log(add(1, 2));