import { DefaultElements, MakeRequest, MetaSysProps } from '../common-types';
export declare type PreviewApiKeyProps = {
    sys: MetaSysProps;
    name: string;
    description: string;
    accessToken: string;
};
export interface PreviewApiKey extends PreviewApiKeyProps, DefaultElements<PreviewApiKeyProps> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw api key data
 * @return Wrapped preview api key data
 */
export declare function wrapPreviewApiKey(_makeRequest: MakeRequest, data: PreviewApiKeyProps): PreviewApiKey;
/**
 * @private
 */
export declare const wrapPreviewApiKeyCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<PreviewApiKeyProps>) => import("../common-types").Collection<PreviewApiKey, PreviewApiKeyProps>;
