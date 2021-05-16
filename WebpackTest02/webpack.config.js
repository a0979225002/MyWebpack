/**
 * webpack 配置文件
 *  作用: 只是webpack 做什麼事
 *  所有的建構工具都是由nodejs平台運行~模塊化採用commonjs
 */

//用來拼接絕對路徑方法
const {resolve} = require('path');

module.exports = {
    //webpack 配置
    //入口起點
    entry: './src/index.js',
    //輸出
    output: {
        //輸出文件名
        filename: "built.js",
        //輸出路徑
        //__dirname nodejs的變量，代表當前文件的目錄路徑
        path: resolve(__dirname,'build')
    }
}