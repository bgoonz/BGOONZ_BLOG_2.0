# let

The `let` statement declares a block-scoped local variable, optionally initializing it to a value.

## Syntax

    let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];

### Parameters

`nameN`  
The names of the variable or variables to declare. Each must be a legal JavaScript identifier.

` value``N ` <span class="badge inline optional">Optional</span>  
For each variable declared, you may optionally specify its initial value to any legal JavaScript expression.

Alternatively, the [Destructuring Assignment](../operators/destructuring_assignment) syntax can also be used to declare variables.

    let { bar } = foo; // where foo = { bar:10, baz:12 };
    /* This creates a variable with the name 'bar', which has a value of 10 */

## Description

`let` allows you to declare variables that are limited to the scope of a [block](block) statement, or expression on which it is used, unlike the [`var`](var) keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between [`var`](var) and `let` is that the latter is initialized to a value only when a [parser evaluates it (see below)](#temporal_dead_zone).

Just like [`const`](const#description) the `let` does _not_ create properties of the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object when declared globally (in the top-most scope).

An explanation of why the name "**let**" was chosen can be found [here](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri).

**Note:** Many issues with `let` variables can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readibility).

## Examples

### Scoping rules

Variables declared by `let` have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, `let` works very much like `var`. The main difference is that the scope of a `var` variable is the entire enclosing function:

    function varTest() {
      var x = 1;
      {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }

    function letTest() {
      let x = 1;
      {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }

At the top level of programs and functions, `let`, unlike `var`, does not create a property on the global object. For example:

    var x = 'global';
    let y = 'global';
    console.log(this.x); // "global"
    console.log(this.y); // undefined

### Emulating private members

In dealing with [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor) it is possible to use the `let` bindings to share one or more private members without using [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures):

    var Thing;

    {
      let privateScope = new WeakMap();
      let counter = 0;

      Thing = function() {
        this.someProperty = 'foo';

        privateScope.set(this, {
          hidden: ++counter,
        });
      };

      Thing.prototype.showPublic = function() {
        return this.someProperty;
      };

      Thing.prototype.showPrivate = function() {
        return privateScope.get(this).hidden;
      };
    }

    console.log(typeof privateScope);
    // "undefined"

    var thing = new Thing();

    console.log(thing);
    // Thing {someProperty: "foo"}

    thing.showPublic();
    // "foo"

    thing.showPrivate();
    // 1

The same privacy pattern with closures over local variables can be created with `var`, but those need a function scope (typically an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) in the module pattern) instead of just a block scope like in the example above.

### Redeclarations

Redeclaring the same variable within the same function or block scope raises a [`SyntaxError`](../global_objects/syntaxerror).

    if (x) {
      let foo;
      let foo; // SyntaxError thrown.
    }

You may encounter errors in [`switch`](switch) statements because there is only one block.

    let x = 1;
    switch(x) {
      case 0:
        let foo;
        break;

      case 1:
        let foo; // SyntaxError for redeclaration.
        break;
    }

However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment, which will not produce the redeclaration errors shown above.

    let x = 1;

    switch(x) {
      case 0: {
        let foo;
        break;
      }
      case 1: {
        let foo;
        break;
      }
    }

### Temporal dead zone (TDZ)

`let` variables cannot be read/written until they have been fully initialized, which happens when they are declared (if no initial value is specified on declaration, the variable is initialized with a value of `undefined`). Accessing the variable before the initialization results in a [`ReferenceError`](../global_objects/referenceerror).

**Note:** This differs from [`var`](var#var_hoisting) variables, which will return a value of `undefined` if they are accessed before they are declared.

The variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until the initialization has completed.

    { // TDZ starts at beginning of scope
      console.log(bar); // undefined
      console.log(foo); // ReferenceError
      var bar = 1;
      let foo = 2; // End of TDZ (for foo)
    }

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the `let` variable appears before the variable is declared, the function is _called_ outside the TDZ.

    {
        // TDZ starts at beginning of scope
        const func = () => console.log(letVar); // OK

        // Within the TDZ letVar access throws `ReferenceError`

        let letVar = 3; // End of TDZ (for letVar)
        func(); // Called outside TDZ!
    }

#### The TDZ and `typeof`

Using the `typeof` operator for a `let` variable in its TDZ will throw a [`ReferenceError`](../global_objects/referenceerror):

    // results in a 'ReferenceError'
    console.log(typeof i);
    let i = 10;

This differs from using `typeof` for undeclared variables, and variables that hold a value of `undefined`:

    // prints out 'undefined'
    console.log(typeof undeclaredVariable);

#### TDZ combined with lexical scoping

The following code results in a `ReferenceError` at the line shown:

    function test(){
       var foo = 33;
       if(foo) {
          let foo = (foo + 55); // ReferenceError
       }
    }
    test();

The `if` block is evaluated because the outer `var foo` has a value. However due to lexical scoping this value is not available inside the block: the identifier `foo` _inside_ the `if` block is the `let foo`. The expression `(foo + 55)` throws a `ReferenceError` because initialization of `let foo` has not completed — it is still in the temporal dead zone.

This phenomenon can be confusing in a situation like the following. The instruction `let n of n.a` is already inside the private scope of the for loop's block. So, the identifier `n.a` is resolved to the property '`a`' of the '`n`' object located in the first part of the instruction itself (`let n`).

This is still in the temporal dead zone as its declaration statement has not been reached and terminated.

    function go(n) {
      // n here is defined!
      console.log(n); // Object {a: [1,2,3]}

      for (let n of n.a) { // ReferenceError
        console.log(n);
      }
    }

    go({a: [1, 2, 3]});

### Other situations

When used inside a block, `let` limits the variable's scope to that block. Note the difference between `var`, whose scope is inside the function where it is declared.

    var a = 1;
    var b = 2;

    if (a === 1) {
      var a = 11; // the scope is global
      let b = 22; // the scope is inside the if-block

      console.log(a);  // 11
      console.log(b);  // 22
    }

    console.log(a); // 11
    console.log(b); // 2

However, this combination of `var` and `let` declaration below is a [`SyntaxError`](../global_objects/syntaxerror) due to `var` being hoisted to the top of the block. This results in an implicit re-declaration of the variable.

    let x = 1;

    {
      var x = 2; // SyntaxError for re-declaration
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-let-and-const-declarations">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-let-and-const-declarations</span></a></td></tr></tbody></table>

`let`

49

48-49

Support outside of [strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode).

41-49

[Strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) is required.

14

12-14

In Edge 12 and 13, `let` within a `for` loop initializer does not create a separate variable for each loop iteration as defined by ES2015. Instead, it behaves as though the loop were wrapped in a scoping block with the `let` immediately before the loop.

44

\["Prior to Firefox 44, `let` is only available to code blocks in HTML wrapped in a `<script type=\"application/javascript;version=1.7\">` block (or higher version) and has different semantics (e.g. no temporal dead zone).", "Prior to Firefox 46, a `TypeError` is thrown on redeclaration instead of a `SyntaxError`.", "Firefox 54 adds support of `let` in workers."\]

11

In Internet Explorer, `let` within a `for` loop initializer does not create a separate variable for each loop iteration as defined by ES2015. Instead, it behaves as though the loop were wrapped in a scoping block with the `let` immediately before the loop.

17

10

49

41-49

[Strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) is required.

49

48-49

Support outside of [strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode).

41-49

[Strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) is required.

44

\["Prior to Firefox 44, `let` is only available to code blocks in HTML wrapped in a `<script type=\"application/javascript;version=1.7\">` block (or higher version) and has different semantics (e.g. no temporal dead zone).", "Prior to Firefox 46, a `TypeError` is thrown on redeclaration instead of a `SyntaxError`.", "Firefox 54 adds support of `let` in workers."\]

18

10

5.0

4.0-5.0

[Strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) is required.

## See also

-   [`var`](var)
-   [`const`](const)
-   [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
-   [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
-   [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
-   [StackOverflow: What is the Temporal Dead Zone](https://stackoverflow.com/a/33198850/1125029)?
-   [StackOverflow: What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let</a>
