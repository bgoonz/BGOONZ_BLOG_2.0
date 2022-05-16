import { Parcel } from "@parcel/core";
export declare const COMPILED_CACHE_DIR = ".cache/compiled";
export declare const PARCEL_CACHE_DIR = ".cache/.parcel-cache";
export declare const gatsbyFileRegex = "gatsby-+(node|config).ts";
/**
 * Construct Parcel with config.
 * @see {@link https://parceljs.org/features/targets/}
 */
export declare function constructParcel(siteRoot: string): Parcel;
/**
 * Compile known gatsby-* files (e.g. `gatsby-config`, `gatsby-node`)
 * and output in `<SITE_ROOT>/.cache/compiled`.
 */
export declare function compileGatsbyFiles(siteRoot: string): Promise<void>;
export declare function getResolvedFieldsForPlugin(rootDir: string, pluginName: string): {
    resolvedCompiledGatsbyNode?: string;
};
export declare function findCompiledLocalPluginModule(rootDir: string, pluginName: string, moduleName: "gatsby-config" | "gatsby-node"): string | undefined;
