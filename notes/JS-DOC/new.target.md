# new.target

The `new.target` pseudo-property lets you detect whether a function or constructor was called using the [new](new) operator. In constructors and functions invoked using the [new](new) operator, `new.target` returns a reference to the constructor or function. In normal function calls, `new.target` is [`undefined`](../global_objects/undefined).

## Syntax

    new.target

## Description

The `new.target` syntax consists of the keyword `new`, a dot, and the identifier `target`. Normally, the left-hand side of the dot is the object on which property access is performed, but here, `new` is not an object.

The `new.target` pseudo-property is available in all functions.

In class constructors, it refers to the constructed class.

In ordinary functions, it refers to the function itself, assuming it was invoked via the [new](new) operator; otherwise `new.target` is [`undefined`](../global_objects/undefined).

In [arrow functions](../functions/arrow_functions), `new.target` is inherited from the surrounding scope.

## Examples

### new.target in function calls

In normal function calls (as opposed to constructor function calls), `new.target` is [`undefined`](../global_objects/undefined). This lets you detect whether a function was called with [new](new) as a constructor.

    function Foo() {
      if (!new.target) { throw 'Foo() must be called with new' }
      console.log('Foo instantiated with new')
    }

    new Foo()  // logs "Foo instantiated with new"
    Foo()      // throws "Foo() must be called with new"

### new.target in constructors

In class constructors, `new.target` refers to the constructor that was directly invoked by `new`. This is also the case if the constructor is in a parent class and was delegated from a child constructor.

    class A {
      constructor() {
        console.log(new.target.name)
      }
    }

    class B extends A { constructor() { super() } }

    let a = new A()  // logs "A"
    let b = new B()  // logs "B"

    class C { constructor() { console.log(new.target)  } }
    class D extends C { constructor() { super()  } }

    let c = new C()  // logs class C{constructor(){console.log(new.target);}}
    let d = new D()  // logs class D extends C{constructor(){super();}}

Thus from the above example of class `C` and `D`, it seems that `new.target` points to the class definition of class which is initialized. For example, when `d` was initialized using `new D()`, the class definition of `D` was printed; and similarly, in case of `c`, the class `C` was printed.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-built-in-function-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-built-in-function-objects</span></a></td></tr></tbody></table>

`new.target`

46

13

41

No

33

11

46

46

41

33

11

5.0

## See also

-   [Functions](../functions)
-   [Classes](../classes)
-   `new`
-   `this`

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target</a>
