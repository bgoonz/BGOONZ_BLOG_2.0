import React from 'react';

import { Link, withPrefix } from '../utils';

export default class HeaderAlt extends React.Component {
    render() {
        return (
            <header className="site-header-alt">
                <nav className="site-navigation-alt" aria-label="Main Navigation">
                    <Link className="home-link" href={withPrefix('/')}>
                        <span className="icon-arrow-left" aria-hidden="true" /> All Articles
                    </Link>
                </nav>
            </header>
        );
    }
}
