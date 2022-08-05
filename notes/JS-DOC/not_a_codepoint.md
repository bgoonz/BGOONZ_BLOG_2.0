# RangeError: argument is not a valid code point

The JavaScript exception "Invalid code point" occurs when [`NaN`](../global_objects/nan) values, negative Integers (-1), non-Integers (5.4), or values larger than 0x10FFFF (1114111) are used with [`String.fromCodePoint()`](../global_objects/string/fromcodepoint).

## Message

    RangeError: {0} is not a valid code point (Firefox)
    RangeError: Invalid code point {0} (Chromium)

## Error type

[`RangeError`](../global_objects/rangeerror)

## What went wrong?

[`String.fromCodePoint()`](../global_objects/string/fromcodepoint) throws this error when passed [`NaN`](../global_objects/nan) values, negative Integers (-1), non-Integers (5.4), or values larger than 0x10FFFF (1114111).

A [code point](https://en.wikipedia.org/wiki/Code_point) is a value in the Unicode codespace; that is, the range of integers from `0` to `0x10FFFF`.

## Examples

### Invalid cases

    String.fromCodePoint('_');      // RangeError
    String.fromCodePoint(Infinity); // RangeError
    String.fromCodePoint(-1);       // RangeError
    String.fromCodePoint(3.14);     // RangeError
    String.fromCodePoint(3e-2);     // RangeError
    String.fromCodePoint(NaN);      // RangeError

### Valid cases

    String.fromCodePoint(42);       // "*"
    String.fromCodePoint(65, 90);   // "AZ"
    String.fromCodePoint(0x404);    // "\u0404"
    String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
    String.fromCodePoint(194564);   // "\uD87E\uDC04"
    String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"

## See also

-   [`String.fromCodePoint()`](../global_objects/string/fromcodepoint)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_codepoint" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_codepoint</a>
