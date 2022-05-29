import { DefaultElements, BasicMetaSysProps, SysLink, MakeRequest } from '../common-types';
import { Except } from 'type-fest';
import { FreeFormParameters } from './widget-parameters';
export declare type AppInstallationProps = {
    sys: BasicMetaSysProps & {
        appDefinition: SysLink;
        environment: SysLink;
        space: SysLink;
    };
    /**
     * Free-form installation parameters (API limits stringified length to 16kB)
     */
    parameters?: FreeFormParameters;
};
export declare type CreateAppInstallationProps = Except<AppInstallationProps, 'sys'>;
export interface AppInstallation extends AppInstallationProps, DefaultElements<AppInstallationProps> {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @return Object returned from the server with updated changes.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironment('<environment_id>'))
     * .then((environment) => environment.getAppInstallation('<app_definition_id>'))
     * .then((appInstallation) => {
     *    appInstallation.parameters.someParameter = 'New Value'
     *    return appInstallation.update()
     * })
     * .then((appInstallation) => console.log(`App installation ${appInstallation.sys.id} was updated`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<AppInstallation>;
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
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironment('<environment_id>'))
     * .then((environment) => environment.getAppInstallation('<app_definition_id>'))
     * .then((appInstallation) => appInstallation.delete())
     * .then(() => console.log(`App installation deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Installation data
 * @return Wrapped App installation data
 */
export declare function wrapAppInstallation(makeRequest: MakeRequest, data: AppInstallationProps): AppInstallation;
/**
 * @private
 */
export declare const wrapAppInstallationCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<AppInstallationProps>) => import("../common-types").Collection<AppInstallation, AppInstallationProps>;
