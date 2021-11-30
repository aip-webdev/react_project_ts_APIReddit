"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingPostComments = void 0;
var react_1 = __importDefault(require("react"));
exports.sortingPostComments = [
    {
        id: 'best',
        element: react_1.default.createElement("span", null, "\u041B\u0443\u0447\u0448\u0438\u0435")
    },
    {
        id: 'new',
        element: react_1.default.createElement("span", null, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435")
    },
    {
        id: 'old',
        element: react_1.default.createElement("span", null, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435")
    },
    {
        id: 'dispute',
        element: react_1.default.createElement("span", null, "\u0421\u043F\u043E\u0440\u043D\u044B\u0435")
    },
    {
        id: 'qa',
        element: react_1.default.createElement("span", null, "\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442")
    },
];
//# sourceMappingURL=sortPostComments.js.map