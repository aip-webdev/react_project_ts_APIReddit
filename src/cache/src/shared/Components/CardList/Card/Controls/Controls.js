"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(require("react"));
var controls_scss_1 = __importDefault(require("./controls.scss"));
var KarmaCounter_1 = require("./KarmaCounter");
var Comments_1 = require("./Comments");
var Actions_1 = require("./Actions");
var useMediaSize_1 = require("../../../../../hooks/useMediaSize");
function Controls(props) {
    var commentsCount = props.commentsCount, karmaCount = props.karmaCount;
    var _a = (0, useMediaSize_1.useMediaSize)(), isMediaMobile = _a[0], isMediaTablet = _a[1], isMediaDesktop = _a[2];
    return (react_1.default.createElement("div", { className: controls_scss_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { count: karmaCount }),
        isMediaMobile && react_1.default.createElement(Comments_1.Comments, { btnClassName: controls_scss_1.default.actionButton, text: commentsCount, textHide: false }),
        isMediaMobile && react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;
//# sourceMappingURL=Controls.js.map