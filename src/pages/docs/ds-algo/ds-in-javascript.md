---
title: Native Data Structures in JS
template: docs
excerpt: In javascript
---
# Data Structures 



# JavaScript data types and data structures

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## [Dynamic typing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dynamic_typing "Permalink to Dynamic typing")

JavaScript is a *loosely typed* and *dynamic*language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```

```

Copy to Clipboard

## [JavaScript types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types "Permalink to JavaScript types")

The set of types in the JavaScript language consists of *[primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)* and *[objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)*.

* [Primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values) (immutable datum represented directly at the lowest level of the language)

  * [Boolean type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
  * [Null type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type)
  * [Undefined type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)
  * [Number type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  * [BigInt type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
  * [String type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
  * [Symbol type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
* [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects) (collections of properties)

## [Primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values "Permalink to Primitive values")

All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "*primitive values*".

### [Boolean type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type "Permalink to Boolean type")

Boolean represents a logical entity and can have two values: `true` and `false`. See [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) and [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) for more details.

### [Null type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type "Permalink to Null type")

The Null type has exactly one value: `null`. See [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) and [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null) for more details.

### [Undefined type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type "Permalink to Undefined type")

A variable that has not been assigned a value has the value `undefined`. See [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) for more details.

### [Numeric types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_types "Permalink to Numeric types")

ECMAScript has two built-in numeric types: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number-type) and [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint-type) — along with the related value [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#nan).

#### Number type

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). It is capable of storing floating-point numbers between 2^-1074 and 2^1024, but can only safely store integers in the range -(2^53 − 1) to 2^53 − 1. Values outside of the range from [`Number.MIN_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) to [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) are automatically converted to either `+Infinity` or `-Infinity`, which behave similarly to mathematical infinity, but with some slight differences; see [`Number.POSITIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY) for details.

**Note:** You are can check if a number is in the double-precision floating-point number range using [`Number.isSafeInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) Outside the range from [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) to [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation.

The number type has only one integer with multiple representations: `0` is represented as both `-0` and `+0` (where `0` is an alias for `+0`). In practice, there is almost no difference between the different representations; for example, `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:

```

```

Copy to Clipboard

Although a number often represents only its value, JavaScript provides [`binary (bitwise) operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

**Note:** Although bitwise operators *can* be used to represent several Boolean values within a single number using [bit masking](https://en.wikipedia.org/wiki/Mask_%28computing%29), this is usually considered a bad practice. JavaScript offers other means to represent a set of Booleans (like an array of Booleans, or an object with Boolean values assigned to named properties). Bit masking also tends to make the code more difficult to read, understand, and maintain.

It may be necessary to use such techniques in very constrained environments, like when trying to cope with the limitations of local storage, or in extreme cases (such as when each bit over the network counts). This technique should only be considered when it is the last measure that can be taken to optimize size.

#### BigInt type

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending `n` to the end of an integer or by calling the constructor.

You can obtain the largest safe value that can be incremented with Numbers by using the constant [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). With the introduction of BigInts, you can operate with numbers beyond the [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

This example demonstrates, where incrementing the [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) returns the expected result:

```

```

Copy to Clipboard

You can use the operators `+`, `*`, `-`, `**`, and `%`with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

A BigInt behaves like a Number in cases where it is converted to boolean: `if`, `||`, `&&`, `Boolean`, `!`.

`BigInt`s cannot be operated on interchangeably with Numbers. Instead a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) will be thrown.

#### NaN

[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) ("**N**ot a **N**umber") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

### [String type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type "Permalink to String type")

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index `0`, the next at index `1`, and so on. The length of a String is the number of elements in it.

Unlike some programming languages (such as C), JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

However, it is still possible to create another string based on an operation on the original string. For example:

* A substring of the original by picking individual letters or using [`String.substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr).
* A concatenation of two strings using the concatenation operator (`+`) or [`String.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

* It is easy to build complex strings with concatenation.
* Strings are easy to debug (what you see printed is always what is in the string).
* Strings are the common denominator of a lot of APIs ([input fields](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) values, [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, *parse* strings, and use the appropriate abstraction.

### [Symbol type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type "Permalink to Symbol type")

A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

For more details see [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) and the [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)object wrapper in JavaScript.

## [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects "Permalink to Objects")

In computer science, an object is a value in memory which is possibly referenced by an [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier).

### [Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#properties "Permalink to Properties")

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using *key*values. A *key* value is either a [String value](https://developer.mozilla.org/en-US/docs/Glossary/String) or a [Symbol value](https://developer.mozilla.org/en-US/docs/Glossary/Symbol).

There are two types of object properties: The [*data* property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#data_property) and the [*accessor* property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#accessor_property).

**Note:** Each property has corresponding *attributes*. Attributes are used internally by the JavaScript engine, so you cannot directly access them. That's why attributes are listed in double square brackets, rather than single.

See [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) to learn more.

#### Data property

Associates a key with a value, and has the following attributes:

|                   |                     |                                                                                                                                                                  |             |
| ----------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \[[Value]]        | Any JavaScript type | The value retrieved by a get access of the property.                                                                                                             | `undefined` |
| \[[Writable]]     | Boolean             | If `false`, the property's \[[Value]] cannot be changed.                                                                                                         | `false`     |
| \[[Enumerable]]   | Boolean             |                                                                                                                                                                  | `false`     |
| \[[Configurable]] | Boolean             | If `false`, the property cannot be deleted, cannot be changed to an accessor property, and attributes other than \[[Value]] and \[[Writable]] cannot be changed. | `false`     |

|            |         |                                                        |
| ---------- | ------- | ------------------------------------------------------ |
| Read-only  | Boolean | Reversed state of the ES5 \[[Writable]] attribute.     |
| DontEnum   | Boolean | Reversed state of the ES5 \[[Enumerable]] attribute.   |
| DontDelete | Boolean | Reversed state of the ES5 \[[Configurable]] attribute. |

#### Accessor property

Associates a key with one of two accessor functions (`get` and `set`) to retrieve or store a value.

**Note:** It's important to recognize it's accessor *property* — not accessor *method*. We can give a JavaScript object class-like accessors by using a function as a value — but that doesn't make the object a class.

An accessor property has the following attributes:

|                   |                                |                                                                                                                                                                                                                                                       |             |
| ----------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \[[Get]]          | Function object or `undefined` | The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed. See also [`get`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).               | `undefined` |
| \[[Set]]          | Function object or `undefined` | The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed. See also [`set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set). | `undefined` |
| \[[Enumerable]]   | Boolean                        | If `true`, the property will be enumerated in [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)loops.                                                                                               | `false`     |
| \[[Configurable]] | Boolean                        | If `false`, the property can't be deleted and can't be changed to a data property.                                                                                                                                                                    | `false`     |

### ["Normal" objects, and functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#normal_objects_and_functions 'Permalink to "Normal" objects, and functions')

A JavaScript object is a mapping between *keys*and *values*. Keys are strings (or Symbols), and *values* can be anything. This makes objects a natural fit for [hashmaps](https://en.wikipedia.org/wiki/Hash_table).

Functions are regular objects with the additional capability of being *callable*.

### [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dates "Permalink to Dates")

When representing dates, the best choice is to use the built-in [`Date` utility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript.

### [Indexed collections: Arrays and typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#indexed_collections_arrays_and_typed_arrays "Permalink to Indexed collections: Arrays and typed Arrays")

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are regular objects for which there is a particular relationship between integer-keyed properties and the `length` property.

Additionally, arrays inherit from `Array.prototype`, which provides to them a handful of convenient methods to manipulate arrays. For example, [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (searching a value in the array) or [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (adding an element to the array), and so on. This makes Arrays a perfect candidate to represent lists or sets.

[Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) are new to JavaScript with ECMAScript 2015, and present an array-like view of an underlying binary data buffer. The following table helps determine the equivalent C data types:

|                                                                                                                           |                              |     |                                                                              |                       |                                 |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | `-128` to `127`              | 1   | 8-bit two's complement signed integer                                        | `byte`                | `int8_t`                        |
| [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | `0` to `255`                 | 1   | 8-bit unsigned integer                                                       | `octet`               | `uint8_t`                       |
| [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | `0` to `255`                 | 1   | 8-bit unsigned integer (clamped)                                             | `octet`               | `uint8_t`                       |
| [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | `-32768` to `32767`          | 2   | 16-bit two's complement signed integer                                       | `short`               | `int16_t`                       |
| [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | `0` to `65535`               | 2   | 16-bit unsigned integer                                                      | `unsigned short`      | `uint16_t`                      |
| [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | `-2147483648`to `2147483647` | 4   | 32-bit two's complement signed integer                                       | `long`                | `int32_t`                       |
| [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | `0` to `4294967295`          | 4   | 32-bit unsigned integer                                                      | `unsigned long`       | `uint32_t`                      |
| [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | `1.2E-38` to `3.4E38`        | 4   | 32-bit IEEE floating point number (7 significant digits e.g., `1.1234567`)   | `unrestricted float`  | `float`                         |
| [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | `5E-324` to `1.8E308`        | 8   | 64-bit IEEE floating point number (16 significant digits e.g., `1.123...15`) | `unrestricted double` | `double`                        |
| [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)         | `-2^63` to `2^63 - 1`        | 8   | 64-bit two's complement signed integer                                       | `bigint`              | `int64_t (signed long long)`    |
| [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)       | `0` to `2^64 - 1`            | 8   | 64-bit unsigned integer                                                      | `bigint`              | `uint64_t (unsigned long long)` |

### [Keyed collections: Maps, Sets, WeakMaps, WeakSets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#keyed_collections_maps_sets_weakmaps_weaksets "Permalink to Keyed collections: Maps, Sets, WeakMaps, WeakSets")

These data structures, introduced in ECMAScript Edition 6, take object references as keys. [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)and [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) represent a set of objects, while [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) associate a value to an object.

The difference between `Map`s and `WeakMap`s is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

One could implement `Map`s and `Set`s in pure ECMAScript 5. However, since objects cannot be compared (in the sense of `<` "less than", for instance), look-up performance would necessarily be linear. Native implementations of them (including `WeakMap`s) can have look-up performance that is approximately logarithmic to constant time.

Usually, to bind data to a DOM node, one could set properties directly on the object, or use `data-*` attributes. This has the downside that the data is available to any script running in the same context. `Map`s and `WeakMap`s make it easy to *privately* bind data to an object.

### [Structured data: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#structured_data_json "Permalink to Structured data: JSON")

JSON (**J**ava**S**cript **O**bject **N**otation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.

See [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) and [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) for more details.

### [More objects in the standard library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#more_objects_in_the_standard_library "Permalink to More objects in the standard library")

JavaScript has a standard library of built-in objects.

Please have a look at the [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) to find out about more objects.

## [Determining types using the `typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#determining_types_using_the_typeof_operator "Permalink to Determining types using the typeof operator")

The `typeof` operator can help you to find the type of your variable.

Please read the [reference page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) for more details and edge cases.

## [See also](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#see_also "Permalink to See also")

* [JavaScript Data Structures and Algorithms by Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms)
* [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/nzakas/computer-science-in-javascript/)
* [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
* [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
