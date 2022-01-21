# Set.prototype.clear()

The `clear()` method removes all elements from a `Set` object.

## Syntax

    clear()

### Return value

[`undefined`](../undefined).

## Examples

### Using the clear() method

    var mySet = new Set();
    mySet.add(1);
    mySet.add('foo');

    mySet.size;       // 2
    mySet.has('foo'); // true

    mySet.clear();

    mySet.size;       // 0
    mySet.has('bar')  // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-set.prototype.clear">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-set.prototype.clear</span></a></td></tr></tbody></table>

`clear`

38

12

19

11

25

8

38

38

19

25

8

3.0

## See also

-   [`Set`](../set)
-   [`Set.prototype.delete()`](delete)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear</a>
