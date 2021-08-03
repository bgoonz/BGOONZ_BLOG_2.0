"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rich_text_types_1 = require("@contentful/rich-text-types");
function default_1(heading) {
    return {
        nodeType: rich_text_types_1.BLOCKS.DOCUMENT,
        data: {},
        content: [
            {
                nodeType: heading,
                data: {},
                content: [
                    {
                        nodeType: 'text',
                        value: 'hello world',
                        marks: [],
                        data: {},
                    },
                ],
            },
        ],
    };
}
exports.default = default_1;
//# sourceMappingURL=heading.js.map