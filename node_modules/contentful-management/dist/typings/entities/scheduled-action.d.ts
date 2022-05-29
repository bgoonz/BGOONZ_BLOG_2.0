import { DefaultElements, ISO8601Timestamp, BasicCursorPaginationOptions, MetaLinkProps, Link, MakeRequest, SysLink } from '../common-types';
/**
 * Represents that state of the scheduled action
 */
declare enum ScheduledActionStatus {
    /** action is pending execution */
    scheduled = "scheduled",
    /** action has been started and pending completion */
    inProgress = "inProgress",
    /** action was completed successfully (terminal state) */
    succeeded = "succeeded",
    /** action failed to complete (terminal state) */
    failed = "failed",
    /** action was canceled by a user (terminal state) */
    canceled = "canceled"
}
declare type SchedulableEntityType = 'Entry' | 'Asset' | 'Release';
declare type SchedulableActionType = 'publish' | 'unpublish';
declare type ErrorDetail = {
    error: any;
};
interface ScheduledActionFailedError {
    sys: {
        type: 'Error';
        id: string;
    };
    message?: string;
    details?: {
        errors: ErrorDetail[];
    };
}
export declare type ScheduledActionSysProps = {
    id: string;
    type: 'ScheduledAction';
    version: number;
    space: SysLink;
    status: ScheduledActionStatus;
    createdAt: ISO8601Timestamp;
    createdBy: Link<'User'> | Link<'AppDefinition'>;
    /** an ISO8601 date string representing when an action was moved to canceled */
    canceledAt?: ISO8601Timestamp;
    canceledBy?: Link<'User'> | Link<'AppDefinition'>;
    /** an ISO8601 date string representing when an action was updated */
    updatedAt: ISO8601Timestamp;
    updatedBy: Link<'User'> | Link<'AppDefinition'>;
};
export declare type ScheduledActionProps = {
    sys: ScheduledActionSysProps;
    action: SchedulableActionType;
    entity: Link<SchedulableEntityType>;
    environment?: {
        sys: MetaLinkProps;
    };
    scheduledFor: {
        datetime: ISO8601Timestamp;
        /**
         * A valid IANA timezone Olson identifier
         *
         * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
         * @example 'Asia/Kolkata'
         */
        timezone?: string;
    };
    /**
     * The Contentful-style error that occurred during execution if sys.status is failed
     *
     * @example
     * {
     *   sys: {
     *     type: 'Error',
     *     id: 'InvalidEntry'
     *   },
     *   message: 'Entry is invalid',
     *   details: {
     *     errors: [...]
     *   }
     * }
     */
    error?: ScheduledActionFailedError;
};
export declare type CreateUpdateScheduledActionProps = Pick<ScheduledActionProps, 'action' | 'entity' | 'environment' | 'scheduledFor'>;
export interface ScheduledActionCollection {
    sys: {
        type: 'Array';
    };
    pages: BasicCursorPaginationOptions;
    limit: number;
    items: ScheduledActionProps[];
}
export interface ScheduledActionQueryOptions extends BasicCursorPaginationOptions {
    'environment.sys.id': string;
    [key: string]: any;
}
export declare type ScheduledActionApi = {
    delete(): Promise<ScheduledAction>;
    update(): Promise<ScheduledAction>;
};
export interface ScheduledAction extends ScheduledActionProps, DefaultElements<ScheduledActionProps>, ScheduledActionApi {
}
export default function getInstanceMethods(makeRequest: MakeRequest): ScheduledActionApi;
/**
 * @private
 */
export declare function wrapScheduledAction(makeRequest: MakeRequest, data: ScheduledActionProps): ScheduledAction;
/**
 * @private
 */
export declare const wrapScheduledActionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<ScheduledActionProps>) => import("../common-types").Collection<ScheduledAction, ScheduledActionProps>;
export {};
