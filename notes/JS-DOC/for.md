# for

The **for statement** creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a [block statement](block)) to be executed in the loop.

## Syntax

    for ([initialization]; [condition]; [final-expression])
       statement

`initialization`  
An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for` loop is in. Variables declared with `let` are local to the statement.

The result of this expression is discarded.

`condition`  
An expression to be evaluated before each loop iteration. If this expression evaluates to true, `statement` is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the `for` construct.

`final-expression`  
An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`. Generally used to update or increment the counter variable.

`statement`  
A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a [block](block) statement (`{ ... }`) to group those statements. To execute no statement within the loop, use an [empty](empty) statement (`;`).

## Examples

### Using for

The following `for` statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than nine, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

    for (let i = 0; i < 9; i++) {
       console.log(i);
       // more statements
    }

### Optional for expressions

All three expressions in the head of the `for` loop are optional.

For example, in the `initialization` block it is not required to initialize variables:

    var i = 0;
    for (; i < 9; i++) {
        console.log(i);
        // more statements
    }

Like the `initialization` block, the `condition` block is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

    for (let i = 0;; i++) {
       console.log(i);
       if (i > 3) break;
       // more statements
    }

You can also omit all three blocks. Again, make sure to use a [`break`](break) statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

    var i = 0;

    for (;;) {
      if (i > 3) break;
      console.log(i);
      i++;
    }

### Using for without a statement

The following `for` cycle calculates the offset position of a node in the `final-expression` section, and therefore it does not require the use of a `statement` section, a semicolon is used instead.

    function showOffsetPos(sId) {

      var nLeft = 0, nTop = 0;

      for (

        var oItNode = document.getElementById(sId); /* initialization */

        oItNode; /* condition */

        nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */

      ); /* semicolon */

      console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');

    }

    /* Example call: */

    showOffsetPos('content');

    // Output:
    // "Offset position of "content" element:
    // left: 0px;
    // top: 153px;"

**Note:** This is one of the few cases in JavaScript where **the semicolon is mandatory**. Indeed, without the semicolon the line that follows the cycle declaration will be considered a statement.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-for-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-for-statement</span></a></td></tr></tbody></table>

`for`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [empty statement](empty)
-   [`break`](break)
-   [`continue`](continue)
-   [`while`](while)
-   [`do...while`](do...while)
-   [`for...in`](for...in)
-   [`for...of`](for...of)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for</a>
