<br>
<br>
---
---
---
---
<br>
<br>
# Plugins:
```
├── ./plugins
        ├── ./plugins/gatsby-remark-page-creator
        │   └──  ./plugins/gatsby-remark-page-creator/gatsby-node.js
        │   
        └── ./plugins/gatsby-source-data
            └──  ./plugins/gatsby-source-data/gatsby-node.js
```

<br>
<br>
---
---
---
---
<br>
<br>

# Components:

### Index.js:

```js
import ActionLink from './ActionLink';
import CtaButtons from './CtaButtons';
import DocsMenu from './DocsMenu';
import DocsSubmenu from './DocsSubmenu';
import Footer from './Footer';
import Header from './Header';
import Icon from './Icon';
import SectionContent from './SectionContent';
import SectionCta from './SectionCta';
import SectionDocs from './SectionDocs';
import SectionGrid from './SectionGrid';
import SectionHero from './SectionHero';
import Submenu from './Submenu';
import Layout from './Layout';
import addScript from './../hooks/addScript';
export {
    ActionLink,
    CtaButtons,
    DocsMenu,
    DocsSubmenu,
    Footer,
    Header,
    Icon,
    SectionContent,
    SectionCta,
    SectionDocs,
    SectionGrid,
    SectionHero,
    Submenu,
    Layout
};

export default {
    ActionLink,
    CtaButtons,
    DocsMenu,
    DocsSubmenu,
    Footer,
    Header,
    Icon,
    SectionContent,
    SectionCta,
    SectionDocs,
    SectionGrid,
    SectionHero,
    Submenu,
    Layout
};
```

### Layout.js

```js
import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { withPrefix, attribute } from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';
import addScript from './../hooks/addScript';
const Script = (_props) => {
    importScript('./../hooks/addScript.js');
};
export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
                <Helmet>
                    <title>
                        {_.get(this.props, 'pageContext.frontmatter.seo.title', null)
                            ? _.get(this.props, 'pageContext.frontmatter.seo.title', null)
                            : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}
                    </title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                        <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')} />
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) &&
                                (() => {
                                    let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                    let rel_url = withPrefix(_.get(meta, 'value', null));
                                    let full_url = domain + rel_url;
                                    return <meta key={meta_idx} {...attribute(key_name, _.get(meta, 'name', null))} content={full_url} />;
                                })()
                        ) : (
                            <meta key={meta_idx + '.1'} {...attribute(key_name, _.get(meta, 'name', null))} content={_.get(meta, 'value', null)} />
                        );
                    })}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                        <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))} />
                    )}
                    <body className={'palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)} />
                </Helmet>
                <div id="page" className="site">
                    <Header {...this.props} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
```

### ActionLink.js

```js

```

### CtaButtons.js

```js

```

### DocsMenu.js

```js

```

### DocsSubmenu.js

```js

```

### Footer.js

```js

```

### Header.js

```js

```

### Icon.js

```js

```

### SectionContent.js

```js

```

### SectionCta.js

```js

```

### SectionDocs.js

```js

```

### SectionGrid.js

```js

```

### SectionHero.js

```js

```

### Submenu.js

```js

```

<br>
<br>
---
---
---
---
<br>
<br>

<br>
<br>
---
---
---
---
<br>
<br>

<br>
<br>
---
---
---
---
<br>
<br>
```
├── ./functions
│   └── ./functions/deploy-succeeded.js
├── ./gatsby-browser.js
├── ./gatsby-config.js
├── ./gatsby-node.js
├── ./gatsby-ssr.js
├── ./googled2b1865dedd985a4.html
├── ./lambda
    └── ./lambda/deploy-succeeded.js
```

## Gatsby Browser:

```js
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// onPreRouteUpdate() and onRouteUpdate() are called before onInitialClientRender,
// use initialized flag to ensure that window.onGatsbyPreRouteUpdate() and
// window.onGatsbyRouteUpdate() will not be called before
// window.onGatsbyInitialClientRender() has run
let initialized = false;

exports.onInitialClientRender = () => {
    initialized = true;
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};

exports.onRouteUpdate = () => {
    if (initialized && 'onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};

exports.onPreRouteUpdate = () => {
    if (initialized && 'onGatsbyPreRouteUpdate' in window && typeof window.onGatsbyPreRouteUpdate === 'function') {
        window.onGatsbyPreRouteUpdate();
    }
};
```

---

## Gatsby-config

```js
const siteMetadata = require('./site-metadata.json');

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`
            }
        }
    ]
};
```

---

## Gatsby-node

## [Gatsby Node](https://www.gatsbyjs.org/docs/node-apis/)

```js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
```

# Gatsby Node APIs

Gatsby gives plugins and site builders many APIs for building your site. Code in the file `gatsby-node.js` is run once in the process of building your site. You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle. To use the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/), create a file named `gatsby-node.js` in the root of your site. Export any of the APIs you wish to use in this file.

Every Gatsby Node API gets passed a [set of helper functions](https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/). These let you access several methods like reporting, or perform actions like creating new pages.

An example gatsby-node.js file that implements two APIs, `onPostBuild`, and `createPages`.

> gatsby-node.js

```js
Copygatsby-node.js: copy code to clipboard`

const path =  require(`path`)

// Log out information after a build is done

exports.onPostBuild  =  ({ reporter })  =>  {

 reporter.info(`Your Gatsby site has been built!`)

}

// Create blog pages dynamically

exports.createPages  =  async  ({ graphql, actions })  =>  {

  const  { createPage }  = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result =  await  graphql(`

 query {

 allSamplePages {

 edges {

 node {

 slug

 title

 }

 }

 }

 }

  `)

 result.data.allSamplePages.edges.forEach(edge  =>  {

  createPage({

 path:  `${edge.node.slug}`,

 component: blogPostTemplate,

 context:  {

 title: edge.node.title,

  },

  })

  })

}

```

## [](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#async-vs-sync-work)Async vs. sync work

If your plugin performs async operations (disk I/O, database access, calling remote APIs, etc.) you must either return a promise (explicitly using `Promise` API or implicitly using `async`/`await` syntax) or use the callback passed to the 3rd argument. Gatsby needs to know when plugins are finished as some APIs, to work correctly, require previous APIs to be complete first. See [Debugging Async Lifecycles](https://www.gatsbyjs.com/docs/debugging-async-lifecycles/) for more info.

// Async/await

```js
exports.createPages = async () => {
    // do async work

    const result = await fetchExternalData();
};

// Promise API

exports.createPages = () => {
    return new Promise((resolve, reject) => {
        // do async work
    });
};

// Callback API

exports.createPages = (_, pluginOptions, cb) => {
    // do async work

    cb();
};
```

If your plugin does not do async work, you can return directly.

## APIs

###

[`createPages`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

Create pages dynamically. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

You can also fetch data from remote or local sources to create pages.

See also [the documentation for the action `createPage`](https://www.gatsbyjs.com/docs/actions/#createPage).

#### Parameters

-   #####

    destructured object

    See the [documentation for `Node API Helpers` for more details](https://www.gatsbyjs.com/docs/node-api-helpers)

    -   ######

        `actions` Actions

        See the [list of documented actions](https://www.gatsbyjs.com/docs/actions)

        -   ######

            `createPage` function

            [Documentation for this action](https://www.gatsbyjs.com/docs/actions/#createPage)

    -   ######

        `graphql` function

        : Query GraphQL API. See [examples here](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs)

    -   ######

        `reporter` GatsbyReporter

        Log issues. See [GatsbyReporter documentation](https://www.gatsbyjs.com/docs/node-api-helpers/#GatsbyReporter) for more details

#### Return value

#####

Promise<void>

No return value required, but the caller will `await` any promise that's returned

#### Example

```js
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(
        `
            query loadPagesQuery($limit: Int!) {
                allMarkdownRemark(limit: $limit) {
                    edges {
                        node {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
        `,
        { limit: 1000 }
    ).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        // Create blog post pages.
        result.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                // Path for this page --- required
                path: `${edge.node.frontmatter.slug}`,
                component: blogPostTemplate,
                context: {
                    // Add optional context data to be inserted
                    // as props into the page component.
                    //
                    // The context data can also be used as
                    // arguments to the page GraphQL query.
                    //
                    // The page "path" is always available as a GraphQL
                    // argument.
                }
            });
        });
    });
};
```

---

###

[`createPagesStatefully`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPagesStatefully)

Like `createPages` but for plugins who want to manage creating and removing pages themselves in response to changes in data *not* managed by Gatsby. Plugins implementing `createPages` will get called regularly to recompute page information as Gatsby's data changes but those implementing `createPagesStatefully` will not.

An example of a plugin that uses this extension point is the plugin [gatsby-plugin-page-creator](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-page-creator) which monitors the `src/pages` directory for the adding and removal of JS pages. As its source of truth, files in the pages directory, is not known by Gatsby, it needs to keep its own state about its world to know when to add and remove pages.

---

###

[`createResolvers`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createResolvers)

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/schema/schema.js#L985-L990)

Add custom field resolvers to the GraphQL schema.

Allows adding new fields to types by providing field configs, or adding resolver functions to existing fields.

Things to note:

-   Overriding field types is disallowed, instead use the `createTypes` action. In case of types added from third-party schemas, where this is not possible, overriding field types is allowed.
-   New fields will not be available on `filter` and `sort` input types. Extend types defined with `createTypes` if you need this.
-   In field configs, types can be referenced as strings.
-   When extending a field with an existing field resolver, the original resolver function is available from `info.originalResolver`.
-   The `createResolvers` API is called as the last step in schema generation. Thus, an intermediate schema is made available on the `intermediateSchema` property. In resolver functions themselves, it is recommended to access the final built schema from `info.schema`.
-   Gatsby's data layer, including all internal query capabilities, is exposed on [`context.nodeModel`](https://www.gatsbyjs.com/docs/node-model/). The node store can be queried directly with `getAllNodes`, `getNodeById` and `getNodesByIds`, while more advanced queries can be composed with `runQuery`. Note that `runQuery` will call field resolvers before querying, so e.g. foreign-key fields will be expanded to full nodes. The other methods on `nodeModel` don't do this.
-   It is possible to add fields to the root `Query` type.
-   When using the first resolver argument (`source` in the example below, often also called `parent` or `root`), take care of the fact that field resolvers can be called more than once in a query, e.g. when the field is present both in the input filter and in the selection set. This means that foreign-key fields on `source` can be either resolved or not-resolved.

For fuller examples, see [`using-type-definitions`](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-type-definitions).

#### Parameters

-   #####

    destructured object

    -   ######

        `intermediateSchema` GraphQLSchema

        Current GraphQL schema

    -   ######

        `createResolvers` function

        Add custom resolvers to GraphQL field configs

-   #####

    `$1` object

    -   ######

        `resolvers` object

        An object map of GraphQL type names to custom resolver functions

    -   ######

        `options` object

        Optional createResolvers options

        -   ######

            `ignoreNonexistentTypes` object

            Silences the warning when trying to add resolvers for types that don't exist. Useful for optional extensions.

#### Example

```js
exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        Author: {
            fullName: {
                resolve: (source, args, context, info) => {
                    return source.firstName + source.lastName;
                }
            }
        },
        Query: {
            allRecentPosts: {
                type: [`BlogPost`],
                resolve: (source, args, context, info) => {
                    const posts = context.nodeModel.getAllNodes({ type: `BlogPost` });
                    const recentPosts = posts.filter((post) => post.publishedAt > Date.UTC(2018, 0, 1));
                    return recentPosts;
                }
            }
        }
    };
    createResolvers(resolvers);
};
```

---

###

[`createSchemaCustomization`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createSchemaCustomization)

Customize Gatsby's GraphQL schema by creating type definitions, field extensions or adding third-party schemas.

The [`createTypes`](https://www.gatsbyjs.com/docs/actions/#createTypes), [`createFieldExtension`](https://www.gatsbyjs.com/docs/actions/#createFieldExtension) and [`addThirdPartySchema`](https://www.gatsbyjs.com/docs/actions/#addThirdPartySchema) actions are only available in this API. For details on their usage please refer to the actions documentation.

This API runs immediately before schema generation. For modifications of the generated schema, e.g. to customize added third-party types, use the [`createResolvers`](https://www.gatsbyjs.com/docs/node-apis/#createResolvers) API.

#### Parameters

-   #####

    destructured object

    -   ######

        `actions` object

        -   ######

            `createTypes` object

        -   ######

            `createFieldExtension` object

        -   ######

            `addThirdPartySchema` object

#### Example

```js
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes, createFieldExtension } = actions;

    createFieldExtension({
        name: 'shout',
        extend: () => ({
            resolve(source, args, context, info) {
                return String(source[info.fieldName]).toUpperCase();
            }
        })
    });

    const typeDefs = `
    type MarkdownRemark implements Node @dontInfer {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      tagline: String @shout
      date: Date @dateformat
      image: File @fileByRelativePath
    }
  `;
    createTypes(typeDefs);
};
```

---

###

[`onCreateBabelConfig`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateBabelConfig)

Let plugins extend/mutate the site's Babel configuration by calling [`setBabelPlugin`](https://www.gatsbyjs.com/docs/actions/#setBabelPlugin) or [`setBabelPreset`](https://www.gatsbyjs.com/docs/actions/#setBabelPreset).

#### Parameters

-   #####

    destructured object

    -   ######

        `stage` string

        The current build stage. One of 'develop', 'develop-html', 'build-javascript', or 'build-html'

    -   ######

        `actions` object

-   #####

    `options` object

    The Babel configuration

#### Example

```js
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: `babel-plugin-that-i-like`,
        options: {}
    });
};
```

---

###

[`onCreateDevServer`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateDevServer)

Run when the `gatsby develop` server is started. It can be used for adding proxies and Express middleware to the server.

#### Parameters

-   #####

    destructured object

    -   ######

        `app` Express

        The [Express app](https://expressjs.com/en/4x/api.html#app) used to run the dev server

#### Example

```js
exports.onCreateDevServer = ({ app }) => {
    app.get('/hello', function (req, res) {
        res.send('hello world');
    });
};
```

---

###

[`onCreateNode`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode)

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/redux/actions/public.js#L907-L912)

Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.

See also the documentation for [`createNode`](https://www.gatsbyjs.com/docs/actions/#createNode) and [`createNodeField`](https://www.gatsbyjs.com/docs/actions/#createNodeField)

The [Creating a Source Plugin](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/) tutorial demonstrates a way a plugin or site might use this API.

#### Example

```js
exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions;
    // Transform the new node here and create a new node or
    // create a new node field.
};
```

---

###

[`onCreatePage`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreatePage)

Called when a new page is created. This extension API is useful for programmatically manipulating pages created by other plugins e.g. if you want paths without trailing slashes.

There is a mechanism in Gatsby to prevent calling onCreatePage for pages created by the same gatsby-node.js to avoid infinite loops/callback.

See the guide [Creating and Modifying Pages](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/) for more on this API.

---

###

[`onCreateWebpackConfig`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateWebpackConfig)

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/webpack.config.js#L886-L894)

Let plugins extend/mutate the site's webpack configuration.

See also the documentation for [`setWebpackConfig`](https://www.gatsbyjs.com/docs/actions/#setWebpackConfig).

#### Parameters

-   #####

    destructured object

    -   ######

        `stage` string

        The current build stage. One of 'develop', 'develop-html', 'build-javascript', or 'build-html'

    -   ######

        `getConfig` function

        Returns the current webpack config

    -   ######

        `rules` object

        A set of preconfigured webpack config rules

    -   ######

        `loaders` object

        A set of preconfigured webpack config loaders

    -   ######

        `plugins` object

        A set of preconfigured webpack config plugins

    -   ######

        `actions` object

#### Example

```js
exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: 'my-css',
                    use: [loaders.style(), loaders.css()]
                }
            ]
        }
    });
};
```

---

###

[`onPluginInit`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPluginInit)

Lifecycle executed in each process (one time per process). Used to store actions etc for later use.

#### Example

```js
let createJobV2;
exports.onPluginInit = ({ actions }) => {
    // store job creation action to use it later
    createJobV2 = actions.createJobV2;
};
```

---

###

[`onPostBootstrap`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPostBootstrap)

Called at the end of the bootstrap process after all other extension APIs have been called.

---

###

[`onPostBuild`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPostBuild)

The last extension point called after all other parts of the build process are complete.

---

###

[`onPreBootstrap`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPreBootstrap)

Called once Gatsby has initialized itself and is ready to bootstrap your site.

---

###

[`onPreBuild`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPreBuild)

The first extension point called during the build process. Called after the bootstrap has completed but before the build steps start.

---

###

[`onPreExtractQueries`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPreExtractQueries)

Run before GraphQL queries/fragments are extracted from JavaScript files. Useful for plugins to add more JavaScript files with queries/fragments e.g. from node_modules.

See gatsby-transformer-sharp and gatsby-source-contentful for examples.

---

###

[`onPreInit`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPreInit)

The first API called during Gatsby execution, runs as soon as plugins are loaded, before cache initialization and bootstrap preparation.

---

###

[`pluginOptionsSchema`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#pluginOptionsSchema)

Run during the bootstrap phase. Plugins can use this to define a schema for their options using [Joi](https://joi.dev/) to validate the options users pass to the plugin.

#### Parameters

-   #####

    destructured object

    -   ######

        `Joi` Joi

        The instance of [Joi](https://joi.dev/) to define the schema

#### Example

```js
exports.pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        // Validate that the anonymize option is defined by the user and is a boolean
        anonymize: Joi.boolean().required()
    });
};
```

---

###

[`preprocessSource`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#preprocessSource)

Ask compile-to-js plugins to process source to JavaScript so the query runner can extract out GraphQL queries for running.

---

###

[`resolvableExtensions`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#resolvableExtensions)

Lets plugins implementing support for other compile-to-js add to the list of "resolvable" file extensions. Gatsby supports `.js` and `.jsx` by default.

#### Return value

#####

string[]

array of extensions

---

###

[`setFieldsOnGraphQLNodeType`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#setFieldsOnGraphQLNodeType)

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/schema/schema.js#L767-L777)

Called during the creation of the GraphQL schema. Allows plugins to add new fields to the types created from data nodes. It will be called separately for each type.

This function should return an object in the shape of [GraphQLFieldConfigMap](https://graphql.org/graphql-js/type/#graphqlobjecttype) which will be appended to fields inferred by Gatsby from data nodes.

*Note:* Import GraphQL types from `gatsby/graphql` and don't add the `graphql` package to your project/plugin dependencies to avoid `Schema must contain unique named types but contains multiple types named` errors. `gatsby/graphql` exports all builtin GraphQL types as well as the `GraphQLJSON` type.

Many transformer plugins use this to add fields that take arguments.

-   [`gatsby-transformer-remark`](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) adds an "excerpt" field where the user when writing their query can specify how many characters to prune the markdown source to.
-   [`gatsby-transformer-sharp`](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/) exposes many image transformation options as GraphQL fields.

#### Parameters

-   #####

    destructured object

    -   ######

        `type` object

        Object containing `name` and `nodes`

#### Example

```js
import { GraphQLString } from 'gatsby/graphql';

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
    if (type.name === `File`) {
        return {
            newField: {
                type: GraphQLString,
                args: {
                    myArgument: {
                        type: GraphQLString
                    }
                },
                resolve: (source, fieldArgs) => {
                    return `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.myArgument}`;
                }
            }
        };
    }

    // by default return empty object
    return {};
};
```

---

###

[`sourceNodes`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes)

Extension point to tell plugins to source nodes. This API is called during the Gatsby bootstrap sequence. Source plugins use this hook to create nodes. This API is called exactly once per plugin (and once for your site's `gatsby-config.js` file). If you define this hook in `gatsby-node.js` it will be called exactly once after all of your source plugins have finished creating nodes.

The [Creating a Source Plugin](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/) tutorial demonstrates a way a plugin or site might use this API.

See also the documentation for [`createNode`](https://www.gatsbyjs.com/docs/actions/#createNode).

#### Example

```js
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    // Data can come from anywhere, but for now create it manually
    const myData = {
        key: 123,
        foo: `The foo field of my node`,
        bar: `Baz`
    };

    const nodeContent = JSON.stringify(myData);

    const nodeMeta = {
        id: createNodeId(`my-data-${myData.key}`),
        parent: null,
        children: [],
        internal: {
            type: `MyNodeType`,
            mediaType: `text/html`,
            content: nodeContent,
            contentDigest: createContentDigest(myData)
        }
    };

    const node = Object.assign({}, myData, nodeMeta);
    createNode(node);
};
```

---

###

[`unstable_shouldOnCreateNode`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#unstable_shouldOnCreateNode)

## Called before scheduling a `onCreateNode` callback for a plugin. If it returns falsy then Gatsby will not schedule the `onCreateNode` callback for this node for this plugin. Note: this API does not receive the regular `api` that other callbacks get as first arg.

## Gatsby-ssr

```js
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const withPrefix = require('./src/utils/withPrefix').default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/plugins.js')} />
            <script src={withPrefix('js/main.js')} />
            <script src={withPrefix('js/page-load.js')} />
            <script src={withPrefix('js/page-unload.js')} />
        </React.Fragment>
    ]);
};
```

# Gatsby Server Rendering APIs

The file `gatsby-ssr.js` lets you alter the content of static HTML files as they are being Server-Side Rendered (SSR) by Gatsby and Node.js. To use the [Gatsby SSR APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/), create a file called `gatsby-ssr.js` in the root of your site. Export any of the APIs you wish to use in this file.

The APIs `wrapPageElement` and `wrapRootElement` exist in both the SSR and [browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser). You generally should implement the same components in both `gatsby-ssr.js` and `gatsby-browser.js` so that pages generated through SSR with Node.js are the same after being [hydrated](https://www.gatsbyjs.com/docs/glossary#hydration) in the browser.

gatsby-ssr.js

Copygatsby-ssr.js: copy code to clipboard`

const React = require("react")

const Layout = require("./src/components/layout")

// Adds a class name to the body element

exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {

setBodyAttributes({

className: "my-body-class",

})

}

// Wraps every page in a component

exports.wrapPageElement = ({ element, props }) => {

return <Layout {...props}>{element}</Layout>

}

`

## [](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#usage)Usage

Implement any of these APIs by exporting them from a file named `gatsby-ssr.js` in the root of your project.

## APIs

###

[`onPreRenderHTML`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onPreRenderHTML) Function

Source

[1](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/develop-static-entry.js#L93-L101)[2](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/ssr-develop-static-entry.js#L317-L325)

(apiCallbackContext: object, pluginOptions: pluginOptions) => undefined

Called after every page Gatsby server renders while building HTML so you can replace head components to be rendered in your `html.js`. This is useful if you need to reorder scripts or styles added by other plugins.

#### Parameters

-   #####

    destructured object

    -   ######

        `pathname` string

        The pathname of the page currently being rendered.

    -   ######

        `getHeadComponents` ReactNode[]

        Returns the current `headComponents` array.

    -   ######

        `replaceHeadComponents` function

        Takes an array of components as its first argument which replace the `headComponents` array which is passed to the `html.js` component. **WARNING** if multiple plugins implement this API it's the last plugin that "wins".

    -   ######

        `getPreBodyComponents` ReactNode[]

        Returns the current `preBodyComponents` array.

    -   ######

        `replacePreBodyComponents` function

        Takes an array of components as its first argument which replace the `preBodyComponents` array which is passed to the `html.js` component. **WARNING** if multiple plugins implement this API it's the last plugin that "wins".

    -   ######

        `getPostBodyComponents` ReactNode[]

        Returns the current `postBodyComponents` array.

    -   ######

        `replacePostBodyComponents` function

        Takes an array of components as its first argument which replace the `postBodyComponents` array which is passed to the `html.js` component. **WARNING** if multiple plugins implement this API it's the last plugin that "wins".

-   #####

    `pluginOptions` object

    Object containing options defined in `gatsby-config.js`

#### Example

```
// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.key === 'TypographyStyle') {
      return -1
    } else if (y.key === 'TypographyStyle') {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}
```

---

###

[`onRenderBody`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody) Function

Source

[1](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/develop-static-entry.js#L83-L91)[2](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/ssr-develop-static-entry.js#L307-L315)

(apiCallbackContext: object, pluginOptions: pluginOptions) => undefined

Called after every page Gatsby server renders while building HTML so you can set head and body components to be rendered in your `html.js`.

Gatsby does a two-pass render for HTML. It loops through your pages first rendering only the body and then takes the result body HTML string and passes it as the `body` prop to your `html.js` to complete the render.

It's often handy to be able to send custom components to your `html.js`. For example, it's a very common pattern for React.js libraries that support server rendering to pull out data generated during the render to add to your HTML.

Using this API over [`replaceRenderer`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#replaceRenderer) is preferable as multiple plugins can implement this API where only one plugin can take over server rendering. However, if your plugin requires taking over server rendering then that's the one to use

#### Parameters

-   #####

    destructured object

    -   ######

        `pathname` string

        The pathname of the page currently being rendered.

    -   ######

        `setHeadComponents` function

        Takes an array of components as its first argument which are added to the `headComponents` array which is passed to the `html.js` component.

    -   ######

        `setHtmlAttributes` function

        Takes an object of props which will spread into the `<html>` component.

    -   ######

        `setBodyAttributes` function

        Takes an object of props which will spread into the `<body>` component.

    -   ######

        `setPreBodyComponents` function

        Takes an array of components as its first argument which are added to the `preBodyComponents` array which is passed to the `html.js` component.

    -   ######

        `setPostBodyComponents` function

        Takes an array of components as its first argument which are added to the `postBodyComponents` array which is passed to the `html.js` component.

    -   ######

        `setBodyProps` function

        Takes an object of data which is merged with other body props and passed to `html.js` as `bodyProps`.

-   #####

    `pluginOptions` object

    Object containing options defined in `gatsby-config.js`

#### Example

```
// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script key="my-script" src="https://gatsby.dev/my-script" />
]

const BodyAttributes = {
  "data-theme": "dark"
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}
```

---

###

[`replaceRenderer`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#replaceRenderer) Function

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/ssr-develop-static-entry.js#L284-L295)

(apiCallbackContext: object, pluginOptions: pluginOptions) => undefined

Replace the default server renderer. This is useful for integration with Redux, css-in-js libraries, etc. that need custom setups for server rendering.

#### Parameters

-   #####

    destructured object

    -   ######

        `pathname` string

        The pathname of the page currently being rendered.

    -   ######

        `bodyComponent` ReactNode

        The React element to be rendered as the page body

    -   ######

        `replaceBodyHTMLString` function

        Call this with the HTML string you render. **WARNING** if multiple plugins implement this API it's the last plugin that "wins". TODO implement an automated warning against this.

    -   ######

        `setHeadComponents` function

        Takes an array of components as its first argument which are added to the `headComponents` array which is passed to the `html.js` component.

    -   ######

        `setHtmlAttributes` function

        Takes an object of props which will spread into the `<html>` component.

    -   ######

        `setBodyAttributes` function

        Takes an object of props which will spread into the `<body>` component.

    -   ######

        `setPreBodyComponents` function

        Takes an array of components as its first argument which are added to the `preBodyComponents` array which is passed to the `html.js` component.

    -   ######

        `setPostBodyComponents` function

        Takes an array of components as its first argument which are added to the `postBodyComponents` array which is passed to the `html.js` component.

    -   ######

        `setBodyProps` function

        Takes an object of data which is merged with other body props and passed to `html.js` as `bodyProps`.

-   #####

    `pluginOptions` object

    Object containing options defined in `gatsby-config.js`

#### Example

```
// From gatsby-plugin-glamor
const { renderToString } = require("react-dom/server")
const inline = require("glamor-inline")

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent)
  const inlinedHTML = inline(bodyHTML)

  replaceBodyHTMLString(inlinedHTML)
}
```

---

###

[`wrapPageElement`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement) Function

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/ssr-develop-static-entry.js#L252-L259)

(apiCallbackContext: object, pluginOptions: pluginOptions) => ReactNode

Allow a plugin to wrap the page element.

This is useful for setting wrapper components around pages that won't get unmounted on page changes. For setting Provider components, use [wrapRootElement](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapRootElement).

*Note:* There is an equivalent hook in Gatsby's [Browser API](https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement). It is recommended to use both APIs together. For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).

#### Parameters

-   #####

    destructured object

    -   ######

        `element` ReactNode

        The "Page" React Element built by Gatsby.

    -   ######

        `props` object

        Props object used by page.

-   #####

    `pluginOptions` object

    Object containing options defined in `gatsby-config.js`

#### Return value

#####

ReactNode

Wrapped element

#### Example

```
const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
```

---

###

[`wrapRootElement`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapRootElement) Function

[Source](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/ssr-develop-static-entry.js#L274-L281)

(apiCallbackContext: object, pluginOptions: pluginOptions) => ReactNode

Allow a plugin to wrap the root element.

This is useful to set up any Provider components that will wrap your application. For setting persistent UI elements around pages use [wrapPageElement](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement).

*Note:* There is an equivalent hook in Gatsby's [Browser API](https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement). It is recommended to use both APIs together. For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).

#### Parameters

-   #####

    destructured object

    -   ######

        `element` ReactNode

        The "Root" React Element built by Gatsby.

-   #####

    `pluginOptions` object

    Object containing options defined in `gatsby-config.js`

#### Return value

#####

ReactNode

Wrapped element

#### Example

```
const React = require("react")
const { Provider } = require("react-redux")

const createStore = require("./src/state/createStore")
const store = createStore()

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}
```

---

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```

###

```js

```
