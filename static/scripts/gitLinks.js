'use strict';

const sep = require('path').sep;
// add suffix (".html" or sep for windows test) to each part of regex
// to ignore possible occurrences in titles (e.g. blog posts)
const isEditable = `(index).html|(docs|blog)\\${sep}`;
const isEditableReg = new RegExp(isEditable);

// This middleware adds "Edit on GitHub" links to every editable page
function githubLinks(options) {
    return (files, _m, next) => {
        Object.keys(files).forEach((path) => {
            if (!isEditableReg.test(path)) {
                return;
            }

            const file = files[path];
            console.log(files);
            path = path.replace('.html', '.md').replace(/\\/g, '/');
            console.log(path);
            /*
            
            (method) String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)
            Replaces text in a string, using a regular expression or search string.
            
            @param searchValue — A string to search for.
            
            @param replaceValue — A string containing the text to replace for every successful match of searchValue in this string.
            */
            const url = `https://bgoonz-blog.netlify.app/${path}`;

            const contents = file.contents.toString() + ` <input type = "hidden" id = "editOnGitHubUrl" value="${url}"/> `;

            file.contents = Buffer.from(contents);
        });

        next();
    };
}
let path = '../../src/pages/';
let test = githubLinks( '.md', path );
console.log( path );
console.log(  test );
// module.exports = githubLinks;
