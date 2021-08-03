const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
     
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`
const postQuery = `{
  docs: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/docs/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
     
          date(formatString: "MMM D, YYYY")
          tags
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.docs.edges),
    indexName: `docs`,
    settings,
  },
]
module.exports = queries
