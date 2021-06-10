import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import ScriptTag from 'react-script-tag';
import Link from './link';
import _ from 'lodash';

<<<<<<< HEAD
const convertChildren = (children, index) => _.map(children, (childNode) => convertNodeToElement(childNode, index, _.noop()));
=======
const convertChildren = (children, index) => _.map(children, childNode => convertNodeToElement(childNode, index, _.noop()));
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

export default function htmlToReact(html) {
    if (!html) {
        return null;
    }
    return ReactHtmlParser(html, {
        transform: (node, index) => {
            if (node.type === 'script') {
                if (!_.isEmpty(node.children)) {
                    return (
                        <ScriptTag key={index} {...node.attribs}>
                            {convertChildren(node.children, index)}
                        </ScriptTag>
                    );
                } else {
<<<<<<< HEAD
                    return <ScriptTag key={index} {...node.attribs} />;
=======
                    return <ScriptTag key={index} {...node.attribs}/>;
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
                }
            } else if (node.type === 'tag' && node.name === 'a') {
                const href = node.attribs.href;
                const props = _.omit(node.attribs, 'href');
                // use Link only if there are no custom attributes like style, class, and what's not that might break react
                if (_.isEmpty(props)) {
<<<<<<< HEAD
                    return (
                        <Link key={index} href={href} {...props}>
                            {convertChildren(node.children, index)}
                        </Link>
                    );
=======
                    return <Link key={index} href={href} {...props}>{convertChildren(node.children, index)}</Link>;
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
                }
            }
        }
    });
<<<<<<< HEAD
}
=======
};
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
