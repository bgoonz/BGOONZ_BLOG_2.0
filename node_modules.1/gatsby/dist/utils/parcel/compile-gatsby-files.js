"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.constructParcel = constructParcel;
exports.compileGatsbyFiles = compileGatsbyFiles;
exports.getResolvedFieldsForPlugin = getResolvedFieldsForPlugin;
exports.findCompiledLocalPluginModule = findCompiledLocalPluginModule;
exports.gatsbyFileRegex = exports.PARCEL_CACHE_DIR = exports.COMPILED_CACHE_DIR = void 0;

var _core = require("@parcel/core");

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _fsExtra = require("fs-extra");

var _gatsbyTelemetry = _interopRequireDefault(require("gatsby-telemetry"));

const COMPILED_CACHE_DIR = `.cache/compiled`;
exports.COMPILED_CACHE_DIR = COMPILED_CACHE_DIR;
const PARCEL_CACHE_DIR = `.cache/.parcel-cache`;
exports.PARCEL_CACHE_DIR = PARCEL_CACHE_DIR;
const gatsbyFileRegex = `gatsby-+(node|config).ts`;
/**
 * Construct Parcel with config.
 * @see {@link https://parceljs.org/features/targets/}
 */

exports.gatsbyFileRegex = gatsbyFileRegex;

function constructParcel(siteRoot) {
  return new _core.Parcel({
    entries: [`${siteRoot}/${gatsbyFileRegex}`, `${siteRoot}/plugins/**/${gatsbyFileRegex}`],
    defaultConfig: require.resolve(`gatsby-parcel-config`),
    mode: `production`,
    targets: {
      root: {
        outputFormat: `commonjs`,
        includeNodeModules: false,
        sourceMap: false,
        engines: {
          node: `>= 14.15.0`
        },
        distDir: `${siteRoot}/${COMPILED_CACHE_DIR}`
      }
    },
    cacheDir: `${siteRoot}/${PARCEL_CACHE_DIR}`
  });
}
/**
 * Compile known gatsby-* files (e.g. `gatsby-config`, `gatsby-node`)
 * and output in `<SITE_ROOT>/.cache/compiled`.
 */


async function compileGatsbyFiles(siteRoot) {
  try {
    const parcel = constructParcel(siteRoot);
    const distDir = `${siteRoot}/${COMPILED_CACHE_DIR}`;
    await (0, _fsExtra.ensureDir)(distDir);
    await (0, _fsExtra.emptyDir)(distDir);
    const {
      bundleGraph
    } = await parcel.run();

    if (_gatsbyTelemetry.default.isTrackingEnabled()) {
      const bundles = bundleGraph.getBundles();
      if (bundles.length === 0) return;
      let compiledTSFilesCount = 0;

      for (const bundle of bundles) {
        var _bundle$getMainEntry, _bundle$getMainEntry$;

        if (bundle !== null && bundle !== void 0 && (_bundle$getMainEntry = bundle.getMainEntry()) !== null && _bundle$getMainEntry !== void 0 && (_bundle$getMainEntry$ = _bundle$getMainEntry.filePath) !== null && _bundle$getMainEntry$ !== void 0 && _bundle$getMainEntry$.endsWith(`.ts`)) {
          compiledTSFilesCount = compiledTSFilesCount + 1;
        }
      }

      _gatsbyTelemetry.default.trackCli(`PARCEL_COMPILATION_END`, {
        valueInteger: compiledTSFilesCount,
        name: `count of compiled ts files`
      });
    }
  } catch (error) {
    if (error.diagnostics) {
      handleErrors(error.diagnostics);
    } else {
      _reporter.default.panic({
        id: `11903`,
        error,
        context: {
          siteRoot
        }
      });
    }
  }
}

function handleErrors(diagnostics) {
  diagnostics.forEach(err => {
    if (err.codeFrames) {
      err.codeFrames.forEach(c => {
        var _c$codeHighlights$;

        // Assuming that codeHighlights only ever has one entry in the array. Local tests only ever showed one
        const codeHighlightsMessage = c === null || c === void 0 ? void 0 : (_c$codeHighlights$ = c.codeHighlights[0]) === null || _c$codeHighlights$ === void 0 ? void 0 : _c$codeHighlights$.message; // If both messages are the same don't print the specific, otherwise they would be duplicate

        const specificMessage = codeHighlightsMessage === err.message ? undefined : codeHighlightsMessage;

        _reporter.default.panic({
          id: `11901`,
          context: {
            filePath: c === null || c === void 0 ? void 0 : c.filePath,
            generalMessage: err.message,
            specificMessage,
            origin: err === null || err === void 0 ? void 0 : err.origin,
            hints: err === null || err === void 0 ? void 0 : err.hints
          }
        });
      });
    } else {
      _reporter.default.panic({
        id: `11901`,
        context: {
          generalMessage: err.message,
          origin: err === null || err === void 0 ? void 0 : err.origin,
          hints: err === null || err === void 0 ? void 0 : err.hints
        }
      });
    }
  });
}

function getResolvedFieldsForPlugin(rootDir, pluginName) {
  return {
    resolvedCompiledGatsbyNode: findCompiledLocalPluginModule(rootDir, pluginName, `gatsby-node`)
  };
}

function findCompiledLocalPluginModule(rootDir, pluginName, moduleName) {
  const compiledPathForPlugin = pluginName === `default-site-plugin` ? `${rootDir}/${COMPILED_CACHE_DIR}` : `${rootDir}/${COMPILED_CACHE_DIR}/plugins/${pluginName}`;
  const compiledPathForModule = `${compiledPathForPlugin}/${moduleName}.js`;
  const isCompiled = (0, _fsExtra.existsSync)(compiledPathForModule);

  if (isCompiled) {
    return compiledPathForModule;
  }

  return undefined;
}
//# sourceMappingURL=compile-gatsby-files.js.map