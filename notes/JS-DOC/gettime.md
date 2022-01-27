# Date.prototype.getTime()

The `getTime()` method returns the number of milliseconds\* since the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time).

\* JavaScript uses _milliseconds_ as the unit of measurement, whereas Unix Time is in _seconds_.

_getTime() always uses UTC for time representation. For example, a client browser in one timezone, getTime() will be the same as a client browser in any other timezone._

You can use this method to help assign a date and time to another [`Date`](../date) object. This method is functionally equivalent to the [`valueOf()`](valueof) method.

## Syntax

    getTime()

### Return value

A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `new Date().getTime()` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

    // reduced time precision (2ms) in Firefox 60
    new Date().getTime();
    // 1519211809934
    // 1519211810362
    // 1519211811670
    // ...

    // reduced time precision with `privacy.resistFingerprinting` enabled
    new Date().getTime();
    // 1519129853500
    // 1519129858900
    // 1519129864400
    // ...

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Examples

### Using `getTime()` for copying dates

Constructing a date object with the identical time value.

    // Since month is zero based, birthday will be January 10, 1995
    var birthday = new Date(1994, 12, 10);
    var copy = new Date();
    copy.setTime(birthday.getTime());

### Measuring execution time

Subtracting two subsequent `getTime()` calls on newly generated [`Date`](../date) objects, give the time span between these two calls. This can be used to calculate the executing time of some operations. See also [`Date.now()`](now) to prevent instantiating unnecessary [`Date`](../date) objects.

    var end, start;

    start = new Date();
    for (var i = 0; i < 1000; i++) {
      Math.sqrt(i);
    }
    end = new Date();

    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.gettime">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.gettime</span></a></td></tr></tbody></table>

`getTime`

1

12

1

4

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.setTime()`](settime)
-   [`Date.prototype.valueOf()`](valueof)
-   [`Date.now()`](now)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime</a>
