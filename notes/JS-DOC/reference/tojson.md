Date.prototype.toJSON()
=======================

The `toJSON()` method returns a string representation of the [`Date`](../date) object.

Syntax
------

    toJSON()

### Return value

A string representation of the given date.

Description
-----------

[`Date`](../date) instances refer to a specific point in time. Calling `toJSON()` returns a string (using [`toISOString()`](toisostring)) representing the [`Date`](../date) object’s value. This method is generally intended to, by default, usefully serialize [`Date`](../date) objects during [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) serialization.

Examples
--------

### Using toJSON()

    var jsonDate = (new Date()).toJSON();
    var backToDate = new Date(jsonDate);

    console.log(jsonDate); //2015-10-26T07:46:36.611Z

Specifications
--------------

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><p>ECMAScript Language Specification (ECMAScript)<br />
</p><span class="small">#sec-date.prototype.tojson</span></td></tr></tbody></table>

Browser compatibility
---------------------

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

`toJSON`

3

12

1

8

10.5

5

≤37

18

4

11

4.2

1.0

See also
--------

-   [`Date.prototype.toLocaleDateString()`](tolocaledatestring)
-   [`Date.prototype.toTimeString()`](totimestring)
-   [`Date.prototype.toUTCString()`](toutcstring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON</a>
