import copy from 'fast-copy';
import { toPlainObject } from 'contentful-sdk-core';

/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppActionCall data
 * @return Wrapped AppActionCall data
 */
export function wrapAppActionCall(_makeRequest, data) {
  var signedRequest = toPlainObject(copy(data));
  return signedRequest;
}