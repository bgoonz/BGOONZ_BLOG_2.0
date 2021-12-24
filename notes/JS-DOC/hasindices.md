# RegExp.prototype.hasIndices

The `hasIndices` property indicates whether or not the "`d`" flag is used with the regular expression. `hasIndices` is a read-only property of an individual regular expression instance.

Property attributes of `RegExp.prototype.hasIndices`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `hasIndices` is a [`Boolean`](../boolean) and `true` if the "`d`" flag was used; otherwise, `false`. The "`d`" flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group.

You cannot change this property directly.

## Examples

### Using `hasIndices`

    const str1 = 'foo bar foo';

    const regex1 = new RegExp('foo', 'gd');

    console.log(regex1.hasIndices); // Output: true

    console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
    console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

    const str2 = 'foo bar foo';

    const regex2 = new RegExp('foo');

    console.log(regex2.hasIndices); // Output: false

    console.log(regex2.exec(str2).indices); // Output: undefined

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.hasIndices">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.hasIndices</span></a></td></tr></tbody></table>

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

`hasIndices`

90

90

88

No

No

No

90

90

88

No

No

No

## See also

-   [`RegExp.lastIndex`](lastindex)
-   [`RegExp.prototype.exec()`](exec)
-   [`RegExp.prototype.dotAll`](dotall)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices</a>
