import { DefaultElements, ISO8601Timestamp, Link, MakeRequest } from '../common-types';
import { AsyncActionProcessingOptions } from '../methods/action';
declare type ReleaseActionStatuses = 'created' | 'inProgress' | 'failed' | 'succeeded';
export declare type ReleaseActionTypes = 'publish' | 'unpublish' | 'validate';
export declare type ReleaseActionSysProps = {
    id: string;
    type: 'ReleaseAction';
    space: Link<'Space'>;
    environment: Link<'Environment'>;
    release: Link<'Release'>;
    status: ReleaseActionStatuses;
    createdBy: Link<'User'>;
    createdAt: ISO8601Timestamp;
    updatedAt: ISO8601Timestamp;
};
/** The object returned by the Releases API */
export interface ReleaseActionProps<T extends ReleaseActionTypes = any> {
    action: T;
    sys: ReleaseActionSysProps;
}
export interface ReleaseActionQueryOptions {
    /** Find Release Actions by using a comma-separated list of Ids */
    'sys.id[in]'?: string;
    /**
     * Limit of how many records are returned in the query result
     * @default 100
     * */
    limit?: number;
}
export interface ReleaseActionApiMethods {
    /** Performs a new GET request and returns the wrapper Release */
    get(): ReleaseAction;
    /** Waits until the Release Action has either succeeded or failed */
    waitProcessing(options?: AsyncActionProcessingOptions): ReleaseActionProps;
}
export interface ReleaseAction<T extends ReleaseActionTypes = any> extends ReleaseActionProps<T>, ReleaseActionApiMethods, DefaultElements<ReleaseActionProps<T>> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw Release data
 * @return Wrapped Release data
 */
export declare function wrapReleaseAction(makeRequest: MakeRequest, data: ReleaseActionProps): ReleaseAction;
/**
 * @private
 */
export declare const wrapReleaseActionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<ReleaseActionProps<any>>) => import("../common-types").Collection<ReleaseAction<any>, ReleaseActionProps<any>>;
export {};
