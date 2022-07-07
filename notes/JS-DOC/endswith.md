# String.prototype.endsWith()

The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.

## Syntax

    endsWith(searchString)
    endsWith(searchString, length)

### Parameters

`searchString`  
The characters to be searched for at the end of `str`.

`length` <span class="badge inline optional">Optional</span>  
If provided, it is used as the length of `str`. Defaults to `str.length`.

### Return value

`true` if the given characters are found at the end of the string; otherwise, `false`.

## Description

This method lets you determine whether or not a string ends with another string. This method is case-sensitive.

## Examples

### Using endsWith()

    let str = 'To be, or not to be, that is the question.'

    console.log(str.endsWith('question.'))  // true
    console.log(str.endsWith('to be'))      // false
    console.log(str.endsWith('to be', 19))  // true

## Polyfill

This method has been added to the ECMAScript 6 specification and may not be available in all JavaScript implementations yet. However, you can polyfill `String.prototype.endsWith()` with the following snippet:

    if (!String.prototype.endsWith) {
      String.prototype.endsWith = function(search, this_len) {
        if (this_len === undefined || this_len > this.length) {
          this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
      };
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.endswith">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.endswith</span></a></td></tr></tbody></table>

`endsWith`

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

-   [`String.prototype.startsWith()`](startswith)
-   [`String.prototype.includes()`](includes)
-   [`String.prototype.indexOf()`](indexof)
-   [`String.prototype.lastIndexOf()`](lastindexof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith</a>
