# Generator

The `Generator` object is returned by a [generator function](../statements/function*) and it conforms to both the [iterable protocol](../iteration_protocols#the_iterable_protocol) and the [iterator protocol](../iteration_protocols#the_iterator_protocol).

## Constructor

This object cannot be instantiated directly. Instead, a `Generator` instance can be returned from a [generator function](../statements/function*):

    function* generator() {
      yield 1;
      yield 2;
      yield 3;
    }

    const gen = generator(); // "Generator { }"

    console.log(gen.next().value); // 1
    console.log(generator().next().value); // 1
    console.log(generator().next().value); // 1

## Instance methods

[`Generator.prototype.next()`](generator/next)  
Returns a value yielded by the [`yield`](../operators/yield) expression.

[`Generator.prototype.return()`](generator/return)  
Returns the given value and finishes the generator.

[`Generator.prototype.throw()`](generator/throw)  
Throws an error to a generator (also finishes the generator, unless caught from within that generator).

## Examples

### An infinite iterator

With a generator function, values are not evaluated until they are needed. Therefore a generator allows us to define a potentially infinite data structure.

    function* infinite() {
        let index = 0;

        while (true) {
            yield index++;
        }
    }

    const generator = infinite(); // "Generator { }"

    console.log(generator.next().value); // 0
    console.log(generator.next().value); // 1
    console.log(generator.next().value); // 2
    // ...

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-generator-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-generator-objects</span></a></td></tr></tbody></table>

`Generator`

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

`return`

50

13

38

No

37

10

50

50

38

37

10

5.0

`throw`

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

-   [`function*`](../statements/function*)
-   [`function*` expression](../operators/function*)
-   [`GeneratorFunction`](generatorfunction)
-   [The Iterator protocol](../iteration_protocols)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator</a>
