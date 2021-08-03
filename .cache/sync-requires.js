

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-templates-advanced-js": (preferDefault(require("/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src/templates/advanced.js"))),
  "component---src-templates-blog-js": (preferDefault(require("/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src/templates/blog.js"))),
  "component---src-templates-docs-js": (preferDefault(require("/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src/templates/docs.js"))),
  "component---src-templates-page-js": (preferDefault(require("/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src/templates/page.js"))),
  "component---src-templates-post-js": (preferDefault(require("/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src/templates/post.js")))
}

