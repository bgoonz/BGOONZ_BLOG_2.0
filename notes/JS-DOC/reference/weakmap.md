# WeakMap

The `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

You can learn more about `WeakMap`s in the [WeakMap object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) guide (under [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)).

## Description

Keys of WeakMaps are of the type `Object` only. [Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) as keys are not allowed (e.g. a [`Symbol`](symbol) can't be a `WeakMap` key).

### Why *Weak*Map?

A map API _could_ be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. As a result, the indices of the key and value would correspond to both arrays. Getting values from the map would involve iterating through all keys to find a match, then using the index of this match to retrieve the corresponding value from the array of values.

Such an implementation would have two main inconveniences:

1.  The first one is an _O(n)_ set and search (n being the number of keys in the map) since both operations must iterate through the list of keys to find a matching value.
2.  The second inconvenience is a memory leak because the arrays ensure that references to each key and each value are maintained indefinitely. These references prevent the keys from being garbage collected, even if there are no other references to the object. This would also prevent the corresponding values from being garbage collected.

By contrast, native `WeakMap`s hold "weak" references to key objects. As such native `WeakMap`s do not prevent garbage collection, which eventually removes references to the key object. "Weak" references also avoid preventing garbage collection of values in the map. `WeakMap`s can be particularly useful constructs when mapping keys to information about the key that is valuable _only if_ the key has not been garbage collected.

`WeakMap` There is no method to obtain a list of the keys. If there was, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a [`Map`](map).

## Constructor

[`WeakMap()`](weakmap/weakmap)  
Creates a new `WeakMap` object.

## Instance methods

[`WeakMap.prototype.delete(key)`](weakmap/delete)  
Removes any value associated to the `key`. `WeakMap.prototype.has(key)` will return `false` afterwards.

[`WeakMap.prototype.get(key)`](weakmap/get)  
Returns the value associated to the `key`, or `undefined` if there is none.

[`WeakMap.prototype.has(key)`](weakmap/has)  
Returns a Boolean asserting whether a value has been associated to the `key` in the `WeakMap` object or not.

[`WeakMap.prototype.set(key, value)`](weakmap/set)  
Sets the `value` for the `key` in the `WeakMap` object. Returns the `WeakMap` object.

## Examples

### Using WeakMap

    const wm1 = new WeakMap(),
          wm2 = new WeakMap(),
          wm3 = new WeakMap();
    const o1 = {},
          o2 = function() {},
          o3 = window;

    wm1.set(o1, 37);
    wm1.set(o2, 'azerty');
    wm2.set(o1, o2); // a value can be anything, including an object or a function
    wm2.set(o3, undefined);
    wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

    wm1.get(o2); // "azerty"
    wm2.get(o2); // undefined, because there is no key for o2 on wm2
    wm2.get(o3); // undefined, because that is the set value

    wm1.has(o2); // true
    wm2.has(o2); // false
    wm2.has(o3); // true (even if the value itself is 'undefined')

    wm3.set(o1, 37);
    wm3.get(o1); // 37

    wm1.has(o1); // true
    wm1.delete(o1);
    wm1.has(o1); // false

### Implementing a WeakMap-like class with a .clear() method

    class ClearableWeakMap {
      constructor(init) {
        this._wm = new WeakMap(init);
      }
      clear() {
        this._wm = new WeakMap();
      }
      delete(k) {
        return this._wm.delete(k);
      }
      get(k) {
        return this._wm.get(k);
      }
      has(k) {
        return this._wm.has(k);
      }
      set(k, v) {
        this._wm.set(k, v);
        return this;
      }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-weakmap-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-weakmap-objects</span></a></td></tr></tbody></table>

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

`WeakMap`

36

12

6

11

23

8

37

36

6

24

8

3.0

`WeakMap`

36

12

6

11

23

8

37

36

6

24

8

3.0

`clear`

36-43

No

20-46

11

25-30

8-9

37-43

36-43

20-46

25-30

8-9

3.0-4.0

`delete`

36

12

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

11

23

8

37

36

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

24

8

3.0

`get`

36

12

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. However, the ES2015 specification specifies to return `undefined` instead. Furthermore, `WeakMap.prototype.get` accepted an optional second argument as a fallback value, which is not part of the standard. Both non-standard behaviors are removed in version 38 and higher.

11

23

8

37

36

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. However, the ES2015 specification specifies to return `undefined` instead. Furthermore, `WeakMap.prototype.get` accepted an optional second argument as a fallback value, which is not part of the standard. Both non-standard behaviors are removed in version 38 and higher.

24

8

3.0

`has`

36

12

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

11

23

8

37

36

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

24

8

3.0

`set`

36

12

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

11

Returns 'undefined' instead of the 'Map' object.

23

8

37

36

6

Prior to Firefox 38, this method threw a `TypeError` when the key parameter was not an object. This has been fixed in version 38 and later to return `false` as per the ES2015 standard.

24

8

3.0

## See also

-   [`WeakMap` in the JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
-   [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/weblog/53/)
-   [`Map`](map)
-   [`Set`](set)
-   [`WeakSet`](weakset)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap</a>
