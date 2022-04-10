import { Except } from 'type-fest';
import { BasicMetaSysProps, DefaultElements, MakeRequest, SysLink } from '../common-types';
declare type AppActionCallSys = Except<BasicMetaSysProps, 'version' | 'id'> & {
    appDefinition: SysLink;
    space: SysLink;
    environment: SysLink;
    action: SysLink;
};
export declare type AppActionCallProps = {
    /**
     * System metadata
     */
    sys: AppActionCallSys;
};
export declare type CreateAppActionCallProps = {
    /** The body for the call */
    body: {
        [key: string]: any;
    };
    /** The headers for the call*/
    headers: {
        [key: string]: any;
    };
};
export interface AppActionCall extends AppActionCallProps, DefaultElements<AppActionCallProps> {
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppActionCall data
 * @return Wrapped AppActionCall data
 */
export declare function wrapAppActionCall(_makeRequest: MakeRequest, data: AppActionCallProps): AppActionCall;
export {};
