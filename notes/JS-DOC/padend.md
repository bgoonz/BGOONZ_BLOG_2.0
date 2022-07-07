# String.prototype.padEnd()

The `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

## Syntax

    padEnd(targetLength)
    padEnd(targetLength, padString)

### Parameters

`targetLength`  
The length of the resulting string once the current `str` has been padded. If the value is lower than `str.length`, the current string will be returned as-is.

`padString` <span class="badge inline optional">Optional</span>  
The string to pad the current `str` with. If `padString` is too long to stay within `targetLength`, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is "" (`U+0020`).

### Return value

A [`String`](../string) of the specified `targetLength` with the `padString` applied at the end of the current `str`.

## Examples

### Using padEnd

    'abc'.padEnd(10);          // "abc       "
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(6, "123456"); // "abc123"
    'abc'.padEnd(1);           // "abc"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.padend">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.padend</span></a></td></tr></tbody></table>

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

`padEnd`

57

15

48

No

44

10

57

57

48

43

10

7.0

## See also

-   [`String.prototype.padStart()`](padstart)
-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd</a>
