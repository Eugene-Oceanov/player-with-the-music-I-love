/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #dadada;\r\n}\r\n\r\n.wrapper {\r\n    width: 25vw;\r\n    height: 90vh;\r\n    position: relative;\r\n    transition: .3s ease;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 35px;\r\n    /* overflow: hidden; */\r\n    z-index: 1;\r\n}\r\n\r\n.wrapper-open-list {\r\n    width: calc(44vw - 40px);\r\n}\r\n\r\n.player {\r\n    position: relative;\r\n    width: 25vw;\r\n    height: 100%;\r\n    padding-bottom: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background: #fff;\r\n    border-radius: 35px;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\r\n    z-index: 2;\r\n}\r\n\r\n.visual-block {\r\n    width: 100%;\r\n    height: 55%;\r\n    background: #000;\r\n}\r\n\r\n.song-info {\r\n    padding: 0 15px;\r\n}\r\n\r\n.title-wrapper,\r\n.author-wrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n.song-title {\r\n    width: fit-content;\r\n    font-size: 44px;\r\n    font-weight: 700;\r\n    white-space: nowrap;\r\n}\r\n\r\n.song-author {\r\n    width: fit-content;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    white-space: nowrap;\r\n}\r\n\r\n.album-info {\r\n    font-size: 14px;\r\n}\r\n\r\n.player-panel {\r\n    padding: 0 15px;\r\n}\r\n\r\n.progress-bar-outer {\r\n    width: 100%;\r\n    height: 8px;\r\n    padding: 2px;\r\n    background: #ccc;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.progress-bar-inner {\r\n    height: 4px;\r\n    width: 0;\r\n    background: #111;\r\n    border-radius: 3px;\r\n}\r\n\r\n.song-time {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.song-time>p {\r\n    font-size: 14px;\r\n    color: #333;\r\n}\r\n\r\n.controls {\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 30px;\r\n}\r\n\r\n.controls svg {\r\n    cursor: pointer;\r\n}\r\n\r\n.pause {\r\n    display: none;\r\n}\r\n\r\n.prev {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.change-volume__input {\r\n    height: 10px;\r\n    -webkit-appearance: none;\r\n    margin: 10px 0;\r\n    width: 100%;\r\n}\r\n\r\n.change-volume__input:focus {\r\n    outline: none;\r\n}\r\n\r\n.change-volume__input::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 8px;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    box-shadow: 0px 0px 0px #353535;\r\n    background: #cecece;\r\n    border-radius: 5px;\r\n    border: 0px solid #f3c846;\r\n}\r\n\r\n.change-volume__input::-webkit-slider-thumb {\r\n    height: 11px;\r\n    width: 11px;\r\n    border-radius: 15px;\r\n    background: #000000;\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    margin-top: -1px;\r\n}\r\n\r\n@keyframes rollText {\r\n    10% {\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    50% {\r\n        transform: translate(var(--rollText), 0);\r\n    }\r\n\r\n    60% {\r\n        transform: translate(var(--rollText), 0);\r\n    }\r\n\r\n    100% {\r\n        transform: translate(0, 0);\r\n    }\r\n}\r\n\r\n.open-list-btn {\r\n    position: absolute;\r\n    right: -15px;\r\n    top: calc(50% - 25px);\r\n    width: 30px;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\r\n    cursor: pointer;\r\n    z-index: 10;\r\n}\r\n\r\n.opened .open-list-btn-triangle {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.player-list {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 20vw;\r\n    padding: 25px 10px 0 60px;\r\n    padding-top: 25px;\r\n    border-radius: 35px;\r\n    background: #fff;\r\n    z-index: 0;\r\n}\r\n\r\n.list {\r\n    width: 100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n.list-search-input {\r\n    width: 100%;\r\n    padding: 5px 10px;\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.list-item {\r\n    padding: 2px 5px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.list-item-title {\r\n    font-weight: 700;\r\n    white-space: nowrap;\r\n}\r\n\r\n.list-item-author {\r\n    font-size: 10px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.list-item:hover {\r\n    background: #ccc;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://player/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://player/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://player/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/music/Bring Me the Horizon feat YUNGBLUD - Obey.mp3":
/*!************************************************************************!*\
  !*** ./src/assets/music/Bring Me the Horizon feat YUNGBLUD - Obey.mp3 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Bring Me the Horizon feat YUNGBLUD - Obey.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Bring_Me_the_Horizon_feat_YUNGBLUD_-_Obey.mp3?");

/***/ }),

/***/ "./src/assets/music/Carpenter Brut feat. Yann Ligner - Maniac.mp3":
/*!************************************************************************!*\
  !*** ./src/assets/music/Carpenter Brut feat. Yann Ligner - Maniac.mp3 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Carpenter Brut feat. Yann Ligner - Maniac.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Carpenter_Brut_feat._Yann_Ligner_-_Maniac.mp3?");

/***/ }),

/***/ "./src/assets/music/Electric Callboy - Back in the Bizz.mp3":
/*!******************************************************************!*\
  !*** ./src/assets/music/Electric Callboy - Back in the Bizz.mp3 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Electric Callboy - Back in the Bizz.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Electric_Callboy_-_Back_in_the_Bizz.mp3?");

/***/ }),

/***/ "./src/assets/music/Enter Shikari - The King.mp3":
/*!*******************************************************!*\
  !*** ./src/assets/music/Enter Shikari - The King.mp3 ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Enter Shikari - The King.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Enter_Shikari_-_The_King.mp3?");

/***/ }),

/***/ "./src/assets/music/Fitz and The Tantrums - I Just Wanna Shine.mp3":
/*!*************************************************************************!*\
  !*** ./src/assets/music/Fitz and The Tantrums - I Just Wanna Shine.mp3 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Fitz and The Tantrums - I Just Wanna Shine.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Fitz_and_The_Tantrums_-_I_Just_Wanna_Shine.mp3?");

/***/ }),

/***/ "./src/assets/music/Good Shoes - Under Control.mp3":
/*!*********************************************************!*\
  !*** ./src/assets/music/Good Shoes - Under Control.mp3 ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Good Shoes - Under Control.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Good_Shoes_-_Under_Control.mp3?");

/***/ }),

/***/ "./src/assets/music/Machine Gun Kelly feat YUNGBLUD feat Travis Barker - I Think Im Okay.mp3":
/*!***************************************************************************************************!*\
  !*** ./src/assets/music/Machine Gun Kelly feat YUNGBLUD feat Travis Barker - I Think Im Okay.mp3 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Machine Gun Kelly feat YUNGBLUD feat Travis Barker - I Think Im Okay.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Machine_Gun_Kelly_feat_YUNGBLUD_feat_Travis_Barker_-_I_Think_Im_Okay.mp3?");

/***/ }),

/***/ "./src/assets/music/Perturbator - Future Club.mp3":
/*!********************************************************!*\
  !*** ./src/assets/music/Perturbator - Future Club.mp3 ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Perturbator - Future Club.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Perturbator_-_Future_Club.mp3?");

/***/ }),

/***/ "./src/assets/music/Slaves - Sockets.mp3":
/*!***********************************************!*\
  !*** ./src/assets/music/Slaves - Sockets.mp3 ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/Slaves - Sockets.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/Slaves_-_Sockets.mp3?");

/***/ }),

/***/ "./src/assets/music/The Foxboro Hot Tubs - Mother Mary.mp3":
/*!*****************************************************************!*\
  !*** ./src/assets/music/The Foxboro Hot Tubs - Mother Mary.mp3 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/The Foxboro Hot Tubs - Mother Mary.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/The_Foxboro_Hot_Tubs_-_Mother_Mary.mp3?");

/***/ }),

/***/ "./src/assets/music/The Killers - Caution.mp3":
/*!****************************************************!*\
  !*** ./src/assets/music/The Killers - Caution.mp3 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/The Killers - Caution.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/The_Killers_-_Caution.mp3?");

/***/ }),

/***/ "./src/assets/music/The Police - Every Breathe You Take.mp3":
/*!******************************************************************!*\
  !*** ./src/assets/music/The Police - Every Breathe You Take.mp3 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/music/The Police - Every Breathe You Take.mp3\");\n\n//# sourceURL=webpack://player/./src/assets/music/The_Police_-_Every_Breathe_You_Take.mp3?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://player/./src/assets/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://player/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listLogic: () => (/* binding */ listLogic)\n/* harmony export */ });\n/* harmony import */ var _musicBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./musicBase.js */ \"./src/js/musicBase.js\");\n/* harmony import */ var _playerLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerLogic.js */ \"./src/js/playerLogic.js\");\n\r\n\r\n\r\nconst listLogic = {\r\n    list: document.querySelector(\".list\"),\r\n\r\n    getList: function (arr) {\r\n        for (let i = 0; i < arr.length; i++) {\r\n            const listItem = document.createElement(\"DIV\");\r\n            listItem.classList.add(\"list-item\");\r\n            listItem.innerHTML = `<p class=\"list-item-title\">${arr[i].title}</p>\r\n                                    <p class=\"list-item-author\">${arr[i].author}</p>`;\r\n            this.list.append(listItem);\r\n            listItem.addEventListener(\"click\", () => {\r\n                _playerLogic_js__WEBPACK_IMPORTED_MODULE_1__.playerLogic.currentSong = i;\r\n                _playerLogic_js__WEBPACK_IMPORTED_MODULE_1__.playerLogic.musicInit(arr[i]);\r\n                // if (!playerLogic.isPlayed) {\r\n                _playerLogic_js__WEBPACK_IMPORTED_MODULE_1__.playerLogic.musicPlay();\r\n                console.log(_playerLogic_js__WEBPACK_IMPORTED_MODULE_1__.playerLogic.currentSong)\r\n                // }\r\n                // else playerLogic.musicPause();\r\n            })\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://player/./src/js/list.js?");

/***/ }),

/***/ "./src/js/musicBase.js":
/*!*****************************!*\
  !*** ./src/js/musicBase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   musicBase: () => (/* binding */ musicBase)\n/* harmony export */ });\n/* harmony import */ var _assets_music_Enter_Shikari_The_King_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/music/Enter Shikari - The King.mp3 */ \"./src/assets/music/Enter Shikari - The King.mp3\");\n/* harmony import */ var _assets_music_Good_Shoes_Under_Control_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/music/Good Shoes - Under Control.mp3 */ \"./src/assets/music/Good Shoes - Under Control.mp3\");\n/* harmony import */ var _assets_music_Slaves_Sockets_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/music/Slaves - Sockets.mp3 */ \"./src/assets/music/Slaves - Sockets.mp3\");\n/* harmony import */ var _assets_music_The_Foxboro_Hot_Tubs_Mother_Mary_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/music/The Foxboro Hot Tubs - Mother Mary.mp3 */ \"./src/assets/music/The Foxboro Hot Tubs - Mother Mary.mp3\");\n/* harmony import */ var _assets_music_The_Police_Every_Breathe_You_Take_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/music/The Police - Every Breathe You Take.mp3 */ \"./src/assets/music/The Police - Every Breathe You Take.mp3\");\n/* harmony import */ var _assets_music_Bring_Me_the_Horizon_feat_YUNGBLUD_Obey_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/music/Bring Me the Horizon feat YUNGBLUD - Obey.mp3 */ \"./src/assets/music/Bring Me the Horizon feat YUNGBLUD - Obey.mp3\");\n/* harmony import */ var _assets_music_Fitz_and_The_Tantrums_I_Just_Wanna_Shine_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/music/Fitz and The Tantrums - I Just Wanna Shine.mp3 */ \"./src/assets/music/Fitz and The Tantrums - I Just Wanna Shine.mp3\");\n/* harmony import */ var _assets_music_The_Killers_Caution_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/music/The Killers - Caution.mp3 */ \"./src/assets/music/The Killers - Caution.mp3\");\n/* harmony import */ var _assets_music_Electric_Callboy_Back_in_the_Bizz_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/music/Electric Callboy - Back in the Bizz.mp3 */ \"./src/assets/music/Electric Callboy - Back in the Bizz.mp3\");\n/* harmony import */ var _assets_music_Carpenter_Brut_feat_Yann_Ligner_Maniac_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/music/Carpenter Brut feat. Yann Ligner - Maniac.mp3 */ \"./src/assets/music/Carpenter Brut feat. Yann Ligner - Maniac.mp3\");\n/* harmony import */ var _assets_music_Machine_Gun_Kelly_feat_YUNGBLUD_feat_Travis_Barker_I_Think_Im_Okay_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/music/Machine Gun Kelly feat YUNGBLUD feat Travis Barker - I Think Im Okay.mp3 */ \"./src/assets/music/Machine Gun Kelly feat YUNGBLUD feat Travis Barker - I Think Im Okay.mp3\");\n/* harmony import */ var _assets_music_Perturbator_Future_Club_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/music/Perturbator - Future Club.mp3 */ \"./src/assets/music/Perturbator - Future Club.mp3\");\n/* harmony import */ var _assets_covers_Nothing_Is_True_Everything_Is_Possible_2020_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/covers/Nothing Is True & Everything Is Possible (2020).png */ \"./src/assets/covers/Nothing Is True & Everything Is Possible (2020).png\");\n/* harmony import */ var _assets_covers_No_Hope_No_Future_2010_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/covers/No Hope, No Future (2010).png */ \"./src/assets/covers/No Hope, No Future (2010).png\");\n/* harmony import */ var _assets_covers_Are_You_Satisfied_2015_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/covers/Are You Satisfied (2015).png */ \"./src/assets/covers/Are You Satisfied (2015).png\");\n/* harmony import */ var _assets_covers_Stop_Drop_and_Roll_2008_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/covers/Stop Drop and Roll (2008).png */ \"./src/assets/covers/Stop Drop and Roll (2008).png\");\n/* harmony import */ var _assets_covers_Synchronicity_1983_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/covers/Synchronicity (1983).png */ \"./src/assets/covers/Synchronicity (1983).png\");\n/* harmony import */ var _assets_covers_POST_HUMAN_SURVIVAL_HORROR_2020_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/covers/POST HUMAN SURVIVAL HORROR (2020).png */ \"./src/assets/covers/POST HUMAN SURVIVAL HORROR (2020).png\");\n/* harmony import */ var _assets_covers_All_the_Feels_2016_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/covers/All the Feels (2016).png */ \"./src/assets/covers/All the Feels (2016).png\");\n/* harmony import */ var _assets_covers_Imploding_the_Mirage_2020_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/covers/Imploding the Mirage (2020).png */ \"./src/assets/covers/Imploding the Mirage (2020).png\");\n/* harmony import */ var _assets_covers_The_Scene_2017_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/covers/The Scene (2017).png */ \"./src/assets/covers/The Scene (2017).png\");\n/* harmony import */ var _assets_covers_Maniac_2020_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/covers/Maniac (2020).png */ \"./src/assets/covers/Maniac (2020).png\");\n/* harmony import */ var _assets_covers_Hotel_Diablo_2020_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/covers/Hotel Diablo (2020).png */ \"./src/assets/covers/Hotel Diablo (2020).png\");\n/* harmony import */ var _assets_covers_Dangerous_Days_2014_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/covers/Dangerous Days (2014).png */ \"./src/assets/covers/Dangerous Days (2014).png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst musicBase = [\r\n    {\r\n        id: 0,\r\n        title: \"The King\",\r\n        author: \"Enter Shikari\",\r\n        album: \"Nothing Is True & Everything Is Possible\",\r\n        year: 2020,\r\n        file: _assets_music_Enter_Shikari_The_King_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        cover: _assets_covers_Nothing_Is_True_Everything_Is_Possible_2020_png__WEBPACK_IMPORTED_MODULE_12__\r\n    },\r\n    {\r\n        id: 1,\r\n        title: \"Under Control\",\r\n        author: \"Good Shoes\",\r\n        album: \"No Hope, No Future\",\r\n        year: 2010,\r\n        file: _assets_music_Good_Shoes_Under_Control_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        cover: _assets_covers_No_Hope_No_Future_2010_png__WEBPACK_IMPORTED_MODULE_13__\r\n    },\r\n    {\r\n        id: 2,\r\n        title: \"Sockets\",\r\n        author: \"Slaves\",\r\n        album: \"Are You Satisfied?\",\r\n        year: 2015,\r\n        file: _assets_music_Slaves_Sockets_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        cover: _assets_covers_Are_You_Satisfied_2015_png__WEBPACK_IMPORTED_MODULE_14__\r\n    },\r\n    {\r\n        id: 3,\r\n        title: \"Mother Mary\",\r\n        author: \"The Foxboro Hot Tubs\",\r\n        album: \"Stop Drop and Roll!!!\",\r\n        year: 2008,\r\n        file: _assets_music_The_Foxboro_Hot_Tubs_Mother_Mary_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n        cover: _assets_covers_Stop_Drop_and_Roll_2008_png__WEBPACK_IMPORTED_MODULE_15__\r\n    },\r\n    {\r\n        id: 4,\r\n        title: \"Every Breath You Take\",\r\n        author: \"The Police\",\r\n        album: \"Synchronicity\",\r\n        year: 1983,\r\n        file: _assets_music_The_Police_Every_Breathe_You_Take_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        cover: _assets_covers_Synchronicity_1983_png__WEBPACK_IMPORTED_MODULE_16__\r\n    },\r\n    {\r\n        id: 5,\r\n        title: \"Obey\",\r\n        author: \"Bring me the Horizon feat. YUNGBLUD\",\r\n        album: \"POST HUMAN: SURVIVAL HORROR\",\r\n        year: 2020,\r\n        file: _assets_music_Bring_Me_the_Horizon_feat_YUNGBLUD_Obey_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n        cover: _assets_covers_POST_HUMAN_SURVIVAL_HORROR_2020_png__WEBPACK_IMPORTED_MODULE_17__\r\n    },\r\n    {\r\n        id: 6,\r\n        title: \"I Just Wanna Shine\",\r\n        author: \"Fitz and The Tantrums\",\r\n        album: \"All the Feels\",\r\n        year: 2019,\r\n        file: _assets_music_Fitz_and_The_Tantrums_I_Just_Wanna_Shine_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n        cover: _assets_covers_All_the_Feels_2016_png__WEBPACK_IMPORTED_MODULE_18__\r\n    },\r\n    {\r\n        id: 7,\r\n        title: \"Caution\",\r\n        author: \"The Killers\",\r\n        album: \"Imploding the Mirage\",\r\n        year: 2020,\r\n        file: _assets_music_The_Killers_Caution_mp3__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n        cover: _assets_covers_Imploding_the_Mirage_2020_png__WEBPACK_IMPORTED_MODULE_19__\r\n    },\r\n    {\r\n        id: 8,\r\n        title: \"Back in the Bizz\",\r\n        author: \"Electric Callboy\",\r\n        album: \"The Scene\",\r\n        year: 2017,\r\n        file: _assets_music_Electric_Callboy_Back_in_the_Bizz_mp3__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n        cover: _assets_covers_The_Scene_2017_png__WEBPACK_IMPORTED_MODULE_20__\r\n    },\r\n    {\r\n        id: 9,\r\n        title: \"Maniac\",\r\n        author: \"Carpenter Brut feat. Yann Ligner\",\r\n        album: \"Maniac\",\r\n        year: 2020,\r\n        file: _assets_music_Carpenter_Brut_feat_Yann_Ligner_Maniac_mp3__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\r\n        cover: _assets_covers_Maniac_2020_png__WEBPACK_IMPORTED_MODULE_21__\r\n    },\r\n    {\r\n        id: 10,\r\n        title: \"I Think I'm OKAY\",\r\n        author: \"Machine Gun Kelly feat. YUNGBLUD feat. Travis Barker\",\r\n        album: \"Hotel Diablo\",\r\n        year: 2019,\r\n        file: _assets_music_Machine_Gun_Kelly_feat_YUNGBLUD_feat_Travis_Barker_I_Think_Im_Okay_mp3__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\r\n        cover: _assets_covers_Hotel_Diablo_2020_png__WEBPACK_IMPORTED_MODULE_22__\r\n    },\r\n    {\r\n        id: 11,\r\n        title: \"Future Club\",\r\n        author: \"Perturbator\",\r\n        album: \"Dangerous Days\",\r\n        year: 2014,\r\n        file: _assets_music_Perturbator_Future_Club_mp3__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n        cover: _assets_covers_Dangerous_Days_2014_png__WEBPACK_IMPORTED_MODULE_23__\r\n    },\r\n];\n\n//# sourceURL=webpack://player/./src/js/musicBase.js?");

/***/ }),

/***/ "./src/js/playerLogic.js":
/*!*******************************!*\
  !*** ./src/js/playerLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerLogic: () => (/* binding */ playerLogic)\n/* harmony export */ });\n/* harmony import */ var _musicBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./musicBase */ \"./src/js/musicBase.js\");\n\r\n\r\nconst playerLogic = {\r\n    audio: document.querySelector(\".audio\"),\r\n    visualBlock: document.querySelector(\".visual-block\"),\r\n    titleWrapper: document.querySelector(\".title-wrapper\"),\r\n    songTitle: document.querySelector(\".song-title\"),\r\n    authorWrapper: document.querySelector(\".author-wrapper\"),\r\n    songAuthor: document.querySelector(\".song-author\"),\r\n    albumInfo: document.querySelector(\".album-info\"),\r\n    progressOuter: document.querySelector(\".progress-bar-outer\"),\r\n    progressInner: document.querySelector(\".progress-bar-inner\"),\r\n    songTimer: document.querySelector(\".timer\"),\r\n    songDuration: document.querySelector(\".duration\"),\r\n    playBtn: document.querySelector(\".play\"),\r\n    pauseBtn: document.querySelector(\".pause\"),\r\n    duration: null,\r\n    currentSong: 0,\r\n    isPlayed: false,\r\n\r\n    musicInit: function (item) {\r\n        this.audio.src = item.file;\r\n        this.songTitle.innerText = item.title;\r\n        this.songAuthor.innerText = item.author;\r\n        this.albumInfo.innerText = `${item.album} (${item.year})`;\r\n        this.audio.onloadeddata = () => {\r\n            this.songDuration.innerText = this.timeStr(this.audio.duration);\r\n            this.getProgress();\r\n        };\r\n        this.visualBlock.style.background = `url(\"${item.cover}\")  no-repeat center / cover`;\r\n        this.rollText(this.titleWrapper, this.songTitle);\r\n        this.rollText(this.authorWrapper, this.songAuthor);\r\n    },\r\n\r\n    musicPlay: function () {\r\n        this.audio.play()\r\n        this.isPlayed = true;\r\n        this.playBtn.style.display = \"none\";\r\n        this.pauseBtn.style.display = \"block\";\r\n\r\n    },\r\n    musicPause: function () {\r\n        this.audio.pause();\r\n        this.isPlayed = false;\r\n        this.playBtn.style.display = \"block\";\r\n        this.pauseBtn.style.display = \"none\";\r\n    },\r\n\r\n    prevSong: function () {\r\n        this.currentSong--;\r\n        if (this.currentSong < 0) this.currentSong = _musicBase__WEBPACK_IMPORTED_MODULE_0__.musicBase.length - 1;\r\n        this.musicInit(_musicBase__WEBPACK_IMPORTED_MODULE_0__.musicBase[this.currentSong]);\r\n        if (this.isPlayed === true) this.musicPlay();\r\n    },\r\n\r\n    nextSong: function () {\r\n        this.currentSong++\r\n        if (this.currentSong >= _musicBase__WEBPACK_IMPORTED_MODULE_0__.musicBase.length) this.currentSong = 0;\r\n        this.musicInit(_musicBase__WEBPACK_IMPORTED_MODULE_0__.musicBase[this.currentSong]);\r\n        if (this.isPlayed === true) {\r\n            this.musicPlay();\r\n        }\r\n    },\r\n\r\n    getProgress: function () {\r\n        this.audio.addEventListener(\"timeupdate\", (e) => {\r\n            let { duration, currentTime } = e.srcElement;\r\n            this.songTimer.innerText = this.timeStr(currentTime)\r\n            this.progressInner.style.width = `${currentTime / duration * 100}%`;\r\n            if (currentTime == duration) {\r\n                if (this.isPlayed) this.nextSong();\r\n                else return;\r\n            }\r\n        })\r\n    },\r\n\r\n    setProgress: function (e) {\r\n        let offsetX = e.offsetX;\r\n        let duration = this.audio.duration;\r\n        this.audio.currentTime = (offsetX / this.progressOuter.clientWidth) * duration;\r\n        this.getProgress();\r\n    },\r\n\r\n    rollText: function (outer, inner) {\r\n        inner.style.width = \"fit-content\";\r\n        inner.style.animation = \"\";\r\n        inner.style.transform = \"translate(0, 0)\";\r\n        inner.style.width = \"fit-content\";\r\n        if (inner.clientWidth > outer.clientWidth) {\r\n            document.body.style.cssText = `--rollText: -${this.songTitle.clientWidth - outer.clientWidth}px`;\r\n            inner.style.animation = \"rollText 10s ease infinite\";\r\n        }\r\n    },\r\n\r\n    changeVolume: function (value) {\r\n        this.audio.volume = value;\r\n    },\r\n\r\n    timeStr: function (time) {\r\n        let minutes = Math.floor(time / 60);\r\n        let seconds = Math.floor(time - (minutes * 60));\r\n        if (seconds < 10) seconds = `0${seconds}`\r\n        return `${minutes}:${seconds}`;\r\n    },\r\n}\n\n//# sourceURL=webpack://player/./src/js/playerLogic.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _js_musicBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/musicBase.js */ \"./src/js/musicBase.js\");\n/* harmony import */ var _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/playerLogic.js */ \"./src/js/playerLogic.js\");\n/* harmony import */ var _js_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/list.js */ \"./src/js/list.js\");\n\r\n\r\n\r\n\r\n\r\nconst wrapper = document.querySelector(\".wrapper\"),\r\n    prevBtn = document.querySelector(\".prev\"),\r\n    playBtn = document.querySelector(\".play\"),\r\n    pauseBtn = document.querySelector(\".pause\"),\r\n    nextBtn = document.querySelector(\".next\"),\r\n    progressOuter = document.querySelector(\".progress-bar-outer\"),\r\n    volumeRange = document.querySelector(\".change-volume__input\"),\r\n    openListBtn = document.querySelector(\".open-list-btn\");\r\n\r\nwindow.onload = () => {\r\n    _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.audio.volume = 0.5;\r\n    _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.musicInit(_js_musicBase_js__WEBPACK_IMPORTED_MODULE_1__.musicBase[_js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.currentSong]);\r\n    playBtn.addEventListener(\"click\", () => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.musicPlay(playBtn, pauseBtn));\r\n    pauseBtn.addEventListener(\"click\", () => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.musicPause(playBtn, pauseBtn));\r\n    nextBtn.addEventListener(\"click\", () => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.nextSong(playBtn, pauseBtn));\r\n    prevBtn.addEventListener(\"click\", () => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.prevSong(playBtn, pauseBtn));\r\n    progressOuter.addEventListener(\"click\", (e) => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.setProgress(e));\r\n    volumeRange.addEventListener(\"input\", () => _js_playerLogic_js__WEBPACK_IMPORTED_MODULE_2__.playerLogic.changeVolume(volumeRange.value));\r\n    openListBtn.addEventListener(\"click\", () => {\r\n        wrapper.classList.toggle(\"wrapper-open-list\");\r\n        openListBtn.classList.toggle(\"opened\");\r\n    });\r\n    _js_list_js__WEBPACK_IMPORTED_MODULE_3__.listLogic.getList(_js_musicBase_js__WEBPACK_IMPORTED_MODULE_1__.musicBase);\r\n}\r\n\n\n//# sourceURL=webpack://player/./src/main.js?");

/***/ }),

/***/ "./src/assets/covers/All the Feels (2016).png":
/*!****************************************************!*\
  !*** ./src/assets/covers/All the Feels (2016).png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/All the Feels (2016).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/All_the_Feels_(2016).png?");

/***/ }),

/***/ "./src/assets/covers/Are You Satisfied (2015).png":
/*!********************************************************!*\
  !*** ./src/assets/covers/Are You Satisfied (2015).png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Are You Satisfied (2015).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Are_You_Satisfied_(2015).png?");

/***/ }),

/***/ "./src/assets/covers/Dangerous Days (2014).png":
/*!*****************************************************!*\
  !*** ./src/assets/covers/Dangerous Days (2014).png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Dangerous Days (2014).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Dangerous_Days_(2014).png?");

/***/ }),

/***/ "./src/assets/covers/Hotel Diablo (2020).png":
/*!***************************************************!*\
  !*** ./src/assets/covers/Hotel Diablo (2020).png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Hotel Diablo (2020).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Hotel_Diablo_(2020).png?");

/***/ }),

/***/ "./src/assets/covers/Imploding the Mirage (2020).png":
/*!***********************************************************!*\
  !*** ./src/assets/covers/Imploding the Mirage (2020).png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Imploding the Mirage (2020).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Imploding_the_Mirage_(2020).png?");

/***/ }),

/***/ "./src/assets/covers/Maniac (2020).png":
/*!*********************************************!*\
  !*** ./src/assets/covers/Maniac (2020).png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Maniac (2020).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Maniac_(2020).png?");

/***/ }),

/***/ "./src/assets/covers/No Hope, No Future (2010).png":
/*!*********************************************************!*\
  !*** ./src/assets/covers/No Hope, No Future (2010).png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/No Hope, No Future (2010).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/No_Hope,_No_Future_(2010).png?");

/***/ }),

/***/ "./src/assets/covers/Nothing Is True & Everything Is Possible (2020).png":
/*!*******************************************************************************!*\
  !*** ./src/assets/covers/Nothing Is True & Everything Is Possible (2020).png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Nothing Is True & Everything Is Possible (2020).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Nothing_Is_True_&_Everything_Is_Possible_(2020).png?");

/***/ }),

/***/ "./src/assets/covers/POST HUMAN SURVIVAL HORROR (2020).png":
/*!*****************************************************************!*\
  !*** ./src/assets/covers/POST HUMAN SURVIVAL HORROR (2020).png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/POST HUMAN SURVIVAL HORROR (2020).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/POST_HUMAN_SURVIVAL_HORROR_(2020).png?");

/***/ }),

/***/ "./src/assets/covers/Stop Drop and Roll (2008).png":
/*!*********************************************************!*\
  !*** ./src/assets/covers/Stop Drop and Roll (2008).png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Stop Drop and Roll (2008).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Stop_Drop_and_Roll_(2008).png?");

/***/ }),

/***/ "./src/assets/covers/Synchronicity (1983).png":
/*!****************************************************!*\
  !*** ./src/assets/covers/Synchronicity (1983).png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/Synchronicity (1983).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/Synchronicity_(1983).png?");

/***/ }),

/***/ "./src/assets/covers/The Scene (2017).png":
/*!************************************************!*\
  !*** ./src/assets/covers/The Scene (2017).png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/covers/The Scene (2017).png\";\n\n//# sourceURL=webpack://player/./src/assets/covers/The_Scene_(2017).png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;