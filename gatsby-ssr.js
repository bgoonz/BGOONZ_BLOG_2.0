/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([

    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/plugins.js')} />
            <script src={withPrefix('js/main.js')} />
            <script src={withPrefix('js/page-load.js')} />
            <script src={withPrefix('js/page-unload.js')} />
            <script src={withPrefix('js/blm.js')} />
            <script src={withPrefix('js/addthis.js')} />
            <script src={withPrefix('js/google-search.js')} />
            <script src={withPrefix('js/algolia.js')} />
            <script src={withPrefix('js/prism.js')} />
            <script src={withPrefix('js/page-unload.js')} />
        </React.Fragment>
    ]);

};
'js/addthis.js'
'js/algolia.js'
'js/analytics.js'
'js/blm-badge.js'
'js/blm.js'
'js/copy-2-clip.js'
'js/dist'
'js/google-search.js'
'js/inject.js'
'js/main.js'
'js/misc.js'
'js/page-load.js'
'js/page-unload.js'
'js/plugins.js'
'js/prism.js'
'js/dist/clipboard.js'
'js/dist/clipboard.min.js'