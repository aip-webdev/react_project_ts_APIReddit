"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringShorter = void 0;
var useMediaSize_1 = require("../../hooks/useMediaSize");
function stringShorter(string) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    var nMobile = n[0], nTablet = n[1], nDesktop = n[2];
    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];
    if ((string.length <= nMobile) || (string.length <= nTablet) || (string.length <= nDesktop)) {
        return string;
    }
    if (nMobile && isMediaMobile) {
        return string.substr(0, nMobile - 1) + '...';
    }
    else if (nTablet && isMediaTablet) {
        return string.substr(0, nTablet - 1) + '...';
    }
    else if (nDesktop && isMediaDesktop) {
        return string.substr(0, nDesktop - 1) + '...';
    }
    else
        return string;
}
exports.stringShorter = stringShorter;
//# sourceMappingURL=stringShorter.js.map