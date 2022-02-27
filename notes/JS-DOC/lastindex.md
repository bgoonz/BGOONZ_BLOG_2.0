# RegExp: lastIndex

`lastIndex` is a read/write integer property of [`RegExp`](../regexp) instances that specifies the index at which to start the next match.

Note that `lastIndex` is not a property of the [`RegExp`](../regexp) prototype but is instead only exposed from [`RegExp`](../regexp) instances.

Property attributes of `RegExp: lastIndex`

Writable

yes

Enumerable

no

Configurable

no

## Description

This property is set only if the regular expression instance used the `g` flag to indicate a global search, or the `y` flag to indicate a sticky search. The following rules apply:

-   If `lastIndex` is greater than the length of the string, [`test()`](test) and [`exec()`](exec) fail, then `lastIndex` is set to 0.
-   If `lastIndex` is equal to or less than the length of the string and if the regular expression matches the empty string, then the regular expression matches input starting from `lastIndex`.
-   If `lastIndex` is equal to the length of the string and if the regular expression does not match the empty string, then the regular expression mismatches input, and `lastIndex` is reset to 0.
-   Otherwise, `lastIndex` is set to the next position following the most recent match.

## Examples

### Using lastIndex

Consider the following sequence of statements:

    var re = /(hi)?/g;

Matches the empty string.

    console.log(re.exec('hi'));
    console.log(re.lastIndex);

Returns `["hi", "hi"]` with `lastIndex` equal to 2.

    console.log(re.exec('hi'));
    console.log(re.lastIndex);

Returns `["", undefined]`, an empty array whose zeroth element is the match string. In this case, the empty string because `lastIndex` was 2 (and still is 2) and `hi` has length 2.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-properties-of-regexp-instances">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-properties-of-regexp-instances</span></a></td></tr></tbody></table>

`lastIndex`

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

## See also

-   [`RegExp.prototype.dotAll`](dotall)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.hasIndices`](hasindices)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex</a>
