import { FieldType } from './field-type';
import { DefinedParameters, ParameterDefinition } from './widget-parameters';
import { DefaultElements, BasicMetaSysProps, SysLink, MakeRequest } from '../common-types';
import { SetRequired, RequireExactlyOne } from 'type-fest';
declare type ExtensionSysProps = BasicMetaSysProps & {
    space: SysLink;
    environment: SysLink;
    srcdocSha256?: string;
};
export declare type ExtensionProps = {
    sys: ExtensionSysProps;
    extension: {
        /**
         * Extension name
         */
        name: string;
        /**
         * Field types where an extension can be used
         */
        fieldTypes: FieldType[];
        /**
         * URL where the root HTML document of the extension can be found
         */
        src?: string;
        /**
         * String representation of the extension (e.g. inline HTML code)
         */
        srcdoc?: string;
        /**
         * Parameter definitions
         */
        parameters?: {
            instance?: ParameterDefinition[];
            installation?: ParameterDefinition[];
        };
        /**
         * Controls the location of the extension. If true it will be rendered on the sidebar instead of replacing the field's editing control
         */
        sidebar?: boolean;
    };
    /**
     * Values for installation parameters
     */
    parameters?: DefinedParameters;
};
export declare type CreateExtensionProps = {
    extension: RequireExactlyOne<SetRequired<ExtensionProps['extension'], 'name' | 'fieldTypes' | 'sidebar'>, 'src' | 'srcdoc'>;
};
export interface Extension extends ExtensionProps, DefaultElements<ExtensionProps> {
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
     * .then((environment) => environment.getUiExtension('<ui_extension_id>'))
     * .then((extension) => {
     *   extension.extension.name = 'New UI Extension name'
     *   return extension.update()
     * })
     * .then((extension) => console.log(`UI Extension ${extension.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<Extension>;
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
     * .then((environment) => environment.getUiExtension('<ui_extension_id>'))
     * .then((extension) => extension.delete())
     * .then(() => console.log(`UI Extension deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw UI Extension data
 * @return Wrapped UI Extension data
 */
export declare function wrapExtension(makeRequest: MakeRequest, data: ExtensionProps): Extension;
/**
 * @private
 */
export declare const wrapExtensionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<ExtensionProps>) => import("../common-types").Collection<Extension, ExtensionProps>;
export {};
