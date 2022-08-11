/**
 * It takes a string of markdown and returns a React component
 * @param markdown - The markdown string to convert to HTML.
 * @returns The function markdownify is being returned.
 */
import marked from 'marked';
import htmlToReact from './htmlToReact';

export default function markdownify(markdown) {
    if (!markdown) {
        return null;
    }
    return htmlToReact(marked(markdown));
};