<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
=======
import React from "react"
import PropTypes from "prop-types"


>>>>>>> 753e72a7925cf49c15a0c1cd1abf20c3ac47c727
export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>{props.headComponents}</head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    );
}
HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
};
