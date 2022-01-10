# const

Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.

## Syntax

    const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];

`nameN`  
The constant's name, which can be any legal [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier).

`valueN`  
The constant's value. This can be any legal [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions), including a function expression.

The [Destructuring Assignment](../operators/destructuring_assignment) syntax can also be used to declare variables.

    const { bar } = foo; // where foo = { bar:10, baz:12 };
    /* This creates a constant with the name 'bar', which has a value of 10 */

## Description

This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do **not** become properties of the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object, unlike [`var`](var) variables.

An initializer for a constant is required. You must specify its value in the same statement in which it's declared. (This makes sense, given that it can't be changed later.)

The `const` creates a read-only reference to a value. It does **not** mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

All the considerations about the "[temporal dead zone](let#temporal_dead_zone_tdz)" apply to both [`let`](let) and `const`.

A constant cannot share its name with a function or a variable in the same scope.

## Examples

### Basic const usage

Constants can be declared with uppercase or lowercase, but a common convention is to use all-uppercase letters.

    // define MY_FAV as a constant and give it the value 7
    const MY_FAV = 7;

    // this will throw an error - Uncaught TypeError: Assignment to constant variable.
    MY_FAV = 20;

    // MY_FAV is 7
    console.log('my favorite number is: ' + MY_FAV);

    // trying to redeclare a constant throws an error
    // Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
    const MY_FAV = 20;

    // the name MY_FAV is reserved for constant above, so this will fail too
    var MY_FAV = 20;

    // this throws an error too
    let MY_FAV = 20;

### Block scoping

It's important to note the nature of block scoping.

    if (MY_FAV === 7) {
      // this is fine and creates a block scoped MY_FAV variable
      // (works equally well with let to declare a block scoped non const variable)
      let MY_FAV = 20;

      // MY_FAV is now 20
      console.log('my favorite number is ' + MY_FAV);

      // this gets hoisted into the global context and throws an error
      var MY_FAV = 20;
    }

    // MY_FAV is still 7
    console.log('my favorite number is ' + MY_FAV);

### const needs to be initialized

    // throws an error
    // Uncaught SyntaxError: Missing initializer in const declaration

    const FOO;

### const in objects and arrays

const also works on objects and arrays.

    const MY_OBJECT = {'key': 'value'};

    // Attempting to overwrite the object throws an error
    // Uncaught TypeError: Assignment to constant variable.
    MY_OBJECT = {'OTHER_KEY': 'value'};

    // However, object keys are not protected,
    // so the following statement is executed without problem
    MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

    // The same applies to arrays
    const MY_ARRAY = [];
    // It's possible to push items into the array
    MY_ARRAY.push('A'); // ["A"]
    // However, assigning a new array to the variable throws an error
    // Uncaught TypeError: Assignment to constant variable.
    MY_ARRAY = ['B'];

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-let-and-const-declarations">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-let-and-const-declarations</span></a></td></tr></tbody></table>

`const`

21

12

36

\["Prior to Firefox 13, `const` is implemented, but re-assignment is not failing.", "Prior to Firefox 46, a `TypeError` was thrown on redeclaration instead of a `SyntaxError`."\]

11

9

5.1

≤37

25

36

\["Prior to Firefox 13, `const` is implemented, but re-assignment is not failing.", "Prior to Firefox 46, a `TypeError` was thrown on redeclaration instead of a `SyntaxError`."\]

10.1

6

1.5

## See also

-   [`var`](var)
-   [`let`](let)
-   [Constants in the JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#constants)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const</a>
