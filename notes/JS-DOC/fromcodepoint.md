# String.fromCodePoint()

The static `String.fromCodePoint()` method returns a string created by using the specified sequence of code points.

## Syntax

    String.fromCodePoint(num1)
    String.fromCodePoint(num1, num2)
    String.fromCodePoint(num1, num2, ..., numN)

### Parameters

`num1, ..., numN`  
A sequence of code points.

### Return value

A string created by using the specified sequence of code points.

### Exceptions

-   A [`RangeError`](../../errors/not_a_codepoint) is thrown if an invalid Unicode code point is given (e.g. `"RangeError: NaN is not a valid code point"`).

## Description

This method returns a string (and _not_ a [`String`](../string) object).

Because `fromCodePoint()` is a static method of [`String`](../string), you must call it as `String.fromCodePoint()`, rather than as a method of a [`String`](../string) object you created.

## Polyfill

The `String.fromCodePoint()` method has been added to ECMAScript 2015 and may not be supported in all web browsers or environments yet.

Use the code below for a polyfill:

    if (!String.fromCodePoint) (function(stringFromCharCode) {
        var fromCodePoint = function(_) {
          var codeUnits = [], codeLen = 0, result = "";
          for (var index=0, len = arguments.length; index !== len; ++index) {
            var codePoint = +arguments[index];
            // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
            // The surrounding `!(...)` is required to correctly handle `NaN` cases
            // The (codePoint>>>0) === codePoint clause handles decimals and negatives
            if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint))
              throw RangeError("Invalid code point: " + codePoint);
            if (codePoint <= 0xFFFF) { // BMP code point
              codeLen = codeUnits.push(codePoint);
            } else { // Astral code point; split in surrogate halves
              // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              codePoint -= 0x10000;
              codeLen = codeUnits.push(
                (codePoint >> 10) + 0xD800,  // highSurrogate
                (codePoint % 0x400) + 0xDC00 // lowSurrogate
              );
            }
            if (codeLen >= 0x3fff) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result + stringFromCharCode.apply(null, codeUnits);
        };
        try { // IE 8 only supports `Object.defineProperty` on DOM elements
          Object.defineProperty(String, "fromCodePoint", {
            "value": fromCodePoint, "configurable": true, "writable": true
          });
        } catch(e) {
          String.fromCodePoint = fromCodePoint;
        }
    }(String.fromCharCode));

## Examples

### Using `fromCodePoint()`

Valid input:

    String.fromCodePoint(42);       // "*"
    String.fromCodePoint(65, 90);   // "AZ"
    String.fromCodePoint(0x404);    // "\u0404" == "Є"
    String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
    String.fromCodePoint(194564);   // "\uD87E\uDC04"
    String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"

Invalid input:

    String.fromCodePoint('_');      // RangeError
    String.fromCodePoint(Infinity); // RangeError
    String.fromCodePoint(-1);       // RangeError
    String.fromCodePoint(3.14);     // RangeError
    String.fromCodePoint(3e-2);     // RangeError
    String.fromCodePoint(NaN);      // RangeError

### Compared to `fromCharCode()`

[`String.fromCharCode()`](fromcharcode) cannot return supplementary characters (i.e. code points `0x010000` – `0x10FFFF`) by specifying their code point. Instead, it requires the UTF-16 surrogate pair in order to return a supplementary character:

    String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
    String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

`String.fromCodePoint()`, on the other hand, can return 4-byte supplementary characters, as well as the more common 2-byte BMP characters, by specifying their code point (which is equivalent to the UTF-32 code unit):

    String.fromCodePoint(0x1F303); // or 127747 in decimal

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.fromcodepoint">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.fromcodepoint</span></a></td></tr></tbody></table>

`fromCodePoint`

41

12

29

No

28

10

41

41

29

28

10

4.0

## See also

-   [`String.fromCharCode()`](fromcharcode)
-   [`String.prototype.charAt()`](charat)
-   [`String.prototype.codePointAt()`](codepointat)
-   [`String.prototype.charCodeAt()`](charcodeat)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint</a>
