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
exports.PostCommentForm = void 0;
var react_1 = __importStar(require("react"));
var postcommentform_scss_1 = __importDefault(require("./postcommentform.scss"));
var CommentFormActions_1 = require("./CommentFormActions");
var preventDefault_1 = require("../../../../utils/react/preventDefault");
var stopPropagation_1 = require("../../../../utils/react/stopPropagation");
function PostCommentForm(_a) {
    var onChange = _a.onChange, onSubmit = _a.onSubmit, name = _a.name, value = _a.value;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        handleChange(value, ref.current);
    }, []);
    function handleChange(value, el) {
        if (el) {
            name ?
                (value == '') ? el.hidden = false : el.hidden = true :
                el.hidden = true;
        }
        onChange(value);
    }
    return (react_1.default.createElement("form", { className: postcommentform_scss_1.default.form, onSubmit: (0, preventDefault_1.preventDefault)((0, stopPropagation_1.stopPropagation)(function (event) { return onSubmit(event); })) },
        react_1.default.createElement("textarea", { className: postcommentform_scss_1.default.input, value: value, onChange: function (event) { return handleChange(event.target.value, ref.current); } }),
        react_1.default.createElement("label", { ref: ref, className: postcommentform_scss_1.default.label },
            react_1.default.createElement("span", { className: postcommentform_scss_1.default.username },
                name,
                ", \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")),
        react_1.default.createElement(CommentFormActions_1.CommentFormActions, null),
        react_1.default.createElement("button", { className: postcommentform_scss_1.default.submitBtn, type: 'submit' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.PostCommentForm = PostCommentForm;
//# sourceMappingURL=PostCommentForm.js.map