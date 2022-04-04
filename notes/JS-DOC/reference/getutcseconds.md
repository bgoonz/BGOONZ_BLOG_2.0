Date.prototype.getUTCSeconds()
==============================

The `getUTCSeconds()` method returns the seconds in the specified date according to universal time.

Syntax
------

    getUTCSeconds()

### Return value

An integer number, between 0 and 59, representing the seconds in the given date according to universal time.

Examples
--------

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable `seconds`.

    var today = new Date();
    var seconds = today.getUTCSeconds();

Specifications
--------------

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><p>ECMAScript Language Specification (ECMAScript)<br />
</p><span class="small">#sec-date.prototype.getutcseconds</span></td></tr></tbody></table>

`getUTCSeconds`

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

See also
--------

-   [`Date.prototype.getSeconds()`](getseconds)
-   [`Date.prototype.setUTCSeconds()`](setutcseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds</a>
