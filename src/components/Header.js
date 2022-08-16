/* It's a header component that renders a logo, a navbar, and a search bar. */
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
                            { _.get( this.props, 'pageContext.site.siteMetadata.header.logo_img', null ) ? (
                                <p className="site-logo">
                                    <Link to={ withPrefix( _.get( this.props, 'pageContext.site.siteMetadata.header.url', null ) || '/' ) }>
                                        <img
                                            src={ withPrefix( _.get( this.props, 'pageContext.site.siteMetadata.header.logo_img', null ) ) }
                                            alt={ _.get( this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null ) }
                                        />
                                    </Link>
                                </p>
                            ) : (
                                <p className="site-logo">
                                    <Link to={ withPrefix( _.get( this.props, 'pageContext.site.siteMetadata.header.url', null ) || '/' ) }>
                                        { _.get( this.props, 'pageContext.site.siteMetadata.header.title', null ) }
                                    </Link>
                                </p>
                            ) }
                        </div>
                        { _.get( this.props, 'pageContext.site.siteMetadata.header.has_nav', null ) && (
                            <React.Fragment>
                                <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                                    <div className="site-nav-inside">
                                        <button id="menu-close" className="menu-toggle">
                                            <span className="screen-reader-text">Open Menu</span>
                                            <span className="icon-close" aria-hidden="true" />
                                        </button>
                                        <ul className="menu">
                                            { _.map( _.get( this.props, 'pageContext.site.siteMetadata.header.nav_links', null ), ( action, action_idx ) => {
                                                const page_url = _.trim( _.get( this.props, 'pageContext.url', null ), '/' );
                                                const action_url = _.trim( _.get( action, 'url', null ), '/' );
                                                return (
                                                    <li
                                                        key={ action_idx }
                                                        className={ classNames( 'menu-item', {
                                                            'has-children': _.get( action, 'has_subnav', null ) && _.get( action, 'subnav_links', null ),
                                                            current: page_url === action_url,
                                                            'menu-button': _.get( action, 'style', null ) !== 'link'
                                                        } ) }
                                                    >
                                                        <ActionLink { ...this.props } action={ action } />
                                                        { _.get( action, 'has_subnav', null ) && _.get( action, 'subnav_links', null ) && (
                                                            <React.Fragment>
                                                                <button className="submenu-toggle">
                                                                    <span className="icon-angle-right" aria-hidden="true" />
                                                                    <span className="screen-reader-text">Sub-menu</span>
                                                                </button>
                                                                <Submenu
                                                                    { ...this.props }
                                                                    submenu={ _.get( action, 'subnav_links', null ) }
                                                                    menu_class={ 'submenu' }
                                                                    page={ this.props.pageContext }
                                                                />
                                                            </React.Fragment>
                                                        ) }
                                                    </li>
                                                );
                                            } ) }
                                        </ul>
                                    </div>
                                </nav>
                                <button id="menu-open" className="menu-toggle">
                                    <span className="screen-reader-text">Close Menu</span>
                                    <span className="icon-menu" aria-hidden="true" />
                                </button>
                            </React.Fragment>
                        ) }
                    </div>
                </div>
                <div id="sb-search-input-example">
                    <div className="sb-content sb-hero">
                        <div className="sb-search sb-hero">
                            <div className="sb-input">
                                <input className="sb-search-field" name="pesquisa" placeholder="Type your search..." type="search" autoComplete="on" id="myCustomTextInputID" />
                                <div className="sb-search-icon" id="myCustomSearchButtonID">
                                    <i className="sb-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={ { __html: "\n        @font-face {\n            font-family: font-sb;\n            src: url(https://api.searchbar.org/fonts/sb.eot?39450784);\n            src: url(https://api.searchbar.org/fonts/sb.eot?39450784#iefix) format('embedded-opentype'), url(https://api.searchbar.org/fonts/sb.woff?39450784) format('woff'), url(https://api.searchbar.org/fonts/?39450784) format('truetype'), url(https://api.searchbar.org/fonts/sb.svg?39450784#font-sb) format('svg');\n            font-weight: 400;\n            font-style: normal\n        }\n\n        #sb-search-input-example {\n            position: static;\n            top: 0;\n            width: 100%;\n            height: 90px;\n            place-content: center;\n            display: flex;\n        }\n\n        #sb-search-input-example a, #sb-search-input-example button, #sb-search-input-example div, #sb-search-input-example em, #sb-search-input-example h1, #sb-search-input-example h2, #sb-search-input-example h3, #sb-search-input-example h4, #sb-search-input-example h5, #sb-search-input-example input, #sb-search-input-example p, #sb-search-input-example span {\n            all: initial;\n            font-family: Roboto, Helvetica, Arial;\n            font-size: 0px;\n        }\n\n        #sb-search-input-example div, #sb-search-input-example h1, #sb-search-input-example h2, #sb-search-input-example h3, #sb-search-input-example h4, #sb-search-input-example h5, #sb-search-input-example p {\n            display: block\n        }\n\n        #sb-search-input-example div, #sb-search-input-example em, #sb-search-input-example h1, #sb-search-input-example h2, #sb-search-input-example h3, #sb-search-input-example h4, #sb-search-input-example h5, #sb-search-input-example p, #sb-search-input-example span {\n            font-size: inherit;\n            font-weight: inherit;\n            text-transform: inherit;\n            color: inherit\n        }\n\n        #sb-search-input-example a, #sb-search-input-example a * {\n            cursor: pointer;\n            user-select: none\n        }\n\n        #sb-search-input-example * {\n            box-sizing: border-box\n        }\n\n\n        #sb-search-input-example .sb-content {\n            background: rgba(238, 238, 238, .82);\n            backdrop-filter: blur(30px);\n            -webkit-backdrop-filter: blur(30px);\n            border-radius: 46px;\n            display: block;\n            text-align: left;\n            width: 100%;\n            top: calc(120px - 92px);\n            margin-bottom: 0;\n            overflow: hidden;\n            z-index: 1000\n        }\n\n        #sb-search-input-example .sb-content.sb-hero {\n            top: 0px;\n            max-width: 660px;\n            height: auto;\n            z-index: 800;\n            background-color: rgba(202, 202, 202, 0.2);\n            -webkit-backdrop-filter: blur(30px);\n            backdrop-filter: blur(30px)\n        }\n\n        #sb-search-input-example .sb-search {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(30px);\n            -webkit-backdrop-filter: blur(30px);\n            border-radius: 116px;\n            border: 0 none;\n            height: 58px;\n            width: auto;\n            margin: 16px;\n            display: flex;\n            z-index: 999;\n            position: relative;\n        }\n\n        #sb-search-input-example .sb-search.sb-hero {\n            padding: 0 0 0 16px;\n            background-color: white;\n        }\n\n        #sb-search-input-example .sb-input {\n            align-items: center;\n            display: flex;\n            height: 100%;\n            width: 100%;\n            border-radius: 100%;\n            padding: 0 0 0 8px\n        }\n\n        #sb-search-input-example input {\n            outline: 0;\n            color: #007cff;\n            background-color: rgba(0, 0, 0, 0);\n            -webkit-appearance: none\n        }\n\n        #sb-search-input-example ::placeholder {\n            color: #8a8a8a;\n            opacity: 1\n\n        }\n\n        #sb-search-input-example input[type=search]::-ms-clear {\n            display: none;\n            width: 0;\n            height: 0\n        }\n\n        #sb-search-input-example input[type=search]::-ms-reveal {\n            display: none;\n            width: 0;\n            height: 0\n        }\n\n        #sb-search-input-example input[type=search]::-webkit-search-cancel-button, #sb-search-input-example input[type=search]::-webkit-search-decoration, #sb-search-input-example input[type=search]::-webkit-search-results-button, #sb-search-input-example input[type=search]::-webkit-search-results-decoration {\n            display: none\n        }\n\n        #sb-search-input-example .sb-search-field {\n            border: 0 none;\n            height: 100%;\n            width: 100%;\n            font-size: 18px;\n            display: block\n        }\n\n        #sb-search-input-example .sb-icon {\n            font: normal normal 400 26px font-sb;\n            line-height: 26px;\n            align-items: center;\n            padding: 10px;\n            speak: none;\n            display: inline-block;\n            text-decoration: inherit;\n            text-align: center;\n            text-transform: none;\n            cursor: pointer;\n            margin: 0;\n        }\n\n        #sb-search-input-example .sb-search-icon {\n            box-sizing: border-box;\n            border: 0px;\n            margin-right: 7px;\n            align-items: center;\n            border-radius: 50%;\n            background: #007cff;\n            color: #fff;\n            cursor: pointer;\n            display: flex;\n        }\n\n        @media (prefers-color-scheme: dark) {\n\n            #sb-search-input-example .sb-search.sb-hero {\n                background-color: rgba(0, 0, 0, 0.7);\n            }\n\n            #sb-search-input-example .sb-content {\n                background: rgba(20, 20, 20, .8);\n            }\n\n\n            #sb-search-input-example .sb-search {\n                background: rgba(0, 0, 0, 0.7);\n            }\n\n            #sb-search-input-example .sb-icon {\n                color: #fff;\n            }\n\n            #sb-search-input-example input {\n                outline: 0;\n                color: #5eb2fe;\n                -webkit-appearance: none;\n            }\n\n            #sb-search-input-example ::placeholder {\n                color: #b5b5b5;\n                opacity: 1;\n            }\n\n        }\n\t" } } />
                </div>

                <a className="github-corner" href="https://github.com/bgoonz/BGOONZ_BLOG_2.0" aria-label="View source on Github">
                    <svg
                        aria-hidden="true"
                        width={ 30 }
                        height={ 30 }
                        viewBox="0 0 250 250"
                        style={ {
                            zIndex: 100_000,
                            fill: 'black',
                            color: '#fff',
                            position: 'fixed',
                            top: '0px',
                            border: 1,
                            left: '0px',
                            transform: 'scale(-1.5, 1.5)'
                        } }
                    >
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                        <path className={ "octo-arm" }
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor"
                        style={ { transformOrigin: '130px 106px' } } />
                        <path className="octo-body"
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor" />
                    </svg>
                </a>
            </header>
        );
    }
}
