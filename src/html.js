/**
 * It returns an HTML element with the attributes and components passed in as props
 * @param props - The props passed to the component.
 * @returns A React component that returns an HTML element.
 */
import PropTypes from "prop-types"
import React from "react"


export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head> {
                props.headComponents
            } </head>
            <body {...props.bodyAttributes}>
                {
                props.preBodyComponents
            }
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div key={`body`}
                    id="___gatsby"
                    dangerouslysetinnerhtml={
                        {__html: props.body}
                    }/> {
                props.postBodyComponents
            } </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
}

