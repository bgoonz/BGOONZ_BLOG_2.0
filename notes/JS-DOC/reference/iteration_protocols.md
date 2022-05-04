# Iteration protocols

As a couple of additions to ECMAScript 2015, **Iteration protocols** aren't new built-ins or syntax, but _protocols_. These protocols can be implemented by any object by following some conventions.

There are two protocols: The [iterable protocol](#the_iterable_protocol) and the [iterator protocol](#the_iterator_protocol).

## The iterable protocol

**The iterable protocol** allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a [`for...of`](statements/for...of) construct. Some built-in types are [built-in iterables](#built-in_iterables) with a default iteration behavior, such as [`Array`](global_objects/array) or [`Map`](global_objects/map), while other types (such as [`Object`](global_objects/object)) are not.

In order to be **iterable**, an object must implement the `@@iterator` method, meaning that the object (or one of the objects up its [prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) must have a property with a `@@iterator` key which is available via constant [`Symbol.iterator`](global_objects/symbol/iterator):

<table><thead><tr class="header"><th>Property</th><th>Value</th></tr></thead><tbody><tr class="odd"><td><code>[Symbol.iterator]</code></td><td>A zero-argument function that returns an object, conforming to the <a href="#the_iterator_protocol">iterator protocol</a>.</td></tr></tbody></table>

Whenever an object needs to be iterated (such as at the beginning of a [`for...of`](statements/for...of) loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Note that when this zero-argument function is called, it is invoked as a method on the iterable object. Therefore inside of the function, the `this` keyword can be used to access the properties of the iterable object, to decide what to provide during the iteration.

This function can be an ordinary function, or it can be a generator function, so that when invoked, an iterator object is returned. Inside of this generator function, each entry can be provided by using `yield`.

## The iterator protocol

**The iterator protocol** defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a `next()` method with the following semantics:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Property</th><th>Value</th></tr></thead><tbody><tr class="odd"><td><code>next()</code></td><td><p>A zero-argument function that returns an object with at least the following two properties:</p><dl><dt> <code>done</code> (boolean)</dt><dd><p>Has the value <code>false</code> if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the <code>done</code> property altogether.)</p><p>Has the value <code>true</code> if the iterator has completed its sequence. In this case, <code>value</code> optionally specifies the return value of the iterator.</p></dd><dt><code>value</code></dt><dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code> is <code>true</code>.</dd></dl><p>The <code>next()</code> method must always return an object with appropriate properties including <code>done</code> and <code>value</code>. If a non-object value gets returned (such as <code>false</code> or <code>undefined</code>), a <a href="global_objects/typeerror"><code>TypeError</code></a> (<code>"iterator.next() returned a non-object value"</code>) will be thrown.</p></td></tr></tbody></table>

**Note:** It is not possible to know reflectively whether a particular object implements the iterator protocol. However, it is easy to create an object that satisfies _both_ the iterator and iterable protocols (as shown in the example below).

Doing so allows an iterator to be consumed by the various syntaxes expecting iterables. Thus, it is seldom useful to implement the Iterator Protocol without also implementing Iterable.

    // Satisfies both the Iterator Protocol and Iterable
    const myIterator = {
        next: function() {
            // ...
        },
        [Symbol.iterator]: function() { return this; }
    };

However, when possible, it's better for `iterable[Symbol.iterator]` to return different iterators that always start from the beginning, like `Set.prototype[@@iterator]()` does.

## Examples using the iteration protocols

A [`String`](global_objects/string) is an example of a built-in iterable object:

    const someString = 'hi';
    console.log(typeof someString[Symbol.iterator]); // "function"

`String`'s [default iterator](global_objects/string/@@iterator) returns the string's code points one by one:

    const iterator = someString[Symbol.iterator]();
    console.log(iterator + ''); // "[object String Iterator]"

    console.log(iterator.next()); // { value: "h", done: false }
    console.log(iterator.next()); // { value: "i", done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

Some built-in constructs—such as the [spread syntax](operators/spread_syntax)—use the same iteration protocol under the hood:

    console.log([...someString]); // ["h", "i"]

You can redefine the iteration behavior by supplying our own `@@iterator`:

    // need to construct a String object explicitly to avoid auto-boxing
    const someString = new String('hi');

    someString[Symbol.iterator] = function () {
      return {
        // this is the iterator object, returning a single element (the string "bye")
        next: function () {
          return this._first ? {
            value: 'bye',
            done: (this._first = false)
          } : {
            done: true
          }
        },
        _first: true
      };
    };

Notice how redefining `@@iterator` affects the behavior of built-in constructs that use the iteration protocol:

    console.log([...someString]); // ["bye"]
    console.log(someString + ''); // "hi"

## Iterable examples

### Built-in iterables

[`String`](global_objects/string), [`Array`](global_objects/array), [`TypedArray`](global_objects/typedarray), [`Map`](global_objects/map), and [`Set`](global_objects/set) are all built-in iterables, because each of their prototype objects implements an `@@iterator` method.

### User-defined iterables

You can make your own iterables like this:

    const myIterable = {};
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    console.log([...myIterable]); // [1, 2, 3]

### Built-in APIs accepting iterables

There are many APIs that accept iterables. Some examples include:

-   [`new Map([iterable])`](global_objects/map)
-   [`new WeakMap([iterable])`](global_objects/weakmap)
-   [`new Set([iterable])`](global_objects/set)
-   [`new WeakSet([iterable])`](global_objects/weakset)

<!-- -->

    new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

    const myObj = {};

    new WeakMap([
        [{}, 'a'],
        [myObj, 'b'],
        [{}, 'c']
    ]).get(myObj);             // "b"

    new Set([1, 2, 3]).has(3); // true
    new Set('123').has('2');   // true

    new WeakSet(function* () {
        yield {}
        yield myObj
        yield {}
    }()).has(myObj);           // true

#### See also

-   [`Promise.all(iterable)`](global_objects/promise/all)
-   [`Promise.race(iterable)`](global_objects/promise/race)
-   [`Array.from(iterable)`](global_objects/array/from)

### Syntaxes expecting iterables

Some statements and expressions expect iterables, for example the [`for...of`](statements/for...of) loops, the [spread operator](operators/spread_syntax)), [`yield*`](operators/yield*), and [`destructuring assignment`](operators/destructuring_assignment):

    for (const value of ['a', 'b', 'c']) {
        console.log(value);
    }
    // "a"
    // "b"
    // "c"

    console.log([...'abc']);   // ["a", "b", "c"]

    function* gen() {
      yield* ['a', 'b', 'c'];
    }

    console.log(gen().next()); // { value: "a", done: false }

    [a, b, c] = new Set(['a', 'b', 'c']);
    console.log(a);            // "a"

### Non-well-formed iterables

If an iterable's `@@iterator` method doesn't return an iterator object, then it's considered a _non-well-formed_ iterable.

Using one is likely to result in runtime errors or buggy behavior:

    const nonWellFormedIterable = {};
    nonWellFormedIterable[Symbol.iterator] = () => 1;
    [...nonWellFormedIterable]; // TypeError: [] is not a function

## Iterator examples

### Simple iterator

    function makeIterator(array) {
      let nextIndex = 0
      return {
        next: function() {
          return nextIndex < array.length ? {
            value: array[nextIndex++],
            done: false
          } : {
            done: true
          };
        }
      };
    }

    const it = makeIterator(['yo', 'ya']);

    console.log(it.next().value); // 'yo'
    console.log(it.next().value); // 'ya'
    console.log(it.next().done);  // true

### Infinite iterator

    function idMaker() {
      let index = 0;
      return {
        next: function() {
          return {
            value: index++,
            done: false
          };
        }
      };
    }

    const it = idMaker();

    console.log(it.next().value); // '0'
    console.log(it.next().value); // '1'
    console.log(it.next().value); // '2'
    // ...

### With a generator

    function* makeSimpleGenerator(array) {
      let nextIndex = 0;
      while (nextIndex < array.length) {
        yield array[nextIndex++];
      }
    }

    const gen = makeSimpleGenerator(['yo', 'ya']);

    console.log(gen.next().value); // 'yo'
    console.log(gen.next().value); // 'ya'
    console.log(gen.next().done);  // true

    function* idMaker() {
      let index = 0;
      while (true) {
        yield index++;
      }
    }

    const it = idMaker()

    console.log(it.next().value); // '0'
    console.log(it.next().value); // '1'
    console.log(it.next().value); // '2'
    // ...

### With ES2015 class

    class SimpleClass {
      constructor(data) {
        this.data = data;
      }

      [Symbol.iterator]() {
        // Use a new index for each iterator. This makes multiple
        // iterations over the iterable safe for non-trivial cases,
        // such as use of break or nested looping over the same iterable.
        let index = 0;

        return {
          next: () => {
            if (index < this.data.length) {
              return {value: this.data[index++], done: false}
            } else {
              return {done: true}
            }
          }
        }
      }
    }

    const simple = new SimpleClass([1,2,3,4,5]);

    for (const val of simple) {
      console.log(val); // '1' '2' '3' '4' '5'
    }

## Is a generator object an iterator or an iterable?

A [generator object](global_objects/generator) is _both_ iterator and iterable:

    const aGeneratorObject = function* () {
      yield 1;
      yield 2;
      yield 3;
    }();

    console.log(typeof aGeneratorObject.next);
    // "function", because it has a next method, so it's an iterator

    console.log(typeof aGeneratorObject[Symbol.iterator]);
    // "function", because it has an @@iterator method, so it's an iterable

    console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
    // true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable

    console.log([...aGeneratorObject]);
    // [1, 2, 3]

    console.log(Symbol.iterator in aGeneratorObject)
    // true, because @@iterator method is a property of aGeneratorObject

## See also

-   [the `function*` documentation](statements/function*)
-   [Iteration in the ECMAScript specification](https://tc39.es/ecma262/#sec-iteration)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols</a>
