import { DefaultElements, Link, MakeRequest, PaginationQueryOptions, SysLink } from '../common-types';
export declare type WorkflowsChangelogQueryOptions = Omit<PaginationQueryOptions, 'order'> & {
    /** Find workflows changelog entries filtered by the Entity type (Entry) */
    'entity.sys.linkType': string;
    /** Find workflows changelog entries containing the specified, comma-separated entities. Requires `sys.entity.sys.linkType` */
    'entity.sys.id': string;
    'workflow.sys.id': string;
};
export declare type WorkflowsChangelogEntryProps = {
    event: string;
    eventBy: SysLink;
    eventAt: string;
    workflow: Link<'Workflow'>;
    workflowDefinition: Link<'WorkflowDefinition'>;
    entity: Link<'Entry'>;
    stepId: string;
    stepAnnotations: string[];
    stepName: string;
};
export interface WorkflowsChangelogEntry extends WorkflowsChangelogEntryProps, DefaultElements<WorkflowsChangelogEntryProps> {
}
/**
 * @private
 */
export declare function wrapWorkflowsChangelogEntry(_makeRequest: MakeRequest, data: WorkflowsChangelogEntryProps): WorkflowsChangelogEntry;
/**
 * @private
 */
export declare const wrapWorkflowsChangelogEntryCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<WorkflowsChangelogEntryProps>) => import("../common-types").Collection<WorkflowsChangelogEntry, WorkflowsChangelogEntryProps>;
