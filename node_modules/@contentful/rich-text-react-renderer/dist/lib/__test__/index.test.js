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
var react_1 = __importDefault(require("react"));
var rich_text_types_1 = require("@contentful/rich-text-types");
var __1 = require("..");
var documents_1 = require("./documents");
var Document_1 = __importDefault(require("./components/Document"));
var Paragraph_1 = __importDefault(require("./components/Paragraph"));
var Strong_1 = __importDefault(require("./components/Strong"));
var appendKeyToValidElement_1 = require("../util/appendKeyToValidElement");
var nodeListToReactComponents_1 = require("../util/nodeListToReactComponents");
describe('documentToReactComponents', function () {
    it('returns an empty array when given an empty document', function () {
        var document = {
            nodeType: rich_text_types_1.BLOCKS.DOCUMENT,
            data: {},
            content: [],
        };
        expect(__1.documentToReactComponents(document)).toEqual([]);
    });
    it('returns an array of elements when given a populated document', function () {
        var document = documents_1.hrDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
        expect(__1.documentToReactComponents(document)).toBeInstanceOf(Array);
    });
    it('renders nodes with default node renderer', function () {
        var docs = [
            documents_1.paragraphDoc,
            documents_1.headingDoc(rich_text_types_1.BLOCKS.HEADING_1),
            documents_1.headingDoc(rich_text_types_1.BLOCKS.HEADING_2),
        ];
        docs.forEach(function (doc) {
            expect(__1.documentToReactComponents(doc)).toMatchSnapshot();
        });
    });
    it('renders marks with default mark renderer', function () {
        var docs = [
            documents_1.marksDoc(rich_text_types_1.MARKS.ITALIC),
            documents_1.marksDoc(rich_text_types_1.MARKS.BOLD),
            documents_1.marksDoc(rich_text_types_1.MARKS.UNDERLINE),
            documents_1.marksDoc(rich_text_types_1.MARKS.CODE),
        ];
        docs.forEach(function (doc) {
            expect(__1.documentToReactComponents(doc)).toMatchSnapshot();
        });
    });
    it('renders unaltered text with default text renderer', function () {
        var document = documents_1.paragraphDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders multiple marks with default mark renderer', function () {
        var doc = documents_1.multiMarkDoc();
        expect(__1.documentToReactComponents(doc)).toMatchSnapshot();
    });
    it('renders nodes with passed custom node renderer', function () {
        var _a;
        var options = {
            renderNode: (_a = {},
                _a[rich_text_types_1.BLOCKS.DOCUMENT] = function (node, children) { return react_1.default.createElement(Document_1.default, null, children); },
                _a[rich_text_types_1.BLOCKS.PARAGRAPH] = function (node, children) { return react_1.default.createElement(Paragraph_1.default, null, children); },
                _a),
        };
        var document = documents_1.quoteDoc;
        expect(__1.documentToReactComponents(document, options)).toMatchSnapshot();
    });
    it('renders marks with the passed custom mark renderer', function () {
        var _a;
        var options = {
            renderMark: (_a = {},
                _a[rich_text_types_1.MARKS.BOLD] = function (text) { return react_1.default.createElement(Strong_1.default, null, text); },
                _a),
        };
        var document = documents_1.multiMarkDoc();
        expect(__1.documentToReactComponents(document, options)).toMatchSnapshot();
    });
    it('renders text with the passed custom text renderer', function () {
        var options = {
            renderText: function (text) { return text.replace(/world/, 'Earth'); },
        };
        var document = documents_1.paragraphDoc;
        expect(__1.documentToReactComponents(document, options)).toMatchSnapshot();
    });
    it('does not render unrecognized marks', function () {
        var document = documents_1.invalidMarksDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders empty node if type is not recognized', function () {
        var document = documents_1.invalidTypeDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders default entry link block', function () {
        var entrySys = {
            sys: {
                id: '9mpxT4zsRi6Iwukey8KeM',
                link: 'Link',
                linkType: 'Entry',
            },
        };
        var document = documents_1.embeddedEntryDoc(entrySys);
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders ordered lists', function () {
        var document = documents_1.olDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders unordered lists', function () {
        var document = documents_1.ulDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders blockquotes', function () {
        var document = documents_1.quoteDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders horizontal rule', function () {
        var document = documents_1.hrDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('does not crash with inline elements (e.g. hyperlink)', function () {
        var document = documents_1.hyperlinkDoc;
        expect(__1.documentToReactComponents(document)).toBeTruthy();
    });
    it('renders hyperlink', function () {
        var document = documents_1.hyperlinkDoc;
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders asset hyperlink', function () {
        var asset = {
            target: {
                sys: {
                    id: '9mpxT4zsRi6Iwukey8KeM',
                    link: 'Link',
                    type: 'Asset',
                },
            },
        };
        var document = documents_1.inlineEntityDoc(asset, rich_text_types_1.INLINES.ASSET_HYPERLINK);
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders entry hyperlink', function () {
        var entry = {
            target: {
                sys: {
                    id: '9mpxT4zsRi6Iwukey8KeM',
                    link: 'Link',
                    type: 'Entry',
                },
            },
        };
        var document = documents_1.inlineEntityDoc(entry, rich_text_types_1.INLINES.ENTRY_HYPERLINK);
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
    it('renders embedded entry', function () {
        var entry = {
            target: {
                sys: {
                    id: '9mpxT4zsRi6Iwukey8KeM',
                    link: 'Link',
                    type: 'Entry',
                },
            },
        };
        var document = documents_1.inlineEntityDoc(entry, rich_text_types_1.INLINES.EMBEDDED_ENTRY);
        expect(__1.documentToReactComponents(document)).toMatchSnapshot();
    });
});
describe('appendKeyToValidElement', function () {
    it('appends keys to default React components', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement(react_1.default.createElement("div", null), 0)).toHaveProperty('key', '0');
    });
    it('appends keys to custom React components', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement(react_1.default.createElement(Paragraph_1.default, null, "hello world"), 0)).toHaveProperty('key', '0');
    });
    it('does not overwrite user specified keys', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement(react_1.default.createElement("div", { key: 'xyz' }), 0)).toHaveProperty('key', 'xyz');
    });
    it('does not add keys to text nodes', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement('hello world', 0)).not.toHaveProperty('key');
    });
    it('does not add keys to node arrays', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement([react_1.default.createElement("div", { key: 0 }), react_1.default.createElement("div", { key: 1 })], 0)).not.toHaveProperty('key');
    });
    it('does not add keys to null', function () {
        expect(appendKeyToValidElement_1.appendKeyToValidElement(null, 0)).toBeNull();
    });
});
describe('nodeToReactComponent', function () {
    var _a, _b;
    var options = {
        renderNode: (_a = {},
            _a[rich_text_types_1.BLOCKS.PARAGRAPH] = function (node, children) { return react_1.default.createElement("p", null, children); },
            _a),
        renderMark: (_b = {},
            _b[rich_text_types_1.MARKS.BOLD] = function (text) { return react_1.default.createElement("b", null, text); },
            _b),
    };
    var createBlockNode = function (nodeType) { return ({
        nodeType: nodeType,
        data: {},
        content: [
            {
                nodeType: 'text',
                value: 'hello world',
                marks: [],
                data: {},
            },
        ],
    }); };
    var createTextNode = function (type) { return ({
        nodeType: 'text',
        value: 'hello world',
        marks: [{ type: type }],
        data: {},
    }); };
    it('renders valid nodes', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(createBlockNode(rich_text_types_1.BLOCKS.PARAGRAPH), options)).toMatchSnapshot();
    });
    it('renders invalid node types in React fragments', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(createBlockNode(rich_text_types_1.BLOCKS.HEADING_1), options)).toMatchSnapshot();
    });
    it('renders valid marks', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(createTextNode(rich_text_types_1.MARKS.BOLD), options)).toMatchSnapshot();
    });
    it('does not add additional tags on invalid marks', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(createTextNode(rich_text_types_1.MARKS.ITALIC), options)).toMatchSnapshot();
    });
    var customTextNode = {
        nodeType: rich_text_types_1.BLOCKS.PARAGRAPH,
        data: {},
        content: [
            {
                nodeType: 'text',
                value: 'some\nlines\nof\ntext',
                marks: [{ type: rich_text_types_1.MARKS.BOLD }],
                data: {},
            },
        ],
    };
    it('does not render altered text with default text renderer', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(customTextNode, options)).toMatchSnapshot();
    });
    it('renders altered text with custom text renderer', function () {
        expect(nodeListToReactComponents_1.nodeToReactComponent(customTextNode, __assign({}, options, { renderText: function (text) {
                return text.split('\n').reduce(function (children, textSegment, index) {
                    return children.concat([index > 0 && react_1.default.createElement("br", { key: index }), textSegment]);
                }, []);
            } }))).toMatchSnapshot();
    });
});
describe('nodeListToReactComponents', function () {
    var _a, _b;
    var options = {
        renderNode: (_a = {},
            _a[rich_text_types_1.BLOCKS.PARAGRAPH] = function (node, children) { return react_1.default.createElement("p", null, children); },
            _a),
        renderMark: (_b = {},
            _b[rich_text_types_1.MARKS.BOLD] = function (text) { return react_1.default.createElement("b", null, text); },
            _b),
    };
    var nodes = [
        {
            nodeType: rich_text_types_1.BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: 'hello',
                    marks: [{ type: rich_text_types_1.MARKS.BOLD }],
                    data: {},
                },
            ],
        },
        {
            nodeType: 'text',
            value: ' ',
            marks: [],
            data: {},
        },
        {
            nodeType: rich_text_types_1.BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: 'world',
                    marks: [],
                    data: {},
                },
            ],
        },
    ];
    it('renders children as an array with keys from its index', function () {
        var renderedNodes = nodeListToReactComponents_1.nodeListToReactComponents(nodes, options);
        expect(renderedNodes[0]).toHaveProperty('key', '0');
        expect(renderedNodes[1]).not.toHaveProperty('key');
        expect(renderedNodes[2]).toHaveProperty('key', '2');
        expect(renderedNodes).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map