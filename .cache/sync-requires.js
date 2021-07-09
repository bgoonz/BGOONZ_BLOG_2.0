const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/.cache/dev-404-page.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/src/templates/advanced.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/src/templates/blog.js"))),
  "component---src-templates-docs-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/src/templates/docs.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/mnt/c/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/src/templates/post.js")))
}

