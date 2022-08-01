# RangeError: precision is out of range

The JavaScript exception "precision is out of range" occurs when a number that's outside of the range of 0 and 20 (or 21) was passed into `toFixed` or `toPrecision`.

## Message

    RangeError: The number of fractional digits is out of range (Edge)
    RangeError: The precision is out of range (Edge)
    RangeError: precision {0} out of range (Firefox)
    RangeError: toExponential() argument must be between 0 and 20 (Chrome)
    RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
    RangeError: toPrecision() argument must be between 1 and 21 (Chrome)

## Error type

[`RangeError`](../global_objects/rangeerror)

## What went wrong?

There was an out of range precision argument in one of these methods:

-   [`Number.prototype.toExponential()`](../global_objects/number/toexponential)
-   [`Number.prototype.toFixed()`](../global_objects/number/tofixed)
-   [`Number.prototype.toPrecision()`](../global_objects/number/toprecision)

The allowed range for these methods is usually between 0 and 20 (or 21). However, the ECMAScript specification allows to extend this range.

<table><thead><tr class="header"><th>Method</th><th>Firefox (SpiderMonkey)</th><th>Chrome, Opera (V8)</th></tr></thead><tbody><tr class="odd"><td><a href="../global_objects/number/toexponential"><code>Number.prototype.toExponential()</code></a></td><td>0 to 100</td><td>0 to 20</td></tr><tr class="even"><td><a href="../global_objects/number/tofixed"><code>Number.prototype.toFixed()</code></a></td><td>-20 to 100</td><td>0 to 20</td></tr><tr class="odd"><td><a href="../global_objects/number/toprecision"><code>Number.prototype.toPrecision()</code></a></td><td>1 to 100</td><td>1 to 21</td></tr></tbody></table>

## Examples

### Invalid cases

    77.1234.toExponential(-1);  // RangeError
    77.1234.toExponential(101); // RangeError

    2.34.toFixed(-100);         // RangeError
    2.34.toFixed(1001);         // RangeError

    1234.5.toPrecision(-1);     // RangeError
    1234.5.toPrecision(101);    // RangeError

### Valid cases

    77.1234.toExponential(4); // 7.7123e+1
    77.1234.toExponential(2); // 7.71e+1

    2.34.toFixed(1); // 2.3
    2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

    5.123456.toPrecision(5); // 5.1235
    5.123456.toPrecision(2); // 5.1
    5.123456.toPrecision(1); // 5

## See also

-   [`Number.prototype.toExponential()`](../global_objects/number/toexponential)
-   [`Number.prototype.toFixed()`](../global_objects/number/tofixed)
-   [`Number.prototype.toPrecision()`](../global_objects/number/toprecision)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Precision_range" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Precision_range</a>
