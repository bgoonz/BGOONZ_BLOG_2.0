# String.prototype.startsWith()

The `startsWith()` method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.

## Syntax

    startsWith(searchString)
    startsWith(searchString, position)

### Parameters

`searchString`  
The characters to be searched for at the start of this string.

`position` <span class="badge inline optional">Optional</span>  
The position in this string at which to begin searching for `searchString`. Defaults to `0`.

### Return value

`true` if the given characters are found at the beginning of the string; otherwise, `false`.

## Description

This method lets you determine whether or not a string begins with another string. This method is case-sensitive.

## Examples

### Using startsWith()

    //startswith
    let str = 'To be, or not to be, that is the question.'

    console.log(str.startsWith('To be'))          // true
    console.log(str.startsWith('not to be'))      // false
    console.log(str.startsWith('not to be', 10))  // true

## Polyfill

This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet. However, you can polyfill `String.prototype.startsWith()` with the following snippet:

    if (!String.prototype.startsWith) {
        Object.defineProperty(String.prototype, 'startsWith', {
            value: function(search, rawPos) {
                var pos = rawPos > 0 ? rawPos|0 : 0;
                return this.substring(pos, pos + search.length) === search;
            }
        });
    }

A more robust (fully ES2015 specification compliant), but less performant and compact, Polyfill is available [on GitHub by Mathias Bynens](https://github.com/mathiasbynens/String.prototype.startsWith).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.startswith">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.startswith</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`startsWith`

41

12

17

No

28

9

≤37

36

17

24

9

3.0

## See also

-   [`String.prototype.endsWith()`](endswith)
-   [`String.prototype.includes()`](includes)
-   [`String.prototype.indexOf()`](indexof)
-   [`String.prototype.lastIndexOf()`](lastindexof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith</a>
