# Date.prototype.setMonth()

The `setMonth()` method sets the month for a specified date according to the currently set year.

## Syntax

    setMonth(monthValue)
    setMonth(monthValue, dayValue)

### Parameters

`monthValue`  
A zero-based integer representing the month of the year offset from the start of the year. So, 0 represents January, 11 represents December, -1 represents December of the previous year, and 12 represents January of the following year.

`dayValue`  
Optional. An integer from 1 to 31, representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `dayValue` parameter, the value returned from the [`getDate()`](getdate) method is used.

If a parameter you specify is outside of the expected range, `setMonth()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 15 for `monthValue`, the year will be incremented by 1, and 3 will be used for month.

The current day of month will have an impact on the behavior of this method. Conceptually it will add the number of days given by the current day of the month to the 1st day of the new month specified as the parameter, to return the new date. For example, if the current value is 31st August 2016, calling setMonth with a value of 1 will return 2nd March 2016. This is because in 2016 February had 29 days.

## Examples

### Using setMonth()

    var theBigDay = new Date();
    theBigDay.setMonth(6);

    //Watch out for end of month transitions
    var endOfMonth = new Date(2016, 7, 31);
    endOfMonth.setMonth(1);
    console.log(endOfMonth); //Wed Mar 02 2016 00:00:00

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setmonth">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setmonth</span></a></td></tr></tbody></table>

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

`setMonth`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.getMonth()`](getmonth)
-   [`Date.prototype.setUTCMonth()`](setutcmonth)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth</a>
