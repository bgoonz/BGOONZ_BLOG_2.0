const siteMetadata = require('./site-metadata.json');
require('dotenv').config({ path: `.env` })
const query = `{
  allSitePage {
    edges {
      node {
        # try to find a unique id for each node
        # if this field is absent, it's going to
        # be inserted by Algolia automatically
        # and will be less simple to update etc.
        objectID: id
        component
        path
        componentChunkName
        jsonName
        internal {
          type
          contentDigest
          owner
        }
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
    // indexName: 'pages', // optional
    settings: {
      attributesToSnippet: ['path:5', 'internal'],
    },
  },
]
siteMetadata.siteUrl = `https://bgoonz-blog.netlify.app/`;
 siteMetadata: {
    title: 'Gatsby Default Starter',
  }
plugins: [`gatsby-plugin-sitemap`];
module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-dark-mode',
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
