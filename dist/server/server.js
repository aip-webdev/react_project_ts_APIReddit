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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(67), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaSize = void 0;
var react_1 = __webpack_require__(0);
var useWindowSize_1 = __webpack_require__(71);
function useMediaSize() {
    var width = (0, useWindowSize_1.useWindowSize)().width;
    var _a = (0, react_1.useState)(true), isMediaMobile = _a[0], setIsMediaMobile = _a[1];
    var _b = (0, react_1.useState)(true), isMediaTablet = _b[0], setIsMediaTablet = _b[1];
    var _c = (0, react_1.useState)(true), isMediaDesktop = _c[0], setIsMediaDesktop = _c[1];
    (0, react_1.useEffect)(function () {
        width < 1024 ? setIsMediaMobile(true) : setIsMediaMobile(false);
        ((width > 1024) && (width < 1400)) ? setIsMediaTablet(true) : setIsMediaTablet(false);
        width > 1400 ? setIsMediaDesktop(true) : setIsMediaDesktop(false);
    }, [width]);
    return [isMediaMobile, isMediaTablet, isMediaDesktop];
}
exports.useMediaSize = useMediaSize;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(121), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EColor = void 0;
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["grayF4"] = "grayF4";
    EColor["grayF3"] = "grayF3";
    EColor["grayD9"] = "grayD9";
    EColor["grayC4"] = "grayC4";
    EColor["gray99"] = "gray99";
    EColor["gray66"] = "gray66";
})(EColor = exports.EColor || (exports.EColor = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(120), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(126), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPosts = exports.FETCH_POSTS = void 0;
exports.FETCH_POSTS = 'FETCH_POSTS';
var fetchPosts = function () { return ({
    type: exports.FETCH_POSTS,
}); };
exports.fetchPosts = fetchPosts;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostsError = exports.FETCH_POSTS_FAILURE = void 0;
exports.FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
var fetchPostsError = function (error) { return ({
    type: exports.FETCH_POSTS_FAILURE,
    error: error,
}); };
exports.fetchPostsError = fetchPostsError;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setPosts = exports.FETCH_POSTS_SUCCESS = void 0;
exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var setPosts = function (postData, after) { return ({
    type: exports.FETCH_POSTS_SUCCESS,
    payload: { postData: postData, after: after }
}); };
exports.setPosts = setPosts;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostsWC = exports.FETCH_POSTS_WC = void 0;
exports.FETCH_POSTS_WC = 'FETCH_POSTS_WC';
var fetchPostsWC = function () { return ({
    type: exports.FETCH_POSTS_WC,
}); };
exports.fetchPostsWC = fetchPostsWC;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setPostsWC = exports.FETCH_POSTS_WC_SUCCESS = void 0;
exports.FETCH_POSTS_WC_SUCCESS = 'FETCH_POSTS_WC_SUCCESS';
var setPostsWC = function (postsData) { return ({
    type: exports.FETCH_POSTS_WC_SUCCESS,
    payload: postsData
}); };
exports.setPostsWC = setPostsWC;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMyData = exports.FETCH_MY_DATA = void 0;
exports.FETCH_MY_DATA = 'FETCH_MY_DATA';
var fetchMyData = function () { return ({
    type: exports.FETCH_MY_DATA,
}); };
exports.fetchMyData = fetchMyData;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setMyData = exports.FETCH_MY_DATA_SUCCESS = void 0;
exports.FETCH_MY_DATA_SUCCESS = 'FETCH_MY_DATA_SUCCESS';
var setMyData = function (userData) { return ({
    type: exports.FETCH_MY_DATA_SUCCESS,
    payload: userData
}); };
exports.setMyData = setMyData;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMyDataError = exports.FETCH_MY_DATA_FAILURE = void 0;
exports.FETCH_MY_DATA_FAILURE = 'FETCH_MY_DATA_FAILURE';
var fetchMyDataError = function (error) { return ({
    type: exports.FETCH_MY_DATA_FAILURE,
    error: error,
}); };
exports.fetchMyDataError = fetchMyDataError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListenerAction = void 0;
var react_1 = __webpack_require__(0);
function useEventListenerAction(eventType, eventAction, hookDeps) {
    (0, react_1.useEffect)(function () {
        window.addEventListener(eventType, eventAction);
        return function () { return window.removeEventListener(eventType, eventAction); };
    }, hookDeps !== null && hookDeps !== void 0 ? hookDeps : undefined);
}
exports.useEventListenerAction = useEventListenerAction;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stopPropagation = void 0;
function stopPropagation(fn) {
    return function (e) {
        e.stopPropagation();
        fn(e);
    };
}
exports.stopPropagation = stopPropagation;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.preventDefault = void 0;
function preventDefault(fn) {
    return function (e) {
        e.preventDefault();
        fn(e);
    };
}
exports.preventDefault = preventDefault;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.initialState = void 0;
var redux_1 = __webpack_require__(53);
var redux_devtools_extension_1 = __webpack_require__(54);
var redux_thunk_1 = __importDefault(__webpack_require__(55));
var reducers_1 = __webpack_require__(56);
exports.initialState = {
    commentText: '',
    token: '',
    posts: { loading: false, error: '', postsData: [], after: '' },
    postsType: 'best',
    postWithComments: { loading: false, error: '', postsWCData: [] },
    me: { loading: false, error: '', myData: {} }
};
exports.store = (0, redux_1.createStore)(reducers_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentFormValue = exports.UPDATE_POST_COMMENT_TEXT = void 0;
exports.UPDATE_POST_COMMENT_TEXT = 'UPDATE_POST_COMMENT_TEXT';
var updateCommentFormValue = function (text) { return ({
    type: exports.UPDATE_POST_COMMENT_TEXT,
    payload: text
}); };
exports.updateCommentFormValue = updateCommentFormValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.SET_TOKEN = void 0;
exports.SET_TOKEN = 'SET_TOKEN';
var setToken = function (token) { return ({
    type: exports.SET_TOKEN,
    payload: token.toString()
}); };
exports.setToken = setToken;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostsWCError = exports.FETCH_POSTS_WC_FAILURE = void 0;
exports.FETCH_POSTS_WC_FAILURE = 'FETCH_POSTS_WC_FAILURE';
var fetchPostsWCError = function (error) { return ({
    type: exports.FETCH_POSTS_WC_FAILURE,
    error: error,
}); };
exports.fetchPostsWCError = fetchPostsWCError;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setPostType = exports.SET_POSTS_TYPE = void 0;
exports.SET_POSTS_TYPE = 'SET_POSTS_TYPE';
var setPostType = function (postsType) { return ({
    type: exports.SET_POSTS_TYPE,
    payload: {
        postsType: postsType,
        posts: { loading: false, error: '', postsData: [], after: '' }
    }
}); };
exports.setPostType = setPostType;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.declOfNum = void 0;
/**
 * Склонение слова в зависиости от числа, к которому оно относится
 * к примеру declOfNum(5, ['день', 'дня', 'дней'])
 **/
var declOfNum = function (n, text_forms) {
    n = Math.abs(n) % 100;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    n = n % 10;
    if (n > 1 && n < 5) {
        return text_forms[1];
    }
    if (n === 1) {
        return text_forms[0];
    }
    return text_forms[2];
};
exports.declOfNum = declOfNum;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"controls": "controls__controls--9U7F0",
	"actionButton": "controls__actionButton--HXGDx"
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(118), exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(135), exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isImageUrl = void 0;
var ramda_1 = __webpack_require__(4);
var isImageUrl = function (url) {
    return (0, ramda_1.includes)('png', url) || (0, ramda_1.includes)('jpg', url) || (0, ramda_1.includes)('svg', url);
};
exports.isImageUrl = isImageUrl;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRequestAsync = void 0;
var axios_1 = __importDefault(__webpack_require__(7));
var fetchPosts_1 = __webpack_require__(11);
var fetchPostsSuccess_1 = __webpack_require__(13);
var fetchPostsError_1 = __webpack_require__(12);
var postsRequestAsync = function () { return function (dispatch, getState) {
    if (getState().posts.loading)
        return;
    dispatch((0, fetchPosts_1.fetchPosts)());
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/".concat(getState().postsType, ".json"), {
                            headers: {
                                Authorization: "bearer ".concat(getState().token),
                            },
                            params: {
                                limit: 20,
                                after: getState().posts.after,
                            }
                        })
                            .then(function (res) {
                            var afterKey = res.data.data.after;
                            var postDataList = res.data.data.children;
                            postDataList = postDataList.map(function (post) {
                                var postData = post.data;
                                return {
                                    id: postData.id,
                                    author: postData.author,
                                    author_url: 'https://www.reddit.com/r/' + postData.subreddit + '/',
                                    post_url: postData.permalink,
                                    topic_name: postData.link_flair_text,
                                    title: postData.title,
                                    upvote_ratio: postData.upvote_ratio * 100,
                                    url: postData.url,
                                    count_comments: postData.num_comments,
                                    count_karma: postData.ups,
                                    created: new Date(postData.created * 1000),
                                    self_text: postData.selftext,
                                };
                            });
                            return { postDataList: postDataList, afterKey: afterKey };
                        })
                            .then(function (_a) {
                            var postDataList = _a.postDataList, afterKey = _a.afterKey;
                            dispatch((0, fetchPostsSuccess_1.setPosts)(postDataList, afterKey));
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    dispatch((0, fetchPostsError_1.fetchPostsError)(e_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
}; };
exports.postsRequestAsync = postsRequestAsync;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(140), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useBodyHeight = void 0;
var react_1 = __webpack_require__(0);
var useEventListenerAction_1 = __webpack_require__(19);
function useBodyHeight() {
    var _a = (0, react_1.useState)(0), height = _a[0], setHeight = _a[1];
    (0, useEventListenerAction_1.useEventListenerAction)('resize', function () { return setHeight(window.document.body.clientHeight); });
    return height;
}
exports.useBodyHeight = useBodyHeight;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var axios_1 = __importDefault(__webpack_require__(7));
var express_1 = __importDefault(__webpack_require__(45));
var compression_1 = __importDefault(__webpack_require__(46));
var server_1 = __importDefault(__webpack_require__(47));
var server_2 = __webpack_require__(48);
var helmet_1 = __importDefault(__webpack_require__(49));
var App_1 = __webpack_require__(50);
var indexTemplate_1 = __webpack_require__(178);
var IS_PROD = "production" !== 'development';
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
var URI = IS_PROD ? "https://app-reddit-react.herokuapp.com" : "http://localhost:".concat(PORT);
var app = (0, express_1.default)();
if (IS_PROD) {
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
}
var reqHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, (0, App_1.App)()))));
        return [2 /*return*/];
    });
}); };
app.use('/static', express_1.default.static('./dist/client'));
app.use('/img-src', express_1.default.static('./dist/img-src'));
app.get('/auth', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=").concat(URI, "/auth"), {
            auth: { username: "E89-Aj6RhzZPfGUuNU_hog", password: "C_LhUK1tkpGeVQnShgHEHsyPPNCcxg" },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        })
            .then(function (_a) {
            var data = _a.data;
            res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { children: (0, App_1.App)(), location: req.path })), data['access_token']));
        })
            .catch(console.log);
        return [2 /*return*/];
    });
}); });
app.get('*', reqHandler);
app.listen(PORT, function () {
    !IS_PROD && console.log("Server started on ".concat(URI, " "));
});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var root_1 = __webpack_require__(51);
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(52);
var react_redux_1 = __webpack_require__(1);
var store_1 = __webpack_require__(26);
var Layout_1 = __webpack_require__(60);
var Header_1 = __webpack_require__(63);
var useToken_1 = __webpack_require__(93);
var react_router_dom_1 = __webpack_require__(6);
var NotFoundPage_1 = __webpack_require__(33);
var PostsPage_1 = __webpack_require__(97);
var Post_1 = __webpack_require__(146);
function AppComponent() {
    (0, useToken_1.useToken)();
    return (react_1.default.createElement(Layout_1.Layout, null,
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
function AppRouter() {
    var _a = (0, react_1.useState)(false), redirect = _a[0], setRedirect = _a[1];
    (0, react_1.useEffect)(function () {
        setRedirect(true);
    }, []);
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        redirect &&
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(AppComponent, null) },
                react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/auth/:query', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(PostsPage_1.PostsPage, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: ':postId', element: react_1.default.createElement(Post_1.Post, null) }))),
        redirect && react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, null) })));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
    react_1.default.createElement(AppRouter, null)); });


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,body{height:100%;padding:0;margin:0;background-color:#f5f5f5;font-size:14px;line-height:16px;font-family:\"Roboto\",serif;overflow:hidden}html::-webkit-scrollbar,body::-webkit-scrollbar{width:0}*{color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a{text-decoration:none}ul{list-style:none}button{background-color:transparent;border:none;cursor:pointer}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var updateCommentFormValue_1 = __webpack_require__(27);
var setToken_1 = __webpack_require__(28);
var fetchPosts_1 = __webpack_require__(11);
var fetchPostsError_1 = __webpack_require__(12);
var fetchPostsSuccess_1 = __webpack_require__(13);
var fetchPostsWithComments_1 = __webpack_require__(14);
var fetchPostsWithCommentsError_1 = __webpack_require__(29);
var fetchPostsWithCommentsSuccess_1 = __webpack_require__(15);
var fetchMyData_1 = __webpack_require__(16);
var setMyData_1 = __webpack_require__(17);
var fetchMyDataError_1 = __webpack_require__(18);
var ramda_1 = __webpack_require__(4);
var postReducer_1 = __webpack_require__(57);
var postWCReducer_1 = __webpack_require__(58);
var meReducer_1 = __webpack_require__(59);
var index_1 = __webpack_require__(26);
var postTypeAction_1 = __webpack_require__(30);
var rootReducer = function (state, action) {
    if (state === void 0) { state = index_1.initialState; }
    switch (action.type) {
        case updateCommentFormValue_1.UPDATE_POST_COMMENT_TEXT:
            return (0, ramda_1.merge)(state, { commentText: action.payload });
        case setToken_1.SET_TOKEN:
            return (0, ramda_1.merge)(state, { token: action.payload });
        case postTypeAction_1.SET_POSTS_TYPE:
            return (0, ramda_1.merge)(state, {
                posts: action.payload.posts,
                postsType: action.payload.postsType
            });
        case fetchPosts_1.FETCH_POSTS:
        case fetchPostsSuccess_1.FETCH_POSTS_SUCCESS:
        case fetchPostsError_1.FETCH_POSTS_FAILURE:
            return (0, ramda_1.merge)(state, { posts: (0, postReducer_1.postReducer)(state.posts, action) });
        case fetchPostsWithComments_1.FETCH_POSTS_WC:
        case fetchPostsWithCommentsSuccess_1.FETCH_POSTS_WC_SUCCESS:
        case fetchPostsWithCommentsError_1.FETCH_POSTS_WC_FAILURE:
            return (0, ramda_1.merge)(state, { postWithComments: (0, postWCReducer_1.postsWCReducer)(state.postWithComments, action) });
        case fetchMyData_1.FETCH_MY_DATA:
        case setMyData_1.FETCH_MY_DATA_SUCCESS:
        case fetchMyDataError_1.FETCH_MY_DATA_FAILURE:
            return (0, ramda_1.merge)(state, { me: (0, meReducer_1.meReducer)(state.me, action) });
    }
    return state;
};
exports.rootReducer = rootReducer;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReducer = void 0;
var react_redux_1 = __webpack_require__(1);
var fetchPosts_1 = __webpack_require__(11);
var fetchPostsError_1 = __webpack_require__(12);
var fetchPostsSuccess_1 = __webpack_require__(13);
var ramda_1 = __webpack_require__(4);
var postReducer = function (state, action) {
    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.posts; }); }
    switch (action.type) {
        case fetchPosts_1.FETCH_POSTS:
            return (0, ramda_1.merge)(state, { loading: true });
        case fetchPostsSuccess_1.FETCH_POSTS_SUCCESS:
            return (0, ramda_1.merge)(state, {
                loading: false,
                postsData: __spreadArray(__spreadArray([], state.postsData, true), action.payload.postData, true),
                after: action.payload.after
            });
        case fetchPostsError_1.FETCH_POSTS_FAILURE:
            return (0, ramda_1.merge)(state, {
                loading: false,
                error: action.error
            });
        default:
            return state;
    }
};
exports.postReducer = postReducer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.postsWCReducer = void 0;
var react_redux_1 = __webpack_require__(1);
var fetchPostsWithComments_1 = __webpack_require__(14);
var fetchPostsWithCommentsSuccess_1 = __webpack_require__(15);
var fetchPostsWithCommentsError_1 = __webpack_require__(29);
var ramda_1 = __webpack_require__(4);
var postsWCReducer = function (state, action) {
    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments; }); }
    switch (action.type) {
        case fetchPostsWithComments_1.FETCH_POSTS_WC:
            return (0, ramda_1.merge)(state, { loading: true });
        case fetchPostsWithCommentsSuccess_1.FETCH_POSTS_WC_SUCCESS:
            return (0, ramda_1.merge)(state, { loading: false, postsWCData: action.payload });
        case fetchPostsWithCommentsError_1.FETCH_POSTS_WC_FAILURE:
            return (0, ramda_1.merge)(state, { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.postsWCReducer = postsWCReducer;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var fetchMyData_1 = __webpack_require__(16);
var fetchMyDataError_1 = __webpack_require__(18);
var setMyData_1 = __webpack_require__(17);
var react_redux_1 = __webpack_require__(1);
var ramda_1 = __webpack_require__(4);
var meReducer = function (state, action) {
    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.me; }); }
    switch (action.type) {
        case fetchMyData_1.FETCH_MY_DATA:
            return (0, ramda_1.merge)(state, { loading: true });
        case setMyData_1.FETCH_MY_DATA_SUCCESS:
            return (0, ramda_1.merge)(state, { loading: false, myData: action.payload });
        case fetchMyDataError_1.FETCH_MY_DATA_FAILURE:
            return (0, ramda_1.merge)(state, { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_scss_1 = __importDefault(__webpack_require__(62));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_scss_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"layout": "layout__layout--KxVBR"
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_scss_1 = __importDefault(__webpack_require__(65));
var sortPostCategory_1 = __webpack_require__(66);
var Mails_1 = __webpack_require__(68);
var SearchBlock_1 = __webpack_require__(75);
var UserBlock_1 = __webpack_require__(81);
var ThreadTitle_1 = __webpack_require__(86);
var SortBlock_1 = __webpack_require__(31);
var react_redux_1 = __webpack_require__(1);
var postTypeAction_1 = __webpack_require__(30);
function Header() {
    var dispatch = (0, react_redux_1.useDispatch)();
    return (react_1.default.createElement("header", { id: "js-header", className: header_scss_1.default.header },
        react_1.default.createElement("div", { className: header_scss_1.default.headersBlock },
            react_1.default.createElement(Mails_1.Mails, null),
            react_1.default.createElement(SearchBlock_1.SearchBlock, null),
            react_1.default.createElement(UserBlock_1.UserBlock, null)),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, { onSelect: function (type) { return dispatch((0, postTypeAction_1.setPostType)(type)); }, sortList: sortPostCategory_1.sortingPostList })));
}
exports.Header = Header;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"header": "header__header--yiY5G",
	"headersBlock": "header__headersBlock--a-Dmx"
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingPostList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icon_1 = __webpack_require__(2);
exports.sortingPostList = [
    {
        id: 'best',
        element: react_1.default.createElement("span", null,
            react_1.default.createElement(Icon_1.Icon, { width: 14, height: 16, type: Icon_1.EIcon.SortBest, pathFill: '#CC6633' }),
            "\u00A0\u00A0\u041B\u0443\u0447\u0448\u0438\u0435")
    },
    {
        id: 'hot',
        element: react_1.default.createElement("span", null,
            react_1.default.createElement(Icon_1.Icon, { width: 12, height: 16, type: Icon_1.EIcon.SortHot, pathFill: '#CC6633' }),
            "\u00A0\u00A0\u0416\u0430\u0440\u043A\u0438\u0435")
    },
    {
        id: 'new',
        element: react_1.default.createElement("span", null,
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 17, type: Icon_1.EIcon.SortNew, pathFill: '#CC6633' }),
            "\u00A0\u00A0\u041D\u043E\u0432\u044B\u0435")
    },
    {
        id: 'top',
        element: react_1.default.createElement("span", null,
            react_1.default.createElement(Icon_1.Icon, { width: 17, height: 16, type: Icon_1.EIcon.SortTop, pathFill: '#CC6633' }),
            "\u00A0\u00A0\u0422\u043E\u043F\u043E\u0432\u044B\u0435")
    },
    {
        id: 'rising',
        element: react_1.default.createElement("span", null,
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 16, type: Icon_1.EIcon.Sort_Rising, pathFill: '#CC6633' }),
            "\u00A0\u00A0\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435")
    },
];


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var EIcon;
(function (EIcon) {
    EIcon["arrow"] = "M9.5 0L0 10H19L9.5 0Z";
    EIcon["complain"] = "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z";
    EIcon["comments"] = "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z";
    EIcon["hide"] = "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z";
    EIcon["mail"] = "M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z";
    EIcon["remove"] = "M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z";
    EIcon["save"] = "M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z";
    EIcon["search"] = "M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z";
    EIcon["share"] = "M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z";
    EIcon["statistics"] = "M9.1 0L10.5885 1.52667L7.4165 4.78L4.8165 2.11333L0 7.06L0.9165 8L4.8165 4L7.4165 6.66667L11.5115 2.47333L13 4V0H9.1Z";
    EIcon["unknown"] = "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z";
    EIcon["CAInlineCode"] = "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z";
    EIcon["CAPicture"] = "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z";
    EIcon["CAList"] = "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z";
    EIcon["CADownload"] = "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z";
    EIcon["CAAvatar"] = "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z";
    EIcon["CACycle"] = "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z";
    EIcon["CAStrikethrough"] = "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z";
    EIcon["CAVoice"] = "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z";
    EIcon["CAQuote"] = "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z";
    EIcon["CAPencil"] = "M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z";
    EIcon["CASuperscript"] = "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z";
    EIcon["CAPdf"] = "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z";
    EIcon["SortBest"] = "M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z";
    EIcon["SortHot"] = "M7.125 0C7.125 0 7.68 1.98781 7.68 3.60056C7.68 5.1458 6.6675 6.3985 5.1225 6.3985C3.57 6.3985 2.4 5.1458 2.4 3.60056L2.4225 3.33052C0.9075 5.1308 0 7.46367 0 9.99906C0 13.3146 2.685 16 6 16C9.315 16 12 13.3146 12 9.99906C12 5.95593 10.0575 2.34787 7.125 0ZM5.7825 13.7496C4.4475 13.7496 3.3675 12.6995 3.3675 11.3943C3.3675 10.1791 4.155 9.32396 5.475 9.05391C6.8025 8.78387 8.175 8.14627 8.94 7.11861C9.2325 8.08626 9.3825 9.10642 9.3825 10.1491C9.3825 12.1369 7.77 13.7496 5.7825 13.7496Z";
    EIcon["SortNew"] = "M11.0272 1.92795C12.0776 1.76064 13.0706 2.49283 13.2345 3.54374C13.3301 4.15647 13.7162 4.69603 14.2672 4.98069C15.2209 5.47345 15.6022 6.65427 15.1228 7.61475C14.8452 8.17096 14.8443 8.83295 15.1232 9.38853C15.6074 10.3533 15.2182 11.5359 14.2574 12.0281C13.704 12.3116 13.3155 12.8493 13.2197 13.4637C13.0552 14.5182 12.0586 15.2466 11.0045 15.0791C10.3966 14.9825 9.77658 15.1841 9.34339 15.6214C8.59246 16.3794 7.35809 16.3677 6.61126 15.6056C6.17743 15.1629 5.55035 14.9559 4.93908 15.0586C3.89901 15.2333 2.91632 14.5256 2.75243 13.4838L2.74351 13.4271C2.647 12.8136 2.26404 12.2827 1.71231 11.9976C0.763394 11.5073 0.385495 10.3448 0.864672 9.39021L0.878179 9.36331C1.15676 8.80833 1.15637 8.15428 0.877127 7.59963C0.394701 6.64141 0.770745 5.47338 1.7216 4.9766L1.75242 4.9605C2.29325 4.67794 2.66949 4.14713 2.76425 3.54433C2.92835 2.50046 3.91539 1.77407 4.95755 1.94869C5.57108 2.05149 6.19969 1.84368 6.6343 1.3986C7.38056 0.634364 8.61571 0.623816 9.36606 1.38403C9.79886 1.82253 10.4188 2.02487 11.0272 1.92795Z";
    EIcon["SortTop"] = "M8.5 12.8589L13.753 16L12.359 10.08L17 6.09684L10.8885 5.58316L8.5 0L6.1115 5.58316L0 6.09684L4.641 10.08L3.247 16L8.5 12.8589Z";
    EIcon["Sort_Rising"] = "M11.0612 16H4.93878V7.91919H0L8 0L16 7.91919H11.0612V16Z";
})(EIcon = exports.EIcon || (exports.EIcon = {}));
function Icon(props) {
    var width = props.width, height = props.height, _a = props.vbWidth, vbWidth = _a === void 0 ? width : _a, _b = props.vbHeight, vbHeight = _b === void 0 ? height : _b, type = props.type, _c = props.pathFill, pathFill = _c === void 0 ? 'white' : _c;
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 ".concat(vbWidth, " ").concat(vbHeight), fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: type, fill: pathFill })));
}
exports.Icon = Icon;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mails = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var mails_scss_1 = __importDefault(__webpack_require__(70));
var Icon_1 = __webpack_require__(2);
var useMediaSize_1 = __webpack_require__(3);
var Text_1 = __webpack_require__(20);
var colorEnum_1 = __webpack_require__(8);
function Mails() {
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    return (react_1.default.createElement("button", { className: mails_scss_1.default.mailBtn },
        react_1.default.createElement("span", { className: mails_scss_1.default.mailCount },
            react_1.default.createElement(Text_1.Text, { size: 12, children: 4, color: colorEnum_1.EColor.white, mobileSize: 9 })),
        isMediaMobile ?
            react_1.default.createElement(Icon_1.Icon, { width: 13, height: 10, vbWidth: 20, vbHeight: 16, type: Icon_1.EIcon.mail, pathFill: '#D9D9D9' }) :
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 16, type: Icon_1.EIcon.mail, pathFill: '#D9D9D9' })));
}
exports.Mails = Mails;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"mailBtn": "mails__mailBtn--WkKxw",
	"mailCount": "mails__mailCount--lCDz6"
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = __webpack_require__(0);
var useEventListenerAction_1 = __webpack_require__(19);
function useWindowSize() {
    var _a = (0, react_1.useState)({ height: 0, width: 0 }), size = _a[0], setSize = _a[1];
    (0, react_1.useEffect)(function () {
        setSize({ height: window.innerHeight, width: window.innerWidth });
    }, []);
    (0, useEventListenerAction_1.useEventListenerAction)('resize', function () { return setSize({ height: window.innerHeight, width: window.innerWidth }); });
    return size;
}
exports.useWindowSize = useWindowSize;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_scss_1 = __importDefault(__webpack_require__(73));
var colorEnum_1 = __webpack_require__(8);
var classNames = __webpack_require__(74);
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'span' : _d, children = props.children, _e = props.color, color = _e === void 0 ? colorEnum_1.EColor.black : _e, desktopSize = props.desktopSize, mobileSize = props.mobileSize, size = props.size, tabletSize = props.tabletSize;
    var classes = classNames(text_scss_1.default["s".concat(size)], (_a = {}, _a[text_scss_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_scss_1.default["t".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_scss_1.default["d".concat(desktopSize)]] = desktopSize, _c), text_scss_1.default[color]);
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"s28": "text__s28--aQaJ2",
	"s20": "text__s20--oEso3",
	"s16": "text__s16--WeQek",
	"s14": "text__s14--kyh0n",
	"s12": "text__s12--Qs9WS",
	"s10": "text__s10--DD5AF",
	"black": "text__black--upygf",
	"orange": "text__orange--Cth1N",
	"green": "text__green--ql5Cv",
	"white": "text__white--BmCPv",
	"grayF4": "text__grayF4--il1F1",
	"grayF3": "text__grayF3--KW8W0",
	"grayD9": "text__grayD9--cAU9s",
	"grayC4": "text__grayC4--eCNY2",
	"gray99": "text__gray99--+Xst+",
	"gray66": "text__gray66--Sx2hZ",
	"m28": "text__m28--S46n8",
	"m20": "text__m20--1pV7D",
	"m16": "text__m16--2IlPp",
	"m14": "text__m14--vfroE",
	"m12": "text__m12--niEHL",
	"m10": "text__m10--ZFuXx",
	"m9": "text__m9--qevgN",
	"t28": "text__t28--LwNBT",
	"t20": "text__t20--Me4DN",
	"t16": "text__t16--3-Lja",
	"t14": "text__t14--vrP9W",
	"t12": "text__t12--Cq4Cw",
	"t10": "text__t10--bciTw",
	"d28": "text__d28--+3XWf",
	"d20": "text__d20--QAMtw",
	"d16": "text__d16--JHYuU",
	"d14": "text__d14--hV7aJ",
	"d12": "text__d12--wfSaz",
	"d10": "text__d10--s5x+R"
});


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_scss_1 = __importDefault(__webpack_require__(77));
var Input_1 = __webpack_require__(78);
var Icon_1 = __webpack_require__(2);
var useMediaSize_1 = __webpack_require__(3);
function SearchBlock() {
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    return (react_1.default.createElement("div", { className: searchblock_scss_1.default.searchBlock },
        isMediaMobile ?
            react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.search, width: 11, height: 11, vbWidth: 19, vbHeight: 19, pathFill: '#c4c4c4' }) :
            react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.search, width: 19, height: 19, pathFill: '#c4c4c4' }),
        react_1.default.createElement(Input_1.Input, { placeholder: 'Поиск' })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"searchBlock": "searchblock__searchBlock--mUK-m"
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var input_scss_1 = __importDefault(__webpack_require__(80));
function Input(_a) {
    var placeholder = _a.placeholder;
    return (react_1.default.createElement("form", { className: input_scss_1.default.form, method: "post", action: "#", encType: "multipart/form-data" },
        react_1.default.createElement("input", { className: input_scss_1.default.input, type: "text", placeholder: placeholder })));
}
exports.Input = Input;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"form": "input__form--c9MLD",
	"input": "input__input--YvUIl"
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var userblock_scss_1 = __importDefault(__webpack_require__(83));
var useUserData_1 = __webpack_require__(84);
var useMediaSize_1 = __webpack_require__(3);
var Text_1 = __webpack_require__(20);
var colorEnum_1 = __webpack_require__(8);
var Icon_1 = __webpack_require__(2);
function UserBlock() {
    var IS_PROD = "production" !== 'development';
    var PORT = process.env.PORT;
    var URI = IS_PROD ? "https://app-reddit-react.herokuapp.com" : "http://localhost:".concat(PORT !== null && PORT !== void 0 ? PORT : 3000);
    var redditUrl = "https://www.reddit.com/api/v1/authorize?client_id=".concat("E89-Aj6RhzZPfGUuNU_hog", "&response_type=code&state=somestate&redirect_uri=").concat(URI, "/auth&duration=temporary&scope=identity read submit");
    var _a = (0, react_1.useState)(30), iconSize = _a[0], setIconSize = _a[1];
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;
    (0, react_1.useEffect)(function () {
        if (isMediaMobile) {
            setIconSize(30);
        }
        else {
            setIconSize(50);
        }
    }, [isMediaMobile]);
    return (react_1.default.createElement("a", { className: userblock_scss_1.default.userBox, href: redditUrl },
        react_1.default.createElement("div", { className: userblock_scss_1.default.avatarBox }, data.iconImg
            ? react_1.default.createElement("img", { src: data.iconImg, alt: 'user avatar', className: userblock_scss_1.default.avatarImage })
            : react_1.default.createElement(Icon_1.Icon, { width: iconSize, height: iconSize, vbWidth: 50, vbHeight: 50, type: Icon_1.EIcon.unknown, pathFill: '#d9d9d9' })),
        react_1.default.createElement("div", { className: userblock_scss_1.default.userName }, loading ?
            react_1.default.createElement(Text_1.Text, { size: 20, color: colorEnum_1.EColor.black },
                " ",
                'Загрузка',
                " ") :
            react_1.default.createElement(Text_1.Text, { size: 20, color: colorEnum_1.EColor.black },
                " ",
                data.name || 'Аноним',
                " "))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"userBox": "userblock__userBox--6YSat",
	"avatarBox": "userblock__avatarBox--hKpBK",
	"avatarImage": "userblock__avatarImage--AnK0A",
	"userName": "userblock__userName--SH9up"
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var meActions_1 = __webpack_require__(85);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, meActions_1.fetchMyDataAsync)());
    }, [token]);
    return { data: data, loading: loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMyDataAsync = void 0;
var fetchMyData_1 = __webpack_require__(16);
var axios_1 = __importDefault(__webpack_require__(7));
var setMyData_1 = __webpack_require__(17);
var fetchMyDataError_1 = __webpack_require__(18);
var fetchMyDataAsync = function () { return function (dispatch, getState) {
    if (!getState().token)
        return;
    dispatch((0, fetchMyData_1.fetchMyData)());
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
                            headers: { Authorization: "bearer ".concat(getState().token) }
                        })
                            .then(function (res) {
                            var userData = res.data;
                            dispatch((0, setMyData_1.setMyData)({
                                name: userData.name,
                                iconImg: userData.icon_img
                            }));
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    dispatch((0, fetchMyDataError_1.fetchMyDataError)(e_1));
                    localStorage.removeItem('reddit-token');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
}; };
exports.fetchMyDataAsync = fetchMyDataAsync;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_scss_1 = __importDefault(__webpack_require__(88));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_scss_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"threadTitle": "threadtitle__threadTitle--9U-SE"
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var sortblock_scss_1 = __importDefault(__webpack_require__(90));
var Dropdown_1 = __webpack_require__(32);
var ramda_1 = __webpack_require__(4);
var stopPropagation_1 = __webpack_require__(21);
var preventDefault_1 = __webpack_require__(22);
function SortBlock(_a) {
    var sortList = _a.sortList, _b = _a.selectButtonStyle, selectButtonStyle = _b === void 0 ? sortblock_scss_1.default.selectButton : _b, _c = _a.sortBlockStyle, sortBlockStyle = _c === void 0 ? sortblock_scss_1.default.sortBlock : _c, _d = _a.sortListStyle, sortListStyle = _d === void 0 ? sortblock_scss_1.default.sortList : _d, _e = _a.listLineStyle, listLineStyle = _e === void 0 ? sortblock_scss_1.default.listLine : _e, onSelect = _a.onSelect;
    var _f = (0, react_1.useState)(false), isDropdownOpen = _f[0], setIsDropDownOpen = _f[1];
    var _g = (0, react_1.useState)('best'), select = _g[0], setSelect = _g[1];
    var _h = (0, react_1.useState)(sortList.filter(function (el) { return el.id !== select; }, sortList)), list = _h[0], setList = _h[1];
    var btn = (sortList)[(0, ramda_1.findIndex)((0, ramda_1.propEq)('id', select))(sortList)].element;
    var style = {
        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 300ms ease',
        marginLeft: '7px'
    };
    (0, react_1.useEffect)(function () {
        setList(sortList.filter(function (el) { return el.id !== select; }, sortList));
        onSelect(select);
    }, [select]);
    return (react_1.default.createElement("div", { className: sortBlockStyle, onClick: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function () { return setIsDropDownOpen(!isDropdownOpen); })) },
        react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: isDropdownOpen, button: react_1.default.createElement("button", { className: selectButtonStyle },
                btn,
                react_1.default.createElement("svg", { style: style, width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 8L-3.16551e-07 0.712163L0.757932 2.72853e-07L7 6.49874L13.2421 1.36425e-06L14 0.712164L7 8Z", fill: "#CC6633" }))), children: react_1.default.createElement("ul", { className: sortListStyle }, list.map(function (action) { return (react_1.default.createElement("li", { className: listLineStyle, key: action.id, onClick: function () {
                    setSelect(action.id);
                } }, action.element)); })) })));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"selectButton": "sortblock__selectButton--fs0uv",
	"sortBlock": "sortblock__sortBlock--L3923",
	"sortList": "sortblock__sortList--sbwkH",
	"listLine": "sortblock__listLine--L78-w"
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_scss_1 = __importDefault(__webpack_require__(92));
var NOOP = function () {
};
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = (0, react_1.useState)(isOpen), isDropdownOpen = _d[0], setIsDropDownOpen = _d[1];
    (0, react_1.useEffect)(function () { return setIsDropDownOpen(isOpen); }, [isOpen]);
    (0, react_1.useEffect)(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropDownOpen(!isDropdownOpen);
        }
    };
    return (react_1.default.createElement("div", { className: dropdown_scss_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_scss_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_scss_1.default.list, onClick: function () { return setIsDropDownOpen(false); } }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "dropdown__container--yQv6x",
	"listContainer": "dropdown__listContainer--Ss4en",
	"list": "dropdown__list--QyLcD"
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __webpack_require__(0);
var tokenActions_1 = __webpack_require__(94);
var react_redux_1 = __webpack_require__(1);
function useToken() {
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, tokenActions_1.saveToken)());
    }, []);
    return [token];
}
exports.useToken = useToken;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = void 0;
var setToken_1 = __webpack_require__(28);
var saveToken = function () { return function (dispatch) {
    var localStorageToken = localStorage.getItem('reddit-token');
    var token = localStorageToken || window.__token__;
    if (token !== 'undefined' && !localStorageToken) {
        localStorage.setItem('reddit-token', token);
        dispatch((0, setToken_1.setToken)(token));
    }
    else if (token !== 'undefined')
        dispatch((0, setToken_1.setToken)(token));
}; };
exports.saveToken = saveToken;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundPage = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var notfoundpage_scss_1 = __importDefault(__webpack_require__(96));
var react_router_dom_1 = __webpack_require__(6);
function NotFoundPage() {
    return (react_1.default.createElement("div", { className: notfoundpage_scss_1.default.pageBox },
        react_1.default.createElement("h1", { className: notfoundpage_scss_1.default.headText }, "PAGE NOT FOUND",
            react_1.default.createElement("span", { className: notfoundpage_scss_1.default.smallText },
                " Go to",
                react_1.default.createElement(react_router_dom_1.Link, { className: notfoundpage_scss_1.default.homeLink, to: '/' }, "Home page")))));
}
exports.NotFoundPage = NotFoundPage;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"pageBox": "notfoundpage__pageBox--0T-W3",
	"headText": "notfoundpage__headText--ZjocW",
	"smallText": "notfoundpage__smallText--lcGsN",
	"homeLink": "notfoundpage__homeLink--8ZzKS"
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsPage = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CardList_1 = __webpack_require__(99);
var Content_1 = __webpack_require__(142);
var react_router_dom_1 = __webpack_require__(6);
function PostsPage() {
    return (react_1.default.createElement(Content_1.Content, null,
        react_1.default.createElement(CardList_1.CardList, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
exports.PostsPage = PostsPage;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardlist_scss_1 = __importDefault(__webpack_require__(101));
var Card_1 = __webpack_require__(102);
var usePostsData_1 = __webpack_require__(137);
var usePostsWithCommentsData_1 = __webpack_require__(138);
var react_redux_1 = __webpack_require__(1);
var postActions_1 = __webpack_require__(39);
var Loading_1 = __webpack_require__(40);
function CardList() {
    var bottomOfList = (0, react_1.useRef)(null);
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, usePostsData_1.usePostsData)(bottomOfList), postsData = _a.postsData, loading = _a.loading;
    (0, usePostsWithCommentsData_1.usePostsWithCommentsData)();
    var handleClick = function () { return dispatch((0, postActions_1.postsRequestAsync)()); };
    return (react_1.default.createElement("ul", { className: cardlist_scss_1.default.cardList },
        loading && react_1.default.createElement(Loading_1.Loading, null),
        postsData && postsData.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.id, post: post })); }),
        postsData.length % 60 === 0 && postsData.length !== 0 &&
            react_1.default.createElement("button", { className: cardlist_scss_1.default.loadMore, onClick: handleClick }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"),
        react_1.default.createElement("div", { ref: bottomOfList })));
}
exports.CardList = CardList;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"cardList": "cardlist__cardList--2Hx3d",
	"loadMore": "cardlist__loadMore--cDK8b"
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_scss_1 = __importDefault(__webpack_require__(104));
var TextContent_1 = __webpack_require__(105);
var Preview_1 = __webpack_require__(113);
var Controls_1 = __webpack_require__(116);
var Menu_1 = __webpack_require__(128);
var isImageUrl_1 = __webpack_require__(38);
function Card(_a) {
    var post = _a.post;
    var count_comments = post.count_comments, count_karma = post.count_karma, url = post.url;
    return (react_1.default.createElement("li", { className: card_scss_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { post: post }),
        (0, isImageUrl_1.isImageUrl)(url) && react_1.default.createElement(Preview_1.Preview, { url: url }),
        react_1.default.createElement(Controls_1.Controls, { karmaCount: count_karma, commentsCount: count_comments }),
        react_1.default.createElement(Menu_1.Menu, null)));
}
exports.Card = Card;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"card": "card__card--Am6jl",
	"postLink": "card__postLink--dbEiR"
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_scss_1 = __importDefault(__webpack_require__(107));
var stringShorter_1 = __webpack_require__(108);
var MetaData_1 = __webpack_require__(23);
var react_router_dom_1 = __webpack_require__(6);
function TextContent(_a) {
    var post = _a.post;
    var id = post.id, author = post.author, author_url = post.author_url, topic_name = post.topic_name, created = post.created, self_text = post.self_text, title = post.title;
    return (react_1.default.createElement("div", { className: textcontent_scss_1.default.textContent },
        react_1.default.createElement(MetaData_1.MetaData, { author: author, authorUrl: author_url, topicName: topic_name, publicationTime: created }),
        react_1.default.createElement("h2", { className: textcontent_scss_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/".concat(id), className: textcontent_scss_1.default.postLink }, title),
            self_text &&
                react_1.default.createElement("span", { className: textcontent_scss_1.default.titleSelf }, (0, stringShorter_1.stringShorter)(self_text, 30, 60, 80)))));
}
exports.TextContent = TextContent;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"textContent": "textcontent__textContent--vIgKC",
	"title": "textcontent__title--Og08R",
	"titleSelf": "textcontent__titleSelf--eGdeu",
	"postLink": "textcontent__postLink--oZY+E",
	"publishedLabel": "textcontent__publishedLabel--tYvZA"
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringShorter = void 0;
var useMediaSize_1 = __webpack_require__(3);
/**
 * Сокращает строку в зависимости от размера экрана
 *
 **/
function stringShorter(string) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    var nMobile = n[0], nTablet = n[1], nDesktop = n[2];
    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];
    if ((string.length <= nMobile) && (string.length <= nTablet) && (string.length <= nDesktop)) {
        return string;
    }
    if (nMobile && isMediaMobile) {
        return (string.length <= nMobile) ? string : "".concat(string.slice(0, nMobile - 1), "...");
    }
    else if (nTablet && isMediaTablet) {
        return (string.length <= nTablet) ? string : "".concat(string.slice(0, nTablet - 1), "...");
    }
    else if (nDesktop && isMediaDesktop) {
        return (string.length <= nDesktop) ? string : "".concat(string.slice(0, nDesktop - 1), "...");
    }
    else {
        return string;
    }
}
exports.stringShorter = stringShorter;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_scss_1 = __importDefault(__webpack_require__(110));
var useUserImgData_1 = __webpack_require__(111);
var useMediaSize_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(1);
var getLongAgoString_1 = __webpack_require__(112);
function MetaData(props) {
    var author = props.author, authorUrl = props.authorUrl, topicName = props.topicName, publicationTime = props.publicationTime;
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    var name = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; }).name;
    var avatar = (name && author !== ("[deleted]" || false)) ? (0, useUserImgData_1.useUserImgData)(author)[0] : '';
    return (react_1.default.createElement("div", { className: metadata_scss_1.default.metaData },
        react_1.default.createElement("div", { className: metadata_scss_1.default.userLink },
            name && avatar !== '' && !avatar.includes('styles.redditmedia') &&
                react_1.default.createElement("img", { className: metadata_scss_1.default.avatar, src: avatar, alt: "avatar" }),
            (!name || avatar.includes('styles.redditmedia')) &&
                react_1.default.createElement("img", { className: metadata_scss_1.default.avatar, src: 'https://i.redd.it/4qezgmi0x87z.png', alt: "avatar" }),
            react_1.default.createElement("a", { href: authorUrl, className: metadata_scss_1.default.userName }, author)),
        react_1.default.createElement("span", { className: metadata_scss_1.default.createdAt },
            react_1.default.createElement("span", { className: metadata_scss_1.default.publishedLabel },
                !isMediaMobile && "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
                " "),
            (0, getLongAgoString_1.getLongAgoString)(publicationTime)),
        !isMediaMobile && topicName && react_1.default.createElement("span", { className: metadata_scss_1.default.topicName }, topicName)));
}
exports.MetaData = MetaData;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"avatar": "metadata__avatar--XvMVJ",
	"createdAt": "metadata__createdAt--itbTa",
	"modal__root": "metadata__modal__root--BVBei",
	"metaData": "metadata__metaData--SZSL+",
	"topicName": "metadata__topicName--ZDui6",
	"userLink": "metadata__userLink--wBqiM",
	"userName": "metadata__userName--OUvNT"
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserImgData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(7));
var react_redux_1 = __webpack_require__(1);
function useUserImgData(username) {
    var _this = this;
    var _a = (0, react_1.useState)('https://i.redd.it/4qezgmi0x87z.png'), data = _a[0], setData = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    if (!token)
        return [data];
    (function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/user/".concat(username, "/about.json"), {
                        headers: { Authorization: "bearer ".concat(token) }
                    })
                        .then(function (res) {
                        setData(res.data.data.icon_img);
                    })
                        .catch(console.log)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })();
    return [data];
}
exports.useUserImgData = useUserImgData;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongAgoString = void 0;
var declOfNumVal_1 = __webpack_require__(34);
/**
 * Сообщает пользователю сколько прошло времени.
 * Например, время последней активности, размещения поста.
 **/
var getLongAgoString = function (date) {
    var currentDate = new Date();
    var diff = null;
    if (date.getFullYear() !== currentDate.getFullYear()) {
        diff = currentDate.getFullYear() - date.getFullYear();
        return "".concat(diff, " ").concat((0, declOfNumVal_1.declOfNum)(diff, ['год', 'года', 'лет']), " \u043D\u0430\u0437\u0430\u0434");
    }
    else if (date.getMonth() !== currentDate.getMonth()) {
        diff = currentDate.getMonth() - date.getMonth();
        return "".concat(diff, " ").concat((0, declOfNumVal_1.declOfNum)(diff, ['месяц', 'месяца', 'месяцев']), " \u043D\u0430\u0437\u0430\u0434");
    }
    else if (date.getDate() !== currentDate.getDate()) {
        diff = currentDate.getDate() - date.getDate();
        return "".concat(diff, " ").concat((0, declOfNumVal_1.declOfNum)(diff, ['день', 'дня', 'дней']), " \u043D\u0430\u0437\u0430\u0434");
    }
    else if (date.getHours() !== currentDate.getHours()) {
        diff = currentDate.getHours() - date.getHours();
        return "".concat(diff, " ").concat((0, declOfNumVal_1.declOfNum)(diff, ['час', 'часа', 'часов']), " \u043D\u0430\u0437\u0430\u0434");
    }
    else if (date.getMinutes() !== currentDate.getMinutes()) {
        diff = currentDate.getMinutes() - date.getMinutes();
        return "".concat(diff, " ").concat((0, declOfNumVal_1.declOfNum)(diff, ['минута', 'минуты', 'минут']), " \u043D\u0430\u0437\u0430\u0434");
    }
    else
        return 'только что';
};
exports.getLongAgoString = getLongAgoString;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(114), exports);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_scss_1 = __importDefault(__webpack_require__(115));
function Preview(props) {
    var url = props.url;
    return (react_1.default.createElement("div", { className: preview_scss_1.default.preview },
        react_1.default.createElement("img", { className: preview_scss_1.default.previewImg, src: url, alt: "Post image" })));
}
exports.Preview = Preview;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"preview": "preview__preview--mE00R",
	"previewImg": "preview__previewImg--04AX7"
});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_scss_1 = __importDefault(__webpack_require__(35));
var KarmaCounter_1 = __webpack_require__(36);
var Comments_1 = __webpack_require__(9);
var Actions_1 = __webpack_require__(123);
var useMediaSize_1 = __webpack_require__(3);
function Controls(props) {
    var commentsCount = props.commentsCount, karmaCount = props.karmaCount;
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    return (react_1.default.createElement("div", { className: controls_scss_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { count: karmaCount }),
        isMediaMobile && react_1.default.createElement(Comments_1.Comments, { btnClassName: controls_scss_1.default.actionButton, text: commentsCount, textHide: false }),
        isMediaMobile && react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_scss_1 = __importDefault(__webpack_require__(119));
var Icon_1 = __webpack_require__(2);
function KarmaCounter(props) {
    var count = props.count, style = props.style;
    return (react_1.default.createElement("div", { style: style, className: karmacounter_scss_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_scss_1.default.up }, react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.arrow, width: 19, height: 10, pathFill: '#999999' })),
        react_1.default.createElement("span", { className: karmacounter_scss_1.default.karmaValue }, count),
        react_1.default.createElement("button", { className: karmacounter_scss_1.default.down }, react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.arrow, width: 19, height: 10, pathFill: '#999999' }))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"karmaCounter": "karmacounter__karmaCounter--fSyD3",
	"up": "karmacounter__up--rPR7Z",
	"down": "karmacounter__down--UwVlJ",
	"karmaValue": "karmacounter__karmaValue--jDahH"
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Comments(_a) {
    var _b = _a.text, text = _b === void 0 ? '13' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName, onclick = _a.onclick;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { onclick: onclick, style: { background: 'transparent' }, className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.comments, width: 15, height: 13, pathFill: '#999999' }), text: text, textIsHide: textHide }));
}
exports.Comments = Comments;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actionbutton_scss_1 = __importDefault(__webpack_require__(122));
function ActionButton(_a) {
    var children = _a.children, text = _a.text, _b = _a.textIsHide, textIsHide = _b === void 0 ? false : _b, className = _a.className, onclick = _a.onclick, style = _a.style;
    return (react_1.default.createElement("button", { className: className, style: style, onClick: onclick },
        children,
        !textIsHide && react_1.default.createElement("span", { className: actionbutton_scss_1.default.buttonText }, text)));
}
exports.ActionButton = ActionButton;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"buttonText": "actionbutton__buttonText--a+tDB"
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_scss_1 = __importDefault(__webpack_require__(125));
var Share_1 = __webpack_require__(10);
var Save_1 = __webpack_require__(24);
var controls_scss_1 = __importDefault(__webpack_require__(35));
function Actions() {
    return (react_1.default.createElement("div", { className: actions_scss_1.default.actions },
        react_1.default.createElement(Share_1.Share, { btnClassName: controls_scss_1.default.actionButton, textHide: true }),
        react_1.default.createElement(Save_1.Save, { btnClassName: controls_scss_1.default.actionButton, textHide: true })));
}
exports.Actions = Actions;


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({

});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Share(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Поделиться' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.share, width: 8, height: 10 }), text: text, textIsHide: textHide }));
}
exports.Share = Share;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Save = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Save(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Сохранить' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.save, width: 10, height: 10 }), text: text, textIsHide: textHide }));
}
exports.Save = Save;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(129), exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var menu_scss_1 = __importDefault(__webpack_require__(130));
var useMediaSize_1 = __webpack_require__(3);
var ramda_1 = __webpack_require__(4);
var Comments_1 = __webpack_require__(9);
var Share_1 = __webpack_require__(10);
var Statistics_1 = __webpack_require__(131);
var Remove_1 = __webpack_require__(133);
var Hide_1 = __webpack_require__(37);
var Complain_1 = __webpack_require__(25);
var Save_1 = __webpack_require__(24);
var Dropdown_1 = __webpack_require__(32);
var actionsList = [
    {
        id: 'comments',
        element: react_1.default.createElement(Comments_1.Comments, { btnClassName: menu_scss_1.default.actionButton, text: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438', textHide: false }),
    },
    {
        id: 'share',
        element: react_1.default.createElement(Share_1.Share, { btnClassName: menu_scss_1.default.actionButton, textHide: false })
    },
    {
        id: 'statistics',
        element: react_1.default.createElement(Statistics_1.Statistics, { btnClassName: menu_scss_1.default.actionButton, textHide: false })
    },
    {
        id: 'hide',
        element: react_1.default.createElement(Hide_1.Hide, { btnClassName: menu_scss_1.default.actionButton, textHide: false })
    },
    {
        id: 'remove',
        element: react_1.default.createElement(Remove_1.Remove, { btnClassName: menu_scss_1.default.actionButton })
    },
    {
        id: 'save',
        element: react_1.default.createElement(Save_1.Save, { btnClassName: menu_scss_1.default.actionButton })
    },
    {
        id: 'complain',
        element: react_1.default.createElement(Complain_1.Complain, { btnClassName: menu_scss_1.default.actionButton })
    },
    {
        id: 'close',
        element: react_1.default.createElement("button", { className: menu_scss_1.default.closeBtn }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
    }
];
function Menu() {
    var _a = (0, react_1.useState)(actionsList), list = _a[0], setList = _a[1];
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    var isMobileActions = function (action) { return !(0, ramda_1.contains)(action.id, ['statistics', 'comments', 'share', 'remove', 'save']); };
    var isNoMobileActions = function (action) { return !(0, ramda_1.contains)(action.id, ['statistics', 'remove']); };
    (0, react_1.useEffect)(function () {
        if (isMediaMobile) {
            setList((0, ramda_1.filter)(isMobileActions, actionsList));
        }
        else {
            setList((0, ramda_1.filter)(isNoMobileActions, actionsList));
        }
    }, [isMediaMobile]);
    return (react_1.default.createElement("div", { className: menu_scss_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_scss_1.default.menuButton },
                react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#F3F3F3" }),
                    react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#F3F3F3" }),
                    react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#F3F3F3" }))), children: react_1.default.createElement("ul", { className: menu_scss_1.default.menuList }, list.map(function (action) { return (react_1.default.createElement("li", { className: menu_scss_1.default.listLine, key: action.id }, action.element)); })) })));
}
exports.Menu = Menu;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"menu": "menu__menu--lW2qZ",
	"menuButton": "menu__menuButton--yTjIJ",
	"actionButton": "menu__actionButton--cd0+Y",
	"closeBtn": "menu__closeBtn--4yil1",
	"listLine": "menu__listLine--uzwj5",
	"menuList": "menu__menuList--R3JEL"
});


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistics = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Statistics(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Статистика публикации' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.statistics, width: 13, height: 8 }), text: text, textIsHide: textHide }));
}
exports.Statistics = Statistics;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(134), exports);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Remove(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Удалить' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.remove, width: 10, height: 12 }), text: text, textIsHide: textHide }));
}
exports.Remove = Remove;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hide = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Hide(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Скрыть' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.hide, width: 12, height: 12 }), text: text, textIsHide: textHide }));
}
exports.Hide = Hide;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complain = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionButton_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(2);
function Complain(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Пожаловаться' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.complain, width: 14, height: 12 }), text: text, textIsHide: textHide }));
}
exports.Complain = Complain;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var postActions_1 = __webpack_require__(39);
function usePostsData(bottomOfList) {
    var postsData = (0, react_redux_1.useSelector)(function (state) { return state.posts.postsData; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.posts.loading; });
    var after = (0, react_redux_1.useSelector)(function (state) { return state.posts.after; });
    var type = (0, react_redux_1.useSelector)(function (state) { return state.postsType; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && (postsData.length % 60 !== 0 || postsData.length === 0)) {
                dispatch((0, postActions_1.postsRequestAsync)());
            }
        }, {
            rootMargin: '10px'
        });
        if (!!bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (!!bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, after, postsData, type]);
    return { postsData: postsData, loading: loading };
}
exports.usePostsData = usePostsData;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsWithCommentsData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var postWCActions_1 = __webpack_require__(139);
function usePostsWithCommentsData() {
    var postsWCData = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments.postsWCData; });
    var postsData = (0, react_redux_1.useSelector)(function (state) { return state.posts.postsData; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments.loading; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (!postsData)
            return;
        dispatch((0, postWCActions_1.postsWCRequestAsync)());
    }, [postsData]);
    return { loading: loading, postsWCData: postsWCData };
}
exports.usePostsWithCommentsData = usePostsWithCommentsData;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsWCRequestAsync = void 0;
var axios_1 = __importDefault(__webpack_require__(7));
var ramda_1 = __webpack_require__(4);
var fetchPostsWithComments_1 = __webpack_require__(14);
var fetchPostsWithCommentsSuccess_1 = __webpack_require__(15);
var postsWCRequestAsync = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var postsWC, createPostData;
    return __generator(this, function (_a) {
        postsWC = getState().postWithComments.postsWCData;
        createPostData = function (comment) {
            var _a, _b;
            var commentData = comment.data;
            return {
                id: commentData.id,
                author: commentData.author,
                author_url: 'https://www.reddit.com/r/' + commentData.subreddit + '/',
                comment_body: commentData.body_html,
                replies: (_b = (_a = commentData.replies) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children.map(function (reply) {
                    if (!reply.kind.includes('more')) {
                        return reply;
                    }
                    else
                        return null;
                }).filter(function (reply) { var _a; return !!((_a = reply === null || reply === void 0 ? void 0 : reply.data) === null || _a === void 0 ? void 0 : _a.author); }).map(createPostData),
                count_karma: commentData.ups,
                created: new Date(commentData.created * 1000),
            };
        };
        dispatch((0, fetchPostsWithComments_1.fetchPostsWC)());
        getState().posts.postsData.map(function (post) { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://www.reddit.com".concat(post.post_url, ".json"))
                                .then(function (res) {
                                var _a, _b, _c;
                                return (0, ramda_1.merge)(post, {
                                    comments: (_c = (_b = (_a = res.data[1]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.map(createPostData)
                                });
                            })
                                .then(function (post) {
                                postsWC.push(post);
                            })
                                .then(function () { return dispatch((0, fetchPostsWithCommentsSuccess_1.setPostsWC)(postsWC)); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); }; };
exports.postsWCRequestAsync = postsWCRequestAsync;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importStar(__webpack_require__(0));
var loading_scss_1 = __importDefault(__webpack_require__(141));
var react_dom_1 = __importDefault(__webpack_require__(41));
function Loading() {
    var _a = (0, react_1.useState)(), node = _a[0], setNode = _a[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setNode((_a = document.querySelector('#modal__root')) !== null && _a !== void 0 ? _a : undefined);
    }, []);
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: loading_scss_1.default.container },
        react_1.default.createElement("div", { className: loading_scss_1.default.loader },
            react_1.default.createElement("div", { className: loading_scss_1.default.text }, "Loading"),
            react_1.default.createElement("div", { className: loading_scss_1.default.dots },
                react_1.default.createElement("div", null),
                react_1.default.createElement("div", null),
                react_1.default.createElement("div", null),
                react_1.default.createElement("div", null))))), node);
}
exports.Loading = Loading;


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "loading__container--ucOTp",
	"loader": "loading__loader--dZEZT",
	"dots": "loading__dots--GvymT",
	"show-dot": "loading__show-dot--D2Iz4",
	"dot-fall-left": "loading__dot-fall-left--C5Gul",
	"dot-fall-top": "loading__dot-fall-top--ZBHg-"
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(143), exports);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_scss_1 = __importDefault(__webpack_require__(144));
var setContentElHeight_1 = __webpack_require__(145);
function Content(_a) {
    var children = _a.children;
    (0, setContentElHeight_1.setContentElHeight)();
    return (react_1.default.createElement("main", { id: "js-content", className: content_scss_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"content": "content__content--ce5dF"
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setContentElHeight = void 0;
var react_1 = __webpack_require__(0);
var useBodyHeight_1 = __webpack_require__(42);
var useMediaSize_1 = __webpack_require__(3);
function setContentElHeight() {
    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    var errorRate = (0, react_1.useMemo)(function () { return isMediaTablet ? 12 : (isMediaDesktop ? 18 : 0); }, [isMediaDesktop, isMediaTablet, isMediaMobile]);
    var height = (0, useBodyHeight_1.useBodyHeight)();
    (0, react_1.useEffect)(function () {
        var headerEl = window.document.getElementById('js-header');
        var contentEl = window.document.getElementById('js-content');
        if (!headerEl || !contentEl)
            return;
        var contentHeight = 100 - Math.ceil(headerEl.offsetHeight / (height / 100)) - errorRate;
        contentEl.style.height = "".concat(contentHeight, "vh");
    }, [height, errorRate]);
}
exports.setContentElHeight = setContentElHeight;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(147), exports);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var post_scss_1 = __importDefault(__webpack_require__(148));
var Modal_1 = __webpack_require__(149);
var KarmaCounter_1 = __webpack_require__(36);
var MetaData_1 = __webpack_require__(23);
var isImageUrl_1 = __webpack_require__(38);
var PostComments_1 = __webpack_require__(153);
var react_router_dom_1 = __webpack_require__(6);
var react_redux_1 = __webpack_require__(1);
var PostCommentFormContainer_1 = __webpack_require__(167);
var PostActions_1 = __webpack_require__(175);
var NotFoundPage_1 = __webpack_require__(33);
var Loading_1 = __webpack_require__(40);
var useBodyHeight_1 = __webpack_require__(42);
var ramda_1 = __webpack_require__(4);
var karmaStyle = {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
};
function Post() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var postId = (0, react_router_dom_1.useParams)().postId;
    var height = (0, useBodyHeight_1.useBodyHeight)();
    var _a = (0, react_1.useState)(), post = _a[0], setPost = _a[1];
    var _b = (0, react_1.useState)(75), postHeight = _b[0], setPostHeight = _b[1];
    var postsWC = (0, react_redux_1.useSelector)(function (state) {
        return state.postWithComments.postsWCData;
    });
    var postWC = (0, react_redux_1.useSelector)(function (state) {
        return (0, ramda_1.find)((0, ramda_1.propEq)('id', postId))(state.postWithComments.postsWCData);
    });
    (0, react_1.useEffect)(function () {
        setPost(postWC);
    }, [postWC]);
    (0, react_1.useEffect)(function () {
        if (!!post) {
            var postHead = document.getElementById("".concat(post.id));
            !!postHead && setPostHeight(100 - Math.ceil(postHead.offsetHeight / (height / 100)));
        }
    }, [post]);
    function handleClick() {
        navigate(-1);
    }
    if (!post && typeof post === 'object' && postsWC.length % 20 === 0) {
        return (react_1.default.createElement(NotFoundPage_1.NotFoundPage, null));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !post && react_1.default.createElement(Loading_1.Loading, null),
        !!post &&
            react_1.default.createElement(Modal_1.Modal, null,
                react_1.default.createElement("div", { id: post.id, className: post_scss_1.default.post },
                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, { style: karmaStyle, count: post.count_karma }),
                    react_1.default.createElement("div", { className: post_scss_1.default.postTopRight },
                        react_1.default.createElement("h2", { className: post_scss_1.default.postTitle },
                            " ",
                            post.title,
                            " "),
                        react_1.default.createElement(MetaData_1.MetaData, { author: post.author, authorUrl: post.author_url, topicName: post.topic_name, publicationTime: post.created }))),
                react_1.default.createElement("div", { style: { height: "".concat(postHeight, "vh") }, className: post_scss_1.default.postInfo },
                    react_1.default.createElement("div", { className: post_scss_1.default.postContent },
                        react_1.default.createElement("span", { className: post_scss_1.default.postText }, post.self_text),
                        (0, isImageUrl_1.isImageUrl)(post.url) && react_1.default.createElement("img", { className: post_scss_1.default.postImg, src: post.url, alt: "Post image" })),
                    react_1.default.createElement(PostActions_1.PostActions, { upvote_ratio: post.upvote_ratio, num_comments: post.count_comments }),
                    react_1.default.createElement(PostCommentFormContainer_1.PostCommentFormContainer, null),
                    post.comments && react_1.default.createElement(PostComments_1.PostComments, { comments: post.comments, postLink: post === null || post === void 0 ? void 0 : post.post_url })),
                react_1.default.createElement("button", { className: post_scss_1.default.closeBtn, type: 'button', onClick: handleClick },
                    react_1.default.createElement("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z", fill: "#ADADAD" }),
                        react_1.default.createElement("path", { d: "M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z", fill: "#ADADAD" }))))));
}
exports.Post = Post;


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"closeBtn": "post__closeBtn--r2lMj",
	"postInfo": "post__postInfo--oUToY",
	"postContent": "post__postContent--88kG9",
	"postText": "post__postText--rRJM-",
	"post": "post__post--AaO1e",
	"postTopRight": "post__postTopRight--I-gQL",
	"postTitle": "post__postTitle--U8DYb",
	"postImg": "post__postImg--N5RRu"
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(150), exports);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importStar(__webpack_require__(0));
var modal_scss_1 = __importDefault(__webpack_require__(151));
var react_dom_1 = __importDefault(__webpack_require__(41));
var useMouseEventAction_1 = __webpack_require__(152);
var react_router_dom_1 = __webpack_require__(6);
function Modal(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(), node = _b[0], setNode = _b[1];
    var ref = (0, react_1.useRef)(null);
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var _a;
        setNode((_a = document.querySelector('#modal__root')) !== null && _a !== void 0 ? _a : undefined);
    }, []);
    (0, useMouseEventAction_1.useMouseEventAction)({ action: function () { return navigate(-1); }, ref: ref });
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: modal_scss_1.default.modalBack },
        react_1.default.createElement("div", { ref: ref, className: modal_scss_1.default.modal }, children))), node);
}
exports.Modal = Modal;


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"modalBack": "modal__modalBack--nPNoW",
	"modal": "modal__modal--f1-au"
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useMouseEventAction = void 0;
var useEventListenerAction_1 = __webpack_require__(19);
function useMouseEventAction(_a) {
    var action = _a.action, ref = _a.ref;
    (0, useEventListenerAction_1.useEventListenerAction)('click', function (e) {
        var _a;
        if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            action();
        }
    }, []);
}
exports.useMouseEventAction = useMouseEventAction;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(154), exports);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComments = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var postcomments_scss_1 = __importDefault(__webpack_require__(155));
var SortBlock_1 = __webpack_require__(31);
var sortPostComments_1 = __webpack_require__(156);
var Comment_1 = __webpack_require__(157);
function PostComments(props) {
    var comments = props.comments, postLink = props.postLink;
    comments.pop();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: postcomments_scss_1.default.container },
            react_1.default.createElement("span", { className: postcomments_scss_1.default.preselect }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E:"),
            react_1.default.createElement(SortBlock_1.SortBlock, { onSelect: function () {
                }, sortList: sortPostComments_1.sortingPostComments, sortBlockStyle: postcomments_scss_1.default.sortBlock, selectButtonStyle: postcomments_scss_1.default.selectButton, sortListStyle: postcomments_scss_1.default.sortList, listLineStyle: postcomments_scss_1.default.listLine })),
        react_1.default.createElement("ul", null, (comments.length > 0) && comments.map(function (comment) { return (react_1.default.createElement(Comment_1.Comment, { key: "".concat(comment.id).concat(comments.indexOf(comment)), comment: comment, postLink: postLink })); }))));
}
exports.PostComments = PostComments;


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "postcomments__container--dghOd",
	"preselect": "postcomments__preselect--O8wa-",
	"commentTop": "postcomments__commentTop--foI55",
	"selectButton": "postcomments__selectButton--8URqK",
	"sortBlock": "postcomments__sortBlock--9cLgb",
	"sortList": "postcomments__sortList--eAEg5",
	"listLine": "postcomments__listLine--zRpqK"
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingPostComments = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.sortingPostComments = [
    {
        id: 'best',
        element: react_1.default.createElement("span", null, "\u041B\u0443\u0447\u0448\u0438\u0435")
    },
    {
        id: 'new',
        element: react_1.default.createElement("span", null, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435")
    },
    {
        id: 'old',
        element: react_1.default.createElement("span", null, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435")
    },
    {
        id: 'dispute',
        element: react_1.default.createElement("span", null, "\u0421\u043F\u043E\u0440\u043D\u044B\u0435")
    },
    {
        id: 'qa',
        element: react_1.default.createElement("span", null, "\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442")
    },
];


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(158), exports);


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importStar(__webpack_require__(0));
var comment_scss_1 = __importDefault(__webpack_require__(159));
// @ts-ignore
var react_html_parser_1 = __importDefault(__webpack_require__(160));
var MetaData_1 = __webpack_require__(23);
var CommentActions_1 = __webpack_require__(161);
var CommentReplyForm_1 = __webpack_require__(164);
var useMediaSize_1 = __webpack_require__(3);
function Comment(_a) {
    var comment = _a.comment, postLink = _a.postLink;
    if (!comment)
        return null;
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    var _b = (0, react_1.useState)(false), formIsOpen = _b[0], setFormIsOpen = _b[1];
    var author = comment.author, author_url = comment.author_url, comment_body = comment.comment_body, created = comment.created, id = comment.id, replies = comment.replies;
    var body = comment_body.replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
    var getNum = function () { return Math.random() * 100; };
    var handleClick = function () {
        setFormIsOpen(!formIsOpen);
    };
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("div", { className: comment_scss_1.default.commentTop },
            react_1.default.createElement("svg", { className: comment_scss_1.default.svgArrows, width: "19", height: "30", viewBox: "0 0 19 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 30L19 20L8.74228e-07 20L9.5 30Z", fill: "#D9D9D9" }),
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })),
            react_1.default.createElement(MetaData_1.MetaData, { author: author, authorUrl: author_url, publicationTime: created })),
        react_1.default.createElement("div", { className: comment_scss_1.default.commentBottom },
            react_1.default.createElement("span", { className: comment_scss_1.default.commentBody }, (0, react_html_parser_1.default)(body)),
            react_1.default.createElement(CommentActions_1.CommentActions, { handleClick: handleClick }),
            formIsOpen &&
                react_1.default.createElement(CommentReplyForm_1.CommentReplyForm, { key: id + getNum(), onClose: function () { return setFormIsOpen(false); }, postAuthor: author }),
            react_1.default.createElement("ul", null, isMediaMobile ? react_1.default.createElement("a", { href: postLink }, "...") : !!replies && replies.map(function (replyComment) { return (react_1.default.createElement(Comment, { key: id + getNum(), comment: replyComment })); })))));
}
exports.Comment = Comment;


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"commentTop": "comment__commentTop--1zBch",
	"commentBottom": "comment__commentBottom--5U3TK",
	"commentBody": "comment__commentBody--PSjeR",
	"div": "comment__div--0wXsA",
	"svgArrows": "comment__svgArrows--leH0a"
});


/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(162), exports);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentActions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentactions_scss_1 = __importDefault(__webpack_require__(163));
var Comments_1 = __webpack_require__(9);
var Share_1 = __webpack_require__(10);
var Complain_1 = __webpack_require__(25);
var useMediaSize_1 = __webpack_require__(3);
function CommentActions(_a) {
    var handleClick = _a.handleClick;
    var isMediaSize = (0, useMediaSize_1.useMediaSize)()[0];
    return (react_1.default.createElement("div", { className: commentactions_scss_1.default.postActions },
        react_1.default.createElement(Comments_1.Comments, { onclick: handleClick, textHide: isMediaSize, text: '\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C', btnClassName: commentactions_scss_1.default.actionButton }),
        react_1.default.createElement(Share_1.Share, { textHide: isMediaSize, btnClassName: commentactions_scss_1.default.actionButton }),
        react_1.default.createElement(Complain_1.Complain, { textHide: isMediaSize, btnClassName: commentactions_scss_1.default.actionButton })));
}
exports.CommentActions = CommentActions;


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"actionButton": "commentactions__actionButton--QDiQy",
	"postActions": "commentactions__postActions--1yLc7"
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(165), exports);


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentReplyForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentreplyform_scss_1 = __importDefault(__webpack_require__(166));
var preventDefault_1 = __webpack_require__(22);
var stopPropagation_1 = __webpack_require__(21);
function CommentReplyForm(_a) {
    var _b;
    var onClose = _a.onClose, postAuthor = _a.postAuthor;
    var _c = (0, react_1.useState)("".concat(postAuthor, ", ")), value = _c[0], setValue = _c[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        if (ref.current) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            ref.current.selectionStart = ref.current.value.length;
        }
    }, [(_b = ref.current) === null || _b === void 0 ? void 0 : _b.textContent]);
    function handleSubmit() {
        setValue('');
        onClose();
    }
    return (react_1.default.createElement("form", { className: commentreplyform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(handleSubmit)) },
        react_1.default.createElement("textarea", { ref: ref, className: commentreplyform_scss_1.default.input, value: value, onChange: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function () { return setValue(value); })) }),
        react_1.default.createElement("button", { className: commentreplyform_scss_1.default.cancelBtn, onClick: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(onClose)), type: 'button' }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
        react_1.default.createElement("button", { className: commentreplyform_scss_1.default.submitBtn, type: 'submit' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentReplyForm = CommentReplyForm;


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"form": "commentreplyform__form--BoHa4",
	"input": "commentreplyform__input--fAhln",
	"label": "commentreplyform__label--HyGvb",
	"username": "commentreplyform__username--wTC7i",
	"cancelBtn": "commentreplyform__cancelBtn--2jc1Q",
	"submitBtn": "commentreplyform__submitBtn--RAsK5"
});


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(168), exports);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var updateCommentFormValue_1 = __webpack_require__(27);
var PostCommentForm_1 = __webpack_require__(169);
function PostCommentFormContainer() {
    var name = (0, react_redux_1.useSelector)(function (state) { return state.me.myData; }).name;
    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });
    var dispatch = (0, react_redux_1.useDispatch)();
    function handleSubmit() {
        dispatch((0, updateCommentFormValue_1.updateCommentFormValue)(''));
    }
    function handleChange(value) {
        dispatch((0, updateCommentFormValue_1.updateCommentFormValue)(value));
    }
    return (react_1.default.createElement(PostCommentForm_1.PostCommentForm, { value: value, name: name, onChange: handleChange, onSubmit: handleSubmit }));
}
exports.PostCommentFormContainer = PostCommentFormContainer;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(170), exports);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var postcommentform_scss_1 = __importDefault(__webpack_require__(171));
var CommentFormActions_1 = __webpack_require__(172);
var preventDefault_1 = __webpack_require__(22);
var stopPropagation_1 = __webpack_require__(21);
function PostCommentForm(_a) {
    var onChange = _a.onChange, onSubmit = _a.onSubmit, name = _a.name, value = _a.value;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        handleChange(value, ref.current);
    }, []);
    function handleChange(value, el) {
        if (el) {
            name ?
                (value == '') ? el.hidden = false : el.hidden = true :
                el.hidden = true;
        }
        onChange(value);
    }
    return (react_1.default.createElement("form", { className: postcommentform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function (event) { return onSubmit(event); })) },
        react_1.default.createElement("textarea", { className: postcommentform_scss_1.default.input, value: value, onChange: function (event) { return handleChange(event.target.value, ref.current); } }),
        react_1.default.createElement("label", { ref: ref, className: postcommentform_scss_1.default.label },
            react_1.default.createElement("span", { className: postcommentform_scss_1.default.username },
                name,
                ", \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")),
        react_1.default.createElement(CommentFormActions_1.CommentFormActions, null),
        react_1.default.createElement("button", { className: postcommentform_scss_1.default.submitBtn, type: 'submit' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.PostCommentForm = PostCommentForm;


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"form": "postcommentform__form--DUvWV",
	"input": "postcommentform__input--4QJ+A",
	"label": "postcommentform__label--pFTvS",
	"username": "postcommentform__username--RJUAU",
	"submitBtn": "postcommentform__submitBtn--RHLKk"
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(173), exports);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormActions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentformactions_scss_1 = __importDefault(__webpack_require__(174));
var Icon_1 = __webpack_require__(2);
function CommentFormActions() {
    return (react_1.default.createElement("div", { className: commentformactions_scss_1.default.postCommentActions },
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 12, type: Icon_1.EIcon.CAInlineCode, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAPicture, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 20, type: Icon_1.EIcon.CAList, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 14, height: 17, type: Icon_1.EIcon.CADownload, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAAvatar, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 22, height: 16, type: Icon_1.EIcon.CACycle, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 10, type: Icon_1.EIcon.CAStrikethrough, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 18, type: Icon_1.EIcon.CAVoice, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAQuote, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 19, height: 19, type: Icon_1.EIcon.CAPencil, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 18, type: Icon_1.EIcon.CASuperscript, pathFill: "#999999" })),
        react_1.default.createElement("button", { className: commentformactions_scss_1.default.actionBtn },
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAPdf, pathFill: "#999999" }))));
}
exports.CommentFormActions = CommentFormActions;


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"postCommentActions": "commentformactions__postCommentActions--Sxri-",
	"actionBtn": "commentformactions__actionBtn--BUdZZ"
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostActions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var postactions_scss_1 = __importDefault(__webpack_require__(177));
var Comments_1 = __webpack_require__(9);
var Share_1 = __webpack_require__(10);
var Hide_1 = __webpack_require__(37);
var Save_1 = __webpack_require__(24);
var Complain_1 = __webpack_require__(25);
var Text_1 = __webpack_require__(20);
var colorEnum_1 = __webpack_require__(8);
var declOfNumVal_1 = __webpack_require__(34);
var useMediaSize_1 = __webpack_require__(3);
function PostActions(_a) {
    var _b = _a.upvote_ratio, upvote_ratio = _b === void 0 ? 0 : _b, _c = _a.num_comments, num_comments = _c === void 0 ? 0 : _c;
    var isMediaMobile = (0, useMediaSize_1.useMediaSize)()[0];
    return (react_1.default.createElement("div", { className: postactions_scss_1.default.postActions },
        react_1.default.createElement(Comments_1.Comments, { textHide: isMediaMobile, text: "".concat(num_comments, " ").concat((0, declOfNumVal_1.declOfNum)(num_comments, ['комментарий', 'комментария', 'комментариев'])), btnClassName: postactions_scss_1.default.actionButton }),
        react_1.default.createElement(Share_1.Share, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),
        react_1.default.createElement(Hide_1.Hide, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),
        react_1.default.createElement(Save_1.Save, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),
        react_1.default.createElement(Complain_1.Complain, { textHide: isMediaMobile, btnClassName: postactions_scss_1.default.actionButton }),
        react_1.default.createElement(Text_1.Text, { size: 14, color: colorEnum_1.EColor.gray99 },
            " ",
            upvote_ratio,
            "% ",
            !isMediaMobile && 'проголосовало')));
}
exports.PostActions = PostActions;


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"actionButton": "postactions__actionButton--XjMK7",
	"postActions": "postactions__postActions--6FqLD"
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n         <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/img-src/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta\n      name=\"description\"\n      content=\"Mirror for reddit\"\n    />\n    <link rel=\"apple-touch-icon\" href=\"/img-src/logo192.png\" />\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel=\"manifest\" href=\"/img-src/manifest.json\" />\n    <!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike \"/favicon.ico\" or \"favicon.ico\", \"%PUBLIC_URL%/favicon.ico\" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n           <title>mirror for Reddit</title>\n    </head>\n   \n    <body>\n        <div id=\"react__root\">".concat(content, "</div>\n        <div id=\"loading__root\" ></div>\n        <div id=\"modal__root\"></div>\n         <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script >\n        window.__token__ = '").concat(token, "'\n    </script>\n    </body>\n    </html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);