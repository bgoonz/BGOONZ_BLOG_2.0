import { CollectionProp, DefaultElements, EntityMetaSysProps, KeyValueMap, MakeRequest, MetadataProps } from '../common-types';
import { ContentfulEntryApi } from '../create-entry-api';
import { AssetProps } from './asset';
export declare type EntryProps<T = KeyValueMap> = {
    sys: EntityMetaSysProps;
    metadata?: MetadataProps;
    fields: T;
};
export declare type CreateEntryProps<TFields = KeyValueMap> = Omit<EntryProps<TFields>, 'sys'>;
export interface EntryReferenceProps extends CollectionProp<EntryProps> {
    includes?: {
        Entry?: EntryProps[];
        Asset?: AssetProps[];
    };
}
export declare type EntryReferenceOptionsProps = {
    /**
     * @deprecated use `include` param instead
     */
    maxDepth?: number;
    include?: number;
};
export interface Entry extends EntryProps, DefaultElements<EntryProps>, ContentfulEntryApi {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw entry data
 * @return Wrapped entry data
 */
export declare function wrapEntry(makeRequest: MakeRequest, data: EntryProps): Entry;
/**
 * Data is also mixed in with link getters if links exist and includes were requested
 * @private
 */
export declare const wrapEntryCollection: (makeRequest: MakeRequest, data: CollectionProp<EntryProps<KeyValueMap>>) => import("../common-types").Collection<Entry, EntryProps<KeyValueMap>>;
