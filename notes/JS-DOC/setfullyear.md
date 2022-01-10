# Date.prototype.setFullYear()

The `setFullYear()` method sets the full year for a specified date according to local time. Returns new timestamp.

## Syntax

    setFullYear(yearValue)
    setFullYear(yearValue, monthValue)
    setFullYear(yearValue, monthValue, dateValue)

### Parameters

`yearValue`  
An integer specifying the numeric value of the year, for example, 1995.

`monthValue`  
Optional. An integer between 0 and 11 representing the months January through December.

`dateValue`  
Optional. An integer between 1 and 31 representing the day of the month. If you specify the `dateValue` parameter, you must also specify the `monthValue`.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `monthValue` and `dateValue` parameters, the values returned from the [`getMonth()`](getmonth) and [`getDate()`](getdate) methods are used.

If a parameter you specify is outside of the expected range, `setFullYear()` attempts to update the other parameters and the date information in the [`Date`](../date) object accordingly. For example, if you specify 15 for `monthValue`, the year is incremented by 1 (`yearValue + 1`), and 3 is used for the month.

## Examples

### Using setFullYear()

    var theBigDay = new Date();
    theBigDay.setFullYear(1997);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setfullyear">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setfullyear</span></a></td></tr></tbody></table>

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

`setFullYear`

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

-   [`Date.prototype.getUTCFullYear()`](getutcfullyear)
-   [`Date.prototype.setUTCFullYear()`](setutcfullyear)
-   [`Date.prototype.setYear()`](setyear)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear</a>
