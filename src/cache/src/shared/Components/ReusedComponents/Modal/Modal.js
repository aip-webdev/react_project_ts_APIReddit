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
var react_1 = __importStar(require("react"));
var modal_scss_1 = __importDefault(require("./modal.scss"));
var react_dom_1 = __importDefault(require("react-dom"));
var useMouseEventAction_1 = require("../../../../hooks/useMouseEventAction");
function Modal(_a) {
    var children = _a.children, onClose = _a.onClose;
    var ref = (0, react_1.useRef)(null);
    (0, useMouseEventAction_1.useMouseEventAction)({ onClose: onClose, ref: ref });
    var node = document.querySelector('#modal__root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: modal_scss_1.default.modalBack },
        react_1.default.createElement("div", { className: modal_scss_1.default.modal, ref: ref }, children))), node);
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map