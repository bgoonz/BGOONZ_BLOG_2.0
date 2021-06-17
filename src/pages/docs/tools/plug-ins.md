---
title: Plug-ins
weight: 2
seo:
  title: Gatsby Plugins For This Sites Content Model
  description: This is the Gatsby Plugins For This Sites Content Model page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Gatsby Plugins For This Sites Content Model
      keyName: property
    - name: 'og:description'
      value: This is the Gatsby Plugins For This Sites Content Model page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Gatsby Plugins For This Sites Content Model
    - name: 'twitter:description'
      value: This is the Gatsby Plugins For This Sites Content Model page
template: docs
---
<div class="note">
  <strong>Note:</strong> These are the gatsby plugins that power the file system of this website! <strong>See more in the Docs</strong> section.
</div>

### Code:

> Gatsby Source File System

<pre>
```javascript
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

function findFileNode({ node, getNode }) {
    let fileNode = node;
    let ids = [fileNode.id];

    while (fileNode && fileNode.internal.type !== `File` && fileNode.parent) {
        fileNode = getNode(fileNode.parent);

        if (!fileNode) {
            break;
        }

        if (_.includes(ids, fileNode.id)) {
            console.log(`found cyclic reference between nodes`);
            break;
        }

        ids.push(fileNode.id);
    }

    if (!fileNode || fileNode.internal.type !== `File`) {
        console.log('did not find ancestor File node');
        return null;
    }

    return fileNode;
}

exports.onCreateNode = ({ node, getNode, actions }, options) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        let fileNode = findFileNode({ node, getNode });
        if (!fileNode) {
            throw new Error('could not find parent File node for MarkdownRemark node: ' + node);
        }

        let url;
        if (node.frontmatter.url) {
            url = node.frontmatter.url;
        } else if (_.get(options, 'uglyUrls', false)) {
            url = path.join(fileNode.relativeDirectory, fileNode.name + '.html');
        } else {
            url = createFilePath({ node, getNode });
        }

        createNodeField({ node, name: 'url', value: url });
        createNodeField({
            node,
            name: 'absolutePath',
            value: fileNode.absolutePath
        });
        createNodeField({
            node,
            name: 'relativePath',
            value: fileNode.relativePath
        });
        createNodeField({ node, name: 'absoluteDir', value: fileNode.dir });
        createNodeField({
            node,
            name: 'relativeDir',
            value: fileNode.relativeDirectory
        });
        createNodeField({ node, name: 'base', value: fileNode.base });
        createNodeField({ node, name: 'ext', value: fileNode.ext });
        createNodeField({ node, name: 'name', value: fileNode.name });
    }
};

exports.createPages = ({ graphql, getNode, actions, getNodesByType }) => {
    const { createPage, deletePage } = actions;

    // Use GraphQL to bring only the "id" and "html" (added by gatsby-transformer-remark)
    // properties of the MarkdownRemark nodes. Don't bring additional fields
    // such as "relativePath". Otherwise, Gatsby's GraphQL resolvers might infer
    // types these fields as File and change their structure. For example, the
    // "html" attribute exists only on a GraphQL node, but does not exist on the
    // underlying node.
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        html
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const nodes = result.data.allMarkdownRemark.edges.map(({ node }) => node);
        const siteNode = getNode('Site');
        const siteDataNode = getNode('SiteData');
        const sitePageNodes = getNodesByType('SitePage');
        const sitePageNodesByPath = _.keyBy(sitePageNodes, 'path');
        const siteData = _.get(siteDataNode, 'data', {});

        const pages = nodes.map((graphQLNode) => {
            // Use the node id to get the underlying node. It is not exactly the
            // same node returned by GraphQL, because GraphQL resolvers might
            // transform node fields.
            const node = getNode(graphQLNode.id);
            return {
                url: node.fields.url,
                relativePath: node.fields.relativePath,
                relativeDir: node.fields.relativeDir,
                base: node.fields.base,
                name: node.fields.name,
                frontmatter: node.frontmatter,
                html: graphQLNode.html
            };
        });

        nodes.forEach((graphQLNode) => {
            const node = getNode(graphQLNode.id);
            const url = node.fields.url;

            const template = node.frontmatter.template;
            if (!template) {
                console.error(`Error: undefined template for ${url}`);
                return;
            }

            const component = path.resolve(`./src/templates/${template}.js`);
            if (!fs.existsSync(component)) {
                console.error(`Error: component "src/templates/${template}.js" missing for ${url}`);
                return;
            }

            const existingPageNode = _.get(sitePageNodesByPath, url);

            const page = {
                path: url,
                component: component,
                context: {
                    url: url,
                    relativePath: node.fields.relativePath,
                    relativeDir: node.fields.relativeDir,
                    base: node.fields.base,
                    name: node.fields.name,
                    frontmatter: node.frontmatter,
                    html: graphQLNode.html,
                    pages: pages,
                    site: {
                        siteMetadata: _.get(siteData, 'site-metadata', {}),
                        pathPrefix: siteNode.pathPrefix,
                        data: _.omit(siteData, 'site-metadata')
                    }
                }
            };

            if (existingPageNode && !_.get(page, 'context.menus')) {
                page.context.menus = _.get(existingPageNode, 'context.menus');
            }

            createPage(page);
        });
    });
};

```
</pre>





##### Gatsby Source Data



````
<pre>
```javascript


````

```javascript
const path = require('path');
const yaml = require('js-yaml');
const fse = require('fs-extra');
const chokidar = require('chokidar');
const _ = require('lodash');

const metadataFileName = 'site-metadata.json';

const parsers = {
    yaml: (data) => yaml.safeLoad(data, { schema: yaml.JSON_SCHEMA }),
    json: (data) => JSON.parse(data)
};

const supportedExtensions = {
    yaml: parsers.yaml,
    yml: parsers.yaml,
    json: parsers.json
};

exports.sourceNodes = (props, pluginOptions = {}) => {
    const createContentDigest = props.createContentDigest;
    const { createNode } = props.actions;
    const reporter = props.reporter;

    if (!_.get(pluginOptions, 'path')) {
        pluginOptions.path = 'src/data';
    }

    if (!path.isAbsolute(pluginOptions.path)) {
        pluginOptions.path = path.resolve(process.cwd(), pluginOptions.path);
    }

    reporter.info(`[gatsby-source-data] setup file watcher and create site data`);

    const dataPath = pluginOptions.path;
    const createSiteDataFromFilesPartial = _.partial(createSiteDataFromFiles, {
        dataPath,
        createNode,
        createContentDigest,
        reporter
    });
    const watcher = chokidar.watch([dataPath, metadataFileName], {
        cwd: '.',
        ignoreInitial: true
    });
    watcher.on('add', createSiteDataFromFilesPartial);
    watcher.on('change', createSiteDataFromFilesPartial);
    watcher.on('unlink', createSiteDataFromFilesPartial);

    return createSiteDataFromFiles({ dataPath, createNode, createContentDigest, reporter }, null);
};

async function createSiteDataFromFiles({ dataPath, createNode, createContentDigest, reporter }, changedFile) {
    reporter.info(`[gatsby-source-data] create site data from files, updated path: ${changedFile}`);
    let dataFiles = [];

    const dataPathExists = await fse.pathExists(dataPath);
    if (dataPathExists) {
        dataFiles = await readDirRecursively(dataPath);
    }

    const metadataPath = path.resolve(metadataFileName);
    const metadataExists = await fse.pathExists(metadataPath);
    if (metadataExists) {
        dataFiles.push(metadataFileName);
    }

    const sortedDataFiles = dataFiles.slice().sort();
    const data = await convertDataFilesToJSON(sortedDataFiles, dataPath, reporter);

    createNode({
        id: 'SiteData',
        parent: null,
        children: [],
        data: data,
        internal: {
            type: 'SiteData',
            contentDigest: createContentDigest(JSON.stringify(data)),
            description: `Site data from ${path.relative(process.cwd(), dataPath)}`
        }
    });
}

async function readDirRecursively(dir, options) {
    const rootDir = _.get(options, 'rootDir', dir);
    const files = await fse.readdir(dir);
    const promises = _.map(files, async (file) => {
        const filePath = path.join(dir, file);
        const stats = await fse.stat(filePath);
        if (stats.isDirectory()) {
            return readDirRecursively(filePath, { rootDir });
        } else if (stats.isFile()) {
            return path.relative(rootDir, filePath);
        } else {
            return null;
        }
    });
    const recFiles = await Promise.all(promises);
    return _.chain(recFiles).compact().flatten().value();
}

function convertDataFilesToJSON(dataFiles, dataDirPath, reporter) {
    let promises = _.map(dataFiles, (filePath) => {
        const pathObject = path.parse(filePath);
        const absFilePath = pathObject.base === metadataFileName ? metadataFileName : path.join(dataDirPath, filePath);
        const relPath = pathObject.base === metadataFileName ? metadataFileName : filePath;
        const relDir = pathObject.base === metadataFileName ? '' : pathObject.dir;
        const ext = pathObject.ext.substring(1);
        if (!_.has(supportedExtensions, ext)) {
            return null;
        }
        return fse.readFile(absFilePath).then((data) => {
            const propPath = _.compact(relDir.split(path.sep).concat(pathObject.name));
            const res = {};
            try {
                const parsedData = supportedExtensions[ext](data);
                _.set(res, propPath, parsedData);
            } catch (err) {
                reporter.warn(`[gatsby-source-data] could not parse file: ${relPath}`);
            }
            return res;
        });
    });
    return Promise.all(promises).then((results) => {
        return _.reduce(results, (data, res) => _.merge(data, res), {});
    });
}

```

```javascript
</pre>
```
