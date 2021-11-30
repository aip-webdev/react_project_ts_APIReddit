"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormActions = void 0;
var react_1 = __importDefault(require("react"));
var commentformactions_scss_1 = __importDefault(require("./commentformactions.scss"));
var Icon_1 = require("../../../ReusedComponents/Icon");
function CommentFormActions() {
    return (react_1.default.createElement("div", { className: commentformactions_scss_1.default.postCommentActions },
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 12, type: Icon_1.EIcon.CAInlineCode, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAPicture, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 20, type: Icon_1.EIcon.CAList, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 14, height: 17, type: Icon_1.EIcon.CADownload, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 18, height: 18, type: Icon_1.EIcon.CAAvatar, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 22, height: 16, type: Icon_1.EIcon.CACycle, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 10, type: Icon_1.EIcon.CAStrikethrough, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 18, type: Icon_1.EIcon.CAVoice, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAQuote, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 19, height: 19, type: Icon_1.EIcon.CAPencil, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 16, height: 18, type: Icon_1.EIcon.CASuperscript, pathFill: "#999999" })),
        react_1.default.createElement("button", null,
            react_1.default.createElement(Icon_1.Icon, { width: 20, height: 20, type: Icon_1.EIcon.CAPdf, pathFill: "#999999" }))));
}
exports.CommentFormActions = CommentFormActions;
//# sourceMappingURL=CommentFormActions.js.map