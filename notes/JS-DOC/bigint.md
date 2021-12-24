# BigInt

`BigInt` is a built-in object whose constructor returns a `bigint` [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) — also called a **BigInt value**, or sometimes just a **BigInt** — to represent whole numbers larger than 2<sup>53</sup> - 1 ([`Number.MAX_SAFE_INTEGER`](number/max_safe_integer)), which is the largest number JavaScript can represent with a `number` [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (or _Number value_). BigInt values can be used for arbitrarily large integers.

## Description

A **BigInt value**, also sometimes just called a **BigInt**, is a `bigint` [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), created by appending `n` to the end of an integer literal, or by calling the [`BigInt()`](bigint/bigint) constructor (but without the `new` operator) and giving it an integer value or string value.

    const previouslyMaxSafeInteger = 9007199254740991n

    const alsoHuge = BigInt(9007199254740991)
    // ↪ 9007199254740991n

    const hugeString = BigInt("9007199254740991")
    // ↪ 9007199254740991n

    const hugeHex = BigInt("0x1fffffffffffff")
    // ↪ 9007199254740991n

    const hugeOctal = BigInt("0o377777777777777777")
    // ↪ 9007199254740991n

    const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
    // ↪ 9007199254740991n

BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in [`Math`](math) object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

### Type information

When tested against `typeof`, a BigInt value (`bigint` primitive) will give "`bigint`":

    typeof 1n === 'bigint'           // true
    typeof BigInt('1') === 'bigint'  // true

A BigInt value can also be wrapped in an `Object`:

    typeof Object(1n) === 'object'  // true

### Operators

The following operators may be used with BigInt values or object-wrapped BigInt values:

    + * - % **

[Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) are supported as well, except `>>>` (zero-fill right shift), as every BigInt value is signed.

Also unsupported is the unary operator (`+`), [in order to not break asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

    const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
    // ↪ 9007199254740991n

    const maxPlusOne = previousMaxSafe + 1n
    // ↪ 9007199254740992n

    const theFuture = previousMaxSafe + 2n
    // ↪ 9007199254740993n, this works now!

    const multi = previousMaxSafe * 2n
    // ↪ 18014398509481982n

    const subtr = multi – 10n
    // ↪ 18014398509481972n

    const mod = multi % 10n
    // ↪ 2n

    const bigN = 2n ** 54n
    // ↪ 18014398509481984n

    bigN * -1n
    // ↪ –18014398509481984n

The `/` operator also works as expected with whole numbers — but operations with a fractional result will be truncated when used with a BigInt value — they won't return any fractional digits.

    const expected = 4n / 2n
    // ↪ 2n

    const truncated = 5n / 2n
    // ↪ 2n, not 2.5n

### Comparisons

A BigInt value is not strictly equal to a Number value, but it _is_ loosely so:

    0n === 0
    // ↪ false

    0n == 0
    // ↪ true

A Number value and a BigInt value may be compared as usual:

    1n < 2
    // ↪ true

    2n > 1
    // ↪ true

    2 > 2
    // ↪ false

    2n > 2
    // ↪ false

    2n >= 2
    // ↪ true

BigInt values and Number values may be mixed in arrays and sorted:

    const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
    // ↪  [4n, 6, -12n, 10, 4, 0, 0n]

    mixed.sort() // default sorting behavior
    // ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

    mixed.sort((a, b) => a - b)
    // won't work since subtraction will not work with mixed types
    // TypeError: can't convert BigInt value to Number value

    // sort with an appropriate numeric comparator
    mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
    // ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]

Note that comparisons with `Object`-wrapped BigInt values act as with other objects, only indicating equality when the same object instance is compared:

    0n === Object(0n)          // false
    Object(0n) === Object(0n)  // false

    const o = Object(0n)
    o === o                    // true

### Conditionals

A BigInt value behaves like a Number value in cases where:

-   it is converted to a [`Boolean`](boolean): via the [`Boolean`](boolean) function;
-   when used with [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, and `!`; or
-   within a conditional test like an [`if`](../statements/if...else) statement.

<!-- -->

    if (0n) {
      console.log('Hello from the if!')
    } else {
      console.log('Hello from the else!')
    }

    // ↪ "Hello from the else!"

    0n || 12n
    // ↪ 12n

    0n && 12n
    // ↪ 0n

    Boolean(0n)
    // ↪ false

    Boolean(12n)
    // ↪ true

    !12n
    // ↪ false

    !0n
    // ↪ true

## Constructor

[`BigInt()`](bigint/bigint)  
Creates a new BigInt value.

## Static methods

[`BigInt.asIntN()`](bigint/asintn)  
Clamps a BigInt value to a signed integer value, and returns that value.

[`BigInt.asUintN()`](bigint/asuintn)  
Clamps a BigInt value to an unsigned integer value, and returns that value.

## Instance methods

[`BigInt.prototype.toLocaleString()`](bigint/tolocalestring)  
Returns a string with a language-sensitive representation of this BigInt value. Overrides the [`Object.prototype.toLocaleString()`](object/tolocalestring) method.

[`BigInt.prototype.toString()`](bigint/tostring)  
Returns a string representing this BigInt value in the specified radix (base). Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`BigInt.prototype.valueOf()`](bigint/valueof)  
Returns this BigInt value. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

## Usage recommendations

### Coercion

Because coercing between Number values and BigInt values can lead to loss of precision, the following are recommended:

-   Only use a BigInt value when values greater than 2<sup>53</sup> are reasonably expected.
-   Don't coerce between BigInt values and Number values.

### Cryptography

The operations supported on BigInt values are not constant-time. BigInt values are therefore [unsuitable for use in cryptography](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).

### Use within JSON

Using [`JSON.stringify()`](json/stringify) with any BigInt value will raise a `TypeError`, as BigInt values aren't serialized in JSON by default. However, you can implement your own `toJSON` method:

    BigInt.prototype.toJSON = function() { return this.toString()  }

Instead of throwing, `JSON.stringify` now produces a string like this:

    JSON.stringify(BigInt(1))
    // '"1"'

## Examples

### Calculating Primes

    // Returns true if the passed BigInt value is a prime number
    function isPrime(p) {
      for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) return false;
      }
      return true
    }

    // Takes a BigInt value as an argument, returns nth prime number as a BigInt value
    function nthPrime(nth) {
      let maybePrime = 2n
      let prime = 0n

      while (nth >= 0n) {
        if (isPrime(maybePrime)) {
          nth--
          prime = maybePrime
        }
        maybePrime++
      }

      return prime
    }

    nthPrime(20n)
    // ↪ 73n

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-bigint-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-bigint-objects</span></a></td></tr></tbody></table>

`BigInt`

67

79

68

No

54

14

67

67

68

48

14

9.0

`BigInt`

67

79

68

No

54

14

67

67

68

48

14

9.0

`asIntN`

67

79

68

No

54

14

67

67

68

48

14

9.0

`asUintN`

67

79

68

No

54

14

67

67

68

48

14

9.0

`toLocaleString`

67

79

68

No

54

14

67

67

68

48

14

9.0

`toString`

67

79

68

No

54

14

67

67

68

48

14

9.0

`valueOf`

67

79

68

No

54

14

67

67

68

48

14

9.0

## See also

-   [`Number`](number)
-   [`Number.MAX_SAFE_INTEGER`](number/max_safe_integer)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt</a>
