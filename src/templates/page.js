import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import _ from 'lodash';
import React from 'react';
import { Layout } from '../components/index';
import { htmlToReact, toStyleObj, withPrefix } from '../utils';
// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
    query ($url: String) {
        sitePage(path: { eq: $url }) {
            id
        }
    }
`;
export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <article className="post post-full">
                    <header className="post-header has-gradient outer">
                        {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                            <div
                                className="bg-img"
                                style={toStyleObj("background-image: url('" + withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null)) + "')")}
                            />
                        )}
                        <div className="inner-sm">
                            <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                                <div className="post-subtitle">{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}</div>
                            )}
                        </div>
                    </header>
                    <div className="inner-md outer">
                        <div className="post-content">{htmlToReact(_.get(this.props, 'pageContext.html', null))}</div>
                    </div>
                    <Disqus />
                </article>
            </Layout>
        );
    }
}
