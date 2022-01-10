# Number.EPSILON

The `Number.EPSILON` property represents the difference between 1 and the smallest floating point number greater than 1.

You do not have to create a [`Number`](../number) object to access this static property (use `Number.EPSILON`).

Property attributes of `Number.EPSILON`

Writable

no

Enumerable

no

Configurable

no

## Description

The `EPSILON` property has a value of approximately `2.2204460492503130808472633361816E-16`, or `2-52`.

## Examples

### Testing equality

    x = 0.2;
    y = 0.3;
    z = 0.1;
    equal = (Math.abs(x - y + z) < Number.EPSILON);

## Polyfill

    if (Number.EPSILON === undefined) {
        Number.EPSILON = Math.pow(2, -52);
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.epsilon">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.epsilon</span></a></td></tr></tbody></table>

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

## See also

-   The [`Number`](../number) object it belongs to

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON</a>
