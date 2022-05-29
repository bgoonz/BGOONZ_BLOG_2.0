var _excluded = ["version"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import copy from 'fast-copy';
import * as raw from './raw';

var getBaseUrl = function getBaseUrl(params) {
  return "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId, "/workflow_definitions");
};

var getWorkflowDefinitionUrl = function getWorkflowDefinitionUrl(params) {
  return "".concat(getBaseUrl(params), "/").concat(params.workflowDefinitionId);
};

export var ALPHA_FEATURE_WORKFLOWS = 'workflows';
export var get = function get(http, params, headers) {
  return raw.get(http, getWorkflowDefinitionUrl(params), {
    headers: headers
  });
};
export var getMany = function getMany(http, params, headers) {
  return raw.get(http, getBaseUrl(params), {
    headers: headers,
    params: params.query
  });
};
export var create = function create(http, params, rawData, headers) {
  var data = copy(rawData);
  return raw.post(http, getBaseUrl(params), data, {
    headers: headers
  });
};
export var update = function update(http, params, rawData, headers) {
  var _rawData$sys$version;

  var data = copy(rawData);
  delete data.sys;
  return raw.put(http, getWorkflowDefinitionUrl(params), data, {
    headers: _objectSpread({
      'X-Contentful-Version': (_rawData$sys$version = rawData.sys.version) !== null && _rawData$sys$version !== void 0 ? _rawData$sys$version : 0
    }, headers)
  });
};
export var del = function del(http, _ref, headers) {
  var version = _ref.version,
      params = _objectWithoutProperties(_ref, _excluded);

  return raw.del(http, getWorkflowDefinitionUrl(params), {
    headers: _objectSpread({
      'X-Contentful-Version': version
    }, headers)
  });
};