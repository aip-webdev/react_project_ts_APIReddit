"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var react_redux_1 = require("react-redux");
var ramda_1 = require("ramda");
var meReducer = function (state, action) {
    if (state === void 0) { state = (0, react_redux_1.useSelector)(function (state) { return state.me; }); }
    switch (action.type) {
        case "ME_REQUEST":
            return (0, ramda_1.merge)(state, { loading: true });
        case "ME_REQUEST_SUCCESS":
            return (0, ramda_1.merge)(state, { loading: false, myData: action.payload });
        case "ME_REQUEST_FAILURE":
            return (0, ramda_1.merge)(state, { loading: false, error: action.error });
        default:
            return state;
    }
};
exports.meReducer = meReducer;
//# sourceMappingURL=meReducer.js.map