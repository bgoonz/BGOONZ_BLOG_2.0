"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapSpace = wrapSpace;

var _contentfulSdkCore = require("contentful-sdk-core");

/**
 * @memberof Entities
 * @typedef Space
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - Space id
 * @prop {string} sys.type - Entity type
 * @prop {string} name - Space name
 * @prop {Array<string>} locales - Array with locale codes
 * @prop {function(): Object} toPlainObject() - Returns this Space as a plain JS object
 */

/**
 * @private
 * @param  {Object} data - API response for a Space
 * @return {Space}
 */
function wrapSpace(data) {
  return (0, _contentfulSdkCore.freezeSys)((0, _contentfulSdkCore.toPlainObject)(data));
}