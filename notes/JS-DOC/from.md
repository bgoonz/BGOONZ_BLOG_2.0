# Array.from()

The `Array.from()` static method creates a new, shallow-copied `Array` instance from an array-like or iterable object.

## Syntax

    // Arrow function
    Array.from(arrayLike, (currentValue) => { ... } )
    Array.from(arrayLike, (currentValue, index) => { ... } )
    Array.from(arrayLike, (currentValue, index, array) => { ... } )

    // Mapping function
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)

    // Inline mapping function
    Array.from(arrayLike, function mapFn(currentValue) { ... })
    Array.from(arrayLike, function mapFn(currentValue, index) { ... })
    Array.from(arrayLike, function mapFn(currentValue, index, array){ ... })
    Array.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg)

### Parameters

`arrayLike`  
An array-like or iterable object to convert to an array.

`mapFn` <span class="badge inline optional">Optional</span>  
Map function to call on every element of the array.

`thisArg` <span class="badge inline optional">Optional</span>  
Value to use as `this` when executing `mapFn`.

### Return value

A new [`Array`](../array) instance.

## Description

`Array.from()` lets you create `Array`s from:

-   array-like objects (objects with a `length` property and indexed elements); or
-   [iterable objects](../../iteration_protocols) (objects such as [`Map`](../map) and [`Set`](../set)).

`Array.from()` has an optional parameter `mapFn`, which allows you to execute a [`map()`](map) function on each element of the array being created.

More clearly, `Array.from(obj, mapFn, thisArg)`  
has the same result as `Array.from(obj).map(mapFn, thisArg)`,  
except that it does not create an intermediate array.

**Note:** This is especially important for certain array subclasses, like [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), since the intermediate array would necessarily have values truncated to fit into the appropriate type.

The `length` property of the `from()` method is `1`.

In ES2015, the class syntax allows sub-classing of both built-in and user-defined classes. As a result, static methods such as `Array.from()` are "inherited" by subclasses of `Array`, and create new instances _of the subclass_, not `Array`.

## Examples

### Array from a `String`

    Array.from('foo');
    // [ "f", "o", "o" ]

### Array from a `Set`

    const set = new Set(['foo', 'bar', 'baz', 'foo']);
    Array.from(set);
    // [ "foo", "bar", "baz" ]

### Array from a `Map`

    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]

    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    Array.from(mapper.values());
    // ['a', 'b'];

    Array.from(mapper.keys());
    // ['1', '2'];

### Array from a `NodeList`

    // Create an array based on a property of DOM Elements
    const images = document.getElementsByTagName('img');
    const sources = Array.from(images, image => image.src);
    const insecureSources = sources.filter(link => link.startsWith('http://'));

### Array from an Array-like object (arguments)

    function f() {
      return Array.from(arguments);
    }

    f(1, 2, 3);

    // [ 1, 2, 3 ]

### Using arrow functions and `Array.from()`

    // Using an arrow function as the map function to
    // manipulate the elements
    Array.from([1, 2, 3], x => x + x);
    // [2, 4, 6]

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `v` below will be `undefined`
    Array.from({length: 5}, (v, i) => i);
    // [0, 1, 2, 3, 4]

### Sequence generator (range)

    // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

    // Generate numbers range 0..4
    range(0, 4, 1);
    // [0, 1, 2, 3, 4]

    // Generate numbers range 1..10 with step of 2
    range(1, 10, 2);
    // [1, 3, 5, 7, 9]

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

## Specifications

<table><thead><tr class="header"><th>Specification</th><th>Initial publication</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.from">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Array.from' in that specification.</span></a></td><td>ECMAScript 2015</td></tr></tbody></table>

`from`

45

12

32

No

32

9

45

45

32

32

9

5.0

## Polyfill

`Array.from()` was added to the ECMA-262 standard in the 6<sup>th</sup> Edition (ES2015). As such, it may not be present in other implementations of the standard.

You can work around this by inserting the following code at the beginning of your scripts, allowing use of `Array.from()` in implementations that don't natively support it.

**Note:** This algorithm is exactly as specified in ECMA-262 6<sup>th</sup> Edition (assuming `Object` and `TypeError` have their original values and that `callback.call()` evaluates to the original value of [`Function.prototype.call()`](../function/call)).

In addition, since true iterables cannot be polyfilled, this implementation does not support generic iterables as defined in the 6<sup>th</sup> Edition of ECMA-262.

    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) {
        Array.from = (function () {
            var symbolIterator;
            try {
                symbolIterator = Symbol.iterator
                    ? Symbol.iterator
                    : 'Symbol(Symbol.iterator)';
            } catch (e) {
                symbolIterator = 'Symbol(Symbol.iterator)';
            }

            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return (
                    typeof fn === 'function' ||
                    toStr.call(fn) === '[object Function]'
                );
            };
            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) return 0;
                if (number === 0 || !isFinite(number)) return number;
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };

            var setGetItemHandler = function setGetItemHandler(isIterator, items) {
                var iterator = isIterator && items[symbolIterator]();
                return function getItem(k) {
                    return isIterator ? iterator.next() : items[k];
                };
            };

            var getArray = function getArray(
                T,
                A,
                len,
                getItem,
                isIterator,
                mapFn
            ) {
                // 16. Let k be 0.
                var k = 0;

                // 17. Repeat, while k < len… or while iterator is done (also steps a - h)
                while (k < len || isIterator) {
                    var item = getItem(k);
                    var kValue = isIterator ? item.value : item;

                    if (isIterator && item.done) {
                        return A;
                    } else {
                        if (mapFn) {
                            A[k] =
                                typeof T === 'undefined'
                                    ? mapFn(kValue, k)
                                    : mapFn.call(T, kValue, k);
                        } else {
                            A[k] = kValue;
                        }
                    }
                    k += 1;
                }

                if (isIterator) {
                    throw new TypeError(
                        'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1'
                    );
                } else {
                    A.length = len;
                }

                return A;
            };

            // The length property of the from method is 1.
            return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
                // 1. Let C be the this value.
                var C = this;

                // 2. Let items be ToObject(arrayLikeOrIterator).
                var items = Object(arrayLikeOrIterator);
                var isIterator = isCallable(items[symbolIterator]);

                // 3. ReturnIfAbrupt(items).
                if (arrayLikeOrIterator == null && !isIterator) {
                    throw new TypeError(
                        'Array.from requires an array-like object or iterator - not null or undefined'
                    );
                }

                // 4. If mapfn is undefined, then let mapping be false.
                var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                var T;
                if (typeof mapFn !== 'undefined') {
                    // 5. else
                    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                    if (!isCallable(mapFn)) {
                        throw new TypeError(
                            'Array.from: when provided, the second argument must be a function'
                        );
                    }

                    // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }

                // 10. Let lenValue be Get(items, "length").
                // 11. Let len be ToLength(lenValue).
                var len = toLength(items.length);

                // 13. If IsConstructor(C) is true, then
                // 13. a. Let A be the result of calling the [[Construct]] internal method
                // of C with an argument list containing the single item len.
                // 14. a. Else, Let A be ArrayCreate(len).
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);

                return getArray(
                    T,
                    A,
                    len,
                    setGetItemHandler(isIterator, items),
                    isIterator,
                    mapFn
                );
            };
        })();
    }

## See also

-   [`Array`](../array)
-   [`Array.prototype.map()`](map)
-   [`TypedArray.from()`](../typedarray/from)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from</a>
