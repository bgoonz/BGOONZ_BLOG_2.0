import { ReactNode } from 'react';
import { Block, Document, Inline, Text } from '@contentful/rich-text-types';
export declare type CommonNode = Text | Block | Inline;
export interface NodeRenderer {
    (node: Block | Inline, children: ReactNode): ReactNode;
}
export interface RenderNode {
    [k: string]: NodeRenderer;
}
export interface RenderMark {
    [k: string]: (text: ReactNode) => ReactNode;
}
export interface RenderText {
    (text: string): ReactNode;
}
export interface Options {
    /**
     * Node renderers
     */
    renderNode?: RenderNode;
    /**
     * Mark renderers
     */
    renderMark?: RenderMark;
    /**
     * Text renderer
     */
    renderText?: RenderText;
}
/**
 * Serialize a Contentful Rich Text `document` to React tree
 */
export declare function documentToReactComponents(richTextDocument: Document, options?: Options): ReactNode;
