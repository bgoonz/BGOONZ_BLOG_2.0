# Date.prototype.setSeconds()

The `setSeconds()` method sets the seconds for a specified date according to local time.

## Syntax

    setSeconds(secondsValue)
    setSeconds(secondsValue, msValue)

### Parameters

`secondsValue`  
An integer between 0 and 59, representing the seconds.

`msValue` <span class="badge inline optional">Optional</span>  
Optional. A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `msValue` parameter, the value returned from the [`getMilliseconds()`](getmilliseconds) method is used.

If a parameter you specify is outside of the expected range, `setSeconds()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 100 for `secondsValue`, the minutes stored in the [`Date`](../date) object will be incremented by 1, and 40 will be used for seconds.

## Examples

### Using setSeconds()

    var theBigDay = new Date();
    theBigDay.setSeconds(30);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setseconds</span></a></td></tr></tbody></table>

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

`setSeconds`

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

-   [`Date.prototype.getSeconds()`](getseconds)
-   [`Date.prototype.setUTCSeconds()`](setutcseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds</a>
