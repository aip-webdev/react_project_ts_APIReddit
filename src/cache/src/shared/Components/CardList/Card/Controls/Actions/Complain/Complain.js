"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complain = void 0;
var react_1 = __importDefault(require("react"));
var ActionButton_1 = require("../ActionButton");
var Icon_1 = require("../../../../../ReusedComponents/Icon");
function Complain(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Пожаловаться' : _b, textHide = _a.textHide, btnClassName = _a.btnClassName;
    return (react_1.default.createElement(ActionButton_1.ActionButton, { className: btnClassName, children: react_1.default.createElement(Icon_1.Icon, { type: Icon_1.EIcon.complain, width: 14, height: 12 }), text: text, textIsHide: textHide }));
}
exports.Complain = Complain;
//# sourceMappingURL=Complain.js.map