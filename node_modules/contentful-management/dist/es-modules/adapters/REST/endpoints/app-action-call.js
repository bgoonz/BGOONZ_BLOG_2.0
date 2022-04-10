import * as raw from './raw';
export var create = function create(http, params, data) {
  return raw.post(http, "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId, "/app_installations/").concat(params.appDefinitionId, "/actions/").concat(params.appActionId, "/calls"), data);
};