# Array.prototype.length

The `length` property of an object which is an instance of type `Array` sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

## Description

The value of the `length` property is an integer with a positive sign and a value less than 2 to the 32nd power (2<sup>32</sup>).

    var namelistA = new Array(4294967296); //2 to the 32nd power = 4294967296
    var namelistC = new Array(-100) //negative sign

    console.log(namelistA.length); //RangeError: Invalid array length
    console.log(namelistC.length); //RangeError: Invalid array length

    var namelistB = [];
    namelistB.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power
    console.log(namelistB.length);

    //4294967295

You can set the `length` property to truncate an array at any time. When you extend an array by changing its `length` property, the number of actual elements increases; for example, if you set `length` to 3 when it is currently 2, the array now contains 3 elements, which causes the third element to be a non-iterable empty slot.

    const arr = [1, 2];
    console.log(arr);
    // [ 1, 2 ]

    arr.length = 5; // set array length to 5 while currently 2.
    console.log(arr);
    // [ 1, 2, <3 empty items> ]

    arr.forEach(element => console.log(element));
    // 1
    // 2

As you can see, the `length` property does not necessarily indicate the number of defined values in the array. See also [Relationship between `length` and numerical properties](../array#relationship_between_length_and_numerical_properties).

Property attributes of `Array.prototype.length`

Writable

yes

Enumerable

no

Configurable

no

-   `Writable`: If this attribute set to `false`, the value of the property cannot be changed.
-   `Configurable`: If this attribute set to `false`, any attempts to delete the property or change its attributes (`Writable`, `Configurable`, or `Enumerable`) will fail.
-   `Enumerable`: If this attribute set to `true`, the property will be iterated over during [for](../../statements/for) or [for..in](../../statements/for...in) loops.

## Examples

### Iterating over an array

In the following example, the array `numbers` is iterated through by looking at the `length` property. The value in each element is then doubled.

    var numbers = [1, 2, 3, 4, 5];
    var length = numbers.length;
    for (var i = 0; i < length; i++) {
      numbers[i] *= 2;
    }
    // numbers is now [2, 4, 6, 8, 10]

### Shortening an array

The following example shortens the array `numbers` to a length of 3 if the current length is greater than 3.

    var numbers = [1, 2, 3, 4, 5];

    if (numbers.length > 3) {
      numbers.length = 3;
    }

    console.log(numbers); // [1, 2, 3]
    console.log(numbers.length); // 3

### Create empty array of fixed length

    var numbers = [];
    numbers.length = 3;
    console.log(numbers); // [undefined, undefined, undefined]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-properties-of-array-instances-length">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-properties-of-array-instances-length</span></a></td></tr></tbody></table>

`length`

1

12

1

4

4

1

≤37

18

4

10.1

1

1.0

## See also

-   [`Array`](../array)
-   [RangeError: invalid array length](../../errors/invalid_array_length)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length</a>
