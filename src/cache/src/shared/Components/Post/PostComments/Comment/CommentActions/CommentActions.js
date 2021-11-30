"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentActions = void 0;
var react_1 = __importDefault(require("react"));
var commentactions_scss_1 = __importDefault(require("./commentactions.scss"));
var Comments_1 = require("../../../../CardList/Card/Controls/Comments");
var Share_1 = require("../../../../CardList/Card/Controls/Actions/Share");
var Complain_1 = require("../../../../CardList/Card/Controls/Actions/Complain");
function CommentActions(_a) {
    var handleClick = _a.handleClick;
    return (react_1.default.createElement("div", { className: commentactions_scss_1.default.postActions },
        react_1.default.createElement(Comments_1.Comments, { onclick: handleClick, textHide: false, text: '\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C', btnClassName: commentactions_scss_1.default.actionButton }),
        react_1.default.createElement(Share_1.Share, { textHide: false, btnClassName: commentactions_scss_1.default.actionButton }),
        react_1.default.createElement(Complain_1.Complain, { textHide: false, btnClassName: commentactions_scss_1.default.actionButton })));
}
exports.CommentActions = CommentActions;
//# sourceMappingURL=CommentActions.js.map