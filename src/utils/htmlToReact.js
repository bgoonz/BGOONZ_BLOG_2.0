import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import ScriptTag from 'react-script-tag';
import Link from './link';
import _ from 'lodash';
<<<<<<< HEAD
const convertChildren = (children, index) => _.map(children, (childNode) => convertNodeToElement(childNode, index, _.noop()));
=======

const convertChildren = (children, index) => _.map(children, (childNode) => convertNodeToElement(childNode, index, _.noop()));

>>>>>>> master
export default function htmlToReact(html) {
    if (!html) {
        return null;
    }
    return ReactHtmlParser(html, {
        transform: (node, index) => {
            if (node.type === 'script') {
<<<<<<< HEAD
                if (!_.isEmpty(node.children)) {
                    return (
                        <ScriptTag key={index} {...node.attribs}>
                            {convertChildren(node.children, index)}
                        </ScriptTag>
                    );
                } else {
                    return <ScriptTag key={index} {...node.attribs} />;
                }
=======
                return !_.isEmpty(node.children) ? (
                    <ScriptTag key={index} {...node.attribs}>
                        {convertChildren(node.children, index)}
                    </ScriptTag>
                ) : <ScriptTag key={index} {...node.attribs}/>;
>>>>>>> master
            } else if (node.type === 'tag' && node.name === 'a') {
                const { href } = node.attribs;
                const props = _.omit(node.attribs, 'href');
                // use Link only if there are no custom attributes like style, class, and what's not that might break react
                if (_.isEmpty(props)) {
                    return (
                        <Link key={index} to={href} {...props}>
                            {convertChildren(node.children, index)}
                        </Link>
                    );
                }
            }
        }
    });
}
