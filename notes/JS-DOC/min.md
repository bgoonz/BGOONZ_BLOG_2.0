# Math.min()

The static function `Math.min()` returns the lowest-valued number passed into it, or [`NaN`](../nan) if any parameter isn't a number and can't be converted into one.

## Syntax

    Math.min()
    Math.min(value0)
    Math.min(value0, value1)
    Math.min(value0, value1, ... , valueN)

### Parameters

`value1, value2, ...`  
Zero or more numbers among which the lowest value will be selected and returned.

### Return value

The smallest of the given numbers. If any one or more of the parameters cannot be converted into a number, [`NaN`](../nan) is returned. The result is [`Infinity`](../infinity) if no parameters are provided.

## Description

Because `min()` is a static method of `Math`, you always use it as `Math.min()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If no arguments are given, the result is [`Infinity`](../infinity).

If at least one of arguments cannot be converted to a number, the result is [`NaN`](../nan).

## Examples

### Using Math.min()

This finds the min of `x` and `y` and assigns it to `z`:

    var x = 10, y = -20;
    var z = Math.min(x, y);

### Clipping a value with Math.min()

`Math.min()` is often used to clip a value so that it is always less than or equal to a boundary. For instance, this

    var x = f(foo);

    if (x > boundary) {
      x = boundary;
    }

may be written as this

    var x = Math.min(f(foo), boundary);

[`Math.max()`](max) can be used in a similar way to clip a value at the other end.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.min">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.min</span></a></td></tr></tbody></table>

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

## See also

-   [`Math.max()`](max)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min</a>
