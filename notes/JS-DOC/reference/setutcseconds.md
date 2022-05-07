# Date.prototype.setUTCSeconds()

The `setUTCSeconds()` method sets the seconds for a specified date according to universal time.

## Syntax

    setUTCSeconds(secondsValue)
    setUTCSeconds(secondsValue, msValue)

### Parameters

`secondsValue`  
An integer between 0 and 59, representing the seconds.

`msValue`  
Optional. A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `msValue` parameter, the value returned from the [`getUTCMilliseconds()`](getutcmilliseconds) method is used.

If a parameter you specify is outside of the expected range, `setUTCSeconds()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 100 for `secondsValue`, the minutes stored in the [`Date`](../date) object will be incremented by 1, and 40 will be used for seconds.

## Examples

### Using setUTCSeconds()

    var theBigDay = new Date();
    theBigDay.setUTCSeconds(20);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setutcseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setutcseconds</span></a></td></tr></tbody></table>

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

`setUTCSeconds`

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

-   [`Date.prototype.getUTCSeconds()`](getutcseconds)
-   [`Date.prototype.setSeconds()`](setseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds</a>
