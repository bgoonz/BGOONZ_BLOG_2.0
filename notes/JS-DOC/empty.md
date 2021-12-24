# empty

An **empty statement** is used to provide no statement, although the JavaScript syntax would expect one.

## Syntax

    ;

## Description

The empty statement is a semicolon (`;`) indicating that no statement will be executed, even if JavaScript syntax requires one.

The opposite behavior, where you want multiple statements, but JavaScript only allows a single one, is possible using a [block statement](block), which combines several statements into a single one.

## Examples

### Empty loop body

The empty statement is sometimes used with loop statements. See the following example with an empty loop body:

    let arr = [1, 2, 3];

    // Assign all array values to 0
    for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

    console.log(arr);
    // [0, 0, 0]

### Unintentional usage

It is a good idea to comment _intentional_ use of the empty statement, as it is not really obvious to distinguish from a normal semicolon.

In the following example, the usage is probably not intentional:

    if (condition);       // Caution, this "if" does nothing!
       killTheUniverse()  // So this always gets executed!!!

In the next example, an [`if...else`](if...else) statement without curly braces (`{}`) is used.

If `three` is `true`, nothing will happen, `four` does not matter, and also the `launchRocket()` function in the `else` case will not be executed.

    if (one)
      doOne();
    else if (two)
      doTwo();
    else if (three)
      ; // nothing here
    else if (four)
      doFour();
    else
      launchRocket();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-empty-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-empty-statement</span></a></td></tr></tbody></table>

`Empty`

3

12

1

3

3

5

1

18

4

10.1

4.2

1.0

## See also

-   [`Block statement`](block)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty</a>
