import { freezeSys, toPlainObject } from 'contentful-sdk-core';
import copy from 'fast-copy';
import { wrapCollection } from '../common-utils';
import enhanceWithMethods from '../enhance-with-methods';
export var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Endpoint"] = "endpoint";
})(ActionTypes || (ActionTypes = {}));

/**
 * @private
 */
function createAppActionApi(makeRequest) {
  var getParams = function getParams(data) {
    return {
      organizationId: data.sys.organization.sys.id,
      appDefinitionId: data.sys.appDefinition.sys.id,
      appActionId: data.sys.id
    };
  };

  return {
    "delete": function del() {
      var data = this.toPlainObject();
      return makeRequest({
        entityType: 'AppAction',
        action: 'delete',
        params: getParams(data)
      });
    }
  };
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Bundle data
 * @return Wrapped App Bundle data
 */


export function wrapAppAction(makeRequest, data) {
  var appAction = toPlainObject(copy(data));
  var appActionWithMethods = enhanceWithMethods(appAction, createAppActionApi(makeRequest));
  return freezeSys(appActionWithMethods);
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Bundle collection data
 * @return Wrapped App Bundle collection data
 */

export var wrapAppActionCollection = wrapCollection(wrapAppAction);