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
        path: resolve(__dirname, 'build')
    },
    //loader的配置
    module: {
        rules: [
            //詳細loader配置
            //不同文件需要不同loader處理
            {
                //use陣列中loader執行順序,從最後一個index 往前執行,例如： 'css-loader' 執行完,才會執行 'style-loader'
                //匹配哪些文件,正則表達,匹配所有以css檔名
                test: /\.css$/,
                use: [
                    //創建style標籤,將js中的樣式資源插入進行,添加到head中生效
                    //需下載package: npm i style-loader
                    'style-loader',
                    //將css文件變成commonjs模塊載入js,裡面的內視樣式字串
                    //需下載package: npm i css-loader
                    'css-loader'
                ]
            },
            //less打包,自動轉換回css打包
            //每一種loader只能執行一種檔案,因此與上面解析css文件配置即使略相同,還是無法同時使用
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //需下載package:
                    // 1.npm i less-loader -D
                    // 2.npm i less -D
                    'less-loader',
                ]
            }
        ],
    },
    //plugins配置
    plugins: [
        //詳細plugins配置
    ],
    //打包模式
    mode: "development",//開發模式
    // mode: "production",//生產模式,會打包壓縮,會比較難以閱讀
}