import { BasicMetaSysProps, DefaultElements, GetSpaceEnvironmentParams, GetWorkflowParams, Link, MakeRequest, PaginationQueryOptions, SysLink } from '../common-types';
export declare type WorkflowSysProps = Pick<BasicMetaSysProps, 'id' | 'version' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'> & {
    type: 'Workflow';
    space: SysLink;
    environment: SysLink;
    completedBy?: SysLink;
    completedAt?: string;
    deletedBy?: SysLink;
    deletedAt?: string;
    entity: Link<'Entry'>;
    workflowDefinition: Link<'WorkflowDefinition'>;
};
export declare type WorkflowProps = {
    sys: WorkflowSysProps;
    stepId?: string;
};
export declare type CreateWorkflowProps = Omit<WorkflowProps, 'sys'> & {
    entity: Link<'Entry'>;
    workflowDefinition: Link<'WorkflowDefinition'>;
};
export declare type UpdateWorkflowProps = Omit<WorkflowProps, 'sys'> & {
    sys: Pick<WorkflowSysProps, 'version'>;
};
export declare type CreateWorkflowParams = GetSpaceEnvironmentParams;
export declare type UpdateWorkflowParams = GetWorkflowParams;
export declare type DeleteWorkflowParams = GetWorkflowParams & {
    version: number;
};
export declare type CompleteWorkflowParams = DeleteWorkflowParams;
declare type WorkflowApi = {
    update(): Promise<Workflow>;
    delete(): Promise<void>;
    complete(): Promise<void>;
};
export interface Workflow extends WorkflowProps, DefaultElements<WorkflowProps>, WorkflowApi {
}
export declare type WorkflowQueryOptions = Omit<PaginationQueryOptions, 'order'> & {
    'stepId[in]'?: string;
    /** Find workflows filtered by the Entity type (Entry) */
    'sys.entity.sys.linkType'?: string;
    /** Find workflows containing the specified, comma-separated entities. Requires `sys.entity.sys.linkType` */
    'sys.entity.sys.id[in]'?: string;
    'sys.workflowDefinition.sys.id'?: string;
};
/**
 * @private
 */
export default function createWorkflowApi(makeRequest: MakeRequest): WorkflowApi;
/**
 * @private
 */
export declare function wrapWorkflow(makeRequest: MakeRequest, data: WorkflowProps): Workflow;
/**
 * @private
 */
export declare const wrapWorkflowCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<WorkflowProps>) => import("../common-types").Collection<Workflow, WorkflowProps>;
export {};
