// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
    'component---src-templates-advanced-js': () =>
        import('./../../../src/templates/advanced.js' /* webpackChunkName: "component---src-templates-advanced-js" */),
    'component---src-templates-blog-js': () => import('./../../../src/templates/blog.js' /* webpackChunkName: "component---src-templates-blog-js" */),
    'component---src-templates-docs-js': () => import('./../../../src/templates/docs.js' /* webpackChunkName: "component---src-templates-docs-js" */),
    'component---src-templates-page-js': () => import('./../../../src/templates/page.js' /* webpackChunkName: "component---src-templates-page-js" */),
    'component---src-templates-post-js': () => import('./../../../src/templates/post.js' /* webpackChunkName: "component---src-templates-post-js" */)
};
