import React from 'react';
import _ from 'lodash';
import { graphql } from 'gatsby';

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