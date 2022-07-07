# continue

The `continue` terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

## Syntax

    continue [label];

`label`  
Identifier associated with the label of the statement.

## Description

In contrast to the [`break`](break) statement, `continue` does not terminate the execution of the loop entirely: instead,

-   In a [`while`](while) loop, it jumps back to the condition.

<!-- -->

-   In a [`for`](for) loop, it jumps to the update expression.

The `continue` statement can include an optional label that allows the program to jump to the next iteration of a labeled loop statement instead of the current loop. In this case, the `continue` statement needs to be nested within this labeled statement.

## Examples

### Using continue with while

The following example shows a [`while`](while) loop that has a `continue` statement that executes when the value of `i` is 3. Thus, `n` takes on the values 1, 3, 7, and 12.

    var i = 0;
    var n = 0;

    while (i < 5) {
      i++;

      if (i === 3) {
        continue;
      }

      n += i;
    }

### Using continue with a label

In the following example, a statement labeled `checkiandj` contains a statement labeled `checkj`. If `continue` is encountered, the program continues at the top of the `checkj` statement. Each time `continue` is encountered, `checkj` reiterates until its condition returns false. When false is returned, the remainder of the `checkiandj` statement is completed.

If `continue` had a label of `checkiandj`, the program would continue at the top of the `checkiandj` statement.

See also [label](label).

    var i = 0;
    var j = 8;

    checkiandj: while (i < 4) {
      console.log('i: ' + i);
      i += 1;

      checkj: while (j > 4) {
        console.log('j: ' + j);
        j -= 1;

        if ((j % 2) == 0)
          continue checkj;
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
    }

Output:

    i: 0

    // start checkj
    j: 8
    7 is odd.
    j: 7
    j: 6
    5 is odd.
    j: 5
    // end checkj

    i = 1
    j = 4

    i: 1
    i = 2
    j = 4

    i: 2
    i = 3
    j = 4

    i: 3
    i = 4
    j = 4

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-continue-statement">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Continue statement' in that specification.</span></a></td></tr></tbody></table>

`continue`

1

12

1

3

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
-   [label](label)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue</a>
