import { Except } from 'type-fest';
import { BasicMetaSysProps, SysLink, DefaultElements, MakeRequest } from '../common-types';
declare type AppUploadSys = Except<BasicMetaSysProps, 'version'>;
export declare type AppUploadProps = {
    sys: AppUploadSys & {
        expiresAt: string;
        organization: SysLink;
    };
};
export interface AppUpload extends AppUploadProps, DefaultElements<AppUploadProps> {
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
     * .then((org) => org.getAppUpload('<app_upload_id>'))
     * .then((appUpload) => appUpload.delete())
     * .then(() => console.log(`App Upload deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Upload data
 * @return Wrapped App Upload data
 */
export declare function wrapAppUpload(makeRequest: MakeRequest, data: AppUploadProps): AppUpload;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Upload collection data
 * @return Wrapped App Upload collection data
 */
export declare const wrapAppUploadCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<AppUploadProps>) => import("../common-types").Collection<AppUpload, AppUploadProps>;
export {};
