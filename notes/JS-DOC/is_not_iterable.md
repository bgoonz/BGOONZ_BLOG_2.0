# TypeError: 'x' is not iterable

The JavaScript exception "is not iterable" occurs when the value which is given as the right hand-side of [for…of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) or as argument of a function such as [`Promise.all`](../global_objects/promise/all) or [`TypedArray.from`](../global_objects/typedarray/from), is not an [iterable object](../iteration_protocols).

## Message

    TypeError: 'x' is not iterable (Firefox, Chrome)
    TypeError: 'x' is not a function or its return value is not iterable (Chrome)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The value which is given as the right hand-side of [for…of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) or as argument of a function such as [`Promise.all`](../global_objects/promise/all) or [`TypedArray.from`](../global_objects/typedarray/from), is not an [iterable object](../iteration_protocols). An iterable can be a built-in iterable type such as [`Array`](../global_objects/array), [`String`](../global_objects/string) or [`Map`](../global_objects/map), a generator result, or an object implementing the [iterable protocol](../iteration_protocols#the_iterable_protocol).

## Examples

### Iterating over Object properties

In JavaScript, [`Object`](../global_objects/object)s are not iterable unless they implement the [iterable protocol](../iteration_protocols#the_iterable_protocol). Therefore, you cannot use [for…of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) to iterate over the properties of an object.

    var obj = { 'France': 'Paris', 'England': 'London' };
    for (let p of obj) { // TypeError: obj is not iterable
        // …
    }

Instead you have to use [`Object.keys`](../global_objects/object/keys) or [`Object.entries`](../global_objects/object/entries), to iterate over the properties or entries of an object.

    var obj = { 'France': 'Paris', 'England': 'London' };
    // Iterate over the property names:
    for (let country of Object.keys(obj)) {
        var capital = obj[country];
        console.log(country, capital);
    }

    for (const [country, capital] of Object.entries(obj))
        console.log(country, capital);

Another option for this use case might be to use a [`Map`](../global_objects/map):

    var map = new Map;
    map.set('France', 'Paris');
    map.set('England', 'London');
    // Iterate over the property names:
    for (let country of map.keys()) {
        let capital = map[country];
        console.log(country, capital);
    }

    for (let capital of map.values())
        console.log(capital);

    for (const [country, capital] of map.entries())
        console.log(country, capital);

### Iterating over a generator

[Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators) are functions you call to produce an iterable object.

    function* generate(a, b) {
      yield a;
      yield b;
    }

    for (let x of generate) // TypeError: generate is not iterable
        console.log(x);

When they are not called, the [`Function`](../global_objects/function) object corresponding to the generator is callable, but not iterable. Calling a generator produces an iterable object which will iterate over the values yielded during the execution of the generator.

    function* generate(a, b) {
        yield a;
        yield b;
    }

    for (let x of generate(1,2))
        console.log(x);

### Iterating over a custom iterable

Custom iterables can be created by implementing the [`Symbol.iterator`](../global_objects/symbol/iterator) method. You must be certain that your iterator method returns an object which is an iterator, which is to say it must have a next method.

    const myEmptyIterable = {
        [Symbol.iterator]() {
            return [] // [] is iterable, but it is not an iterator -- it has no next method.
        }
    }

    Array.from(myEmptyIterable);  // TypeError: myEmptyIterable is not iterable

Here is a correct implementation:

    const myEmptyIterable = {
        [Symbol.iterator]() {
            return [][Symbol.iterator]()
        }
    }

    Array.from(myEmptyIterable);  // []

## See also

-   [iterable protocol](../iteration_protocols#the_iterable_protocol)
-   [`Object.keys`](../global_objects/object/keys)
-   [`Object.entries`](../global_objects/object/entries)
-   [`Map`](../global_objects/map)
-   [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators)
-   [for…of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable</a>
