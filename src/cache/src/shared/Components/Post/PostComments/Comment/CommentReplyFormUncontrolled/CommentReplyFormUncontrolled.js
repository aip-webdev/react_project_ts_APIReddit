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
exports.CommentReplyFormUncontrolled = void 0;
var react_1 = __importStar(require("react"));
var commentreplyform_scss_1 = __importDefault(require("./commentreplyform.scss"));
var preventDefault_1 = require("../../../../../../utils/react/preventDefault");
var stopPropagation_1 = require("../../../../../../utils/react/stopPropagation");
function CommentReplyFormUncontrolled(_a) {
    var _b;
    var onClose = _a.onClose, postAuthor = _a.postAuthor;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        if (ref.current) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            ref.current.selectionStart = ref.current.value.length;
        }
    }, [(_b = ref.current) === null || _b === void 0 ? void 0 : _b.textContent]);
    function handleSubmit() {
        if (ref.current)
            ref.current.value = '';
        onClose();
    }
    return (react_1.default.createElement("form", { className: commentreplyform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(handleSubmit)) },
        react_1.default.createElement("textarea", { ref: ref, className: commentreplyform_scss_1.default.input, defaultValue: "".concat(postAuthor, ", ") }),
        react_1.default.createElement("button", { className: commentreplyform_scss_1.default.cancelBtn, onClick: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(onClose)), type: 'button' }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
        react_1.default.createElement("button", { className: commentreplyform_scss_1.default.submitBtn, type: 'submit' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentReplyFormUncontrolled = CommentReplyFormUncontrolled;
//# sourceMappingURL=CommentReplyFormUncontrolled.js.map