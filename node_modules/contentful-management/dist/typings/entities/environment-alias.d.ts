import { DefaultElements, MetaLinkProps, BasicMetaSysProps, SysLink, MakeRequest } from '../common-types';
export declare type EnvironmentAliasProps = {
    /**
     * System meta data
     */
    sys: BasicMetaSysProps & {
        space: SysLink;
    };
    environment: {
        sys: MetaLinkProps;
    };
};
export declare type CreateEnvironmentAliasProps = Omit<EnvironmentAliasProps, 'sys'>;
export interface EnvironmentAlias extends EnvironmentAliasProps, DefaultElements<EnvironmentAliasProps> {
    /**
     * Sends an update to the server with any changes made to the object's properties. Currently, you can only change the id of the alias's underlying environment. See the example below.
     * @memberof EnvironmentAlias
     * @func update
     * @return {Promise<EnvironmentAlias>} Object returned from the server with updated changes.
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironmentAlias('<environment_alias_id>'))
     * .then((alias) => {
     *   alias.environment.sys.id = '<environment_id>'
     *   return alias.update()
     * })
     * .then((alias) => console.log(`alias ${alias.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<EnvironmentAlias>;
    /**
     * Deletes this object on the server.
     * @memberof EnvironmentAlias
     * @func delete
     * @return {Promise<void>} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironmentAlias('<environment_alias_id>'))
     * .then((alias) => {
     *   return alias.delete()
     * })
     * .then(() => console.log(`Alias deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw environment alias data
 * @return Wrapped environment alias data
 */
export declare function wrapEnvironmentAlias(makeRequest: MakeRequest, data: EnvironmentAliasProps): EnvironmentAlias;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw environment alias collection data
 * @return Wrapped environment alias collection data
 */
export declare const wrapEnvironmentAliasCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<EnvironmentAliasProps>) => import("../common-types").Collection<EnvironmentAlias, EnvironmentAliasProps>;
