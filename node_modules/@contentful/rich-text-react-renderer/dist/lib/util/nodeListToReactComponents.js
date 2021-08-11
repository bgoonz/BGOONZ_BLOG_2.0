"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var rich_text_types_1 = require("@contentful/rich-text-types");
var appendKeyToValidElement_1 = require("./appendKeyToValidElement");
function nodeListToReactComponents(nodes, options) {
    return nodes.map(function (node, index) {
        return appendKeyToValidElement_1.appendKeyToValidElement(nodeToReactComponent(node, options), index);
    });
}
exports.nodeListToReactComponents = nodeListToReactComponents;
function nodeToReactComponent(node, options) {
    var renderNode = options.renderNode, renderMark = options.renderMark, renderText = options.renderText;
    if (rich_text_types_1.helpers.isText(node)) {
        return node.marks.reduce(function (value, mark) {
            if (!renderMark[mark.type]) {
                return value;
            }
            return renderMark[mark.type](value);
        }, renderText ? renderText(node.value) : node.value);
    }
    else {
        var children = nodeListToReactComponents(node.content, options);
        if (!node.nodeType || !renderNode[node.nodeType]) {
            return react_1.default.createElement(react_1.default.Fragment, null, children);
        }
        return renderNode[node.nodeType](node, children);
    }
}
exports.nodeToReactComponent = nodeToReactComponent;
//# sourceMappingURL=nodeListToReactComponents.js.map