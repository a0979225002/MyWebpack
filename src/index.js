/**
 *  1.webpack 初始安裝
 *      cmd : npm init
 *      cmd : npm i webpack webpack -cli -g
 *      cmd : npm i webpack webpack-cli -D
 *      如果出現權限不足情況: (MAC)
 *      cmd : sudo chown -R $USER /usr/local/lib/node_modules
 *      cmd :  sudo chown -R $ USER / usr / local / bin
 *  2.此為 : index.js : webpack入口起點
 *          開發環境 : webpack ./src/index.js -o ./build/built.js --mode=development
 *          webpack會以 ./src/index.js 為入口文件開始打包,打包後輸出到 ./build/built.js
 *          生成環境 :
 */

function add(a1, a2) {
    return a1 + a2;
}

console.log(add(1, 2));