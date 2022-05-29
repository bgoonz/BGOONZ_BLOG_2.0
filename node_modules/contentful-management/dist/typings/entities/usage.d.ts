import { DefaultElements, MakeRequest, MetaLinkProps, MetaSysProps, QueryOptions } from '../common-types';
export declare type UsageMetricEnum = 'cda' | 'cma' | 'cpa' | 'gql';
export interface UsageQuery extends QueryOptions {
    'metric[in]'?: string;
    'dateRange.startAt'?: string;
    'dateRange.endAt'?: string;
}
export declare type UsageProps = {
    /**
     * System metadata
     */
    sys: MetaSysProps & {
        organization?: {
            sys: MetaLinkProps;
        };
    };
    /**
     * Type of usage
     */
    metric: UsageMetricEnum;
    /**
     * Unit of usage metric
     */
    unitOfMeasure: string;
    /**
     * Range of usage
     */
    dateRange: {
        startAt: string;
        endAt: string;
    };
    /**
     * Value of the usage
     */
    usage: number;
    /**
     * Usage per day
     */
    usagePerDay: {
        [key: string]: number;
    };
};
export interface Usage extends UsageProps, DefaultElements<UsageProps> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw data
 * @return Normalized usage
 */
export declare function wrapUsage(_makeRequest: MakeRequest, data: UsageProps): Usage;
/**
 * @private
 */
export declare const wrapUsageCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<UsageProps>) => import("../common-types").Collection<Usage, UsageProps>;
