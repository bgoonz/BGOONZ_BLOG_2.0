"use strict";

exports.__esModule = true;
exports.createPath = createPath;

var _path = require("path");

function createPath(filePath, // TODO(v5): Set this default to false
withTrailingSlash, usePathBase) {
  if (withTrailingSlash === void 0) {
    withTrailingSlash = true;
  }

  if (usePathBase === void 0) {
    usePathBase = false;
  }

  var _parse = (0, _path.parse)(filePath),
      dir = _parse.dir,
      name = _parse.name,
      base = _parse.base; // When a collection route also has client-only routes (e.g. {Product.name}/[...sku])
  // The "name" would be .. and "ext" .sku -- that's why "base" needs to be used instead
  // to get [...sku]. usePathBase is set to "true" in collection-route-builder and gatsbyPath


  var parsedBase = base === "index" ? "" : base;
  var parsedName = name === "index" ? "" : name;
  var postfix = withTrailingSlash ? "/" : "";
  return _path.posix.join("/", dir, usePathBase ? parsedBase : parsedName, postfix);
}