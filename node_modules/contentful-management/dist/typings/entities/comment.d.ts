import { BasicMetaSysProps, DefaultElements, GetCommentParams, GetEntryParams, Link, MakeRequest, SysLink } from '../common-types';
export declare type CommentSysProps = Pick<BasicMetaSysProps, 'id' | 'version' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'> & {
    type: 'Comment';
    space: SysLink;
    environment: SysLink;
    parentEntity: Link<'Entry'>;
};
export declare type CommentProps = {
    sys: CommentSysProps;
    body: string;
};
export declare type CreateCommentProps = Omit<CommentProps, 'sys'>;
export declare type UpdateCommentProps = Omit<CommentProps, 'sys'> & {
    sys: Pick<CommentSysProps, 'version'>;
};
export declare type CreateCommentParams = GetEntryParams;
export declare type UpdateCommentParams = GetCommentParams;
export declare type DeleteCommentParams = GetCommentParams & {
    version: number;
};
declare type CommentApi = {
    update(): Promise<Comment>;
    delete(): Promise<void>;
};
export interface Comment extends CommentProps, DefaultElements<CommentProps>, CommentApi {
}
/**
 * @private
 */
export default function createCommentApi(makeRequest: MakeRequest): CommentApi;
/**
 * @private
 */
export declare function wrapComment(makeRequest: MakeRequest, data: CommentProps): Comment;
/**
 * @private
 */
export declare const wrapCommentCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<CommentProps>) => import("../common-types").Collection<Comment, CommentProps>;
export {};
