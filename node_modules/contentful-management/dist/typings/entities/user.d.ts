import { DefaultElements, BasicMetaSysProps, MakeRequest } from '../common-types';
export declare type UserProps = {
    /**
     * System metadata
     */
    sys: BasicMetaSysProps;
    /**
     * First name of the user
     */
    firstName: string;
    /**
     * Last name of the user
     */
    lastName: string;
    /**
     * Url to the users avatar
     */
    avatarUrl: string;
    /**
     * Email address of the user
     */
    email: string;
    /**
     * Activation flag
     */
    activated: boolean;
    /**
     * Number of sign ins
     */
    signInCount: number;
    /**
     * User confirmation flag
     */
    confirmed: boolean;
    '2faEnabled': boolean;
    cookieConsentData: string;
};
export interface User extends UserProps, DefaultElements<UserProps> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw data
 * @return Normalized user
 */
export declare function wrapUser<T = UserProps>(_makeRequest: MakeRequest, data: T): T & {
    toPlainObject(): T;
};
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw data collection
 * @return Normalized user collection
 */
export declare const wrapUserCollection: <T = UserProps>(makeRequest: MakeRequest, data: import("../common-types").CollectionProp<T>) => import("../common-types").Collection<T & {
    toPlainObject(): T;
}, T>;
