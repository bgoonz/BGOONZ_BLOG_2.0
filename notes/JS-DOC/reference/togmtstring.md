# Date.prototype.toGMTString()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `toGMTString()` method converts a date to a string, using Internet Greenwich Mean Time (GMT) conventions. The exact format of the value returned by `toGMTString()` varies according to the platform and browser, in general it should represent a human readable date string.

**Note:** `toGMTString()` is deprecated and should no longer be used. It remains implemented only for backward compatibility; please use [`toUTCString()`](toutcstring) instead.

## Syntax

    toGMTString()

### Return value

A string representing the given date following the Internet Greenwich Mean Time (GMT) convention.

## Examples

### Simple example

In this example, the `toGMTString()` method converts the date to GMT (UTC) using the operating system's time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.

    var today = new Date();
    var str = today.toGMTString();  // deprecated! use toUTCString()

    console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.togmtstring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.togmtstring</span></a></td></tr></tbody></table>

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

`toGMTString`

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

-   [`Date.prototype.toLocaleDateString()`](tolocaledatestring)
-   [`Date.prototype.toTimeString()`](totimestring)
-   [`Date.prototype.toUTCString()`](toutcstring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString</a>
