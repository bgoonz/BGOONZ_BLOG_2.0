# String.prototype.repeat()

The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

## Syntax

    repeat(count)

### Parameters

`count`  
An integer between `0` and [`+Infinity`](../number/positive_infinity), indicating the number of times to repeat the string.

### Return value

A new string containing the specified number of copies of the given string.

### Exceptions

-   [`RangeError`](../../errors/negative_repetition_count): repeat count must be non-negative.
-   [`RangeError`](../../errors/resulting_string_too_large): repeat count must be less than infinity and not overflow maximum string size.

## Examples

### Using repeat()

    'abc'.repeat(-1)    // RangeError
    'abc'.repeat(0)     // ''
    'abc'.repeat(1)     // 'abc'
    'abc'.repeat(2)     // 'abcabc'
    'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
    'abc'.repeat(1/0)   // RangeError

    ({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
    // 'abcabc' (repeat() is a generic method)

## Polyfill

This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet. However, you can polyfill `String.prototype.repeat()` with the following snippet:

    if (!String.prototype.repeat) {
      String.prototype.repeat = function(count) {
        'use strict';
        if (this == null)
          throw new TypeError('can\'t convert ' + this + ' to object');

        var str = '' + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (count != count)
          count = 0;

        if (count < 0)
          throw new RangeError('repeat count must be non-negative');

        if (count == Infinity)
          throw new RangeError('repeat count must be less than infinity');

        count = Math.floor(count);
        if (str.length == 0 || count == 0)
          return '';

        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28)
          throw new RangeError('repeat count must not overflow maximum string size');

        var maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
           str += str;
           count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
      }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.repeat">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.repeat' in that specification.</span></a></td></tr></tbody></table>

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

`repeat`

41

12

24

No

28

9

41

36

24

28

9

3.0

## See also

-   [`String.prototype.concat()`](concat)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat</a>
