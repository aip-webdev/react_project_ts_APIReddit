"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)(0), size = _a[0], setSize = _a[1];
    (0, react_1.useEffect)(function () {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return function () { return window.removeEventListener('resize', updateSize); };
    });
    return size;
}
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map