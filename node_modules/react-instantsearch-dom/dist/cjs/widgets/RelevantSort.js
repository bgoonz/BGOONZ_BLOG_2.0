"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactInstantsearchCore = require("react-instantsearch-core");

var _RelevantSort = _interopRequireDefault(require("../components/RelevantSort"));

var _default = (0, _reactInstantsearchCore.connectRelevantSort)(_RelevantSort.default);

exports.default = _default;