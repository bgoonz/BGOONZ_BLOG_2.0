"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var react_1 = __importDefault(require("react"));
var rich_text_types_1 = require("@contentful/rich-text-types");
var nodeListToReactComponents_1 = require("./util/nodeListToReactComponents");
var defaultNodeRenderers = (_a = {},
    _a[rich_text_types_1.BLOCKS.DOCUMENT] = function (node, children) { return children; },
    _a[rich_text_types_1.BLOCKS.PARAGRAPH] = function (node, children) { return react_1.default.createElement("p", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_1] = function (node, children) { return react_1.default.createElement("h1", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_2] = function (node, children) { return react_1.default.createElement("h2", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_3] = function (node, children) { return react_1.default.createElement("h3", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_4] = function (node, children) { return react_1.default.createElement("h4", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_5] = function (node, children) { return react_1.default.createElement("h5", null, children); },
    _a[rich_text_types_1.BLOCKS.HEADING_6] = function (node, children) { return react_1.default.createElement("h6", null, children); },
    _a[rich_text_types_1.BLOCKS.EMBEDDED_ENTRY] = function (node, children) { return react_1.default.createElement("div", null, children); },
    _a[rich_text_types_1.BLOCKS.UL_LIST] = function (node, children) { return react_1.default.createElement("ul", null, children); },
    _a[rich_text_types_1.BLOCKS.OL_LIST] = function (node, children) { return react_1.default.createElement("ol", null, children); },
    _a[rich_text_types_1.BLOCKS.LIST_ITEM] = function (node, children) { return react_1.default.createElement("li", null, children); },
    _a[rich_text_types_1.BLOCKS.QUOTE] = function (node, children) { return react_1.default.createElement("blockquote", null, children); },
    _a[rich_text_types_1.BLOCKS.HR] = function () { return react_1.default.createElement("hr", null); },
    _a[rich_text_types_1.INLINES.ASSET_HYPERLINK] = function (node) { return defaultInline(rich_text_types_1.INLINES.ASSET_HYPERLINK, node); },
    _a[rich_text_types_1.INLINES.ENTRY_HYPERLINK] = function (node) { return defaultInline(rich_text_types_1.INLINES.ENTRY_HYPERLINK, node); },
    _a[rich_text_types_1.INLINES.EMBEDDED_ENTRY] = function (node) { return defaultInline(rich_text_types_1.INLINES.EMBEDDED_ENTRY, node); },
    _a[rich_text_types_1.INLINES.HYPERLINK] = function (node, children) { return react_1.default.createElement("a", { href: node.data.uri }, children); },
    _a);
var defaultMarkRenderers = (_b = {},
    _b[rich_text_types_1.MARKS.BOLD] = function (text) { return react_1.default.createElement("b", null, text); },
    _b[rich_text_types_1.MARKS.ITALIC] = function (text) { return react_1.default.createElement("i", null, text); },
    _b[rich_text_types_1.MARKS.UNDERLINE] = function (text) { return react_1.default.createElement("u", null, text); },
    _b[rich_text_types_1.MARKS.CODE] = function (text) { return react_1.default.createElement("code", null, text); },
    _b);
function defaultInline(type, node) {
    return (react_1.default.createElement("span", { key: node.data.target.sys.id },
        "type: ",
        node.nodeType,
        " id: ",
        node.data.target.sys.id));
}
/**
 * Serialize a Contentful Rich Text `document` to React tree
 */
function documentToReactComponents(richTextDocument, options) {
    if (options === void 0) { options = {}; }
    if (!richTextDocument) {
        return null;
    }
    return nodeListToReactComponents_1.nodeToReactComponent(richTextDocument, {
        renderNode: __assign({}, defaultNodeRenderers, options.renderNode),
        renderMark: __assign({}, defaultMarkRenderers, options.renderMark),
        renderText: options.renderText,
    });
}
exports.documentToReactComponents = documentToReactComponents;
//# sourceMappingURL=index.js.map