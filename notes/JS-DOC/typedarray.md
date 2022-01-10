# TypedArray

A **_TypedArray_** object describes an array-like view of an underlying [binary data buffer](arraybuffer). There is no global property named `TypedArray`, nor is there a directly visible `TypedArray` constructor. Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type.

## Description

ECMAScript 2015 defines a `TypedArray` constructor that serves as the `[[Prototype]]` of all `TypedArray` constructors. This constructor is not directly exposed: there is no global `%TypedArray%` or `TypedArray` property. It is only directly accessible through `Object.getPrototypeOf(Int8Array)` and similar. All `TypedArray`s constructors inherit common properties from the `%TypedArray%` constructor function. Additionally, all typed array prototypes (`TypedArray.prototype`) have `%TypedArray%.prototype` as their `[[Prototype]]`.

The `%TypedArray%` constructor on its own is not particularly useful. Calling it or using it in a `new` expression will throw a [`TypeError`](typeerror), except when used during object creation in JS engines that support subclassing. There are at present no such engines, so `%TypedArray%` is only useful to polyfill functions or properties onto all `TypedArray` constructors.

When creating an instance of a `TypedArray` (e.g. `Int8Array`), an array buffer is created internally in memory or, if an `ArrayBuffer` object is given as constructor argument, then this is used instead. The buffer address is saved as an internal property of the instance and all the methods of `%TypedArray%.prototype`, i.e. set value and get value etc., operate on that array buffer address.

### TypedArray objects

<table><thead><tr class="header"><th>Type</th><th>Value Range</th><th>Size in bytes</th><th>Description</th><th>Web IDL type</th><th>Equivalent C type</th></tr></thead><tbody><tr class="odd"><td><a href="int8array"><code>Int8Array</code></a></td><td><code>-128</code> to <code>127</code></td><td>1</td><td>8-bit two's complement signed integer</td><td><code>byte</code></td><td><code>int8_t</code></td></tr><tr class="even"><td><a href="uint8array"><code>Uint8Array</code></a></td><td><code>0</code> to <code>255</code></td><td>1</td><td>8-bit unsigned integer</td><td><code>octet</code></td><td><code>uint8_t</code></td></tr><tr class="odd"><td><a href="uint8clampedarray"><code>Uint8ClampedArray</code></a></td><td><code>0</code> to <code>255</code></td><td>1</td><td>8-bit unsigned integer (clamped)</td><td><code>octet</code></td><td><code>uint8_t</code></td></tr><tr class="even"><td><a href="int16array"><code>Int16Array</code></a></td><td><code>-32768</code> to <code>32767</code></td><td>2</td><td>16-bit two's complement signed integer</td><td><code>short</code></td><td><code>int16_t</code></td></tr><tr class="odd"><td><a href="uint16array"><code>Uint16Array</code></a></td><td><code>0</code> to <code>65535</code></td><td>2</td><td>16-bit unsigned integer</td><td><code>unsigned short</code></td><td><code>uint16_t</code></td></tr><tr class="even"><td><a href="int32array"><code>Int32Array</code></a></td><td><code>-2147483648</code> to <code>2147483647</code></td><td>4</td><td>32-bit two's complement signed integer</td><td><code>long</code></td><td><code>int32_t</code></td></tr><tr class="odd"><td><a href="uint32array"><code>Uint32Array</code></a></td><td><code>0</code> to <code>4294967295</code></td><td>4</td><td>32-bit unsigned integer</td><td><code>unsigned long</code></td><td><code>uint32_t</code></td></tr><tr class="even"><td><a href="float32array"><code>Float32Array</code></a></td><td><code>1.2</code>×<code>10-38</code> to <code>3.4</code>×<code>1038</code></td><td>4</td><td>32-bit IEEE floating point number (7 significant digits e.g., <code>1.234567</code>)</td><td><code>unrestricted float</code></td><td><code>float</code></td></tr><tr class="odd"><td><a href="float64array"><code>Float64Array</code></a></td><td><code>5.0</code>×<code>10-324</code> to <code>1.8</code>×<code>10308</code></td><td>8</td><td>64-bit IEEE floating point number (16 significant digits e.g., <code>1.23456789012345</code>)</td><td><code>unrestricted double</code></td><td><code>double</code></td></tr><tr class="even"><td><a href="bigint64array"><code>BigInt64Array</code></a></td><td><code>-263</code> to <code>263-1</code></td><td>8</td><td>64-bit two's complement signed integer</td><td><code>bigint</code></td><td><code>int64_t (signed long long)</code></td></tr><tr class="odd"><td><a href="biguint64array"><code>BigUint64Array</code></a></td><td><code>0</code> to <code>264-1</code></td><td>8</td><td>64-bit unsigned integer</td><td><code>bigint</code></td><td><code>uint64_t (unsigned long long)</code></td></tr></tbody></table>

## Constructor

This object cannot be instantiated directly. Instead, you create an instance of an array of a particular type, such as a [`Int8Array`](int8array) or a [`BigInt64Array`](bigint64array). These objects all have a common syntax for their constructors:

    new TypedArray()
    new TypedArray(length)
    new TypedArray(typedArray)
    new TypedArray(object)

    new TypedArray(buffer)
    new TypedArray(buffer, byteOffset)
    new TypedArray(buffer, byteOffset, length)

Where TypedArray is a constructor for one of the concrete types.

### Parameters

`length`  
When called with a `length` argument, an internal array buffer is created in memory, of size `length` _multiplied by `BYTES_PER_ELEMENT`_ bytes, containing zeros.

`typedArray`  
When called with a `typedArray` argument, which can be an object of any of the typed array types (such as `Int32Array`), the `typedArray` gets copied into a new typed array. Each value in `typedArray` is converted to the corresponding type of the constructor before being copied into the new array. The length of the new typed array will be same as the length of the `typedArray` argument.

`object`  
When called with an `object` argument, a new typed array is created as if by the `TypedArray.from()` method.

`buffer`, `byteOffset`, `length`  
When called with a `buffer`, and optionally a `byteOffset` and a `length` argument, a new typed array view is created that views the specified [`ArrayBuffer`](arraybuffer). The `byteOffset` and `length` parameters specify the memory range that will be exposed by the typed array view. If both are omitted, all of `buffer` is viewed; if only `length` is omitted, the remainder of `buffer` is viewed.

## Static properties

[`TypedArray.BYTES_PER_ELEMENT`](typedarray/bytes_per_element)  
Returns a number value of the element size for the different `TypedArray` objects.

[`TypedArray.name`](typedarray/name)  
Returns the string value of the constructor name (e.g, "`Int8Array`").

[`get TypedArray[@@species]`](typedarray/@@species)  
The constructor function used to create derived objects.

[`TypedArray.prototype`](typedarray)  
Prototype for `TypedArray` objects.

## Static methods

[`TypedArray.from()`](typedarray/from)  
Creates a new `TypedArray` from an array-like or iterable object. See also [`Array.from()`](array/from).

[`TypedArray.of()`](typedarray/of)  
Creates a new `TypedArray` with a variable number of arguments. See also [`Array.of()`](array/of).

## Instance properties

[`TypedArray.prototype.buffer`](typedarray/buffer)  
Returns the [`ArrayBuffer`](arraybuffer) referenced by the typed array. Fixed at construction time and thus **read only**.

[`TypedArray.prototype.byteLength`](typedarray/bytelength)  
Returns the length (in bytes) of the typed array. Fixed at construction time and thus **read only.**

[`TypedArray.prototype.byteOffset`](typedarray/byteoffset)  
Returns the offset (in bytes) of the typed array from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`TypedArray.prototype.length`](typedarray/length)  
Returns the number of elements held in the typed array. Fixed at construction time and thus **read only.**

## Instance methods

[`TypedArray.prototype.at()`](typedarray/at)  
Takes an integer value and returns the item at that index. This method allows for negative integers, which count back from the last item.

[`TypedArray.prototype.copyWithin()`](typedarray/copywithin)  
Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](array/copywithin).

[`TypedArray.prototype.entries()`](typedarray/entries)  
Returns a new array iterator object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](array/entries).

[`TypedArray.prototype.every()`](typedarray/every)  
Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](array/every).

[`TypedArray.prototype.fill()`](typedarray/fill)  
Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](array/fill).

[`TypedArray.prototype.filter()`](typedarray/filter)  
Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also [`Array.prototype.filter()`](array/filter).

[`TypedArray.prototype.find()`](typedarray/find)  
Returns the found value in the array, if an element in the array satisfies the provided testing function, or `undefined` if not found. See also [`Array.prototype.find()`](array/find).

[`TypedArray.prototype.findIndex()`](typedarray/findindex)  
Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also [`Array.prototype.findIndex()`](array/findindex).

[`TypedArray.prototype.forEach()`](typedarray/foreach)  
Calls a function for each element in the array. See also [`Array.prototype.forEach()`](array/foreach).

[`TypedArray.prototype.includes()`](typedarray/includes)  
Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](array/includes).

[`TypedArray.prototype.indexOf()`](typedarray/indexof)  
Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.indexOf()`](array/indexof).

[`TypedArray.prototype.join()`](typedarray/join)  
Joins all elements of an array into a string. See also [`Array.prototype.join()`](array/join).

[`TypedArray.prototype.keys()`](typedarray/keys)  
Returns a new array iterator that contains the keys for each index in the array. See also [`Array.prototype.keys()`](array/keys).

[`TypedArray.prototype.lastIndexOf()`](typedarray/lastindexof)  
Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also [`Array.prototype.lastIndexOf()`](array/lastindexof).

[`TypedArray.prototype.map()`](typedarray/map)  
Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](array/map).

[`TypedArray.prototype.reduce()`](typedarray/reduce)  
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](array/reduce).

[`TypedArray.prototype.reduceRight()`](typedarray/reduceright)  
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](array/reduceright).

[`TypedArray.prototype.reverse()`](typedarray/reverse)  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](array/reverse).

[`TypedArray.prototype.set()`](typedarray/set)  
Stores multiple values in the typed array, reading input values from a specified array.

[`TypedArray.prototype.slice()`](typedarray/slice)  
Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](array/slice).

[`TypedArray.prototype.some()`](typedarray/some)  
Returns `true` if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](array/some).

[`TypedArray.prototype.sort()`](typedarray/sort)  
Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](array/sort).

[`TypedArray.prototype.subarray()`](typedarray/subarray)  
Returns a new `TypedArray` from the given start and end element index.

[`TypedArray.prototype.values()`](typedarray/values)  
Returns a new array iterator object that contains the values for each index in the array. See also [`Array.prototype.values()`](array/values).

[`TypedArray.prototype.toLocaleString()`](typedarray/tolocalestring)  
Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](array/tolocalestring).

[`TypedArray.prototype.toString()`](typedarray/tostring)  
Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](array/tostring).

[`TypedArray.prototype[@@iterator]()`](typedarray/@@iterator)  
Returns a new array iterator object that contains the values for each index in the array.

## Examples

### New is required

Starting with ECMAScript 2015, `TypedArray` constructors must be constructed with the [`new`](../operators/new) operator. Calling a `TypedArray` constructor as a function without `new` will throw a [`TypeError`](typeerror).

    var dv = Int8Array([1, 2, 3]);
    // TypeError: calling a builtin Int8Array constructor
    // without new is forbidden

    var dv = new Int8Array([1, 2, 3]);

### Property access

You can reference elements in the array using standard array index syntax (that is, using bracket notation). However, getting or setting indexed properties on typed arrays will not search in the prototype chain for this property, even when the indices are out of bound. Indexed properties will consult the [`ArrayBuffer`](arraybuffer) and will never look at object properties. You can still use named properties, just like with all objects.

    // Setting and getting using standard array syntax
    var int16 = new Int16Array(2);
    int16[0] = 42;
    console.log(int16[0]); // 42

    // Indexed properties on prototypes are not consulted (Fx 25)
    Int8Array.prototype[20] = 'foo';
    (new Int8Array(32))[20]; // 0
    // even when out of bound
    Int8Array.prototype[20] = 'foo';
    (new Int8Array(8))[20]; // undefined
    // or with negative integers
    Int8Array.prototype[-1] = 'foo';
    (new Int8Array(8))[-1]; // undefined

    // Named properties are allowed, though (Fx 30)
    Int8Array.prototype.foo = 'bar';
    (new Int8Array(32)).foo; // "bar"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-typedarray-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-typedarray-objects</span></a></td></tr></tbody></table>

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

`TypedArray`

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

`BYTES_PER_ELEMENT`

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

`at`

No

No

No

No

No

No

No

No

No

No

No

No

`buffer`

7

14

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

`byteLength`

7

14

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

`byteOffset`

7

14

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

`constructor_without_arguments`

7

12

55

10

11.6

5.1

≤37

18

55

12

5

1.0

`copyWithin`

45

14

34

No

36

9.1

No

No

34

No

9.3

No

`entries`

45

14

37

No

36

9.1

No

45

37

No

9.3

5.0

`every`

45

14

37

No

36

9.1

No

45

37

No

9.3

5.0

`fill`

45

14

37

No

36

9.1

No

45

37

No

9.3

5.0

`filter`

45

14

38

No

No

9.1

No

45

38

No

9.3

5.0

`find`

45

14

37

No

32

9.1

45

45

37

32

9.3

5.0

`findIndex`

45

14

37

No

32

9.1

45

45

37

32

9.3

5.0

`forEach`

45

14

38

No

32

10

45

45

38

32

10

5.0

`from`

45

14

38

No

No

10

No

No

38

No

10

No

`includes`

47

14

43

No

34

10

No

47

43

34

10

5.0

`index_properties_not_consulting_prototype`

7

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

12

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

25

10

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

11.6

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

5.1

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

≤37

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

18

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

25

12

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

5

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

1.0

Negative integers are not considered as indexed properties and therefore return the value of the prototype property.

`indexOf`

45

14

37

Starting with Firefox 47, this method will no longer return `-0`. For example, `new Uint8Array([0]).indexOf(0, -0)` will now always return `+0`.

No

32

9.1

No

45

37

Starting with Firefox 47, this method will no longer return `-0`. For example, `new Uint8Array([0]).indexOf(0, -0)` will now always return `+0`.

32

9.3

5.0

`iterable_in_constructor`

39

14

52

No

26

10

39

39

52

26

10

4.0

`join`

45

14

37

No

32

9.1

45

45

37

32

9.3

5.0

`keys`

38

14

37

No

25

10

38

38

37

25

10

3.0

`lastIndexOf`

45

14

37

Starting with Firefox 47, this method will no longer return `-0`. For example, `new Uint8Array([0]).lastIndexOf(0, -0)` will now always return `+0`.

No

32

10

45

45

37

Starting with Firefox 47, this method will no longer return `-0`. For example, `new Uint8Array([0]).lastIndexOf(0, -0)` will now always return `+0`.

32

10

5.0

`length`

7

14

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

`map`

45

14

38

No

32

9.1

45

45

38

32

9.3

5.0

`name`

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

`named_properties`

7

12

30

10

11.6

5.1

≤37

18

30

12

5

1.0

`new_required`

7

14

44

No

15

5.1

≤37

18

44

14

5

1.0

`of`

45

14

38

No

No

9.1

No

No

38

No

9.3

No

`reduce`

45

14

37

No

32

10

45

45

37

No

10

5.0

`reduceRight`

45

14

37

No

32

10

45

45

37

No

10

5.0

`reverse`

45

14

37

No

32

10

45

45

37

No

10

5.0

`set`

7

14

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

`slice`

45

14

38

No

32

10

45

45

38

32

10

5.0

`some`

45

14

37

No

32

10

45

45

37

No

10

5.0

`sort`

45

14

46

No

32

10

45

45

46

32

10

5.0

`subarray`

7

14

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

`toLocaleString`

7

12

51

10

11.6

5.1

≤37

18

51

12

5

1.0

`toString`

7

12

51

10

11.6

5.1

≤37

18

51

12

5

1.0

`values`

38

14

37

No

25

10

38

38

37

25

10

3.0

`@@iterator`

38

12

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

No

25

10

38

38

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

25

10

3.0

`@@species`

51

13

48

No

38

10

51

51

48

41

10

5.0

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [`ArrayBuffer`](arraybuffer)
-   [`DataView`](dataview)
-   [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) — Helper that decode strings from numerical data

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray</a>
