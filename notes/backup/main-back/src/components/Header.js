import React from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.menuOpenRef = React.createRef();
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
        const menuOpenElm = _.get(this.menuOpenRef, 'current.offsetParent');
        if (menuOpenElm === null) {
            document.body.classList.remove('menu--opened');
        }
    }

    handleRouteChange() {
        document.body.classList.remove('menu--opened');
        document.querySelectorAll('.submenu-toggle').forEach((element) => element.parentNode.classList.remove('active'));
    }

    handleMenuToggle(event) {
        event.preventDefault();
        document.body.classList.toggle('menu--opened');
    }

    handleSubMenuToggle(event) {
        event.preventDefault();
        event.currentTarget.parentNode.classList.toggle('active');
    }

    renderNavLinks(navLinks, pageUrl) {
        return (
            <React.Fragment>
                <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                        <button id="menu-close" className="menu-toggle" onClick={this.handleMenuToggle.bind(this)}>
                            <span className="screen-reader-text">Close Menu</span>
                            <span className="icon-close" aria-hidden="true" />
                        </button>
                        <ul className="menu">
                            {_.map(navLinks, (action, index) => {
                                const actionUrl = _.trim(_.get(action, 'url'), '/');
                                const actionStyle = _.get(action, 'style', 'link');
                                const hasSubNav = _.get(action, 'has_subnav');
                                const subNavLinks = _.get(action, 'subnav_links');
                                return (
                                    <li
                                        key={index}
                                        className={classNames('menu-item', {
                                            'has-children': hasSubNav && !_.isEmpty(subNavLinks),
                                            current: pageUrl === actionUrl,
                                            'menu-button': actionStyle !== 'link'
                                        })}
                                    >
                                        <Action action={action} />
                                        {hasSubNav && !_.isEmpty(subNavLinks) && this.renderSubNavLinks(subNavLinks, pageUrl)}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <button id="menu-open" className="menu-toggle" ref={this.menuOpenRef} onClick={this.handleMenuToggle.bind(this)}>
                    <span className="screen-reader-text">Open Menu</span>
                    <span className="icon-menu" aria-hidden="true" />
                </button>
            </React.Fragment>
        );
    }

    renderSubNavLinks(subNavLinks, pageUrl) {
        return (
            <React.Fragment>
                <button className="submenu-toggle" onClick={this.handleSubMenuToggle.bind(this)}>
                    <span className="icon-angle-right" aria-hidden="true" />
                    <span className="screen-reader-text">Sub-menu</span>
                </button>
                <ul className="submenu">
                    {_.map(subNavLinks, (action, index) => {
                        const actionUrl = _.trim(_.get(action, 'url'), '/');
                        const actionStyle = _.get(action, 'style', 'link');
                        return (
                            <li
                                key={index}
                                className={classNames('menu-item', {
                                    current: pageUrl === actionUrl,
                                    'menu-button': actionStyle !== 'link'
                                })}
                            >
                                <Action action={action} />
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageUrl = _.trim(getPageUrl(page), '/');
        const config = _.get(this.props, 'config');
        const header = _.get(config, 'header');
        const title = _.get(header, 'title');
        const titleUrl = _.get(header, 'url');
        const logo = _.get(header, 'logo_img');
        const logoAlt = _.get(header, 'logo_img_alt', '');
        const hasNav = _.get(header, 'has_nav');
        const navLinks = _.get(header, 'nav_links');

        return (
            <header id="masthead" className="site-header outer">
                <div className="inner">
                    <div className="site-header-inside">
                        <div className="site-branding">
                            {logo ? (
                                <p className="site-logo">
                                    <Link href={withPrefix(titleUrl || '/')}>
                                        <img src={withPrefix(logo)} alt={logoAlt} />{' '}
                                    </Link>
                                </p>
                            ) : (
                                <p className="site-title">
                                    <Link href={withPrefix(titleUrl || '/')}>{title}</Link>
                                </p>
                            )}
                        </div>
                        {hasNav && !_.isEmpty(navLinks) && this.renderNavLinks(navLinks, pageUrl)}
                    </div>
                </div>
            </header>
        );
    }
}
