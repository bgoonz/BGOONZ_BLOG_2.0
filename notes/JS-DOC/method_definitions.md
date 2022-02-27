# Method definitions

Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced. It is a shorthand for a function assigned to the method's name.

## Syntax

    const obj = {
      get property() {},
      set property(value) {},
      property( parameters… ) {},
      *generator( parameters… ) {},
      async property( parameters… ) {},
      async* generator( parameters… ) {},

      //  with computed keys
      get [property]() {},
      set [property](value) {},
      [property]( parameters… ) {},
      *[generator]( parameters… ) {},
      async [property]( parameters… ) {},
      async* [generator]( parameters… ) {},
    };

## Description

The shorthand syntax is similar to the [getter](get) and [setter](set) syntax introduced in ES5.

Given the following code:

    const obj = {
      foo: function() {
        // ...
      },
      bar: function() {
        // ...
      }
    }

You are now able to shorten this to:

    const obj = {
      foo() {
        // ...
      },
      bar() {
        // ...
      }
    }

### Generator methods

[Generator methods](../statements/function*) can be defined using the shorthand syntax as well.

When doing so:

-   The asterisk (`*`) in the shorthand syntax must be _before_ the generator property name. (That is, `* g(){}` will work, but `g *(){}` will not.)
-   Non-generator method definitions cannot contain the `yield` keyword. This means that [legacy generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) won't work either, and will throw a [`SyntaxError`](../global_objects/syntaxerror). Always use `yield` in conjunction with the asterisk (`*`).

<!-- -->

    // Using a named property
    const obj2 = {
      g: function* () {
        let index = 0
        while (true) {
          yield index++
        }
      }
    };

    // The same object using shorthand syntax
    const obj2 = {
      * g() {
        let index = 0
        while (true) {
          yield index++
        }
      }
    };

    const it = obj2.g()
    console.log(it.next().value)  // 0
    console.log(it.next().value)  // 1

### Async methods

[Async methods](../statements/async_function) can also be defined using the shorthand syntax.

    // Using a named property
    const obj3 = {
      f: async function () {
        await some_promise
      }
    }

    // The same object using shorthand syntax
    const obj3 = {
      async f() {
        await some_promise
      }
    }

### Async generator methods

[Generator methods](../statements/function*) can also be [async](../statements/async_function).

    const obj4 = {
      f: async function* () {
        yield 1
        yield 2
        yield 3
      }
    };

    // The same object using shorthand syntax
    const obj4 = {
      async* f() {
       yield 1
       yield 2
       yield 3
      }
    }

### Method definitions are not constructable

Methods cannot be constructors! They will throw a [`TypeError`](../global_objects/typeerror) if you try to instantiate them.

    const objA = {
      method() {}
    }
    new objA.method  // TypeError: obj.method is not a constructor

    const objB = {
      * g() {}
    }
    new objB.g       // TypeError: obj.g is not a constructor (changed in ES2016)

## Examples

### Simple test case

    const obj = {
      a: 'foo',
      b() { return this.a }
    };
    console.log(obj.b())  // "foo"

### Computed property names

The shorthand syntax also supports computed property names.

    const bar = {
      foo0: function() { return 0 },
      foo1() { return 1 },
      ['foo' + 2]() { return 2 }
    }

    console.log(bar.foo0())  // 0
    console.log(bar.foo1())  // 1
    console.log(bar.foo2())  // 2

    // A global function
    function foo() {
      return 1
    }

    let name = 'foo'
    console.log(window[name]())  // 1

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-method-definitions">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-method-definitions</span></a></td></tr></tbody></table>

`Method_definitions`

39

12

34

No

26

9

39

39

34

26

9

4.0

`async_generator_methods`

63

79

55

No

50

12

63

63

55

46

12

8.0

`async_methods`

55

15

52

No

42

10.1

55

55

52

42

10.3

6.0

`generator_methods_not_constructable`

42

13

43

No

29

9.1

42

42

43

29

9.3

4.0

## See also

-   `get`
-   `set`
-   [Lexical grammar](../lexical_grammar)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions</a>
