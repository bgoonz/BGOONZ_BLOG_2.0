/* The Body class is a React component that renders the page's body */
import _ from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import "../sass/main.scss";
import { attribute, withPrefix } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {" "}
            {_.get(this.props, "pageContext.frontmatter.seo.title", null)
              ? _.get(this.props, "pageContext.frontmatter.seo.title", null)
              : _.get(this.props, "pageContext.frontmatter.title", null) +
                " | " +
                _.get(
                  this.props,
                  "pageContext.site.siteMetadata.title",
                  null
                )}{" "}
          </title>
          <meta charSet="utf-8" />
          <meta charset="UTF-8" />
          <meta name="description"></meta>
          <meta name="Author" content="Bryan Guner" />
          <meta name="twitter:site" content="@bgoonz" />
          <meta http-equiv="Content-Type" content="HTML" />
          <meta name="twitter:creator" content="@bgoonz" />
          <link rel="apple-touch-icon" href="logo-circle.png" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="HTML, Meta Tags, Metadata" />
          <meta name="twitter:image:src" content="/logo-circle.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            http-equiv="Content-Type"
            content="text/html; charset=us-ascii"
          />
          <meta
            name="twitter:title"
            content="Web Development Resource Hub Bryan Guner"
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          <meta
            name="google-site-verification"
            content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU"
          />
          <meta
            name="google-site-verification"
            content="JzC5eRJ3cpAJk6gfrMzLwxEhOd3QnM6c6AYP8-1EWiw"
          />
          <link
            href="https://d33wubrfki0l68.cloudfront.net/e5662f0d4f3e7730aea1a0faf7ff09ea20184700/83eb0/images/home-button.png"
            rel="apple-touch-icon"
          />
          <link
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Raleway:200,100,400"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          content=
          {_.get(this.props, "pageContext.frontmatter.seo.description", null) ||
            ""}
          />{" "}
          {_.get(this.props, "pageContext.frontmatter.seo.robots", null) && (
            <meta
              name="robots"
              content={_.join(
                _.get(this.props, "pageContext.frontmatter.seo.robots", null),
                ","
              )}
            />
          )}
          {_.map(
            _.get(this.props, "pageContext.frontmatter.seo.extra", null),
            (meta, meta_idx) => {
              let key_name = _.get(meta, "keyName", null) || "name";
              return _.get(meta, "relativeUrl", null) ? (
                _.get(
                  this.props,
                  "pageContext.site.siteMetadata.domain",
                  null
                ) &&
                  (() => {
                    let domain = _.trim(
                      _.get(
                        this.props,
                        "pageContext.site.siteMetadata.domain",
                        null
                      ),
                      "/"
                    );
                    let rel_url = withPrefix(_.get(meta, "value", null));
                    let full_url = domain + rel_url;
                    return (
                      <meta
                        key={meta_idx}
                        {...attribute(key_name, _.get(meta, "name", null))}
                        content={full_url}
                      />
                    );
                  })()
              ) : (
                <meta
                  key={meta_idx + ".1"}
                  {...attribute(key_name, _.get(meta, "name", null))}
                  content={_.get(meta, "value", null)}
                />
              );
            }
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />{" "}
          {_.get(this.props, "pageContext.site.siteMetadata.favicon", null) && (
            <link
              rel="icon"
              href={withPrefix(
                _.get(this.props, "pageContext.site.siteMetadata.favicon", null)
              )}
            />
          )}
          <body
            className={
              "palette-" +
              _.get(this.props, "pageContext.site.siteMetadata.palette", null)
            }
          />
        </Helmet>
        <div id="page" className="site">
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}{" "}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
