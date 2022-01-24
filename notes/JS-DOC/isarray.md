# Array.isArray()

The `Array.isArray()` method determines whether the passed value is an [`Array`](../array).

    Array.isArray([1, 2, 3]);  // true
    Array.isArray({foo: 123}); // false
    Array.isArray('foobar');   // false
    Array.isArray(undefined);  // false

## Syntax

    Array.isArray(value)

### Parameters

`value`  
The value to be checked.

### Return value

`true` if the value is an [`Array`](../array); otherwise, `false`.

## Description

If the value is an [`Array`](../array), `true` is returned; otherwise, `false` is.

See the article ["Determining with absolute accuracy whether or not a JavaScript object is an array”](https://web.mit.edu/jwalden/www/isArray.html) for more details. Given a [`TypedArray`](../typedarray) instance, `false` is always returned.

## Examples

### Using Array.isArray

    // all following calls return true
    Array.isArray([]);
    Array.isArray([1]);
    Array.isArray(new Array());
    Array.isArray(new Array('a', 'b', 'c', 'd'));
    Array.isArray(new Array(3));
    // Little known fact: Array.prototype itself is an array:
    Array.isArray(Array.prototype);

    // all following calls return false
    Array.isArray();
    Array.isArray({});
    Array.isArray(null);
    Array.isArray(undefined);
    Array.isArray(17);
    Array.isArray('Array');
    Array.isArray(true);
    Array.isArray(false);
    Array.isArray(new Uint8Array(32));
    Array.isArray({ __proto__: Array.prototype });

### `instanceof` vs `isArray`

When checking for `Array` instance, `Array.isArray` is preferred over `instanceof` because it works through `iframes`.

    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    xArray = window.frames[window.frames.length-1].Array;
    var arr = new xArray(1,2,3); // [1,2,3]

    // Correctly checking for Array
    Array.isArray(arr);  // true
    // Considered harmful, because doesn't work through iframes
    arr instanceof Array; // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.isarray">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.isarray</span></a></td></tr></tbody></table>

`isArray`

5

12

4

9

10.5

5

1

18

4

14

5

1.0

## See also

-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
-   [`Array`](../array)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray</a>
