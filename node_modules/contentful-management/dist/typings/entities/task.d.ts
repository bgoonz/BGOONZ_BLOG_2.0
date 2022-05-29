import { BasicMetaSysProps, DefaultElements, GetEntryParams, GetTaskParams, Link, MakeRequest, SysLink } from '../common-types';
export declare type TaskStatus = 'active' | 'resolved';
export declare type TaskSysProps = Pick<BasicMetaSysProps, 'id' | 'version' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'> & {
    type: 'Task';
    space: SysLink;
    environment: SysLink;
    parentEntity: Link<'Entry'>;
};
export declare type TaskProps = {
    sys: TaskSysProps;
    body: string;
    assignedTo: Link<'User' | 'Team'>;
    status: TaskStatus;
    dueDate?: string;
};
export declare type CreateTaskProps = Omit<TaskProps, 'sys'>;
export declare type UpdateTaskProps = Omit<TaskProps, 'sys'> & {
    sys: Pick<TaskSysProps, 'version'>;
};
export declare type CreateTaskParams = GetEntryParams;
export declare type UpdateTaskParams = GetTaskParams;
export declare type DeleteTaskParams = GetTaskParams & {
    version: number;
};
declare type TaskApi = {
    update(): Promise<Task>;
    delete(): Promise<void>;
};
export interface Task extends TaskProps, DefaultElements<TaskProps>, TaskApi {
}
/**
 * @private
 */
export default function createTaskApi(makeRequest: MakeRequest): TaskApi;
/**
 * @private
 */
export declare function wrapTask(makeRequest: MakeRequest, data: TaskProps): Task;
/**
 * @private
 */
export declare const wrapTaskCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<TaskProps>) => import("../common-types").Collection<Task, TaskProps>;
export {};
