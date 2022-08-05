# TypeError: invalid Array.prototype.sort argument

The JavaScript exception "invalid Array.prototype.sort argument" occurs when the argument of [`Array.prototype.sort()`](../global_objects/array/sort) isn't either [`undefined`](../global_objects/undefined) or a function which compares its operands.

## Message

    TypeError: argument is not a function object (Edge)
    TypeError: invalid Array.prototype.sort argument (Firefox)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The argument of [`Array.prototype.sort()`](../global_objects/array/sort) is expected to be either [`undefined`](../global_objects/undefined) or a function which compares its operands.

## Examples

### Invalid cases

    [1, 3, 2].sort(5);  // TypeError

    var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
    [1, 3, 2].sort(cmp[this.key] || 'asc');  // TypeError

### Valid cases

    [1, 3, 2].sort();   // [1, 2, 3]

    var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
    [1, 3, 2].sort(cmp[this.key || 'asc']); // [1, 2, 3]

## See also

-   [`Array.prototype.sort()`](../global_objects/array/sort)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Array_sort_argument" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Array_sort_argument</a>
