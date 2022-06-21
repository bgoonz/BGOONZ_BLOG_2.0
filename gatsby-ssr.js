/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * {/* // search-create.js
//<script src={withPrefix('js/google-search.js')} />
//<script src={withPrefix('js/algolia.js')} />
//
//<script src={withPrefix('js/analytics.js')} /> }
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react');
const withPrefix = require('./src/utils/withPrefix').default;
exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([]);
    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('algolia.js')} />
            <script src={withPrefix('analytics.js')} />
            <script src={withPrefix('blm.js')} />
            <script src={withPrefix('docs-main.js')} />
            <script src={withPrefix('google-search.js')} />
            <script src={withPrefix('goog-search.js')} />
            <script src={withPrefix('init.js')} />
            <script src={withPrefix('inject.js')} />
            <script src={withPrefix('jsfiddle-integration.js')} />
            <script src={withPrefix('jsfiddle-integration-babel.js')} />
            <script src={withPrefix('main.js')} />
            <script src={withPrefix('misc.js')} />
            <script src={withPrefix('netlify-identity.js')} />
            <script src={withPrefix('page-load.js')} />
            <script src={withPrefix('page-unload.js')} />
            <script src={withPrefix('plugins.js')} />
            <script src={withPrefix('prettier.js')} />
            <script src={withPrefix('print-2-pdf.js')} />
            <script src={withPrefix('prism.js')} />
            <script src={withPrefix('searchbar.js')} />
            <script src={withPrefix('syntax.js')} />
            <script src={withPrefix('toPlainText.js')} />
            <script src={withPrefix('ukraine.js')} />
            <script src={'https : // cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js'} />
            <script src={'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/highlight.min.js'} />
            <script src={withPrefix('js/syntax.js')} />
        </React.Fragment>
    ]);
};
