const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: []
    },
    plugins: [
        //安裝package : npm i html-webpack-plugin -D
        //默認NULL參數： 將會創建一個空HTML,錊鄧飲入打包書初的資源
        new HtmlWebpackPlugin({
            //複製: "./index.html" 文件,並引入打包輸出的所有資源
            template: "./index.html"
        }),
    ],

    mode: "development"

}