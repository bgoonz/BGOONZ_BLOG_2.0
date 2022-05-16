"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const constants_1 = require("./constants");
const toNetlifyPath = (fromPath, toPath) => {
    // Modifies query parameter redirects, having no effect on other fromPath strings
    const netlifyFromPath = fromPath.replace(/[&?]/, ' ');
    // Modifies wildcard & splat redirects, having no effect on other toPath strings
    const netlifyToPath = toPath.replace(/\*/, ':splat');
    return [
        netlifyFromPath,
        netlifyToPath,
    ];
};
// eslint-disable-next-line max-statements
async function writeRedirectsFile(pluginData, redirects, rewrites) {
    const { publicFolder } = pluginData;
    if (redirects.length === 0 && rewrites.length === 0)
        return null;
    const FILE_PATH = publicFolder(`_redirects`);
    // https://www.netlify.com/docs/redirects/
    const NETLIFY_REDIRECT_KEYWORDS_ALLOWLIST = new Set([
        `query`,
        `conditions`,
        `headers`,
        `signed`,
        `edge_handler`,
    ]);
    const NETLIFY_CONDITIONS_ALLOWLIST = new Set([
        `language`,
        `country`,
    ]);
    // Map redirect data to the format Netlify expects
    // eslint-disable-next-line max-statements
    redirects = redirects.map((redirect) => {
        const { fromPath, isPermanent, redirectInBrowser, force, toPath, statusCode, ...rest } = redirect;
        let status = isPermanent ? `301` : `302`;
        if (statusCode)
            status = String(statusCode);
        if (force)
            status = `${status}!`;
        const [netlifyFromPath, netlifyToPath] = toNetlifyPath(fromPath, toPath);
        // The order of the first 3 parameters is significant.
        // The order for rest params (key-value pairs) is arbitrary.
        const pieces = [netlifyFromPath, netlifyToPath, status];
        for (const key in rest) {
            const value = rest[key];
            if (typeof value === `string` && value.includes(` `)) {
                console.warn(`Invalid redirect value "${value}" specified for key "${key}". Values should not contain spaces.`);
            }
            else if (key === 'conditions') {
                // "conditions" key from Gatsby contains only "language" and "country"
                // which need special transformation to match Netlify _redirects
                // https://www.gatsbyjs.com/docs/reference/config-files/actions/#createRedirect
                for (const conditionKey in value) {
                    if (NETLIFY_CONDITIONS_ALLOWLIST.has(conditionKey)) {
                        const conditionValue = Array.isArray(value[conditionKey]) ? value[conditionKey].join(',') : value[conditionKey];
                        // Gatsby gives us "country", we want "Country"
                        const conditionName = conditionKey.charAt(0).toUpperCase() + conditionKey.slice(1);
                        pieces.push(`${conditionName}=${conditionValue}`);
                    }
                }
            }
            else if (NETLIFY_REDIRECT_KEYWORDS_ALLOWLIST.has(key)) {
                pieces.push(`${key}=${value}`);
            }
        }
        return pieces.join(`  `);
    });
    rewrites = rewrites.map(({ fromPath, toPath }) => `${fromPath}  ${toPath}  200`);
    let commentFound = false;
    // Websites may also have statically defined redirects
    // In that case we should append to them (not overwrite)
    // Make sure we aren't just looking at previous build results though
    const fileExists = (0, fs_extra_1.existsSync)(FILE_PATH);
    let fileContents = ``;
    if (fileExists) {
        fileContents = await (0, fs_extra_1.readFile)(FILE_PATH, `utf8`);
        commentFound = fileContents.includes(constants_1.HEADER_COMMENT);
    }
    let data;
    if (commentFound) {
        const [theirs] = fileContents.split(`\n${constants_1.HEADER_COMMENT}\n`);
        data = theirs;
    }
    else {
        data = fileContents;
    }
    return (0, fs_extra_1.writeFile)(FILE_PATH, [data, constants_1.HEADER_COMMENT, ...redirects, ...rewrites].join(`\n`));
}
exports.default = writeRedirectsFile;
