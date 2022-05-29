import { DefaultElements, BasicMetaSysProps, SysLink, MakeRequest, Link } from '../common-types';
import { ContentfulAppDefinitionAPI } from '../create-app-definition-api';
import { SetOptional, Except } from 'type-fest';
import { FieldType } from './field-type';
import { ParameterDefinition } from './widget-parameters';
export interface NavigationItem {
    name: string;
    path: string;
}
declare type LocationType = 'app-config' | 'entry-sidebar' | 'entry-editor' | 'dialog' | 'page';
export interface SimpleLocation {
    location: LocationType;
}
export interface EntryFieldLocation {
    location: 'entry-field';
    fieldTypes: FieldType[];
}
export interface PageLocation {
    location: 'page';
    navigationItem?: NavigationItem;
}
export declare type AppLocation = SimpleLocation | EntryFieldLocation | PageLocation;
export declare type AppDefinitionProps = {
    /**
     * System metadata
     */
    sys: BasicMetaSysProps & {
        organization: SysLink;
        shared: boolean;
    };
    /**
     * App name
     */
    name: string;
    /**
     * URL where the root HTML document of the app can be found
     */
    src?: string;
    /**
     * Link to an AppBundle
     */
    bundle?: Link<'AppBundle'>;
    /**
     * Locations where the app can be installed
     */
    locations?: AppLocation[];
    /**
     * Instance parameter definitions
     */
    parameters?: {
        instance?: ParameterDefinition[];
    };
};
export declare type CreateAppDefinitionProps = SetOptional<Except<AppDefinitionProps, 'sys' | 'bundle'>, 'src' | 'locations'>;
export declare type AppDefinition = ContentfulAppDefinitionAPI & AppDefinitionProps & DefaultElements<AppDefinitionProps>;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Definition data
 * @return Wrapped App Definition data
 */
export declare function wrapAppDefinition(makeRequest: MakeRequest, data: AppDefinitionProps): AppDefinition;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw App Definition collection data
 * @return Wrapped App Definition collection data
 */
export declare const wrapAppDefinitionCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<AppDefinitionProps>) => import("../common-types").Collection<AppDefinition, AppDefinitionProps>;
export {};
