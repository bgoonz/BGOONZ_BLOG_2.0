"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ThemeToggler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeToggler, _React$Component);

  function ThemeToggler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      theme: typeof window !== 'undefined' ? window.__theme : null
    });
    return _this;
  }

  var _proto = ThemeToggler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    window.__onThemeChange = function () {
      _this2.setState({
        theme: window.__theme
      });
    };
  };

  _proto.toggleTheme = function toggleTheme(theme) {
    window.__setPreferredTheme(theme);
  };

  _proto.render = function render() {
    return /*#__PURE__*/_react.default.createElement(this.props.children, {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    });
  };

  return ThemeToggler;
}(_react.default.Component);

ThemeToggler.propTypes = {
  children: _propTypes.default.func.isRequired
};
var _default = ThemeToggler;
exports.default = _default;