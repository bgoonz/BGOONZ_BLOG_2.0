import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';
import Action from './Action';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');

        return (
            <footer id="colophon" className="site-footer outer">
                <div className="inner">
                    <div className="site-footer-inside">
                        <p className="site-info">
                            {copyright && <span className="copyright">{htmlToReact(copyright)}</span>}
                            {_.map(links, (action, index) => (
                                <Action key={index} action={action} />
                            ))}
                        </p>
                        {hasSocial && !_.isEmpty(socialLinks) && (
                            <div className="social-links">
                                {_.map(socialLinks, (action, index) => (
                                    <Action key={index} action={action} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        );
    }
}
