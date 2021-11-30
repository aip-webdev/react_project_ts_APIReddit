"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(require("react"));
var layout_scss_1 = __importDefault(require("./layout.scss"));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_scss_1.default.layout }, children));
}
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map