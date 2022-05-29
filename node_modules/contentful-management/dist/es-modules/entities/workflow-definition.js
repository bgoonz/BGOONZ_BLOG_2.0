function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { freezeSys, toPlainObject } from 'contentful-sdk-core';
import copy from 'fast-copy';
import { wrapCollection } from '../common-utils';
import enhanceWithMethods from '../enhance-with-methods';

/**
 * @private
 */
export default function createWorkflowDefinitionApi(makeRequest) {
  var getParams = function getParams(workflowDefinition) {
    return {
      spaceId: workflowDefinition.sys.space.sys.id,
      environmentId: workflowDefinition.sys.environment.sys.id,
      workflowDefinitionId: workflowDefinition.sys.id
    };
  };

  return {
    update: function update() {
      var raw = this.toPlainObject();
      return makeRequest({
        entityType: 'WorkflowDefinition',
        action: 'update',
        params: getParams(raw),
        payload: raw
      }).then(function (data) {
        return wrapWorkflowDefinition(makeRequest, data);
      });
    },
    "delete": function _delete() {
      var raw = this.toPlainObject();
      return makeRequest({
        entityType: 'WorkflowDefinition',
        action: 'delete',
        params: _objectSpread(_objectSpread({}, getParams(raw)), {}, {
          version: raw.sys.version
        })
      }).then(function () {// noop
      });
    }
  };
}
/**
 * @private
 */

export function wrapWorkflowDefinition(makeRequest, data) {
  var workflowDefinition = toPlainObject(copy(data));
  var workflowDefinitionWithMethods = enhanceWithMethods(workflowDefinition, createWorkflowDefinitionApi(makeRequest));
  return freezeSys(workflowDefinitionWithMethods);
}
/**
 * @private
 */

export var wrapWorkflowDefinitionCollection = wrapCollection(wrapWorkflowDefinition);