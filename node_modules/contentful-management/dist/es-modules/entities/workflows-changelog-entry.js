import { freezeSys, toPlainObject } from 'contentful-sdk-core';
import copy from 'fast-copy';
import { wrapCollection } from '../common-utils';
import enhanceWithMethods from '../enhance-with-methods';

/**
 * @private
 */
function createWorkflowsChangelogEntryApi() {
  return {};
}
/**
 * @private
 */


export function wrapWorkflowsChangelogEntry(_makeRequest, data) {
  var workflowsChangelogEntry = toPlainObject(copy(data));
  var workflowsChangelogEntryWithMethods = enhanceWithMethods(workflowsChangelogEntry, createWorkflowsChangelogEntryApi());
  return freezeSys(workflowsChangelogEntryWithMethods);
}
/**
 * @private
 */

export var wrapWorkflowsChangelogEntryCollection = wrapCollection(wrapWorkflowsChangelogEntry);