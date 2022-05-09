# SyntaxError: missing \] after element list

The JavaScript exception "missing \] after element list" occurs when there is an error with the array initializer syntax somewhere. Likely there is a closing bracket ("`]`") or a comma ("`,`") missing.

## Message

    SyntaxError: missing ] after element list

## Error type

[`SyntaxError`](../global_objects/syntaxerror).

## What went wrong?

There is an error with the array initializer syntax somewhere. Likely there is a closing bracket ("`]`") or a comma ("`,`") missing.

## Examples

### Incomplete array initializer

    var list = [1, 2,

    var instruments = [
      'Ukulele',
      'Guitar',
      'Piano'
    };

    var data = [{foo: 'bar'} {bar: 'foo'}];

Correct would be:

    var list = [1, 2];

    var instruments = [
     'Ukulele',
     'Guitar',
     'Piano'
    ];

    var data = [{foo: 'bar'}, {bar: 'foo'}];

## See also

-   [`Array`](../global_objects/array)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list</a>
