import { getRemoteFileEnums } from "./graphql/get-remote-file-enums";
import { publicUrlResolver } from "./graphql/public-url-resolver";
import { resizeResolver } from "./graphql/resize-resolver";
import { gatsbyImageResolver } from "./graphql/gatsby-image-resolver";
import type { Actions } from "gatsby";
import type { SchemaBuilder } from "./types";
export declare function getRemoteFileFields(enums: ReturnType<typeof getRemoteFileEnums>, actions: Actions): Record<string, unknown>;
declare function addRemoteFilePolyfillInterface<T = ReturnType<SchemaBuilder["buildObjectType"]>>(type: T, { schema, actions, }: {
    schema: SchemaBuilder;
    actions: Actions;
}): T;
declare function isImageCdnEnabled(): boolean;
export { polyfillImageServiceDevRoutes, addImageRoutes } from "./http-routes";
export { getRemoteFileEnums, addRemoteFilePolyfillInterface, gatsbyImageResolver, resizeResolver, publicUrlResolver, isImageCdnEnabled, };
