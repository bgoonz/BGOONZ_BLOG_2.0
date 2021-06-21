export declare type PrimitiveType = number | boolean | string | null;
export declare type Definition = {
    $ref?: string;
    $schema?: string;
    $id?: string;
    description?: string;
    allOf?: Definition[];
    oneOf?: Definition[];
    anyOf?: Definition[];
    title?: string;
    type?: string | string[];
    definitions?: {
        [key: string]: any;
    };
    format?: string;
    items?: Definition | Definition[];
    minItems?: number;
    additionalItems?: {
        anyOf: Definition[];
    } | Definition;
    enum?: PrimitiveType[] | Definition[];
    default?: PrimitiveType | Object;
    additionalProperties?: Definition | boolean;
    required?: string[];
    propertyOrder?: string[];
    properties?: {
        [key: string]: any;
    };
    defaultProperties?: string[];
    patternProperties?: {
        [pattern: string]: Definition;
    };
    typeof?: 'function';
};
export declare function getSchemaWithNodeType(nodeType: string): Definition;
