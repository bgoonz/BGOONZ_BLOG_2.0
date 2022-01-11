// Convert to HTML arbitrary Markdown content
import React from 'react'
import _ from 'lodash';

import PropTypes from 'prop-types'
import showdown from 'showdown'

const converter = new showdown.Converter()

export default class MarkdownContent extends React.Component {
    render() {
        let content = _.get(this.props, 'content', null);
        let container_class = _.get(this.props, 'container_class', null);
        return (
            <div className={container_class} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
        )
    }
}

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};
