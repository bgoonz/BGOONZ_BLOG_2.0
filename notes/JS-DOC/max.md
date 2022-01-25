# Math.max()

The `Math.max()` function returns the largest of the zero or more numbers given as input parameters, or [`NaN`](../nan) if any parameter isn't a number and can't be converted into one.

## Syntax

    Math.max()
    Math.max(value0)
    Math.max(value0, value1)
    Math.max(value0, value1, ... , valueN)

### Parameters

`value1, value2, ...`  
Zero or more numbers among which the largest value will be selected and returned.

### Return value

The largest of the given numbers. If any one or more of the parameters cannot be converted into a number, [`NaN`](../nan) is returned. The result is -[`Infinity`](../infinity) if no parameters are provided.

## Description

Because `max()` is a static method of `Math`, you always use it as `Math.max()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If no arguments are given, the result is -[`Infinity`](../infinity).

If at least one of arguments cannot be converted to a number, the result is [`NaN`](../nan).

## Examples

### Using Math.max()

    Math.max(10, 20);   //  20
    Math.max(-10, -20); // -10
    Math.max(-10, 20);  //  20

### Getting the maximum element of an array

[`Array.reduce()`](../array/reduce) can be used to find the maximum element in a numeric array, by comparing each value:

    var arr = [1,2,3];
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });

The following function uses [`Function.prototype.apply()`](../function/apply) to get the maximum of an array. `getMaxOfArray([1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`, but you can use `getMaxOfArray()` on programmatically constructed arrays. This should only be used for arrays with relatively few elements.

    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }

The new [spread operator](../../operators/spread_syntax) is a shorter way of writing the `apply` solution to get the maximum of an array:

    var arr = [1, 2, 3];
    var max = Math.max(...arr);

However, both spread (`...`) and `apply` will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. See [Using apply and built-in functions](../function/apply#using_apply_and_built-in_functions) for more details. The `reduce` solution does not have this problem.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.max">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.max</span></a></td></tr></tbody></table>

`max`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Math.min()`](min)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max</a>
