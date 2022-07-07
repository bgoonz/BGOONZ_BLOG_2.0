# String.prototype.padStart()

The `padStart()` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

## Syntax

    padStart(targetLength)
    padStart(targetLength, padString)

### Parameters

`targetLength`  
The length of the resulting string once the current `str` has been padded. If the value is less than `str.length`, then `str` is returned as-is.

`padString` <span class="badge inline optional">Optional</span>  
The string to pad the current `str` with. If `padString` is too long to stay within the `targetLength`, it will be truncated from the end. The default value is "" (`U+0020 'SPACE'`).

### Return value

A [`String`](../string) of the specified `targetLength` with `padString` applied from the start.

## Examples

### Basic examples

    'abc'.padStart(10);         // "       abc"
    'abc'.padStart(10, "foo");  // "foofoofabc"
    'abc'.padStart(6,"123465"); // "123abc"
    'abc'.padStart(8, "0");     // "00000abc"
    'abc'.padStart(1);          // "abc"

### Fixed width string number conversion

    // Javascript version of: (unsigned)
    //  printf "%0*d" width num
    function leftFillNum(num, targetLength) {
        return num.toString().padStart(targetLength, 0);
    }

    const num = 123;
    console.log(leftFillNum(num, 5));
    // expected output: "00123"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.padstart">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.padstart</span></a></td></tr></tbody></table>

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

`padStart`

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

-   [`String.prototype.padEnd()`](padend)
-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart</a>
