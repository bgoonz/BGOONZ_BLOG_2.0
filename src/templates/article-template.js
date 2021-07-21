// import React, { useState } from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// import PostTag from "../components/posttag";
// import Footer from "../components/footer";
// import Img from "gatsby-image"
// import SEO from "../components/seo";
// import "katex/dist/katex.min.css"
// import "../styles/article.scss";

// const Article = ({data}) => {
//     const techPosts = data.allMarkdownRemark.edges
//     const siteTitle = data.site.siteMetadata.title
//     const post = data.markdownRemark;
//     let postImg = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid : null
//     const tags = post.frontmatter.tags
//     let techIconPaths = []
//     tags.forEach(tag => {
//         let regex = new RegExp(tag, "g")
//         techPosts.forEach(image => {
//             if (image.node.frontmatter.image.publicURL.match(regex)) {
//                 techIconPaths.push(image.node.frontmatter.image.publicURL)
//             }
//         })
//     })

//     const [darkMode, setDarkMode] = useState(false);

//     return (
//         <Layout>
//             <SEO title={post.frontmatter.title} />
//             <div className={`article ${darkMode ? `dark-mode` : ``}`}>
//                 <div className="article-main">
//                     <div className="article-main-toggle">
//                         <span style={{ color: darkMode ? "grey" : "orange"}}>☀</span>
//                         <span className="article-main-toggle-switch">
//                             <input
//                                 checked={darkMode}
//                                 onChange={() => setDarkMode(prevMode => !prevMode)}
//                                 id="checkbox"
//                                 className="checkbox"
//                                 type="checkbox"
//                             />
//                             <label htmlFor="checkbox">
//                                 <input type="text" style={{visibility: "hidden"}}/>
//                             </label>
//                         </span>
//                         <span style={{ color: darkMode ? "orange" : "gray"}}>☽</span>
//                     </div>
//                     <h1>{post.frontmatter.title}</h1>
//                     <small>{post.frontmatter.date}</small>
//                     <div className="article-main-icons">
//                         {
//                             techIconPaths.length ?
//                             techIconPaths.map((icon, i) => {
//                                 return (
//                                     <div key={i} className="article-main-icons-icon">
//                                         <img src={icon} alt={icon}/>
//                                     </div>
//                                 )
//                             }) : ""
//                         }
//                     </div>
//                     <hr/>
//                     {postImg &&
//                         <Img fluid={postImg} />
//                     }
//                     <div className="article-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
//                     <div className="article-main-tags">
//                         {post.frontmatter.tags &&
//                             post.frontmatter.tags.map((tag, i) => {
//                             return (<PostTag key={i} tag={tag} />)
//                         })}
//                     </div>
//                 </div>
//                 <Footer content="light" siteTitle={siteTitle} />
//             </div>
//         </Layout>
//     );
// }

// export default Article;

// export const pageQuery = graphql`
// query articleQuery($slug: String!) {
//     site {
//         siteMetadata {
//             title
//         }
//     }
//     svgs: allFile(filter: {extension: {regex: "/svg/"}}) {
//         edges {
//           node {
//             absolutePath
//           }
//         }
//       }
//       allMarkdownRemark(filter: {frontmatter: {pagetype: {eq: "tech"}}}) {
//         edges {
//           node {
//             frontmatter {
//               image {
//                 publicURL
//               }
//             }
//           }
//         }
//       }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//         html
//         frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             tags
//             image {
//             childImageSharp {
//               fluid(maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//     }
// }
// `
