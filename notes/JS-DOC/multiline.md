# RegExp.prototype.multiline

The `multiline` property indicates whether or not the "`m`" flag is used with the regular expression. `multiline` is a read-only property of an individual regular expression instance.

Property attributes of `RegExp.prototype.multiline`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `multiline` is a [`Boolean`](../boolean) and is true if the "`m`" flag was used; otherwise, false. The "`m`" flag indicates that a multiline input string should be treated as multiple lines. For example, if "`m`" is used, "`^`" and "`$`" change from matching at only the start or end of the entire string to the start or end of any line within the string.

You cannot change this property directly.

## Examples

### Using multiline

    var regex = new RegExp('foo', 'm');

    console.log(regex.multiline); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.multiline">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.multiline</span></a></td></tr></tbody></table>

`multiline`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`prototype_accessor`

48

12

38

5.5

35

1.3

48

48

38

35

1

5.0

## See also

-   [`RegExp.lastIndex`](lastindex)
-   [`RegExp.prototype.dotAll`](dotall)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.hasIndices`](hasindices)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline</a>
