# Int8Array

The `Int8Array` typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

[`Int8Array()`](int8array/int8array)  
Creates a new `Int8Array` object.

## Static properties

[`Int8Array.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size. `1` in the case of an `Int8Array`.

[`Int8Array.name`](typedarray/name)  
Returns the string value of the constructor name. In the case of the `Int8Array` type: "`Int8Array`".

## Static methods

[`Int8Array.from()`](typedarray/from)  
Creates a new `Int8Array` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`Int8Array.of()`](typedarray/of)  
Creates a new `Int8Array` with a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`Int8Array.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the `Int8Array`. Fixed at construction time and thus **read only**.

[`Int8Array.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Int8Array.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Int8Array.prototype.length`](typedarray/length)  
Returns the number of elements held in the `Int8Array`. Fixed at construction time and thus **read only.**

## Instance methods

[`Int8Array.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`Int8Array.prototype.entries()`](typedarray/entries)  
Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`Int8Array.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`Int8Array.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`Int8Array.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also [`Array.prototype.filter()`](array/filter).

[`Int8Array.prototype.find()`](typedarray/find)  
Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`Int8Array.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`Int8Array.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`Int8Array.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`Int8Array.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`Int8Array.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`Int8Array.prototype.keys()`](typedarray/keys)  
Returns a new _array iterator_ that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`Int8Array.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`Int8Array.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`Int8Array.prototype.reduce()`](typedarray/reduce)  
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`Int8Array.prototype.reduceRight()`](typedarray/reduceright)  
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`Int8Array.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`Int8Array.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`Int8Array.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`Int8Array.prototype.some()`](typedarray/some)  
Returns `true` if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`Int8Array.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`Int8Array.prototype.subarray()`](typedarray/subarray)  
Returns a new `Int8Array` from the given start and end element index.

[`Int8Array.prototype.values()`](typedarray/values)  
Returns a new _array iterator_ object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`Int8Array.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`Int8Array.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`Int8Array.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Different ways to create an Int8Array

    // From a length
    var int8 = new Int8Array(2);
    int8[0] = 42;
    console.log(int8[0]); // 42
    console.log(int8.length); // 2
    console.log(int8.BYTES_PER_ELEMENT); // 1

    // From an array
    var arr = new Int8Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Int8Array([21, 31]);
    var y = new Int8Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Int8Array(buffer, 1, 4);

    // From an iterable
    var iterable = function*(){ yield* [1,2,3]; }();
    var int8 = new Int8Array(iterable);
    // Int8Array[1, 2, 3]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#table-49">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'TypedArray constructors' in that specification.</span></a></td></tr></tbody></table>

`Int8Array`

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

`Int8Array`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array</a>
