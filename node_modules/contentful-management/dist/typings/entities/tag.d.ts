import { DefaultElements, GetTagParams, MakeRequest, MetaSysProps, SysLink } from '../common-types';
export declare type TagVisibility = 'private' | 'public';
export declare type TagSysProps = Pick<MetaSysProps, 'id' | 'version' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'> & {
    type: 'Tag';
    visibility: TagVisibility;
    space: SysLink;
    environment: SysLink;
};
export declare type TagProps = {
    sys: TagSysProps;
    name: string;
};
export declare type CreateTagProps = Omit<TagProps, 'sys'> & {
    sys: Pick<TagSysProps, 'visibility'>;
};
export declare type UpdateTagProps = Omit<TagProps, 'sys'> & {
    sys: Pick<TagSysProps, 'version'>;
};
export declare type DeleteTagParams = GetTagParams & {
    version: number;
};
export declare type TagCollectionProps = {
    sys: {
        type: 'Array';
    };
    items: TagProps[];
    total: number;
};
export interface TagCollection {
    items: Tag[];
    total: number;
}
declare type TagApi = {
    update(): Promise<Tag>;
    delete(): Promise<void>;
};
export interface Tag extends TagProps, DefaultElements<TagProps>, TagApi {
}
/**
 * @private
 */
export default function createTagApi(makeRequest: MakeRequest): TagApi;
/**
 * @private
 */
export declare function wrapTag(makeRequest: MakeRequest, data: TagProps): Tag;
/**
 * @private
 */
export declare const wrapTagCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<TagProps>) => import("../common-types").Collection<Tag, TagProps>;
export {};
