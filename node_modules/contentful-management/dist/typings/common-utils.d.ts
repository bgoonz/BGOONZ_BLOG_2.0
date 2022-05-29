import { Collection, CollectionProp, CursorPaginatedCollection, CursorPaginatedCollectionProp, MakeRequest } from './common-types';
/**
 * @private
 */
export declare const wrapCollection: <R, T, Rest extends any[]>(fn: (makeRequest: MakeRequest, entity: T, ...rest: Rest) => R) => (makeRequest: MakeRequest, data: CollectionProp<T>, ...rest: Rest) => Collection<R, T>;
export declare const wrapCursorPaginatedCollection: <R, T, Rest extends any[]>(fn: (makeRequest: MakeRequest, entity: T, ...rest: Rest) => R) => (makeRequest: MakeRequest, data: CursorPaginatedCollectionProp<T>, ...rest: Rest) => CursorPaginatedCollection<R, T>;
