import { IDataStore, ILmdbDatabases } from "../types";
declare global {
    namespace NodeJS {
        interface Global {
            __GATSBY_OPEN_LMDBS?: Map<string, ILmdbDatabases>;
        }
    }
}
export declare function setupLmdbStore({ dbPath, }?: {
    dbPath?: string;
}): IDataStore;
