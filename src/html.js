import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddThis from './hooks/AddThis'

const ShareButtons = props => {
  useScript('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946');
}


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
