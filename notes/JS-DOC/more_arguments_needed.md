# TypeError: More arguments needed

The JavaScript exception "more arguments needed" occurs when there is an error with how a function is called. More arguments need to be provided.

## Message

    TypeError: argument is not an Object and is not null (Edge)
    TypeError: Object.create requires at least 1 argument, but only 0 were passed
    TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
    TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed

## Error type

[`TypeError`](../global_objects/typeerror).

## What went wrong?

There is an error with how a function is called. More arguments need to be provided.

## Examples

### Required arguments not provided

The [`Object.create()`](../global_objects/object/create) method requires at least one argument and the [`Object.setPrototypeOf()`](../global_objects/object/setprototypeof) method requires at least two arguments:

    var obj = Object.create();
    // TypeError: Object.create requires at least 1 argument, but only 0 were passed

    var obj = Object.setPrototypeOf({});
    // TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed

You can fix this by setting [`null`](../global_objects/null) as the prototype, for example:

    var obj = Object.create(null);

    var obj = Object.setPrototypeOf({}, null);

## See also

-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/More_arguments_needed" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/More_arguments_needed</a>
