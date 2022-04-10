import * as raw from './raw';

var getBaseUrl = function getBaseUrl(params) {
  return "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId, "/workflows_changelog");
};

export var getMany = function getMany(http, params, headers) {
  return raw.get(http, getBaseUrl(params), {
    headers: headers,
    params: params.query
  });
};