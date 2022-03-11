# Date.prototype.setMilliseconds()

The `setMilliseconds()` method sets the milliseconds for a specified date according to local time.

## Syntax

    setMilliseconds(millisecondsValue)

### Parameters

`millisecondsValue`  
A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you specify a number outside the expected range, the date information in the [`Date`](../date) object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

## Examples

### Using setMilliseconds()

    var theBigDay = new Date();
    theBigDay.setMilliseconds(100);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setmilliseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setmilliseconds</span></a></td></tr></tbody></table>

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

`setMilliseconds`

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

-   [`Date.prototype.getMilliseconds()`](getmilliseconds)
-   [`Date.prototype.setUTCMilliseconds()`](setutcmilliseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds</a>
