import React from 'react';
import _ from 'lodash';

import Action from './Action';
import {htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
              <div className="container container--lg">
                {(_.get(this.props, 'data.config.footer.has_nav', null) || _.get(this.props, 'data.config.footer.has_social', null)) && (
                <div className="site-footer__nav">
                  {_.get(this.props, 'data.config.footer.has_nav', null) && (
                  <ul className="site-footer__menu menu">
                    {_.map(_.get(this.props, 'data.config.footer.nav_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                  {_.get(this.props, 'data.config.footer.has_social', null) && (
                  <ul className="site-footer__social menu">
                    {_.map(_.get(this.props, 'data.config.footer.social_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                </div>
                )}
                <div className="site-footer__copyright">
                  {_.get(this.props, 'data.config.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'data.config.footer.content', null))}</span>
                  )}
                  {_.map(_.get(this.props, 'data.config.footer.links', null), (action, action_idx) => (
                    <Action key={action_idx} {...this.props} action={action} />
                  ))}
                </div>
              </div>
            </footer>
        );
    }
}
