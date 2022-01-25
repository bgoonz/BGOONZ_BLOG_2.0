# Symbol.asyncIterator

The `Symbol.asyncIterator` well-known symbol specifies the default AsyncIterator for an object. If this property is set on an object, it is an async iterable and can be used in a `for await...of` loop.

## Description

The `Symbol.asyncIterator` symbol is a builtin symbol that is used to access an object's `@@asyncIterator` method. In order for an object to be async iterable, it must have a `Symbol.asyncIterator` key.

Property attributes of `Symbol.asyncIterator`

Writable

no

Enumerable

no

Configurable

no

## Examples

### User-defined Async Iterables

You can define your own async iterable by setting the `[Symbol.asyncIterator]` property on an object.

    const myAsyncIterable = {
        async* [Symbol.asyncIterator]() {
            yield "hello";
            yield "async";
            yield "iteration!";
        }
    };

    (async () => {
        for await (const x of myAsyncIterable) {
            console.log(x);
            // expected output:
            //    "hello"
            //    "async"
            //    "iteration!"
        }
    })();

When creating an API, remember that async iterables are designed to represent something _iterable_ — like a stream of data or a list —, not to completely replace callbacks and events in most situations.

### Built-in Async Iterables

There are currently no built-in JavaScript objects that have the `[Symbol.asyncIterator]` key set by default. However, WHATWG Streams are set to be the first built-in object to be async iterable, with `[Symbol.asyncIterator]` recently landing in the spec.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.asynciterator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.asynciterator</span></a></td></tr></tbody></table>

`asyncIterator`

63

79

57

No

50

11.1

63

63

57

46

No

8.0

## See also

-   [Iteration protocols](../../iteration_protocols)
-   [for await... of](../../statements/for-await...of)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator</a>
