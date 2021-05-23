import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';

export default class CtaButtons extends React.Component {
    renderActionButton(action, index) {
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const style = _.get(action, 'style', 'link');
        const classes = classNames({
            button: style === 'primary' || style === 'secondary',
            'button-secondary': style === 'secondary'
        });
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [newWindow ? 'noopener' : '', noFollow ? 'nofollow' : ''].filter(Boolean).join(' ');
        }

        return (
            <Link key={index} href={withPrefix(url)} {...attrs} className={classes}>
                {label}
            </Link>
        );
    }

    render() {
        const actions = _.get(this.props, 'actions');

        return _.map(actions, (action, index) => this.renderActionButton(action, index));
    }
}
