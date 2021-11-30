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
exports.TextContent = void 0;
var react_1 = __importStar(require("react"));
var textcontent_scss_1 = __importDefault(require("./textcontent.scss"));
var stringShorter_1 = require("../../../../../utils/js/stringShorter");
var MetaData_1 = require("../../../ReusedComponents/MetaData");
var Post_1 = require("../../../Post");
var react_redux_1 = require("react-redux");
function TextContent(_a) {
    var post = _a.post;
    var id = post.id, author = post.author, author_url = post.author_url, post_url = post.post_url, topic_name = post.topic_name, count_comments = post.count_comments, count_karma = post.count_karma, created = post.created, url = post.url, self_text = post.self_text, title = post.title;
    var _b = (0, react_1.useState)(false), isModalOpened = _b[0], setIsModalOpened = _b[1];
    var postsWCData = (0, react_redux_1.useSelector)(function (state) { return state.postWithComments.postsWCData; });
    return (react_1.default.createElement("div", { className: textcontent_scss_1.default.textContent },
        react_1.default.createElement(MetaData_1.MetaData, { author: author, authorUrl: author_url, topicName: topic_name, publicationTime: created }),
        react_1.default.createElement("h2", { className: textcontent_scss_1.default.title },
            react_1.default.createElement("button", { type: 'button', className: textcontent_scss_1.default.postLink, onClick: function () {
                    setIsModalOpened(!isModalOpened);
                } }, title),
            self_text &&
                react_1.default.createElement("span", { className: textcontent_scss_1.default.titleSelf }, (0, stringShorter_1.stringShorter)(self_text, 30, 60, 80))),
        postsWCData && isModalOpened && react_1.default.createElement(Post_1.Post, { post: postsWCData.filter(function (post) { return post.id === id; })[0], onClose: function () { return setIsModalOpened(false); } })));
}
exports.TextContent = TextContent;
//# sourceMappingURL=TextContent.js.map