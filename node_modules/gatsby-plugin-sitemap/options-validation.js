"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pluginOptionsSchema = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _graphql = require("gatsby/graphql");

var _commonTags = require("common-tags");

var _internals = require("./internals");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var pluginOptionsSchema = function pluginOptionsSchema(_ref) {
  var Joi = _ref.Joi;
  return Joi.object({
    plugins: Joi.array().strip(),
    output: Joi.string().default("/sitemap").description("Folder path where sitemaps are stored in `public`."),
    createLinkInHead: Joi.boolean().default(true).description("Whether to populate the `<head>` of your site with a link to the sitemap."),
    entryLimit: Joi.number().default(45000) // default based on upstream "sitemap" plugin default, may need optimization
    .description("Number of entries per sitemap file, a sitemap index and multiple sitemaps are created if you have more entries."),
    query: Joi.string().default((0, _commonTags.oneLine)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["{\n          site {\n            siteMetadata {\n              siteUrl\n            }\n          }\n\n          allSitePage {\n            nodes {\n              path\n            }\n          }\n        }"])))).external(function (_ref2) {
      var query = _ref2.query;

      if (query) {
        try {
          (0, _graphql.parse)(query);
        } catch (e) {
          throw new Error((0, _commonTags.stripIndent)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n        Invalid plugin options for \"gatsby-plugin-sitemap\":\n        \"query\" must be a valid GraphQL query. Received the error \"", "\""])), e.message));
        }
      }
    }).description((0, _commonTags.stripIndent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n        (GraphQL Query) The query for the data you need to generate the sitemap.\n        It's required to get the site's URL, if you are not fetching it from `site.siteMetadata.siteUrl`,\n        you will need to set a custom `resolveSiteUrl` function.\n        If you override the query, you may need to pass in a custom `resolvePagePath` or\n        `resolvePages` to keep everything working.\n        If you fetch pages without using `allSitePage.nodes` query structure\n        you will definately need to customize the `resolvePages` function."], ["\n        (GraphQL Query) The query for the data you need to generate the sitemap.\n        It's required to get the site's URL, if you are not fetching it from \\`site.siteMetadata.siteUrl\\`,\n        you will need to set a custom \\`resolveSiteUrl\\` function.\n        If you override the query, you may need to pass in a custom \\`resolvePagePath\\` or\n        \\`resolvePages\\` to keep everything working.\n        If you fetch pages without using \\`allSitePage.nodes\\` query structure\n        you will definately need to customize the \\`resolvePages\\` function."])))),
    excludes: Joi.array().items(Joi.any()).default([]).description((0, _commonTags.stripIndent)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n        An array of paths to exclude from the sitemap.\n        While this is usually an array of strings it is possible to\n        enter other data types into this array for custom filtering.\n        Doing so will require customization of the `filterPages` function."], ["\n        An array of paths to exclude from the sitemap.\n        While this is usually an array of strings it is possible to\n        enter other data types into this array for custom filtering.\n        Doing so will require customization of the \\`filterPages\\` function."])))),
    resolveSiteUrl: Joi.function().default(function () {
      return _internals.resolveSiteUrl;
    }).description("Takes the output of the data query and lets you return the site URL."),
    resolvePagePath: Joi.function().default(function () {
      return _internals.resolvePagePath;
    }).description("Takes a page object and returns the uri of the page (no domain or protocol)."),
    resolvePages: Joi.function().default(function () {
      return _internals.resolvePages;
    }).description("Takes the output of the data query and expects an array of page objects to be returned."),
    filterPages: Joi.function().default(function () {
      return _internals.defaultFilterPages;
    }).description((0, _commonTags.stripIndent)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["Takes the current page a string (or other object)\n        from the `exclude` array and expects a boolean to be returned.\n        `true` excludes the path, `false` keeps it."], ["Takes the current page a string (or other object)\n        from the \\`exclude\\` array and expects a boolean to be returned.\n        \\`true\\` excludes the path, \\`false\\` keeps it."])))),
    serialize: Joi.function().default(function () {
      return _internals.serialize;
    }).description("Takes the output of `filterPages` and lets you return a sitemap entry.")
  });
};

exports.pluginOptionsSchema = pluginOptionsSchema;