"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getConfigFile = getConfigFile;

var _fastestLevenshtein = require("fastest-levenshtein");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _testRequireError = require("../utils/test-require-error");

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _path = _interopRequireDefault(require("path"));

var _fsExistsCached = require("fs-exists-cached");

var _compileGatsbyFiles = require("../utils/parcel/compile-gatsby-files");

function isNearMatch(fileName, configName, distance) {
  if (!fileName) return false;
  return (0, _fastestLevenshtein.distance)(fileName, configName) <= distance;
}

async function getConfigFile(siteDirectory, configName, distance = 3) {
  let configPath = ``;
  let configFilePath = ``;
  let configModule;

  try {
    // Try .cache/compiled/gatsby-config first
    configPath = _path.default.join(`${siteDirectory}/${_compileGatsbyFiles.COMPILED_CACHE_DIR}`, configName);
    configFilePath = require.resolve(configPath);
    configModule = require(configFilePath);
  } catch (outerError) {
    var _outerError$requireSt, _outerError$requireSt2, _outerError$requireSt3;

    // Not all plugins will have a compiled file, so the err.message can look like this:
    // "Cannot find module '<root>/node_modules/gatsby-source-filesystem/.cache/compiled/gatsby-config'"
    // But the compiled file can also have an error like this:
    // "Cannot find module 'foobar'"
    // So this is trying to differentiate between an error we're fine ignoring and an error that we should throw
    const isModuleNotFoundError = outerError.code === `MODULE_NOT_FOUND`;
    const isThisFileRequireError = (_outerError$requireSt = outerError === null || outerError === void 0 ? void 0 : (_outerError$requireSt2 = outerError.requireStack) === null || _outerError$requireSt2 === void 0 ? void 0 : (_outerError$requireSt3 = _outerError$requireSt2[0]) === null || _outerError$requireSt3 === void 0 ? void 0 : _outerError$requireSt3.includes(`get-config-file`)) !== null && _outerError$requireSt !== void 0 ? _outerError$requireSt : true;

    if (!(isModuleNotFoundError && isThisFileRequireError)) {
      _reporter.default.panic({
        id: `11902`,
        error: outerError,
        context: {
          configName,
          message: outerError.message
        }
      });
    } // Fallback to regular rootDir gatsby-config


    configPath = _path.default.join(siteDirectory, configName);

    try {
      configFilePath = require.resolve(configPath);
      configModule = require(configFilePath);
    } catch (innerError) {
      // Only then hard fail
      const nearMatch = await _fsExtra.default.readdir(siteDirectory).then(files => files.find(file => {
        const fileName = file.split(siteDirectory).pop();
        return isNearMatch(fileName, configName, distance);
      }));

      if (!(0, _testRequireError.testRequireError)(configPath, innerError)) {
        _reporter.default.panic({
          id: `10123`,
          error: innerError,
          context: {
            configName,
            message: innerError.message
          }
        });
      } else if (nearMatch) {
        _reporter.default.panic({
          id: `10124`,
          error: innerError,
          context: {
            configName,
            nearMatch
          }
        });
      } else if ((0, _fsExistsCached.sync)(_path.default.join(siteDirectory, `src`, configName + `.js`))) {
        _reporter.default.panic({
          id: `10125`,
          context: {
            configName
          }
        });
      }
    }
  }

  return {
    configModule,
    configFilePath
  };
}
//# sourceMappingURL=get-config-file.js.map