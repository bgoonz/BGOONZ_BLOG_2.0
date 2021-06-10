<h1 align="center">Hi 👋, I'm Bryan</h1>

---

<div align="center">

### [WEBSITE](https://best-celery-b2d7c.netlify.app/)

![Profile views](https://views.whatilearened.today/views/github/bgoonz/views.svg)[![Gitter](https://badges.gitter.im/bgoonz/community.svg)](https://gitter.im/bgoonz/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

<img align="center" src="https://github.com/bgoonz/bgoonz/blob/master/circle-small-sharp.png?raw=true?raw=true" ></img>

[![](http://img.youtube.com/vi/xGZSWvFess8/0.jpg)](http://www.youtube.com/watch?v=xGZSWvFess8 "Ancestrial Solo")

[![Netlify Status](https://api.netlify.com/api/v1/badges/a1b7ee1a-11a7-4bd2-a341-2260656e216f/deploy-status)](https://app.netlify.com/sites/best-celery-b2d7c/deploys)

![blog](https://github.com/bgoonz/BGOONZ_BLOG_2.0/blob/master/static/images/blog.png?raw=true)

</div>


# Components:



---
```js

import React from "react";
import _ from "lodash";

import { Link, withPrefix, classNames } from "../utils";
import Icon from "./Icon";

export default class ActionLink extends React.Component {
  render() {
    let action = _.get(this.props, "action", null);
    return (
      <Link
        to={withPrefix(_.get(action, "url", null))}
        {...(_.get(action, "new_window", null) ? { target: "_blank" } : null)}
        {...(_.get(action, "new_window", null) ||
        _.get(action, "no_follow", null)
          ? {
              rel:
                (_.get(action, "new_window", null) ? "noopener " : "") +
                (_.get(action, "no_follow", null) ? "nofollow" : ""),
            }
          : null)}
        className={classNames({
          button: _.get(action, "style", null) !== "link",
          "button-secondary": _.get(action, "style", null) === "secondary",
          "button-icon": _.get(action, "style", null) === "icon",
        })}
      >
        {_.get(action, "style", null) === "icon" &&
        _.get(action, "icon_class", null) ? (
          <React.Fragment>
            <Icon {...this.props} icon={_.get(action, "icon_class", null)} />
            <span className="screen-reader-text">
              {_.get(action, "label", null)}
            </span>
          </React.Fragment>
        ) : (
          _.get(action, "label", null)
        )}
      </Link>
    );
  }
}
```
---

---
```js

import React from "react";
import _ from "lodash";

import { Link, withPrefix, classNames } from "../utils";

export default class CtaButtons extends React.Component {
  render() {
    let actions = _.get(this.props, "actions", null);
    return _.map(actions, (action, action_idx) => (
      <Link
        key={action_idx}
        to={withPrefix(_.get(action, "url", null))}
        {...(_.get(action, "new_window", null) ? { target: "_blank" } : null)}
        {...(_.get(action, "new_window", null) ||
        _.get(action, "no_follow", null)
          ? {
              rel:
                (_.get(action, "new_window", null) ? "noopener " : "") +
                (_.get(action, "no_follow", null) ? "nofollow" : ""),
            }
          : null)}
        className={classNames({
          button:
            _.get(action, "style", null) === "primary" ||
            _.get(action, "style", null) === "secondary",
          "button-secondary": _.get(action, "style", null) === "secondary",
        })}
      >
        {_.get(action, "label", null)}
      </Link>
    ));
  }
}
```
---
---



---

```js
import React from "react";
import _ from "lodash";

import {
  getPage,
  classNames,
  Link,
  withPrefix,
  pathJoin,
  getPages,
} from "../utils";
import DocsSubmenu from "./DocsSubmenu";

export default class DocsMenu extends React.Component {
  render() {
    let site = _.get(this.props, "site", null);
    let page = _.get(this.props, "page", null);
    let root_docs_path = _.get(site, "data.doc_sections.root_docs_path", null);
    let root_page = getPage(this.props.pageContext.pages, root_docs_path);
    return (
      <nav id="docs-nav" className="docs-nav">
        <div id="docs-nav-inside" className="docs-nav-inside sticky">
          <button id="docs-nav-toggle" className="docs-nav-toggle">
            Navigate Docs
            <span className="icon-angle-right" aria-hidden="true" />
          </button>
          <div className="docs-nav-menu">
            <ul id="docs-menu" className="docs-menu">
              <li
                className={classNames("docs-menu-item", {
                  current:
                    _.get(page, "url", null) === _.get(root_page, "url", null),
                })}
              >
                <Link to={withPrefix(_.get(root_page, "url", null))}>
                  {_.get(root_page, "frontmatter.title", null)}
                </Link>
              </li>
              {_.map(
                _.get(site, "data.doc_sections.sections", null),
                (section, section_idx) => {
                  let section_path = pathJoin(root_docs_path, section);
                  let section_page = getPage(
                    this.props.pageContext.pages,
                    section_path
                  );
                  let child_pages = _.orderBy(
                    getPages(this.props.pageContext.pages, section_path),
                    "frontmatter.weight"
                  );
                  let child_count = _.size(child_pages);
                  let has_children = child_count > 0 ? true : false;
                  let is_current_page =
                    _.get(page, "url", null) ===
                    _.get(section_page, "url", null)
                      ? true
                      : false;
                  let is_active = _.get(page, "url", null).startsWith(
                    _.get(section_page, "url", null)
                  );
                  return (
                    <React.Fragment key={section_idx + ".1"}>
                      <li
                        key={section_idx}
                        className={classNames("docs-menu-item", {
                          "has-children": has_children,
                          current: is_current_page,
                          active: is_active,
                        })}
                      >
                        <Link to={withPrefix(_.get(section_page, "url", null))}>
                          {_.get(section_page, "frontmatter.title", null)}
                        </Link>
                        {has_children && (
                          <React.Fragment>
                            <button className="docs-submenu-toggle">
                              <span className="screen-reader-text">
                                Submenu
                              </span>
                              <span
                                className="icon-angle-right"
                                aria-hidden="true"
                              />
                            </button>
                            <DocsSubmenu
                              {...this.props}
                              child_pages={child_pages}
                              page={page}
                              site={site}
                            />
                          </React.Fragment>
                        )}
                      </li>
                    </React.Fragment>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

---

---


import React from "react";
import _ from "lodash";

import { classNames, Link, withPrefix } from "../utils";

export default class DocsSubmenu extends React.Component {
  render() {
    let child_pages = _.get(this.props, "child_pages", null);
    let page = _.get(this.props, "page", null);
    return (
      <ul className="docs-submenu">
        {_.map(child_pages, (child_page, child_page_idx) => (
          <li
            key={child_page_idx}
            className={classNames("docs-menu-item", {
              current:
                _.get(page, "url", null) === _.get(child_page, "url", null),
            })}
          >
            <Link to={withPrefix(_.get(child_page, "url", null))}>
              {_.get(child_page, "frontmatter.title", null)}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
```
---
---

```js
import React from "react";
import _ from "lodash";

import { htmlToReact } from "../utils";
import ActionLink from "./ActionLink";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="colophon" className="site-footer outer">
        <div className="inner">
          <div className="site-footer-inside">
            <p className="site-info">
              {_.get(
                this.props,
                "pageContext.site.siteMetadata.footer.content",
                null
              ) && (
                <span className="copyright">
                  {htmlToReact(
                    _.get(
                      this.props,
                      "pageContext.site.siteMetadata.footer.content",
                      null
                    )
                  )}
                </span>
              )}
              {_.map(
                _.get(
                  this.props,
                  "pageContext.site.siteMetadata.footer.links",
                  null
                ),
                (action, action_idx) => (
                  <ActionLink
                    key={action_idx}
                    {...this.props}
                    action={action}
                  />
                )
              )}
            </p>
            {_.get(
              this.props,
              "pageContext.site.siteMetadata.footer.has_social",
              null
            ) && (
              <div className="social-links">
                {_.map(
                  _.get(
                    this.props,
                    "pageContext.site.siteMetadata.footer.social_links",
                    null
                  ),
                  (action, action_idx) => (
                    <ActionLink
                      key={action_idx}
                      {...this.props}
                      action={action}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }
}
```
---
---
```js

import React from "react";
import _ from "lodash";

import { Link, withPrefix, classNames } from "../utils";
import ActionLink from "./ActionLink";
import Submenu from "./Submenu";

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header outer">
        <div className="inner">
          <div className="site-header-inside">
            <div className="site-branding">
              {_.get(
                this.props,
                "pageContext.site.siteMetadata.header.logo_img",
                null
              ) ? (
                <p className="site-logo">
                  <Link
                    to={withPrefix(
                      _.get(
                        this.props,
                        "pageContext.site.siteMetadata.header.url",
                        null
                      ) || "/"
                    )}
                  >
                    <img
                      src={withPrefix(
                        _.get(
                          this.props,
                          "pageContext.site.siteMetadata.header.logo_img",
                          null
                        )
                      )}
                      alt={_.get(
                        this.props,
                        "pageContext.site.siteMetadata.header.logo_img_alt",
                        null
                      )}
                    />
                  </Link>
                </p>
              ) : (
                <p className="site-title">
                  <Link
                    to={withPrefix(
                      _.get(
                        this.props,
                        "pageContext.site.siteMetadata.header.url",
                        null
                      ) || "/"
                    )}
                  >
                    {_.get(
                      this.props,
                      "pageContext.site.siteMetadata.header.title",
                      null
                    )}
                  </Link>
                </p>
              )}
            </div>
            {_.get(
              this.props,
              "pageContext.site.siteMetadata.header.has_nav",
              null
            ) && (
              <React.Fragment>
                <nav
                  id="main-navigation"
                  className="site-navigation"
                  aria-label="Main Navigation"
                >
                  <div className="site-nav-inside">
                    <button id="menu-close" className="menu-toggle">
                      <span className="screen-reader-text">Open Menu</span>
                      <span className="icon-close" aria-hidden="true" />
                    </button>
                    <ul className="menu">
                      {_.map(
                        _.get(
                          this.props,
                          "pageContext.site.siteMetadata.header.nav_links",
                          null
                        ),
                        (action, action_idx) => {
                          let page_url = _.trim(
                            _.get(this.props, "pageContext.url", null),
                            "/"
                          );
                          let action_url = _.trim(
                            _.get(action, "url", null),
                            "/"
                          );
                          return (
                            <li
                              key={action_idx}
                              className={classNames("menu-item", {
                                "has-children":
                                  _.get(action, "has_subnav", null) &&
                                  _.get(action, "subnav_links", null),
                                current: page_url === action_url,
                                "menu-button":
                                  _.get(action, "style", null) !== "link",
                              })}
                            >
                              <ActionLink {...this.props} action={action} />
                              {_.get(action, "has_subnav", null) &&
                                _.get(action, "subnav_links", null) && (
                                  <React.Fragment>
                                    <button className="submenu-toggle">
                                      <span
                                        className="icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Sub-menu
                                      </span>
                                    </button>
                                    <Submenu
                                      {...this.props}
                                      submenu={_.get(
                                        action,
                                        "subnav_links",
                                        null
                                      )}
                                      menu_class={"submenu"}
                                      page={this.props.pageContext}
                                    />
                                  </React.Fragment>
                                )}
                            </li>
                          );
                        }
                      )}
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
      </header>
    );
  }
}
```
---
---
```js

import React from "react";
import _ from "lodash";

export default class Icon extends React.Component {
  render() {
    let icon = _.get(this.props, "icon", null);
    return (
      <svg
        className="icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon === "dev" ? (
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
        ) : icon === "facebook" ? (
          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
        ) : icon === "github" ? (
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        ) : icon === "instagram" ? (
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
        ) : icon === "linkedin" ? (
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        ) : icon === "pinterest" ? (
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        ) : icon === "reddit" ? (
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        ) : icon === "twitter" ? (
          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
        ) : icon === "youtube" ? (
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
        ) : (
          icon === "vimeo" && (
            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
          )
        )}
      </svg>
    );
  }
}
```
---
---
```js

import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";

import { withPrefix, attribute } from "../utils";
import "../sass/main.scss";
import Header from "./Header";
import Footer from "./Footer";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, "pageContext.frontmatter.seo.title", null)
              ? _.get(this.props, "pageContext.frontmatter.seo.title", null)
              : _.get(this.props, "pageContext.frontmatter.title", null) +
                " | " +
                _.get(this.props, "pageContext.site.siteMetadata.title", null)}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initialScale=1.0"
          />
          <meta
            name="description"
            content={
              _.get(
                this.props,
                "pageContext.frontmatter.seo.description",
                null
              ) || ""
            }
          />
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
          />
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
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
```
---
---

```js
import React from "react";
import _ from "lodash";

import { classNames, withPrefix, markdownify } from "../utils";
import CtaButtons from "./CtaButtons";

export default class SectionContent extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className="block block-text outer"
      >
        <div className="inner">
          <div
            className={classNames("grid", "grid-middle", "grid-center", {
              "grid-swap":
                _.get(section, "image", null) &&
                _.get(section, "image_position", null) === "right",
            })}
          >
            {_.get(section, "image", null) && (
              <div className="grid-item block-image">
                <img
                  src={withPrefix(_.get(section, "image", null))}
                  alt={_.get(section, "image_alt", null)}
                />
              </div>
            )}
            <div className="grid-item block-body">
              {_.get(section, "title", null) && (
                <div className="block-header">
                  <h2 className="block-title">
                    {_.get(section, "title", null)}
                  </h2>
                </div>
              )}
              {_.get(section, "content", null) && (
                <div className="block-content">
                  {markdownify(_.get(section, "content", null))}
                </div>
              )}
              {_.get(section, "actions", null) && (
                <div className="block-buttons">
                  <CtaButtons
                    {...this.props}
                    actions={_.get(section, "actions", null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
```
---
---
```js

import React from "react";
import _ from "lodash";

import { htmlToReact } from "../utils";
import CtaButtons from "./CtaButtons";

export default class SectionCta extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className="block block-cta outer"
      >
        <div className="inner">
          <div className="has-gradient">
            <div className="grid grid-middle grid-center">
              {(_.get(section, "title", null) ||
                _.get(section, "subtitle", null)) && (
                <div className="grid-item block-header">
                  {_.get(section, "title", null) && (
                    <h2 className="block-title">
                      {_.get(section, "title", null)}
                    </h2>
                  )}
                  {_.get(section, "subtitle", null) && (
                    <p className="block-subtitle">
                      {htmlToReact(_.get(section, "subtitle", null))}
                    </p>
                  )}
                </div>
              )}
              {_.get(section, "actions", null) && (
                <div className="grid-item block-buttons">
                  <CtaButtons
                    {...this.props}
                    actions={_.get(section, "actions", null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
```
---
---

```js
import React from "react";
import _ from "lodash";

import {
  classNames,
  htmlToReact,
  pathJoin,
  getPage,
  Link,
  withPrefix,
} from "../utils";

export default class SectionDocs extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={classNames("block", "block-grid", "outer", {
          "has-header":
            _.get(section, "title", null) || _.get(section, "subtitle", null),
        })}
      >
        <div className="inner">
          {(_.get(section, "title", null) ||
            _.get(section, "subtitle", null)) && (
            <div className="block-header inner-sm">
              {_.get(section, "title", null) && (
                <h2 className="block-title">{_.get(section, "title", null)}</h2>
              )}
              {_.get(section, "subtitle", null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, "subtitle", null))}
                </p>
              )}
            </div>
          )}
          <div className="block-content">
            <div
              className={classNames("grid", {
                "grid-col-2": _.get(section, "col_number", null) === "two",
                "grid-col-3": _.get(section, "col_number", null) === "three",
              })}
            >
              {_.map(
                _.get(
                  this.props,
                  "pageContext.site.data.doc_sections.sections",
                  null
                ),
                (doc_section, doc_section_idx) => {
                  let doc_section_path = pathJoin(
                    _.get(
                      this.props,
                      "pageContext.site.data.doc_sections.root_docs_path",
                      null
                    ),
                    doc_section
                  );
                  let doc_section_page = getPage(
                    this.props.pageContext.pages,
                    doc_section_path
                  );
                  return (
                    <div key={doc_section_idx} className="grid-item">
                      <div className="grid-item-inside">
                        <h3 className="grid-item-title line-left">
                          <Link
                            to={withPrefix(
                              _.get(doc_section_page, "url", null)
                            )}
                          >
                            {_.get(doc_section_page, "frontmatter.title", null)}
                          </Link>
                        </h3>
                        {_.get(
                          doc_section_page,
                          "frontmatter.excerpt",
                          null
                        ) && (
                          <div className="grid-item-content">
                            <p>
                              {htmlToReact(
                                _.get(
                                  doc_section_page,
                                  "frontmatter.excerpt",
                                  null
                                )
                              )}
                            </p>
                          </div>
                        )}
                        <div className="grid-item-buttons">
                          <Link
                            to={withPrefix(
                              _.get(doc_section_page, "url", null)
                            )}
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
```
---
---
```js

import React from "react";
import _ from "lodash";

import {
  classNames,
  htmlToReact,
  withPrefix,
  Link,
  markdownify,
} from "../utils";
import CtaButtons from "./CtaButtons";

export default class SectionGrid extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={classNames("block", "block-grid", "outer", {
          "has-header":
            _.get(section, "title", null) || _.get(section, "subtitle", null),
        })}
      >
        <div className="inner">
          {(_.get(section, "title", null) ||
            _.get(section, "subtitle", null)) && (
            <div className="block-header inner-sm">
              {_.get(section, "title", null) && (
                <h2 className="block-title">{_.get(section, "title", null)}</h2>
              )}
              {_.get(section, "subtitle", null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, "subtitle", null))}
                </p>
              )}
            </div>
          )}
          {_.get(section, "grid_items", null) && (
            <div className="block-content">
              <div
                className={classNames("grid", {
                  "grid-col-2": _.get(section, "col_number", null) === "two",
                  "grid-col-3": _.get(section, "col_number", null) === "three",
                })}
              >
                {_.map(_.get(section, "grid_items", null), (item, item_idx) => (
                  <div key={item_idx} className="grid-item">
                    <div className="grid-item-inside">
                      {_.get(item, "image", null) && (
                        <div className="grid-item-image">
                          <img
                            src={withPrefix(_.get(item, "image", null))}
                            alt={_.get(item, "image_alt", null)}
                          />
                        </div>
                      )}
                      {_.get(item, "title", null) && (
                        <h3 className="grid-item-title line-left">
                          {_.get(item, "title_url", null) ? (
                            <Link
                              to={withPrefix(_.get(item, "title_url", null))}
                            >
                              {_.get(item, "title", null)}
                            </Link>
                          ) : (
                            _.get(item, "title", null)
                          )}
                        </h3>
                      )}
                      {_.get(item, "content", null) && (
                        <div className="grid-item-content">
                          {markdownify(_.get(item, "content", null))}
                        </div>
                      )}
                      {_.get(item, "actions", null) && (
                        <div className="grid-item-buttons">
                          <CtaButtons
                            {...this.props}
                            actions={_.get(item, "actions", null)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
```
---
---
```js

import React from "react";
import _ from "lodash";

import { toStyleObj, withPrefix, markdownify } from "../utils";
import CtaButtons from "./CtaButtons";

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className="block block-hero has-gradient outer"
      >
        {_.get(section, "image", null) && (
          <div
            className="bg-img"
            style={toStyleObj(
              "background-image: url('" +
                withPrefix(_.get(section, "image", null)) +
                "')"
            )}
          />
        )}
        <div className="inner-sm">
          {_.get(section, "title", null) && (
            <div className="block-header">
              <h1 className="block-title">{_.get(section, "title", null)}</h1>
            </div>
          )}
          {_.get(section, "content", null) && (
            <div className="block-content">
              {markdownify(_.get(section, "content", null))}
            </div>
          )}
          {_.get(section, "actions", null) && (
            <div className="block-buttons">
              <CtaButtons
                {...this.props}
                actions={_.get(section, "actions", null)}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}
```
---
---

```js
import React from "react";
import _ from "lodash";

import { classNames } from "../utils";
import ActionLink from "./ActionLink";

export default class Submenu extends React.Component {
  render() {
    let page = _.get(this.props, "page", null);
    return (
      <ul className={_.get(this.props, "menu_class", null)}>
        {_.map(_.get(this.props, "submenu", null), (action, action_idx) => {
          let page_url = _.trim(_.get(page, "url", null), "/");
          let action_url = _.trim(_.get(action, "url", null), "/");
          return (
            <li
              key={action_idx}
              className={classNames("menu-item", {
                current: page_url === action_url,
                "menu-button": _.get(action, "style", null) !== "link",
              })}
            >
              <ActionLink {...this.props} action={action} />
            </li>
          );
        })}
      </ul>
    );
  }
}
```
---

```js
import ActionLink from "./ActionLink";
import CtaButtons from "./CtaButtons";
import DocsMenu from "./DocsMenu";
import DocsSubmenu from "./DocsSubmenu";
import Footer from "./Footer";
import Header from "./Header";
import Icon from "./Icon";
import SectionContent from "./SectionContent";
import SectionCta from "./SectionCta";
import SectionDocs from "./SectionDocs";
import SectionGrid from "./SectionGrid";
import SectionHero from "./SectionHero";
import Submenu from "./Submenu";
import Layout from "./Layout";

export {
  ActionLink,
  CtaButtons,
  DocsMenu,
  DocsSubmenu,
  Footer,
  Header,
  Icon,
  SectionContent,
  SectionCta,
  SectionDocs,
  SectionGrid,
  SectionHero,
  Submenu,
  Layout,
};

export default {
  ActionLink,
  CtaButtons,
  DocsMenu,
  DocsSubmenu,
  Footer,
  Header,
  Icon,
  SectionContent,
  SectionCta,
  SectionDocs,
  SectionGrid,
  SectionHero,
  Submenu,
  Layout,
};
```
---




















<div  align="center" style=" border: 1px solid black">

## Blog

- [introductory-react-part-2](https://bryanguner.medium.com/introductory-react-part-2-cda01615a186?source=your_stories_page-------------------------------------)

- [a-very-quick-guide-to-calculating-big-o-computational-complexity](https://bryanguner.medium.com/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3?source=your_stories_page-------------------------------------)

- [introduction-to-react-for-complete-beginners](https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad?source=your_stories_page-------------------------------------)

- [scheduling-settimeout-and-setinterval](https://javascript.plainenglish.io/scheduling-settimeout-and-setinterval-fcb2f40d16f7?source=your_stories_page-------------------------------------)

- [css-animations](https://bryanguner.medium.com/css-animations-d196a20099a5?source=your_stories_page-------------------------------------)

- [these-are-the-bash-shell-commands-that-stand-between-me-and-insanity](https://bryanguner.medium.com/these-are-the-bash-shell-commands-that-stand-between-me-and-insanity-984865ba5d1b?source=your_stories_page-------------------------------------)

- [how-to-implement-native-es6-data-structures-using-arrays-objects](https://bryanguner.medium.com/how-to-implement-native-es6-data-structures-using-arrays-objects-ce953b9f6a07?source=your_stories_page-------------------------------------)

- [objects-in-javascript](https://medium.com/codex/objects-in-javascript-cc578a781e1d?source=your_stories_page-------------------------------------)

- [absolute-beginners-guide-to-javascript-part1](https://javascript.plainenglish.io/absolute-beginners-guide-to-javascript-part-1-e222d166b6e1?source=your_stories_page-------------------------------------)

- [web-developer-resource-list-part-4](https://medium.com/star-gazers/web-developer-resource-list-part-4-fd686892b9eb?source=your_stories_page-------------------------------------)

- [vscode-extensions-specifically-for-javascript-development](https://medium.com/codex/vscode-extensions-specifically-for-javascript-development-ea91305cbd4a?source=your_stories_page-------------------------------------)

- [a-list-of-all-of-my-articles-to-link-to-future-posts](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b?source=your_stories_page-------------------------------------)

- [lists-stacks-and-queues-in-javascript](https://javascript.plainenglish.io/lists-stacks-and-queues-in-javascript-88466fae0fbb?source=your_stories_page-------------------------------------)

- [web-development-resources-part-3](https://bryanguner.medium.com/web-development-resources-part-3-f862ceb2b82a?source=your_stories_page-------------------------------------)

- [web-development-interview-part-3](https://medium.com/codex/web-development-interview-part-3-826ae81a9107?source=your_stories_page-------------------------------------)

- [running-list-of-interesting-articles-tools](https://bryanguner.medium.com/running-list-of-interesting-articles-tools-and-ideas-as-i-explore-them-b87a2f04d9a6?source=your_stories_page-------------------------------------)

- [the-best-cloud-based-code-playgrounds-of-2021-part-1](https://bryanguner.medium.com/the-best-cloud-based-code-playgrounds-of-2021-part-1-cdae9448db24?source=your_stories_page-------------------------------------)

- [front-end-interview-questions-part-2](https://medium.com/codex/front-end-interview-questions-part-2-86ddc0e91443?source=your_stories_page-------------------------------------)

- [web-developer-resource-list-part-2](https://medium.com/star-gazers/web-developer-resource-list-part-2-9c5cb56ab263?source=your_stories_page-------------------------------------)

- [http-basics](https://levelup.gitconnected.com/http-basics-8f02a96a834a?source=your_stories_page-------------------------------------)

- [javascript-frameworks-libraries](https://javascript.plainenglish.io/javascript-frameworks-libraries-35931e187a35?source=your_stories_page-------------------------------------)

- [my-take-on-awesome-javascript](https://javascript.plainenglish.io/my-take-on-awesome-javascript-243255451e74?source=your_stories_page-------------------------------------)

- [get-started-with-vscode-extensions](https://levelup.gitconnected.com/everything-you-need-to-get-started-with-vscode-extensions-resources-b9f4c8d91931?source=your_stories_page-------------------------------------)

- [my-favorite-vscode-themes](https://levelup.gitconnected.com/my-favorite-vscode-themes-9bab65af3f0f?source=your_stories_page-------------------------------------)

- [object-oriented-programming-in-javascript](https://levelup.gitconnected.com/object-oriented-programming-in-javascript-d45007d06333?source=your_stories_page-------------------------------------)

- [javascript-rotate-array-problemwalkthrough](https://medium.com/codex/javascript-rotate-array-problemwalkthrough-31deb19ebba1?source=your_stories_page-------------------------------------)

- [super-simple-intro-to-html-651d695f9bc](https://levelup.gitconnected.com/super-simple-intro-to-html-651d695f9bc?source=your_stories_page-------------------------------------)

- [everything-you-need-to-know-about-relational-databases-sql-postgresql](https://medium.com/codex/everything-you-need-to-know-about-relational-databases-sql-postgresql-and-sequelize-to-build-8acb68284a98?source=your_stories_page-------------------------------------)

- [understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107](https://levelup.gitconnected.com/understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107?source=your_stories_page-------------------------------------)

- [complete-javascript-reference-guide-64306cd6b0db](https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db?source=your_stories_page-------------------------------------)- [

</div>

---

---

<div align="center">

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://bgoonz.github.io/)](https://bgoonz.github.io)
<a href="https://github.com/bgoonz/resume-cv-portfolio-samples/blob/master/2021-resume/bryan-guner-resume-2021.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a>
[![Bryan's email](https://img.shields.io/badge/bryan.guner@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:bryan.guner@gmail.com)](mailto:bryan.guner@gmail.com)
[![Blog](https://img.shields.io/badge/-Blog-21759b?style=flat-square&logo=WordPress&logoColor=white&link=https://web-dev-hub.com/)](https://web-dev-hub.com/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bryan-guner-046199128/)](https://www.linkedin.com/in/bryan-guner-046199128/)
[![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/bryan-guner)](https://angel.co/u/bryan-guner)
[![GitHub bgoonz](https://img.shields.io/github/followers/bgoonz?label=follow&style=social)](https://github.com/bgoonz)

#### Refresh the page for a new joke!

<img align="center" src="https://readme-jokes.vercel.app/api" stye="width:500; height:320;">

</div>    
<div align="center">

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#_email_)

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=bgoonz&show_icons=true&locale=en" alt="bgoonz" /><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=bgoonz&" alt="bgoonz" /></p>
  
 [![trophy](https://github-profile-trophy.vercel.app/?username=bgoonz&row=1)](https://github.com/bgoonz/github-profile-trophy) 
 [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=bgoonz&layout=compact&hide=html,mathematica&langs_count=16)](https://github.com/bgoonz/github-readme-stats)
|  |  |
|:----------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Languages**    | ![](https://img.shields.io/badge/Lang-HTML5-informational?style=flat&logo=HTML5&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Lang-CSS-informational?style=flat&logo=CSS%20Wizardry&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Lang-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=00FF00)  ![](https://img.shields.io/badge/Lang-SQL-informational?style=flat&logo=SQL&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Lang-Java-informational?style=flat&logo=Java&logoColor=white&color=00FF00) <br />![](https://img.shields.io/badge/Lang-Python-informational?style=flat&logo=Python&logoColor=white&color=00FF00)   ![](https://img.shields.io/badge/Lang-TypeScript-informational?style=flat&logo=TypeScript&logoColor=white&color=00FF00) |
| **Libraries**    | ![](https://img.shields.io/badge/Lib-Bootstrap-informational?style=flat&logo=Bootstrap&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Lib-React-informational?style=flat&logo=React&logoColor=white&color=00FF00)  |
| **Frameworks**   | ![](https://img.shields.io/badge/FW-Redux-informational?style=flat&logo=Redux&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/FW-Node.js-informational?style=flat&logo=Node.js&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/FW-Express-informational?style=flat&logoColor=white&color=00FF00)  ![](https://img.shields.io/badge/FW-PowerShell-informational?style=flat&logo=PowerShell&logoColor=white&color=00FF00) |
| **Databases**    | ![](https://img.shields.io/badge/DB-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/DB-MySQL-informational?style=flat&logo=MySQL&logoColor=white&color=00FF00) |
| **Testing**      | ![](https://img.shields.io/badge/Test-Jest-informational?style=flat&logo=Jest&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Test-Cypress-informational?style=flat&logo=Cypress&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Test-JUnit-informational?style=flat&logo=JUnit&logoColor=white&color=00FF00) |
| **Other**        | ![](https://img.shields.io/badge/Editor-VS%20Code-informational?style=flat&logo=visualstudiocode&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Editor-IntelliJ%20IDEA-informational?style=flat&logo=intellijidea&logoColor=white&color=00FF00) <br />![](https://img.shields.io/badge/Tools-ESLint-informational?style=flat&logo=ESLint&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=Postman&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=00FF00)  <br />![](https://img.shields.io/badge/OS-Windows%2010-informational?style=flat&logo=Windows&logoColor=white&color=00FF00) <br />![](https://img.shields.io/badge/Code-LESS-informational?style=flat&logoColor=white&color=00FF00) ![](https://img.shields.io/badge/Code-Emmet-informational?style=flat&logoColor=white&color=00FF00) |

 <br />

</div>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#_email_)

## ➤ _Email_

#### [bryan.guner@gmail.com](#)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#_phone_)

## ➤ _Phone_

#### [551-254-5505](551-254-5505)

---

## ➤ Connect with me:

<p align="center">
  <a href="mailto:bryan.guner@gmail.com"><img src="https://img.icons8.com/color/96/000000/gmail.png" alt="email"/></a><a href="https://www.facebook.com/bryan.guner/"><img src="https://img.icons8.com/color/96/000000/facebook.png" alt="facebook"/></a><a href="https://twitter.com/bgooonz"><img src="https://img.icons8.com/color/96/000000/twitter-squared.png" alt="twitter"/></a><a href="https://www.youtube.com/channel/UC9-rYyUMsnEBK8G8fCyrXXA/videos"><img src="https://img.icons8.com/color/96/000000/youtube.png" alt="youtube"/></a><a href="https://www.instagram.com/bgoonz/?hl=en"><img src="https://img.icons8.com/color/96/000000/instagram-new.png" alt="instagram"/></a><a href="https://www.pinterest.com/bryanguner/_saved/"><img src="https://img.icons8.com/color/96/000000/pinterest--v1.png" alt="pinterest"/></a><a href="https://www.linkedin.com/in/bryan-guner-046199128/"><img src="https://img.icons8.com/color/96/000000/linkedin.png" alt="linkedin"/></a>
  <a href="https://bryanguner.medium.com/"><img src="https://img.icons8.com/color/96/000000/medium-logo.png" alt="medium"/></a><a href="https://open.spotify.com/user/bgoonz?si=ShH9wYbIQWab5Jz_30BKFw"><img src="https://img.icons8.com/color/96/000000/spotify--v1.png" alt="spotify"/></a>
  </p>

<div align="center">

| [GitHub](https://github.com/bgoonz)          | [Replit](https://repl.it/@bgoonz/)                                        | [Medium](https://bryanguner.medium.com/)                                                          | [Quora](https://www.quora.com/q/webdevresourcehub?invite_code=qwZOqbpAhgQ6hjjGl8NN) |
| -------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Gitlab](https://gitlab.com/bryan.guner.dev) | [Redit](https://www.reddit.com/user/bgoonz1)                              | [webcomponents.dev](https://webcomponents.dev/user/bgoonz)                                        | [dev.to](https://dev.to/bgoonz)                                                     |
| [Bitbucket](https://bitbucket.org/bgoonz/)   | [runkit](https://runkit.com/bgoonz)                                       | [npm](https://www.npmjs.com/~bgoonz11)                                                            | [Observable Notebooks](https://observablehq.com/@bgoonz?tab=profile)                |
| [code pen](https://codepen.io/bgoonz)        | [stack-exchange](https://meta.stackexchange.com/users/936785/bryan-guner) | [Upwork](https://www.upwork.com/freelancers/~01bb1a3627e1e9c630?viewMode=1&s=1110580755057594368) | [Notation](https://www.notion.so/Overview-Of-Css-5d88b0bc9a73422a9be1481d599a56ba)  |
| [Glitch](https://glitch.com/@bgoonz)         | [Netlify](https://app.netlify.com/user/settings#profile)                  | [AngelList](https://angel.co/u/bryan-guner)                                                       | [StackShare](https://stackshare.io/bryanguner)                                      |
| [Plunk](http://plnkr.co/account/plunks)      | [Dribble](https://dribbble.com/bgoonz4242?onboarding=true)                | [contentful](https://app.contentful.com/spaces/lelpu0ihaz11/assets?id=MocOPmmNliLn6PPv)           | [giphy](https://giphy.com/channel/bryanguner)                                       |

|

  <h3 align="left">Support:</h3><p><a href="https://www.buymeacoffee.com/bgoonz"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="bgoonz" /></a></p><br><br>
  
</div>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#blog)

<details>

<summary>About Me</summary>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#projects)

![skills](./skills.PNG)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#projects)

##### ➤ [Blog:](https://modest-booth-4e17df.netlify.app/)

> I write articles for:

- CodeX
- Analytics Vidhya
- Star Gazers
- JavaScript in Plain English
- Geek Culture
- Level Up Coding
- <a href="https://dev.to/bgoonz">
    <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Bryan C Guner's DEV Community Profile" height="30px" width="30px">
  </a>


<a href="https://dev.to/bgoonz">


[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/awesome-github-badges)

[![forthebadge](https://forthebadge.com/images/badges/certified-snoop-lion.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://bgoonz.github.io/)[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/bgoonz/ask-me-anything)[![Gitter](https://badges.gitter.im/bgoonz/community.svg)](https://gitter.im/bgoonz/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/bgoonz/bgoonz/graphs/commit-activity)[![Analytics](https://ga-beacon.appspot.com/UA-38514290-17/github.com/Naereen/Naereen/README.md?pixel)](https://GitHub.com/bgoonz/bgoonz/)[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) [![Bash Shell](https://badges.frapsoft.com/bash/v1/bash.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

[![GitHub followers](https://img.shields.io/github/followers/bgoonz.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/bgoonz?tab=followers)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat&logo=javascript)

![React](https://img.shields.io/badge/-React-black?style=flat&logo=react) ![Redux](https://img.shields.io/badge/-Redux-lightblue?style=flat&logo=redux)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3) ![Sass](https://img.shields.io/badge/-Sass-black?style=flat&logo=sass)

![Express](https://img.shields.io/badge/-Express-blue?style=flat&logo=express) ![Nodejs](https://img.shields.io/badge/-Nodejs-green?style=flat&logo=Node.js)![Python](https://img.shields.io/badge/-Python-lightyellow?style=flat&logo=python&logoColor=blue) ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-black?style=flat&logo=docker) ![MySQL](https://img.shields.io/badge/-MySQL-black?style=flat&logo=mysql) ![PostgresQL](https://img.shields.io/badge/-PostgreSQL-blue?style=flat&logo=postgresql) ![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git) ![Ruby](https://img.shields.io/badge/-Ruby-darkred?style=flat&logo=ruby) ![Material-UI](https://img.shields.io/badge/-MaterialUI-0081CB?style=flat&logo=Material-UI&logoColor=white)

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.arduino.cc/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a> <a href="https://aws.amazon.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://azure.microsoft.com/en-in/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/> </a> <a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://d3js.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg" alt="d3js" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.elastic.co" target="_blank"> <img src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="elasticsearch" width="40" height="40"/> </a> <a href="https://emberjs.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg" alt="ember" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://www.gatsbyjs.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="40" height="40"/> </a> <a href="https://cloud.google.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jekyllrb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg" alt="jekyll" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mathworks.com/" target="_blank"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mathworks.svg" alt="matlab" width="40" height="40"/> </a> <a href="https://mochajs.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://pugjs.org" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/pug.svg" alt="pug" width="40" height="40"/> </a> <a href="https://github.com/puppeteer/puppeteer" target="_blank"> <img src="https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg" alt="puppeteer" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://www.vagrantup.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg" alt="vagrant" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> <a href="https://www.adobe.com/products/xd.html" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/> </a> <a href="https://zapier.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" alt="zapier" width="40" height="40"/> </a> </p>

<h3 align="center">A passionate Web Developer, Electrical Engineer, Musician & Producer</h3>

- 🔭 Contract Web Development **Relational Concepts**

- 🌱 I'm currently learning **React/Redux, Python, Java, Express, jQuery**

- 👯 I'm looking to collaborate on [Any web audio or open source educational tools.](https://goofy-euclid-1cd736.netlify.app/core-site/index.html)

- 🤝 I'm looking for help with [Learning React](https://github.com/bgoonz/React-Practice)

- 👨‍💻 All of my projects are available at [https://bgoonz.github.io/](https://bgoonz.github.io/)

- 📝 I regularly write articles on [medium](https://bryanguner.medium.com/) && [Web-Dev-Resource-Hub](https://web-dev-resource-hub.netlify.app/)

- 💬 Ask me about **Anything:**

- 📫 How to reach me **bryan.guner@gmail.com**

- ⚡ Fun fact **I played Bamboozle Music Festival at the Meadowlands Stadium Complex when I was 14.**

### i really like music :headphones:

#### What's the most useful business-related book you've ever read?

> A Random Walk Down Wall Street

#### What's your favorite non-business book?

> Hitchhiker's Guide To The Galaxy

#### If money were not an issue, what would you be doing right now?

> Designing recording software/hardware and using it

#### What words of advice would you give your younger self?

> Try harder and listen to your parents more (the latter bit of advice would be almost certain to fall on deaf ears lol)

#### What's the most creative thing you've ever done?

> I built a platform that listens to a guitarist's performance and automatically triggers guitar effects at the appropriate time in the song.

#### Which founders or startups do you most admire?

> Is it to basic to say Tesla... I know they're prevalent now but I've been an avid fan since as early as 2012.

#### What's your super power?

> Having really good ideas and forgetting them moments later.

#### What's the best way for people to get in touch with you?

> A text

#### What aspects of your work are you most passionate about?

Creating things that change my every day life.

#### What was the most impactful class you took in school?

> Modern Physics... almost changed my major after that class... but at the end of the day engineering was a much more fiscally secure avenue.

#### What's something you wish you had done years earlier?

> Learned to code ... and sing

#### What words of wisdom do you live by?

> \*Disclaimer: The following wisdom is very cliche ... but... "Be the change that you wish to see in the world."

> ― Mahatma Gandhi

</details>

<details>

 <summary>🤖 <b>My Programming Stats</b>: </summary>
<br>

[![bgoonz's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=bgoonz)](https://github.com/bgoonz/github-readme-stats)

![waka1](https://github.com/bgoonz/bgoonz/blob/master/langs.PNG)

![waka2](https://github.com/bgoonz/bgoonz/blob/master/waka.PNG)

</details>

<details>
  
<summary>See More</summary>

[wakatime](https://wakatime.com/@bgoonz)

[github-resume](https://resume.github.io/?bgoonz)

</details>

<!-- start work experience section -->
<details>
<summary> Resume </summary>

# ➤ Technical Skills­­­

| **Programming\*\*** Languages:\*\* | JavaScript ES-6, NodeJS, React, HTML5, CSS3, SCSS, Bash Shell, Excel, SQL, NoSQL, MATLAB, Python, C++ |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Databases:**                     | PostgreSQL, MongoDB                                                                                   |
| **Cloud:**                         | Docker, AWS, Google App Engine, Netlify, Digital Ocean, Heroku, Azure Cloud Services                  |
| **OS:**                            | Linux, Windows (WSL), IOS                                                                             |
| **Agile:**                         | GitHub, BitBucket, Jira, Confluence                                                                   |
| **IDEs:**                          | VSCode, Visual Studio, Atom, Code Blocks, Sublime Text 3, Brackets                                    |

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#experience)

# ➤ Experience

| **Relational Concepts:** Hallandale Beach, FL | March 2020 - Present |
| --------------------------------------------- | -------------------- |
| **Front End Web Developer**                   |
|                                               |

- Responsible for front-end development for a custom real estate application which provides sophisticated and fully customizable filtering to allow investors and real estate professionals to narrow in on exact search targets.
- Designed mock-up screens, wireframes, and workflows for intuitive user experience.
- Migrated existing multi-page user experience into singular page interfaces using React components.
- Participated in every stage of the design from conception through development and iterative improvement.
- Produced user stories and internal documentation for future site development and maintenance.
- Implemented modern frameworks including Bootstrap and Font-Awesome to give the site an aesthetic overhaul.
- Managed all test deployments using a combination of Digital Ocean and Netlify.
- Produced unit tests using a combination of Mocha and Chai.
- Injected Google Analytics to capture pertinent usage data to produce an insightful dashboard experience.

| **Environment:** | **JavaScript, JQuery, React, HTML5 &amp; CSS, Bootstrap, DOJO, Google Cloud, Bash Script** |
| ---------------- | ------------------------------------------------------------------------------------------ |

| **Cembre:** Edison, NJ           | Nov 2019 – Mar 2020 |
| -------------------------------- | ------------------- |
| **Product Development Engineer** |
|                                  |

- Converted client&#39;s product needs into technical specs to be sent to the development team in Italy.
- Reorganized internal file server structure.
- Conducted remote / in person system integration and product demonstrations.
- Presided over internal and end user software trainings in addition to producing the corresponding documentation.
- Served as the primary point of contact for troubleshooting railroad hardware and software in the North America.

| **Environment:** | **Excel, AutoCAD, PowerPoint, Word** |
| ---------------- | ------------------------------------ |

---

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#education)

# ➤ Education

| **B.S. Electrical Engineering, TCNJ, ** Ewing NJ | 2014 – 2019 |
| ------------------------------------------------ | ----------- |

**Capstone Project – Team Lead**

- Successfully completed and delivered a platform to digitize a guitar signal and perform filtering before executing frequency &amp; time domain analysis to track a current performance against prerecorded performance.
- Implemented the Dynamic Time Warping algorithm in C++ and Python to autonomously activate or adjust guitar effect at multiple pre-designated section of performance.

| **Environment:** | **C++, Python, MATLAB, PureData** |
| ---------------- | --------------------------------- |

</details>

<details>

<summary> My Projects</summary>

<table>
  <thead>
    <tr>
      <th>Project Name</th>
      <th>Skills used</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='https://web-dev-resource-hub.netlify.app/'>Web-Dev-Resource-Hub (blog)</a></td>
      <td>Html, Css, javascript, Python, jQuery,  React,  FireBase,  AWS S3,  Netlify,  Heroku,  NodeJS,  PostgreSQL,  C++,  Web Audio API</td>
      <td>My blog site contains my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally nerdy things I find interesting.</td>
    </tr>
       <tr>
      <td><a href='https://project-showcase-bgoonz.netlify.app/'>Dynamic Guitar Effects Triggering Using A Modified Dynamic Time Warping Algorithm</a></td>
      <td>C, C++, Python, Java, Pure Data, Matlab</td>
      <td>Successfully completed and delivered a platform to digitize a guitar signal and perform filtering before executing frequency & time domain analysis to track a current performance against prerecorded performance.Implemented the Dynamic Time Warping algorithm in C++ and Python to autonomously activate or adjust guitar effect at multiple pre-designated section of performance.</td>
    </tr>
    <tr>
      <td><a href="https://trusting-dijkstra-4d3b17.netlify.app/">Data Structures & Algorithms Interactive Learning Site</a></td>
      <td>HTML, CSS, Javascript,  Python,  Java,  jQuery,  Repl.it-Database API</td>
      <td>A interactive and comprehensive guide and learning tool for DataStructures and Algorithms ... concentrated on JS but with some examples in Python,  C++ and Java as well</td>
    </tr>
    <tr>
      <td><a href='https://mihirbegmusic.netlify.app/'>MihirBeg.com</a></td>
      <td>Html, Css, Javascript,  Bootstrap,  FontAwesome,  jQuery</td>
      <td>A responsive and mobile friendly content promotion site for an Audio Engineer to engage with fans and potential clients</td>
    </tr>
    <tr>
      <td><a href='https://tetris42.netlify.app/'>Tetris-JS</a></td>
      <td>Html, Css, Javascript</td>
      <td>The classic game of tetris implemented in plain javascipt and styled with a retro-futureistic theme</td>
    </tr>
    <tr>
      <td><a href="https://githtmlpreview.netlify.app/">Git Html Preview Tool</a></td>
      <td>Git,  Javascript,  CSS3,  HTML5,  Bootstrap,  BitBucket</td>
      <td>Loads HTML using CORS proxy,  then process all links,  frames,  scripts and styles,  and load each of them using CORS proxy,  so they can be evaluated by the browser.</td>
    </tr>
    <tr>
      <td><a href='https://project-showcase-bgoonz.netlify.app/'>Mini Project Showcase</a></td>
      <td>HTML, HTML5, CSS, CSS3, Javascript, jQuery</td>
      <td>add songs and play music, it also uses to store data in  INDEXEDB Database by which we can play songs, if we not clear the catch then song will remain stored in database.</td>
    </tr>
    
  </tbody>
</table>

## ➤ Current Projects:

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=bgoonz&repo=Lambda)](https://github.com/bgoonz/Lambda)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=bgoonz&repo=bgoonz.github.io)](https://github.com/bgoonz/bgoonz.github.io)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=bgoonz&repo=WEB-DEV-TOOLS-HUB)](https://github.com/bgoonz/WEB-DEV-TOOLS-HUB)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=bgoonz&repo=DS-ALGO-OFFICIAL)](https://github.com/bgoonz/DS-ALGO-OFFICIAL)

<p align="center">

---

---

## Portfolio:

# [netlify](https://portfolio42.netlify.app/)

---

---

<div style=" border: 1px solid black">
<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23b9b236-746e-409c-8e86-30b4385e3b72/hr1-raypham.gif" alt="hr-line" width="100%" height="22">
</div>
<hr>

---

# [Learning React Blog](https://ecstatic-jang-593fd1.netlify.app/readme)

#### React Repo:

[React Repo](https://github.com/bgoonz/React-Practice)

---

## <a href="https://codesandbox.io/embed/zealous-microservice-ti7em?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark"   style="width:100%; height:20px; border:0; border-radius: 4px; overflow:hidden;" rel="React Todo">![Foo](https://codesandbox.io/static/img/play-codesandbox.svg)</a>

<div style=" border: 1px solid black">
<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23b9b236-746e-409c-8e86-30b4385e3b72/hr1-raypham.gif" alt="hr-line" width="100%" height="22">
</div>

# [react-documentation-site](https://documentation-site-react2-peitff669-bgoonz.vercel.app/)

[![Edit magical-stallman-ov0d1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/magical-stallman-ov0d1?autoresize=1&expanddevtools=1&fontsize=12&hidenavigation=1&moduleview=1&theme=dark)

<div style=" border: 1px solid black">
<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23b9b236-746e-409c-8e86-30b4385e3b72/hr1-raypham.gif" alt="hr-line" width="100%" height="22">
</div>

---

## ➤ Codepens (mostly embeded animations)

# [code-pens-embedded](https://embedable-content.netlify.app/)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#weekly-quick-snips)

## ➤ Weekly-Quick-Snips:

---

#### Snippet of the Day:

### replaceAll

the method string.replaceAll(search, replaceWith) replaces all appearances of search string with replaceWith.

```javascript


const str = 'this is a JSsnippets example';

const updatedStr = str.replace('example', 'snippet'); // 'this is a  JSsnippets snippet'


The tricky part is that replace method replaces only the very first match of the substring we have passed:


const str = 'this is a JSsnippets example and examples are great';

const updatedStr = str.replace('example', 'snippet'); //'this is a JSsnippets snippet and examples are great'

In order to go through this, we need to use a global regexp instead:


const str = 'this is a JSsnippets example and examples are great';

const updatedStr = str.replace(/example/g, 'snippet'); //'this is a JSsnippets snippet and snippets are greatr'

but now we have new friend in town, replaceAll

const str = 'this is a JSsnippets example and examples are great';

const updatedStr = str.replaceAll('example', 'snippet'); //'this is a JSsnippets snippet and snippets are greatr'

```

---

### Fibonacci in Python:

```py
def fib_iter(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    p0 = 0
    p1 = 1
    for i in range(n-1):
        next_val = p0 + p1
        p0 = p1
        p1 = next_val
    return next_val
for i in range(10):
    print(f'{i}: {fib_iter(i)}')
```

---

#### Yesterday's Snippet of the day:

---

```py
def quicksort(l):
    # One of our base cases is an empty list or list with one element
    if len(l) == 0 or len(l) == 1:
        return l
    # If we have a left list, a pivot point and a right list...
    # assigns the return values of the partition() function
    left, pivot, right = partition(l)
    # Our sorted list looks like left + pivot + right, but sorted.
    # Pivot has to be in brackets to be a list, so python can concatenate all the elements to a single list
    return quicksort(left) + [pivot] + quicksort(right)



print(quicksort([]))



print(quicksort([1]))



print(quicksort([1,2]))

print(quicksort([2,1]))


print(quicksort([2,2]))


print(quicksort([5,3,9,4,8,1,7]))


print(quicksort([1,2,3,4,5,6,7]))


print(quicksort([9,8,7,6,5,4,3,2,1]))
```

---

<details>
  
  <summary>See Older Snippets!</summary>
  
  
  #### This Week's snippets: 
  
  ---
  
  
   >will replace any spaces in file names with an underscore!
```bash
 for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done
  ## TAKING IT A STEP FURTHER:
 # Let's do it recursivley:
  function RecurseDirs ()
{
    oldIFS=$IFS
    IFS=$'\n'
    for f in "$@"
    do
  # YOUR CODE HERE!

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)]

for file in \*; do mv "$file" `echo $file | tr ' ' '_'` ; done
        if [[ -d "${f}" ]]; then
cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"

````


 ---
 ### Copy to clipboard jQuerry
 > Language: Javascript/Jquery


>In combination with the script tag :  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> , this snippet will add a copy to clipboard button to all of your embedded <code> blocks.


```js
$(document).ready(function() {
  $('code, pre').append('<span class="command-copy" ><i class="fa fa-clipboard" aria-hidden="true"></i></span>');

  $('code span.command-copy').click(function(e) {
    var text = $(this).parent().text().trim(); //.text();
    var copyHex = document.createElement('input');
    copyHex.value = text
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand('copy');
    console.log(copyHex.value)
    document.body.removeChild(copyHex);
  });


  $('pre span.command-copy').click(function(e) {
    var text = $(this).parent().text().trim();
    var copyHex = document.createElement('input');
    copyHex.value = text
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand('copy');
    console.log(copyHex.value)
    document.body.removeChild(copyHex);
  });
})


````

---

### Append Files in PWD

```js
//APPEND-DIR.js
const fs = require("fs");
let cat = require("child_process").execSync("cat *").toString("UTF-8");
fs.writeFile("output.md", cat, (err) => {
  if (err) throw err;
});
```

---

### doesUserFrequentStarbucks.js

```js
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

---

### arr-intersection.js

```js
/*
 function named intersection(firstArr) that takes in an array and
returns a function. 
When the function returned by intersection is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.
*/
function intersection(firstArr) {
  return (secondArr) => {
    let common = [];
    for (let i = 0; i < firstArr.length; i++) {
      let el = firstArr[i];
      if (secondArr.indexOf(el) > -1) {
        common.push(el);
      }
    }
    return common;
  };
}
let abc = intersection(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

let fame = intersection(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]
```

---

### arr-of-cum-partial-sums.js

```js
/*
First is recurSum(arr, start) which returns the sum of the elements of arr from the index start till the very end.
Second is partrecurSum() that recursively concatenates the required sum into an array and when we reach the end of the array, it returns the concatenated array.
*/
//arr.length -1 = 5
//                   arr   [    1,    7,    12,   6,    5,    10   ]
//                   ind   [    0     1     2     3     4      5   ]
//                              ↟                              ↟
//                            start                           end

function recurSum(arr, start = 0, sum = 0) {
  if (start < arr.length) {
    return recurSum(arr, start + 1, sum + arr[start]);
  }

  return sum;
}

function rPartSumsArr(arr, partSum = [], start = 0, end = arr.length - 1) {
  if (start <= end) {
    return rPartSumsArr(
      arr,
      partSum.concat(recurSum(arr, start)),
      ++start,
      end
    );
  }
  return partSum.reverse();
}

console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
console.log("rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]: ", rPartSumsArr(arr));
console.log("rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]: ", rPartSumsArr(arr1));
console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
/*
------------------------------------------------rPartSumArr------------------------------------------------
rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]:  [ 10, 16, 18, 23, 24, 25 ]
rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]:  [ 10, 15, 21, 33, 40, 41 ]
------------------------------------------------rPartSumArr------------------------------------------------
*/
```

---

### camel2Kabab.js

```js
function camelToKebab(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
```

---

### camelCase.js

```js
function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
```

---

### concatLinkedLists.js

```js
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  let carryOver = 0;
  while (l1 != null || l2 != null) {
    let v1 = 0;
    let v2 = 0;
    if (l1 != null) v1 = l1.val;
    if (l2 != null) v2 = l2.val;

    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new ListNode(sum);

    currentNode = currentNode.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }

  return result.next;
}
```

---

### fast-is-alpha-numeric.js

```js
//Function to test if a character is alpha numeric that is faster than a regular
//expression in JavaScript

let isAlphaNumeric = (char) => {
  char = char.toString();
  let id = char.charCodeAt(0);
  if (
    !(id > 47 && id < 58) && // if not numeric(0-9)
    !(id > 64 && id < 91) && // if not letter(A-Z)
    !(id > 96 && id < 123) // if not letter(a-z)
  ) {
    return false;
  }
  return true;
};

console.log(isAlphaNumeric("A")); //true
console.log(isAlphaNumeric(2)); //true
console.log(isAlphaNumeric("z")); //true
console.log(isAlphaNumeric(" ")); //false
console.log(isAlphaNumeric("!")); //false
```

---

### find-n-replace.js

```js
function replaceWords(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
console.log(replaceWords("Let us go to the store", "store", "mall")); //"Let us go to the mall"
console.log(replaceWords("He is Sleeping on the couch", "Sleeping", "sitting")); //"He is Sitting on the couch"
console.log(replaceWords("His name is Tom", "Tom", "john"));
//"His name is John"
```

---

### flatten-arr.js

```js
/*Simple Function to flatten an array into a single layer */
const flatten = (array) =>
  array.reduce(
    (accum, ele) => accum.concat(Array.isArray(ele) ? flatten(ele) : ele),
    []
  );
```

---

### isWeekDay.js

```js
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 11)));
// Result: true (Monday)
console.log(isWeekday(new Date(2021, 0, 10)));
// Result: false (Sunday)
```

---

### longest-common-prefix.js

```js
function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}
```

</details>

<hr>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#github-gists)

# ➤ Github Gists

## [Github Gists](https://gist.github.com/bgoonz)

[list-of-my-websites](https://gist.github.com/bgoonz/659a9b81ac45453bedc0a1a36275b580)

---

![daft](./daftpunktocat-thomas.gif)

</details>
