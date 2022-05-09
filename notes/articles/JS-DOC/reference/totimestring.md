# Date.prototype.toTimeString()

The `toTimeString()` method returns the time portion of a [`Date`](../date) object in human readable form in English.

## Syntax

    toTimeString()

### Return value

A string representing the time portion of the given date in human readable form in English.

## Description

[`Date`](../date) instances refer to a specific point in time. Calling [`toString()`](tostring) will return the date formatted in a human readable form in English. In [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), this consists of the date portion (day, month, and year) followed by the time portion (hours, minutes, seconds, and time zone). Sometimes it is desirable to obtain a string of the time portion; such a thing can be accomplished with the `toTimeString()` method.

The `toTimeString()` method is especially useful because compliant engines implementing [ECMA-262](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) may differ in the string obtained from [`toString()`](tostring) for [`Date`](../date) objects, as the format is implementation-dependent; simple string slicing approaches may not produce consistent results across multiple engines.

## Examples

### A basic usage of toTimeString()

    var d = new Date(1993, 6, 28, 14, 39, 7);

    console.log(d.toString());     // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
    console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.totimestring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.totimestring</span></a></td></tr></tbody></table>

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

`toTimeString`

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

-   [`Date.prototype.toLocaleTimeString()`](tolocaletimestring)
-   [`Date.prototype.toDateString()`](todatestring)
-   [`Date.prototype.toString()`](tostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString</a>
