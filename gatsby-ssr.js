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
            <script src={withPrefix('js/algolia.js')} />
            <script src={withPrefix('js/analytics.js')} />
            <script src={withPrefix('js/blm.js')} />
            <script src={withPrefix('js/goog-search.js')} />
            <script src={withPrefix('js/main.js')} />
            <script src={withPrefix('js/netlify-identity.js')} />
            <script src={withPrefix('js/page-load.js')} />
            <script src={withPrefix('js/page-unload.js')} />
            <script src={withPrefix('js/plugins.js')} />
            <script src={withPrefix('js/prettier.js')} />
            <script src={withPrefix('js/prism.js')} />
            <script src={withPrefix('js/searchbar.js')} />
            <script src={withPrefix('js/search-create.js')} />
            <script src={withPrefix('js/syntax.js')} />
            <script src={withPrefix('js/ukraine.js')} />
        </React.Fragment>
    ]);
};
