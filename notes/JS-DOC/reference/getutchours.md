Date.prototype.getUTCHours()
============================

The `getUTCHours()` method returns the hours in the specified date according to universal time.

Syntax
------

    getUTCHours()

### Return value

An integer number, between 0 and 23, representing the hours in the given date according to universal time.

Examples
--------

### Using getUTCHours()

The following example assigns the hours portion of the current time to the variable `hours`.

    var today = new Date();
    var hours = today.getUTCHours();

Specifications
--------------

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><p>ECMAScript Language Specification (ECMAScript)<br />
</p><span class="small">#sec-date.prototype.getutchours</span></td></tr></tbody></table>

`getUTCHours`

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

-   [`Date.prototype.getHours()`](gethours)
-   [`Date.prototype.setUTCHours()`](setutchours)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours</a>
