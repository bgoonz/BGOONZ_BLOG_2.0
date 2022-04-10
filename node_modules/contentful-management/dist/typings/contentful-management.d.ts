/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @packageDocumentation
 */
import type { RestAdapterParams } from './adapters/REST/rest-adapter';
import { AdapterParams } from './create-adapter';
import { ClientAPI } from './create-contentful-api';
import type { AlphaPlainClientAPI, PlainClientAPI } from './plain/common-types';
import type { DefaultParams } from './plain/plain-client';
import * as editorInterfaceDefaults from './constants/editor-interface-defaults';
export type { ClientAPI } from './create-contentful-api';
export { asIterator } from './plain/as-iterator';
export { isDraft, isPublished, isUpdated } from './plain/checks';
export type { PlainClientAPI, AlphaPlainClientAPI } from './plain/common-types';
export { createClient };
export { RestAdapter } from './adapters/REST/rest-adapter';
export { editorInterfaceDefaults };
export declare type PlainClientDefaultParams = DefaultParams;
export * from './export-types';
interface UserAgentParams {
    /**
     * Application name and version e.g myApp/version
     */
    application?: string;
    /**
     * Integration name and version e.g react/version
     */
    integration?: string;
    feature?: string;
}
/**
 * @deprecated
 */
export declare type ClientParams = RestAdapterParams & UserAgentParams;
declare type ClientOptions = (RestAdapterParams | AdapterParams) & UserAgentParams;
/**
 * Create a client instance
 * @param params - Client initialization parameters
 *
 * ```javascript
 * const client = contentfulManagement.createClient({
 *  accessToken: 'myAccessToken'
 * })
 * ```
 */
declare function createClient(params: ClientOptions): ClientAPI;
declare function createClient(params: ClientOptions, opts: {
    type: 'plain';
    defaults?: DefaultParams;
}): PlainClientAPI;
declare function createClient<T extends (ReadonlyArray<string> | readonly ['workflows']) & {
    [K in keyof T]: {
        [P in K]: 'workflows';
    };
}[number]>(params: ClientOptions, opts: {
    type: 'plain';
    alphaFeatures: T;
    defaults?: DefaultParams;
}): AlphaPlainClientAPI;
declare function createClient(params: ClientOptions, opts: {
    type: 'plain';
    alphaFeatures: string[];
    defaults?: DefaultParams;
}): PlainClientAPI;
