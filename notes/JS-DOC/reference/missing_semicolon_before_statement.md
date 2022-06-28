# SyntaxError: missing ; before statement

The JavaScript exception "missing ; before statement" occurs when there is a semicolon (`;`) missing somewhere and can't be added by [automatic semicolon insertion (ASI)](../lexical_grammar#automatic_semicolon_insertion). You need to provide a semicolon, so that JavaScript can parse the source code correctly.

## Message

    SyntaxError: Expected ';' (Edge)
    SyntaxError: missing ; before statement (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror).

## What went wrong?

There is a semicolon (`;`) missing somewhere. [JavaScript statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) must be terminated with semicolons. Some of them are affected by [automatic semicolon insertion (ASI)](../lexical_grammar#automatic_semicolon_insertion), but in this case you need to provide a semicolon, so that JavaScript can parse the source code correctly.

However, oftentimes, this error is only a consequence of another error, like not escaping strings properly, or using `var` wrongly. You might also have too many parenthesis somewhere. Carefully check the syntax when this error is thrown.

## Examples

### Unescaped strings

This error can occur easily when not escaping strings properly and the JavaScript engine is expecting the end of your string already. For example:

    var foo = 'Tom's bar';
    // SyntaxError: missing ; before statement

You can use double quotes, or escape the apostrophe:

    var foo = "Tom's bar";
    var foo = 'Tom\'s bar';

### Declaring properties with var

You **cannot** declare properties of an object or array with a `var` declaration.

    var obj = {};
    var obj.foo = 'hi'; // SyntaxError missing ; before statement

    var array = [];
    var array[0] = 'there'; // SyntaxError missing ; before statement

Instead, omit the `var` keyword:

    var obj = {};
    obj.foo = 'hi';

    var array = [];
    array[0] = 'there';

### Bad keywords

If you come from another programming language, it is also common to use keywords that don't mean the same or have no meaning at all in javaScript:

    def print(info){
      console.log(info);
    }; // SyntaxError missing ; before statement

Instead, use `function` instead of `def`:

    function print(info){
      console.log(info);
    };

## See also

-   [Automatic semicolon insertion (ASI)](../lexical_grammar#automatic_semicolon_insertion)
-   [JavaScript statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement</a>
