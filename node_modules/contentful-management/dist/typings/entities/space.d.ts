import { BasicMetaSysProps, DefaultElements, MakeRequest } from '../common-types';
import { ContentfulSpaceAPI } from '../create-space-api';
export declare type SpaceProps = {
    sys: BasicMetaSysProps & {
        organization: {
            sys: {
                id: string;
            };
        };
    };
    name: string;
};
export declare type Space = SpaceProps & DefaultElements<SpaceProps> & ContentfulSpaceAPI;
/**
 * This method creates the API for the given space with all the methods for
 * reading and creating other entities. It also passes down a clone of the
 * http client with a space id, so the base path for requests now has the
 * space id already set.
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - API response for a Space
 * @return {Space}
 */
export declare function wrapSpace(makeRequest: MakeRequest, data: SpaceProps): Space;
/**
 * This method wraps each space in a collection with the space API. See wrapSpace
 * above for more details.
 * @private
 */
export declare const wrapSpaceCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<SpaceProps>) => import("../common-types").Collection<Space, SpaceProps>;
