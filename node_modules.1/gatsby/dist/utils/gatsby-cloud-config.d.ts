import { IGatsbyConfig } from "../internal";
declare type ConstructConfigObjectResponse = Pick<IGatsbyConfig, "trailingSlash" | "assetPrefix" | "pathPrefix">;
export declare function constructConfigObject(gatsbyConfig: IGatsbyConfig): ConstructConfigObjectResponse;
export {};
