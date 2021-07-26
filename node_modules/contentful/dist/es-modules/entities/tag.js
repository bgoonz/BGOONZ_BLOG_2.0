"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapTag = wrapTag;
exports.wrapTagCollection = wrapTagCollection;

var _fastCopy = _interopRequireDefault(require("fast-copy"));

var _contentfulSdkCore = require("contentful-sdk-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof Entities
 * @typedef Tag
 * @prop {Entities.Sys} sys - Standard system metadata with additional entry specific properties
 * @prop {string} name - Tag name
 * @prop {function(): Object} toPlainObject() - Returns this tag as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw tag data
 * @return {Tag} Wrapped tag data
 */
function wrapTag(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}
/**
 * @memberof Entities
 * @typedef TagCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.Tag>} items
 * @prop {function(): Object} toPlainObject() - Returns this Tag collection as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw tag collection data
 * @return {TagCollection} Wrapped tag collection data
 */


function wrapTagCollection(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}