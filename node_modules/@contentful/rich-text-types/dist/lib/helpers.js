"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = __importDefault(require("./blocks"));
var inlines_1 = __importDefault(require("./inlines"));
/**
 * Checks if the node is an instance of Inline.
 */
function isInline(node) {
    return Object.values(inlines_1.default).includes(node.nodeType);
}
exports.isInline = isInline;
/**
 * Checks if the node is an instance of Block.
 */
function isBlock(node) {
    return Object.values(blocks_1.default).includes(node.nodeType);
}
exports.isBlock = isBlock;
/**
 * Checks if the node is an instance of Text.
 */
function isText(node) {
    return node.nodeType === 'text';
}
exports.isText = isText;
//# sourceMappingURL=helpers.js.map