# break

The `break` terminates the current loop, [`switch`](switch), or [label](label) statement and transfers program control to the statement following the terminated statement.

## Syntax

    break [label];

`label` <span class="badge inline optional">Optional</span>  
Identifier associated with the label of the statement. If the statement is not a loop or [`switch`](switch), this is required.

## Description

The `break` statement includes an optional label that allows the program to break out of a labeled statement. The `break` statement needs to be nested within the referenced label. The labeled statement can be any [block](block) statement; it does not have to be preceded by a loop statement.

A `break` statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop, switch, or label statement that the `break` statement is intended to break out of.

## Examples

### break in while loop

The following function has a `break` statement that terminates the [`while`](while) loop when `i` is 3, and then returns the value 3 \* `x`.

    function testBreak(x) {
      var i = 0;

      while (i < 6) {
        if (i == 3) {
          break;
        }
        i += 1;
      }

      return i * x;
    }

### break in switch statements

The following code has a `break` statement that terminates the [`switch`](switch) statement when a case is matched and the corresponding code has ran

    const food = "sushi";

    switch (food) {
      case "sushi":
        console.log("Sushi is originally from Japan.");
        break;
      case "pizza":
        console.log("Pizza is originally from Italy.");
        break;
      default:
        console.log("I have never heard of that dish.");
        break;
    }

### break in labeled blocks

The following code uses `break` statements with labeled blocks. A `break` statement must be nested within any label it references. Notice that `inner_block` is nested within `outer_block`.

    outer_block: {
      inner_block: {
        console.log('1');
        break outer_block; // breaks out of both inner_block and outer_block
        console.log(':-('); // skipped
      }
      console.log('2'); // skipped
    }

### break in labeled blocks that throw

The following code also uses `break` statements with labeled blocks, but generates a `SyntaxError` because its `break` statement is within `block_1` but references `block_2`. A `break` statement must always be nested within any label it references.

    block_1: {
      console.log('1');
      break block_2; // SyntaxError: label not found
    }

    block_2: {
      console.log('2');
    }

### break within functions

`SyntaxError`s are also generated in the following code examples which use `break` statements within functions that are nested within a loop, or labeled block that the `break` statements are intended to break out of.

    function testBreak(x) {
      var i = 0;

      while (i < 6) {
        if (i == 3) {
          (function() {
            break;
          })();
        }
        i += 1;
      }

    return i * x;
    }

    testBreak(1); // SyntaxError: Illegal break statement

    block_1: {
      console.log('1');
      ( function() {
        break block_1; // SyntaxError: Undefined label 'block_1'
      })();
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-break-statement">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Break statement' in that specification.</span></a></td></tr></tbody></table>

`break`

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

-   [`continue`](continue)
-   [label](label)
-   [`switch`](switch)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break</a>
