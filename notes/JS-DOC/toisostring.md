# Date.prototype.toISOString()

The `toISOString()` method returns a string in _simplified_ extended ISO format ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)), which is always 24 or 27 characters long (`YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectively). The timezone is always zero UTC offset, as denoted by the suffix "`Z`".

## Syntax

    toISOString()

### Return value

A string representing the given date in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format according to universal time.

## Examples

### Using toISOString()

    let today = new Date('05 October 2011 14:48 UTC')

    console.log(today.toISOString())  // Returns 2011-10-05T14:48:00.000Z

The above example uses parsing of a non–standard string value that may not be correctly parsed in non–Mozilla browsers.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.toisostring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.toisostring</span></a></td></tr></tbody></table>

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

`toISOString`

3

12

1

9

10.5

5

≤37

18

4

11

4.2

1.0

## See also

-   [`Date.prototype.toLocaleDateString()`](tolocaledatestring)
-   [`Date.prototype.toTimeString()`](totimestring)
-   [`Date.prototype.toUTCString()`](toutcstring)
-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/date.polyfill.js)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString</a>
