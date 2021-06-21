"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/features/object/values");
require("core-js/features/array/includes");
var blocks_1 = require("./blocks");
exports.BLOCKS = blocks_1.default;
var inlines_1 = require("./inlines");
exports.INLINES = inlines_1.default;
var marks_1 = require("./marks");
exports.MARKS = marks_1.default;
__export(require("./schemaConstraints"));
var emptyDocument_1 = require("./emptyDocument");
exports.EMPTY_DOCUMENT = emptyDocument_1.default;
var helpers = __importStar(require("./helpers"));
exports.helpers = helpers;
//# sourceMappingURL=index.js.map