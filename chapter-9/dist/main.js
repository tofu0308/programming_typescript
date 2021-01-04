/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
eval("\n{\n    var model_1 = { url: window.location.href };\n    var input_1 = document.createElement('input');\n    input_1.classList.add('Input', 'URLInput');\n    input_1.addEventListener('change', function () {\n        model_1.url = input_1.value.toUpperCase();\n    });\n    document.body.appendChild(input_1);\n    console.log(model_1);\n    // document.querySelector('Element').value\n    // オブジェクトは 'null' である可能性があります。ts(2531)\n}\n\n\n//# sourceURL=webpack://chapter-9/./src/index.ts?");
/******/ })()
;