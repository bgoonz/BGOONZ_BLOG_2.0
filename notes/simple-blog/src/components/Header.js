import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    render() {
        return (
            <header className="site-header">
              <div className="container container--lg">
                <nav className="navbar" aria-label="Main Navigation">
                  <Link className="sr-only" href="#content">Skip to main content</Link>
                  {_.get(this.props, 'data.config.header.logo', null) ? (
                  <Link className="navbar__logo" href={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'data.config.header.logo', null))} alt={_.get(this.props, 'data.config.header.logo_alt', null)} /></Link>
                  ) : 
                  <Link className="h4 navbar__title" href={withPrefix('/')}>{_.get(this.props, 'data.config.header.title', null)}</Link>
                  }
                  {_.get(this.props, 'data.config.header.has_nav', null) && (<React.Fragment>
                  <button aria-label="Menu" className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle">
                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" /></svg>
                  </button>
                  <div className="navbar__menu">
                    <div className="navbar__scroller">
                      <div className="navbar__inner">
                        <button aria-label="Close" className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle">
                          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" /></svg>
                        </button>
                        <ul className="navbar__list menu">
                          {_.map(_.get(this.props, 'data.config.header.nav_links', null), (action, action_idx) => {
                              let pageUrl = _.trim(_.get(this.props, 'page.__metadata.urlPath', null), '/');
                              let actionUrl = _.trim(_.get(action, 'url', null), '/');
                              return (
                                <li key={action_idx} className={classNames('navbar__item', {'navbar__item--btn': _.get(action, 'style', null) !== 'link', 'is-active': pageUrl === actionUrl})}>
                                  <Action {...this.props} action={action} />
                                </li>
                              )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  </React.Fragment>)}
                </nav>
              </div>
            </header>
        );
    }
}
