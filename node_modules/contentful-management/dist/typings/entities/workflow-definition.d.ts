import { BasicMetaSysProps, DefaultElements, GetSpaceEnvironmentParams, GetWorkflowDefinitionParams, Link, MakeRequest, PaginationQueryOptions, SysLink } from '../common-types';
import { ActionType } from './role';
export declare type WorkflowStepAction = {
    action: Link<'AppAction'>;
    body: string;
    headers: Record<string, unknown>;
};
export declare type WorkflowStepPermission = {
    effect: string;
    action: ActionType | 'all';
    actor: Link<'User' | 'Team'>;
};
export declare type WorkflowStepProps = {
    id: string;
    name: string;
    description?: string;
    actions?: WorkflowStepAction[];
    annotations?: string[];
    permissions?: WorkflowStepPermission[];
};
export declare type UpdateWorkflowStepProps = WorkflowStepProps;
export declare type CreateWorkflowStepProps = Omit<WorkflowStepProps, 'id'>;
export declare type WorkflowDefinitionSysProps = Pick<BasicMetaSysProps, 'id' | 'version' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'> & {
    type: 'WorkflowDefinition';
    space: SysLink;
    environment: SysLink;
};
export declare type WorkflowDefinitionValidationLink = {
    type: 'Link';
    validations: Array<{
        linkContentType: string[];
    }>;
    linkType: 'Entry';
};
export declare type WorkflowDefinitionProps = {
    sys: WorkflowDefinitionSysProps;
    name: string;
    description?: string;
    appliesTo?: WorkflowDefinitionValidationLink[];
    steps: WorkflowStepProps[];
};
export declare type CreateWorkflowDefinitionProps = Omit<WorkflowDefinitionProps, 'sys' | 'steps'> & {
    steps: CreateWorkflowStepProps[];
};
export declare type UpdateWorkflowDefinitionProps = Omit<WorkflowDefinitionProps, 'sys' | 'steps'> & {
    sys: Pick<WorkflowDefinitionSysProps, 'version'>;
    steps: Array<CreateWorkflowStepProps | UpdateWorkflowStepProps>;
};
export declare type CreateWorkflowDefinitionParams = GetSpaceEnvironmentParams;
export declare type UpdateWorkflowDefinitionParams = GetWorkflowDefinitionParams;
export declare type DeleteWorkflowDefinitionParams = GetWorkflowDefinitionParams & {
    version: number;
};
declare type WorkflowDefinitionApi = {
    update(): Promise<WorkflowDefinition>;
    delete(): Promise<void>;
};
export interface WorkflowDefinition extends WorkflowDefinitionProps, DefaultElements<WorkflowDefinitionProps>, WorkflowDefinitionApi {
}
export declare type WorkflowDefinitionQueryOptions = Omit<PaginationQueryOptions, 'order'>;
/**
 * @private
 */
export default function createWorkflowDefinitionApi(makeRequest: MakeRequest): WorkflowDefinitionApi;
/**
 * @private
 */
export declare function wrapWorkflowDefinition(makeRequest: MakeRequest, data: WorkflowDefinitionProps): WorkflowDefinition;
/**
 * @private
 */
export declare const wrapWorkflowDefinitionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<WorkflowDefinitionProps>) => import("../common-types").Collection<WorkflowDefinition, WorkflowDefinitionProps>;
export {};
