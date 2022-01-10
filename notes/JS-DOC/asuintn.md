# BigInt.asUintN()

The `BigInt.asUintN` static method clamps a BigInt value to an unsigned integer value, and returns that value.

## Syntax

    BigInt.asUintN(bits, bigint);

### Parameters

`bits`  
The amount of bits available for the integer size.

`bigint`  
The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo 2<sup>`bits`</sup>, as an unsigned integer.

## Examples

### Staying in 64-bit ranges

The `BigInt.asUintN()` method can be useful to stay in the range of 64-bit arithmetic.

    const max = 2n ** 64n - 1n;

    BigInt.asUintN(64, max);
    // ↪ 18446744073709551615n

    BigInt.asUintN(64, max + 1n);
    // ↪ 0n
    // zero because of overflow

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-bigint.asuintn">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-bigint.asuintn</span></a></td></tr></tbody></table>

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

## See also

-   [`BigInt`](../bigint)
-   [`BigInt.asIntN()`](asintn)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN</a>
