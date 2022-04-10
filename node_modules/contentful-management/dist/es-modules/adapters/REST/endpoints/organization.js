import * as raw from './raw';
export var getMany = function getMany(http, params) {
  return raw.get(http, "/organizations", {
    params: params === null || params === void 0 ? void 0 : params.query
  });
};
export var get = function get(http, params) {
  return getMany(http, {
    query: {
      limit: 100
    }
  }).then(function (data) {
    var org = data.items.find(function (org) {
      return org.sys.id === params.organizationId;
    });

    if (!org) {
      var error = new Error("No organization was found with the ID ".concat(params.organizationId, " instead got ").concat(JSON.stringify(data))); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      error.status = 404; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      error.statusText = 'Not Found';
      return Promise.reject(error);
    }

    return org;
  });
};