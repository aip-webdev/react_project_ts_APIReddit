"use strict";
webpackHotUpdate("main", {
    /***/ "./src/shared/Pages/NotFoundPage/NotFoundPage.tsx": 
    /*!********************************************************!*\
      !*** ./src/shared/Pages/NotFoundPage/NotFoundPage.tsx ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Text_1 = __webpack_require__(/*! ../../Components/ReusedComponents/Text */ \"./src/shared/Components/ReusedComponents/Text/index.ts\");\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nvar notfoundpage_scss_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.scss */ \"./src/shared/Pages/NotFoundPage/notfoundpage.scss\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nfunction NotFoundPage() {\r\n    return (react_1.default.createElement(\"div\", { className: notfoundpage_scss_1.default.pageBox },\r\n        react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20, color: colorEnum_1.EColor.black }, \"PAGE NOT FOUND\"),\r\n        react_1.default.createElement(react_router_dom_1.NavLink, { to: '/', className: notfoundpage_scss_1.default.homeLink })));\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/NotFoundPage.tsx?");
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
//# sourceMappingURL=main.48bd811ec814bdfe82e7.hot-update.js.map