import { MetaSysProps, DefaultElements, MakeRequest } from '../common-types';
export declare type SnapshotProps<T> = {
    sys: MetaSysProps & {
        snapshotType: string;
        snapshotEntityType: string;
    };
    snapshot: T;
};
export interface Snapshot<T> extends SnapshotProps<T>, DefaultElements<SnapshotProps<T>> {
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw snapshot data
 * @return Wrapped snapshot data
 */
export declare function wrapSnapshot<T>(_makeRequest: MakeRequest, data: SnapshotProps<T>): Snapshot<T>;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw snapshot collection data
 * @return Wrapped snapshot collection data
 */
export declare const wrapSnapshotCollection: <T>(makeRequest: MakeRequest, data: import("../common-types").CollectionProp<SnapshotProps<T>>) => import("../common-types").Collection<Snapshot<T>, SnapshotProps<T>>;
