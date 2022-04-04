import { Except } from 'type-fest';
import { BasicMetaSysProps, DefaultElements, MakeRequest, SysLink } from '../common-types';
declare type AppBundleSys = Except<BasicMetaSysProps, 'version'> & {
    appDefinition: SysLink;
    organization: SysLink;
};
export declare type AppBundleFile = {
    name: string;
    size: number;
    md5: string;
};
export declare type CreateAppBundleProps = {
    appUploadId: string;
    comment?: string;
};
export declare type AppBundleProps = {
    /**
     * System metadata
     */
    sys: AppBundleSys;
    /**
     * List of all the files that are in this bundle
     */
    files: AppBundleFile[];
    /**
     * A comment that describes this bundle
     */
    comment?: string;
};
export interface AppBundle extends AppBundleProps, DefaultElements<AppBundleProps> {
    /**
     * Deletes this object on the server.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppDefinition('<app_def_id>'))
     * .then((appDefinition) => appDefinition.getAppBundle('<app-bundle-id>'))
     * .then((appBundle) => appBundle.delete())
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Bundle data
 * @return Wrapped App Bundle data
 */
export declare function wrapAppBundle(makeRequest: MakeRequest, data: AppBundleProps): AppBundle;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Bundle collection data
 * @return Wrapped App Bundle collection data
 */
export declare const wrapAppBundleCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<AppBundleProps>) => import("../common-types").Collection<AppBundle, AppBundleProps>;
export {};
