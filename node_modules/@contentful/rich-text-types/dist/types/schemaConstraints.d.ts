import BLOCKS from './blocks';
export declare type TopLevelBlockEnum = BLOCKS.PARAGRAPH | BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3 | BLOCKS.HEADING_4 | BLOCKS.HEADING_5 | BLOCKS.HEADING_6 | BLOCKS.OL_LIST | BLOCKS.UL_LIST | BLOCKS.HR | BLOCKS.QUOTE | BLOCKS.EMBEDDED_ENTRY | BLOCKS.EMBEDDED_ASSET;
/**
 * Array of all top level block types.
 * Only these block types can be the direct children of the document.
 */
export declare const TOP_LEVEL_BLOCKS: TopLevelBlockEnum[];
/**
 * Array of all void block types
 */
export declare const VOID_BLOCKS: BLOCKS[];
/**
 * Dictionary of all container block types, and the set block types they accept as children.
 */
export declare const CONTAINERS: {
    [BLOCKS.OL_LIST]: BLOCKS[];
    [BLOCKS.UL_LIST]: BLOCKS[];
    [BLOCKS.LIST_ITEM]: TopLevelBlockEnum[];
    [BLOCKS.QUOTE]: BLOCKS[];
};
