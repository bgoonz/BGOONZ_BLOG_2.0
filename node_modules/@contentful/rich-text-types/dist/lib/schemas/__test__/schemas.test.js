"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = __importDefault(require("../../blocks"));
var inlines_1 = __importDefault(require("../../inlines"));
var index_1 = require("../index");
var matchesSnapshot = function (nodeType) {
    var jsonSchema = index_1.getSchemaWithNodeType(nodeType);
    expect(jsonSchema).toMatchSnapshot(nodeType);
};
describe('getSchemaWithNodeType', function () {
    it('returns json schema for each nodeType', function () {
        Object.values(inlines_1.default).forEach(function (nodeType) {
            matchesSnapshot(nodeType);
        });
        Object.values(blocks_1.default).forEach(function (nodeType) {
            matchesSnapshot(nodeType);
        });
        matchesSnapshot('text');
    });
    it('throws error if no schema found', function () {
        expect(function () { return index_1.getSchemaWithNodeType('unknown-node-type'); }).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=schemas.test.js.map