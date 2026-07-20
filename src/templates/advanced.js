import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";

import components, { Layout } from "../components/index";

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query ($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`;

export default function Advanced(props) {
  return (
    <Layout {...props}>
      {_.map(
        _.get(props, "pageContext.frontmatter.sections", null),
        (section, section_idx) => {
          const component = _.upperFirst(
            _.camelCase(_.get(section, "type", null))
          );
          const Component = components[component];
          return (
            <Component
              key={section_idx}
              {...props}
              section={section}
              site={props.pageContext.site}
            />
          );
        }
      )}
    </Layout>
  );
}
