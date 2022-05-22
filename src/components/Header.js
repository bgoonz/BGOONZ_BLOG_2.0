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
<div id="sb-search-example">
    <div className="sb-search-icon" id="myCustomSearchButtonID">
        <i className="sb-icon">
</i>
        <p>Search</p>
    </div>
    <style dangerouslySetInnerHTML={
        {
            __html: "\n\t\t@font-face {\n font-family: font-sb;\n src: url(https://api.searchbar.org/fonts/sb.eot?39450784);\n src: url(https://api.searchbar.org/fonts/sb.eot?39450784#iefix) format('embedded-opentype'), url(https://api.searchbar.org/fonts/sb.woff?39450784) format('woff'), url(https://api.searchbar.org/fonts/?39450784) format('truetype'), url(https://api.searchbar.org/fonts/sb.svg?39450784#font-sb) format('svg');\n font-weight: 400;\n font-style: normal\n }\n\n #sb-search-example p {\n font-family: sans-serif;\n font-size: 18px;\n line-height: 12px;\n\t margin: 0;\n }\n\n #sb-search-example {\n position: static;\n top: 0;\n width: auto;\n place-content: center;\n display: inline-block;\n box-shadow: 0px 2px 4px rgba(190, 190, 190, 0.5);\n border: solid 5px white;\n border-radius: 100px;\n flex-shrink: initial;\n flex-grow: initial;\n }\n\n\n #sb-search-example .sb-icon {\n font: normal normal 400 26px font-sb;\n align-items: center;\n padding: 10px;\n speak: none;\n display: inline-block;\n text-decoration: inherit;\n text-align: center;\n text-transform: none;\n cursor: pointer;\n margin: 0;\n }\n\n #sb-search-example .sb-search-icon {\n box-sizing: border-box;\n border: 0px;\n align-items: center;\n background: #007cff;\n color: #fff;\n cursor: pointer;\n display: flex;\n border-radius: 26px;\n padding: 0 20px 0 4px;\n }\n\t"
        }
    }/>
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
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
</path>
                        <path
                            className="octo-arm"
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor"
                            style={{ transformOrigin: '130px 106px' }}
                        >
</path>
                        <path
                            className="octo-body"
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor"
                        >
</path>
                    </svg>
                </a>
        
            </header >
        );
    }
}
