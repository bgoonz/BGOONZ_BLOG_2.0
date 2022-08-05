# Float32Array

The `Float32Array` typed array represents an array of 32-bit floating point numbers (corresponding to the C `float` data type) in the platform byte order. If control over byte order is needed, use [`DataView`](dataview) instead. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

[`Float32Array()`](float32array/float32array)  
Creates a new `Float32Array` object.

## Static properties

[`Float32Array.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size. `4` in the case of an `Float32Array`.

[`Float32Array.name`](typedarray/name)  
Returns the string value of the constructor name. In the case of the `Float32Array` type: "Float32Array".

## Static methods

[`Float32Array.from()`](typedarray/from)  
Creates a new `Float32Array` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`Float32Array.of()`](typedarray/of)  
Creates a new `Float32Array` with a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`Float32Array.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the `Float32Array` Fixed at construction time and thus **read only**.

[`Float32Array.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the `Float32Array`. Fixed at construction time and thus **read only.**

[`Float32Array.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the `Float32Array` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Float32Array.prototype.length`](typedarray/length)  
Returns the number of elements hold in the `Float32Array`. Fixed at construction time and thus **read only.**

## Instance methods

[`Float32Array.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`Float32Array.prototype.entries()`](typedarray/entries)  
Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`Float32Array.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`Float32Array.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`Float32Array.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`](array/filter).

[`Float32Array.prototype.find()`](typedarray/find)  
Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`Float32Array.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`Float32Array.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`Float32Array.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`Float32Array.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`Float32Array.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`Float32Array.prototype.keys()`](typedarray/keys)  
Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`Float32Array.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`Float32Array.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`Float32Array.prototype.reduce()`](typedarray/reduce)  
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`Float32Array.prototype.reduceRight()`](typedarray/reduceright)  
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`Float32Array.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`Float32Array.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`Float32Array.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`Float32Array.prototype.some()`](typedarray/some)  
Returns true if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`Float32Array.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`Float32Array.prototype.subarray()`](typedarray/subarray)  
Returns a new `Float32Array` from the given start and end element index.

[`Float32Array.prototype.values()`](typedarray/values)  
Returns a new `Array Iterator` object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`Float32Array.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`Float32Array.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`Float32Array.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new `Array Iterator` object that contains the values for each index in the array.

## Examples

### Different ways to create a `Float32Array`

    // From a length
    var float32 = new Float32Array(2);
    float32[0] = 42;
    console.log(float32[0]); // 42
    console.log(float32.length); // 2
    console.log(float32.BYTES_PER_ELEMENT); // 4

    // From an array
    var arr = new Float32Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Float32Array([21, 31]);
    var y = new Float32Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(16);
    var z = new Float32Array(buffer, 0, 4);

    // From an iterable
    var iterable = function*(){ yield* [1,2,3]; }();
    var float32 = new Float32Array(iterable);
    // Float32Array[1, 2, 3]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#table-49">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#table-49</span></a></td></tr></tbody></table>

`Float32Array`

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

`Float32Array`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array</a>
