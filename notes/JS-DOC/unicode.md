# RegExp.prototype.unicode

The `unicode` property indicates whether or not the "`u`" flag is used with a regular expression. `unicode` is a read-only property of an individual regular expression instance.

Property attributes of `RegExp.prototype.unicode`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `unicode` is a [`Boolean`](../boolean) and `true` if the "`u`" flag was used; otherwise `false`. The "`u`" flag enables various Unicode-related features. With the "u" flag, any Unicode code point escapes will be interpreted as such, for example.

You cannot change this property directly. It is read-only.

## Examples

### Using the unicode property

    var regex = new RegExp('\u{61}', 'u');

    console.log(regex.unicode); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.unicode">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.unicode</span></a></td></tr></tbody></table>

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

`unicode`

50

12

Case folding is implemented in version 13

46

No

37

10

50

50

46

37

10

5.0

## See also

-   [`RegExp.lastIndex`](lastindex)
-   [`RegExp.prototype.dotAll`](dotall)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.hasIndices`](hasindices)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode</a>
