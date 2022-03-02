# Function.displayName

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The `function.displayName` property returns the display name of the function.

## Examples

### Setting a displayName

It is usually preferred by consoles and profilers over [`func.name`](name) to display the name of a function.

By entering the following in a console, it should display as something like "`function My Function()`":

    var a = function() {};
    a.displayName = 'My Function';

    a; // "function My Function()"

When defined, the `displayName` property returns the display name of a function:

    function doSomething() {}

    console.log(doSomething.displayName); // "undefined"

    var popup = function(content) { console.log(content); };

    popup.displayName = 'Show Popup';

    console.log(popup.displayName); // "Show Popup"

### Defining a displayName in function expressions

You can define a function with a display name in a [function expression](../../functions):

    var object = {
      someMethod: function() {}
    };

    object.someMethod.displayName = 'someMethod';

    console.log(object.someMethod.displayName); // logs "someMethod"

    try { someMethod } catch(e) { console.log(e); }
    // ReferenceError: someMethod is not defined

### Changing displayName dynamically

You can dynamically change the `displayName` of a function:

    var object = {
      // anonymous
      someMethod: function(value) {
        arguments.callee.displayName = 'someMethod (' + value + ')';
      }
    };

    console.log(object.someMethod.displayName); // "undefined"

    object.someMethod('123')
    console.log(object.someMethod.displayName); // "someMethod (123)"

## Specifications

<span class="pl-s">Not part of any standard.</span>

`displayName`

No

No

13

No

No

No

No

No

14

No

No

No

## See also

-   [`Function.name`](name)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName</a>
