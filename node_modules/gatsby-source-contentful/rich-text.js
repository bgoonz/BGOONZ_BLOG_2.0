"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _richTextReactRenderer = require("@contentful/rich-text-react-renderer");

var _contentfulResolveResponse = _interopRequireDefault(require("contentful-resolve-response"));

function renderRichText({
  raw,
  references
}, options = {}) {
  const richText = JSON.parse(raw); // If no references are given, there is no need to resolve them

  if (!references || !references.length) {
    return (0, _richTextReactRenderer.documentToReactComponents)(richText, options);
  } // Create dummy response so we can use official libraries for resolving the entries


  const dummyResponse = {
    items: [{
      sys: {
        type: `Entry`
      },
      richText
    }],
    includes: {
      Entry: references.filter(({
        __typename
      }) => __typename !== `ContentfulAsset`).map(reference => {
        return { ...reference,
          sys: {
            type: `Entry`,
            id: reference.contentful_id
          }
        };
      }),
      Asset: references.filter(({
        __typename
      }) => __typename === `ContentfulAsset`).map(reference => {
        return { ...reference,
          sys: {
            type: `Asset`,
            id: reference.contentful_id
          }
        };
      })
    }
  };
  const resolved = (0, _contentfulResolveResponse.default)(dummyResponse, {
    removeUnresolved: true
  });
  return (0, _richTextReactRenderer.documentToReactComponents)(resolved[0].richText, options);
}

exports.renderRichText = renderRichText;