/**
 *  @TITLE: webpack 初體驗
 *  @Version : webpack 4.41.6
 *  1.webpack 初始安裝
 *      cmd : npm init
 *      cmd : npm i webpack webpack -cli -g
 *      cmd : npm i webpack webpack-cli -D
 *      更換webpack版本 : npm i webpack@4.41.6 -D
 *      如果出現權限不足情況: (MAC)
 *      cmd : sudo chown -R $USER /usr/local/lib/node_modules
 *      cmd :  sudo chown -R $ USER / usr / local / bin
 *  2.此為 : index.js : webpack入口起點
 *          開發環境 : webpack ./WebpackTest01/src/index.js -o ./WebpackTest01/build --mode=development
 *          webpack會以 ./WebpackTest01/src/index.js 為入口文件開始打包,打包後輸出到 ./build/main.js
 *          生成環境 : webpack ./WebpackTest01/src/index.js -o ./WebpackTest01/build --mode=production
 *          node 執行測試 : node ./build/main.js
 *   3.結論
 *      1. webpack能處理js/json資源,不能處理 css/img等其他資源
 */

// import './index.css'
import data from './data.json'

console.log(data);

function add(a1, a2) {
    return a1 + a2;
}

console.log(add(1, 2));