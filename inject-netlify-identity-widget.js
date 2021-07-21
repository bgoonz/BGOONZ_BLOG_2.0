#!/usr/bin/env node

/**
 * Mode info on what what this script does can be found here:
 * https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
 */

console.log('[inject-netlify-identity-widget.js] injecting netlify-cms scripts');

const fs = require('fs');
const path = require('path');

const publishDir = process.argv[2];

if (!publishDir) {
    throw new Error(`[inject-netlify-identity-widget.js] command must be called with single argument specifying the location of publish dir`);
}

const indexHTMLFilePath = path.resolve(publishDir, 'index.html');

if (!fs.existsSync(indexHTMLFilePath)) {
    throw new Error(`[inject-netlify-identity-widget.js] ${indexHTMLFilePath} was not found`);
}

function injectHtmlBeforeHtml(html, beforeHtml, injectHtml) {
    const index = html.indexOf(beforeHtml);
    if (index === -1) {
        throw new Error(`[inject-netlify-identity-widget.js] ${beforeHtml} was not found in ${indexHTMLFilePath}`);
    }
    return html.slice(0, index) + injectHtml + html.slice(index);
}

console.log(`[inject-netlify-identity-widget.js] reading ${indexHTMLFilePath}`);

let indexHTMLData = fs.readFileSync(indexHTMLFilePath, 'utf8');

console.log(`[inject-netlify-identity-widget.js] injecting scripts`);

indexHTMLData = injectHtmlBeforeHtml(indexHTMLData, '</head>', `<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>`);
indexHTMLData = injectHtmlBeforeHtml(indexHTMLData, '</body>', `<script src="admin/netlify-identity.js"></script>`);

fs.writeFileSync(indexHTMLFilePath, indexHTMLData, 'utf8');

console.log(`[inject-netlify-identity-widget.js] done`);
