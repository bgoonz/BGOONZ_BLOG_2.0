

### Table of Contents

*   [getPage][1]
    *   [Parameters][2]
*   [getPageByFilePath][3]
    *   [Parameters][4]
*   [getPages][5]
    *   [Parameters][6]
    *   [Examples][7]

## getPage

Get the page at the provided `urlPath`.

### Parameters

*   `pages` **[Array][8]** Array of page objects. All pages must have 'url' field.
*   `urlPath` **[string][9]** The url path to find the page by

Returns **[Object][10]** 

## getPageByFilePath

Get the page at the provided `filePath`.

### Parameters

*   `pages` **[Array][8]** Array of page objects. All pages must have 'url' field.
*   `filePath` **[string][9]** The file path to find the page by

Returns **[Object][10]** 

## getPages

Get all the pages located under the provided `urlPath`, not including the
index page. I.e.: All pages having their URLs start with `urlPath` excluding
the page having its URL equal to `urlPath`.

### Parameters

*   `pages` **[Array][8]** Array of page objects. All pages must have 'url' field.
*   `urlPath` **[string][9]** The url path to filter pages by

### Examples

```javascript
pages => [
  {url: '/'},
  {url: '/about'},
  {url: '/posts'},
  {url: '/posts/hello'},
  {url: '/posts/world'}
]

getPages(pages, /posts')
=> [
  {url: '/posts/hello'},
  {url: '/posts/world'}
]
```

Returns **[Array][8]** 

[1]: #getpage

[2]: #parameters

[3]: #getpagebyfilepath

[4]: #parameters-1

[5]: #getpages

[6]: #parameters-2

[7]: #examples

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
