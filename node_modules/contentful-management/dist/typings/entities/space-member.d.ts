import { DefaultElements, MakeRequest, MetaLinkProps, MetaSysProps } from '../common-types';
export declare type SpaceMemberProps = {
    sys: MetaSysProps;
    /**
     * User is an admin
     */
    admin: boolean;
    /**
     * Array of Role Links
     */
    roles: {
        sys: MetaLinkProps;
    }[];
};
export interface SpaceMember extends SpaceMemberProps, DefaultElements<SpaceMemberProps> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw space member data
 * @return Wrapped space member data
 */
export declare function wrapSpaceMember(_makeRequest: MakeRequest, data: SpaceMemberProps): SpaceMemberProps & {
    toPlainObject(): SpaceMemberProps;
};
/**
 * @private
 */
export declare const wrapSpaceMemberCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<SpaceMemberProps>) => import("../common-types").Collection<SpaceMemberProps & {
    toPlainObject(): SpaceMemberProps;
}, SpaceMemberProps>;
