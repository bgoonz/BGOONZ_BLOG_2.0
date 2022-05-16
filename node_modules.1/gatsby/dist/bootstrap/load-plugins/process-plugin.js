"use strict";

exports.__esModule = true;
exports.processPlugin = processPlugin;

var _createId = require("./utils/create-id");

var _resolvePlugin = require("./resolve-plugin");

var _lodash = require("lodash");

function processPlugin(plugin, rootDir) {
  // Respect the directory that the plugin was sourced from initially
  rootDir = !(0, _lodash.isString)(plugin) && plugin.parentDir || rootDir;

  if ((0, _lodash.isString)(plugin)) {
    const info = (0, _resolvePlugin.resolvePlugin)(plugin, rootDir);
    return { ...info,
      pluginOptions: {
        plugins: []
      }
    };
  }

  plugin.options = plugin.options || {}; // Throw an error if there is an "option" key.

  if ((0, _lodash.isEmpty)(plugin.options) && !(0, _lodash.isEmpty)(plugin.option)) {
    throw new Error(`Plugin "${plugin.resolve}" has an "option" key in the configuration. Did you mean "options"?`);
  } // Plugins can have plugins.


  if (plugin.subPluginPaths) {
    for (const subPluginPath of plugin.subPluginPaths) {
      const segments = subPluginPath.split(`.`);
      let roots = [plugin.options];
      let pathToSwap = segments;

      for (const segment of segments) {
        if (segment === `[]`) {
          pathToSwap = pathToSwap.slice(0, pathToSwap.length - 1);
          roots = roots.flat();
        } else {
          roots = roots.map(root => root[segment]);
        }
      }

      roots = roots.flat();
      const processed = [];

      for (const root of roots) {
        const result = processPlugin(root, rootDir);
        processed.push(result);
      }

      (0, _lodash.set)(plugin.options, pathToSwap, processed);
    }
  } // Add some default values for tests as we don't actually
  // want to try to load anything during tests.


  if (plugin.resolve === `___TEST___`) {
    const name = `TEST`;
    return {
      id: (0, _createId.createPluginId)(name, plugin),
      name,
      version: `0.0.0-test`,
      pluginOptions: {
        plugins: []
      },
      resolve: `__TEST__`
    };
  }

  const info = (0, _resolvePlugin.resolvePlugin)(plugin, rootDir);
  return { ...info,
    modulePath: plugin.modulePath,
    module: plugin.module,
    subPluginPaths: plugin.subPluginPaths ? Array.from(plugin.subPluginPaths) : undefined,
    id: (0, _createId.createPluginId)(info.name, plugin),
    pluginOptions: (0, _lodash.merge)({
      plugins: []
    }, plugin.options)
  };
}
//# sourceMappingURL=process-plugin.js.map