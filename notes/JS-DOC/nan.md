# NaN

The global `NaN` property is a value representing Not-A-Number.

Property attributes of `NaN`

Writable

no

Enumerable

no

Configurable

no

## Description

`NaN` is a property of the _global object_. In other words, it is a variable in global scope.

The initial value of `NaN` is Not-A-Number — the same as the value of [`Number.NaN`](number/nan). In modern browsers, `NaN` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use `NaN` in a program.

There are five different types of operations that return `NaN`:

-   Number cannot be parsed (e.g. `parseInt("blabla")` or `Number(undefined)`)
-   Math operation where the result is not a real number (e.g. `Math.sqrt(-1)`)
-   Operand of an argument is `NaN` (e.g. `7 ** NaN`)
-   Indeterminate form (e.g. `0 * Infinity`, or `undefined + undefined`)
-   Any operation that involves a string and is not an addition operation (e.g. `"foo" / 3`)

## Examples

### Testing against NaN

`NaN` compares unequal (via `==`, `!=`, `===`, and `!==`) to any other value -- including to another `NaN` value. Use [`Number.isNaN()`](number/isnan) or [`isNaN()`](isnan) to most clearly determine whether a value is `NaN`. Or perform a self-comparison: `NaN`, and only `NaN`, will compare unequal to itself.

    NaN === NaN;        // false
    Number.NaN === NaN; // false
    isNaN(NaN);         // true
    isNaN(Number.NaN);  // true
    Number.isNaN(NaN);  // true

    function valueIsNaN(v) { return v !== v; }
    valueIsNaN(1);          // false
    valueIsNaN(NaN);        // true
    valueIsNaN(Number.NaN); // true

However, do note the difference between `isNaN()` and `Number.isNaN()`: the former will return `true` if the value is currently `NaN`, or if it is going to be `NaN` after it is coerced to a number, while the latter will return `true` only if the value is currently `NaN`:

    isNaN('hello world');        // true
    Number.isNaN('hello world'); // false

Additionally, some array methods cannot find `NaN`, while others can.

    let arr = [2, 4, NaN, 12];
    arr.indexOf(NaN);                      // -1 (false)
    arr.includes(NaN);                     // true
    arr.findIndex(n => Number.isNaN(n));   // 2

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-nan">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-value-properties-of-the-global-object-nan</span></a></td></tr></tbody></table>

`NaN`

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

-   [`Number.NaN`](number/nan)
-   [`Number.isNaN()`](number/isnan)
-   [`isNaN()`](isnan)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN</a>
