# BigInt64Array

The `BigInt64Array` typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use [`DataView`](dataview) instead. The contents are initialized to `0n`. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).

## Constructor

[`BigInt64Array()`](bigint64array/bigint64array)  
Creates a new `BigInt64Array` object.

## Static properties

[`BigInt64Array.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size. `8` in the case of a `BigInt64Array`.

[`BigInt64Array.name`](typedarray/name)  
Returns the string value of the constructor name. In the case of the `BigInt64Array` type, this is "BigInt64Array".

## Static methods

[`BigInt64Array.from()`](typedarray/from)  
Creates a new `BigInt64Array` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`BigInt64Array.of()`](typedarray/of)  
Creates a new `BigInt64Array` with a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`BigInt64Array.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the `BigInt64Array`. This is fixed at construction time and thus **read only**.

[`BigInt64Array.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the `BigInt64Array` from the start of its [`ArrayBuffer`](arraybuffer). This is fixed at construction time and thus **read only.**

[`BigInt64Array.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the `BigInt64Array` from the start of its [`ArrayBuffer`](arraybuffer). This is fixed at construction time and thus **read only.**

[`BigInt64Array.prototype.length`](typedarray/length)  
Returns the number of elements hold in the `BigInt64Array`. This is fixed at construction time and thus **read only.**

## Instance methods

[`BigInt64Array.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`BigInt64Array.prototype.entries()`](typedarray/entries)  
Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`BigInt64Array.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`BigInt64Array.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`BigInt64Array.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`](array/filter).

[`BigInt64Array.prototype.find()`](typedarray/find)  
Returns the found value in the array if an element in the array satisfies the provided testing function, or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`BigInt64Array.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array if an element in the array satisfies the provided testing function, or -1 if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`BigInt64Array.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`BigInt64Array.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`BigInt64Array.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`BigInt64Array.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`BigInt64Array.prototype.keys()`](typedarray/keys)  
Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`BigInt64Array.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`BigInt64Array.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`BigInt64Array.prototype.reduce()`](typedarray/reduce)  
Applies a function against an accumulator and each value of the array (from left-to-right) so as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`BigInt64Array.prototype.reduceRight()`](typedarray/reduceright)  
Applies a function against an accumulator and each value of the array (from right-to-left) so as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`BigInt64Array.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`BigInt64Array.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`BigInt64Array.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`BigInt64Array.prototype.some()`](typedarray/some)  
Returns true if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`BigInt64Array.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`BigInt64Array.prototype.subarray()`](typedarray/subarray)  
Returns a new `BigUint64Array` from the given start and end element index.

[`BigInt64Array.prototype.values()`](typedarray/values)  
Returns a new `Array Iterator` object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`BigInt64Array.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`BigInt64Array.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`BigInt64Array.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new `Array Iterator` object that contains the values for each index in the array.

## Examples

### Different ways to create a `BigInt64Array`

    // From a length
    var bigint64 = new BigInt64Array(2);
    bigint64[0] = 42n;
    console.log(bigint64[0]); // 42n
    console.log(bigint64.length); // 2
    console.log(bigint64.BYTES_PER_ELEMENT); // 8

    // From an array
    var arr = new BigInt64Array([21n,31n]);
    console.log(arr[1]); // 31n

    // From another TypedArray
    var x = new BigInt64Array([21n, 31n]);
    var y = new BigInt64Array(x);
    console.log(y[0]); // 21n

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(32);
    var z = new BigInt64Array(buffer, 0, 4);

    // From an iterable
    var iterable = function*(){ yield* [1n, 2n, 3n]; }();
    var bigint64 = new BigInt64Array(iterable);
    // BigInt64Array[1n, 2n, 3n]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-typedarray-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-typedarray-objects</span></a></td></tr></tbody></table>

`BigInt64Array`

67

79

68

No

54

No

67

67

68

48

No

9.0

`BigInt64Array`

67

79

68

No

54

No

67

67

68

48

No

9.0

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [`BigUint64Array`](biguint64array)
-   [`DataView`](dataview)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array</a>
