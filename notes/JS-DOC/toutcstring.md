# Date.prototype.toUTCString()

The `toUTCString()` method converts a date to a string, using the UTC time zone.

Based on [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) and modified according to [ecma-262 toUTCString](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-date.prototype.toutcstring), it can have negative values in the [2021 version](https://tc39.es/ecma262/#sec-date.prototype.toutcstring)

## Syntax

    toUTCString()

### Return value

A string representing the given date using the UTC time zone.

## Description

The value returned by `toUTCString()` is a string in the form `Www, dd Mmm yyyy hh:mm:ss GMT`, Where:

<table><thead><tr class="header"><th>Format String</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>Www</code></td><td>Day of week, as three letters (e.g. Sun, Mon, ...)</td></tr><tr class="even"><td><code>dd</code></td><td>Day of month, as two digits with leading zero if required</td></tr><tr class="odd"><td><code>Mmm</code></td><td>Month, as three letters (e.g. Jan, Feb, ...)</td></tr><tr class="even"><td><code>yyyy</code></td><td>Year, as four or more digits with leading zeroes if required</td></tr><tr class="odd"><td><code>hh</code></td><td>Hour, as two digits with leading zero if required</td></tr><tr class="even"><td><code>mm</code></td><td>Minute, as two digits with leading zero if required</td></tr><tr class="odd"><td><code>ss</code></td><td>Seconds, as two digits with leading zero if required</td></tr></tbody></table>

Prior to ECMAScript 2018, the format of the return value varied according to the platform. The most common return value was an RFC-1123 formatted date stamp, which is a slightly updated version of RFC-822 date stamps.

## Examples

### Using toUTCString()

    let today = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
    let UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.toutcstring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.toutcstring</span></a></td></tr></tbody></table>

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

`toUTCString`

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

-   [`Date.prototype.toLocaleString()`](tolocalestring)
-   [`Date.prototype.toDateString()`](todatestring)
-   [`Date.prototype.toISOString()`](toisostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString</a>
