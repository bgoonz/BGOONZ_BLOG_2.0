import _ from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import "../sass/main.scss";
import { attribute, withPrefix } from "../utils";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  const { children } = props;
  const frontmatter = _.get(props, "pageContext.frontmatter", {});
  const siteMetadata = _.get(props, "pageContext.site.siteMetadata", {});
  const seo = _.get(frontmatter, "seo", {});
  const title = seo.title || `${frontmatter.title} | ${siteMetadata.title}`;
  const description = seo.description || "";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content="Bryan Guner" />
        <meta name="twitter:site" content="@bgoonz" />
        <meta name="twitter:creator" content="@bgoonz" />
        <meta name="twitter:image:src" content="/logo-circle.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Resource Hub Bryan Guner"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="keywords" content="HTML, Meta Tags, Metadata" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU"
        />
        <meta
          name="google-site-verification"
          content="JzC5eRJ3cpAJk6gfrMzLwxEhOd3QnM6c6AYP8-1EWiw"
        />
        {seo.robots && <meta name="robots" content={_.join(seo.robots, ",")} />}
        {_.map(seo.extra, (meta, metaIndex) => {
          const keyName = meta.keyName || "name";
          const domain = _.trim(siteMetadata.domain, "/");
          const content = meta.relativeUrl
            ? domain + withPrefix(meta.value)
            : meta.value;

          if (meta.relativeUrl && !siteMetadata.domain) {
            return null;
          }

          return (
            <meta
              key={metaIndex}
              {...attribute(keyName, meta.name)}
              content={content}
            />
          );
        })}
        <link rel="apple-touch-icon" href="/logo-circle.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://d33wubrfki0l68.cloudfront.net/e5662f0d4f3e7730aea1a0faf7ff09ea20184700/83eb0/images/home-button.png"
          rel="apple-touch-icon"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200,100,400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {siteMetadata.favicon && (
          <link rel="icon" href={withPrefix(siteMetadata.favicon)} />
        )}
        <body className={`palette-${siteMetadata.palette}`} />
      </Helmet>
      <div id="page" className="site">
        <Header {...props} />
        <main id="content" className="site-content">
          {children}
        </main>
        <Footer {...props} />
      </div>
    </>
  );
}
