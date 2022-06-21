const siteMetadata = require('./site-metadata.json');
module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-source-data',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['gatsby-remark-prismjs-copy-button', 'gatsby-remark-prismjs'],
            },
        },
        {
            resolve: 'gatsby-remark-code-buttons',
            options: {
                // Optional button container class name. Defaults
                // to 'gatsby-code-button-container'.

                // Optional toaster text. Defaults to ''.
                toasterText: 'customToasterText',
                // Optional toaster duration. Defaults to 3500.
                toasterDuration: 5000
            },
        },
        {
            resolve: 'gatsby-plugin-disqus',
            options: {
                shortname: 'webdevhub-1',
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {}
        },
        {
            resolve: 'gatsby-remark-page-creator',
            options: {}
        },
        {
            resolve: '@stackbit/gatsby-plugin-menus',
            options: {
                sourceUrlPath: 'fields.url',
                pageContextProperty: 'menus',
            },
        },
        {
            resolve: 'gatsby-plugin-disqus',
            options: {
                shortname: 'webdevhub-1'
            }
        },
    ]
};