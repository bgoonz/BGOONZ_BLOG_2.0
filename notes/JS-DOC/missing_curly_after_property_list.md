# SyntaxError: missing } after property list

The JavaScript exception "missing } after property list" occurs when there is a mistake in the [object initializer](../operators/object_initializer) syntax somewhere. Might be in fact a missing curly bracket, but could also be a missing comma.

## Message

    SyntaxError: Expected '}' (Edge)
    SyntaxError: missing } after property list (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There is a mistake in the [object initializer](../operators/object_initializer) syntax somewhere. Might be in fact a missing curly bracket, but could also be a missing comma, for example. Also check if any closing curly brackets or parenthesis are in the correct order. Indenting or formatting the code a bit nicer might also help you to see through the jungle.

## Examples

### Forgotten comma

Oftentimes, there is a missing comma in your object initializer code:

    var obj = {
      a: 1,
      b: { myProp: 2 }
      c: 3
    };

Correct would be:

    var obj = {
      a: 1,
      b: { myProp: 2 },
      c: 3
    };

## See also

-   [Object initializer](../operators/object_initializer)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list</a>
