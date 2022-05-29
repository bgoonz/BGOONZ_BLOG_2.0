import { ContentfulEnvironmentAPI } from '../create-environment-api';
import { DefaultElements, SysLink, BasicMetaSysProps, MakeRequest } from '../common-types';
declare type EnvironmentMetaSys = BasicMetaSysProps & {
    status: SysLink;
    space: SysLink;
    aliases?: Array<SysLink>;
    aliasedEnvironment?: SysLink;
};
export declare type EnvironmentProps = {
    /**
     * System metadata
     */
    sys: EnvironmentMetaSys;
    /**
     * Name of the environment
     */
    name: string;
};
export declare type CreateEnvironmentProps = Partial<Omit<EnvironmentProps, 'sys'>>;
export declare type Environment = ContentfulEnvironmentAPI & EnvironmentProps & DefaultElements<EnvironmentProps>;
/**
 * This method creates the API for the given environment with all the methods for
 * reading and creating other entities. It also passes down a clone of the
 * http client with a environment id, so the base path for requests now has the
 * environment id already set.
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - API response for a Environment
 * @return
 */
export declare function wrapEnvironment(makeRequest: MakeRequest, data: EnvironmentProps): Environment;
/**
 * This method wraps each environment in a collection with the environment API. See wrapEnvironment
 * above for more details.
 * @private
 */
export declare const wrapEnvironmentCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<EnvironmentProps>) => import("../common-types").Collection<Environment, EnvironmentProps>;
export {};
