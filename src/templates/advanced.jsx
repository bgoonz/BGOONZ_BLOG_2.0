import { graphql } from 'gatsby';
import _ from 'lodash';
import React from 'react';
import components, { Layout } from '../components/index';
// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
    query ($url: String) {
        sitePage(path: { eq: $url }) {
            id
        }
    }
`;
export default class Advanced extends React.Component {
    render() {
        return (
          <Layout {...this.props}>
            {_.map(
              _.get(this.props, "pageContext.frontmatter.sections", null),
              (section, section_idx) => {
                let component = _.upperFirst(
                  _.camelCase(_.get(section, "type", null))
                );
                let Component = components[component];
                return (
                  <Component
                    key={section_idx}
                    {...this.props}
                    section={section}
                    site={this.props.pageContext.site}
                  />
                );
              }
            )}
            <div className="utterances" style={{ height: "270px" }}>
              <iframe
                className="utterances-frame"
                title="Comments"
                scrolling="no"
                src="https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&repo=bgoonz%2FBGOONZ_BLOG_2.0&issue-term=url&label=comment&theme=github-light&crossorigin=anonymous&async=&url=https%3A%2F%2Fbgoonz-blog.netlify.app%2Fadmin%2F&origin=https%3A%2F%2Fbgoonz-blog.netlify.app&pathname=admin%2F&title=Content+Manager&description=&og%3Atitle=&session=cff0a20107b0647d038c9a70B0zmDJTiMv6FUqOZrpo%2B1is6FFMXIKkCTLpVnSSVLbPpB9jAZA%2BQZujA5OVbyjnnJ5o%2FMfl8BrFC9xY8f8j%2Fgqknat%2FyEQJ76apFVQ%2F1JAdsEX2kbeJZt%2FV%2FnQQ%3D"
                loading="lazy"
              />
            </div>
          </Layout>
        );
    }
}
