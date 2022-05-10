# Warning: JavaScript 1.6's for-each-in loops are deprecated

The JavaScript warning "JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead" occurs when a <span class="page-not-created">`for each (variable in obj)`</span> statement is used.

## Message

    Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead

## Error type

Warning

## What went wrong?

JavaScript 1.6's <span class="page-not-created">`for each (variable in obj)`</span> statement is deprecated, and will be removed in the near future.

## Examples

### Object iteration

<span class="page-not-created">`for each...in`</span> has been used to iterate over the specified object values.

#### Deprecated syntax

    var object = { a: 10, b: 20 };

    for each (var x in object) {
      console.log(x);        // 10
                             // 20
    }

#### Alternative standard syntax

You can now use the standard [`for...in`](../statements/for...in) loop to iterate over specified object keys, and get each value inside the loop:

    var object = { a: 10, b: 20 };

    for (var key in object) {
      var x = object[key];
      console.log(x);        // 10
                             // 20
    }

Or, using [`for...of`](../statements/for...of) (ES2015) and [`Object.values`](../global_objects/object/values) (ES2017), you can get an array of the specified object values and iterate over the array like this:

    var object = { a: 10, b: 20 };

    for (var x of Object.values(object)) {
      console.log(x);        // 10
                             // 20
    }

### Array iteration

<span class="page-not-created">`for each...in`</span> has been used to iterate over specified array elements.

#### Deprecated syntax

    var array = [10, 20, 30];

    for each (var x in array) {
      console.log(x);        // 10
                             // 20
                             // 30
    }

#### Alternative standard syntax

This is now possible with [`for...of`](../statements/for...of) (ES2015) loops as well.

    var array = [10, 20, 30];

    for (var x of array) {
      console.log(x);        // 10
                             // 20
                             // 30
    }

### Iterating over a null-able array

<span class="page-not-created">`for each...in`</span> does nothing if the specified value is `null` or `undefined`, but [`for...of`](../statements/for...of) will throw an exception in these cases.

#### Deprecated syntax

    function func(array) {
      for each (var x in array) {
        console.log(x);
      }
    }
    func([10, 20]);        // 10
                           // 20
    func(null);            // prints nothing
    func(undefined);       // prints nothing

#### Alternative standard syntax

To rewrite <span class="page-not-created">`for each...in`</span> statements so that values can be `null` or `undefined` with [`for...of`](../statements/for...of) as well, you need to guard around [`for...of`](../statements/for...of).

    function func(array) {
      if (array) {
        for (var x of array) {
          console.log(x);
        }
      }
    }
    func([10, 20]);        // 10
                           // 20
    func(null);            // prints nothing
    func(undefined);       // prints nothing

### Iterating over an object's key-value pair

#### Deprecated syntax

There's a deprecated idiom to iterate over the specified object's key-value pairs using <span class="page-not-created">`for each...in`</span> and the deprecated <span class="page-not-created">`Iterator`</span> object.

    var object = { a: 10, b: 20 };

    for each (var [key, value] in Iterator(object)) {
      console.log(key, value);  // "a", 10
                                // "b", 20
    }

#### Alternative standard syntax

You can now use the standard [`for...in`](../statements/for...in) loop to iterate over specified object keys, and get each value inside the loop:

    var object = { a: 10, b: 20 };

    for (var key in object) {
      var value = object[key];
      console.log(key, value);  // "a", 10
                                // "b", 20
    }

Or, using [`for...of`](../statements/for...of) (ES2015) and [`Object.entries`](../global_objects/object/entries) (ES2017), you can get an array of the specified object values and iterate over the array like this:

    var object = { a: 10, b: 20 };

    for (var [key, value] of Object.entries(object)) {
      console.log(key, value);  // "a", 10
                                // "b", 20
    }

## See also

-   [`for...of`](../statements/for...of)
-   [`Object.values`](../global_objects/object/values)
-   [`Object.entries`](../global_objects/object/entries)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated</a>
