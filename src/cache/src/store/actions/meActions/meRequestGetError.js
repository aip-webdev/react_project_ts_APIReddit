"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestGetError = void 0;
var actionTypes_1 = require("../actionTypes");
var meRequestGetError = function (error) { return ({
    type: actionTypes_1.ME_REQUEST_FAILURE,
    error: error,
}); };
exports.meRequestGetError = meRequestGetError;
//# sourceMappingURL=meRequestGetError.js.map