# Array.prototype.includes()

The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

## Syntax

    includes(searchElement)
    includes(searchElement, fromIndex)

### Parameters

`searchElement`  
The value to search for.

**Note:** When comparing strings and characters, `includes()` is _case-sensitive_.

`fromIndex` <span class="badge inline optional">Optional</span>  
The position in this array at which to begin searching for `searchElement`.

The first element to be searched is found at `fromIndex` for positive values of `fromIndex`, or at `arr.length + fromIndex` for negative values of `fromIndex` (using the [absolute value](#) of `fromIndex` as the number of elements from the end of the array at which to start the search).

Defaults to `0`.

### Return value

A [`Boolean`](../boolean) which is `true` if the value `searchElement` is found within the array (or the part of the array indicated by the index `fromIndex`, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, `-0` is considered to be equal to both `0` and `+0`), but `false` is _not_ considered to be the same as `0`.

**Note:** Technically speaking, `includes()` uses the `sameValueZero` algorithm to determine whether the given element is found.

## Examples

    [1, 2, 3].includes(2)      // true
    [1, 2, 3].includes(4)      // false
    [1, 2, 3].includes(3, 3)   // false
    [1, 2, 3].includes(3, -1)  // true
    [1, 2, NaN].includes(NaN)  // true

### `fromIndex` is greater than or equal to the array length

If `fromIndex` is greater than or equal to the length of the array, `false` is returned. The array will not be searched.

    let arr = ['a', 'b', 'c']

    arr.includes('c', 3)    // false
    arr.includes('c', 100)  // false

### Computed index is less than 0

If `fromIndex` is negative, the computed index is calculated to be used as a position in the array at which to begin searching for `searchElement`. If the computed index is less or equal than `-1 * arr.length`, the entire array will be searched.

    // array length is 3
    // fromIndex is -100
    // computed index is 3 + (-100) = -97

    let arr = ['a', 'b', 'c']

    arr.includes('a', -100) // true
    arr.includes('b', -100) // true
    arr.includes('c', -100) // true
    arr.includes('a', -2)   // false

### includes() used as a generic method

`includes()` method is intentionally generic. It does not require `this` value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).

The example below illustrates `includes()` method called on the function's [arguments](../../functions/arguments) object.

    (function() {
      console.log(Array.prototype.includes.call(arguments, 'a'))  // true
      console.log(Array.prototype.includes.call(arguments, 'd'))  // false
    })('a','b','c')

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.includes">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.includes</span></a></td></tr></tbody></table>

`includes`

47

14

43

No

34

9

47

47

43

34

9

5.0

## See also

-   [`TypedArray.prototype.includes()`](../typedarray/includes)
-   [`String.prototype.includes()`](../string/includes)
-   [`Array.prototype.indexOf()`](indexof)
-   [`Array.prototype.find()`](find)
-   [`Array.prototype.findIndex()`](findindex)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes</a>
