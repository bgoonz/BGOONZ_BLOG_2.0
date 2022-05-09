# SyntaxError: missing : after property id

The JavaScript exception "missing : after property id" occurs when objects are created using the [object initializer](../operators/object_initializer) syntax. A colon (`:`) separates keys and values for the object's properties. Somehow, this colon is missing or misplaced.

## Message

    SyntaxError: Expected ':' (Edge)
    SyntaxError: missing : after property id (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

When creating objects with the [object initializer](../operators/object_initializer) syntax, a colon (`:`) separates keys and values for the object's properties.

    var obj = { propertyKey: 'value' };

## Examples

### Colons vs. equal signs

This code fails, as the equal sign can't be used this way in this object initializer syntax.

    var obj = { propertyKey = 'value' };
    // SyntaxError: missing : after property id

Correct would be to use a colon, or to use square brackets to assign a new property after the object has been created already.

    var obj = { propertyKey: 'value' };

    // or alternatively

    var obj = { };
    obj['propertyKey'] = 'value';

### Empty properties

You can't create empty properties like this:

    var obj = { propertyKey; };
    // SyntaxError: missing : after property id

If you need to define a property without a value, you might use [`null`](../global_objects/null) as a value.

    var obj = { propertyKey: null };

### Computed properties

If you create a property key from an expression, you need to use square brackets. Otherwise the property name can't be computed:

    var obj = { 'b'+'ar': 'foo' };
    // SyntaxError: missing : after property id

Put the expression in brackets `[]`:

    var obj = { ['b'+'ar']: 'foo' };

## See also

-   [Object initializer](../operators/object_initializer)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_colon_after_property_id" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_colon_after_property_id</a>
