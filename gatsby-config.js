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
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-embed-gist',
                        options: {
                            // Optional:

                            // the github handler whose gists are to be accessed
                            username: 'bgoonz',

                            // a flag indicating whether the github default gist css should be included or not
                            // default: true
                            // DEPRECATED (PLEASE USE gistDefaultCssInclude)
                            includeDefaultCss: true || false,

                            // a flag indicating whether the github default gist css should be included or not
                            // default: true
                            gistDefaultCssInclude: true,

                            // a flag indicating whether the github default gist css should be preloaded or not
                            // use this if you want to load the default css asynchronously.
                            // default: false
                            gistCssPreload: true || false,

                            // a string that represents the github default gist css url.
                            // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
                            gistCssUrlAddress: '<string>'
                        }
                    }
                ]
            }
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
