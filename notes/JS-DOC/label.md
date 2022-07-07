# label

The **labeled statement** can be used with [`break`](break) or [`continue`](continue) statements. It is prefixing a statement with an identifier which you can refer to.

## Syntax

    label :
      statement

`label`  
Any JavaScript identifier that is not a reserved word.

`statement`  
A JavaScript statement. `break` can be used with any labeled statement, and `continue` can be used with looping labeled statements.

## Description

You can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

Note that JavaScript has _no_ `goto` statement, you can only use labels with `break` or `continue`.

In [strict mode](../strict_mode) code, you can't use "`let`" as a label name. It will throw a [`SyntaxError`](../global_objects/syntaxerror) (let is a reserved identifier).

## Examples

### Using a labeled continue with for loops

    var i, j;

    loop1:
    for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
       loop2:
       for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
          if (i === 1 && j === 1) {
             continue loop1;
          }
          console.log('i = ' + i + ', j = ' + j);
       }
    }

    // Output is:
    //   "i = 0, j = 0"
    //   "i = 0, j = 1"
    //   "i = 0, j = 2"
    //   "i = 1, j = 0"
    //   "i = 2, j = 0"
    //   "i = 2, j = 1"
    //   "i = 2, j = 2"
    // Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"

### Using a labeled continue statement

Given an array of items and an array of tests, this example counts the number of items that passes all the tests.

    var itemsPassed = 0;
    var i, j;

    top:
    for (i = 0; i < items.length; i++) {
      for (j = 0; j < tests.length; j++) {
        if (!tests[j].pass(items[i])) {
          continue top;
        }
      }

      itemsPassed++;
    }

### Using a labeled break with for loops

    var i, j;

    loop1:
    for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
       loop2:
       for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
          if (i === 1 && j === 1) {
             break loop1;
          }
          console.log('i = ' + i + ', j = ' + j);
       }
    }

    // Output is:
    //   "i = 0, j = 0"
    //   "i = 0, j = 1"
    //   "i = 0, j = 2"
    //   "i = 1, j = 0"
    // Notice the difference with the previous continue example

### Using a labeled break statement

Given an array of items and an array of tests, this example determines whether all items pass all tests.

    var allPass = true;
    var i, j;

    top:
    for (i = 0; i < items.length; i++) {
      for (j = 0; j < tests.length; j++) {
        if (!tests[j].pass(items[i])) {
          allPass = false;
          break top;
        }
      }
    }

### Using a labeled block with break

You can use labels within simple blocks, but only `break` statements can make use of non-loop labels.

    foo: {
      console.log('face');
      break foo;
      console.log('this will not be executed');
    }
    console.log('swap');

    // this will log:

    // "face"
    // "swap"

### Labeled function declarations

Starting with ECMAScript 2015, labeled function declarations are now standardized for non-strict code in the [web compatibility annex of the specification](https://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations).

    L: function F() {}

In [strict mode](../strict_mode) code, however, this will throw a [`SyntaxError`](../global_objects/syntaxerror):

    'use strict';
    L: function F() {}
    // SyntaxError: functions cannot be labelled

[Generator functions](function*) can neither be labeled in strict code, nor in non-strict code:

    L: function* F() {}
    // SyntaxError: generator functions cannot be labelled

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-labelled-statements">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Labelled statement' in that specification.</span></a></td></tr></tbody></table>

`label`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [`break`](break)
-   [`continue`](continue)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label</a>
