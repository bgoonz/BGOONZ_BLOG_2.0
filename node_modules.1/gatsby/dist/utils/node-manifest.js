"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.warnAboutNodeManifestMappingProblems = warnAboutNodeManifestMappingProblems;
exports.processNodeManifest = processNodeManifest;
exports.processNodeManifests = processNodeManifests;
exports.foundPageByToLogIds = void 0;

var _datastore = require("./../datastore");

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _redux = require("../redux/");

var _actions = require("../redux/actions");

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _fastq = _interopRequireDefault(require("fastq"));

function getNodeManifestFileLimit() {
  const defaultLimit = 10000;
  const overrideLimit = process.env.NODE_MANIFEST_FILE_LIMIT && Number(process.env.NODE_MANIFEST_FILE_LIMIT);
  return overrideLimit || defaultLimit;
}
/**
 * This defines a limit to the number number of node manifest files that will be written to disk
 */


const NODE_MANIFEST_FILE_LIMIT = getNodeManifestFileLimit();
/**
 * Finds a final built page by nodeId or by node.slug as a fallback.
 *
 * Note that this function wont work properly in `gatsby develop`
 * since develop no longer runs all page queries when creating pages.
 * We use the node id to query mapping to find the right page but
 * this mapping only exists once you've visited a page in your browser.
 * When this fn is being used for routing to previews the user wont necessarily have
 * visited the page in the browser yet.
 */

async function findPageOwnedByNode({
  nodeId,
  slug
}) {
  var _byNode$get, _byNode$get$values, _byNode$get$values$ne;

  const state = _redux.store.getState();

  const {
    pages,
    nodes
  } = state;
  const {
    byNode
  } = state.queries; // the default page path is the first page found in
  // node id to page query tracking

  let pagePath = byNode === null || byNode === void 0 ? void 0 : (_byNode$get = byNode.get(nodeId)) === null || _byNode$get === void 0 ? void 0 : (_byNode$get$values = _byNode$get.values()) === null || _byNode$get$values === void 0 ? void 0 : (_byNode$get$values$ne = _byNode$get$values.next()) === null || _byNode$get$values$ne === void 0 ? void 0 : _byNode$get$values$ne.value;
  let foundPageBy = pagePath ? `queryTracking` : `none`;

  if (pages) {
    let ownerPagePath;
    let foundOwnerNodeId = false; // for each page this nodeId is queried in

    for (const pageObject of pages.values()) {
      var _fullPage$context, _fullPage$context2;

      // if we haven't found a page with this nodeId
      // set as page.ownerNodeId then run this logic.
      // this condition is on foundOwnerNodeId instead of ownerPagePath
      // in case we find a page with the nodeId in page.context.id/context.slug
      // and then later in the loop there's a page with this nodeId
      // set on page.ownerNodeId.
      // We always want to prefer ownerPagePath over context.id/context.slug
      if (foundOwnerNodeId) {
        break;
      }

      const path = pageObject.path;
      const fullPage = pages.get(path);
      foundOwnerNodeId = (fullPage === null || fullPage === void 0 ? void 0 : fullPage.ownerNodeId) === nodeId;
      const foundPageIdInContext = (fullPage === null || fullPage === void 0 ? void 0 : (_fullPage$context = fullPage.context) === null || _fullPage$context === void 0 ? void 0 : _fullPage$context.id) === nodeId; // querying by node.slug in GraphQL queries is common enough that we can search for it as a fallback after ownerNodeId, filesystem routes, and context.id

      const foundPageSlugInContext = slug && (fullPage === null || fullPage === void 0 ? void 0 : (_fullPage$context2 = fullPage.context) === null || _fullPage$context2 === void 0 ? void 0 : _fullPage$context2.slug) === slug;

      if (foundOwnerNodeId) {
        foundPageBy = `ownerNodeId`;
      } else if (foundPageIdInContext && fullPage) {
        var _nodes$get;

        const pageCreatedByPluginName = (_nodes$get = nodes.get(fullPage.pluginCreatorId)) === null || _nodes$get === void 0 ? void 0 : _nodes$get.name;
        const pageCreatedByFilesystemPlugin = pageCreatedByPluginName === `gatsby-plugin-page-creator`;
        foundPageBy = pageCreatedByFilesystemPlugin ? `filesystem-route-api` : `context.id`;
      } else if (foundPageSlugInContext && fullPage) {
        foundPageBy = `context.slug`;
      }

      if (fullPage && ( // first check for the ownerNodeId on the page. this is
      // the defacto owner. Can't get more specific than this
      foundOwnerNodeId || // if there's no specified owner look to see if
      // pageContext has an `id` variable which matches our
      // nodeId. Using an "id" as a variable in queries is common
      // and if we don't have an owner this is a better guess
      // of an owner than grabbing the first page query we find
      // that's mapped to this node id.
      // this also makes this work with the filesystem Route API without
      // changing that API.
      foundPageIdInContext || foundPageSlugInContext)) {
        // save this path to use in our manifest!
        ownerPagePath = fullPage.path;
      }
    }

    if (ownerPagePath) {
      pagePath = ownerPagePath;
    }
  }

  return {
    page: {
      path: pagePath || null
    },
    foundPageBy
  };
} // these id's correspond to error id's in
// packages/gatsby-cli/src/structured-errors/error-map.ts


const foundPageByToLogIds = {
  none: `11801`,
  [`context.id`]: `11802`,
  [`context.slug`]: `11805`,
  queryTracking: `11803`,
  [`filesystem-route-api`]: `success`,
  ownerNodeId: `success`
};
/**
 * Takes in some info about a node manifest and the page we did or didn't find for it, then warns and returns the warning string
 */

exports.foundPageByToLogIds = foundPageByToLogIds;

function warnAboutNodeManifestMappingProblems({
  inputManifest,
  pagePath,
  foundPageBy,
  verbose
}) {
  let logId;

  switch (foundPageBy) {
    case `none`:
    case `context.id`:
    case `context.slug`:
    case `queryTracking`:
      {
        logId = foundPageByToLogIds[foundPageBy];

        if (verbose) {
          _reporter.default.error({
            id: logId,
            context: {
              inputManifest,
              pagePath
            }
          });
        }

        break;
      }

    case `filesystem-route-api`:
    case `ownerNodeId`:
      logId = `success`;
      break;

    default:
      {
        throw Error(`Node Manifest mapping is in an impossible state`);
      }
  }

  return {
    logId
  };
}
/**
 * Prepares and then writes out an individual node manifest file to be used for routing to previews. Manifest files are added via the public unstable_createNodeManifest action
 */


async function processNodeManifest(inputManifest, listOfUniqueErrorIds, nodeManifestPagePathMap, verboseLogs) {
  const nodeId = inputManifest.node.id;
  const fullNode = (0, _datastore.getNode)(nodeId);
  const noNodeWarningId = `11804`;

  if (!fullNode) {
    if (verboseLogs) {
      _reporter.default.error({
        id: noNodeWarningId,
        context: {
          pluginName: inputManifest.pluginName,
          nodeId
        }
      });
    } else {
      listOfUniqueErrorIds.add(noNodeWarningId);
    }

    return null;
  } // map the node to a page that was created


  const {
    page: nodeManifestPage,
    foundPageBy
  } = await findPageOwnedByNode({
    nodeId,
    // querying by node.slug in GraphQL queries is common enough that we can search for it as a fallback after ownerNodeId, filesystem routes, and context.id
    slug: fullNode === null || fullNode === void 0 ? void 0 : fullNode.slug
  });
  const nodeManifestMappingProblemsContext = {
    inputManifest,
    pagePath: nodeManifestPage.path,
    foundPageBy,
    verbose: verboseLogs
  };

  if (verboseLogs) {
    warnAboutNodeManifestMappingProblems(nodeManifestMappingProblemsContext);
  } else {
    const {
      logId
    } = warnAboutNodeManifestMappingProblems(nodeManifestMappingProblemsContext);

    if (logId !== `success`) {
      listOfUniqueErrorIds.add(logId);
    }
  }

  const finalManifest = {
    node: inputManifest.node,
    page: nodeManifestPage,
    foundPageBy
  };

  const gatsbySiteDirectory = _redux.store.getState().program.directory;

  let fileNameBase = inputManifest.manifestId;
  /**
   * Windows has a handful of special/reserved characters that are not valid in a file path
   * @reference https://superuser.com/questions/358855/what-characters-are-safe-in-cross-platform-file-names-for-linux-windows-and-os
   *
   * The two exceptions to the list linked above are
   * - the colon that is part of the hard disk partition name at the beginning of a file path (i.e. C:)
   * - backslashes. We don't want to replace backslashes because those are used to delineate what the actual file path is
   *
   * During local development, node manifests can be written to disk but are generally unused as they are only used
   * for Content Sync which runs in Gatsby Cloud. Gatsby cloud is a Linux environment in which these special chars are valid in
   * filepaths. To avoid errors on Windows, we replace all instances of the special chars in the filepath (with the exception of the
   * hard disk partition name) with "-" to ensure that local Windows development setups do not break when attempting
   * to write one of these manifests to disk.
   */

  if (process.platform === `win32`) {
    fileNameBase = fileNameBase.replace(/:|\/|\*|\?|"|<|>|\||\\/g, `-`);
  } // write out the manifest file


  const manifestFilePath = _path.default.join(gatsbySiteDirectory, `public`, `__node-manifests`, inputManifest.pluginName, `${fileNameBase}.json`);

  const manifestFileDir = _path.default.dirname(manifestFilePath);

  await _fsExtra.default.ensureDir(manifestFileDir);
  await _fsExtra.default.writeJSON(manifestFilePath, finalManifest);

  if (verboseLogs) {
    _reporter.default.info(`Plugin ${inputManifest.pluginName} created a manifest with the id ${fileNameBase}`);
  }

  if (nodeManifestPage.path) {
    nodeManifestPagePathMap.set(nodeManifestPage.path, fileNameBase);
  }

  return finalManifest;
}

function nodeManifestSortComparerAscendingUpdatedAt(a, b) {
  /**
   * Prioritize node manifests that have an updatedAtUTC so that manifests known to be
   * newest are written to disk first. If neither have an updatedAtUTC, there isn't
   * anything to sort
   */
  if (!a.updatedAtUTC && !b.updatedAtUTC) {
    return 0;
  }

  if (!a.updatedAtUTC) {
    return 1;
  }

  if (!b.updatedAtUTC) {
    return -1;
  }

  return Date.parse(a.updatedAtUTC) - Date.parse(b.updatedAtUTC);
}
/**
 * Grabs all pending node manifests, processes them, writes them to disk,
 * and then removes them from the store.
 * Manifest files are added via the public unstable_createNodeManifest action in sourceNodes
 */


async function processNodeManifests() {
  const verboseLogs = process.env.gatsby_log_level === `verbose` || process.env.VERBOSE_NODE_MANIFEST === `true`;
  const startTime = Date.now();

  let {
    nodeManifests
  } = _redux.store.getState();

  const totalManifests = nodeManifests.length;

  if (totalManifests === 0) {
    return null;
  }

  let totalProcessedManifests = 0;
  let totalFailedManifests = 0;
  const nodeManifestPagePathMap = new Map();
  const listOfUniqueErrorIds = new Set();

  async function processNodeManifestTask(manifest, cb) {
    const processedManifest = await processNodeManifest(manifest, listOfUniqueErrorIds, nodeManifestPagePathMap, verboseLogs);

    if (processedManifest) {
      totalProcessedManifests++;
    } else {
      totalFailedManifests++;
    } // `setImmediate` below is a workaround against stack overflow
    // occurring when there are many manifests


    setImmediate(() => cb(null, true));
    return;
  }

  const processNodeManifestQueue = (0, _fastq.default)(processNodeManifestTask, 25);

  if (totalManifests > NODE_MANIFEST_FILE_LIMIT) {
    nodeManifests = [...nodeManifests];
    nodeManifests.sort(nodeManifestSortComparerAscendingUpdatedAt);
    nodeManifests = nodeManifests.slice(0, NODE_MANIFEST_FILE_LIMIT);
  }

  for (const manifest of nodeManifests) {
    processNodeManifestQueue.push(manifest, () => {});
  }

  if (!processNodeManifestQueue.idle()) {
    await new Promise(resolve => {
      processNodeManifestQueue.drain = resolve;
    });
  }

  const pluralize = length => length > 1 || length === 0 ? `s` : ``;

  const endTime = Date.now();

  _reporter.default.info(`Wrote out ${totalProcessedManifests} node page manifest file${pluralize(totalProcessedManifests)} in ${endTime - startTime} ms. ${totalFailedManifests > 0 ? `. ${totalFailedManifests} manifest${pluralize(totalFailedManifests)} couldn't be processed.` : ``}`);

  _reporter.default.info((!verboseLogs && listOfUniqueErrorIds.size > 0 ? `unstable_createNodeManifest produced warnings [${[...listOfUniqueErrorIds].join(`, `)}]. ` : ``) + `To see full warning messages set process.env.VERBOSE_NODE_MANIFEST to "true".\nVisit https://gatsby.dev/nodemanifest for more info on Node Manifests.`); // clean up all pending manifests from the store


  _redux.store.dispatch(_actions.internalActions.deleteNodeManifests());

  return nodeManifestPagePathMap;
}
//# sourceMappingURL=node-manifest.js.map