import React from 'react';

import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix, attribute } from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        {_.get(this.props, 'pageContext.frontmatter.seo.title', null)
                            ? _.get(this.props, 'pageContext.frontmatter.seo.title', null)
                            : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}
                    </title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} 
                      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
                    />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                        <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')} />
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) &&
                                (() => {
                                    let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                    let rel_url = withPrefix(_.get(meta, 'value', null));
                                    let full_url = domain + rel_url;
                                    return <meta key={meta_idx} {...attribute(key_name, _.get(meta, 'name', null))} content={full_url} />;
                                })()
                        ) : (
                            <meta key={meta_idx + '.1'} {...attribute(key_name, _.get(meta, 'name', null))} content={_.get(meta, 'value', null)} />
                        );
                    })}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                        <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))} />
                    )}
                    <body className={'palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)} />
                </Helmet>
                <div id="page" className="site">
                    <Header {...this.props} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
