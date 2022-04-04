import { DefaultElements, MetaSysProps, MetaLinkProps, MakeRequest } from '../common-types';
export declare type TeamProps = {
    /**
     * System metadata
     */
    sys: MetaSysProps & {
        memberCount: number;
        organization: {
            sys: MetaLinkProps;
        };
    };
    /**
     * Name of the team
     */
    name: string;
    /**
     * Description of the team
     */
    description: string;
};
export declare type CreateTeamProps = Omit<TeamProps, 'sys'>;
export interface Team extends TeamProps, DefaultElements<TeamProps> {
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
     * client.getOrganization('organization_id')
     * .then(org => org.getOrganizationMembership('organizationMembership_id'))
     * .then((team) => {
     *  team.delete();
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
     * client.getOrganization('organization_id')
     * .then(org => org.getTeam('team_id'))
     * .then((team) => {
     *  team.description = 'new description';
     *  team.update();
     * })
     * .catch(console.error)
     * ```
     */
    update(): Promise<Team>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw team data
 * @return Wrapped team data
 */
export declare function wrapTeam(makeRequest: MakeRequest, data: TeamProps): Team;
/**
 * @private
 */
export declare const wrapTeamCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<TeamProps>) => import("../common-types").Collection<Team, TeamProps>;
