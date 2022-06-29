/* This class is a React component that renders a link to a URL, with optional styling and attributes. */
import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

/**
 * It returns a link to the action's URL, with the appropriate class names, and the label or icon as
 * the link text
 * @returns A Link component with the following props:
 *   - to: the url of the action
 *   - target: '_blank' if the action is set to open in a new window
 *   - rel: 'noopener' if the action is set to open in a new window, 'nofollow' if the action is set to
 * have no follow
 *   - className:
 */
function ActionLink({ action }) {
  return <Link to={withPrefix(_.get(action, 'url', null))}
    {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
    {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
    className={classNames({'button': _.get(action, 'style', null) !== 'link', 'button-secondary': _.get(action, 'style', null) === 'secondary', 'button-icon': _.get(action, 'style', null) === 'icon'})}>
    {((_.get(action, 'style', null) === 'icon') && _.get(action, 'icon_class', null)) ? (<React.Fragment>
      <Icon {...this.props} icon={_.get(action, 'icon_class', null)} />
      <span className="screen-reader-text">{_.get(action, 'label', null)}</span>
    </React.Fragment>) : 
      _.get(action, 'label', null)
    }
  </Link>;
}

export default class ActionLink extends React.Component {
   /* Rendering the ActionLink component. */
    render() {
        const action = _.get(this.props, 'action', null);
        return (
            <ActionLink action={action} />
        );
    }
}
