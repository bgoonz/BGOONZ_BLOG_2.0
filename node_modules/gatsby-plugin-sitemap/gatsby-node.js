"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _sitemap = require("sitemap");

var _optionsValidation = require("./options-validation");

var _internals = require("./internals");

var _excluded = ["url"];

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.pluginOptionsSchema = _optionsValidation.pluginOptionsSchema;

exports.onPostBuild = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref, _ref2) {
    var graphql, reporter, pathPrefix, output, entryLimit, query, excludes, resolveSiteUrl, resolvePagePath, resolvePages, filterPages, serialize, _yield$graphql, queryRecords, errors, siteUrl, allPages, _pageFilter, filteredPages, messages, serializedPages, _iterator, _step, page, _yield$Promise$resolv, url, rest, sitemapWritePath, sitemapPublicPath;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            graphql = _ref.graphql, reporter = _ref.reporter, pathPrefix = _ref.pathPrefix;
            output = _ref2.output, entryLimit = _ref2.entryLimit, query = _ref2.query, excludes = _ref2.excludes, resolveSiteUrl = _ref2.resolveSiteUrl, resolvePagePath = _ref2.resolvePagePath, resolvePages = _ref2.resolvePages, filterPages = _ref2.filterPages, serialize = _ref2.serialize;
            _context.next = 4;
            return graphql(query);

          case 4:
            _yield$graphql = _context.sent;
            queryRecords = _yield$graphql.data;
            errors = _yield$graphql.errors;
            _context.next = 9;
            return Promise.resolve(resolveSiteUrl(queryRecords)).catch(function (err) {
              return reporter.panic(_internals.REPORTER_PREFIX + " Error resolving Site URL", err);
            });

          case 9:
            siteUrl = _context.sent;

            if (errors) {
              reporter.panic("Error executing the GraphQL query inside gatsby-plugin-sitemap:\n", errors);
            }

            _context.next = 13;
            return Promise.resolve(resolvePages(queryRecords)).catch(function (err) {
              return reporter.panic(_internals.REPORTER_PREFIX + " Error resolving Pages", err);
            });

          case 13:
            allPages = _context.sent;

            if (!Array.isArray(allPages)) {
              reporter.panic(_internals.REPORTER_PREFIX + " The `resolvePages` function did not return an array.");
            }

            reporter.verbose(_internals.REPORTER_PREFIX + " Filtering " + allPages.length + " pages based on " + excludes.length + " excludes");
            _pageFilter = (0, _internals.pageFilter)({
              allPages: allPages,
              filterPages: filterPages,
              excludes: excludes
            }, {
              reporter: reporter
            }), filteredPages = _pageFilter.filteredPages, messages = _pageFilter.messages;
            messages.forEach(function (message) {
              return reporter.verbose(message);
            });
            reporter.verbose(_internals.REPORTER_PREFIX + " " + filteredPages.length + " pages remain after filtering");
            serializedPages = [];
            _iterator = _createForOfIteratorHelperLoose(filteredPages);

          case 21:
            if ((_step = _iterator()).done) {
              _context.next = 37;
              break;
            }

            page = _step.value;
            _context.prev = 23;
            _context.next = 26;
            return Promise.resolve(serialize(page, {
              resolvePagePath: resolvePagePath
            }));

          case 26:
            _yield$Promise$resolv = _context.sent;
            url = _yield$Promise$resolv.url;
            rest = (0, _objectWithoutPropertiesLoose2.default)(_yield$Promise$resolv, _excluded);
            serializedPages.push((0, _extends2.default)({
              url: (0, _internals.prefixPath)({
                url: url,
                siteUrl: siteUrl,
                pathPrefix: pathPrefix
              })
            }, rest));
            _context.next = 35;
            break;

          case 32:
            _context.prev = 32;
            _context.t0 = _context["catch"](23);
            reporter.panic(_internals.REPORTER_PREFIX + " Error serializing pages", _context.t0);

          case 35:
            _context.next = 21;
            break;

          case 37:
            sitemapWritePath = _path.default.join("public", output);
            sitemapPublicPath = _path.default.posix.join(pathPrefix, output);
            return _context.abrupt("return", (0, _sitemap.simpleSitemapAndIndex)({
              hostname: siteUrl,
              publicBasePath: sitemapPublicPath,
              destinationDir: sitemapWritePath,
              sourceData: serializedPages,
              limit: entryLimit,
              gzip: false
            }));

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[23, 32]]);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();