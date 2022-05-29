import * as raw from './raw';
import { normalizeSelect } from './utils';

var getBaseUrl = function getBaseUrl(params) {
  return "/organizations/".concat(params.organizationId, "/app_definitions/").concat(params.appDefinitionId, "/actions");
};

var getAppActionUrl = function getAppActionUrl(params) {
  return "".concat(getBaseUrl(params), "/").concat(params.appActionId);
};

export var get = function get(http, params) {
  return raw.get(http, getAppActionUrl(params));
};
export var getMany = function getMany(http, params) {
  return raw.get(http, getBaseUrl(params), {
    params: normalizeSelect(params.query)
  });
};
export var del = function del(http, params) {
  return raw.del(http, getAppActionUrl(params));
};
export var create = function create(http, params, data) {
  return raw.post(http, getBaseUrl(params), data);
};
export var update = function update(http, params, data) {
  return raw.put(http, getAppActionUrl(params), data);
};