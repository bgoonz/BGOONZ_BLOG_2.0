"use strict";

exports.__esModule = true;
exports.getAPI = void 0;

var _lodash = require("lodash");

const getAPI = api => (0, _lodash.keys)(api).reduce((merged, key) => {
  merged[key] = (0, _lodash.keys)(api[key]);
  return merged;
}, {});

exports.getAPI = getAPI;
//# sourceMappingURL=get-api.js.map