# Math.floor()

The `Math.floor()` function returns the largest integer less than or equal to a given number.

## Syntax

    Math.floor(x)

### Parameters

`x`  
A number.

### Return value

A number representing the largest integer less than or equal to the specified number.

## Description

Because `floor()` is a static method of `Math`, you always use it as `Math.floor()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

**Note:** `Math.floor(null)` returns 0, not a [`NaN`](../nan).

## Examples

### Using Math.floor()

    Math.floor( 45.95); //  45
    Math.floor( 45.05); //  45
    Math.floor(  4   ); //   4
    Math.floor(-45.05); // -46
    Math.floor(-45.95); // -46

### Decimal adjustment

    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
      // If the exp is undefined or zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    const round10 = (value, exp) => decimalAdjust('round', value, exp);
    // Decimal floor
    const floor10 = (value, exp) => decimalAdjust('floor', value, exp);
    // Decimal ceil
    const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);

    // Round
    round10(55.55, -1);   // 55.6
    round10(55.549, -1);  // 55.5
    round10(55, 1);       // 60
    round10(54.9, 1);     // 50
    round10(-55.55, -1);  // -55.5
    round10(-55.551, -1); // -55.6
    round10(-55, 1);      // -50
    round10(-55.1, 1);    // -60
    // Floor
    floor10(55.59, -1);   // 55.5
    floor10(59, 1);       // 50
    floor10(-55.51, -1);  // -55.6
    floor10(-51, 1);      // -60
    // Ceil
    ceil10(55.51, -1);    // 55.6
    ceil10(51, 1);        // 60
    ceil10(-55.59, -1);   // -55.5
    ceil10(-59, 1);       // -50

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.floor">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.floor</span></a></td></tr></tbody></table>

`floor`

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

-   [`Math.abs()`](abs)
-   [`Math.ceil()`](ceil)
-   [`Math.round()`](round)
-   [`Math.sign()`](sign)
-   [`Math.trunc()`](trunc)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor</a>
