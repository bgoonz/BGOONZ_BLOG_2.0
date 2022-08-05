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
<<<<<<< HEAD

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
=======
const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;
exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([]);
    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/addthis.js')} />
            <script src={withPrefix('js/algolia.js')} />
            <script src={withPrefix('js/analytics.js')} />
            <script src={withPrefix('js/blm.js')} />
            <script src={withPrefix('js/docs-main.js')} />
            <script src={withPrefix('js/google-search.js')} />
            <script src={withPrefix('js/goog-search.js')} />
            <script src={withPrefix('js/init.js')} />
            <script src={withPrefix('js/inject.js')} />
            <script src={withPrefix('js/main.js')} />
            <script src={withPrefix('js/misc.js')} />
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
            <script src={withPrefix('js/netlify-identity.js')} />
            <script src={withPrefix('js/page-load.js')} />
            <script src={withPrefix('js/page-unload.js')} />
            <script src={withPrefix('js/plugins.js')} />
            <script src={withPrefix('js/prettier.js')} />
<<<<<<< HEAD
=======
            <script src={withPrefix('js/print-2-pdf.js')} />
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
            <script src={withPrefix('js/prism.js')} />
            <script src={withPrefix('js/searchbar.js')} />
            <script src={withPrefix('js/search-create.js')} />
            <script src={withPrefix('js/syntax.js')} />
<<<<<<< HEAD
            <script src={withPrefix('js/ukraine.js')} />
=======
            <script src={withPrefix('js/toPlainText.js')} />
            <script src={withPrefix('js/ukraine.js')} />

            <script src={'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/highlight.min.js'} />
            <script src={withPrefix('js/syntax.js')} />
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
        </React.Fragment>
    ]);
};
