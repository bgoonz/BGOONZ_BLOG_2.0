# Date.prototype.toDateString()

The `toDateString()` method returns the date portion of a [`Date`](../date) object in English in the following format separated by spaces:

1.  First three letters of the week day name
2.  First three letters of the month name
3.  Two digit day of the month, padded on the left a zero if necessary
4.  Four digit year (at least), padded on the left with zeros if necessary

E.g. "Thu Jan 01 1970".

## Syntax

    toDateString()

### Return value

A string representing the date portion of the given [`Date`](../date) object in human readable form in English.

## Description

[`Date`](../date) instances refer to a specific point in time. Calling [`toString()`](tostring) will return the date formatted in a human readable form in English. In [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), this consists of the date portion (day, month, and year) followed by the time portion (hours, minutes, seconds, and time zone). Sometimes it is desirable to obtain a string of the time portion; such a thing can be accomplished with the `toTimeString()` method.

The `toDateString()` method is especially useful because compliant engines implementing [ECMA-262](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) may differ in the string obtained from [`toString()`](tostring) for [`Date`](../date) objects, as the format is implementation-dependent and simple string slicing approaches may not produce consistent results across multiple engines.

## Examples

### A basic usage of toDateString()

    var d = new Date(1993, 5, 28, 14, 39, 7);

    console.log(d.toString());     // logs Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
    console.log(d.toDateString()); // logs Mon Jun 28 1993

**Note:** Month are 0-indexed when used as an argument of [`Date`](../date) (thus 0 corresponds to January and 11 to December).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.todatestring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.todatestring</span></a></td></tr></tbody></table>

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

`toDateString`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.toLocaleDateString()`](tolocaledatestring)
-   [`Date.prototype.toTimeString()`](totimestring)
-   [`Date.prototype.toString()`](tostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString</a>
