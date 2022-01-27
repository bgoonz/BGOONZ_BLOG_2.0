# do...while

The `do...while` creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

## Syntax

    do
       statement
    while (condition);

`statement`  
A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a [block](block) statement (`{ ... }`) to group those statements.

`condition`  
An expression evaluated after each pass through the loop. If `condition` evaluates to true, the `statement` is re-executed. When `condition` evaluates to false, control passes to the statement following the `do...while`.

## Examples

### Using `do...while`

In the following example, the `do...while` loop iterates at least once and reiterates until `i` is no longer less than 5.

    var result = '';
    var i = 0;
    do {
       i += 1;
       result += i + ' ';
    }
    while (i > 0 && i < 5);
    // Despite i == 0 this will still loop as it starts off without the test

    console.log(result);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-do-while-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-do-while-statement</span></a></td></tr></tbody></table>

`do...while`

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

-   [`while`](while)
-   [`for`](for)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while</a>
