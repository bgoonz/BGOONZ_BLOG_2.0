# RangeError: invalid date

The JavaScript exception "invalid date" occurs when a string leading to an invalid date has been provided to [`Date`](../global_objects/date) or [`Date.parse()`](../global_objects/date/parse).

## Message

    RangeError: invalid date (Edge)
    RangeError: invalid date (Firefox)
    RangeError: invalid time value (Chrome)
    RangeError: Provided date is not in valid range (Chrome)

## Error type

[`RangeError`](../global_objects/rangeerror)

## What went wrong?

A string leading to an invalid date has been provided to [`Date`](../global_objects/date) or [`Date.parse()`](../global_objects/date/parse).

## Examples

### Invalid cases

Unrecognizable strings or dates containing illegal element values in ISO formatted strings usually return [`NaN`](../global_objects/nan). However, depending on the implementation, non–conforming ISO format strings, may also throw `RangeError: invalid date`, like the following cases in Firefox:

    new Date('foo-bar 2014');
    new Date('2014-25-23').toISOString();
    new Date('foo-bar 2014').toString();

This, however, returns [`NaN`](../global_objects/nan) in Firefox:

    Date.parse('foo-bar 2014'); // NaN

For more details, see the [`Date.parse()`](../global_objects/date/parse) documentation.

### Valid cases

    new Date('05 October 2011 14:48 UTC');
    new Date(1317826080); // Unix Time Stamp for 05 October 2011 14:48:00 UTC

## See also

-   [`Date`](../global_objects/date)
-   [`Date.prototype.parse()`](../global_objects/date/parse)
-   [`Date.prototype.toISOString()`](../global_objects/date/toisostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_date" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_date</a>
