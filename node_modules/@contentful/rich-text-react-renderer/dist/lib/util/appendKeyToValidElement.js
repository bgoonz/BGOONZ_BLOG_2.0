"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function appendKeyToValidElement(element, key) {
    if (react_1.isValidElement(element) && element.key === null) {
        return react_1.cloneElement(element, { key: key });
    }
    return element;
}
exports.appendKeyToValidElement = appendKeyToValidElement;
//# sourceMappingURL=appendKeyToValidElement.js.map