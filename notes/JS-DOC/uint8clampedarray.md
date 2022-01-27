# Uint8ClampedArray

The `Uint8ClampedArray` typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of \[0,255\], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

[`Uint8ClampedArray()`](uint8clampedarray/uint8clampedarray)  
Creates a new `Uint8ClampedArray` object.

## Static properties

[`Uint8ClampedArray.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size. `1` in the case of an `Uint8ClampedArray`.

[`Uint8ClampedArray.name`](typedarray/name)  
Returns the string value of the constructor name. In the case of the `Uint8ClampedArray` type: "`Uint8ClampedArray`".

## Static methods

[`Uint8ClampedArray.from()`](typedarray/from)  
Creates a new `Uint8ClampedArray` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`Uint8ClampedArray.of()`](typedarray/of)  
Creates a new `Uint8ClampedArray` from a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`Uint8ClampedArray.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the `Uint8ClampedArray`. Fixed at construction time and thus **read only**.

[`Uint8ClampedArray.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the `Uint8ClampedArray` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Uint8ClampedArray.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the `Uint8ClampedArray` from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`Uint8ClampedArray.prototype.length`](typedarray/length)  
Returns the number of elements held in the `UintClamped8Array`. Fixed at construction time and thus **read only.**

## Instance methods

[`Uint8ClampedArray.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`Uint8ClampedArray.prototype.entries()`](typedarray/entries)  
Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`Uint8ClampedArray.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`Uint8ClampedArray.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`Uint8ClampedArray.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also [`Array.prototype.filter()`](array/filter).

[`Uint8ClampedArray.prototype.find()`](typedarray/find)  
Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`Uint8ClampedArray.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`Uint8ClampedArray.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`Uint8ClampedArray.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`Uint8ClampedArray.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`Uint8ClampedArray.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`Uint8ClampedArray.prototype.keys()`](typedarray/keys)  
Returns a new _array iterator_ that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`Uint8ClampedArray.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`Uint8ClampedArray.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`Uint8ClampedArray.prototype.reduce()`](typedarray/reduce)  
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`Uint8ClampedArray.prototype.reduceRight()`](typedarray/reduceright)  
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`Uint8ClampedArray.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`Uint8ClampedArray.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`Uint8ClampedArray.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`Uint8ClampedArray.prototype.some()`](typedarray/some)  
Returns `true` if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`Uint8ClampedArray.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`Uint8ClampedArray.prototype.subarray()`](typedarray/subarray)  
Returns a new `Uint8ClampedArray` from the given start and end element index.

[`Uint8ClampedArray.prototype.values()`](typedarray/values)  
Returns a new _array iterator_ object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`Uint8ClampedArray.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`Uint8ClampedArray.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`Uint8ClampedArray.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Different ways to create a Uint8ClampedArray

    // From a length
    var uintc8 = new Uint8ClampedArray(2);
    uintc8[0] = 42;
    uintc8[1] = 1337;
    console.log(uintc8[0]); // 42
    console.log(uintc8[1]); // 255 (clamped)
    console.log(uintc8.length); // 2
    console.log(uintc8.BYTES_PER_ELEMENT); // 1

    // From an array
    var arr = new Uint8ClampedArray([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Uint8ClampedArray([21, 31]);
    var y = new Uint8ClampedArray(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Uint8ClampedArray(buffer, 1, 4);

    // From an iterable
    var iterable = function*(){ yield* [1,2,3]; }();
    var uintc8 = new Uint8ClampedArray(iterable);
    // Uint8ClampedArray[1, 2, 3]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#table-49">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#table-49</span></a></td></tr></tbody></table>

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

`Uint8ClampedArray`

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

`Uint8ClampedArray`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray</a>
