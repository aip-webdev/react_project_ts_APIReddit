"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var react_1 = __importDefault(require("react"));
function GenericList(_a) {
    var list = _a.list, listClassName = _a.listClassName;
    return (react_1.default.createElement("div", { className: listClassName }, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? function () {
        } : _c, className = _a.className, id = _a.id, href = _a.href;
        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href }, text));
    })));
}
exports.GenericList = GenericList;
//# sourceMappingURL=GenericList.js.map