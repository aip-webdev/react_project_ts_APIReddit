"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var actionTypes_1 = require("../actions/actionTypes");
var ramda_1 = require("ramda");
var postReducer_1 = require("./postReducer");
var postWCReducer_1 = require("./postWCReducer");
var meReducer_1 = require("./meReducer");
var index_1 = require("../index");
var rootReducer = function (state, action) {
    if (state === void 0) { state = index_1.initialState; }
    switch (action.type) {
        case actionTypes_1.UPDATE_POST_COMMENT_TEXT:
            return (0, ramda_1.merge)(state, { commentText: action.payload });
        case actionTypes_1.SET_TOKEN:
            return (0, ramda_1.merge)(state, { token: action.payload });
        case actionTypes_1.SET_POSTS_DATA:
        case actionTypes_1.SET_POSTS_DATA_SUCCESS:
        case actionTypes_1.SET_POSTS_DATA_FAILURE:
            return (0, ramda_1.merge)(state, { posts: (0, postReducer_1.postReducer)(state.posts, action) });
        case actionTypes_1.SET_POSTS_WC_DATA:
        case actionTypes_1.SET_POSTS_WC_DATA_SUCCESS:
        case actionTypes_1.SET_POSTS_WC_DATA_FAILURE:
            return (0, ramda_1.merge)(state, { postWithComments: (0, postWCReducer_1.postsWCReducer)(state.postWithComments, action) });
        case actionTypes_1.ME_REQUEST:
        case actionTypes_1.ME_REQUEST_SUCCESS:
        case actionTypes_1.ME_REQUEST_FAILURE:
            return (0, ramda_1.merge)(state, { me: (0, meReducer_1.meReducer)(state.me, action) });
    }
    return state;
};
exports.rootReducer = rootReducer;
//# sourceMappingURL=index.js.map