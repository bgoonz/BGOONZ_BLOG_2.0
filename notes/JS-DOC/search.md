# String.prototype.search()

The `search()` method executes a search for a match between a regular expression and this [`String`](../string) object.

## Syntax

    search(regexp)

### Parameters

`regexp`  
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) object.

If a non-RegExp object `regexp` is passed, it is implicitly converted to a [`RegExp`](../regexp) with `new RegExp(regexp)`.

### Return value

The index of the first match between the regular expression and the given string, or `-1` if no match was found.

## Description

When you want to know whether a pattern is found, and _also_ know its index within a string, use `search()`. (If you only want to know if it exists, use the similar [`test()`](../regexp/test) method on the `RegExp` prototype, which returns a boolean.)

For more information (but slower execution) use [`match()`](match) (similar to the regular expression [`exec()`](../regexp/exec) method).

## Examples

### Using search()

The following example searches a string with two different regex objects to show a successful search (positive value) vs. an unsuccessful search (`-1`)

    let str = "hey JudE"
    let re = /[A-Z]/g
    let reDot = /[.]/g
    console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
    console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.search">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.search</span></a></td></tr></tbody></table>

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

`search`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

`flags`

No

No

1-49

No

No

No

No

No

4-49

No

No

No

## See also

-   [Using regular expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
-   [`String.prototype.match()`](match)
-   [`RegExp.prototype.exec()`](../regexp/exec)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search</a>
