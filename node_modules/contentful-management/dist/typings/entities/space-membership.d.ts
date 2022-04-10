import { SysLink, MetaSysProps, DefaultElements, MakeRequest } from '../common-types';
export declare type SpaceMembershipProps = {
    sys: MetaSysProps & {
        space: SysLink;
        user: SysLink;
    };
    user: SysLink;
    admin: boolean;
    roles: SysLink[];
};
export declare type CreateSpaceMembershipProps = Omit<SpaceMembershipProps, 'sys' | 'user'> & {
    email: string;
};
export interface SpaceMembership extends SpaceMembershipProps, DefaultElements<SpaceMembershipProps> {
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
     * .then((space) => space.getSpaceMembership('<spaceMembership_id>'))
     * .then((spaceMembership) => spaceMembership.delete())
     * .then(() => console.log(`spaceMembership deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
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
     * .then((space) => space.getSpaceMembership('<spaceMembership_id>'))
     * .then((spaceMembership) => {
     *  spaceMembership.name = 'new space membership name'
     * })
     * .then((spaceMembership) => console.log(`spaceMembership ${spaceMembership.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<SpaceMembership>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw space membership data
 * @return Wrapped space membership data
 */
export declare function wrapSpaceMembership(makeRequest: MakeRequest, data: SpaceMembershipProps): SpaceMembership;
/**
 * @private
 */
export declare const wrapSpaceMembershipCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<SpaceMembershipProps>) => import("../common-types").Collection<SpaceMembership, SpaceMembershipProps>;
