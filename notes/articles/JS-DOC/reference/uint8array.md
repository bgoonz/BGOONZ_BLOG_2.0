# Uint8Array

The `Uint8Array` typed array represents an array of 8-bit unsigned integers. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

[`Uint8Array()`](uint8array/uint8array)  
Creates a new `Uint8Array` object.

## Static properties

[`Uint8Array.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size. `1` in the case of an `Uint8Array`.

[`Uint8Array.name`](typedarray/name)  
Returns the string value of the constructor name. In the case of the `Uint8Array` type: "`Uint8Array`".

## Static methods

[`Uint8Array.from()`](typedarray/from)  
Creates a new `Uint8Array` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`Uint8Array.of()`](typedarray/of)  
Creates a new `Uint8Array` with a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`Uint8Array.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the `Uint8Array`. Fixed at construction time and thus **read only**.

[`Uint8Array.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the `Uint8Array`. Fixed at construction time and thus **read only.**

[`Uint8Array.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the `Uint8Array` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Uint8Array.prototype.length`](typedarray/length)  
Returns the number of elements held in the `Uint8Array`. Fixed at construction time and thus **read only.**

## Instance methods

[`Uint8Array.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`Uint8Array.prototype.entries()`](typedarray/entries)  
Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`Uint8Array.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`Uint8Array.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`Uint8Array.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also [`Array.prototype.filter()`](array/filter).

[`Uint8Array.prototype.find()`](typedarray/find)  
Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`Uint8Array.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`Uint8Array.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`Uint8Array.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`Uint8Array.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`Uint8Array.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`Uint8Array.prototype.keys()`](typedarray/keys)  
Returns a new _array iterator_ that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`Uint8Array.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`Uint8Array.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`Uint8Array.prototype.reduce()`](typedarray/reduce)  
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`Uint8Array.prototype.reduceRight()`](typedarray/reduceright)  
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`Uint8Array.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`Uint8Array.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`Uint8Array.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`Uint8Array.prototype.some()`](typedarray/some)  
Returns `true` if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`Uint8Array.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`Uint8Array.prototype.subarray()`](typedarray/subarray)  
Returns a new `Uint8Array` from the given start and end element index.

[`Uint8Array.prototype.values()`](typedarray/values)  
Returns a new _array iterator_ object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`Uint8Array.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`Uint8Array.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`Uint8Array.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Different ways to create a Uint8Array

    // From a length
    var uint8 = new Uint8Array(2);
    uint8[0] = 42;
    console.log(uint8[0]); // 42
    console.log(uint8.length); // 2
    console.log(uint8.BYTES_PER_ELEMENT); // 1

    // From an array
    var arr = new Uint8Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Uint8Array([21, 31]);
    var y = new Uint8Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Uint8Array(buffer, 1, 4);

    // From an iterable
    var iterable = function*(){ yield* [1,2,3]; }();
    var uint8 = new Uint8Array(iterable);
    // Uint8Array[1, 2, 3]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#table-49">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'TypedArray constructors' in that specification.</span></a></td></tr></tbody></table>

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

`Uint8Array`

7

12

4

10

11.6

5.1

4

18

4

12

4.2

1.0

`Uint8Array`

7

12

4

10

11.6

5.1

4

18

4

12

4.2

1.0

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [`ArrayBuffer`](arraybuffer)
-   [`DataView`](dataview)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array</a>
