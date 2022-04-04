Math.atan()
===========

The `Math.atan()` function returns the arctangent (in radians) of a number, that is

  
<span class="math display">$$\\\\mathtt{\\\\operatorname{Math.atan}(x)} = \\\\arctan(x) = \\\\text{the\\\\ unique}\\\\; y \\\\in \\\\left\\\\lbrack {- \\\\frac{\\\\pi}{2};\\\\frac{\\\\pi}{2}} \\\\right\\\\rbrack\\\\,\\\\text{such\\\\ that}\\\\;\\\\tan(y) = x$$</span>  

Syntax
------

    Math.atan(x)

### Parameters

`x`  
A number.

### Return value

The arctangent (in radians) of the given number.

Description
-----------

The `Math.atan()` method returns a numeric value between <span class="math inline">$- \\\\frac{\\\\pi}{2}$</span> and <span class="math inline">$\\\\frac{\\\\pi}{2}$</span> radians.

Because `atan()` is a static method of `Math`, you always use it as `Math.atan()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

Examples
--------

### Using Math.atan()

    Math.atan(1);   // 0.7853981633974483
    Math.atan(0);   // 0
    Math.atan(-0);  // -0

    Math.atan(Infinity);   //  1.5707963267948966
    Math.atan(-Infinity);  // -1.5707963267948966

    // The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
    Math.atan(y / x);

Note that you may want to avoid using **±**`Infinity` for stylistic reasons. In this case, [`Math.atan2()`](atan2) with `0` as the second argument may be a better solution.

Specifications
--------------

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><p>ECMAScript Language Specification (ECMAScript)<br />
</p><span class="small">#sec-math.atan</span></td></tr></tbody></table>

`atan`

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

See also
--------

-   [`Math.acos()`](acos)
-   [`Math.asin()`](asin)
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)

Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan</a>
