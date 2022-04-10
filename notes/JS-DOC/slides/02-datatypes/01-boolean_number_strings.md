The **Boolean** data type has two values, `true` and `false`.

    var foo = true;
    var bar = false;

------------------------------------------------------------------------

**Numbers** are [double precision floating point](http://en.wikipedia.org/wiki/Double-precision_floating-point_format) numbers, following the [IEEE 754 standard](http://en.wikipedia.org/wiki/IEEE_floating_point)

This makes it very easy to work with them, since you don’t have to differentiate between integer values and floating point values.

There are various ways that numeric value can be expressed:

    var x = 5; // "integer"
    var y = -4.2; // "float"
    var z = 5e3; // = 5 * 10^3

An issue with floating point numbers is the loss of precision, which of course occurs in JavaScript as well:

    0.1 + 0.2; // 0.30000000000000004

The maximum integer value that can be used without loss of precision is 2<sup>53</sup>.

    Math.pow(2, 53); // 9007199254740992
    Math.pow(2, 53) + 1; // 9007199254740992

------------------------------------------------------------------------

**Strings** are sequences of unicode characters and can either be delimited with a **single** or **double** quotation mark. Unlike in other languages, such as PHP, both are interpreted in the exact same way.

Example:

    var foo = 'bar';
    var bar = 'baz';
