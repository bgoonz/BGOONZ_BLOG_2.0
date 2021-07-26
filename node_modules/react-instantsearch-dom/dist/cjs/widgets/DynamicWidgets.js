"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DynamicWidgets;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../core/utils");

/* eslint-disable react/prop-types */
var cx = (0, _utils.createClassNames)('DynamicWidgets');

function DynamicWidgets(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(cx(''), className)
  }, _react.default.createElement(_reactInstantsearchCore.ExperimentalDynamicWidgets, props, children));
}