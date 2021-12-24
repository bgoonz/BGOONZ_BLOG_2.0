# Math.abs()

The `Math.abs()` function returns the absolute value of a number. That is, it returns `x` if `x` is positive or zero, and the negation of `x` if `x` is negative.

## Syntax

    Math.abs(x)

### Parameters

`x`  
A number.

### Return value

The absolute value of the given number.

## Description

Because `abs()` is a static method of `Math`, you always use it as `Math.abs()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Behavior of Math.abs()

Passing an empty object, an array with more than one member, a non-numeric string or [`undefined`](../undefined)/empty variable returns [`NaN`](../nan). Passing [`null`](../null), an empty string or an empty array returns 0.

    Math.abs('-1');     // 1
    Math.abs(-2);       // 2
    Math.abs(null);     // 0
    Math.abs('');       // 0
    Math.abs([]);       // 0
    Math.abs([2]);      // 2
    Math.abs([1,2]);    // NaN
    Math.abs({});       // NaN
    Math.abs('string'); // NaN
    Math.abs();         // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.abs">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Math.abs' in that specification.</span></a></td></tr></tbody></table>

`abs`

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

-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.round()`](round)
-   [`Math.sign()`](sign)
-   [`Math.trunc()`](trunc)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs</a>
