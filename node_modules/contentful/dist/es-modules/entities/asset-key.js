"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapAssetKey = wrapAssetKey;

var _fastCopy = _interopRequireDefault(require("fast-copy"));

var _contentfulSdkCore = require("contentful-sdk-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof Entities
 * @typedef AssetKey
 * @prop {string} policy - The asset key's policy
 * @prop {string} secret - The secret for creating a signing token
 * @prop {function(): Object} toPlainObject() - Returns this AssetKey as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw asset key data
 * @return {Asset} Wrapped asset key data
 */
function wrapAssetKey(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}