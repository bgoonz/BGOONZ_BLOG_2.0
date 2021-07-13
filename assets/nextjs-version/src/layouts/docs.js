import React from 'react';
import _ from 'lodash';
import parse5 from 'parse5';
import marked from 'marked';

import { Layout } from '../components/index';
import { htmlToReact, getPageUrl, getPages, Link, withPrefix } from '../utils';

import DocsMenu from '../components/DocsMenu';

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.pageContent = React.createRef();
        this.pageNavContainer = React.createRef();
        this.gumshoeSpy = null;
        this.clipboard = null;
    }

    componentDidMount() {
        if (window && window.Gumshoe && this.pageNavContainer.current) {
            // Highlight current anchor
            let pageTocLinks = this.pageNavContainer.current.getElementsByTagName('a');
            if (pageTocLinks.length > 0) {
                this.gumshoeSpy = new window.Gumshoe('#page-nav-link-container a', {
                    nested: true,
                    nestedClass: 'active-parent'
                });
            }
        }

        if (window && window.ClipboardJS) {
            // Copy link url
            this.clipboard = new window.ClipboardJS('.post-content .hash-link', {
                text: function (trigger) {
                    return window.location.href.replace(window.location.hash, '') + trigger.getAttribute('href');
                }
            });
        }
    }

    componentDidUpdate() {
        if (window && window.Gumshoe && this.pageNavContainer.current) {
            // Highlight current anchor
            let pageTocLinks = this.pageNavContainer.current.getElementsByTagName('a');
            if (pageTocLinks.length > 0) {
                this.gumshoeSpy = new window.Gumshoe('#page-nav-link-container a', {
                    nested: true,
                    nestedClass: 'active-parent'
                });
            }
        }

        if (window && window.ClipboardJS) {
            // Copy link url
            this.clipboard = new window.ClipboardJS('.post-content .hash-link', {
                text: function (trigger) {
                    return window.location.href.replace(window.location.hash, '') + trigger.getAttribute('href');
                }
            });
        }
    }

    componentWillUnmount() {
        if (this.gumshoeSpy) {
            this.gumshoeSpy.destroy();
        }
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    }

    renderPageNav(pageHtml) {
        if (!pageHtml) {
            return null;
        }
        const result = extractHeaders({ html: pageHtml });
        if (result.headerLinks.length === 0) {
            return null;
        }
        return {
            html: result.html,
            headerLinks: (
                <div id="page-nav-link-container" ref={this.pageNavContainer}>
                    {this.renderHeaderLinks(result.headerLinks)}
                </div>
            )
        };
    }

    renderHeaderLinks(headerLinks) {
        if (headerLinks.length === 0) {
            return null;
        }
        return (
            <ul>
                {headerLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <a href={`#${link.id}`}>{link.textContent}</a>
                            {this.renderHeaderLinks(link.children)}
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderChildPage(childPage, index) {
        const childPageTitle = _.get(childPage, 'title');
        const childPageUrl = withPrefix(getPageUrl(childPage));

        return (
            <li key={index} className="docs-section-item">
                <Link href={childPageUrl} className="docs-item-link">
                    {childPageTitle}
                    <span className="icon-angle-right" aria-hidden="true" />
                </Link>
            </li>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const docsConfig = _.get(data, 'doc_sections');
        const docsRootPath = _.trim(_.get(docsConfig, 'root_docs_path'), '/');
        const docs = _.get(this.props, 'docs');
        const page = _.get(this.props, 'page');
        const pageUrl = _.trim(getPageUrl(page), '/');
        const title = _.get(page, 'title');
        const childPages = _.orderBy(getPages(docs, pageUrl), 'weight');
        const markdownContent = _.get(page, 'markdown_content');
        const pageHtml = (markdownContent && marked(markdownContent)) || null;
        const pageNav = this.renderPageNav(pageHtml);
        const adjustedHtml = (pageNav && pageNav.html) || pageHtml;
        const headerLinks = pageNav && pageNav.headerLinks;

        return (
            <Layout page={page} config={config}>
                <div className="inner outer">
                    <div className="docs-content">
                        <DocsMenu page={page} docsConfig={docsConfig} docs={docs} />
                        <article className="post type-docs">
                            <div className="post-inside">
                                <header className="post-header">
                                    <h1 className="post-title line-left">{title}</h1>
                                </header>
                                <div className="post-content" ref={this.pageContent}>
                                    {htmlToReact(adjustedHtml)}
                                    {docsRootPath !== pageUrl && !_.isEmpty(childPages) && (
                                        <ul id="docs-section-items" className="docs-section-items">
                                            {_.map(childPages, (childPage, index) => this.renderChildPage(childPage, index))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </article>
                        <nav id="page-nav" className="page-nav">
                            <div id="page-nav-inside" className="page-nav-inside sticky">
                                <h2 className="page-nav-title">Jump to Section</h2>
                                {headerLinks}
                            </div>
                        </nav>
                    </div>
                </div>
            </Layout>
        );
    }
}

/**
 * @param {Object} options
 * @param {string} options.html
 * @param {Array<string>} [options.tagNames]
 */
function extractHeaders(options) {
    const tagNames = options.tagNames || ['h2', 'h3'];
    const html = options.html;
    try {
        const documentFragment = parse5.parseFragment(html);
        const headerNodes = getNodesByTagNames(documentFragment, tagNames);
        return {
            headerLinks: createLinksForHeaderNodes(headerNodes),
            html: parse5.serialize(documentFragment)
        };
    } catch (error) {
        console.log('error extracting headers', error);
        return {
            headerLinks: [],
            html: html
        };
    }
}

function getNodesByTagNames(node, tagNames) {
    return _.reduce(
        node.childNodes,
        (nodes, childNode) => {
            const nodeName = childNode.nodeName.toLowerCase();
            if (tagNames.includes(nodeName)) {
                let idAttr = childNode.attrs ? _.find(childNode.attrs, { name: 'id' }) : null;
                let idValue = _.get(idAttr, 'value');
                const textContent = getNodeTextContent(childNode);
                if (!idValue) {
                    if (!textContent) {
                        console.warn('can not create link to element without id and without text content', element);
                        return nodes.concat(getNodesByTagNames(childNode, tagNames));
                    }
                    idValue = textContent
                        .toLowerCase()
                        .replace(/[^\w]+/g, '_')
                        .replace(/^_/, '')
                        .replace(/_$/, '');
                    if (!idAttr) {
                        idAttr = {
                            name: 'id',
                            value: idValue
                        };
                        childNode.attrs.push(idAttr);
                    } else {
                        idAttr.value = idValue;
                    }
                }
                childNode.childNodes.unshift({
                    nodeName: 'a',
                    tagName: 'a',
                    attrs: [
                        { name: 'href', value: `#${idValue}` },
                        { name: 'class', value: 'hash-link' },
                        { name: 'aria-hidden', value: 'true' },
                        { name: 'aria-label', value: 'Copy' }
                    ],
                    namespaceURI: 'http://www.w3.org/1999/xhtml',
                    childNodes: [
                        {
                            nodeName: 'span',
                            tagName: 'span',
                            attrs: [{ name: 'class', value: 'icon-copy' }],
                            namespaceURI: 'http://www.w3.org/1999/xhtml',
                            childNodes: []
                        }
                    ]
                });
                nodes.push({
                    nodeName: nodeName,
                    id: idValue,
                    textContent: textContent
                });
            }
            return nodes.concat(getNodesByTagNames(childNode, tagNames));
        },
        []
    );
}

function getNodeTextContent(node) {
    const childNodes = _.get(node, 'childNodes', []);
    return _.reduce(
        childNodes,
        (result, childNode) => {
            if (childNode.nodeName === '#text') {
                return result + _.get(childNode, 'value', '');
            } else {
                return result + getNodeTextContent(childNode);
            }
        },
        ''
    );
}

function createLinksForHeaderNodes(nodes) {
    let result = [];
    let stack = [
        {
            level: 0,
            children: result
        }
    ];
    let re = /^h(\d)$/;
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let tagName = node.nodeName.toLowerCase();
        let match = re.exec(tagName);
        if (!match) {
            console.warn('cannot create links to non header element');
            continue;
        }
        let headerLevel = parseInt(match[1], 10);
        let obj = {
            id: node.id,
            level: headerLevel,
            textContent: node.textContent,
            children: []
        };
        if (headerLevel > stack[stack.length - 1].level) {
            stack[stack.length - 1].children.push(obj);
            stack.push(obj);
        } else {
            while (headerLevel <= stack[stack.length - 1].level && stack.length > 1) {
                stack.pop();
            }
            stack[stack.length - 1].children.push(obj);
            stack.push(obj);
        }
    }
    return result;
}
