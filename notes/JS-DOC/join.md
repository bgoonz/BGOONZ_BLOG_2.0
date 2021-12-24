# Array.prototype.join()

The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an [array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

## Syntax

    join()
    join(separator)

### Parameters

`separator` <span class="badge inline optional">Optional</span>  
Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If `separator` is an empty string, all elements are joined without any characters in between them.

### Return value

A string with all array elements joined. If `arr.length` is `0`, the empty string is returned.

## Description

The string conversions of all array elements are joined into one string.

**Warning:** If an element is `undefined`, `null` or an empty array `[]`, it is converted to an empty string.

## Examples

### Joining an array four different ways

The following example creates an array, `a`, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.

    var a = ['Wind', 'Water', 'Fire'];
    a.join();      // 'Wind,Water,Fire'
    a.join(', ');  // 'Wind, Water, Fire'
    a.join(' + '); // 'Wind + Water + Fire'
    a.join('');    // 'WindWaterFire'

### Joining an array-like object

The following example joins array-like object (`arguments`), by calling [`Function.prototype.call`](../function/call) on `Array.prototype.join`.

    function f(a, b, c) {
      var s = Array.prototype.join.call(arguments);
      console.log(s); // '1,a,true'
    }
    f(1, 'a', true);
    //expected output: "1,a,true"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.join">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Array.prototype.join' in that specification.</span></a></td></tr></tbody></table>

`join`

1

12

1

5.5

4

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.split()`](../string/split)
-   [`Array.prototype.toString()`](tostring)
-   [`TypedArray.prototype.join()`](../typedarray/join)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join</a>
