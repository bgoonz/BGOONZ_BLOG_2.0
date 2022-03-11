# Date.now()

The static `Date.now()` method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

## Syntax

    Date.now()

### Return value

A [`Number`](../number) representing the milliseconds elapsed since the UNIX epoch.

## Polyfill

This method was standardized in ECMA-262 5<sup>th</sup> edition. Engines which have not been updated to support this method can work around the absence of this method using the following shim:

    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }

## Examples

### Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `Date.now()` might get rounded depending on browser settings.  
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

    // reduced time precision (2ms) in Firefox 60
    Date.now()
    // 1519211809934
    // 1519211810362
    // 1519211811670
    // ...

    // reduced time precision with `privacy.resistFingerprinting` enabled
    Date.now();
    // 1519129853500
    // 1519129858900
    // 1519129864400
    // ...

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.now">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.now</span></a></td></tr></tbody></table>

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

`now`

5

12

3

9

10.5

4

1

18

4

14

4

1.0

## See also

-   [`Performance.now()`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) — provides timestamps with sub-millisecond resolution for use in measuring web page performance
-   [`console.time()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) / [`console.timeEnd()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now</a>
