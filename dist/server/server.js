/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/main.global.scss\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Components/Layout */ \"./src/shared/Components/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Components/Header */ \"./src/shared/Components/Header/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ./shared/Pages/NotFoundPage */ \"./src/shared/Pages/NotFoundPage/index.ts\");\r\nvar PostsPage_1 = __webpack_require__(/*! ./shared/Pages/PostsPage */ \"./src/shared/Pages/PostsPage/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ./shared/Components/Post */ \"./src/shared/Components/Post/index.ts\");\r\nfunction AppComponent() {\r\n    (0, useToken_1.useToken)();\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(react_router_dom_1.Outlet, null)));\r\n}\r\nfunction AppRouter() {\r\n    var _a = (0, react_1.useState)(false), redirect = _a[0], setRedirect = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setRedirect(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_router_dom_1.Routes, null,\r\n        redirect &&\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(AppComponent, null) },\r\n                react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/auth/:query', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(PostsPage_1.PostsPage, null) },\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: ':postId', element: react_1.default.createElement(Post_1.Post, null) }))),\r\n        redirect && react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, null) })));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n    react_1.default.createElement(AppRouter, null)); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/setContentElHeight.ts":
/*!*****************************************!*\
  !*** ./src/hooks/setContentElHeight.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setContentElHeight = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ./useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction setContentElHeight() {\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.posts.loading; });\r\n    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];\r\n    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/\r\n    var errorRate = isMediaTablet ? 12 : (isMediaDesktop ? 10 : 5);\r\n    (0, react_1.useEffect)(function () {\r\n        var headerEl = window.document.getElementById('js-header');\r\n        var contentEl = window.document.getElementById('js-content');\r\n        if (!headerEl || !contentEl || !window.document.documentElement)\r\n            return;\r\n        var oneProc = (window.document.documentElement.offsetHeight / 100);\r\n        var contentHeight = 100 - Math.ceil(headerEl.offsetHeight / oneProc) - errorRate;\r\n        contentEl.style.height = \"\".concat(contentHeight, \"vh\");\r\n    }, [loading, isMediaMobile, isMediaTablet, isMediaDesktop]);\r\n}\r\nexports.setContentElHeight = setContentElHeight;\r\n\n\n//# sourceURL=webpack:///./src/hooks/setContentElHeight.ts?");

/***/ }),

/***/ "./src/hooks/useEventListenerAction.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useEventListenerAction.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useEventListenerAction = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useEventListenerAction(eventType, eventAction, hookDeps) {\r\n    (0, react_1.useEffect)(function () {\r\n        window.addEventListener(eventType, eventAction);\r\n        return function () { return window.removeEventListener(eventType, eventAction); };\r\n    }, hookDeps !== null && hookDeps !== void 0 ? hookDeps : undefined);\r\n}\r\nexports.useEventListenerAction = useEventListenerAction;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useEventListenerAction.ts?");

/***/ }),

/***/ "./src/hooks/useMediaSize.ts":
/*!***********************************!*\
  !*** ./src/hooks/useMediaSize.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useMediaSize = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ \"./src/hooks/useWindowSize.ts\");\r\nfunction useMediaSize() {\r\n    var width = (0, useWindowSize_1.useWindowSize)().width;\r\n    var _a = (0, react_1.useState)(true), isMediaMobile = _a[0], setIsMediaMobile = _a[1];\r\n    var _b = (0, react_1.useState)(true), isMediaTablet = _b[0], setIsMediaTablet = _b[1];\r\n    var _c = (0, react_1.useState)(true), isMediaDesktop = _c[0], setIsMediaDesktop = _c[1];\r\n    (0, react_1.useEffect)(function () {\r\n        width < 1024 ? setIsMediaMobile(true) : setIsMediaMobile(false);\r\n        ((width > 1024) && (width < 1400)) ? setIsMediaTablet(true) : setIsMediaTablet(false);\r\n        width > 1400 ? setIsMediaDesktop(true) : setIsMediaDesktop(false);\r\n    }, [width]);\r\n    return [isMediaMobile, isMediaTablet, isMediaDesktop];\r\n}\r\nexports.useMediaSize = useMediaSize;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useMediaSize.ts?");

/***/ }),

/***/ "./src/hooks/useMouseEventAction.ts":
/*!******************************************!*\
  !*** ./src/hooks/useMouseEventAction.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useMouseEventAction = void 0;\r\nvar useEventListenerAction_1 = __webpack_require__(/*! ./useEventListenerAction */ \"./src/hooks/useEventListenerAction.ts\");\r\nfunction useMouseEventAction(_a) {\r\n    var action = _a.action, ref = _a.ref;\r\n    (0, useEventListenerAction_1.useEventListenerAction)('click', function (e) {\r\n        var _a;\r\n        if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            action();\r\n        }\r\n    }, []);\r\n}\r\nexports.useMouseEventAction = useMouseEventAction;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useMouseEventAction.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postActions_1 = __webpack_require__(/*! ../store/actions/postActions */ \"./src/store/actions/postActions/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ./useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction usePostsData(bottomOfList) {\r\n    var postsData = (0, react_redux_1.useSelector)(function (state) { return state.posts.postsData; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.posts.loading; });\r\n    var after = (0, react_redux_1.useSelector)(function (state) { return state.posts.after; });\r\n    var type = (0, react_redux_1.useSelector)(function (state) { return state.postsType; });\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting && (postsData.length % 60 !== 0 || postsData.length === 0)) {\r\n                dispatch((0, postActions_1.postsRequestAsync)());\r\n            }\r\n        }, {\r\n            rootMargin: isMediaMobile ? '300px' : '100px'\r\n        });\r\n        if (!!bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (!!bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, after, postsData, type]);\r\n    return { postsData: postsData, loading: loading };\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsWithCommentsData.ts":
/*!***********************************************!*\
  !*** ./src/hooks/usePostsWithCommentsData.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsWithCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postWCActions_1 = __webpack_require__(/*! ../store/actions/postWCActions */ \"./src/store/actions/postWCActions/index.ts\");\r\nfunction usePostsWithCommentsData() {\r\n    var postsWCData = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments.postsWCData; });\r\n    var postsData = (0, react_redux_1.useSelector)(function (state) { return state.posts.postsData; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments.loading; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!postsData)\r\n            return;\r\n        dispatch((0, postWCActions_1.postsWCRequestAsync)());\r\n    }, [postsData]);\r\n    return { loading: loading, postsWCData: postsWCData };\r\n}\r\nexports.usePostsWithCommentsData = usePostsWithCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsWithCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar tokenActions_1 = __webpack_require__(/*! ../store/actions/tokenActions */ \"./src/store/actions/tokenActions/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction useToken() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        dispatch((0, tokenActions_1.saveToken)());\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar meActions_1 = __webpack_require__(/*! ../store/actions/meActions */ \"./src/store/actions/meActions/index.ts\");\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        dispatch((0, meActions_1.fetchMyDataAsync)());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/hooks/useUserImgData.ts":
/*!*************************************!*\
  !*** ./src/hooks/useUserImgData.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserImgData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction useUserImgData(username) {\r\n    var _this = this;\r\n    var _a = (0, react_1.useState)('https://i.redd.it/4qezgmi0x87z.png'), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    if (!token)\r\n        return [data];\r\n    (function () { return __awaiter(_this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/user/\".concat(username, \"/about.json\"), {\r\n                        headers: { Authorization: \"bearer \".concat(token) }\r\n                    })\r\n                        .then(function (res) {\r\n                        setData(res.data.data.icon_img);\r\n                    })\r\n                        .catch(console.log)];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); })();\r\n    return [data];\r\n}\r\nexports.useUserImgData = useUserImgData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserImgData.ts?");

/***/ }),

/***/ "./src/hooks/useWindowSize.ts":
/*!************************************!*\
  !*** ./src/hooks/useWindowSize.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useWindowSize = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useEventListenerAction_1 = __webpack_require__(/*! ./useEventListenerAction */ \"./src/hooks/useEventListenerAction.ts\");\r\nfunction useWindowSize() {\r\n    var _a = (0, react_1.useState)({ height: 0, width: 0 }), size = _a[0], setSize = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setSize({ height: window.innerHeight, width: window.innerWidth });\r\n    }, []);\r\n    (0, useEventListenerAction_1.useEventListenerAction)('resize', function () { return setSize({ height: window.innerHeight, width: window.innerWidth }); });\r\n    return size;\r\n}\r\nexports.useWindowSize = useWindowSize;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useWindowSize.ts?");

/***/ }),

/***/ "./src/main.global.scss":
/*!******************************!*\
  !*** ./src/main.global.scss ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body {\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  background-color: whitesmoke;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: \\\"Roboto\\\", serif;\\n  overflow: hidden;\\n}\\nhtml::-webkit-scrollbar, body::-webkit-scrollbar {\\n  width: 0;\\n}\\n\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  margin: 0;\\n  padding: 0;\\n  outline: none;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.scss?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n         <meta charset=\\\"utf-8\\\" />\\n    <link rel=\\\"icon\\\" href=\\\"/img-src/favicon.ico\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n    <meta name=\\\"theme-color\\\" content=\\\"#000000\\\" />\\n    <meta\\n      name=\\\"description\\\"\\n      content=\\\"Mirror for reddit\\\"\\n    />\\n    <link rel=\\\"apple-touch-icon\\\" href=\\\"/img-src/logo192.png\\\" />\\n    <!--\\n      manifest.json provides metadata used when your web app is installed on a\\n      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\\n    -->\\n    <link rel=\\\"manifest\\\" href=\\\"/img-src/manifest.json\\\" />\\n    <!--\\n      Notice the use of %PUBLIC_URL% in the tags above.\\n      It will be replaced with the URL of the `public` folder during the build.\\n      Only files inside the `public` folder can be referenced from the HTML.\\n\\n      Unlike \\\"/favicon.ico\\\" or \\\"favicon.ico\\\", \\\"%PUBLIC_URL%/favicon.ico\\\" will\\n      work correctly both with client-side routing and a non-root public URL.\\n      Learn how to configure a non-root public URL by running `npm run build`.\\n    -->\\n           <title>mirror for Reddit</title>\\n    </head>\\n   \\n    <body>\\n        <div id=\\\"react__root\\\">\".concat(content, \"</div>\\n        <div id=\\\"loading__root\\\" ></div>\\n        <div id=\\\"modal__root\\\"></div>\\n         <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script >\\n        window.__token__ = '\").concat(token, \"'\\n    </script>\\n    </body>\\n    </html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar IS_PROD = \"development\" !== 'development';\r\nvar PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;\r\nvar URI = IS_PROD ? undefined : \"http://localhost:\".concat(PORT);\r\nvar app = (0, express_1.default)();\r\nif (IS_PROD) {\r\n    app.use((0, compression_1.default)());\r\n    app.use((0, helmet_1.default)({\r\n        contentSecurityPolicy: false,\r\n    }));\r\n}\r\nvar reqHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, (0, App_1.App)()))));\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.use('/img-src', express_1.default.static('./dist/img-src'));\r\napp.get('/auth', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=\").concat(URI, \"/auth\"), {\r\n            auth: { username: \"5shB1q3ox9a92w\", password: \"DuLj8MgRlj_2QynWCXjusfb8gW1pCw\" },\r\n            headers: { 'Content-type': 'application/x-www-form-urlencoded' },\r\n        })\r\n            .then(function (_a) {\r\n            var data = _a.data;\r\n            res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { children: (0, App_1.App)(), location: req.path })), data['access_token']));\r\n        })\r\n            .catch(console.log);\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\napp.get('*', reqHandler);\r\napp.listen(PORT, function () {\r\n    !IS_PROD && console.log(\"Server started on \".concat(URI, \" \"));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Card.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Card.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/Components/CardList/Card/card.scss\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/Components/CardList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/Components/CardList/Card/Preview/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/Components/CardList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Components/CardList/Card/Menu/index.ts\");\r\nvar isImageUrl_1 = __webpack_require__(/*! ../../../../utils/js/isImageUrl */ \"./src/utils/js/isImageUrl.ts\");\r\nfunction Card(_a) {\r\n    var post = _a.post;\r\n    var count_comments = post.count_comments, count_karma = post.count_karma, url = post.url;\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { post: post }),\r\n        (0, isImageUrl_1.isImageUrl)(url) && react_1.default.createElement(Preview_1.Preview, { url: url }),\r\n        react_1.default.createElement(Controls_1.Controls, { karmaCount: count_karma, commentsCount: count_comments }),\r\n        react_1.default.createElement(Menu_1.Menu, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/ActionButton.tsx":
/*!********************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/ActionButton.tsx ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActionButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actionbutton_scss_1 = __importDefault(__webpack_require__(/*! ./actionbutton.scss */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/actionbutton.scss\"));\r\nfunction ActionButton(_a) {\r\n    var children = _a.children, text = _a.text, _b = _a.textIsHide, textIsHide = _b === void 0 ? false : _b, className = _a.className, onclick = _a.onclick, style = _a.style;\r\n    return (react_1.default.createElement(\"button\", { className: className, style: style, onClick: onclick },\r\n        children,\r\n        !textIsHide && react_1.default.createElement(\"span\", { className: actionbutton_scss_1.default.buttonText }, text)));\r\n}\r\nexports.ActionButton = ActionButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/ActionButton.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/actionbutton.scss":
/*!*********************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/actionbutton.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"buttonText\": \"actionbutton__buttonText--a+tDB\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/actionbutton.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/ActionButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Actions.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Actions.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_scss_1 = __importDefault(__webpack_require__(/*! ./actions.scss */ \"./src/shared/Components/CardList/Card/Controls/Actions/actions.scss\"));\r\nvar Share_1 = __webpack_require__(/*! ./Share */ \"./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts\");\r\nvar Save_1 = __webpack_require__(/*! ./Save */ \"./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts\");\r\nvar controls_scss_1 = __importDefault(__webpack_require__(/*! ../controls.scss */ \"./src/shared/Components/CardList/Card/Controls/controls.scss\"));\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_scss_1.default.actions },\r\n        react_1.default.createElement(Share_1.Share, { btnClassName: controls_scss_1.default.actionButton, textHide: true }),\r\n        react_1.default.createElement(Save_1.Save, { btnClassName: controls_scss_1.default.actionButton, textHide: true })));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Complain/Complain.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Complain/Complain.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Complain = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Complain(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Пожаловаться' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.complain, width: 14, height: 12 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Complain = Complain;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Complain/Complain.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Complain */ \"./src/shared/Components/CardList/Card/Controls/Actions/Complain/Complain.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Hide/Hide.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Hide/Hide.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Hide = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Hide(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Скрыть' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.hide, width: 12, height: 12 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Hide = Hide;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Hide/Hide.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Hide/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Hide/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Hide */ \"./src/shared/Components/CardList/Card/Controls/Actions/Hide/Hide.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Hide/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Remove/Remove.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Remove/Remove.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Remove = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Remove(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Удалить' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.remove, width: 10, height: 12 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Remove = Remove;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Remove/Remove.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Remove/index.ts":
/*!******************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Remove/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Remove */ \"./src/shared/Components/CardList/Card/Controls/Actions/Remove/Remove.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Remove/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Save/Save.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Save/Save.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Save = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Save(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Сохранить' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.save, width: 10, height: 10 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Save = Save;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Save/Save.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Save */ \"./src/shared/Components/CardList/Card/Controls/Actions/Save/Save.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Share/Share.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Share/Share.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Share = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Share(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Поделиться' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.share, width: 8, height: 10 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Share = Share;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Share/Share.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Share */ \"./src/shared/Components/CardList/Card/Controls/Actions/Share/Share.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Statistics/Statistics.tsx":
/*!****************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Statistics/Statistics.tsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Statistics = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Statistics(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? 'Статистика публикации' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.statistics, width: 13, height: 8 }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Statistics = Statistics;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Statistics/Statistics.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/Statistics/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/Statistics/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Statistics */ \"./src/shared/Components/CardList/Card/Controls/Actions/Statistics/Statistics.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/Statistics/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/actions.scss":
/*!***************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/actions.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/actions.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Actions/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Actions/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/Components/CardList/Card/Controls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Comments/Comments.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Comments/Comments.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionButton_1 = __webpack_require__(/*! ../Actions/ActionButton */ \"./src/shared/Components/CardList/Card/Controls/Actions/ActionButton/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction Comments(_a) {\r\n    var _b = _a.text, text = _b === void 0 ? '13' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName, onclick = _a.onclick;\r\n    return (react_1.default.createElement(ActionButton_1.ActionButton, { onclick: onclick, style: { background: 'transparent' }, className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.comments, width: 15, height: 13, pathFill: '#999999' }), text: text, textIsHide: textHide }));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Comments/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Comments/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Components/CardList/Card/Controls/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/Controls.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/Controls.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_scss_1 = __importDefault(__webpack_require__(/*! ./controls.scss */ \"./src/shared/Components/CardList/Card/Controls/controls.scss\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Components/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Components/CardList/Card/Controls/Comments/index.ts\");\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/Components/CardList/Card/Controls/Actions/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction Controls(props) {\r\n    var commentsCount = props.commentsCount, karmaCount = props.karmaCount;\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    return (react_1.default.createElement(\"div\", { className: controls_scss_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { count: karmaCount }),\r\n        isMediaMobile && react_1.default.createElement(Comments_1.Comments, { btnClassName: controls_scss_1.default.actionButton, text: commentsCount, textHide: false }),\r\n        isMediaMobile && react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_scss_1 = __importDefault(__webpack_require__(/*! ./karmacounter.scss */ \"./src/shared/Components/CardList/Card/Controls/KarmaCounter/karmacounter.scss\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction KarmaCounter(props) {\r\n    var count = props.count, style = props.style;\r\n    return (react_1.default.createElement(\"div\", { style: style, className: karmacounter_scss_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_scss_1.default.up }, react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.arrow, width: 19, height: 10, pathFill: '#999999' })),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_scss_1.default.karmaValue }, count),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_scss_1.default.down }, react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.arrow, width: 19, height: 10, pathFill: '#999999' }))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/KarmaCounter/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/KarmaCounter/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/Components/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/KarmaCounter/karmacounter.scss":
/*!*************************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/KarmaCounter/karmacounter.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"karmaCounter\": \"karmacounter__karmaCounter--fSyD3\",\n\t\"up\": \"karmacounter__up--rPR7Z\",\n\t\"down\": \"karmacounter__down--UwVlJ\",\n\t\"karmaValue\": \"karmacounter__karmaValue--jDahH\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/KarmaCounter/karmacounter.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/controls.scss":
/*!********************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/controls.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"controls\": \"controls__controls--9U7F0\",\n\t\"actionButton\": \"controls__actionButton--HXGDx\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/controls.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Controls/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Controls/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/Components/CardList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Menu/Menu.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Menu/Menu.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/Components/CardList/Card/Menu/menu.scss\"));\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar Comments_1 = __webpack_require__(/*! ../Controls/Comments */ \"./src/shared/Components/CardList/Card/Controls/Comments/index.ts\");\r\nvar Share_1 = __webpack_require__(/*! ../Controls/Actions/Share */ \"./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts\");\r\nvar Statistics_1 = __webpack_require__(/*! ../Controls/Actions/Statistics */ \"./src/shared/Components/CardList/Card/Controls/Actions/Statistics/index.ts\");\r\nvar Remove_1 = __webpack_require__(/*! ../Controls/Actions/Remove */ \"./src/shared/Components/CardList/Card/Controls/Actions/Remove/index.ts\");\r\nvar Hide_1 = __webpack_require__(/*! ../Controls/Actions/Hide */ \"./src/shared/Components/CardList/Card/Controls/Actions/Hide/index.ts\");\r\nvar Complain_1 = __webpack_require__(/*! ../Controls/Actions/Complain */ \"./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts\");\r\nvar Save_1 = __webpack_require__(/*! ../Controls/Actions/Save */ \"./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../ReusedComponents/Dropdown */ \"./src/shared/Components/ReusedComponents/Dropdown/index.ts\");\r\nvar actionsList = [\r\n    {\r\n        id: 'comments',\r\n        element: react_1.default.createElement(Comments_1.Comments, { btnClassName: menu_scss_1.default.actionButton, text: '\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438', textHide: false }),\r\n    },\r\n    {\r\n        id: 'share',\r\n        element: react_1.default.createElement(Share_1.Share, { btnClassName: menu_scss_1.default.actionButton, textHide: false })\r\n    },\r\n    {\r\n        id: 'statistics',\r\n        element: react_1.default.createElement(Statistics_1.Statistics, { btnClassName: menu_scss_1.default.actionButton, textHide: false })\r\n    },\r\n    {\r\n        id: 'hide',\r\n        element: react_1.default.createElement(Hide_1.Hide, { btnClassName: menu_scss_1.default.actionButton, textHide: false })\r\n    },\r\n    {\r\n        id: 'remove',\r\n        element: react_1.default.createElement(Remove_1.Remove, { btnClassName: menu_scss_1.default.actionButton })\r\n    },\r\n    {\r\n        id: 'save',\r\n        element: react_1.default.createElement(Save_1.Save, { btnClassName: menu_scss_1.default.actionButton })\r\n    },\r\n    {\r\n        id: 'complain',\r\n        element: react_1.default.createElement(Complain_1.Complain, { btnClassName: menu_scss_1.default.actionButton })\r\n    },\r\n    {\r\n        id: 'close',\r\n        element: react_1.default.createElement(\"button\", { className: menu_scss_1.default.closeBtn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")\r\n    }\r\n];\r\nfunction Menu() {\r\n    var _a = (0, react_1.useState)(actionsList), list = _a[0], setList = _a[1];\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    var isMobileActions = function (action) { return !(0, ramda_1.contains)(action.id, ['statistics', 'comments', 'share', 'remove', 'save']); };\r\n    var isNoMobileActions = function (action) { return !(0, ramda_1.contains)(action.id, ['statistics', 'remove']); };\r\n    (0, react_1.useEffect)(function () {\r\n        if (isMediaMobile) {\r\n            setList((0, ramda_1.filter)(isMobileActions, actionsList));\r\n        }\r\n        else {\r\n            setList((0, ramda_1.filter)(isNoMobileActions, actionsList));\r\n        }\r\n    }, [isMediaMobile]);\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#F3F3F3\" }))), children: react_1.default.createElement(\"ul\", { className: menu_scss_1.default.menuList }, list.map(function (action) { return (react_1.default.createElement(\"li\", { className: menu_scss_1.default.listLine, key: action.id }, action.element)); })) })));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Menu/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Menu/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Components/CardList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Menu/menu.scss":
/*!************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Menu/menu.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menu\": \"menu__menu--lW2qZ\",\n\t\"menuButton\": \"menu__menuButton--yTjIJ\",\n\t\"actionButton\": \"menu__actionButton--cd0+Y\",\n\t\"closeBtn\": \"menu__closeBtn--4yil1\",\n\t\"listLine\": \"menu__listLine--uzwj5\",\n\t\"menuList\": \"menu__menuList--R3JEL\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Menu/menu.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Preview/Preview.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Preview/Preview.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_scss_1 = __importDefault(__webpack_require__(/*! ./preview.scss */ \"./src/shared/Components/CardList/Card/Preview/preview.scss\"));\r\nfunction Preview(props) {\r\n    var url = props.url;\r\n    return (react_1.default.createElement(\"div\", { className: preview_scss_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_scss_1.default.previewImg, src: url, alt: \"Post image\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Preview/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Preview/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/Components/CardList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/Preview/preview.scss":
/*!******************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/Preview/preview.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"preview\": \"preview__preview--mE00R\",\n\t\"previewImg\": \"preview__previewImg--04AX7\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/Preview/preview.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/TextContent/TextContent.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/TextContent/TextContent.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/Components/CardList/Card/TextContent/textcontent.scss\"));\r\nvar stringShorter_1 = __webpack_require__(/*! ../../../../../utils/js/stringShorter */ \"./src/utils/js/stringShorter.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../../../ReusedComponents/MetaData */ \"./src/shared/Components/ReusedComponents/MetaData/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction TextContent(_a) {\r\n    var post = _a.post;\r\n    var id = post.id, author = post.author, author_url = post.author_url, topic_name = post.topic_name, created = post.created, self_text = post.self_text, title = post.title;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { author: author, authorUrl: author_url, topicName: topic_name, publicationTime: created }),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_scss_1.default.title },\r\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\".concat(id), className: textcontent_scss_1.default.postLink }, title),\r\n            self_text &&\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.titleSelf }, (0, stringShorter_1.stringShorter)(self_text, 30, 60, 80)))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/TextContent/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/TextContent/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Components/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/TextContent/textcontent.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/Components/CardList/Card/TextContent/textcontent.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"textContent\": \"textcontent__textContent--vIgKC\",\n\t\"title\": \"textcontent__title--Og08R\",\n\t\"titleSelf\": \"textcontent__titleSelf--eGdeu\",\n\t\"postLink\": \"textcontent__postLink--oZY+E\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--tYvZA\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/TextContent/textcontent.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/card.scss":
/*!*******************************************************!*\
  !*** ./src/shared/Components/CardList/Card/card.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"card__card--Am6jl\",\n\t\"emptyCard\": \"card__emptyCard--0v-8v\",\n\t\"postLink\": \"card__postLink--dbEiR\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/card.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/Card/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/Components/CardList/Card/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/Components/CardList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/Components/CardList/CardList.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Components/CardList/CardList.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/Components/CardList/cardlist.scss\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/Components/CardList/Card/index.ts\");\r\nvar usePostsData_1 = __webpack_require__(/*! ../../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nvar usePostsWithCommentsData_1 = __webpack_require__(/*! ../../../hooks/usePostsWithCommentsData */ \"./src/hooks/usePostsWithCommentsData.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postActions_1 = __webpack_require__(/*! ../../../store/actions/postActions */ \"./src/store/actions/postActions/index.ts\");\r\nvar Loading_1 = __webpack_require__(/*! ../ReusedComponents/Loading */ \"./src/shared/Components/ReusedComponents/Loading/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Card/Controls */ \"./src/shared/Components/CardList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Card/Menu */ \"./src/shared/Components/CardList/Card/Menu/index.ts\");\r\nfunction CardList() {\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var _a = (0, usePostsData_1.usePostsData)(bottomOfList), postsData = _a.postsData, loading = _a.loading;\r\n    (0, usePostsWithCommentsData_1.usePostsWithCommentsData)();\r\n    var handleClick = function () { return dispatch((0, postActions_1.postsRequestAsync)()); };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { id: 'cardList', className: cardlist_scss_1.default.cardList },\r\n            loading && react_1.default.createElement(Loading_1.Loading, null),\r\n            postsData && postsData.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.id, post: post })); }),\r\n            postsData.length % 60 === 0 && postsData.length !== 0 &&\r\n                react_1.default.createElement(\"button\", { className: cardlist_scss_1.default.loadMore, onClick: handleClick }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\"),\r\n            react_1.default.createElement(\"div\", { style: { height: '1px' }, ref: bottomOfList })),\r\n        react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList }, Array.apply(null, Array(20)).map(function (value, index) {\r\n            return (loading &&\r\n                react_1.default.createElement(\"li\", { className: cardlist_scss_1.default.emptyCard, key: (index * index) + 1 },\r\n                    react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.emptyTextBox },\r\n                        react_1.default.createElement(\"span\", { className: cardlist_scss_1.default.emptySpan }),\r\n                        react_1.default.createElement(\"span\", { className: cardlist_scss_1.default.emptySpan }),\r\n                        react_1.default.createElement(\"span\", { className: cardlist_scss_1.default.emptySpan })),\r\n                    react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.emptyImg }),\r\n                    react_1.default.createElement(Controls_1.Controls, { karmaCount: 0, commentsCount: 0 }),\r\n                    react_1.default.createElement(Menu_1.Menu, null)));\r\n        }))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/Components/CardList/cardlist.scss":
/*!******************************************************!*\
  !*** ./src/shared/Components/CardList/cardlist.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardList\": \"cardlist__cardList--2Hx3d\",\n\t\"emptyCard\": \"cardlist__emptyCard--l-cxP\",\n\t\"emptyImg\": \"cardlist__emptyImg--fmHNy\",\n\t\"emptySpan\": \"cardlist__emptySpan--M2++L\",\n\t\"emptyTextBox\": \"cardlist__emptyTextBox--Rq+3F\",\n\t\"loadMore\": \"cardlist__loadMore--cDK8b\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/cardlist.scss?");

/***/ }),

/***/ "./src/shared/Components/CardList/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/Components/CardList/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/Components/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Content/Content.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Components/Content/Content.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_scss_1 = __importDefault(__webpack_require__(/*! ./content.scss */ \"./src/shared/Components/Content/content.scss\"));\r\nvar setContentElHeight_1 = __webpack_require__(/*! ../../../hooks/setContentElHeight */ \"./src/hooks/setContentElHeight.ts\");\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    (0, setContentElHeight_1.setContentElHeight)();\r\n    return (react_1.default.createElement(\"main\", { id: \"js-content\", className: content_scss_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Components/Content/content.scss":
/*!****************************************************!*\
  !*** ./src/shared/Components/Content/content.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"content__content--ce5dF\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/content.scss?");

/***/ }),

/***/ "./src/shared/Components/Content/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Components/Content/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Components/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Components/Header/Header.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/Components/Header/header.scss\"));\r\nvar sortPostCategory_1 = __webpack_require__(/*! ../../../utils/lists/sortPostCategory */ \"./src/utils/lists/sortPostCategory.tsx\");\r\nvar Mails_1 = __webpack_require__(/*! ./Mails */ \"./src/shared/Components/Header/Mails/index.ts\");\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Components/Header/SearchBlock/index.ts\");\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Components/Header/UserBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Components/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ../ReusedComponents/SortBlock */ \"./src/shared/Components/ReusedComponents/SortBlock/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postTypeAction_1 = __webpack_require__(/*! ../../../store/actions/postTypeAction */ \"./src/store/actions/postTypeAction/index.ts\");\r\nfunction Header() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    return (react_1.default.createElement(\"header\", { id: \"js-header\", className: header_scss_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: header_scss_1.default.headersBlock },\r\n            react_1.default.createElement(Mails_1.Mails, null),\r\n            react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n            react_1.default.createElement(UserBlock_1.UserBlock, null)),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, { onSelect: function (type) { return dispatch((0, postTypeAction_1.setPostType)(type)); }, sortList: sortPostCategory_1.sortingPostList })));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/Mails/Mails.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Components/Header/Mails/Mails.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Mails = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar mails_scss_1 = __importDefault(__webpack_require__(/*! ./mails.scss */ \"./src/shared/Components/Header/Mails/mails.scss\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../ReusedComponents/Text */ \"./src/shared/Components/ReusedComponents/Text/index.ts\");\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nfunction Mails() {\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    return (react_1.default.createElement(\"button\", { className: mails_scss_1.default.mailBtn },\r\n        react_1.default.createElement(\"span\", { className: mails_scss_1.default.mailCount },\r\n            react_1.default.createElement(Text_1.Text, { size: 12, children: 4, color: colorEnum_1.EColor.white, mobileSize: 9 })),\r\n        isMediaMobile ?\r\n            react_1.default.createElement(Icon_1.Icon, { width: 13, height: 10, vbWidth: 20, vbHeight: 16, type: Icon_1.EIcon.mail, pathFill: '#D9D9D9' }) :\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 16, type: Icon_1.EIcon.mail, pathFill: '#D9D9D9' })));\r\n}\r\nexports.Mails = Mails;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/Mails/Mails.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/Mails/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/Header/Mails/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Mails */ \"./src/shared/Components/Header/Mails/Mails.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/Mails/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/Mails/mails.scss":
/*!*******************************************************!*\
  !*** ./src/shared/Components/Header/Mails/mails.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"mailBtn\": \"mails__mailBtn--WkKxw\",\n\t\"mailCount\": \"mails__mailCount--lCDz6\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/Mails/mails.scss?");

/***/ }),

/***/ "./src/shared/Components/Header/SearchBlock/SearchBlock.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Components/Header/SearchBlock/SearchBlock.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Components/Header/SearchBlock/searchblock.scss\"));\r\nvar Input_1 = __webpack_require__(/*! ../../ReusedComponents/Input */ \"./src/shared/Components/ReusedComponents/Input/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction SearchBlock() {\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock },\r\n        isMediaMobile ?\r\n            react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.search, width: 11, height: 11, vbWidth: 19, vbHeight: 19, pathFill: '#c4c4c4' }) :\r\n            react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.search, width: 19, height: 19, pathFill: '#c4c4c4' }),\r\n        react_1.default.createElement(Input_1.Input, { placeholder: 'Поиск' })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/SearchBlock/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Components/Header/SearchBlock/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Components/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/SearchBlock/searchblock.scss":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/Header/SearchBlock/searchblock.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"searchblock__searchBlock--mUK-m\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/SearchBlock/searchblock.scss?");

/***/ }),

/***/ "./src/shared/Components/Header/ThreadTitle/ThreadTitle.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Components/Header/ThreadTitle/ThreadTitle.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Components/Header/ThreadTitle/threadtitle.scss\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Reddit's mirror\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/ThreadTitle/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Components/Header/ThreadTitle/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Components/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/ThreadTitle/threadtitle.scss":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/Header/ThreadTitle/threadtitle.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"threadTitle\": \"threadtitle__threadTitle--9U-SE\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/ThreadTitle/threadtitle.scss?");

/***/ }),

/***/ "./src/shared/Components/Header/UserBlock/UserBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Components/Header/UserBlock/UserBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_scss_1 = __importDefault(__webpack_require__(/*! ./userblock.scss */ \"./src/shared/Components/Header/UserBlock/userblock.scss\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../ReusedComponents/Text */ \"./src/shared/Components/ReusedComponents/Text/index.ts\");\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction UserBlock() {\r\n    var IS_PROD = \"development\" !== 'development';\r\n    var PORT = process.env.PORT;\r\n    var URI = IS_PROD ? undefined : \"http://localhost:\".concat(PORT !== null && PORT !== void 0 ? PORT : 3000);\r\n    var redditUrl = \"https://www.reddit.com/api/v1/authorize?client_id=\".concat(\"5shB1q3ox9a92w\", \"&response_type=code&state=somestate&redirect_uri=\").concat(URI, \"/auth&duration=temporary&scope=identity read submit\");\r\n    var _a = (0, react_1.useState)(30), iconSize = _a[0], setIconSize = _a[1];\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;\r\n    (0, react_1.useEffect)(function () {\r\n        if (isMediaMobile) {\r\n            setIconSize(30);\r\n        }\r\n        else {\r\n            setIconSize(50);\r\n        }\r\n    }, [isMediaMobile]);\r\n    return (react_1.default.createElement(\"a\", { className: userblock_scss_1.default.userBox, href: redditUrl },\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.avatarBox }, data.iconImg\r\n            ? react_1.default.createElement(\"img\", { src: data.iconImg, alt: 'user avatar', className: userblock_scss_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { width: iconSize, height: iconSize, vbWidth: 50, vbHeight: 50, type: Icon_1.EIcon.unknown, pathFill: '#d9d9d9' })),\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.userName }, loading ?\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: colorEnum_1.EColor.black },\r\n                \" \",\r\n                'Загрузка',\r\n                \" \") :\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: colorEnum_1.EColor.black },\r\n                \" \",\r\n                data.name || 'Аноним',\r\n                \" \"))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/UserBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Components/Header/UserBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Components/Header/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/UserBlock/userblock.scss":
/*!***************************************************************!*\
  !*** ./src/shared/Components/Header/UserBlock/userblock.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"userblock__userBox--6YSat\",\n\t\"avatarBox\": \"userblock__avatarBox--hKpBK\",\n\t\"avatarImage\": \"userblock__avatarImage--AnK0A\",\n\t\"userName\": \"userblock__userName--SH9up\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/UserBlock/userblock.scss?");

/***/ }),

/***/ "./src/shared/Components/Header/header.scss":
/*!**************************************************!*\
  !*** ./src/shared/Components/Header/header.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--yiY5G\",\n\t\"headersBlock\": \"header__headersBlock--a-Dmx\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/header.scss?");

/***/ }),

/***/ "./src/shared/Components/Header/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Components/Header/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Components/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Layout/Layout.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Components/Layout/Layout.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_scss_1 = __importDefault(__webpack_require__(/*! ./layout.scss */ \"./src/shared/Components/Layout/layout.scss\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_scss_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Components/Layout/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Components/Layout/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Components/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Layout/layout.scss":
/*!**************************************************!*\
  !*** ./src/shared/Components/Layout/layout.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"layout__layout--KxVBR\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Layout/layout.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/Post.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Components/Post/Post.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_scss_1 = __importDefault(__webpack_require__(/*! ./post.scss */ \"./src/shared/Components/Post/post.scss\"));\r\nvar Modal_1 = __webpack_require__(/*! ../ReusedComponents/Modal */ \"./src/shared/Components/ReusedComponents/Modal/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../CardList/Card/Controls/KarmaCounter */ \"./src/shared/Components/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../ReusedComponents/MetaData */ \"./src/shared/Components/ReusedComponents/MetaData/index.ts\");\r\nvar isImageUrl_1 = __webpack_require__(/*! ../../../utils/js/isImageUrl */ \"./src/utils/js/isImageUrl.ts\");\r\nvar PostComments_1 = __webpack_require__(/*! ./PostComments */ \"./src/shared/Components/Post/PostComments/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar PostCommentFormContainer_1 = __webpack_require__(/*! ./PostCommentFormContainer */ \"./src/shared/Components/Post/PostCommentFormContainer/index.ts\");\r\nvar PostActions_1 = __webpack_require__(/*! ./PostActions */ \"./src/shared/Components/Post/PostActions/index.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../Pages/NotFoundPage */ \"./src/shared/Pages/NotFoundPage/index.ts\");\r\nvar Loading_1 = __webpack_require__(/*! ../ReusedComponents/Loading */ \"./src/shared/Components/ReusedComponents/Loading/index.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar karmaStyle = {\r\n    float: 'left',\r\n    display: 'flex',\r\n    flexDirection: 'column',\r\n    justifyContent: 'center',\r\n    alignContent: 'center',\r\n};\r\nfunction Post() {\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var postId = (0, react_router_dom_1.useParams)().postId;\r\n    var _a = (0, react_1.useState)(), post = _a[0], setPost = _a[1];\r\n    var _b = (0, react_1.useState)(75), postHeight = _b[0], setPostHeight = _b[1];\r\n    var postsWC = (0, react_redux_1.useSelector)(function (state) {\r\n        return state.postWithComments.postsWCData;\r\n    });\r\n    var postWC = (0, react_redux_1.useSelector)(function (state) {\r\n        return (0, ramda_1.find)((0, ramda_1.propEq)('id', postId))(state.postWithComments.postsWCData);\r\n    });\r\n    (0, react_1.useEffect)(function () {\r\n        setPost(postWC);\r\n    }, [postWC]);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!!post) {\r\n            var postHead = document.getElementById(\"\".concat(post.id));\r\n            !!postHead && setPostHeight(100 - Math.ceil(postHead.offsetHeight / (window.document.documentElement.offsetHeight / 100)));\r\n        }\r\n    }, [post]);\r\n    function handleClick() {\r\n        navigate(-1);\r\n    }\r\n    if (!post && typeof post === 'object' && postsWC.length % 20 === 0) {\r\n        return (react_1.default.createElement(NotFoundPage_1.NotFoundPage, null));\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        !post && react_1.default.createElement(Loading_1.Loading, null),\r\n        !!post &&\r\n            react_1.default.createElement(Modal_1.Modal, null,\r\n                react_1.default.createElement(\"div\", { id: post.id, className: post_scss_1.default.post },\r\n                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, { style: karmaStyle, count: post.count_karma }),\r\n                    react_1.default.createElement(\"div\", { className: post_scss_1.default.postTopRight },\r\n                        react_1.default.createElement(\"h2\", { className: post_scss_1.default.postTitle },\r\n                            \" \",\r\n                            post.title,\r\n                            \" \"),\r\n                        react_1.default.createElement(MetaData_1.MetaData, { author: post.author, authorUrl: post.author_url, topicName: post.topic_name, publicationTime: post.created }))),\r\n                react_1.default.createElement(\"div\", { style: { height: \"\".concat(postHeight, \"vh\") }, className: post_scss_1.default.postInfo },\r\n                    react_1.default.createElement(\"div\", { className: post_scss_1.default.postContent },\r\n                        react_1.default.createElement(\"span\", { className: post_scss_1.default.postText }, post.self_text),\r\n                        (0, isImageUrl_1.isImageUrl)(post.url) && react_1.default.createElement(\"img\", { className: post_scss_1.default.postImg, src: post.url, alt: \"Post image\" })),\r\n                    react_1.default.createElement(PostActions_1.PostActions, { upvote_ratio: post.upvote_ratio, num_comments: post.count_comments }),\r\n                    react_1.default.createElement(PostCommentFormContainer_1.PostCommentFormContainer, null),\r\n                    post.comments && react_1.default.createElement(PostComments_1.PostComments, { comments: post.comments, postLink: post === null || post === void 0 ? void 0 : post.post_url })),\r\n                react_1.default.createElement(\"button\", { className: post_scss_1.default.closeBtn, type: 'button', onClick: handleClick },\r\n                    react_1.default.createElement(\"svg\", { width: \"21\", height: \"21\", viewBox: \"0 0 21 21\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z\", fill: \"#ADADAD\" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z\", fill: \"#ADADAD\" }))))));\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostActions/PostActions.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Components/Post/PostActions/PostActions.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostActions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar postactions_scss_1 = __importDefault(__webpack_require__(/*! ./postactions.scss */ \"./src/shared/Components/Post/PostActions/postactions.scss\"));\r\nvar Comments_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Comments */ \"./src/shared/Components/CardList/Card/Controls/Comments/index.ts\");\r\nvar Share_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/Share */ \"./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts\");\r\nvar Hide_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/Hide */ \"./src/shared/Components/CardList/Card/Controls/Actions/Hide/index.ts\");\r\nvar Save_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/Save */ \"./src/shared/Components/CardList/Card/Controls/Actions/Save/index.ts\");\r\nvar Complain_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/Complain */ \"./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../ReusedComponents/Text */ \"./src/shared/Components/ReusedComponents/Text/index.ts\");\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nvar declOfNumVal_1 = __webpack_require__(/*! ../../../../utils/js/declOfNumVal */ \"./src/utils/js/declOfNumVal.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction PostActions(_a) {\r\n    var _b = _a.upvote_ratio, upvote_ratio = _b === void 0 ? 0 : _b, _c = _a.num_comments, num_comments = _c === void 0 ? 0 : _c;\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    return (react_1.default.createElement(\"div\", { className: postactions_scss_1.default.postActions },\r\n        react_1.default.createElement(Comments_1.Comments, { textHide: isMediaMobile, text: \"\".concat(num_comments, \" \").concat((0, declOfNumVal_1.declOfNum)(num_comments, ['комментарий', 'комментария', 'комментариев'])), btnClassName: postactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Share_1.Share, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Hide_1.Hide, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Save_1.Save, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Complain_1.Complain, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: colorEnum_1.EColor.gray99 },\r\n            \" \",\r\n            upvote_ratio,\r\n            \"% \",\r\n            !isMediaMobile && 'проголосовало')));\r\n}\r\nexports.PostActions = PostActions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostActions/PostActions.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostActions/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Components/Post/PostActions/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostActions */ \"./src/shared/Components/Post/PostActions/PostActions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostActions/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostActions/postactions.scss":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/Post/PostActions/postactions.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"actionButton\": \"postactions__actionButton--XjMK7\",\n\t\"postActions\": \"postactions__postActions--6FqLD\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostActions/postactions.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/CommentFormActions/CommentFormActions.tsx":
/*!**********************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/CommentFormActions/CommentFormActions.tsx ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormActions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentformactions_scss_1 = __importDefault(__webpack_require__(/*! ./commentformactions.scss */ \"./src/shared/Components/Post/PostCommentForm/CommentFormActions/commentformactions.scss\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nfunction CommentFormActions() {\r\n    return (react_1.default.createElement(\"div\", { className: commentformactions_scss_1.default.postCommentActions },\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 12, type: Icon_1.EIcon.CAInlineCode, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAPicture, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 20, type: Icon_1.EIcon.CAList, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 14, height: 17, type: Icon_1.EIcon.CADownload, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAAvatar, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 22, height: 16, type: Icon_1.EIcon.CACycle, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 10, type: Icon_1.EIcon.CAStrikethrough, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 18, type: Icon_1.EIcon.CAVoice, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAQuote, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 19, height: 19, type: Icon_1.EIcon.CAPencil, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 18, type: Icon_1.EIcon.CASuperscript, pathFill: \"#999999\" })),\r\n        react_1.default.createElement(\"button\", { className: commentformactions_scss_1.default.actionBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAPdf, pathFill: \"#999999\" }))));\r\n}\r\nexports.CommentFormActions = CommentFormActions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/CommentFormActions/CommentFormActions.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/CommentFormActions/commentformactions.scss":
/*!***********************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/CommentFormActions/commentformactions.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"postCommentActions\": \"commentformactions__postCommentActions--Sxri-\",\n\t\"actionBtn\": \"commentformactions__actionBtn--BUdZZ\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/CommentFormActions/commentformactions.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/CommentFormActions/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/CommentFormActions/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormActions */ \"./src/shared/Components/Post/PostCommentForm/CommentFormActions/CommentFormActions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/CommentFormActions/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/PostCommentForm.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/PostCommentForm.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostCommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar postcommentform_scss_1 = __importDefault(__webpack_require__(/*! ./postcommentform.scss */ \"./src/shared/Components/Post/PostCommentForm/postcommentform.scss\"));\r\nvar CommentFormActions_1 = __webpack_require__(/*! ./CommentFormActions */ \"./src/shared/Components/Post/PostCommentForm/CommentFormActions/index.ts\");\r\nvar preventDefault_1 = __webpack_require__(/*! ../../../../utils/react/preventDefault */ \"./src/utils/react/preventDefault.tsx\");\r\nvar stopPropagation_1 = __webpack_require__(/*! ../../../../utils/react/stopPropagation */ \"./src/utils/react/stopPropagation.tsx\");\r\nfunction PostCommentForm(_a) {\r\n    var onChange = _a.onChange, onSubmit = _a.onSubmit, name = _a.name, value = _a.value;\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        handleChange(value, ref.current);\r\n    }, []);\r\n    function handleChange(value, el) {\r\n        if (el) {\r\n            name ?\r\n                (value == '') ? el.hidden = false : el.hidden = true :\r\n                el.hidden = true;\r\n        }\r\n        onChange(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: postcommentform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function (event) { return onSubmit(event); })) },\r\n        react_1.default.createElement(\"textarea\", { className: postcommentform_scss_1.default.input, value: value, onChange: function (event) { return handleChange(event.target.value, ref.current); } }),\r\n        react_1.default.createElement(\"label\", { ref: ref, className: postcommentform_scss_1.default.label },\r\n            react_1.default.createElement(\"span\", { className: postcommentform_scss_1.default.username },\r\n                name,\r\n                \", \\u043E\\u0441\\u0442\\u0430\\u0432\\u044C\\u0442\\u0435 \\u0432\\u0430\\u0448 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")),\r\n        react_1.default.createElement(CommentFormActions_1.CommentFormActions, null),\r\n        react_1.default.createElement(\"button\", { className: postcommentform_scss_1.default.submitBtn, type: 'submit' }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.PostCommentForm = PostCommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/PostCommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostCommentForm */ \"./src/shared/Components/Post/PostCommentForm/PostCommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentForm/postcommentform.scss":
/*!*************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentForm/postcommentform.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"form\": \"postcommentform__form--DUvWV\",\n\t\"input\": \"postcommentform__input--4QJ+A\",\n\t\"label\": \"postcommentform__label--pFTvS\",\n\t\"username\": \"postcommentform__username--RJUAU\",\n\t\"submitBtn\": \"postcommentform__submitBtn--RHLKk\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentForm/postcommentform.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentFormContainer/PostCommentFormContainer.tsx":
/*!******************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentFormContainer/PostCommentFormContainer.tsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostCommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar updateCommentFormValue_1 = __webpack_require__(/*! ../../../../store/actions/commentFormActions/updateCommentFormValue */ \"./src/store/actions/commentFormActions/updateCommentFormValue.ts\");\r\nvar PostCommentForm_1 = __webpack_require__(/*! ../PostCommentForm */ \"./src/shared/Components/Post/PostCommentForm/index.ts\");\r\nfunction PostCommentFormContainer() {\r\n    var name = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; }).name;\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleSubmit() {\r\n        dispatch((0, updateCommentFormValue_1.updateCommentFormValue)(''));\r\n    }\r\n    function handleChange(value) {\r\n        dispatch((0, updateCommentFormValue_1.updateCommentFormValue)(value));\r\n    }\r\n    return (react_1.default.createElement(PostCommentForm_1.PostCommentForm, { value: value, name: name, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.PostCommentFormContainer = PostCommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentFormContainer/PostCommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostCommentFormContainer/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/Components/Post/PostCommentFormContainer/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostCommentFormContainer */ \"./src/shared/Components/Post/PostCommentFormContainer/PostCommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostCommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/Comment.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/Comment.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar comment_scss_1 = __importDefault(__webpack_require__(/*! ./comment.scss */ \"./src/shared/Components/Post/PostComments/Comment/comment.scss\"));\r\n// @ts-ignore\r\nvar react_html_parser_1 = __importDefault(__webpack_require__(/*! react-html-parser */ \"react-html-parser\"));\r\nvar MetaData_1 = __webpack_require__(/*! ../../../ReusedComponents/MetaData */ \"./src/shared/Components/ReusedComponents/MetaData/index.ts\");\r\nvar CommentActions_1 = __webpack_require__(/*! ./CommentActions */ \"./src/shared/Components/Post/PostComments/Comment/CommentActions/index.ts\");\r\nvar CommentReplyForm_1 = __webpack_require__(/*! ./CommentReplyForm */ \"./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction Comment(_a) {\r\n    var comment = _a.comment, postLink = _a.postLink;\r\n    if (!comment)\r\n        return null;\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    var _b = (0, react_1.useState)(false), formIsOpen = _b[0], setFormIsOpen = _b[1];\r\n    var author = comment.author, author_url = comment.author_url, comment_body = comment.comment_body, created = comment.created, id = comment.id, replies = comment.replies;\r\n    var body = comment_body.replaceAll(\"&gt;\", \">\").replaceAll(\"&lt;\", \"<\").replaceAll(\"&amp;\", \"&\");\r\n    var getNum = function () { return Math.random() * 100; };\r\n    var handleClick = function () {\r\n        setFormIsOpen(!formIsOpen);\r\n    };\r\n    return (react_1.default.createElement(\"li\", null,\r\n        react_1.default.createElement(\"div\", { className: comment_scss_1.default.commentTop },\r\n            react_1.default.createElement(\"svg\", { className: comment_scss_1.default.svgArrows, width: \"19\", height: \"30\", viewBox: \"0 0 19 30\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 30L19 20L8.74228e-07 20L9.5 30Z\", fill: \"#D9D9D9\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })),\r\n            react_1.default.createElement(MetaData_1.MetaData, { author: author, authorUrl: author_url, publicationTime: created })),\r\n        react_1.default.createElement(\"div\", { className: comment_scss_1.default.commentBottom },\r\n            react_1.default.createElement(\"span\", { className: comment_scss_1.default.commentBody }, (0, react_html_parser_1.default)(body)),\r\n            react_1.default.createElement(CommentActions_1.CommentActions, { handleClick: handleClick }),\r\n            formIsOpen &&\r\n                react_1.default.createElement(CommentReplyForm_1.CommentReplyForm, { key: id + getNum(), onClose: function () { return setFormIsOpen(false); }, postAuthor: author }),\r\n            react_1.default.createElement(\"ul\", null, isMediaMobile ? react_1.default.createElement(\"a\", { href: postLink }, \"...\") : !!replies && replies.map(function (replyComment) { return (react_1.default.createElement(Comment, { key: id + getNum(), comment: replyComment })); })))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentActions/CommentActions.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentActions/CommentActions.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentActions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentactions_scss_1 = __importDefault(__webpack_require__(/*! ./commentactions.scss */ \"./src/shared/Components/Post/PostComments/Comment/CommentActions/commentactions.scss\"));\r\nvar Comments_1 = __webpack_require__(/*! ../../../../CardList/Card/Controls/Comments */ \"./src/shared/Components/CardList/Card/Controls/Comments/index.ts\");\r\nvar Share_1 = __webpack_require__(/*! ../../../../CardList/Card/Controls/Actions/Share */ \"./src/shared/Components/CardList/Card/Controls/Actions/Share/index.ts\");\r\nvar Complain_1 = __webpack_require__(/*! ../../../../CardList/Card/Controls/Actions/Complain */ \"./src/shared/Components/CardList/Card/Controls/Actions/Complain/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nfunction CommentActions(_a) {\r\n    var handleClick = _a.handleClick;\r\n    var isMediaSize = (0, useMediaSize_1.useMediaSize)()[0];\r\n    return (react_1.default.createElement(\"div\", { className: commentactions_scss_1.default.postActions },\r\n        react_1.default.createElement(Comments_1.Comments, { onclick: handleClick, textHide: isMediaSize, text: '\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C', btnClassName: commentactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Share_1.Share, { textHide: isMediaSize, btnClassName: commentactions_scss_1.default.actionButton }),\r\n        react_1.default.createElement(Complain_1.Complain, { textHide: isMediaSize, btnClassName: commentactions_scss_1.default.actionButton })));\r\n}\r\nexports.CommentActions = CommentActions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentActions/CommentActions.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentActions/commentactions.scss":
/*!********************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentActions/commentactions.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"actionButton\": \"commentactions__actionButton--QDiQy\",\n\t\"postActions\": \"commentactions__postActions--1yLc7\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentActions/commentactions.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentActions/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentActions/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentActions */ \"./src/shared/Components/Post/PostComments/Comment/CommentActions/CommentActions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentActions/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/CommentReplyForm.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/CommentReplyForm.tsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentReplyForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentreplyform_scss_1 = __importDefault(__webpack_require__(/*! ./commentreplyform.scss */ \"./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/commentreplyform.scss\"));\r\nvar preventDefault_1 = __webpack_require__(/*! ../../../../../../utils/react/preventDefault */ \"./src/utils/react/preventDefault.tsx\");\r\nvar stopPropagation_1 = __webpack_require__(/*! ../../../../../../utils/react/stopPropagation */ \"./src/utils/react/stopPropagation.tsx\");\r\nfunction CommentReplyForm(_a) {\r\n    var _b;\r\n    var onClose = _a.onClose, postAuthor = _a.postAuthor;\r\n    var _c = (0, react_1.useState)(\"\".concat(postAuthor, \", \")), value = _c[0], setValue = _c[1];\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        if (ref.current) {\r\n            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n            ref.current.selectionStart = ref.current.value.length;\r\n        }\r\n    }, [(_b = ref.current) === null || _b === void 0 ? void 0 : _b.textContent]);\r\n    function handleSubmit() {\r\n        setValue('');\r\n        onClose();\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentreplyform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(handleSubmit)) },\r\n        react_1.default.createElement(\"textarea\", { ref: ref, className: commentreplyform_scss_1.default.input, value: value, onChange: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function () { return setValue(value); })) }),\r\n        react_1.default.createElement(\"button\", { className: commentreplyform_scss_1.default.cancelBtn, onClick: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(onClose)), type: 'button' }, \"\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430\"),\r\n        react_1.default.createElement(\"button\", { className: commentreplyform_scss_1.default.submitBtn, type: 'submit' }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentReplyForm = CommentReplyForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/CommentReplyForm.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/commentreplyform.scss":
/*!************************************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/commentreplyform.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"form\": \"commentreplyform__form--BoHa4\",\n\t\"input\": \"commentreplyform__input--fAhln\",\n\t\"label\": \"commentreplyform__label--HyGvb\",\n\t\"username\": \"commentreplyform__username--wTC7i\",\n\t\"cancelBtn\": \"commentreplyform__cancelBtn--2jc1Q\",\n\t\"submitBtn\": \"commentreplyform__submitBtn--RAsK5\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/commentreplyform.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentReplyForm */ \"./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/CommentReplyForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/CommentReplyForm/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/comment.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/comment.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"commentTop\": \"comment__commentTop--1zBch\",\n\t\"commentBottom\": \"comment__commentBottom--5U3TK\",\n\t\"commentBody\": \"comment__commentBody--PSjeR\",\n\t\"div\": \"comment__div--0wXsA\",\n\t\"svgArrows\": \"comment__svgArrows--leH0a\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/comment.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/Comment/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/Comment/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/Components/Post/PostComments/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/PostComments.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/PostComments.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar postcomments_scss_1 = __importDefault(__webpack_require__(/*! ./postcomments.scss */ \"./src/shared/Components/Post/PostComments/postcomments.scss\"));\r\nvar SortBlock_1 = __webpack_require__(/*! ../../ReusedComponents/SortBlock */ \"./src/shared/Components/ReusedComponents/SortBlock/index.ts\");\r\nvar sortPostComments_1 = __webpack_require__(/*! ../../../../utils/lists/sortPostComments */ \"./src/utils/lists/sortPostComments.tsx\");\r\nvar Comment_1 = __webpack_require__(/*! ./Comment */ \"./src/shared/Components/Post/PostComments/Comment/index.ts\");\r\nfunction PostComments(props) {\r\n    var comments = props.comments, postLink = props.postLink;\r\n    comments.pop();\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { className: postcomments_scss_1.default.container },\r\n            react_1.default.createElement(\"span\", { className: postcomments_scss_1.default.preselect }, \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E:\"),\r\n            react_1.default.createElement(SortBlock_1.SortBlock, { onSelect: function () {\r\n                }, sortList: sortPostComments_1.sortingPostComments, sortBlockStyle: postcomments_scss_1.default.sortBlock, selectButtonStyle: postcomments_scss_1.default.selectButton, sortListStyle: postcomments_scss_1.default.sortList, listLineStyle: postcomments_scss_1.default.listLine })),\r\n        react_1.default.createElement(\"ul\", null, (comments.length > 0) && comments.map(function (comment) { return (react_1.default.createElement(Comment_1.Comment, { key: \"\".concat(comment.id).concat(comments.indexOf(comment)), comment: comment, postLink: postLink })); }))));\r\n}\r\nexports.PostComments = PostComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/PostComments.tsx?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostComments */ \"./src/shared/Components/Post/PostComments/PostComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/PostComments/postcomments.scss":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/Post/PostComments/postcomments.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"postcomments__container--dghOd\",\n\t\"preselect\": \"postcomments__preselect--O8wa-\",\n\t\"commentTop\": \"postcomments__commentTop--foI55\",\n\t\"selectButton\": \"postcomments__selectButton--8URqK\",\n\t\"sortBlock\": \"postcomments__sortBlock--9cLgb\",\n\t\"sortList\": \"postcomments__sortList--eAEg5\",\n\t\"listLine\": \"postcomments__listLine--zRpqK\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/PostComments/postcomments.scss?");

/***/ }),

/***/ "./src/shared/Components/Post/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Components/Post/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Components/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Post/post.scss":
/*!**********************************************!*\
  !*** ./src/shared/Components/Post/post.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"closeBtn\": \"post__closeBtn--r2lMj\",\n\t\"postInfo\": \"post__postInfo--oUToY\",\n\t\"postContent\": \"post__postContent--88kG9\",\n\t\"postText\": \"post__postText--rRJM-\",\n\t\"post\": \"post__post--AaO1e\",\n\t\"postTopRight\": \"post__postTopRight--I-gQL\",\n\t\"postTitle\": \"post__postTitle--U8DYb\",\n\t\"postImg\": \"post__postImg--N5RRu\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/Post/post.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Dropdown/Dropdown.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Dropdown/Dropdown.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_scss_1 = __importDefault(__webpack_require__(/*! ./dropdown.scss */ \"./src/shared/Components/ReusedComponents/Dropdown/dropdown.scss\"));\r\nvar NOOP = function () {\r\n};\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = (0, react_1.useState)(isOpen), isDropdownOpen = _d[0], setIsDropDownOpen = _d[1];\r\n    (0, react_1.useEffect)(function () { return setIsDropDownOpen(isOpen); }, [isOpen]);\r\n    (0, react_1.useEffect)(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropDownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.list, onClick: function () { return setIsDropDownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Dropdown/dropdown.scss":
/*!***********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Dropdown/dropdown.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropdown__container--yQv6x\",\n\t\"listContainer\": \"dropdown__listContainer--Ss4en\",\n\t\"list\": \"dropdown__list--QyLcD\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Dropdown/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Dropdown/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Components/ReusedComponents/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Icon/Icon.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Icon/Icon.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"arrow\"] = \"M9.5 0L0 10H19L9.5 0Z\";\r\n    EIcon[\"complain\"] = \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\";\r\n    EIcon[\"comments\"] = \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\";\r\n    EIcon[\"hide\"] = \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\";\r\n    EIcon[\"mail\"] = \"M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z\";\r\n    EIcon[\"remove\"] = \"M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z\";\r\n    EIcon[\"save\"] = \"M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z\";\r\n    EIcon[\"search\"] = \"M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z\";\r\n    EIcon[\"share\"] = \"M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z\";\r\n    EIcon[\"statistics\"] = \"M9.1 0L10.5885 1.52667L7.4165 4.78L4.8165 2.11333L0 7.06L0.9165 8L4.8165 4L7.4165 6.66667L11.5115 2.47333L13 4V0H9.1Z\";\r\n    EIcon[\"unknown\"] = \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\";\r\n    EIcon[\"CAInlineCode\"] = \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\";\r\n    EIcon[\"CAPicture\"] = \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\";\r\n    EIcon[\"CAList\"] = \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\";\r\n    EIcon[\"CADownload\"] = \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\";\r\n    EIcon[\"CAAvatar\"] = \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\";\r\n    EIcon[\"CACycle\"] = \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\";\r\n    EIcon[\"CAStrikethrough\"] = \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\";\r\n    EIcon[\"CAVoice\"] = \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\";\r\n    EIcon[\"CAQuote\"] = \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\";\r\n    EIcon[\"CAPencil\"] = \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z\";\r\n    EIcon[\"CASuperscript\"] = \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\";\r\n    EIcon[\"CAPdf\"] = \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\";\r\n    EIcon[\"SortBest\"] = \"M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z\";\r\n    EIcon[\"SortHot\"] = \"M7.125 0C7.125 0 7.68 1.98781 7.68 3.60056C7.68 5.1458 6.6675 6.3985 5.1225 6.3985C3.57 6.3985 2.4 5.1458 2.4 3.60056L2.4225 3.33052C0.9075 5.1308 0 7.46367 0 9.99906C0 13.3146 2.685 16 6 16C9.315 16 12 13.3146 12 9.99906C12 5.95593 10.0575 2.34787 7.125 0ZM5.7825 13.7496C4.4475 13.7496 3.3675 12.6995 3.3675 11.3943C3.3675 10.1791 4.155 9.32396 5.475 9.05391C6.8025 8.78387 8.175 8.14627 8.94 7.11861C9.2325 8.08626 9.3825 9.10642 9.3825 10.1491C9.3825 12.1369 7.77 13.7496 5.7825 13.7496Z\";\r\n    EIcon[\"SortNew\"] = \"M11.0272 1.92795C12.0776 1.76064 13.0706 2.49283 13.2345 3.54374C13.3301 4.15647 13.7162 4.69603 14.2672 4.98069C15.2209 5.47345 15.6022 6.65427 15.1228 7.61475C14.8452 8.17096 14.8443 8.83295 15.1232 9.38853C15.6074 10.3533 15.2182 11.5359 14.2574 12.0281C13.704 12.3116 13.3155 12.8493 13.2197 13.4637C13.0552 14.5182 12.0586 15.2466 11.0045 15.0791C10.3966 14.9825 9.77658 15.1841 9.34339 15.6214C8.59246 16.3794 7.35809 16.3677 6.61126 15.6056C6.17743 15.1629 5.55035 14.9559 4.93908 15.0586C3.89901 15.2333 2.91632 14.5256 2.75243 13.4838L2.74351 13.4271C2.647 12.8136 2.26404 12.2827 1.71231 11.9976C0.763394 11.5073 0.385495 10.3448 0.864672 9.39021L0.878179 9.36331C1.15676 8.80833 1.15637 8.15428 0.877127 7.59963C0.394701 6.64141 0.770745 5.47338 1.7216 4.9766L1.75242 4.9605C2.29325 4.67794 2.66949 4.14713 2.76425 3.54433C2.92835 2.50046 3.91539 1.77407 4.95755 1.94869C5.57108 2.05149 6.19969 1.84368 6.6343 1.3986C7.38056 0.634364 8.61571 0.623816 9.36606 1.38403C9.79886 1.82253 10.4188 2.02487 11.0272 1.92795Z\";\r\n    EIcon[\"SortTop\"] = \"M8.5 12.8589L13.753 16L12.359 10.08L17 6.09684L10.8885 5.58316L8.5 0L6.1115 5.58316L0 6.09684L4.641 10.08L3.247 16L8.5 12.8589Z\";\r\n    EIcon[\"Sort_Rising\"] = \"M11.0612 16H4.93878V7.91919H0L8 0L16 7.91919H11.0612V16Z\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\nfunction Icon(props) {\r\n    var width = props.width, height = props.height, _a = props.vbWidth, vbWidth = _a === void 0 ? width : _a, _b = props.vbHeight, vbHeight = _b === void 0 ? height : _b, type = props.type, _c = props.pathFill, pathFill = _c === void 0 ? 'white' : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 \".concat(vbWidth, \" \").concat(vbHeight), fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: type, fill: pathFill })));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Icon/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Icon/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Components/ReusedComponents/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Input/Input.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Input/Input.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Input = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar input_scss_1 = __importDefault(__webpack_require__(/*! ./input.scss */ \"./src/shared/Components/ReusedComponents/Input/input.scss\"));\r\nfunction Input(_a) {\r\n    var placeholder = _a.placeholder;\r\n    return (react_1.default.createElement(\"form\", { className: input_scss_1.default.form, method: \"post\", action: \"#\", encType: \"multipart/form-data\" },\r\n        react_1.default.createElement(\"input\", { className: input_scss_1.default.input, type: \"text\", placeholder: placeholder })));\r\n}\r\nexports.Input = Input;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Input/Input.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Input/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Input/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Input */ \"./src/shared/Components/ReusedComponents/Input/Input.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Input/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Input/input.scss":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Input/input.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"form\": \"input__form--c9MLD\",\n\t\"input\": \"input__input--YvUIl\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Input/input.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Loading/Loading.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Loading/Loading.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Loading = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar loading_scss_1 = __importDefault(__webpack_require__(/*! ./loading.scss */ \"./src/shared/Components/ReusedComponents/Loading/loading.scss\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nfunction Loading() {\r\n    var _a = (0, react_1.useState)(), node = _a[0], setNode = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        setNode((_a = document.querySelector('#modal__root')) !== null && _a !== void 0 ? _a : undefined);\r\n    }, []);\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: loading_scss_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: loading_scss_1.default.loader },\r\n            react_1.default.createElement(\"div\", { className: loading_scss_1.default.text }, \"Loading\"),\r\n            react_1.default.createElement(\"div\", { className: loading_scss_1.default.dots },\r\n                react_1.default.createElement(\"div\", null),\r\n                react_1.default.createElement(\"div\", null),\r\n                react_1.default.createElement(\"div\", null),\r\n                react_1.default.createElement(\"div\", null))))), node);\r\n}\r\nexports.Loading = Loading;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Loading/Loading.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Loading/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Loading/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Loading */ \"./src/shared/Components/ReusedComponents/Loading/Loading.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Loading/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Loading/loading.scss":
/*!*********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Loading/loading.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"loading__container--ucOTp\",\n\t\"loader\": \"loading__loader--dZEZT\",\n\t\"dots\": \"loading__dots--GvymT\",\n\t\"show-dot\": \"loading__show-dot--D2Iz4\",\n\t\"dot-fall-left\": \"loading__dot-fall-left--C5Gul\",\n\t\"dot-fall-top\": \"loading__dot-fall-top--ZBHg-\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Loading/loading.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/MetaData/MetaData.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/MetaData/MetaData.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_scss_1 = __importDefault(__webpack_require__(/*! ./metadata.scss */ \"./src/shared/Components/ReusedComponents/MetaData/metadata.scss\"));\r\nvar useUserImgData_1 = __webpack_require__(/*! ../../../../hooks/useUserImgData */ \"./src/hooks/useUserImgData.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar getLongAgoString_1 = __webpack_require__(/*! ../../../../utils/js/getLongAgoString */ \"./src/utils/js/getLongAgoString.ts\");\r\nfunction MetaData(props) {\r\n    var author = props.author, authorUrl = props.authorUrl, topicName = props.topicName, publicationTime = props.publicationTime;\r\n    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];\r\n    var name = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; }).name;\r\n    var avatar = (name && author !== (\"[deleted]\" || false)) ? (0, useUserImgData_1.useUserImgData)(author)[0] : '';\r\n    return (react_1.default.createElement(\"div\", { className: metadata_scss_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: metadata_scss_1.default.userLink },\r\n            name && avatar !== '' && !avatar.includes('styles.redditmedia') &&\r\n                react_1.default.createElement(\"img\", { className: metadata_scss_1.default.avatar, src: avatar, alt: \"avatar\" }),\r\n            (!name || avatar.includes('styles.redditmedia')) &&\r\n                react_1.default.createElement(\"img\", { className: metadata_scss_1.default.avatar, src: 'https://i.redd.it/4qezgmi0x87z.png', alt: \"avatar\" }),\r\n            react_1.default.createElement(\"a\", { href: authorUrl, className: metadata_scss_1.default.userName }, author)),\r\n        react_1.default.createElement(\"span\", { className: metadata_scss_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_scss_1.default.publishedLabel },\r\n                !isMediaMobile && \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\",\r\n                \" \"),\r\n            (0, getLongAgoString_1.getLongAgoString)(publicationTime)),\r\n        !isMediaMobile && topicName && react_1.default.createElement(\"span\", { className: metadata_scss_1.default.topicName }, topicName)));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/MetaData/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/MetaData/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/Components/ReusedComponents/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/MetaData/metadata.scss":
/*!***********************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/MetaData/metadata.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"avatar\": \"metadata__avatar--XvMVJ\",\n\t\"createdAt\": \"metadata__createdAt--itbTa\",\n\t\"modal__root\": \"metadata__modal__root--BVBei\",\n\t\"metaData\": \"metadata__metaData--SZSL+\",\n\t\"topicName\": \"metadata__topicName--ZDui6\",\n\t\"userLink\": \"metadata__userLink--wBqiM\",\n\t\"userName\": \"metadata__userName--OUvNT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/MetaData/metadata.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Modal/Modal.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Modal/Modal.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar modal_scss_1 = __importDefault(__webpack_require__(/*! ./modal.scss */ \"./src/shared/Components/ReusedComponents/Modal/modal.scss\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useMouseEventAction_1 = __webpack_require__(/*! ../../../../hooks/useMouseEventAction */ \"./src/hooks/useMouseEventAction.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Modal(_a) {\r\n    var children = _a.children;\r\n    var _b = (0, react_1.useState)(), node = _b[0], setNode = _b[1];\r\n    var ref = (0, react_1.useRef)(null);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        setNode((_a = document.querySelector('#modal__root')) !== null && _a !== void 0 ? _a : undefined);\r\n    }, []);\r\n    (0, useMouseEventAction_1.useMouseEventAction)({ action: function () { return navigate(-1); }, ref: ref });\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: modal_scss_1.default.modalBack },\r\n        react_1.default.createElement(\"div\", { ref: ref, className: modal_scss_1.default.modal }, children))), node);\r\n}\r\nexports.Modal = Modal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Modal/Modal.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Modal/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Modal/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Modal */ \"./src/shared/Components/ReusedComponents/Modal/Modal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Modal/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Modal/modal.scss":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Modal/modal.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modalBack\": \"modal__modalBack--nPNoW\",\n\t\"modal\": \"modal__modal--f1-au\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Modal/modal.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/SortBlock/SortBlock.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/SortBlock/SortBlock.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/Components/ReusedComponents/SortBlock/sortblock.scss\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../Dropdown */ \"./src/shared/Components/ReusedComponents/Dropdown/index.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar stopPropagation_1 = __webpack_require__(/*! ../../../../utils/react/stopPropagation */ \"./src/utils/react/stopPropagation.tsx\");\r\nvar preventDefault_1 = __webpack_require__(/*! ../../../../utils/react/preventDefault */ \"./src/utils/react/preventDefault.tsx\");\r\nfunction SortBlock(_a) {\r\n    var sortList = _a.sortList, _b = _a.selectButtonStyle, selectButtonStyle = _b === void 0 ? sortblock_scss_1.default.selectButton : _b, _c = _a.sortBlockStyle, sortBlockStyle = _c === void 0 ? sortblock_scss_1.default.sortBlock : _c, _d = _a.sortListStyle, sortListStyle = _d === void 0 ? sortblock_scss_1.default.sortList : _d, _e = _a.listLineStyle, listLineStyle = _e === void 0 ? sortblock_scss_1.default.listLine : _e, onSelect = _a.onSelect;\r\n    var _f = (0, react_1.useState)(false), isDropdownOpen = _f[0], setIsDropDownOpen = _f[1];\r\n    var _g = (0, react_1.useState)('best'), select = _g[0], setSelect = _g[1];\r\n    var _h = (0, react_1.useState)(sortList.filter(function (el) { return el.id !== select; }, sortList)), list = _h[0], setList = _h[1];\r\n    var btn = (sortList)[(0, ramda_1.findIndex)((0, ramda_1.propEq)('id', select))(sortList)].element;\r\n    var style = {\r\n        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',\r\n        transition: 'transform 300ms ease',\r\n        marginLeft: '7px'\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        setList(sortList.filter(function (el) { return el.id !== select; }, sortList));\r\n        onSelect(select);\r\n    }, [select]);\r\n    return (react_1.default.createElement(\"div\", { className: sortBlockStyle, onClick: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function () { return setIsDropDownOpen(!isDropdownOpen); })) },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: isDropdownOpen, button: react_1.default.createElement(\"button\", { className: selectButtonStyle },\r\n                btn,\r\n                react_1.default.createElement(\"svg\", { style: style, width: \"14\", height: \"8\", viewBox: \"0 0 14 8\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M7 8L-3.16551e-07 0.712163L0.757932 2.72853e-07L7 6.49874L13.2421 1.36425e-06L14 0.712164L7 8Z\", fill: \"#CC6633\" }))), children: react_1.default.createElement(\"ul\", { className: sortListStyle }, list.map(function (action) { return (react_1.default.createElement(\"li\", { className: listLineStyle, key: action.id, onClick: function () {\r\n                    setSelect(action.id);\r\n                } }, action.element)); })) })));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/SortBlock/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/SortBlock/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Components/ReusedComponents/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/SortBlock/sortblock.scss":
/*!*************************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/SortBlock/sortblock.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"selectButton\": \"sortblock__selectButton--fs0uv\",\n\t\"sortBlock\": \"sortblock__sortBlock--L3923\",\n\t\"sortList\": \"sortblock__sortList--sbwkH\",\n\t\"listLine\": \"sortblock__listLine--L78-w\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/SortBlock/sortblock.scss?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Text/Text.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Text/Text.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_scss_1 = __importDefault(__webpack_require__(/*! ./text.scss */ \"./src/shared/Components/ReusedComponents/Text/text.scss\"));\r\nvar colorEnum_1 = __webpack_require__(/*! ../../../../utils/enums/colorEnum */ \"./src/utils/enums/colorEnum.ts\");\r\nvar classNames = __webpack_require__(/*! classnames */ \"classnames\");\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, children = props.children, _e = props.color, color = _e === void 0 ? colorEnum_1.EColor.black : _e, desktopSize = props.desktopSize, mobileSize = props.mobileSize, size = props.size, tabletSize = props.tabletSize;\r\n    var classes = classNames(text_scss_1.default[\"s\".concat(size)], (_a = {}, _a[text_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_scss_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_scss_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Text/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Text/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Components/ReusedComponents/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ReusedComponents/Text/text.scss":
/*!***************************************************************!*\
  !*** ./src/shared/Components/ReusedComponents/Text/text.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s28\": \"text__s28--aQaJ2\",\n\t\"s20\": \"text__s20--oEso3\",\n\t\"s16\": \"text__s16--WeQek\",\n\t\"s14\": \"text__s14--kyh0n\",\n\t\"s12\": \"text__s12--Qs9WS\",\n\t\"s10\": \"text__s10--DD5AF\",\n\t\"black\": \"text__black--upygf\",\n\t\"orange\": \"text__orange--Cth1N\",\n\t\"green\": \"text__green--ql5Cv\",\n\t\"white\": \"text__white--BmCPv\",\n\t\"grayF4\": \"text__grayF4--il1F1\",\n\t\"grayF3\": \"text__grayF3--KW8W0\",\n\t\"grayD9\": \"text__grayD9--cAU9s\",\n\t\"grayC4\": \"text__grayC4--eCNY2\",\n\t\"gray99\": \"text__gray99--+Xst+\",\n\t\"gray66\": \"text__gray66--Sx2hZ\",\n\t\"m28\": \"text__m28--S46n8\",\n\t\"m20\": \"text__m20--1pV7D\",\n\t\"m16\": \"text__m16--2IlPp\",\n\t\"m14\": \"text__m14--vfroE\",\n\t\"m12\": \"text__m12--niEHL\",\n\t\"m10\": \"text__m10--ZFuXx\",\n\t\"m9\": \"text__m9--qevgN\",\n\t\"t28\": \"text__t28--LwNBT\",\n\t\"t20\": \"text__t20--Me4DN\",\n\t\"t16\": \"text__t16--3-Lja\",\n\t\"t14\": \"text__t14--vrP9W\",\n\t\"t12\": \"text__t12--Cq4Cw\",\n\t\"t10\": \"text__t10--bciTw\",\n\t\"d28\": \"text__d28--+3XWf\",\n\t\"d20\": \"text__d20--QAMtw\",\n\t\"d16\": \"text__d16--JHYuU\",\n\t\"d14\": \"text__d14--hV7aJ\",\n\t\"d12\": \"text__d12--wfSaz\",\n\t\"d10\": \"text__d10--s5x+R\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Components/ReusedComponents/Text/text.scss?");

/***/ }),

/***/ "./src/shared/Pages/NotFoundPage/NotFoundPage.tsx":
/*!********************************************************!*\
  !*** ./src/shared/Pages/NotFoundPage/NotFoundPage.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar notfoundpage_scss_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.scss */ \"./src/shared/Pages/NotFoundPage/notfoundpage.scss\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction NotFoundPage() {\r\n    return (react_1.default.createElement(\"div\", { className: notfoundpage_scss_1.default.pageBox },\r\n        react_1.default.createElement(\"h1\", { className: notfoundpage_scss_1.default.headText }, \"PAGE NOT FOUND\",\r\n            react_1.default.createElement(\"span\", { className: notfoundpage_scss_1.default.smallText },\r\n                \" Go to\",\r\n                react_1.default.createElement(react_router_dom_1.Link, { className: notfoundpage_scss_1.default.homeLink, to: '/' }, \"Home page\")))));\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/NotFoundPage/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Pages/NotFoundPage/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/Pages/NotFoundPage/NotFoundPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/index.ts?");

/***/ }),

/***/ "./src/shared/Pages/NotFoundPage/notfoundpage.scss":
/*!*********************************************************!*\
  !*** ./src/shared/Pages/NotFoundPage/notfoundpage.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"pageBox\": \"notfoundpage__pageBox--0T-W3\",\n\t\"headText\": \"notfoundpage__headText--ZjocW\",\n\t\"smallText\": \"notfoundpage__smallText--lcGsN\",\n\t\"homeLink\": \"notfoundpage__homeLink--8ZzKS\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NotFoundPage/notfoundpage.scss?");

/***/ }),

/***/ "./src/shared/Pages/PostsPage/PostsPage.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Pages/PostsPage/PostsPage.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CardList_1 = __webpack_require__(/*! ../../Components/CardList */ \"./src/shared/Components/CardList/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ../../Components/Content */ \"./src/shared/Components/Content/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction PostsPage() {\r\n    return (react_1.default.createElement(Content_1.Content, null,\r\n        react_1.default.createElement(CardList_1.CardList, null),\r\n        react_1.default.createElement(react_router_dom_1.Outlet, null)));\r\n}\r\nexports.PostsPage = PostsPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/PostsPage/PostsPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/PostsPage/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Pages/PostsPage/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostsPage */ \"./src/shared/Pages/PostsPage/PostsPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/PostsPage/index.ts?");

/***/ }),

/***/ "./src/store/actions/commentFormActions/updateCommentFormValue.ts":
/*!************************************************************************!*\
  !*** ./src/store/actions/commentFormActions/updateCommentFormValue.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateCommentFormValue = exports.UPDATE_POST_COMMENT_TEXT = void 0;\r\nexports.UPDATE_POST_COMMENT_TEXT = 'UPDATE_POST_COMMENT_TEXT';\r\nvar updateCommentFormValue = function (text) { return ({\r\n    type: exports.UPDATE_POST_COMMENT_TEXT,\r\n    payload: text\r\n}); };\r\nexports.updateCommentFormValue = updateCommentFormValue;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/commentFormActions/updateCommentFormValue.ts?");

/***/ }),

/***/ "./src/store/actions/meActions/fetchMyData.ts":
/*!****************************************************!*\
  !*** ./src/store/actions/meActions/fetchMyData.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchMyData = exports.FETCH_MY_DATA = void 0;\r\nexports.FETCH_MY_DATA = 'FETCH_MY_DATA';\r\nvar fetchMyData = function () { return ({\r\n    type: exports.FETCH_MY_DATA,\r\n}); };\r\nexports.fetchMyData = fetchMyData;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/meActions/fetchMyData.ts?");

/***/ }),

/***/ "./src/store/actions/meActions/fetchMyDataError.ts":
/*!*********************************************************!*\
  !*** ./src/store/actions/meActions/fetchMyDataError.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchMyDataError = exports.FETCH_MY_DATA_FAILURE = void 0;\r\nexports.FETCH_MY_DATA_FAILURE = 'FETCH_MY_DATA_FAILURE';\r\nvar fetchMyDataError = function (error) { return ({\r\n    type: exports.FETCH_MY_DATA_FAILURE,\r\n    error: error,\r\n}); };\r\nexports.fetchMyDataError = fetchMyDataError;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/meActions/fetchMyDataError.ts?");

/***/ }),

/***/ "./src/store/actions/meActions/index.ts":
/*!**********************************************!*\
  !*** ./src/store/actions/meActions/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchMyDataAsync = void 0;\r\nvar fetchMyData_1 = __webpack_require__(/*! ./fetchMyData */ \"./src/store/actions/meActions/fetchMyData.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar setMyData_1 = __webpack_require__(/*! ./setMyData */ \"./src/store/actions/meActions/setMyData.ts\");\r\nvar fetchMyDataError_1 = __webpack_require__(/*! ./fetchMyDataError */ \"./src/store/actions/meActions/fetchMyDataError.ts\");\r\nvar fetchMyDataAsync = function () { return function (dispatch, getState) {\r\n    if (!getState().token)\r\n        return;\r\n    dispatch((0, fetchMyData_1.fetchMyData)());\r\n    (function () { return __awaiter(void 0, void 0, void 0, function () {\r\n        var e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n                            headers: { Authorization: \"bearer \".concat(getState().token) }\r\n                        })\r\n                            .then(function (res) {\r\n                            var userData = res.data;\r\n                            dispatch((0, setMyData_1.setMyData)({\r\n                                name: userData.name,\r\n                                iconImg: userData.icon_img\r\n                            }));\r\n                        })];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    e_1 = _a.sent();\r\n                    dispatch((0, fetchMyDataError_1.fetchMyDataError)(e_1));\r\n                    localStorage.removeItem('reddit-token');\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); })();\r\n}; };\r\nexports.fetchMyDataAsync = fetchMyDataAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/meActions/index.ts?");

/***/ }),

/***/ "./src/store/actions/meActions/setMyData.ts":
/*!**************************************************!*\
  !*** ./src/store/actions/meActions/setMyData.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setMyData = exports.FETCH_MY_DATA_SUCCESS = void 0;\r\nexports.FETCH_MY_DATA_SUCCESS = 'FETCH_MY_DATA_SUCCESS';\r\nvar setMyData = function (userData) { return ({\r\n    type: exports.FETCH_MY_DATA_SUCCESS,\r\n    payload: userData\r\n}); };\r\nexports.setMyData = setMyData;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/meActions/setMyData.ts?");

/***/ }),

/***/ "./src/store/actions/postActions/fetchPosts.ts":
/*!*****************************************************!*\
  !*** ./src/store/actions/postActions/fetchPosts.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPosts = exports.FETCH_POSTS = void 0;\r\nexports.FETCH_POSTS = 'FETCH_POSTS';\r\nvar fetchPosts = function () { return ({\r\n    type: exports.FETCH_POSTS,\r\n}); };\r\nexports.fetchPosts = fetchPosts;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postActions/fetchPosts.ts?");

/***/ }),

/***/ "./src/store/actions/postActions/fetchPostsError.ts":
/*!**********************************************************!*\
  !*** ./src/store/actions/postActions/fetchPostsError.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPostsError = exports.FETCH_POSTS_FAILURE = void 0;\r\nexports.FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';\r\nvar fetchPostsError = function (error) { return ({\r\n    type: exports.FETCH_POSTS_FAILURE,\r\n    error: error,\r\n}); };\r\nexports.fetchPostsError = fetchPostsError;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postActions/fetchPostsError.ts?");

/***/ }),

/***/ "./src/store/actions/postActions/fetchPostsSuccess.ts":
/*!************************************************************!*\
  !*** ./src/store/actions/postActions/fetchPostsSuccess.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setPosts = exports.FETCH_POSTS_SUCCESS = void 0;\r\nexports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';\r\nvar setPosts = function (postData, after) { return ({\r\n    type: exports.FETCH_POSTS_SUCCESS,\r\n    payload: { postData: postData, after: after }\r\n}); };\r\nexports.setPosts = setPosts;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postActions/fetchPostsSuccess.ts?");

/***/ }),

/***/ "./src/store/actions/postActions/index.ts":
/*!************************************************!*\
  !*** ./src/store/actions/postActions/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsRequestAsync = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar fetchPosts_1 = __webpack_require__(/*! ./fetchPosts */ \"./src/store/actions/postActions/fetchPosts.ts\");\r\nvar fetchPostsSuccess_1 = __webpack_require__(/*! ./fetchPostsSuccess */ \"./src/store/actions/postActions/fetchPostsSuccess.ts\");\r\nvar fetchPostsError_1 = __webpack_require__(/*! ./fetchPostsError */ \"./src/store/actions/postActions/fetchPostsError.ts\");\r\nvar postsRequestAsync = function () { return function (dispatch, getState) {\r\n    if (getState().posts.loading)\r\n        return;\r\n    dispatch((0, fetchPosts_1.fetchPosts)());\r\n    (function () { return __awaiter(void 0, void 0, void 0, function () {\r\n        var e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/\".concat(getState().postsType, \".json\"), {\r\n                            headers: {\r\n                                Authorization: \"bearer \".concat(getState().token),\r\n                            },\r\n                            params: {\r\n                                limit: 20,\r\n                                after: getState().posts.after,\r\n                            }\r\n                        })\r\n                            .then(function (res) {\r\n                            var afterKey = res.data.data.after;\r\n                            var postDataList = res.data.data.children;\r\n                            postDataList = postDataList.map(function (post) {\r\n                                var postData = post.data;\r\n                                return {\r\n                                    id: postData.id,\r\n                                    author: postData.author,\r\n                                    author_url: 'https://www.reddit.com/r/' + postData.subreddit + '/',\r\n                                    post_url: postData.permalink,\r\n                                    topic_name: postData.link_flair_text,\r\n                                    title: postData.title,\r\n                                    upvote_ratio: postData.upvote_ratio * 100,\r\n                                    url: postData.url,\r\n                                    count_comments: postData.num_comments,\r\n                                    count_karma: postData.ups,\r\n                                    created: new Date(postData.created * 1000),\r\n                                    self_text: postData.selftext,\r\n                                };\r\n                            });\r\n                            return { postDataList: postDataList, afterKey: afterKey };\r\n                        })\r\n                            .then(function (_a) {\r\n                            var postDataList = _a.postDataList, afterKey = _a.afterKey;\r\n                            dispatch((0, fetchPostsSuccess_1.setPosts)(postDataList, afterKey));\r\n                        })];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    e_1 = _a.sent();\r\n                    dispatch((0, fetchPostsError_1.fetchPostsError)(e_1));\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); })();\r\n}; };\r\nexports.postsRequestAsync = postsRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postActions/index.ts?");

/***/ }),

/***/ "./src/store/actions/postTypeAction/index.ts":
/*!***************************************************!*\
  !*** ./src/store/actions/postTypeAction/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setPostType = exports.SET_POSTS_TYPE = void 0;\r\nexports.SET_POSTS_TYPE = 'SET_POSTS_TYPE';\r\nvar setPostType = function (postsType) { return ({\r\n    type: exports.SET_POSTS_TYPE,\r\n    payload: {\r\n        postsType: postsType,\r\n        posts: { loading: false, error: '', postsData: [], after: '' }\r\n    }\r\n}); };\r\nexports.setPostType = setPostType;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postTypeAction/index.ts?");

/***/ }),

/***/ "./src/store/actions/postWCActions/fetchPostsWithComments.ts":
/*!*******************************************************************!*\
  !*** ./src/store/actions/postWCActions/fetchPostsWithComments.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPostsWC = exports.FETCH_POSTS_WC = void 0;\r\nexports.FETCH_POSTS_WC = 'FETCH_POSTS_WC';\r\nvar fetchPostsWC = function () { return ({\r\n    type: exports.FETCH_POSTS_WC,\r\n}); };\r\nexports.fetchPostsWC = fetchPostsWC;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postWCActions/fetchPostsWithComments.ts?");

/***/ }),

/***/ "./src/store/actions/postWCActions/fetchPostsWithCommentsError.ts":
/*!************************************************************************!*\
  !*** ./src/store/actions/postWCActions/fetchPostsWithCommentsError.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPostsWCError = exports.FETCH_POSTS_WC_FAILURE = void 0;\r\nexports.FETCH_POSTS_WC_FAILURE = 'FETCH_POSTS_WC_FAILURE';\r\nvar fetchPostsWCError = function (error) { return ({\r\n    type: exports.FETCH_POSTS_WC_FAILURE,\r\n    error: error,\r\n}); };\r\nexports.fetchPostsWCError = fetchPostsWCError;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postWCActions/fetchPostsWithCommentsError.ts?");

/***/ }),

/***/ "./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts":
/*!**************************************************************************!*\
  !*** ./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setPostsWC = exports.FETCH_POSTS_WC_SUCCESS = void 0;\r\nexports.FETCH_POSTS_WC_SUCCESS = 'FETCH_POSTS_WC_SUCCESS';\r\nvar setPostsWC = function (postsData) { return ({\r\n    type: exports.FETCH_POSTS_WC_SUCCESS,\r\n    payload: postsData\r\n}); };\r\nexports.setPostsWC = setPostsWC;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts?");

/***/ }),

/***/ "./src/store/actions/postWCActions/index.ts":
/*!**************************************************!*\
  !*** ./src/store/actions/postWCActions/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsWCRequestAsync = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar fetchPostsWithComments_1 = __webpack_require__(/*! ./fetchPostsWithComments */ \"./src/store/actions/postWCActions/fetchPostsWithComments.ts\");\r\nvar fetchPostsWithCommentsSuccess_1 = __webpack_require__(/*! ./fetchPostsWithCommentsSuccess */ \"./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts\");\r\nvar postsWCRequestAsync = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var postsWC, createPostData;\r\n    return __generator(this, function (_a) {\r\n        postsWC = getState().postWithComments.postsWCData;\r\n        createPostData = function (comment) {\r\n            var _a, _b;\r\n            var commentData = comment.data;\r\n            return {\r\n                id: commentData.id,\r\n                author: commentData.author,\r\n                author_url: 'https://www.reddit.com/r/' + commentData.subreddit + '/',\r\n                comment_body: commentData.body_html,\r\n                replies: (_b = (_a = commentData.replies) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children.map(function (reply) {\r\n                    if (!reply.kind.includes('more')) {\r\n                        return reply;\r\n                    }\r\n                    else\r\n                        return null;\r\n                }).filter(function (reply) { var _a; return !!((_a = reply === null || reply === void 0 ? void 0 : reply.data) === null || _a === void 0 ? void 0 : _a.author); }).map(createPostData),\r\n                count_karma: commentData.ups,\r\n                created: new Date(commentData.created * 1000),\r\n            };\r\n        };\r\n        dispatch((0, fetchPostsWithComments_1.fetchPostsWC)());\r\n        getState().posts.postsData.map(function (post) { return __awaiter(void 0, void 0, void 0, function () {\r\n            var e_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        return [4 /*yield*/, axios_1.default.get(\"https://www.reddit.com\".concat(post.post_url, \".json\"))\r\n                                .then(function (res) {\r\n                                var _a, _b, _c;\r\n                                return (0, ramda_1.merge)(post, {\r\n                                    comments: (_c = (_b = (_a = res.data[1]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.map(createPostData)\r\n                                });\r\n                            })\r\n                                .then(function (post) {\r\n                                postsWC.push(post);\r\n                            })\r\n                                .then(function () { return dispatch((0, fetchPostsWithCommentsSuccess_1.setPostsWC)(postsWC)); })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 3];\r\n                    case 2:\r\n                        e_1 = _a.sent();\r\n                        console.log(e_1);\r\n                        return [3 /*break*/, 3];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n        return [2 /*return*/];\r\n    });\r\n}); }; };\r\nexports.postsWCRequestAsync = postsWCRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/postWCActions/index.ts?");

/***/ }),

/***/ "./src/store/actions/tokenActions/index.ts":
/*!*************************************************!*\
  !*** ./src/store/actions/tokenActions/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = void 0;\r\nvar setToken_1 = __webpack_require__(/*! ./setToken */ \"./src/store/actions/tokenActions/setToken.ts\");\r\nvar saveToken = function () { return function (dispatch) {\r\n    var localStorageToken = localStorage.getItem('reddit-token');\r\n    var token = localStorageToken || window.__token__;\r\n    if (token !== 'undefined' && !localStorageToken) {\r\n        localStorage.setItem('reddit-token', token);\r\n        dispatch((0, setToken_1.setToken)(token));\r\n    }\r\n    else if (token !== 'undefined')\r\n        dispatch((0, setToken_1.setToken)(token));\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/tokenActions/index.ts?");

/***/ }),

/***/ "./src/store/actions/tokenActions/setToken.ts":
/*!****************************************************!*\
  !*** ./src/store/actions/tokenActions/setToken.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setToken = exports.SET_TOKEN = void 0;\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    payload: token.toString()\r\n}); };\r\nexports.setToken = setToken;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/tokenActions/setToken.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = exports.initialState = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\r\nexports.initialState = {\r\n    commentText: '',\r\n    token: '',\r\n    posts: { loading: false, error: '', postsData: [], after: '' },\r\n    postsType: 'best',\r\n    postWithComments: { loading: false, error: '', postsWCData: [] },\r\n    me: { loading: false, error: '', myData: {} }\r\n};\r\nexports.store = (0, redux_1.createStore)(reducers_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar updateCommentFormValue_1 = __webpack_require__(/*! ../actions/commentFormActions/updateCommentFormValue */ \"./src/store/actions/commentFormActions/updateCommentFormValue.ts\");\r\nvar setToken_1 = __webpack_require__(/*! ../actions/tokenActions/setToken */ \"./src/store/actions/tokenActions/setToken.ts\");\r\nvar fetchPosts_1 = __webpack_require__(/*! ../actions/postActions/fetchPosts */ \"./src/store/actions/postActions/fetchPosts.ts\");\r\nvar fetchPostsError_1 = __webpack_require__(/*! ../actions/postActions/fetchPostsError */ \"./src/store/actions/postActions/fetchPostsError.ts\");\r\nvar fetchPostsSuccess_1 = __webpack_require__(/*! ../actions/postActions/fetchPostsSuccess */ \"./src/store/actions/postActions/fetchPostsSuccess.ts\");\r\nvar fetchPostsWithComments_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithComments */ \"./src/store/actions/postWCActions/fetchPostsWithComments.ts\");\r\nvar fetchPostsWithCommentsError_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithCommentsError */ \"./src/store/actions/postWCActions/fetchPostsWithCommentsError.ts\");\r\nvar fetchPostsWithCommentsSuccess_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithCommentsSuccess */ \"./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts\");\r\nvar fetchMyData_1 = __webpack_require__(/*! ../actions/meActions/fetchMyData */ \"./src/store/actions/meActions/fetchMyData.ts\");\r\nvar setMyData_1 = __webpack_require__(/*! ../actions/meActions/setMyData */ \"./src/store/actions/meActions/setMyData.ts\");\r\nvar fetchMyDataError_1 = __webpack_require__(/*! ../actions/meActions/fetchMyDataError */ \"./src/store/actions/meActions/fetchMyDataError.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar postReducer_1 = __webpack_require__(/*! ./postReducer */ \"./src/store/reducers/postReducer.ts\");\r\nvar postWCReducer_1 = __webpack_require__(/*! ./postWCReducer */ \"./src/store/reducers/postWCReducer.ts\");\r\nvar meReducer_1 = __webpack_require__(/*! ./meReducer */ \"./src/store/reducers/meReducer.ts\");\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/store/index.ts\");\r\nvar postTypeAction_1 = __webpack_require__(/*! ../actions/postTypeAction */ \"./src/store/actions/postTypeAction/index.ts\");\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = index_1.initialState; }\r\n    switch (action.type) {\r\n        case updateCommentFormValue_1.UPDATE_POST_COMMENT_TEXT:\r\n            return (0, ramda_1.merge)(state, { commentText: action.payload });\r\n        case setToken_1.SET_TOKEN:\r\n            return (0, ramda_1.merge)(state, { token: action.payload });\r\n        case postTypeAction_1.SET_POSTS_TYPE:\r\n            return (0, ramda_1.merge)(state, {\r\n                posts: action.payload.posts,\r\n                postsType: action.payload.postsType\r\n            });\r\n        case fetchPosts_1.FETCH_POSTS:\r\n        case fetchPostsSuccess_1.FETCH_POSTS_SUCCESS:\r\n        case fetchPostsError_1.FETCH_POSTS_FAILURE:\r\n            return (0, ramda_1.merge)(state, { posts: (0, postReducer_1.postReducer)(state.posts, action) });\r\n        case fetchPostsWithComments_1.FETCH_POSTS_WC:\r\n        case fetchPostsWithCommentsSuccess_1.FETCH_POSTS_WC_SUCCESS:\r\n        case fetchPostsWithCommentsError_1.FETCH_POSTS_WC_FAILURE:\r\n            return (0, ramda_1.merge)(state, { postWithComments: (0, postWCReducer_1.postsWCReducer)(state.postWithComments, action) });\r\n        case fetchMyData_1.FETCH_MY_DATA:\r\n        case setMyData_1.FETCH_MY_DATA_SUCCESS:\r\n        case fetchMyDataError_1.FETCH_MY_DATA_FAILURE:\r\n            return (0, ramda_1.merge)(state, { me: (0, meReducer_1.meReducer)(state.me, action) });\r\n    }\r\n    return state;\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ }),

/***/ "./src/store/reducers/meReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/reducers/meReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar fetchMyData_1 = __webpack_require__(/*! ../actions/meActions/fetchMyData */ \"./src/store/actions/meActions/fetchMyData.ts\");\r\nvar fetchMyDataError_1 = __webpack_require__(/*! ../actions/meActions/fetchMyDataError */ \"./src/store/actions/meActions/fetchMyDataError.ts\");\r\nvar setMyData_1 = __webpack_require__(/*! ../actions/meActions/setMyData */ \"./src/store/actions/meActions/setMyData.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar meReducer = function (state, action) {\r\n    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.me; }); }\r\n    switch (action.type) {\r\n        case fetchMyData_1.FETCH_MY_DATA:\r\n            return (0, ramda_1.merge)(state, { loading: true });\r\n        case setMyData_1.FETCH_MY_DATA_SUCCESS:\r\n            return (0, ramda_1.merge)(state, { loading: false, myData: action.payload });\r\n        case fetchMyDataError_1.FETCH_MY_DATA_FAILURE:\r\n            return (0, ramda_1.merge)(state, { loading: false, error: action.error });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/meReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/postReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/postReducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postReducer = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar fetchPosts_1 = __webpack_require__(/*! ../actions/postActions/fetchPosts */ \"./src/store/actions/postActions/fetchPosts.ts\");\r\nvar fetchPostsError_1 = __webpack_require__(/*! ../actions/postActions/fetchPostsError */ \"./src/store/actions/postActions/fetchPostsError.ts\");\r\nvar fetchPostsSuccess_1 = __webpack_require__(/*! ../actions/postActions/fetchPostsSuccess */ \"./src/store/actions/postActions/fetchPostsSuccess.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar postReducer = function (state, action) {\r\n    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.posts; }); }\r\n    switch (action.type) {\r\n        case fetchPosts_1.FETCH_POSTS:\r\n            return (0, ramda_1.merge)(state, { loading: true });\r\n        case fetchPostsSuccess_1.FETCH_POSTS_SUCCESS:\r\n            return (0, ramda_1.merge)(state, {\r\n                loading: false,\r\n                postsData: __spreadArray(__spreadArray([], state.postsData, true), action.payload.postData, true),\r\n                after: action.payload.after\r\n            });\r\n        case fetchPostsError_1.FETCH_POSTS_FAILURE:\r\n            return (0, ramda_1.merge)(state, {\r\n                loading: false,\r\n                error: action.error\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postReducer = postReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/postReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/postWCReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/postWCReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsWCReducer = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar fetchPostsWithComments_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithComments */ \"./src/store/actions/postWCActions/fetchPostsWithComments.ts\");\r\nvar fetchPostsWithCommentsSuccess_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithCommentsSuccess */ \"./src/store/actions/postWCActions/fetchPostsWithCommentsSuccess.ts\");\r\nvar fetchPostsWithCommentsError_1 = __webpack_require__(/*! ../actions/postWCActions/fetchPostsWithCommentsError */ \"./src/store/actions/postWCActions/fetchPostsWithCommentsError.ts\");\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar postsWCReducer = function (state, action) {\r\n    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments; }); }\r\n    switch (action.type) {\r\n        case fetchPostsWithComments_1.FETCH_POSTS_WC:\r\n            return (0, ramda_1.merge)(state, { loading: true });\r\n        case fetchPostsWithCommentsSuccess_1.FETCH_POSTS_WC_SUCCESS:\r\n            return (0, ramda_1.merge)(state, { loading: false, postsWCData: action.payload });\r\n        case fetchPostsWithCommentsError_1.FETCH_POSTS_WC_FAILURE:\r\n            return (0, ramda_1.merge)(state, { loading: false, error: action.error });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsWCReducer = postsWCReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/postWCReducer.ts?");

/***/ }),

/***/ "./src/utils/enums/colorEnum.ts":
/*!**************************************!*\
  !*** ./src/utils/enums/colorEnum.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColor = void 0;\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"grayF4\"] = \"grayF4\";\r\n    EColor[\"grayF3\"] = \"grayF3\";\r\n    EColor[\"grayD9\"] = \"grayD9\";\r\n    EColor[\"grayC4\"] = \"grayC4\";\r\n    EColor[\"gray99\"] = \"gray99\";\r\n    EColor[\"gray66\"] = \"gray66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n\n\n//# sourceURL=webpack:///./src/utils/enums/colorEnum.ts?");

/***/ }),

/***/ "./src/utils/js/declOfNumVal.ts":
/*!**************************************!*\
  !*** ./src/utils/js/declOfNumVal.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.declOfNum = void 0;\r\n/**\r\n * Склонение слова в зависиости от числа, к которому оно относится\r\n * к примеру declOfNum(5, ['день', 'дня', 'дней'])\r\n **/\r\nvar declOfNum = function (n, text_forms) {\r\n    n = Math.abs(n) % 100;\r\n    if (n > 10 && n < 20) {\r\n        return text_forms[2];\r\n    }\r\n    n = n % 10;\r\n    if (n > 1 && n < 5) {\r\n        return text_forms[1];\r\n    }\r\n    if (n === 1) {\r\n        return text_forms[0];\r\n    }\r\n    return text_forms[2];\r\n};\r\nexports.declOfNum = declOfNum;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/declOfNumVal.ts?");

/***/ }),

/***/ "./src/utils/js/getLongAgoString.ts":
/*!******************************************!*\
  !*** ./src/utils/js/getLongAgoString.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getLongAgoString = void 0;\r\nvar declOfNumVal_1 = __webpack_require__(/*! ./declOfNumVal */ \"./src/utils/js/declOfNumVal.ts\");\r\n/**\r\n * Сообщает пользователю сколько прошло времени.\r\n * Например, время последней активности, размещения поста.\r\n **/\r\nvar getLongAgoString = function (date) {\r\n    var currentDate = new Date();\r\n    var diff = null;\r\n    if (date.getFullYear() !== currentDate.getFullYear()) {\r\n        diff = currentDate.getFullYear() - date.getFullYear();\r\n        return \"\".concat(diff, \" \").concat((0, declOfNumVal_1.declOfNum)(diff, ['год', 'года', 'лет']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    }\r\n    else if (date.getMonth() !== currentDate.getMonth()) {\r\n        diff = currentDate.getMonth() - date.getMonth();\r\n        return \"\".concat(diff, \" \").concat((0, declOfNumVal_1.declOfNum)(diff, ['месяц', 'месяца', 'месяцев']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    }\r\n    else if (date.getDate() !== currentDate.getDate()) {\r\n        diff = currentDate.getDate() - date.getDate();\r\n        return \"\".concat(diff, \" \").concat((0, declOfNumVal_1.declOfNum)(diff, ['день', 'дня', 'дней']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    }\r\n    else if (date.getHours() !== currentDate.getHours()) {\r\n        diff = currentDate.getHours() - date.getHours();\r\n        return \"\".concat(diff, \" \").concat((0, declOfNumVal_1.declOfNum)(diff, ['час', 'часа', 'часов']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    }\r\n    else if (date.getMinutes() !== currentDate.getMinutes()) {\r\n        diff = currentDate.getMinutes() - date.getMinutes();\r\n        return \"\".concat(diff, \" \").concat((0, declOfNumVal_1.declOfNum)(diff, ['минута', 'минуты', 'минут']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\");\r\n    }\r\n    else\r\n        return 'только что';\r\n};\r\nexports.getLongAgoString = getLongAgoString;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/getLongAgoString.ts?");

/***/ }),

/***/ "./src/utils/js/isImageUrl.ts":
/*!************************************!*\
  !*** ./src/utils/js/isImageUrl.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.isImageUrl = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar isImageUrl = function (url) {\r\n    return (0, ramda_1.includes)('png', url) || (0, ramda_1.includes)('jpg', url) || (0, ramda_1.includes)('svg', url);\r\n};\r\nexports.isImageUrl = isImageUrl;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/isImageUrl.ts?");

/***/ }),

/***/ "./src/utils/js/stringShorter.ts":
/*!***************************************!*\
  !*** ./src/utils/js/stringShorter.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stringShorter = void 0;\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\n/**\r\n * Сокращает строку в зависимости от размера экрана\r\n *\r\n **/\r\nfunction stringShorter(string) {\r\n    var n = [];\r\n    for (var _i = 1; _i < arguments.length; _i++) {\r\n        n[_i - 1] = arguments[_i];\r\n    }\r\n    var nMobile = n[0], nTablet = n[1], nDesktop = n[2];\r\n    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];\r\n    if ((string.length <= nMobile) && (string.length <= nTablet) && (string.length <= nDesktop)) {\r\n        return string;\r\n    }\r\n    if (nMobile && isMediaMobile) {\r\n        return (string.length <= nMobile) ? string : \"\".concat(string.slice(0, nMobile - 1), \"...\");\r\n    }\r\n    else if (nTablet && isMediaTablet) {\r\n        return (string.length <= nTablet) ? string : \"\".concat(string.slice(0, nTablet - 1), \"...\");\r\n    }\r\n    else if (nDesktop && isMediaDesktop) {\r\n        return (string.length <= nDesktop) ? string : \"\".concat(string.slice(0, nDesktop - 1), \"...\");\r\n    }\r\n    else {\r\n        return string;\r\n    }\r\n}\r\nexports.stringShorter = stringShorter;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/stringShorter.ts?");

/***/ }),

/***/ "./src/utils/lists/sortPostCategory.tsx":
/*!**********************************************!*\
  !*** ./src/utils/lists/sortPostCategory.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sortingPostList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../shared/Components/ReusedComponents/Icon */ \"./src/shared/Components/ReusedComponents/Icon/index.ts\");\r\nexports.sortingPostList = [\r\n    {\r\n        id: 'best',\r\n        element: react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(Icon_1.Icon, { width: 14, height: 16, type: Icon_1.EIcon.SortBest, pathFill: '#CC6633' }),\r\n            \"\\u00A0\\u00A0\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\")\r\n    },\r\n    {\r\n        id: 'hot',\r\n        element: react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(Icon_1.Icon, { width: 12, height: 16, type: Icon_1.EIcon.SortHot, pathFill: '#CC6633' }),\r\n            \"\\u00A0\\u00A0\\u0416\\u0430\\u0440\\u043A\\u0438\\u0435\")\r\n    },\r\n    {\r\n        id: 'new',\r\n        element: react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 17, type: Icon_1.EIcon.SortNew, pathFill: '#CC6633' }),\r\n            \"\\u00A0\\u00A0\\u041D\\u043E\\u0432\\u044B\\u0435\")\r\n    },\r\n    {\r\n        id: 'top',\r\n        element: react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(Icon_1.Icon, { width: 17, height: 16, type: Icon_1.EIcon.SortTop, pathFill: '#CC6633' }),\r\n            \"\\u00A0\\u00A0\\u0422\\u043E\\u043F\\u043E\\u0432\\u044B\\u0435\")\r\n    },\r\n    {\r\n        id: 'rising',\r\n        element: react_1.default.createElement(\"span\", null,\r\n            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 16, type: Icon_1.EIcon.Sort_Rising, pathFill: '#CC6633' }),\r\n            \"\\u00A0\\u00A0\\u0414\\u043B\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435\")\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/utils/lists/sortPostCategory.tsx?");

/***/ }),

/***/ "./src/utils/lists/sortPostComments.tsx":
/*!**********************************************!*\
  !*** ./src/utils/lists/sortPostComments.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sortingPostComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.sortingPostComments = [\r\n    {\r\n        id: 'best',\r\n        element: react_1.default.createElement(\"span\", null, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\")\r\n    },\r\n    {\r\n        id: 'new',\r\n        element: react_1.default.createElement(\"span\", null, \"\\u0421\\u043D\\u0430\\u0447\\u0430\\u043B\\u0430 \\u043D\\u043E\\u0432\\u044B\\u0435\")\r\n    },\r\n    {\r\n        id: 'old',\r\n        element: react_1.default.createElement(\"span\", null, \"\\u0421\\u043D\\u0430\\u0447\\u0430\\u043B\\u0430 \\u0441\\u0442\\u0430\\u0440\\u044B\\u0435\")\r\n    },\r\n    {\r\n        id: 'dispute',\r\n        element: react_1.default.createElement(\"span\", null, \"\\u0421\\u043F\\u043E\\u0440\\u043D\\u044B\\u0435\")\r\n    },\r\n    {\r\n        id: 'qa',\r\n        element: react_1.default.createElement(\"span\", null, \"\\u0412\\u043E\\u043F\\u0440\\u043E\\u0441-\\u043E\\u0442\\u0432\\u0435\\u0442\")\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/utils/lists/sortPostComments.tsx?");

/***/ }),

/***/ "./src/utils/react/preventDefault.tsx":
/*!********************************************!*\
  !*** ./src/utils/react/preventDefault.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.preventDefault = void 0;\r\nfunction preventDefault(fn) {\r\n    return function (e) {\r\n        e.preventDefault();\r\n        fn(e);\r\n    };\r\n}\r\nexports.preventDefault = preventDefault;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/preventDefault.tsx?");

/***/ }),

/***/ "./src/utils/react/stopPropagation.tsx":
/*!*********************************************!*\
  !*** ./src/utils/react/stopPropagation.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stopPropagation = void 0;\r\nfunction stopPropagation(fn) {\r\n    return function (e) {\r\n        e.stopPropagation();\r\n        fn(e);\r\n    };\r\n}\r\nexports.stopPropagation = stopPropagation;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/stopPropagation.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");\n\n//# sourceURL=webpack:///external_%22ramda%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-html-parser\");\n\n//# sourceURL=webpack:///external_%22react-html-parser%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });