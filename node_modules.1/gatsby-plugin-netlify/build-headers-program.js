"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines */
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const kebab_hash_1 = __importDefault(require("kebab-hash"));
const lodash_1 = __importDefault(require("lodash"));
const constants_1 = require("./constants");
const getHeaderName = (header) => {
    const matches = header.match(/^([^:]+):/);
    return matches && matches[1];
};
const validHeaders = (headers, reporter) => {
    if (!headers || !lodash_1.default.isObject(headers)) {
        return false;
    }
    return Object.entries(headers).every(([path, headersList]) => Array.isArray(headersList) &&
        headersList.every((header) => {
            if (typeof header === 'string' && !getHeaderName(header)) {
                reporter.panic(`[gatsby-plugin-netlify] ${path} contains an invalid header (${header}). Please check your plugin configuration`);
            }
            return true;
        }));
};
const linkTemplate = (assetPath, type = `script`) => `Link: <${assetPath}>; rel=preload; as=${type}${type === `fetch` ? `; crossorigin` : ``}`;
const pathChunkName = (path) => {
    const name = path === `/` ? `index` : (0, kebab_hash_1.default)(path);
    return `path---${name}`;
};
const getPageDataPath = (path) => {
    const fixedPagePath = path === `/` ? `index` : path;
    return path_1.posix.join(`page-data`, fixedPagePath, `page-data.json`);
};
const getScriptPath = (file, manifest) => {
    const chunk = manifest[file];
    if (!chunk) {
        return [];
    }
    // convert to array if it's not already
    const chunks = Array.isArray(chunk) ? chunk : [chunk];
    return chunks.filter((script) => {
        const parsed = (0, path_1.parse)(script);
        // handle only .js, .css content is inlined already
        // and doesn't need to be pushed
        return parsed.ext === `.js`;
    });
};
const getLinkHeaders = (filesByType, pathPrefix) => Object.entries(filesByType).flatMap(([type, files]) => files.map((file) => linkTemplate(`${pathPrefix}/${file}`, type)));
const headersPath = (pathPrefix, path) => `${pathPrefix}${path}`;
const preloadHeadersByPage = ({ pages, manifest, pathPrefix, publicFolder }) => {
    const linksByPage = {};
    const appDataPath = publicFolder(constants_1.PAGE_DATA_DIR, `app-data.json`);
    const hasAppData = (0, fs_extra_1.existsSync)(appDataPath);
    let hasPageData = false;
    if (pages.size !== 0) {
        // test if 1 page-data file exists, if it does we know we're on a gatsby version that supports page-data
        const pageDataPath = publicFolder(getPageDataPath(pages.get(pages.keys().next().value).path));
        hasPageData = (0, fs_extra_1.existsSync)(pageDataPath);
    }
    pages.forEach((page) => {
        const scripts = lodash_1.default.flatMap(constants_1.COMMON_BUNDLES, (file) => getScriptPath(file, manifest));
        scripts.push(...getScriptPath(pathChunkName(page.path), manifest), ...getScriptPath(page.componentChunkName, manifest));
        const json = [];
        if (hasAppData) {
            json.push(path_1.posix.join(constants_1.PAGE_DATA_DIR, `app-data.json`));
        }
        if (hasPageData) {
            json.push(getPageDataPath(page.path));
        }
        const filesByResourceType = {
            script: scripts.filter(Boolean),
            fetch: json,
        };
        const pathKey = headersPath(pathPrefix, page.path);
        linksByPage[pathKey] = getLinkHeaders(filesByResourceType, pathPrefix);
    });
    return linksByPage;
};
const defaultMerge = (...headers) => {
    const unionMerge = (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
            return lodash_1.default.union(objValue, srcValue);
        }
        // opt into default merge behavior
    };
    return lodash_1.default.mergeWith({}, ...headers, unionMerge);
};
const headersMerge = (userHeaders, defaultHeaders) => {
    const merged = {};
    Object.keys(defaultHeaders).forEach((path) => {
        if (!userHeaders[path]) {
            merged[path] = defaultHeaders[path];
            return;
        }
        const headersMap = {};
        defaultHeaders[path].forEach((header) => {
            headersMap[getHeaderName(header)] = header;
        });
        userHeaders[path].forEach((header) => {
            // override if exists
            headersMap[getHeaderName(header)] = header;
        });
        merged[path] = Object.values(headersMap);
    });
    Object.keys(userHeaders).forEach((path) => {
        if (!merged[path]) {
            merged[path] = userHeaders[path];
        }
    });
    return merged;
};
const transformLink = (manifest, publicFolder, pathPrefix) => (header) => header.replace(constants_1.LINK_REGEX, (__, prefix, file, suffix) => {
    const hashed = manifest[file];
    if (hashed) {
        return `${prefix}${pathPrefix}${hashed}${suffix}`;
    }
    if ((0, fs_extra_1.existsSync)(publicFolder(file))) {
        return `${prefix}${pathPrefix}${file}${suffix}`;
    }
    throw new Error(`Could not find the file specified in the Link header \`${header}\`.` +
        `The gatsby-plugin-netlify is looking for a matching file (with or without a ` +
        `webpack hash). Check the public folder and your gatsby-config.js to ensure you are ` +
        `pointing to a public file.`);
});
// Writes out headers file format, with two spaces for indentation
// https://www.netlify.com/docs/headers-and-basic-auth/
const stringifyHeaders = (headers) => Object.entries(headers).reduce((text, [path, headerList]) => {
    const headersString = headerList.reduce((accum, header) => `${accum}  ${header}\n`, ``);
    return `${text}${path}\n${headersString}`;
}, ``);
// program methods
const validateUserOptions = (pluginOptions, reporter) => (headers) => {
    if (!validHeaders(headers, reporter)) {
        throw new Error(`The "headers" option to gatsby-plugin-netlify is in the wrong shape. ` +
            `You should pass in a object with string keys (representing the paths) and an array ` +
            `of strings as the value (representing the headers). ` +
            `Check your gatsby-config.js.`);
    }
    [`mergeSecurityHeaders`, `mergeLinkHeaders`, `mergeCachingHeaders`].forEach((mergeOption) => {
        if (!lodash_1.default.isBoolean(pluginOptions[mergeOption])) {
            throw new TypeError(`The "${mergeOption}" option to gatsby-plugin-netlify must be a boolean. Check your gatsby-config.js.`);
        }
    });
    if (typeof pluginOptions.transformHeaders !== 'function') {
        throw new TypeError(`The "transformHeaders" option to gatsby-plugin-netlify must be a function ` +
            `that returns an array of header strings. ` +
            `Check your gatsby-config.js.`);
    }
    return headers;
};
const mapUserLinkHeaders = ({ manifest, pathPrefix, publicFolder }) => (headers) => Object.fromEntries(Object.entries(headers).map(([path, headerList]) => [
    path,
    headerList.map(transformLink(manifest, publicFolder, pathPrefix)),
]));
const mapUserLinkAllPageHeaders = (pluginData, { allPageHeaders }) => (headers) => {
    if (!allPageHeaders) {
        return headers;
    }
    const { pages, manifest, publicFolder, pathPrefix } = pluginData;
    const headersList = allPageHeaders.map(transformLink(manifest, publicFolder, pathPrefix));
    const duplicateHeadersByPage = {};
    pages.forEach((page) => {
        const pathKey = headersPath(pathPrefix, page.path);
        duplicateHeadersByPage[pathKey] = headersList;
    });
    return defaultMerge(headers, duplicateHeadersByPage);
};
const applyLinkHeaders = (pluginData, { mergeLinkHeaders }) => (headers) => {
    if (!mergeLinkHeaders) {
        return headers;
    }
    const { pages, manifest, pathPrefix, publicFolder } = pluginData;
    const perPageHeaders = preloadHeadersByPage({
        pages,
        manifest,
        pathPrefix,
        publicFolder,
    });
    return defaultMerge(headers, perPageHeaders);
};
const applySecurityHeaders = ({ mergeSecurityHeaders }) => (headers) => {
    if (!mergeSecurityHeaders) {
        return headers;
    }
    return headersMerge(headers, constants_1.SECURITY_HEADERS);
};
const applyCachingHeaders = (pluginData, { mergeCachingHeaders }) => (headers) => {
    var _a, _b, _c;
    if (!mergeCachingHeaders) {
        return headers;
    }
    let chunks = [];
    // Gatsby v3.5 added componentChunkName to store().components
    // So we prefer to pull chunk names off that as it gets very expensive to loop
    // over large numbers of pages.
    const isComponentChunkSet = Boolean((_c = (_b = (_a = pluginData.components.entries()) === null || _a === void 0 ? void 0 : _a.next()) === null || _b === void 0 ? void 0 : _b.value[1]) === null || _c === void 0 ? void 0 : _c.componentChunkName);
    chunks = isComponentChunkSet
        ? [...pluginData.components.values()].map((c) => c.componentChunkName)
        : [...pluginData.pages.values()].map((page) => page.componentChunkName);
    chunks.push(`pages-manifest`, `app`);
    const files = chunks.flatMap((chunk) => pluginData.manifest[chunk]);
    const cachingHeaders = {};
    files.forEach((file) => {
        if (typeof file === `string`) {
            cachingHeaders[`/${file}`] = [constants_1.IMMUTABLE_CACHING_HEADER];
        }
    });
    return defaultMerge(headers, cachingHeaders, constants_1.CACHING_HEADERS);
};
const applyTransfromHeaders = ({ transformHeaders }) => (headers) => lodash_1.default.mapValues(headers, transformHeaders);
const transformToString = (headers) => `${constants_1.HEADER_COMMENT}\n\n${stringifyHeaders(headers)}`;
const writeHeadersFile = ({ publicFolder }) => (contents) => (0, fs_extra_1.writeFile)(publicFolder(constants_1.NETLIFY_HEADERS_FILENAME), contents);
const buildHeadersProgram = (pluginData, pluginOptions, reporter) => lodash_1.default.flow(validateUserOptions(pluginOptions, reporter), mapUserLinkHeaders(pluginData), applySecurityHeaders(pluginOptions), applyCachingHeaders(pluginData, pluginOptions), mapUserLinkAllPageHeaders(pluginData, pluginOptions), applyLinkHeaders(pluginData, pluginOptions), applyTransfromHeaders(pluginOptions), transformToString, writeHeadersFile(pluginData))(pluginOptions.headers);
exports.default = buildHeadersProgram;
/* eslint-enable max-lines */
