# Date.prototype.setHours()

The `setHours()` method sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated [`Date`](../date) instance.

## Syntax

    setHours(hoursValue)
    setHours(hoursValue, minutesValue)
    setHours(hoursValue, minutesValue, secondsValue)
    setHours(hoursValue, minutesValue, secondsValue, msValue)

### Parameters

`hoursValue`  
Ideally, an integer between 0 and 23, representing the hour. If a value greater than 23 is provided, the datetime will be incremented by the extra hours.

`minutesValue`  
Optional. Ideally, an integer between 0 and 59, representing the minutes. If a value greater than 59 is provided, the datetime will be incremented by the extra minutes.

`secondsValue`  
Optional. Ideally, an integer between 0 and 59, representing the seconds. If a value greater than 59 is provided, the datetime will be incremented by the extra seconds. If you specify the `secondsValue` parameter, you must also specify the `minutesValue`.

`msValue`  
Optional. Ideally, a number between 0 and 999, representing the milliseconds. If a value greater than 999 is provided, the datetime will be incremented by the extra milliseconds. If you specify the `msValue` parameter, you must also specify the `minutesValue` and `secondsValue`.

### Return value

The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `minutesValue`, `secondsValue`, and `msValue` parameters, the values returned from the [`getMinutes()`](getminutes), [`getSeconds()`](getseconds), and [`getMilliseconds()`](getmilliseconds) methods are used.

If a parameter you specify is outside of the expected range, `setHours()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 100 for `secondsValue`, the minutes will be incremented by 1 (`minutesValue + 1`), and 40 will be used for seconds.

## Examples

### Using setHours()

    var theBigDay = new Date();
    theBigDay.setHours(7);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.sethours">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.sethours</span></a></td></tr></tbody></table>

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

`setHours`

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

-   [`Date.prototype.getHours()`](gethours)
-   [`Date.prototype.setUTCHours()`](setutchours)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours</a>
