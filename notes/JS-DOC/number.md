# Number

`Number` is a [primitive wrapper object](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript) used to represent and manipulate numbers like `37` or `-9.25`.

The `Number` constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the `Number()`.

The JavaScript **Number** type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic) value, like `double` in Java or C\#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to [rounding](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding). The largest value a Number can hold is about 1.8×10<sup>308</sup>. Numbers beyond that are replaced with the special Number constant [`Infinity`](infinity).

A number literal like `37` in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a [`BigInt`](bigint) type, but it was not designed to replace Number for everyday uses. `37` is still a Number, not a BigInt.)

Number may also be expressed in literal forms like `0b101`, `0o13`, `0x0A`. Learn more on numeric [lexical grammar here](../lexical_grammar#numeric_literals).

## Description

When used as a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns [`NaN`](nan).

### Literal syntax

    123    // one-hundred twenty-three
    123.0  // same
    123 === 123.0  // true

### Function syntax

    Number('123')  // returns the number 123
    Number('123') === 123  // true

    Number("unicorn")  // NaN
    Number(undefined)  // NaN

## Constructor

[`Number()`](number/number)  
Creates a new `Number` value.

## Static properties

[`Number.EPSILON`](number/epsilon)  
The smallest interval between two representable numbers.

[`Number.MAX_SAFE_INTEGER`](number/max_safe_integer)  
The maximum safe integer in JavaScript (`253 - 1`).

[`Number.MAX_VALUE`](number/max_value)  
The largest positive representable number.

[`Number.MIN_SAFE_INTEGER`](number/min_safe_integer)  
The minimum safe integer in JavaScript (`-(253 - 1)`).

[`Number.MIN_VALUE`](number/min_value)  
The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).

[`Number.NaN`](number/nan)  
Special "**N**ot **a** **N**umber" value.

[`Number.NEGATIVE_INFINITY`](number/negative_infinity)  
Special value representing negative infinity. Returned on overflow.

[`Number.POSITIVE_INFINITY`](number/positive_infinity)  
Special value representing infinity. Returned on overflow.

[`Number.prototype`](number)  
Allows the addition of properties to the `Number` object.

## Static methods

[`Number.isNaN()`](number/isnan)  
Determine whether the passed value is `NaN`.

[`Number.isFinite()`](number/isfinite)  
Determine whether the passed value is a finite number.

[`Number.isInteger()`](number/isinteger)  
Determine whether the passed value is an integer.

[`Number.isSafeInteger()`](number/issafeinteger)  
Determine whether the passed value is a safe integer (number between `-(253 - 1)` and `253 - 1`).

[`Number.parseFloat(string)`](number/parsefloat)  
This is the same as the global [`parseFloat()`](parsefloat) function.

[`Number.parseInt(string, [radix])`](number/parseint)  
This is the same as the global [`parseInt()`](parseint) function.

## Instance methods

[`Number.prototype.toExponential(fractionDigits)`](number/toexponential)  
Returns a string representing the number in exponential notation.

[`Number.prototype.toFixed(digits)`](number/tofixed)  
Returns a string representing the number in fixed-point notation.

[`Number.prototype.toLocaleString([locales [, options]])`](number/tolocalestring)  
Returns a string with a language sensitive representation of this number. Overrides the [`Object.prototype.toLocaleString()`](object/tolocalestring) method.

[`Number.prototype.toPrecision(precision)`](number/toprecision)  
Returns a string representing the number to a specified precision in fixed-point or exponential notation.

[`Number.prototype.toString([radix])`](number/tostring)  
Returns a string representing the specified object in the specified radix ("base"). Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`Number.prototype.valueOf()`](number/valueof)  
Returns the primitive value of the specified object. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

## Examples

### Using the Number object to assign values to numeric variables

The following example uses the `Number` object's properties to assign values to several numeric variables:

    const biggestNum     = Number.MAX_VALUE
    const smallestNum    = Number.MIN_VALUE
    const infiniteNum    = Number.POSITIVE_INFINITY
    const negInfiniteNum = Number.NEGATIVE_INFINITY
    const notANum        = Number.NaN

### Integer range for Number

The following example shows the minimum and maximum integer values that can be represented as `Number` object. (More details on this are described in the ECMAScript standard, chapter _[6.1.6 The Number Type](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type)._)

    const biggestInt  = Number.MAX_SAFE_INTEGER  //  (2**53 - 1) =>  9007199254740991
    const smallestInt = Number.MIN_SAFE_INTEGER  // -(2**53 - 1) => -9007199254740991

When parsing data that has been serialized to JSON, integer values falling outside of this range can be expected to become corrupted when JSON parser coerces them to `Number` type.

A possible workaround is to use [`String`](string) instead.

Larger numbers can be represented using the [`BigInt`](bigint) type.

### Using Number to convert a Date object

The following example converts the [`Date`](date) object to a numerical value using `Number` as a function:

    let d = new Date('December 17, 1995 03:24:00')
    console.log(Number(d))

This logs `819199440000`.

### Convert numeric strings and null to numbers

    Number('123')     // 123
    Number('123') === 123 /// true
    Number('12.3')    // 12.3
    Number('12.00')   // 12
    Number('123e-1')  // 12.3
    Number('')        // 0
    Number(null)      // 0
    Number('0x11')    // 17
    Number('0b11')    // 3
    Number('0o11')    // 9
    Number('foo')     // NaN
    Number('100a')    // NaN
    Number('-Infinity') //-Infinity

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number-objects</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`Number`

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

`EPSILON`

34

12

25

No

21

9

≤37

34

25

21

9

2.0

`MAX_SAFE_INTEGER`

34

12

31

No

21

9

≤37

34

31

21

9

2.0

`MAX_VALUE`

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

`MIN_SAFE_INTEGER`

34

12

31

No

21

9

≤37

34

31

21

9

2.0

`MIN_VALUE`

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

`NaN`

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

`NEGATIVE_INFINITY`

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

`Number`

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

`POSITIVE_INFINITY`

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

`isFinite`

19

12

16

No

15

9

≤37

25

16

14

9

1.5

`isInteger`

34

12

16

No

21

9

≤37

34

16

21

9

2.0

`isNaN`

25

12

15

No

15

9

≤37

25

15

14

9

1.5

`isSafeInteger`

34

12

32

No

21

10

≤37

34

32

21

10

2.0

`parseFloat`

34

12

25

No

21

9

≤37

34

25

21

9

2.0

`parseInt`

34

12

25

No

21

9

≤37

34

25

21

9

2.0

`toExponential`

1

12

1

5.5

7

2

1

18

4

10.1

1

1.0

`toFixed`

1

12

1

5.5

7

2

1

18

4

10.1

1

1.0

`toLocaleString`

1

12

Before Edge 18, numbers are rounded to 15 decimal digits. For example, `(1000000000000005).toLocaleString('en-US')` returns `"1,000,000,000,000,010"`.

1

5

In Internet Explorer 11, numbers are rounded to 15 decimal digits. For example, `(1000000000000005).toLocaleString('en-US')` returns `"1,000,000,000,000,010"`.

4

1

1

18

4

10.1

1

1.0

`toPrecision`

1

12

1

5.5

7

2

1

18

4

10.1

1

1.0

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

`toString`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

`valueOf`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [`NaN`](nan)
-   <span class="page-not-created">`Arithmetic operators`</span>
-   The [`Math`](math) global object
-   Integers with arbitrary precision: [`BigInt`](bigint)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number</a>
