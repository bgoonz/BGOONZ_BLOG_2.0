import type { Actions } from "gatsby";
import type { IRemoteFileNode, IGraphQLFieldConfigDefinition } from "../types";
export declare function publicUrlResolver(source: IRemoteFileNode, actions: Actions): string;
export declare function generatePublicUrlFieldConfig(actions: Actions): IGraphQLFieldConfigDefinition<IRemoteFileNode, string>;
