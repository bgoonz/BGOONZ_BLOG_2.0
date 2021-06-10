import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {withPrefix, getData, Link, markdownify} from '../utils';
import BlogPostCategories from '../components/BlogPostCategories';
import BlogPostTags from '../components/BlogPostTags';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post">
              <div className="container container--md">
                {_.get(this.props, 'page.frontmatter.image', null) && (
                <div className="post__image">
                  <img src={withPrefix(_.get(this.props, 'page.frontmatter.image', null))} alt={_.get(this.props, 'page.frontmatter.image_alt', null)} />
                </div>
                )}
                <header className="post__header">
                  {_.get(this.props, 'page.frontmatter.categories', null) && (
                    <BlogPostCategories {...this.props} categories={_.get(this.props, 'page.frontmatter.categories', null)} container_class={'post__meta'} />
                  )}
                  <h1 className="post__title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                  <div className="post__meta">
                    <span>On <time dateTime={moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%B %d, %Y')}</time></span>
                    {_.get(this.props, 'page.frontmatter.author', null) && ((() => {
                        let author = getData(this.props.data, _.get(this.props, 'page.frontmatter.author', null));
                        return (
                          author.link ? (
                            <span> by <Link href={withPrefix(author.link)}>{author.first_name} {author.last_name}</Link></span>
                          ) : 
                            <span> by {author.first_name} {author.last_name}</span>
                        );
                    })())}
                  </div>
                </header>
                <div className="post__copy">
                  {markdownify(_.get(this.props, 'page.markdown', null))}
                </div>
                {_.get(this.props, 'page.frontmatter.tags', null) && (
                <footer className="post__footer">
                  <BlogPostTags {...this.props} tags={_.get(this.props, 'page.frontmatter.tags', null)} />
                </footer>
                )}
              </div>
            </article>
            </Layout>
        );
    }
}
