import React from "react"
import { graphql } from "gatsby"

const Directories = ( { data } ) => <pre>{ JSON.stringify( data, null, 4 ) }</pre>

export const query = graphql`
  {
    directory
    markdownRemark(excerptAst: {})
    allFile
    allDirectory(filter: {absolutePath: {}})
  }
`

export default Directories

