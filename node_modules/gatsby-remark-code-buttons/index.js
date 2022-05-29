"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var visit = require('unist-util-visit');

var qs = require('query-string');

module.exports = function gatsbyRemarkCodeButtons(_ref, _ref2) {
  var markdownAST = _ref.markdownAST;
  var customButtonClass = _ref2.buttonClass,
      customButtonContainerClass = _ref2.buttonContainerClass,
      customButtonText = _ref2.buttonText,
      customSvgIconClass = _ref2.svgIconClass,
      customSvgIcon = _ref2.svgIcon,
      customTooltipText = _ref2.tooltipText,
      customToasterClass = _ref2.toasterClass,
      customToasterTextClass = _ref2.toasterTextClass,
      customToasterText = _ref2.toasterText,
      customToasterDuration = _ref2.toasterDuration;
  visit(markdownAST, 'code', function (node, index, parent) {
    var _split = (node.lang || '').split(':'),
        _split2 = _slicedToArray(_split, 2),
        language = _split2[0],
        params = _split2[1];

    var actions = qs.parse(params);
    var clipboard = actions.clipboard;

    if (!language) {
      return;
    }

    if (clipboard === 'false') {
      delete actions['clipboard'];
    } else {
      var buttonClass = ['gatsby-code-button'].concat(customButtonClass || '').join(' ').trim();
      var buttonContainerClass = ['gatsby-code-button-container'].concat(customButtonContainerClass || '').join(' ').trim();
      var buttonText = customButtonText || '';
      var svgIconClass = ['gatsby-code-button-icon'].concat(customSvgIconClass || '').join(' ').trim();
      var svgIcon = customSvgIcon || "<svg class=\"".concat(svgIconClass, "\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z\"/></svg>");
      var tooltipText = customTooltipText || '';
      var toasterClass = ['gatsby-code-button-toaster'].concat(customToasterClass || '').join(' ').trim();
      var toasterTextClass = ['gatsby-code-button-toaster-text'].concat(customToasterTextClass || '').join(' ').trim();
      var toasterText = (customToasterText ? customToasterText : '').trim();
      var toasterDuration = customToasterDuration ? customToasterDuration : 3500;
      var toasterId = toasterText ? Math.random() * Math.pow(100, 10) : '';
      var code = parent.children[index].value;
      code = code.replace(/"/gm, '&quot;').replace(/`/gm, '\\`').replace(/\$/gm, '\\$');
      var buttonNode = {
        type: 'html',
        value: "\n            <div\n              class=\"".concat(buttonContainerClass, "\"\n              data-toaster-id=\"").concat(toasterId, "\"\n              data-toaster-class=\"").concat(toasterClass, "\"\n              data-toaster-text-class=\"").concat(toasterTextClass, "\"\n              data-toaster-text=\"").concat(toasterText, "\"\n              data-toaster-duration=\"").concat(toasterDuration, "\"\n              onClick=\"copyToClipboard(`").concat(code, "`, `").concat(toasterId, "`)\"\n            >\n              <div\n                class=\"").concat(buttonClass, "\"\n                data-tooltip=\"").concat(tooltipText, "\"\n              >\n                ").concat(buttonText).concat(svgIcon, "\n              </div>\n            </div>\n            ").trim()
      };
      parent.children.splice(index, 0, buttonNode);
      actions['clipboard'] = 'false';
    }

    var newQuery = '';

    if (Object.keys(actions).length) {
      newQuery = ":" + Object.keys(actions).map(function (key) {
        return "".concat(key, "=").concat(actions[key]);
      }).join('&');
    }

    node.lang = language + newQuery;
  });
};