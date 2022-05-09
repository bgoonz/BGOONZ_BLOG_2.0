# [full text search example](https://github.com/side-projects-42/stackbit-gatsby-theme-diy-libris/blob/master/src/components/SearchBar.js)

```js
import React from 'react';

import { Link } from 'gatsby';

export default class SearchBar extends React.Component {
    state = {
        query: '',
        results: []
    };

    render() {
        return (
            <div className={this.props.classNames + ' search__parent__div flex-md'}>
                <input className="search__input" type="text" value={this.state.query} onChange={this.search} placeholder={'Search'} aria-label="Search" />
                {
                    // Results list
                    this.state.results.length > 0 && ( // Only show when there are results
                        <div className="search__list">
                            <span>Search results</span>
                            <ul>
                                {this.state.results.map((page) => (
                                    <li key={page.url}>
                                        <Link className="search__list_white search__list_non-decoration" to={page.url}>
                                            {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }

    getSearchResults(query) {
        if (!query || !window.__LUNR__) return [];
        const lunrIndex = window.__LUNR__[this.props.lng];
        const results = lunrIndex.index.search(query); // you can  customize your search , see https://lunrjs.com/guides/searching.html
        return results.map(({ ref }) => lunrIndex.store[ref]);
    }

    search = (event) => {
        const query = event.target.value;
        const results = this.getSearchResults(query);
        this.setState({ results, query });
    };
}
```
