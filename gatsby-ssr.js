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
const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;
exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([]);
    setPostBodyComponents([
        <React.Fragment>
            <script src={('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/highlight.min.js')} />
            <script src={withprefix('js/algolia.js')} />
            <script src={withprefix('js/analytics.js')} />
            <script src={withprefix('js/blm.js')} />
            <script src={withprefix('js/docs-main.js')} />
            <script src={withprefix('js/goog-search.js')} />
            <script src={withprefix('js/google-search.js')} />
            <script src={withprefix('js/init.js')} />
            <script src={withprefix('js/inject.js')} />
            <script src={withprefix('js/main.js')} />
            <script src={withprefix('js/misc.js')} />
            <script src={withprefix('js/netlify-identity.js')} />
            <script src={withprefix('js/page-load.js')} />
            <script src={withprefix('js/page-unload.js')} />
            <script src={withprefix('js/plugins.js')} />
            <script src={withprefix('js/prettier.js')} />
            <script src={withprefix('js/print-2-pdf.js')} />
            <script src={withprefix('js/prism.js')} />
            <script src={withprefix('js/search-create.js')} />
            <script src={withprefix('js/searchbar.js')} />
            <script src={withprefix('js/syntax.js')} />
            <script src={withprefix('js/addthis.js')} />
        </React.Fragment>
    ]);
};
