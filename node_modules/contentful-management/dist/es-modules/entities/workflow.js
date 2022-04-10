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
export default function createWorkflowApi(makeRequest) {
  var getParams = function getParams(Workflow) {
    return {
      spaceId: Workflow.sys.space.sys.id,
      environmentId: Workflow.sys.environment.sys.id,
      workflowId: Workflow.sys.id
    };
  };

  return {
    update: function update() {
      var raw = this.toPlainObject();
      return makeRequest({
        entityType: 'Workflow',
        action: 'update',
        params: getParams(raw),
        payload: raw
      }).then(function (data) {
        return wrapWorkflow(makeRequest, data);
      });
    },
    "delete": function _delete() {
      var raw = this.toPlainObject();
      return makeRequest({
        entityType: 'Workflow',
        action: 'delete',
        params: _objectSpread(_objectSpread({}, getParams(raw)), {}, {
          version: raw.sys.version
        })
      }).then(function () {// noop
      });
    },
    complete: function complete() {
      var raw = this.toPlainObject();
      return makeRequest({
        entityType: 'Workflow',
        action: 'complete',
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

export function wrapWorkflow(makeRequest, data) {
  var Workflow = toPlainObject(copy(data));
  var WorkflowWithMethods = enhanceWithMethods(Workflow, createWorkflowApi(makeRequest));
  return freezeSys(WorkflowWithMethods);
}
/**
 * @private
 */

export var wrapWorkflowCollection = wrapCollection(wrapWorkflow);