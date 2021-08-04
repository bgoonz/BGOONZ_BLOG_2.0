// const pageQuery = `{
//   docs: allMarkdownRemark(
//     filter: {
//       fileAbsolutePath: { regex: "/docs/" },
//         }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//      
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`;
// const postQuery = `{
//   blog: allMarkdownRemark(
//     filter: { fileAbsolutePath: { regex: "/blog/" } }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//      
//           tags
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`;
// const flatten = (arr) =>
//     arr.map(({ node: { frontmatter, ...rest } }) => ({
//         ...frontmatter,
//         ...rest
//     }));
// const settings = { attributesToSnippet: [`excerpt:20`] };
// const queries = [
//     {
//         query: pageQuery,
//         transformer: ({ data }) => flatten(data.docs.edges),
//         indexName: `docs`,
//         settings
//     },
//     {
//         query: postQuery,
//         transformer: ({ data }) => flatten(data.blog.edges),
//         indexName: `blog`,
//         settings
//     }
// ];
// module.exports = queries;
