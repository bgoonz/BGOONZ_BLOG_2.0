# Math.cbrt()

The `Math.cbrt()` function returns the cube root of a number, that is

$$\\mathtt{Math.cbrt(x)} = \\sqrt\[3\]{x} = \\text{the\\ unique}\\; y\\;\\text{such\\ that}\\; y^{3} = x$$

## Syntax

    Math.cbrt(x)

### Parameters

x  
A number.

### Return value

The cube root of the given number.

## Description

Because `cbrt()` is a static method of `Math`, you always use it as `Math.cbrt()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Polyfill

For all *x* ≥ 0, have $\\sqrt\[3\]{x} = x^{1/3}$ so this can be emulated by the following function:

    if (!Math.cbrt) {
      Math.cbrt = (function(pow) {
        return function cbrt(x){
          // ensure negative numbers remain negative:
          return x < 0 ? -pow(-x, 1/3) : pow(x, 1/3);
        };
      })(Math.pow); // localize Math.pow to increase efficiency
    }

## Examples

### Using Math.cbrt()

    Math.cbrt(NaN); // NaN
    Math.cbrt(-1); // -1
    Math.cbrt(-0); // -0
    Math.cbrt(-Infinity); // -Infinity
    Math.cbrt(0); // 0
    Math.cbrt(1); // 1
    Math.cbrt(Infinity); // Infinity
    Math.cbrt(null); // 0
    Math.cbrt(2);  // 1.2599210498948732

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.cbrt">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.cbrt</span></a></td></tr></tbody></table>

`cbrt`

38

12

25

No

25

8

38

38

25

25

8

3.0

## See also

-   [`Math.pow()`](pow)
-   [`Math.sqrt()`](sqrt)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt</a>
