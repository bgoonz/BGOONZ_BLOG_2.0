// const path = require('path');
// /* Log out information after a build is done*/
// exports.onPostBuild = ({ reporter }) => {
//     reporter.info('Your Gatsby site has been built!');
// };
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const blogPostTemplate = path.resolve('src/templates/blog-post.js');
//     const result = await graphql(`
//         query {
//             allSamplePages {
//                 edges {
//                     node {
//                         slug
//                         title
//                     }
//                 }
//             }
//         }
//     `);
//     result.data.allSamplePages.edges.forEach((edge) => {
//         createPage({
//             path: `${edge.node.slug}`,
//             component: blogPostTemplate,
//             context: {
//                 title: edge.node.title
//             }
//         });
//     });
// };

//---------------------------------------

//
// /* eslint-env node */
// const DEFAULT_LANG_KEY = 'en'
//
// function getLangKey(node) {
//   const matches = node.fileAbsolutePath.match(/\.([a-z]{2})\.md/)
//   if (!matches) return DEFAULT_LANG_KEY
//   return matches[1]
// }
//
// function getPath(node) {
//   if (node.fields.langKey === DEFAULT_LANG_KEY)
//     return `/blog/${node.frontmatter.slug}`
//   return `/${node.fields.langKey}/blog/${node.frontmatter.slug}`
// }
//
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'Mdx') {
//     const langKey = getLangKey(node)
//     createNodeField({
//       node,
//       name: `langKey`,
//       value: langKey,
//     })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: node.frontmatter.slug,
//     })
//     createNodeField({
//       node,
//       name: `link`,
//       value: getPath({ ...node, fields: { langKey } }),
//     })
//     createNodeField({
//       node,
//       name: `editLink`,
//       value: `https://github.com/bgoonz/BGOONZ_BLOG_2.0/edit/master${node.fileAbsolutePath.replace(
//         __dirname,
//         '',
//       )}`,
//     })
//   }
// }
//
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(
//     `
//       {
//         allMdx {
//           edges {
//             node {
//               id
//               fileAbsolutePath
//               fields {
//                 langKey
//               }
//               frontmatter {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `,
//   )
//
//   if (result.errors) {
//     console.log(result.errors) // eslint-disable-line no-console
//     throw new Error('Error during page creation')
//   }
//
//   // Create blog posts pages.
//   result.data.allMdx.edges.forEach(({ node }) => {
//     createPage({
//       path: getPath(node),
//       component: require.resolve('./src/templates/post.js'),
//       context: {
//         id: node.id,
//         slug: node.frontmatter.slug,
//         langKey: node.fields.langKey,
//       },
//     })
//   })
// }
//
// // exports.sourceNodes = ({ actions }) => {
// //   const { createTypes } = actions
// //   const typeDefs = `
// //     type MdxFrontmatter {
// //       banner: File
// //     }
// //   `
// //   createTypes(typeDefs)
// // }
