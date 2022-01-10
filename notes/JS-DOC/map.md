# Map

The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) may be used as either a key or a value.

## Description

A `Map` object iterates its elements in insertion order — a [`for...of`](../statements/for...of) loop returns an array of `[key, value]` for each iteration.

### Key equality

-   Key equality is based on the [`sameValueZero`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) algorithm.
-   [`NaN`](nan) is considered the same as `NaN` (even though `NaN !== NaN`) and all other values are considered equal according to the semantics of the `===` operator.
-   In the current ECMAScript specification, `-0` and `+0` are considered equal, although this was not so in earlier drafts. See _"Value equality for -0 and 0"_ in the [Browser compatibility](#browser_compatibility) table for details.

### Objects vs. Maps

[`Object`](object) is similar to `Map`—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), `Object` has been used as `Map` historically.

However, there are important differences that make `Map` preferable in certain cases:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th></th><th>Map</th><th>Object</th></tr></thead><tbody><tr class="odd"><td>Accidental Keys</td><td>A <code>Map</code> does not contain any keys by default. It only contains what is explicitly put into it.</td><td><p>An <code>Object</code> has a prototype, so it contains default keys that could collide with your own keys if you're not careful.</p><div class="notecard note"><p><strong>Note:</strong> As of ES5, this can be bypassed by using <a href="object/create"><code>Object.create(null)</code></a>, but this is seldom done.</p></div></td></tr><tr class="even"><td>Key Types</td><td>A <code>Map</code>'s keys can be any value (including functions, objects, or any primitive).</td><td>The keys of an <code>Object</code> must be either a <a href="string"><code>String</code></a> or a <a href="symbol"><code>Symbol</code></a>.</td></tr><tr class="odd"><td>Key Order</td><td><p>The keys in <code>Map</code> are ordered in a simple, straightforward way: A <code>Map</code> object iterates entries, keys, and values in the order of entry insertion.</p></td><td><p>Although the keys of an ordinary <code>Object</code> are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order.</p><p>The order was first defined for own properties only in ECMAScript 2015; ECMAScript 2020 defines order for inherited properties as well. See the <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys">OrdinaryOwnPropertyKeys</a> and <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties">EnumerateObjectProperties</a> abstract specification operations. But note that no single mechanism iterates <strong>all</strong> of an object's properties; the various mechanisms each include different subsets of properties. (<a href="../statements/for...in"><code>for-in</code></a> includes only enumerable string-keyed properties; <a href="object/keys"><code>Object.keys</code></a> includes only own, enumerable, string-keyed properties; <a href="object/getownpropertynames"><code>Object.getOwnPropertyNames</code></a> includes own, string-keyed properties even if non-enumerable; <a href="object/getownpropertysymbols"><code>Object.getOwnPropertySymbols</code></a> does the same for just <code>Symbol</code>-keyed properties, etc.)</p></td></tr><tr class="even"><td><p>Size</p></td><td>The number of items in a <code>Map</code> is easily retrieved from its <a href="map/size"><code>size</code></a> property.</td><td>The number of items in an <code>Object</code> must be determined manually.</td></tr><tr class="odd"><td>Iteration</td><td>A <code>Map</code> is an <a href="../iteration_protocols">iterable</a>, so it can be directly iterated.</td><td><p><code>Object</code> does not implement an <a href="../iteration_protocols#the_iterable_protocol">iteration protocol</a>, and so objects are not directly iterable using the JavaScript <a href="../statements/for...of">for...of</a> statement (by default).</p><div class="notecard note"><p><strong>Note:</strong></p><ul><li>An object can implement the iteration protocol, or you can get an iterable for an object using <a href="object/keys"><code>Object.keys</code></a> or <a href="object/entries"><code>Object.entries</code></a>.</li><li>The <a href="../statements/for...in">for...in</a> statement allows you to iterate over the <em>enumerable</em> properties of an object.</li></ul></div></td></tr><tr class="even"><td>Performance</td><td><p>Performs better in scenarios involving frequent additions and removals of key-value pairs.</p></td><td><p>Not optimized for frequent additions and removals of key-value pairs.</p></td></tr></tbody></table>

### Setting object properties

Setting Object properties works for Map objects as well, and can cause considerable confusion.

Therefore, this appears to work in a way:

    let wrongMap = new Map()
    wrongMap['bla'] = 'blaa'
    wrongMap['bla2'] = 'blaaa2'

    console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:

    wrongMap.has('bla')    // false
    wrongMap.delete('bla') // false
    console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

The correct usage for storing data in the Map is through the `set(key, value)` method.

    let contacts = new Map()
    contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
    contacts.has('Jessie') // true
    contacts.get('Hilary') // undefined
    contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
    contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
    contacts.delete('Raymond') // false
    contacts.delete('Jessie') // true
    console.log(contacts.size) // 1

## Constructor

[`Map()`](map/map)  
Creates a new `Map` object.

## Static properties

[`get Map[@@species]`](map/@@species)  
The constructor function that is used to create derived objects.

## Instance properties

[`Map.prototype.size`](map/size)  
Returns the number of key/value pairs in the `Map` object.

## Instance methods

[`Map.prototype.clear()`](map/clear)  
Removes all key-value pairs from the `Map` object.

[`Map.prototype.delete(key)`](map/delete)  
Returns `true` if an element in the `Map` object existed and has been removed, or `false` if the element does not exist. `Map.prototype.has(key)` will return `false` afterwards.

[`Map.prototype.get(key)`](map/get)  
Returns the value associated to the `key`, or `undefined` if there is none.

[`Map.prototype.has(key)`](map/has)  
Returns a boolean asserting whether a value has been associated to the `key` in the `Map` object or not.

[`Map.prototype.set(key, value)`](map/set)  
Sets the `value` for the `key` in the `Map` object. Returns the `Map` object.

### Iteration methods

[`Map.prototype[@@iterator]()`](map/@@iterator)  
Returns a new Iterator object that contains `[key, value]` for each element in the `Map` object in insertion order.

[`Map.prototype.keys()`](map/keys)  
Returns a new Iterator object that contains the **keys** for each element in the `Map` object in insertion order.

[`Map.prototype.values()`](map/values)  
Returns a new Iterator object that contains the **values** for each element in the `Map` object in insertion order.

[`Map.prototype.entries()`](map/entries)  
Returns a new Iterator object that contains `[key, value]` for each element in the `Map` object in insertion order.

[`Map.prototype.forEach(callbackFn[, thisArg])`](map/foreach)  
Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order. If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.

## Examples

### Using the Map object

    let myMap = new Map()

    let keyString = 'a string'
    let keyObj    = {}
    let keyFunc   = function() {}

    // setting the values
    myMap.set(keyString, "value associated with 'a string'")
    myMap.set(keyObj, 'value associated with keyObj')
    myMap.set(keyFunc, 'value associated with keyFunc')

    myMap.size              // 3

    // getting the values
    myMap.get(keyString)    // "value associated with 'a string'"
    myMap.get(keyObj)       // "value associated with keyObj"
    myMap.get(keyFunc)      // "value associated with keyFunc"

    myMap.get('a string')    // "value associated with 'a string'"
                             // because keyString === 'a string'
    myMap.get({})            // undefined, because keyObj !== {}
    myMap.get(function() {}) // undefined, because keyFunc !== function () {}

### Using NaN as Map keys

[`NaN`](nan) can also be used as a key. Even though every `NaN` is not equal to itself (`NaN !== NaN` is true), the following example works because `NaN`s are indistinguishable from each other:

    let myMap = new Map()
    myMap.set(NaN, 'not a number')

    myMap.get(NaN)
    // "not a number"

    let otherNaN = Number('foo')
    myMap.get(otherNaN)
    // "not a number"

### Iterating Map with for..of

Maps can be iterated using a `for..of` loop:

    let myMap = new Map()
    myMap.set(0, 'zero')
    myMap.set(1, 'one')

    for (let [key, value] of myMap) {
      console.log(key + ' = ' + value)
    }
    // 0 = zero
    // 1 = one

    for (let key of myMap.keys()) {
      console.log(key)
    }
    // 0
    // 1

    for (let value of myMap.values()) {
      console.log(value)
    }
    // zero
    // one

    for (let [key, value] of myMap.entries()) {
      console.log(key + ' = ' + value)
    }
    // 0 = zero
    // 1 = one

### Iterating Map with forEach()

Maps can be iterated using the [`forEach()`](map/foreach) method:

    myMap.forEach(function(value, key) {
      console.log(key + ' = ' + value)
    })
    // 0 = zero
    // 1 = one

### Relation with Array objects

    let kvArray = [['key1', 'value1'], ['key2', 'value2']]

    // Use the regular Map constructor to transform a 2D key-value Array into a map
    let myMap = new Map(kvArray)

    myMap.get('key1') // returns "value1"

    // Use Array.from() to transform a map into a 2D key-value Array
    console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

    // A succinct way to do the same, using the spread syntax
    console.log([...myMap])

    // Or use the keys() or values() iterators, and convert them to an array
    console.log(Array.from(myMap.keys())) // ["key1", "key2"]

### Cloning and merging Maps

Just like `Array`s, `Map`s can be cloned:

    let original = new Map([
      [1, 'one']
    ])

    let clone = new Map(original)

    console.log(clone.get(1))       // one
    console.log(original === clone) // false (useful for shallow comparison)

**Note:** Keep in mind that _the data itself_ is not cloned.

Maps can be merged, maintaining key uniqueness:

    let first = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ])

    let second = new Map([
      [1, 'uno'],
      [2, 'dos']
    ])

    // Merge two maps. The last repeated key wins.
    // Spread operator essentially converts a Map to an Array
    let merged = new Map([...first, ...second])

    console.log(merged.get(1)) // uno
    console.log(merged.get(2)) // dos
    console.log(merged.get(3)) // three

Maps can be merged with Arrays, too:

    let first = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ])

    let second = new Map([
      [1, 'uno'],
      [2, 'dos']
    ])

    // Merge maps with an array. The last repeated key wins.
    let merged = new Map([...first, ...second, [1, 'eins']])

    console.log(merged.get(1)) // eins
    console.log(merged.get(2)) // dos
    console.log(merged.get(3)) // three

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-map-objects">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Map' in that specification.</span></a></td></tr></tbody></table>

`Map`

38

12

13

11

25

8

38

38

14

25

8

3.0

`Map`

38

12

13

11

25

8

38

38

14

25

8

3.0

`clear`

38

12

19

11

25

8

38

38

19

25

8

3.0

`delete`

38

12

13

11

25

8

38

38

14

25

8

3.0

`entries`

38

12

20

No

25

8

38

38

20

25

8

3.0

`forEach`

38

12

25

11

25

8

38

38

25

25

8

3.0

`get`

38

12

13

11

25

8

38

38

14

25

8

3.0

`has`

38

12

13

11

25

8

38

38

14

25

8

3.0

`key_equality_for_zeros`

38

12

29

No

25

9

38

38

29

25

9

3.0

`keys`

38

12

20

No

25

8

38

38

20

25

8

3.0

`set`

38

12

13

11

Returns 'undefined' instead of the 'Map' object.

25

8

38

38

14

25

8

3.0

`size`

38

12

19

From Firefox 13 to Firefox 18, the `size` property was implemented as a `Map.prototype.size()` method, this has been changed to a property in later versions conform to the ECMAScript 2015 specification.

11

25

8

38

38

19

From Firefox 13 to Firefox 18, the `size` property was implemented as a `Map.prototype.size()` method, this has been changed to a property in later versions conform to the ECMAScript 2015 specification.

25

8

3.0

`values`

38

12

20

No

25

8

38

38

20

25

8

3.0

`@@iterator`

43

12

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

No

30

10

43

43

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

30

10

4.0

`@@species`

51

13

41

No

38

10

51

51

41

41

10

5.0

`@@toStringTag`

44

79

51

No

No

9.1

44

44

51

No

9.3

4.0

## See also

-   [`Set`](set)
-   [`WeakMap`](weakmap)
-   [`WeakSet`](weakset)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map</a>
