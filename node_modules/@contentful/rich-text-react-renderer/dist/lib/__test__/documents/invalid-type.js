"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rich_text_types_1 = require("@contentful/rich-text-types");
exports.default = {
    nodeType: rich_text_types_1.BLOCKS.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: 'UNRECOGNIZED_TYPE',
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: 'Hello world!',
                    marks: [],
                    data: {},
                },
            ],
        },
    ],
};
//# sourceMappingURL=invalid-type.js.map