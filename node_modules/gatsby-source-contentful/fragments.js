"use strict";

exports.__esModule = true;
exports.contentfulAssetFluidPreferWebpNoBase64 = exports.GatsbyContentfulFluid_withWebp = exports.GatsbyContentfulFluid_noBase64 = exports.GatsbyContentfulFluid_tracedSVG = exports.GatsbyContentfulFluid = exports.GatsbyContentfulFixed_withWebp_noBase64 = exports.GatsbyContentfulFixed_withWebp = exports.GatsbyContentfulFixed_noBase64 = exports.GatsbyContentfulFixed_tracedSVG = exports.GatsbyContentfulFixed = void 0;

var _gatsby = require("gatsby");

/* eslint-disable camelcase */

/**
 * The simplest set of fields for fixed assets
 * @type {Fragment}
 * @example
 * myContentfulAssetField {
 *   fixed {
 *     ...GatsbyContentfulFixed
 *     # ^ identical to using the following fields:
 *     # base64
 *     # width
 *     # height
 *     # src
 *     # srcSet
 *   }
 * }
 */
const GatsbyContentfulFixed = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFixed on ContentfulFixed {
    base64
    width
    height
    src
    srcSet
  }
`;
/**
 * Traced SVG fixed images
 * @type {Fragment}
 */

exports.GatsbyContentfulFixed = GatsbyContentfulFixed;
const GatsbyContentfulFixed_tracedSVG = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFixed_tracedSVG on ContentfulFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;
/**
 * Assets without the blurred base64 imate
 * @type {Fragment}
 */

exports.GatsbyContentfulFixed_tracedSVG = GatsbyContentfulFixed_tracedSVG;
const GatsbyContentfulFixed_noBase64 = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFixed_noBase64 on ContentfulFixed {
    width
    height
    src
    srcSet
  }
`;
/**
 * Fixed assets that prefer Webp
 * @type {Fragment}
 */

exports.GatsbyContentfulFixed_noBase64 = GatsbyContentfulFixed_noBase64;
const GatsbyContentfulFixed_withWebp = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFixed_withWebp on ContentfulFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
/**
 * Traced SVG fixed assets without the blurred base64 image that prefer Webp
 * @type {Fragment}
 */

exports.GatsbyContentfulFixed_withWebp = GatsbyContentfulFixed_withWebp;
const GatsbyContentfulFixed_withWebp_noBase64 = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFixed_withWebp_noBase64 on ContentfulFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
/**
 * The simplest set of fields for fluid assets
 * @type {Fragment}
 */

exports.GatsbyContentfulFixed_withWebp_noBase64 = GatsbyContentfulFixed_withWebp_noBase64;
const GatsbyContentfulFluid = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFluid on ContentfulFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
/**
 * Traced SVG fluid assets
 * @type {Fragment}
 */

exports.GatsbyContentfulFluid = GatsbyContentfulFluid;
const GatsbyContentfulFluid_tracedSVG = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFluid_tracedSVG on ContentfulFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;
/**
 * Traced SVG fluid assets without the blurred base64 image
 * @type {Fragment}
 */

exports.GatsbyContentfulFluid_tracedSVG = GatsbyContentfulFluid_tracedSVG;
const GatsbyContentfulFluid_noBase64 = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFluid_noBase64 on ContentfulFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
/**
 * Fluid assets that prefer Webp
 * @type {Fragment}
 */

exports.GatsbyContentfulFluid_noBase64 = GatsbyContentfulFluid_noBase64;
const GatsbyContentfulFluid_withWebp = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFluid_withWebp on ContentfulFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
/**
 * Traced SVG fluid assets without the blurred base64 image that prefer Webp
 * @type {Fragment}
 */

exports.GatsbyContentfulFluid_withWebp = GatsbyContentfulFluid_withWebp;
const contentfulAssetFluidPreferWebpNoBase64 = (0, _gatsby.graphql)`
  fragment GatsbyContentfulFluid_withWebp_noBase64 on ContentfulFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
exports.contentfulAssetFluidPreferWebpNoBase64 = contentfulAssetFluidPreferWebpNoBase64;