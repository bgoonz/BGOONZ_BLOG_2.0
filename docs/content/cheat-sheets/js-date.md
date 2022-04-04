Date
----

{: .-left-reference}

### Constructor

    // Now
    new Date();

    // ms since epoch
    new Date(1419785527580);

    // Date format
    new Date('May 17, 1995 03:24:00');

    // ISO date format
    new Date('2013-03-01T01:10:00');

    new Date(2014, 2, 1, 13, 0, 59, 0);

### Constructor

`new Date(` | `2014,` | `2,` | `1,` | `13,` | `0,` | `59,` | `0)` |  
Date | Year | Month | Day | Hour | Min | Sec | Milli |

{: .-css-breakdown}

Months are zero-indexed (eg, January is `0`).

### Conversion

<table><thead><tr class="header"><th>Method</th><th>Result</th></tr></thead><tbody><tr class="odd"><td><code>d.toString()</code></td><td><code>"Mon Dec 29 2014 00:58:28 GMT+0800 (PHT)"</code></td></tr><tr class="even"><td><code>d.toTimeString()</code></td><td><code>"00:58:46 GMT+0800 (PHT)"</code></td></tr><tr class="odd"><td><code>d.toUTCString()</code></td><td><code>"Sun, 28 Dec 2014 16:58:59 GMT"</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>d.toDateString()</code></td><td><code>"Thu Jan 10 2013"</code></td></tr><tr class="even"><td><code>d.toISOString()</code></td><td><code>"2013-01-09T16:00:00.000Z"</code></td></tr><tr class="odd"><td><code>d.toLocaleString()</code></td><td><code>"12/29/2014, 12:57:31 AM"</code></td></tr><tr class="even"><td><code>d.toLocaleTimeString()</code></td><td><code>"12:57:31 AM"</code></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>d.getTime()</code></td><td><code>1419785527580</code></td></tr></tbody></table>

Accessing
---------

### Getters

<table><thead><tr class="header"><th>Method</th><th>Result</th></tr></thead><tbody><tr class="odd"><td><code>.getDate()</code></td><td><code>1..31</code></td></tr><tr class="even"><td><code>.getDay()</code></td><td><code>0..6</code> (sun..sat)</td></tr><tr class="odd"><td><code>.getFullYear()</code></td><td><code>2014</code></td></tr><tr class="even"><td><code>.getMonth()</code></td><td><code>0..11</code></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>.getHours()</code></td><td></td></tr><tr class="odd"><td><code>.getMinutes()</code></td><td></td></tr><tr class="even"><td><code>.getSeconds()</code></td><td></td></tr><tr class="odd"><td><code>.getMilliseconds()</code></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>.getTime()</code></td><td>ms since epoch</td></tr><tr class="even"><td><code>.getTimezoneOffset()</code></td><td></td></tr></tbody></table>

UTC versions are also available (eg, `.getUTCDate()`, `.getUTCDay()`, etc).

### Setters

<table><thead><tr class="header"><th>Method</th><th>Result</th></tr></thead><tbody><tr class="odd"><td><code>.setDate</code> <em>(val)</em></td><td></td></tr><tr class="even"><td><code>.setDay</code> <em>(val)</em></td><td></td></tr><tr class="odd"><td><code>.setFullYear</code> <em>(val)</em></td><td></td></tr><tr class="even"><td><code>.setMonth</code> <em>(val)</em></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>.setHours</code> <em>(val)</em></td><td></td></tr><tr class="odd"><td><code>.setMinutes</code> <em>(val)</em></td><td></td></tr><tr class="even"><td><code>.setSeconds</code> <em>(val)</em></td><td></td></tr><tr class="odd"><td><code>.setMilliseconds</code> <em>(val)</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>.setTime</code> <em>(val)</em></td><td></td></tr><tr class="even"><td><code>.setTimezoneOffset</code> <em>(val)</em></td><td></td></tr></tbody></table>

See the getters list.
