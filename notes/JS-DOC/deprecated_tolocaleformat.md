# Warning: Date.prototype.toLocaleFormat is deprecated

The JavaScript warning "Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead" occurs when the non-standard <span class="page-not-created">`Date.prototype.toLocaleFormat`</span> method is used.

## Message

    Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead

## Error type

Warning. JavaScript execution won't be halted.

## What went wrong?

The non-standard <span class="page-not-created">`Date.prototype.toLocaleFormat`</span> method is deprecated and shouldn't be used anymore. It uses a format string in the same format expected by the `strftime()` function in C. **The function is no longer available in Firefox 58+**.

## Examples

### Deprecated syntax

The <span class="page-not-created">`Date.prototype.toLocaleFormat`</span> method is deprecated and will be removed (no cross-browser support, available in Firefox only).

    var today = new Date();
    var date = today.toLocaleFormat('%A, %e. %B %Y');

    console.log(date);
    // In German locale
    // "Freitag, 10. März 2017"

### Alternative standard syntax using the ECMAScript Intl API

The ECMA-402 (ECMAScript Intl API) standard specifies standard objects and methods that enable language sensitive date and time formatting (available in Chrome 24+, Firefox 29+, IE11+, Safari10+).

You can now either use the [`Date.prototype.toLocaleDateString`](../global_objects/date/tolocaledatestring) method if you just want to format one date.

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric',
                    month: 'long', day: 'numeric' };
    var date = today.toLocaleDateString('de-DE', options);

    console.log(date);
    // "Freitag, 10. März 2017"

Or, you can make use of the [`Intl.DateTimeFormat`](../global_objects/intl/datetimeformat) object, which allows you to cache an object with most of the computations done so that formatting is fast. This is useful if you have a loop of dates to format.

    var options = { weekday: 'long', year: 'numeric',
                    month: 'long', day: 'numeric' };
    var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

    var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
                 Date.UTC(2014, 04, 12, 8, 0, 0)];

    dates.forEach(date => console.log(dateFormatter.format(date)));

    // "Donnerstag, 20. Dezember 2012"
    // "Montag, 12. Mai 2014"

### Alternative standard syntax using Date methods

The [`Date`](../global_objects/date) object offers several methods to build a custom date string.

    (new Date()).toLocaleFormat("%Y%m%d");
    // "20170310"

Can be converted to:

    let now = new Date();
    let date = now.getFullYear() * 10000 +
              (now.getMonth() + 1) * 100 + now.getDate();

    console.log(date);
    // "20170310"

## See also

-   <span class="page-not-created">`Date.prototype.toLocaleFormat`</span>
-   [`Date.prototype.toLocaleDateString`](../global_objects/date/tolocaledatestring)
-   [`Intl.DateTimeFormat`](../global_objects/intl/datetimeformat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat</a>
