# BigInt.asIntN()

The `BigInt.asIntN` static method clamps a BigInt value to a signed integer value, and returns that value.

## Syntax

    BigInt.asIntN(bits, bigint);

### Parameters

`bits`  
The amount of bits available for the integer size.

`bigint`  
The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo 2<sup>`bits`</sup>, as a signed integer.

## Examples

### Staying in 64-bit ranges

The `BigInt.asIntN()` method can be useful to stay in the range of 64-bit arithmetic.

    const max = 2n ** (64n - 1n) - 1n;

    BigInt.asIntN(64, max);
    // ↪ 9223372036854775807n

    BigInt.asIntN(64, max + 1n);
    // ↪ -9223372036854775808n
    // negative because of overflow

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-bigint.asintn">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-bigint.asintn</span></a></td></tr></tbody></table>

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

## See also

-   [`BigInt`](../bigint)
-   [`BigInt.asUintN()`](asuintn)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN</a>
