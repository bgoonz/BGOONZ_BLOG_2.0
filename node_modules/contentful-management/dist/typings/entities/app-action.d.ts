import { Except } from 'type-fest';
import { BasicMetaSysProps, DefaultElements, MakeRequest, SysLink } from '../common-types';
import { ParameterDefinition } from './widget-parameters';
declare type AppActionSys = Except<BasicMetaSysProps, 'version'> & {
    appDefinition: SysLink;
    organization: SysLink;
};
export declare type BodyDefinition = Omit<ParameterDefinition, 'labels'>;
export declare enum ActionTypes {
    Endpoint = "endpoint"
}
export declare type CreateAppActionProps = {
    type: ActionTypes.Endpoint;
    url: string;
    body?: BodyDefinition[];
    headers?: string[];
    name: string;
};
export declare type AppActionProps = {
    /**
     * System metadata
     */
    sys: AppActionSys;
    /**
     * Type of the action
     */
    type: ActionTypes;
    /**
     * Url that will be called when the action is invoked
     */
    url: string;
    /**
     * An optional schema for which body parameters need to be provided when calling the action
     */
    body?: BodyDefinition[];
    /**
     * An optional schema for which headers need to be provided hen calling the action
     */
    headers?: string[];
    /**
     * Human readable name for the action
     */
    name: string;
};
export interface AppAction extends AppActionProps, DefaultElements<AppActionProps> {
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
     * .then((appDefinition) => appDefinition.getAppAction('<app-bundle-id>'))
     * .then((appAction) => appAction.delete())
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
export declare function wrapAppAction(makeRequest: MakeRequest, data: AppActionProps): AppAction;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Bundle collection data
 * @return Wrapped App Bundle collection data
 */
export declare const wrapAppActionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<AppActionProps>) => import("../common-types").Collection<AppAction, AppActionProps>;
export {};
