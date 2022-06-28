# Generator.prototype.next()

The `next()` method returns an object with two properties `done` and `value`. You can also provide a parameter to the `next` method to send a value to the generator.

## Syntax

    next(value)

### Parameters

`value`  
The value to send to the generator.

The value will be assigned as a result of a `yield` expression. For example, in `variable = yield expression`, the value passed to the `.next()` function will be assigned to `variable`.

### Return value

An [`Object`](../object) with two properties:

`done` (boolean)  
Has the value `true` if the iterator is past the end of the iterated sequence. In this case `value` optionally specifies the _return value_ of the iterator.

Has the value `false` if the iterator was able to produce the next value in the sequence. This is equivalent of not specifying the `done` property altogether.

`value`  
Any JavaScript value returned by the iterator. Can be omitted when `done` is `true`.

## Examples

### Using next()

The following example shows a simple generator and the object that the `next` method returns:

    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    const g = gen(); // "Generator { }"
    g.next();      // "Object { value: 1, done: false }"
    g.next();      // "Object { value: 2, done: false }"
    g.next();      // "Object { value: 3, done: false }"
    g.next();      // "Object { value: undefined, done: true }"

### Using next() with a list

    function* getPage(pageSize = 1, list) {
        let output = [];
        let index = 0;

        while (index < list.length) {
            output = [];
            for (let i = index; i < index + pageSize; i++) {
                if (list[i]) {
                    output.push(list[i]);
                }
            }

            yield output;
            index += pageSize;
        }
    }

    list = [1, 2, 3, 4, 5, 6, 7, 8]
    var page = getPage(3, list);              // Generator { }

    page.next();                              // Object {value: (3) [1, 2, 3], done: false}
    page.next();                              // Object {value: (3) [4, 5, 6], done: false}
    page.next();                              // Object {value: (2) [7, 8], done: false}
    page.next();                              // Object {value: undefined, done: true}

### Sending values to the generator

In this example, `next` is called with a value.

Note that the first call does not log anything, because the generator was not yielding anything initially.

    function* gen() {
      while (true) {
        let value = yield null;
        console.log(value);
      }
    }

    const g = gen();
    g.next(1);
    // "{ value: null, done: false }"
    g.next(2);
    // 2
    // "{ value: null, done: false }"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-generator.prototype.next">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-generator.prototype.next</span></a></td></tr></tbody></table>

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

`next`

39

13

26

No

26

10

39

39

26

26

10

4.0

## See also

-   [`function*`](../../statements/function*)
-   [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next</a>
