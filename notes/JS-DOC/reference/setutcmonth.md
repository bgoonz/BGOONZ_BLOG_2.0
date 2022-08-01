# Date.prototype.setUTCMonth()

The `setUTCMonth()` method sets the month for a specified date according to universal time.

## Syntax

    setUTCMonth(monthValue)
    setUTCMonth(monthValue, dayValue)

### Parameters

`monthValue`  
An integer between 0 and 11, representing the months January through December.

`dayValue`  
Optional. An integer from 1 to 31, representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `dayValue` parameter, the value returned from the [`getUTCDate()`](getutcdate) method is used.

If a parameter you specify is outside of the expected range, `setUTCMonth()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 15 for `monthValue`, the year will be incremented by 1, and 3 will be used for month.

## Examples

### Using setUTCMonth()

    var theBigDay = new Date();
    theBigDay.setUTCMonth(11);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setutcmonth">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setutcmonth</span></a></td></tr></tbody></table>

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

`setUTCMonth`

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

-   [`Date.prototype.getUTCMonth()`](getutcmonth)
-   [`Date.prototype.setMonth()`](setmonth)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth</a>
