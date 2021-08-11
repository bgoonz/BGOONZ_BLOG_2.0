

const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

function processHtml(html, slug, imageMap) {
    return sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['figcaption', 'img', 'iframe', 'script', 'hr', 'blockquote', 'pre']),
        allowedAttributes: {
            iframe: ['*'],
            img: ['*'],
            a: ['*'],
            div: ['class'],
            h3: ['class'],
            script: ['*'],
            blockquote: ['class']
        },
        transformTags: {
            'img': (tagName, attribs) => {
                const newAttribs = Object.assign(attribs, {
                    src: imageMap.has(attribs.src) 
                        ? `/images/${slug}/${imageMap.get(attribs.src)}` 
                        : attribs.src
                });
                return {
                    tagName: tagName,
                    attribs: newAttribs
                };
            },
            'blockquote': (tagName, attribs) => {
                let result = {
                    tagName: tagName,
                    attribs: attribs,
                };    
                if (attribs.class === 'twitter-tweet') {
                    // placeholder needed to get rendered properly
                    result.text = 'tweet'; 
                }
                return result;
            },
        },
        exclusiveFilter: function(frame) {
            return (frame.tag === 'h3' && 
                    frame.attribs['class'].includes('graf--title')) ||
                   (frame.tag === 'h4' && 
                    frame.attribs['class'].includes('graf--subtitle'));
        }
    });
}

function convertToMarkdown(html) {

    // workaround issue with multiline emphasis 
    let bodyHtml = html.replace(/<br \/><\/em>/gmi, '</em><br/>');

    // workaround issue with pre blocks
    bodyHtml = bodyHtml.replace(/<pre>/gmi, '<pre><code>');
    bodyHtml = bodyHtml.replace(/<\/pre>/gmi, '</code></pre>');

    // unicode spaces are causing issues with whitespace detection
    bodyHtml = bodyHtml.replace(/[\u2000-\u200D]+/gmi, ' ');

    const turndownService = new TurndownService({ 
        emDelimiter: '*'
    });
    turndownService.keep(['iframe', 'figcaption', 'script']);
    turndownService.addRule('twitter-tweet', {
        filter: (node) => {
            return node.nodeName === 'BLOCKQUOTE' &&
                   node.getAttribute('class') === 'twitter-tweet';
        },
        replacement: (innerHTML, node) => node.outerHTML
    });
    turndownService.addRule('pre', {
        filter: ['pre'],
        replacement: (content) => {
            return '\n    ' + content.split('\n').join('\n    ');
        }
    });

    const bodyMarkdown = turndownService.turndown(bodyHtml);

    return bodyMarkdown;
}

function convert(html, slug, imageMap) {
    const processedHtml = processHtml(html, slug, imageMap);

    const markdown = convertToMarkdown(processedHtml);

    return markdown;
}

module.exports = convert;