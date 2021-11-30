"use strict";
webpackHotUpdate("main", {
    /***/ "./src/App.tsx": 
    /*!*********************!*\
      !*** ./src/App.tsx ***!
      \*********************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/main.global.scss\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar RequiredAuth_1 = __webpack_require__(/*! ./shared/Components/RequiredAuth */ \"./src/shared/Components/RequiredAuth.tsx\");\r\nvar HomePage_1 = __webpack_require__(/*! ./shared/Pages/HomePage */ \"./src/shared/Pages/HomePage/index.ts\");\r\nvar PostsPage_1 = __webpack_require__(/*! ./shared/Pages/PostsPage */ \"./src/shared/Pages/PostsPage/index.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ./shared/Pages/NotFoundPage */ \"./src/shared/Pages/NotFoundPage/index.ts\");\r\nfunction AppComponent() {\r\n    (0, useToken_1.useToken)();\r\n    return (react_1.default.createElement(react_router_dom_1.Routes, null,\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(RequiredAuth_1.RequiredAuth, null,\r\n                react_1.default.createElement(HomePage_1.HomePage, null)) }),\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: 'posts/*', element: react_1.default.createElement(RequiredAuth_1.RequiredAuth, null,\r\n                react_1.default.createElement(PostsPage_1.PostsPage, null)) }),\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, null) })));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n    react_1.default.createElement(AppComponent, null)); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");
        /***/ 
    }),
    /***/ "./src/client/index.js": 
    /*!*****************************!*\
      !*** ./src/client/index.js ***!
      \*****************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar renderMethod =  true ? react_dom_1.render : undefined;\r\nwindow.addEventListener('load', function () {\r\n    renderMethod(React.createElement(react_router_dom_1.BrowserRouter, null,\r\n        React.createElement(App_1.App, null)), document.getElementById('react__root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");
        /***/ 
    }),
    /***/ "./src/shared/Pages/NotFoundPage/NotFoundPage.tsx": 
    /*!********************************************************!*\
      !*** ./src/shared/Pages/NotFoundPage/NotFoundPage.tsx ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        eval("throw new Error(\"Module parse failed: Unexpected token (5:12)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| exports.NotFoundPage = void 0;\\n| function NotFoundPage() {\\n>     return ();\\n| }\\n| exports.NotFoundPage = NotFoundPage;\");\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/NotFoundPage.tsx?");
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
//# sourceMappingURL=main.b680a58967b2a2e2ad10.hot-update.js.map