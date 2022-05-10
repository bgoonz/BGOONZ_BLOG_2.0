# SyntaxError: "x" is a reserved identifier

The JavaScript exception "_variable_ is a reserved identifier" occurs when [reserved keywords](../lexical_grammar#keywords) are used as identifiers.

## Message

    SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
    SyntaxError: "x" is a reserved identifier (Firefox)
    SyntaxError: Unexpected reserved word (Chrome)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

[Reserved keywords](../lexical_grammar#keywords) will throw in if they are used as identifiers. These are reserved in strict mode and sloppy mode:

-   `enum`

The following are only reserved when they are found in strict mode code:

-   `implements`
-   `interface`
-   [`let`](../statements/let)
-   `package`
-   `private`
-   `protected`
-   `public`
-   `static`

## Examples

### Strict and non-strict reserved keywords

The `enum` identifier is generally reserved.

    var enum = { RED: 0, GREEN: 1, BLUE: 2 };
    // SyntaxError: enum is a reserved identifier

In strict mode code, more identifiers are reserved.

    "use strict";
    var package = ["potatoes", "rice", "fries"];
    // SyntaxError: package is a reserved identifier

You'll need to rename these variables.

    var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
    var list = ["potatoes", "rice", "fries"];

### Update older browsers

If you are using an older browser that does not yet implement `let` or `class`, for example, you should update to a more recent browser version that does support these new language features.

    "use strict";
    class DocArchiver {}

    // SyntaxError: class is a reserved identifier
    // (throws in older browsers only, e.g. Firefox 44 and older)

## See also

-   [Good variable names](https://wiki.c2.com/?GoodVariableNames)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reserved_identifier" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reserved_identifier</a>
