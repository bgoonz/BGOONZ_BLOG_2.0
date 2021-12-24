# String.fromCharCode()

The static `String.fromCharCode()` method returns a string created from the specified sequence of UTF-16 code units.

## Syntax

    String.fromCharCode(num1)
    String.fromCharCode(num1, num2)
    String.fromCharCode(num1, num2, ..., numN)

### Parameters

`num1, ..., numN`  
A sequence of numbers that are UTF-16 code units. The range is between `0` and `65535` (`0xFFFF`). Numbers greater than `0xFFFF` are truncated. No validity checks are performed.

### Return value

A string of length `N` consisting of the `N` specified UTF-16 code units.

## Description

This method returns a string and not a [`String`](../string) object.

Because `fromCharCode()` is a static method of [`String`](../string), you always use it as `String.fromCharCode()`, rather than as a method of a [`String`](../string) object you created.

### Returning supplementary characters

In UTF-16, the most common characters can be represented by a single 16-bit value (i.e. a code unit). However, this set of characters, known as the Base Multilingual Plane (BMP), is only <sup>1</sup>/<sub>17</sub><sup>th</sup> of the total addressable Unicode code points. The remaining code points, in the range of `65536` (`0x010000`) to `1114111` (`0x10FFFF`) are known as supplementary characters. In UTF-16, supplementary characters are represented by two 16-bit code units, known as surrogates, that were reserved for this purpose. A valid combination of two surrogates used to represent a supplementary character is known as a surrogate pair.

Because `fromCharCode()` only works with 16-bit values (same as the `\u` escape sequence), a surrogate pair is required in order to return a supplementary character. For example, both `String.fromCharCode(0xD83C, 0xDF03)` and `\uD83C\uDF03` return code point `U+1F303` "Night with Stars".

While there is a mathematical relationship between the supplementary code point value (e.g. `0x1F303`) and both surrogate values that represent it (e.g., `0xD83C` and `0xDF03`), it does require an extra step to either calculate or look up the surrogate pair values every time a supplementary code point is to be used. For this reason, it's more convenient to use [`String.fromCodePoint()`](fromcodepoint) (part of the ES2015 standard), which allows for returning supplementary characters based on their actual code point value. For example, `String.fromCodePoint(0x1F303)` returns code point `U+1F303` "Night with Stars".

## Examples

### Using fromCharCode()

BMP characters, in UTF-16, use a single code unit:

    String.fromCharCode(65, 66, 67);   // returns "ABC"
    String.fromCharCode(0x2014);       // returns "—"
    String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is truncated and ignored
    String.fromCharCode(8212);         // also returns "—"; 8212 is the decimal form of 0x2014

Supplementary characters, in UTF-16, require two code units (i.e. a surrogate pair):

    String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
    String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

    String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07); // "\uD834\uDF06a\uD834\uDF07"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.fromcharcode">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.fromCharCode' in that specification.</span></a></td></tr></tbody></table>

`fromCharCode`

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

## See also

-   [`String.fromCodePoint()`](fromcodepoint)
-   [`String.prototype.charAt()`](charat)
-   [`String.prototype.charCodeAt()`](charcodeat)
-   [`String.prototype.codePointAt()`](codepointat)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode</a>
