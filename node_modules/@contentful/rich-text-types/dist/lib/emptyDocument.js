"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = __importDefault(require("./blocks"));
/**
 * A rich text document considered to be empty.
 * Any other document structure than this is not considered empty.
 */
var EMPTY_DOCUMENT = {
    nodeType: blocks_1.default.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: blocks_1.default.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: '',
                    marks: [],
                    data: {},
                },
            ],
        },
    ],
};
exports.default = EMPTY_DOCUMENT;
//# sourceMappingURL=emptyDocument.js.map