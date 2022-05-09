# Math

`Math` is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

`Math` works with the [`Number`](number) type. It doesn't work with [`BigInt`](bigint).

## Description

Unlike many other global objects, `Math` is not a constructor. All properties and methods of `Math` are static. You refer to the constant pi as `Math.PI` and you call the sine function as `Math.sin(x)`, where `x` is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.

**Note:** Many `Math` functions have a precision that's _implementation-dependent._

This means that different browsers can give a different result. Even the same JavaScript engine on a different OS or architecture can give different results!

## Static properties

[`Math.E`](math/e)  
Euler's constant and the base of natural logarithms; approximately `2.718`.

[`Math.LN2`](math/ln2)  
Natural logarithm of `2`; approximately `0.693`.

[`Math.LN10`](math/ln10)  
Natural logarithm of `10`; approximately `2.303`.

[`Math.LOG2E`](math/log2e)  
Base-2 logarithm of `E`; approximately `1.443`.

[`Math.LOG10E`](math/log10e)  
Base-10 logarithm of `E`; approximately `0.434`.

[`Math.PI`](math/pi)  
Ratio of the a circle's circumference to its diameter; approximately `3.14159`.

[`Math.SQRT1_2`](math/sqrt1_2)  
Square root of ½ (or equivalently, <sup>1</sup>/<sub>√2</sub>); approximately `0.707`.

[`Math.SQRT2`](math/sqrt2)  
Square root of `2`; approximately `1.414`.

## Static methods

[`Math.abs(x)`](math/abs)  
Returns the absolute value of `x`.

[`Math.acos(x)`](math/acos)  
Returns the arccosine of `x`.

[`Math.acosh(x)`](math/acosh)  
Returns the hyperbolic arccosine of `x`.

[`Math.asin(x)`](math/asin)  
Returns the arcsine of `x`.

[`Math.asinh(x)`](math/asinh)  
Returns the hyperbolic arcsine of a number.

[`Math.atan(x)`](math/atan)  
Returns the arctangent of `x`.

[`Math.atanh(x)`](math/atanh)  
Returns the hyperbolic arctangent of `x`.

[`Math.atan2(y, x)`](math/atan2)  
Returns the arctangent of the quotient of its arguments.

[`Math.cbrt(x)`](math/cbrt)  
Returns the cube root of `x`.

[`Math.ceil(x)`](math/ceil)  
Returns the smallest integer greater than or equal to `x`.

[`Math.clz32(x)`](math/clz32)  
Returns the number of leading zero bits of the 32-bit integer `x`.

[`Math.cos(x)`](math/cos)  
Returns the cosine of `x`.

[`Math.cosh(x)`](math/cosh)  
Returns the hyperbolic cosine of `x`.

[`Math.exp(x)`](math/exp)  
Returns `Ex`, where `x` is the argument, and `E` is Euler's constant (`2.718`…, the base of the natural logarithm).

[`Math.expm1(x)`](math/expm1)  
Returns subtracting `1` from `exp(x)`.

[`Math.floor(x)`](math/floor)  
Returns the largest integer less than or equal to `x`.

[`Math.fround(x)`](math/fround)  
Returns the nearest [single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of `x`.

[`Math.hypot([x[, y[, …]]])`](math/hypot)  
Returns the square root of the sum of squares of its arguments.

[`Math.imul(x, y)`](math/imul)  
Returns the result of the 32-bit integer multiplication of `x` and `y`.

[`Math.log(x)`](math/log)  
Returns the natural logarithm (㏒<sub>e</sub>; also, ㏑) of `x`.

[`Math.log1p(x)`](math/log1p)  
Returns the natural logarithm (㏒<sub>e</sub>; also ㏑) of `1 + x` for the number `x`.

[`Math.log10(x)`](math/log10)  
Returns the base-10 logarithm of `x`.

[`Math.log2(x)`](math/log2)  
Returns the base-2 logarithm of `x`.

[`Math.max([x[, y[, …]]])`](math/max)  
Returns the largest of zero or more numbers.

[`Math.min([x[, y[, …]]])`](math/min)  
Returns the smallest of zero or more numbers.

[`Math.pow(x, y)`](math/pow)  
Returns base `x` to the exponent power `y` (that is, `xy`).

[`Math.random()`](math/random)  
Returns a pseudo-random number between `0` and `1`.

[`Math.round(x)`](math/round)  
Returns the value of the number `x` rounded to the nearest integer.

[`Math.sign(x)`](math/sign)  
Returns the sign of the `x`, indicating whether `x` is positive, negative, or zero.

[`Math.sin(x)`](math/sin)  
Returns the sine of `x`.

[`Math.sinh(x)`](math/sinh)  
Returns the hyperbolic sine of `x`.

[`Math.sqrt(x)`](math/sqrt)  
Returns the positive square root of `x`.

[`Math.tan(x)`](math/tan)  
Returns the tangent of `x`.

[`Math.tanh(x)`](math/tanh)  
Returns the hyperbolic tangent of `x`.

[`Math.trunc(x)`](math/trunc)  
Returns the integer portion of `x`, removing any fractional digits.

## Examples

### Converting between degrees and radians

The trigonometric functions `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` expect (and return) angles in _radians_.

Since humans tend to think in degrees, and some functions (such as CSS transforms) can accept degrees, it is a good idea to keep functions handy that convert between the two:

    function degToRad(degrees) {
      return degrees * (Math.PI / 180);
    };

    function radToDeg(rad) {
      return rad / (Math.PI / 180);
    };

### Calculating the height of an equilateral triangle

If we want to calculate the height of an equilateral triangle, and we know its side length is 100, we can use the formulae _length of the adjacent multiplied by the tangent of the angle is equal to the opposite._

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACmCAMAAACoeDCGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJnUExURf///9/f3x8fH19fX+/v77+/vz8/PwAAAICAgH9/fw8PDxAQEJ+fn///18/Pz/f//6+vr8/3/09PT///94+Pj29vb0cAAE8AAJ/X+C8vLzAwMP//5wBIpkcAR//319j//wAAR///7+///5fW9wAAT6dHAAAAc4/P9V8AANf3/y+g1f//39enRwAAL6fZ+KcvAMTx/wAvnp8vAPTPladPAJxMAPfv79ieSKzL2ezFke3x+U2n128AAP/qv//vzNy/oAAAitenTy+T0gAvfOf//rPR7Pbn15MAAM+1kLuPTBcXF2Kn1//fp9+nTc6PL/f/1ue+ddOmdIfJ76fM5/vXpXG55o2300ef1i8ALwBPpwAvp2+XvoyrxC8AAACP09T39vX3/9WZL9nu/PffuZPB48Hj+793ALHn/79vAItLAMmfX9fZ1+fTuf/v17mjg6PCyi9PcwBns4cAAPf783cAAABzv7qnpP/nrYcvANfPswBfoZe91a+np//338LV7dHj658AAF+PpwCJxwAAX6SqpP/3z8/t/6eiktqnX0cAL8end9XS1a+KbI9UdN/3//fv5826ooePnE+Pv82UR3et1XQvAL/H37m5uikpKc/n9wYGBu2/fPX/5XRMQsW/zy9LT18vAKJsP09HL6ers//380+nzUtLd3d/cy+Lw+vj44drT3dPdwAvL5Orq1dPXwBHk5dfANf32+v/1wAAl6OTT+fDp0+r30tLAIx8jHe/72NjY0cvAG8AX0cAby93r2+fvy9HLwBPh9/f5wBHby+atceHAMe3v19fd9eXAE9fL0dPVwAvT0+PlxgK/IcAAApOSURBVHja7VwHW9vIFh03rh1j3DY2YGNs00yvCRBKIEsCCSS7SUjbTSC9974pm82mbnp92WySfZvtvbfXe38/6o0sA8bIlkYaWaM87veBi0CfjnTm3HuuRoPQdEzHdEzHdKTGBf+BxLvFwRdWu9P/ofeqk2kgL0I4cfSLGw+9HU3/hw4oZhmHt+ls5wr8egX23w8+/rkYzfXB/ovIewXgD07uw8vO6uvn/bAysAOer2QYSBc0LGl0olY4OQBrMLWOwb0FX69Bl6FtLlS0w8pX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" width="200" height="166" />

In JavaScript, we can do this with the following:

    50 * Math.tan(degToRad(60)).

We use our `degToRad()` function to convert 60 degrees to radians, as [`Math.tan()`](math/tan) expects an input value in radians.

### Returning a random integer between two bounds

This can be achieved with a combination of [`Math.random()`](math/random) and [`Math.floor()`](math/floor):

    function random(min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }

    random(1, 10);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math-object">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Math' in that specification.</span></a></td></tr></tbody></table>

`E`

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

`LN2`

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

`LN10`

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

`LOG2E`

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

`LOG10E`

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

`PI`

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

`SQRT1_2`

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

`SQRT2`

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

`acos`

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

`acosh`

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

`asin`

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

`asinh`

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

`atan2`

1

12

1

4

3

1

1

18

4

10.1

1

1.0

`atanh`

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

`ceil`

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

`clz32`

38

12

31

No

25

7

38

38

31

25

7

3.0

`cos`

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

`cosh`

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

`exp`

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

`expm1`

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

`fround`

38

12

26

No

25

8

38

38

26

25

8

3.0

`hypot`

38

12

27

No

25

8

38

38

27

25

8

3.0

`imul`

28

12

20

No

16

7

≤37

28

20

15

7

1.5

`log`

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

`log1p`

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

`log2`

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

`log10`

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

`min`

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

`pow`

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

`random`

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

`round`

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

`sign`

38

12

25

No

25

9

38

38

25

25

9

3.0

`sin`

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

`sinh`

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

`sqrt`

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

`tan`

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

`tanh`

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

`trunc`

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

-   [`Number`](number)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math</a>
