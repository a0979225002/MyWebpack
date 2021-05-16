/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/**\n *  1.webpack 初始安裝\n *      cmd : npm init\n *      cmd : npm i webpack webpack -cli -g\n *      cmd : npm i webpack webpack-cli -D\n *      如果出現權限不足情況: (MAC)\n *      cmd : sudo chown -R $USER /usr/local/lib/node_modules\n *      cmd :  sudo chown -R $ USER / usr / local / bin\n *  2.此為 : index.js : webpack入口起點\n *          開發環境 : webpack ./src/index.js -o ./build/built.js --mode=development\n *          webpack會以 ./WebpackTest01/src/index.js 為入口文件開始打包,打包後輸出到 ./build/built.js\n *          生成環境 :\n *\n *\n */\n\nfunction add(a1, a2) {\n    return a1 + a2;\n}\n\nconsole.log(add(1, 2));\n\n//# sourceURL=webpack://mywebpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;