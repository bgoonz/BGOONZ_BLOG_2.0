import React from 'react';
import _ from 'lodash';

import { classNames, Link, withPrefix } from '../utils';

const DocsSubmenu = (props) => {
  const child_pages = _.get(props, 'child_pages', null);
  const page = _.get(props, 'page', null);

  return (
    <ul className="docs-submenu">
      {_.map(child_pages, (child_page, child_page_idx) => (
        <li
          key={child_page_idx}
          className={classNames('docs-menu-item', {
            current: _.get(page, 'url', null) === _.get(child_page, 'url', null),
          })}
        >
          <Link to={withPrefix(_.get(child_page, 'url', null))}>
            {_.get(child_page, 'frontmatter.title', null)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DocsSubmenu;
