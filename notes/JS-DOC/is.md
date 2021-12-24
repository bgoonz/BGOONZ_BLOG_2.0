# Object.is()

The `Object.is()` method determines whether two values are [the same value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

## Syntax

    Object.is(value1, value2);

### Parameters

`value1`  
The first value to compare.

`value2`  
The second value to compare.

### Return value

A [`Boolean`](../boolean) indicating whether or not the two arguments are the same value.

## Description

`Object.is()` determines whether two values are [the same value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness). Two values are the same if one of the following holds:

-   both [`undefined`](../undefined)
-   both [`null`](../null)
-   both `true` or both `false`
-   both strings of the same length with the same characters in the same order
-   both the same object (meaning both values reference the same object in memory)
-   both numbers and
    -   both `+0`
    -   both `-0`
    -   both [`NaN`](../nan)
    -   or both non-zero and both not [`NaN`](../nan) and both have the same value

This is _not_ the same as being equal according to the [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality) operator. The `==` operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as `"" == false` being `true`), but `Object.is` doesn't coerce either value.

This is also _not_ the same as being equal according to the [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#identity) operator. The only difference between `Object.is()` and `===` is in their treatment of signed zeroes and NaNs. For example, the `===` operator (and the `==` operator) treats the number values `-0` and `+0` as equal. Also, the `===` operator treats [`Number.NaN`](../number/nan) and [`NaN`](../nan) as not equal.

## Examples

### Using Object.is

    // Case 1: Evaluation result is the same as using ===
    Object.is(25, 25);                // true
    Object.is('foo', 'foo');          // true
    Object.is('foo', 'bar');          // false
    Object.is(null, null);            // true
    Object.is(undefined, undefined);  // true
    Object.is(window, window);        // true
    Object.is([], []);                // false
    var foo = { a: 1 };
    var bar = { a: 1 };
    Object.is(foo, foo);              // true
    Object.is(foo, bar);              // false

    // Case 2: Signed zero
    Object.is(0, -0);                 // false
    Object.is(+0, -0);                // false
    Object.is(-0, -0);                // true
    Object.is(0n, -0n);               // true

    // Case 3: NaN
    Object.is(NaN, 0/0);              // true
    Object.is(NaN, Number.NaN)        // true

## Polyfill

    if (!Object.is) {
      Object.defineProperty(Object, "is", {
        value: function (x, y) {
          // SameValue algorithm
          if (x === y) {
            // return true if x and y are not 0, OR
            // if x and y are both 0 of the same sign.
            // This checks for cases 1 and 2 above.
            return x !== 0 || 1 / x === 1 / y;
          } else {
            // return true if both x AND y evaluate to NaN.
            // The only possibility for a variable to not be strictly equal to itself
            // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
            // This checks for case 3.
            return x !== x && y !== y;
          }
        }
      });
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.is">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Object.is' in that specification.</span></a></td></tr></tbody></table>

`is`

30

12

22

No

17

9

≤37

30

22

18

9

2.0

## See also

-   [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — a comparison of all three built-in sameness facilities

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is</a>
