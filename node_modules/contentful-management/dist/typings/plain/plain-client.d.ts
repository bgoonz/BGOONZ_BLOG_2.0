import { MakeRequest } from '../common-types';
import { AlphaPlainClientAPI, PlainClientAPI } from './common-types';
import { DefaultParams } from './wrappers/wrap';
export type { DefaultParams } from './wrappers/wrap';
/**
 * @private
 */
export declare const createPlainClient: (makeRequest: MakeRequest, defaults: DefaultParams | undefined, alphaFeatures?: string[] | undefined) => PlainClientAPI | AlphaPlainClientAPI;
