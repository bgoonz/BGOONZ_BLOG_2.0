# SyntaxError: missing variable name

The JavaScript exception "missing variable name" occurs way too often as naming things is so hard. Or maybe a comma is wrong. Check for typos!

## Message

    SyntaxError: missing variable name (Firefox)
    SyntaxError: Unexpected token = (Chrome)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

A variable is missing a name. This is likely due to a syntax error in your code. Probably a comma is wrong somewhere or you struggled with coming up with a name. Totally understandable! Naming things is so hard.

-   Check to ensure the previous lines / declaration does not end with a comma instead of a semi-colon.

## Examples

### Missing a variable name

    var = "foo";

It's tough coming up with good variable names. We all have been there.

    var ohGodWhy = "foo";

### Reserved keywords can't be variable names

There are a few variable names that are [reserved keywords](../lexical_grammar#keywords). You can't use these. Sorry :(

    var debugger = "whoop";
    // SyntaxError: missing variable name

### Declaring multiple variables

Pay special attention to commas when declaring multiple variables. Is there an excess comma? Did you accidentally add commas instead of semicolons?

    var x, y = "foo",
    var x, = "foo"

    var first = document.getElementById('one'),
    var second = document.getElementById('two'),

    // SyntaxError: missing variable name

The fixed version:

    var x, y = "foo";
    var x = "foo";

    var first = document.getElementById('one');
    var second = document.getElementById('two');

### Arrays

[`Array`](../global_objects/array) literals in JavaScript need square brackets around the values. This won't work:

    var arr = 1,2,3,4,5;
    // SyntaxError: missing variable name

This would be correct:

    var arr = [1,2,3,4,5];

## See also

-   [Good variable names](https://wiki.c2.com/?GoodVariableNames)
-   [`var`](../statements/var)
-   [Variable declarations in the JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_variable_name" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_variable_name</a>
