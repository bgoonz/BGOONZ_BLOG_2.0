"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapLocale = wrapLocale;
exports.wrapLocaleCollection = wrapLocaleCollection;

var _fastCopy = _interopRequireDefault(require("fast-copy"));

var _contentfulSdkCore = require("contentful-sdk-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof Entities
 * @typedef Locale
 * @prop {Entities.Sys} sys - Standard system metadata with additional entry specific properties
 * @prop {string} name - locale name (example: English)
 * @prop {string} code - locale code (example: en-US)
 * @prop {string} fallbackCode - the locale code to fallback to when there is not content for the current locale
 * @prop {boolean} default - If this is the default locale
 * @prop {boolean} optional - If the locale needs to be filled in on entries or not
 * @prop {function(): Object} toPlainObject() - Returns this Locale as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw locale data
 * @return {Locale} Wrapped locale data
 */
function wrapLocale(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}
/**
 * @memberof Entities
 * @typedef LocaleCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.Locale>} items
 * @prop {function(): Object} toPlainObject() - Returns this Locale collection as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw locale collection data
 * @return {LocaleCollection} Wrapped locale collection data
 */


function wrapLocaleCollection(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)((0, _fastCopy.default)(data)));
}