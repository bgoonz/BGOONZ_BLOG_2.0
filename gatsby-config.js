const siteMetadata = require( './site-metadata.json' );
const queries = require('./src/utils/algolia');

require('dotenv').config({
    path: `.env`
});


siteMetadata.siteUrl = `https://bgoonz-blog.netlify.app/`;
siteMetadata.title = 'bgoonzblog2.0';
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
        },
        {
            // in real life this would be:
            resolve: 'gatsby-plugin-algolia',
    
            options: {
                appId: process.env.ALGOLIA_APPID,
                apiKey: process.env.ALGOLIA_APIKEY,
                indexName: process.env.ALGOLIA_INDEXNAME, // for all queries
                queries,
                chunkSize: 10000, // default: 1000
                enablePartialUpdates: true, // default: false
                matchFields: ['matchFields']
            }
        }
    ]
};
