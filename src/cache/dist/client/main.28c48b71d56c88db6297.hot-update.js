"use strict";
webpackHotUpdate("main", {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/Pages/NotFoundPage/notfoundpage.scss": 
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./src/shared/Pages/NotFoundPage/notfoundpage.scss ***!
      \************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body {\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  background-color: whitesmoke;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: \\\"Roboto\\\", serif;\\n  overflow: hidden;\\n}\\nhtml::-webkit-scrollbar, body::-webkit-scrollbar {\\n  width: 0;\\n}\\n\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  margin: 0;\\n  padding: 0;\\n  outline: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.notfoundpage__pageBox--0T-W3 {\\n  display: grid;\\n  place-items: center;\\n  height: 80vh;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"pageBox\": \"notfoundpage__pageBox--0T-W3\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/notfoundpage.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js");
        /***/ 
    }),
    /***/ "./src/shared/Pages/NotFoundPage/NotFoundPage.tsx": 
    /*!********************************************************!*\
      !*** ./src/shared/Pages/NotFoundPage/NotFoundPage.tsx ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Text_1 = __webpack_require__(/*! ../../Components/ReusedComponents/Text */ \"./src/shared/Components/ReusedComponents/Text/index.ts\");\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nvar notfoundpage_scss_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.scss */ \"./src/shared/Pages/NotFoundPage/notfoundpage.scss\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nfunction NotFoundPage() {\r\n    return (react_1.default.createElement(\"div\", { className: notfoundpage_scss_1.default.pageBox },\r\n        react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Text_1.Text, { size: 36, mobileSize: 28, color: colorEnum_1.EColor.black }, \"PAGE NOT FOUND\"),\r\n            react_1.default.createElement(react_router_dom_1.NavLink, { to: '/', className: notfoundpage_scss_1.default.homeLink }, \"Go to the Home\"))));\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/NotFoundPage.tsx?");
        /***/ 
    }),
    /***/ "./src/shared/Pages/NotFoundPage/index.ts": 
    /*!************************************************!*\
      !*** ./src/shared/Pages/NotFoundPage/index.ts ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/Pages/NotFoundPage/NotFoundPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/index.ts?");
        /***/ 
    })
});
//# sourceMappingURL=main.28c48b71d56c88db6297.hot-update.js.map