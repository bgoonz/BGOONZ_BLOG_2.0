"use strict";

exports.__esModule = true;
exports.addGatsbyPluginCloudPluginWhenInstalled = addGatsbyPluginCloudPluginWhenInstalled;
exports.incompatibleGatsbyCloudPlugin = incompatibleGatsbyCloudPlugin;
exports.GATSBY_CLOUD_PLUGIN_NAME = void 0;

var _resolveFrom = require("resolve-from");

var semver = _interopRequireWildcard(require("semver"));

var _processPlugin = require("../process-plugin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const GATSBY_CLOUD_PLUGIN_NAME = `gatsby-plugin-gatsby-cloud`;
exports.GATSBY_CLOUD_PLUGIN_NAME = GATSBY_CLOUD_PLUGIN_NAME;

function addGatsbyPluginCloudPluginWhenInstalled(plugins, rootDir) {
  const cloudPluginLocation = (0, _resolveFrom.silent)(rootDir, GATSBY_CLOUD_PLUGIN_NAME);

  if (cloudPluginLocation) {
    const processedGatsbyCloudPlugin = (0, _processPlugin.processPlugin)({
      resolve: cloudPluginLocation,
      options: {}
    }, rootDir);
    plugins.push(processedGatsbyCloudPlugin);
  }
}

function incompatibleGatsbyCloudPlugin(plugins) {
  const plugin = plugins.find(plugin => plugin.name === GATSBY_CLOUD_PLUGIN_NAME);
  return !semver.satisfies(plugin.version, `>=4.0.0-alpha`, {
    includePrerelease: true
  });
}
//# sourceMappingURL=handle-gatsby-cloud.js.map