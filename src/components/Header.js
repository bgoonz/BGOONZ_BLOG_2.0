import React from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { getPageUrl, classNames, Link, withPrefix } from '../utils';
import Action from './Action';
import ActionIcon from './ActionIcon';

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
    }

    handleMenuToggle(event) {
        event.preventDefault();
        document.body.classList.toggle('menu--opened');
    }

    renderNavLinks(navLinks, pageUrl) {
        return (
            <ul className="menu">
                {_.map(navLinks, (action, index) => {
                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                    return (
                        <li
                            key={index}
                            className={classNames('menu-item', {
                                'current-menu-item': pageUrl === actionUrl
                            })}
                        >
                            <Action action={action} />
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderSocialLinks(socialLinks) {
        return (
            <div className="social-links">
                {_.map(socialLinks, (action, index) => (
                    <ActionIcon key={index} action={action} />
                ))}
            </div>
        );
    }

    render() {
        const image = _.get(this.props, 'image');
        const page = _.get(this.props, 'page');
        const pageUrl = _.trim(getPageUrl(page), '/');
        const pageLayout = _.get(page, 'layout');
        const config = _.get(this.props, 'config');
        const header = _.get(config, 'header');
        const logo = _.get(header, 'logo_img');
        const logoAlt = _.get(header, 'logo_img_alt', '');
        const title = _.get(header, 'title');
        const tagline = _.get(header, 'tagline');
        const hasNav = _.get(header, 'has_nav');
        const navLinks = _.get(header, 'nav_links');
        const hasSocial = _.get(header, 'has_social');
        const socialLinks = _.get(header, 'social_links');

        return (
            <header className="site-header">
                {image && (
                    <div className="site-header-bg">
                        <img src={withPrefix(image)} className="site-header-bg-img" alt="" />
                        <div className="site-header-bg-gradient" />
                    </div>
                )}
                <div className="site-header-scroll">
                    <div className="site-header-inside">
                        <div className="site-header-vertical">
                            <div className="site-branding">
                                {logo && (
                                    <p className="site-logo">
                                        <Link href={withPrefix('/')}>
                                            <img src={withPrefix(logo)} alt={logoAlt} />
                                        </Link>
                                    </p>
                                )}
                                {pageLayout === 'home' ? (
                                    <h1 className="site-title">
                                        <Link href={withPrefix('/')}>{title}</Link>
                                    </h1>
                                ) : (
                                    <p className="site-title">
                                        <Link href={withPrefix('/')}>{title}</Link>
                                    </p>
                                )}
                                {tagline && <p className="site-description">{tagline}</p>}
                            </div>
                            {((hasNav && !_.isEmpty(navLinks)) || (hasSocial && !_.isEmpty(socialLinks))) && (
                                <React.Fragment>
                                    <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                                        <div className="site-nav-wrap">
                                            <div className="site-nav-inside">
                                                {hasNav && !_.isEmpty(navLinks) && this.renderNavLinks(navLinks, pageUrl)}
                                                {hasSocial && !_.isEmpty(socialLinks) && this.renderSocialLinks(socialLinks)}
                                            </div>
                                        </div>
                                    </nav>
                                    <button id="menu-toggle" className="menu-toggle" ref={this.menuOpenRef} onClick={this.handleMenuToggle.bind(this)}>
                                        <span className="screen-reader-text">Menu</span>
                                        <span className="icon-menu" aria-hidden="true" />
                                    </button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
