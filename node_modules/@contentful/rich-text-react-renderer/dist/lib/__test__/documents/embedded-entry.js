"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rich_text_types_1 = require("@contentful/rich-text-types");
function default_1(entry) {
    return {
        nodeType: rich_text_types_1.BLOCKS.DOCUMENT,
        data: {},
        content: [
            {
                nodeType: rich_text_types_1.BLOCKS.EMBEDDED_ENTRY,
                content: [],
                data: {
                    target: entry,
                },
            },
        ],
    };
}
exports.default = default_1;
//# sourceMappingURL=embedded-entry.js.map