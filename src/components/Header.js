import _ from 'lodash';
import React from 'react';
import { classNames, Link, withPrefix } from '../utils';
import ActionLink from './ActionLink';
import Submenu from './Submenu';
export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
                <br />
                <div className="inner">
                    <div className="site-header-inside">
                        <div className="site-branding">
                            {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) ? (
                                <p className="site-logo">
                                    <Link to={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.url', null) || '/')}>
                                        <img
                                            src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))}
                                            alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)}
                                        />
                                    </Link>
                                </p>
                            ) : (
                                <p className="site-logo">
                                    <Link to={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.url', null) || '/')}>
                                        {_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}
                                    </Link>
                                </p>
                            )}
                        </div>
                        {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (
                            <React.Fragment>
                                <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                                    <div className="site-nav-inside">
                                        <button id="menu-close" className="menu-toggle">
                                            <span className="screen-reader-text">Open Menu</span>
                                            <span className="icon-close" aria-hidden="true" />
                                        </button>
                                        <ul className="menu">
                                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                                                let page_url = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                                                let action_url = _.trim(_.get(action, 'url', null), '/');
                                                return (
                                                    <li
                                                        key={action_idx}
                                                        className={classNames('menu-item', {
                                                            'has-children': _.get(action, 'has_subnav', null) && _.get(action, 'subnav_links', null),
                                                            current: page_url === action_url,
                                                            'menu-button': _.get(action, 'style', null) !== 'link'
                                                        })}
                                                    >
                                                        <ActionLink {...this.props} action={action} />
                                                        {_.get(action, 'has_subnav', null) && _.get(action, 'subnav_links', null) && (
                                                            <React.Fragment>
                                                                <button className="submenu-toggle">
                                                                    <span className="icon-angle-right" aria-hidden="true" />
                                                                    <span className="screen-reader-text">Sub-menu</span>
                                                                </button>
                                                                <Submenu
                                                                    {...this.props}
                                                                    submenu={_.get(action, 'subnav_links', null)}
                                                                    menu_class={'submenu'}
                                                                    page={this.props.pageContext}
                                                                />
                                                            </React.Fragment>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </nav>
                                <button id="menu-open" className="menu-toggle">
                                    <span className="screen-reader-text">Close Menu</span>
                                    <span className="icon-menu" aria-hidden="true" />
                                </button>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <>
                    <div className="sb-modal sb-animate-bottom" id="sb-modal" style={{ top: 'unset' }}>
                        <div className="sb-content">
                            <div className="sb-search">
                                <div className="sb-input">
                                    <i className="sb-icon sb-back-icon icon-ic_back">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.2071 6.70711C11.5976 6.31658 11.5976 5.68342 11.2071 5.29289C10.8166 4.90237 10.1834 4.90237 9.79289 5.29289L4.29289 10.7929C3.90237 11.1834 3.90237 11.8166 4.29289 12.2071L9.79289 17.7071C10.1834 18.0976 10.8166 18.0976 11.2071 17.7071C11.5976 17.3166 11.5976 16.6834 11.2071 16.2929L7.41421 12.5H19C19.5523 12.5 20 12.0523 20 11.5C20 10.9477 19.5523 10.5 19 10.5H7.41421L11.2071 6.70711Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </i>
                                    <input
                                        className="sb-search-field"
                                        id="sb-search-field"
                                        name="Search"
                                        placeholder="Search..."
                                        type="search"
                                        autoComplete="off"
                                    />
                                    <div className="sb-search-icon">
                                        <i className="sb-icon icon-ic_search">
                                            <svg width={26} height={26} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.6671 18.4901 14.215 17.6178 15.4964L21.5607 19.4393C22.1464 20.0251 22.1464 20.9749 21.5607 21.5607C20.9749 22.1464 20.0251 22.1464 19.4393 21.5607L15.4964 17.6178C14.215 18.4901 12.6671 19 11 19C6.58172 19 3 15.4183 3 11Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="sb-results">
                                <div class="sb-divider">
                                    <p>Suggestions</p>
                                    <div class="sb-line"></div>
                                </div>
                                <div class="sb-results-block sb-suggestions">
                                    <div class="sb-results-items">&lt;!&ndash; suggestion template &ndash;&gt;</div>
                                </div>

                                <div class="sb-divider">
    
                                    <p>Pages</p>
                                    <div class="sb-line"></div>
                                </div>

                                <div className="sb-results-block sb-pages sb-card">

                                    <div className="sb-results-items" />
                                </div>

                            </div>
                        </div>
                    </div>
                </>

                <a className="github-corner" href="https://github.com/bgoonz/BGOONZ_BLOG_2.0" aria-label="View source on Github">
                    <svg
                        aria-hidden="true"
                        width={30}
                        height={30}
                        viewBox="0 0 250 250"
                        style={{
                            zIndex: 100000,
                            fill: 'black',
                            color: '#fff',
                            position: 'fixed',
                            top: '0px',
                            border: 1,
                            left: '0px',
                            transform: 'scale(-1.5, 1.5)'
                        }}
                    >
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path
                            className={"octo-arm"}
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor"
                            style={{ transformOrigin: '130px 106px' }}
                        ></path>
                        <path
                            className="octo-body"
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </a>
            </header>
        );
    }
}
