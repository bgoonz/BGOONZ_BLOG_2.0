import React from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { getPage, getPages, getPageUrl, classNames, Link, withPrefix, pathJoin } from '../utils';

export default class DocsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.docsMenuOpenRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize, true);
        Router.events.on('routeChangeStart', this.handleRouteChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize, true);
        Router.events.off('routeChangeStart', this.handleRouteChange);
    }

    handleWindowResize() {
        const menuOpenElm = _.get(this.docsMenuOpenRef, 'current.offsetParent');
        if (menuOpenElm === null) {
            document.body.classList.remove('docs-menu--opened');
        }
    }

    handleRouteChange() {
        document.body.classList.remove('docs-menu--opened');
    }

    handleDocsMenuToggle(event) {
        event.preventDefault();
        document.body.classList.toggle('docs-menu--opened');
    }

    handleDocsSubMenuToggle(event) {
        event.preventDefault();
        event.currentTarget.parentNode.classList.toggle('active');
    }

    renderDocsRootLink(docsRootPath, docs, pageUrl) {
        const docsRootPage = getPage(docs, docsRootPath);
        const docsRootPageUrl = getPageUrl(docsRootPage);
        const docsRootPageTitle = _.get(docsRootPage, 'title');

        return (
            <li
                className={classNames('docs-menu-item', {
                    current: pageUrl === docsRootPageUrl
                })}
            >
                <Link href={withPrefix(docsRootPageUrl)}>{docsRootPageTitle}</Link>
            </li>
        );
    }

    renderDocsSectionLink(docsSection, index, docsRootPath, docs, pageUrl) {
        const docsSectionPath = pathJoin(docsRootPath, docsSection);
        const docsSectionPage = getPage(docs, docsSectionPath);
        const docsSectionPageUrl = getPageUrl(docsSectionPage);
        const docsSectionPageTitle = _.get(docsSectionPage, 'title');
        const docsSectionChildPages = _.orderBy(getPages(docs, docsSectionPath), 'weight');

        return (
            <li
                key={index}
                className={classNames('docs-menu-item', {
                    'has-children': !_.isEmpty(docsSectionChildPages),
                    current: pageUrl === docsSectionPageUrl,
                    active: pageUrl.startsWith(docsSectionPageUrl)
                })}
            >
                <Link href={withPrefix(docsSectionPageUrl)}>{docsSectionPageTitle}</Link>
                {!_.isEmpty(docsSectionChildPages) && (
                    <React.Fragment>
                        <button className="docs-submenu-toggle" onClick={this.handleDocsSubMenuToggle.bind(this)}>
                            <span className="screen-reader-text">Submenu</span>
                            <span className="icon-angle-right" aria-hidden="true" />
                        </button>
                        <ul className="docs-submenu">
                            {_.map(docsSectionChildPages, (docsChildPage, index) => this.renderDocsChildLink(docsChildPage, index, pageUrl))}
                        </ul>
                    </React.Fragment>
                )}
            </li>
        );
    }

    renderDocsChildLink(docsChildPage, index, pageUrl) {
        const docsChildPageUrl = getPageUrl(docsChildPage);
        const docsChildPageTitle = _.get(docsChildPage, 'title');

        return (
            <li
                key={index}
                className={classNames('docs-menu-item', {
                    current: pageUrl === docsChildPageUrl
                })}
            >
                <Link href={withPrefix(docsChildPageUrl)}>{docsChildPageTitle}</Link>
            </li>
        );
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageUrl = getPageUrl(page);
        const docs = _.get(this.props, 'docs');
        const docsConfig = _.get(this.props, 'docsConfig');
        const docSections = _.get(docsConfig, 'sections');
        const docsRootPath = _.get(docsConfig, 'root_docs_path');

        return (
            <nav id="docs-nav" className="docs-nav">
                <div id="docs-nav-inside" className="docs-nav-inside sticky">
                    <button id="docs-nav-toggle" className="docs-nav-toggle" ref={this.docsMenuOpenRef} onClick={this.handleDocsMenuToggle.bind(this)}>
                        Navigate Docs <span className="icon-angle-right" aria-hidden="true" />
                    </button>
                    <div className="docs-nav-menu">
                        <ul id="docs-menu" className="docs-menu">
                            {this.renderDocsRootLink(docsRootPath, docs, pageUrl)}
                            {_.map(docSections, (docsSection, index) => this.renderDocsSectionLink(docsSection, index, docsRootPath, docs, pageUrl))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
