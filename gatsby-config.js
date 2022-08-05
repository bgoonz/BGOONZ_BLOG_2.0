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
                plugins: ['gatsby-remark-prismjs'],
            },
        },
        {
            resolve: 'gatsby-remark-code-buttons',
            options: {
                // Optional button container class name. Defaults
                // to 'gatsby-code-button-container'.
<<<<<<< HEAD
                buttonContainerClass: 'customButtonContainerClass',
                // Optional button class name. Defaults to 'gatsby-code-button'.
                buttonClass: 'customButtonClass',
                // Optional button text. Defaults to ''.
                buttonText: 'customButtonText',
                // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
                svgIconClass: 'customSvgIconClass',
                // Optional svg icon. Defaults to svg string and can be
                // replaced with any other valid svg. Use custom classes
                // in the svg string and skip `iconClass` option.
                svgIcon: 'customSvgIcon',
                // Optional tooltip text. Defaults to ''.
                tooltipText: 'customTooltipText',
                // Optional toaster class name. Defaults to ''.
                toasterClass: 'customToasterClass',
                // Optional toaster text class name. Defaults to ''.
                toasterTextClass: 'customToasterTextClass',
=======
                buttonContainerClass: `customButtonContainerClass`,
                // Optional button class name. Defaults to 'gatsby-code-button'.
                buttonClass: `customButtonClass`,
                // Optional button text. Defaults to ''.
                buttonText: `customButtonText`,
                // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
                svgIconClass: `customSvgIconClass`,
                // Optional svg icon. Defaults to svg string and can be
                // replaced with any other valid svg. Use custom classes
                // in the svg string and skip `iconClass` option.
                svgIcon: `customSvgIcon`,
                // Optional tooltip text. Defaults to ''.
                tooltipText: `customTooltipText`,
                // Optional toaster class name. Defaults to ''.
                toasterClass: `customToasterClass`,
                // Optional toaster text class name. Defaults to ''.
                toasterTextClass: `customToasterTextClass`,
>>>>>>> fb14820408efc9fef569093d1a3b9ca213a5653d
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
            resolve: 'gatsby-plugin-no-sourcemaps',
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
