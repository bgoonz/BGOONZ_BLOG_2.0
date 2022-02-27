# import.meta

The `import.meta` object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.

## Syntax

    import.meta

## Description

The syntax consists of the keyword [`import`](import), a dot, and the identifier `meta`. Normally the left-hand side of the dot is the object on which property access is performed, but here `import` is not really an object.

The `import.meta` object is created by the ECMAScript implementation, with a [`null`](../global_objects/null) prototype. The object is extensible, and its properties are writable, configurable, and enumerable.

## Examples

### Using import.meta

Given a module `my-module.js`

    <script type="module" src="my-module.js"></script>

you can access meta information about the module using the `import.meta` object.

    console.log(import.meta); // { url: "file:///home/user/my-module.js" }

It returns an object with a `url` property indicating the base URL of the module. This will either be the URL from which the script was obtained, for external scripts, or the document base URL of the containing document, for inline scripts.

Note that this will include query parameters and/or hash (i.e., following the `?` or `#`).

For example, with the following HTML:

    <script type="module">
    import './index.mjs?someURLInfo=5';
    </script>

..the following JavaScript file will log the \``someURLInfo` parameter:

    // index.mjs
    new URL(import.meta.url).searchParams.get('someURLInfo'); // 5

The same applies when a file imports another:

    // index.mjs
    import './index2.mjs?someURLInfo=5';

    // index2.mjs
    new URL(import.meta.url).searchParams.get('someURLInfo'); // 5

Note that while Node.js will pass on query parameters (or the hash) as in the latter example, as of Node 14.1.0, a URL with query parameters will err when loading in the form `node --experimental-modules index.mjs?someURLInfo=5` (it is treated as a file rather than a URL in this context).

Such file-specific argument passing may be complementary to that used in the application-wide `location.href` (with query strings or hash added after the HTML file path) (or on Node.js, through `process.argv`).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-ImportMeta">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-ImportMeta</span></a></td></tr><tr class="even"><td><a href="https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties">HTML Standard (HTML)
<br/>

<span class="small">#hostgetimportmetaproperties</span></a></td></tr></tbody></table>

`import.meta`

64

79

62

No

51

11.1

64

64

62

47

12

9.0

## See also

-   [`import`](import)
-   [`export`](export)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta</a>
