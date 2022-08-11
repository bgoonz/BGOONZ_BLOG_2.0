import _ from "lodash";
import React from "react";
import {Helmet} from "react-helmet";
import "../sass/main.scss";
import {attribute, withPrefix} from "../utils";
import Footer from "./Footer";
import Header from "./Header";
export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title> {
                        _.get(this.props, "pageContext.frontmatter.seo.title", null) ? _.get(this.props, "pageContext.frontmatter.seo.title", null) : `${_.get(this.props, "pageContext.frontmatter.title", null)} | ${_.get(this.props, "pageContext.site.siteMetadata.title", null)}`
                    } </title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                    <meta name="google-site-verification" content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU"/>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="apple-touch-icon" href="logo-circle.png"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta http-equiv="Content-Type" content="HTML"/>
                    <meta name="Author" content="Bryan Guner"/>
                    <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:site" content="@bgoonz"/>
                    <meta name="twitter:creator" content="@bgoonz"/>
                    <meta name="twitter:image:src" content="/logo-circle.png"/>
                    <meta name="twitter:title" content="Web Development Resource Hub Bryan Guner"/>
                    <meta property="twitter:card" content="summary_large_image"/>
                    <link href="https://instructure-uploads-pdx.s3.us-west-2.amazonaws.com/account_168550000000000001/attachments/537/logo-canvas.png" rel="apple-touch-icon"/>
                    <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet"/>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                    <meta name="description"
                        content={
                            _.get(this.props, "pageContext.frontmatter.seo.description", null) || ""
                        }/> {
                    _.get(this.props, "pageContext.frontmatter.seo.robots", null) && (
                        <meta name="robots"
                            content={
                                _.join(_.get(this.props, "pageContext.frontmatter.seo.robots", null), ",")
                            }/>
                    )
                }
                    {
                    _.map(_.get(this.props, "pageContext.frontmatter.seo.extra", null), (meta, meta_idx) => {
                        const key_name = _.get(meta, "keyName", null) || "name";
                        return _.get(meta, "relativeUrl", null) ? (_.get(this.props, "pageContext.site.siteMetadata.domain", null) && (() => {
                            const domain = _.trim(_.get(this.props, "pageContext.site.siteMetadata.domain", null), "/");
                            const rel_url = withPrefix(_.get(meta, "value", null));
                            const full_url = domain + rel_url;
                            return (
                                <meta key={meta_idx}
                                    {...attribute(key_name, _.get(meta, "name", null))}
                                    content={full_url}/>
                            );
                        })()) : (
                            <meta key={
                                    `${meta_idx}.1`
                                }
                                {...attribute(key_name, _.get(meta, "name", null))}
                                content={
                                    _.get(meta, "value", null)
                                }/>
                        );
                    })
                }
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/> {
                    _.get(this.props, "pageContext.site.siteMetadata.favicon", null) && (
                        <link rel="icon"
                            href={
                                withPrefix(_.get(this.props, "pageContext.site.siteMetadata.favicon", null))
                            }/>
                    )
                }
                    <body className={
                        "palette-" + _.get(this.props, "pageContext.site.siteMetadata.palette", null)
                    }/>
                </Helmet>
                <div id="page" className="site">
                    <Header {...this.props}/>
                    <main id="content" className="site-content">
                  
                        {
                        this.props.children
                    } </main>
                    <Footer {...this.props}/>


                </div>
            </React.Fragment>
        );
    }
}
