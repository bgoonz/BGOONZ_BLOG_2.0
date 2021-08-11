"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rich_text_types_1 = require("@contentful/rich-text-types");
function inlineEntity(entry, inlineType) {
    return {
        content: [
            {
                data: {},
                content: [
                    {
                        marks: [],
                        value: '',
                        nodeType: 'text',
                        data: {},
                    },
                    {
                        data: entry,
                        content: [
                            {
                                marks: [],
                                value: '',
                                nodeType: 'text',
                                data: {},
                            },
                        ],
                        nodeType: inlineType,
                    },
                    {
                        marks: [],
                        value: '',
                        nodeType: 'text',
                        data: {},
                    },
                ],
                nodeType: rich_text_types_1.BLOCKS.PARAGRAPH,
            },
        ],
        data: {},
        nodeType: rich_text_types_1.BLOCKS.DOCUMENT,
    };
}
exports.default = inlineEntity;
//# sourceMappingURL=inline-entity.js.map