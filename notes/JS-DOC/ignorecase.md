# RegExp.prototype.ignoreCase

The `ignoreCase` property indicates whether or not the "`i`" flag is used with the regular expression. `ignoreCase` is a read-only property of an individual regular expression instance.

Property attributes of `RegExp.prototype.ignoreCase`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `ignoreCase` is a [`Boolean`](../boolean) and `true` if the "`i`" flag was used; otherwise, `false`. The "`i`" flag indicates that case should be ignored while attempting a match in a string.

You cannot change this property directly.

## Examples

### Using ignoreCase

    var regex = new RegExp('foo', 'i');

    console.log(regex.ignoreCase); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.ignorecase">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.ignorecase</span></a></td></tr></tbody></table>

`ignoreCase`

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
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase</a>
