"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.prefixPath = prefixPath;
exports.resolveSiteUrl = resolveSiteUrl;
exports.resolvePagePath = resolvePagePath;
exports.resolvePages = resolvePages;
exports.defaultFilterPages = defaultFilterPages;
exports.serialize = serialize;
exports.pageFilter = pageFilter;
exports.withoutTrailingSlash = exports.REPORTER_PREFIX = void 0;

var _minimatch = _interopRequireDefault(require("minimatch"));

var REPORTER_PREFIX = "[gatsby-plugin-sitemap]:";
/**
 *
 * @param {string} path
 * @returns {string}
 */

exports.REPORTER_PREFIX = REPORTER_PREFIX;

var withoutTrailingSlash = function withoutTrailingSlash(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
};
/**
 * @name prefixPath
 *
 * Properly handles prefixing relative path with site domain, Gatsby pathPrefix and AssetPrefix
 *
 * @param {string} url - string containing relative path
 * @param {string} siteUrl - results of the resolveSiteUrl function
 * @returns {string}
 */
// TODO: Update for v3 - Fix janky path/asset prefixing


exports.withoutTrailingSlash = withoutTrailingSlash;

function prefixPath(_ref) {
  var url = _ref.url,
      siteUrl = _ref.siteUrl,
      _ref$pathPrefix = _ref.pathPrefix,
      pathPrefix = _ref$pathPrefix === void 0 ? "" : _ref$pathPrefix;
  return new URL(pathPrefix + url, siteUrl).toString();
}
/**
 * @name resolveSiteUrl
 *
 * @param {object} data - results of the GraphQL query
 * @returns {string} - site URL, this can come from thegraphql query or another scope
 */


function resolveSiteUrl(data) {
  var _data$site, _data$site$siteMetada;

  if (!(data !== null && data !== void 0 && (_data$site = data.site) !== null && _data$site !== void 0 && (_data$site$siteMetada = _data$site.siteMetadata) !== null && _data$site$siteMetada !== void 0 && _data$site$siteMetada.siteUrl)) {
    throw Error("`siteUrl` does not exist on `siteMetadata` in the data returned from the query.\nAdd this to your `siteMetadata` object inside gatsby-config.js or add this to your custom query or provide a custom `resolveSiteUrl` function.\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ");
  }

  return data.site.siteMetadata.siteUrl;
}
/**
 * @name resolvePagePath
 *
 * if you don't want to place the URI in "path" then resolvePagePath
 * are needed.
 *
 * @param {object} page - Array Item returned from resolvePages
 * @returns {string} - uri of the page without domain or protocol
 */


function resolvePagePath(page) {
  if (!(page !== null && page !== void 0 && page.path)) {
    throw Error("`path` does not exist on your page object.\nMake the page URI available at `path` or provide a custom `resolvePagePath` function.\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ");
  }

  return page.path;
}
/**
 * @name resolvePages
 *
 * This allows custom resolution of the array of pages.
 * This also where user's could merge multiple sources into
 * a single array if needed.
 *
 * @param {object} data - results of the GraphQL query
 * @returns {Array} - Array of objects representing each page
 */


function resolvePages(data) {
  var _data$allSitePage;

  if (!(data !== null && data !== void 0 && (_data$allSitePage = data.allSitePage) !== null && _data$allSitePage !== void 0 && _data$allSitePage.nodes)) {
    throw Error("Page array from `query` wasn't found at `data.allSitePage.nodes`.\nFix the custom query or provide a custom `resolvePages` function.\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ");
  }

  return data.allSitePage.nodes;
}
/**
 * @name defaultFilterPages
 *
 * This allows filtering any data in any way.
 *
 * This Function is executed via allPages.filter((page) => !excludes.some((excludedRoute) => thisFunc(page, ecludedRoute, tools)))
 * allPages is the results of the resolvePages
 *
 * @param {object} page
 * @param {string} excludedRoute - Array from plugin config `options.exclude`
 * @param {object} tools - contains required tools for filtering
 *
 * @returns {boolean}
 */


function defaultFilterPages(page, excludedRoute, _ref2) {
  var minimatch = _ref2.minimatch,
      withoutTrailingSlash = _ref2.withoutTrailingSlash,
      resolvePagePath = _ref2.resolvePagePath;

  if (typeof excludedRoute !== "string") {
    throw new Error("You've passed something other than string to the exclude array. This is supported, but you'll have to write a custom filter function.\nIgnoring the input for now: " + JSON.stringify(excludedRoute, null, 2) + "\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ");
  } // Minimatch is always scary without an example
  // TODO add example


  return minimatch(withoutTrailingSlash(resolvePagePath(page)), withoutTrailingSlash(excludedRoute));
}
/**
 * @name serialize
 *
 * This function is executed by allPages.map(page => thisFunc(page, siteUrl, tools))
 * allpages is the result of the filter process
 *
 * @param {object[]} page - results of the resolvePages function
 * @param {object} tools - contains tools for serializing
 *
 */


function serialize(page, _ref3) {
  var resolvePagePath = _ref3.resolvePagePath;
  return {
    url: "" + resolvePagePath(page),
    changefreq: "daily",
    priority: 0.7
  };
}

var defaultExcludes = ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"];

function pageFilter(_ref4) {
  var allPages = _ref4.allPages,
      filterPages = _ref4.filterPages,
      excludes = _ref4.excludes;
  var messages = [];

  if (!Array.isArray(allPages) || typeof filterPages !== "function" || !Array.isArray(excludes)) {
    throw new Error("Invalid options passed to page Filter function");
  } // TODO we should optimize these loops


  var filteredPages = allPages.filter(function (page) {
    var defaultFilterMatches = defaultExcludes.some(function (exclude, i, arr) {
      try {
        var doesMatch = defaultFilterPages(page, exclude, {
          minimatch: _minimatch.default,
          withoutTrailingSlash: withoutTrailingSlash,
          resolvePagePath: resolvePagePath
        }); // default excludes can only be found once, so remove them from the arr once excluded

        if (doesMatch) {
          arr.splice(i, 1);
        }

        return doesMatch;
      } catch (_unused) {
        throw new Error(REPORTER_PREFIX + " Error in default page filter");
      }
    });

    if (defaultFilterMatches) {
      messages.push(REPORTER_PREFIX + " Default filter excluded page " + resolvePagePath(page));
    } // If page is marked to be excluded via defaults there's no need to check page for custom excludes


    if (defaultFilterMatches) {
      return !defaultFilterMatches;
    }

    var customFilterMatches = excludes.some(function (exclude) {
      try {
        return filterPages(page, exclude, {
          minimatch: _minimatch.default,
          withoutTrailingSlash: withoutTrailingSlash,
          resolvePagePath: resolvePagePath
        });
      } catch (_unused2) {
        throw new Error(REPORTER_PREFIX + " Error in custom page filter.\nIf you've customized your excludes you may need to provide a custom \"filterPages\" function in your config.\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n");
      }
    });

    if (customFilterMatches) {
      messages.push(REPORTER_PREFIX + " Custom filtering excluded page " + resolvePagePath(page));
    }

    return !(defaultFilterMatches || customFilterMatches);
  });
  return {
    filteredPages: filteredPages,
    messages: messages
  };
}