import { DefaultElements, MetaSysProps, MetaLinkProps, MakeRequest } from '../common-types';
export declare type TeamMembershipProps = {
    /**
     * System metadata
     */
    sys: MetaSysProps & {
        team: {
            sys: MetaLinkProps;
        };
        organization: {
            sys: MetaLinkProps;
        };
        organizationMembership: {
            sys: MetaLinkProps;
        };
    };
    /**
     * Is admin
     */
    admin: boolean;
    /**
     * Organization membership id
     */
    organizationMembershipId: string;
};
export declare type CreateTeamMembershipProps = Omit<TeamMembershipProps, 'sys'>;
export interface TeamMembership extends TeamMembershipProps, DefaultElements<TeamMembershipProps> {
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
     * client.getOrganization('organizationId')
     * .then(org => org.getTeamMembership('teamId', 'teamMembershipId'))
     * .then((teamMembership) => {
     *  teamMembership.delete();
     * })
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
     * client.getOrganization('organizationId')
     * .then(org => org.getTeamMembership('teamId', 'teamMembershipId'))
     * .then((teamMembership) => {
     *  teamMembership.admin = true;
     *  teamMembership.update();
     * })
     * .catch(console.error)
     * ```
     */
    update(): Promise<TeamMembership>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw team membership data
 * @return Wrapped team membership data
 */
export declare function wrapTeamMembership(makeRequest: MakeRequest, data: TeamMembershipProps): TeamMembership;
/**
 * @private
 */
export declare const wrapTeamMembershipCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<TeamMembershipProps>) => import("../common-types").Collection<TeamMembership, TeamMembershipProps>;
