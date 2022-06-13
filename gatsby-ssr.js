/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * {/* // search-create.js
//<script src={withPrefix('js/js/google-search.js')} />
//<script src={withPrefix('js/js/algolia.js')} />
//
//<script src={withPrefix('js/js/analytics.js')} /> }
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react');
const withPrefix = require('./src/utils/withPrefix').default;
exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([]);
    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/js/addthis.js')} />
            <script src={withPrefix('js/algolia.js')}/>
            <script src={withPrefix('js/analytics.js')}/>
            <script src={withPrefix('js/blm.js')}/>
            <script src={withPrefix('js/docs-main.js')}/>
            <script src={withPrefix('js/google-search.js')}/>
            <script src={withPrefix('js/goog-search.js')}/>
            <script src={withPrefix('js/init.js')}/>
            <script src={withPrefix('js/inject.js')}/>
            <script src={withPrefix('js/jsfiddle-integration.js')}/>
            <script src={withPrefix('js/jsfiddle-integration-babel.js')}/>
            <script src={withPrefix('js/main.js')}/>
            <script src={withPrefix('js/misc.js')}/>
            <script src={withPrefix('js/netlify-identity.js')}/>
            <script src={withPrefix('js/page-load.js')}/>
            <script src={withPrefix('js/page-unload.js')}/>
            <script src={withPrefix('js/plugins.js')}/>
            <script src={withPrefix('js/prettier.js')}/>
            <script src={withPrefix('js/print-2-pdf.js')}/>
            <script src={withPrefix('js/prism.js')}/>
            <script src={withPrefix('js/searchbar.js')}/>
            <script src={withPrefix('js/syntax.js')}/>
            <script src={withPrefix('js/toPlainText.js')}/>
            <script src={withPrefix('js/ukraine.js')}/>
            <script src={withPrefix('js/syntax.js')} />
            <script src = {'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js'} />
            <script src={'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/highlight.min.js'} />
            <script src={'https://www.googletagmanager.com/gtag/js?id=G-90VG64DEP3'} />
        </React.Fragment>
    ]);
};
