"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapContentType = wrapContentType;
exports.wrapContentTypeCollection = wrapContentTypeCollection;

var _fastCopy = _interopRequireDefault(require("fast-copy"));

var _contentfulSdkCore = require("contentful-sdk-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof Entities
 * @typedef ContentType
 * @prop {Entities.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {string} displayField - Field used as the main display field for Entries
 * @prop {string} Array<Field> - All the fields contained in this Content Type
 * @prop {function(): Object} toPlainObject() - Returns this Content Type as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw content type data
 * @return {ContentType} Wrapped content type data
 */
function wrapContentType(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}
/**
 * @memberof Entities
 * @typedef ContentTypeCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.ContentType>} items
 * @prop {function(): Object} toPlainObject() - Returns this Content Type collection as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw content type collection data
 * @return {ContentTypeCollection} Wrapped content type collection data
 */


function wrapContentTypeCollection(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}