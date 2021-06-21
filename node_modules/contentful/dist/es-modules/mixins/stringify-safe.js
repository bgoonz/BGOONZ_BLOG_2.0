"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixinStringifySafe;

var _jsonStringifySafe = _interopRequireDefault(require("json-stringify-safe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mixinStringifySafe(data) {
  return Object.defineProperty(data, 'stringifySafe', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (serializer = null, indent = '') {
      return (0, _jsonStringifySafe.default)(this, serializer, indent, (key, value) => {
        return {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: value.sys.id,
            circular: true
          }
        };
      });
    }
  });
}