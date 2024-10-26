import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';
import Icon from './Icon';

const ActionLink = (props) => {
    const action = _.get(props, 'action', null);

    return (
        <Link
            to={withPrefix(_.get(action, 'url', null))}
            {...(_.get(action, 'new_window', null) ? { target: '_blank' } : null)}
            {...(_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)
                ? {
                      rel: (_.get(action, 'new_window', null) ? 'noopener ' : '') + (_.get(action, 'no_follow', null) ? 'nofollow' : '')
                  }
                : null)}
            className={classNames({
                button: _.get(action, 'style', null) !== 'link',
                'button-secondary': _.get(action, 'style', null) === 'secondary',
                'button-icon': _.get(action, 'style', null) === 'icon'
            })}
        >
            {_.get(action, 'style', null) === 'icon' && _.get(action, 'icon_class', null) ? (
                <>
                    <Icon {...props} icon={_.get(action, 'icon_class', null)} />
                    <span className="screen-reader-text">{_.get(action, 'label', null)}</span>
                </>
            ) : (
                _.get(action, 'label', null)
            )}
        </Link>
    );
};

export default ActionLink;
