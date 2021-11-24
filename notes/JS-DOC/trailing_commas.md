# Trailing commas

**Trailing commas** (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.

JavaScript has allowed trailing commas in array literals since the beginning, and later added them to object literals (ECMAScript 5) and most recently (ECMAScript 2017) to function parameters.

[JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON), however, disallows trailing commas.

## Syntax

    ,

## Examples

### Trailing commas in literals

#### Arrays

JavaScript ignores trailing commas in arrays:

    var arr = [
      1,
      2,
      3,
    ];

    arr; // [1, 2, 3]
    arr.length; // 3

If more than one trailing comma is used, an elision (or hole) is produced. An array with holes is called _sparse_ (a _dense_ array has no holes). When iterating arrays for example with [`Array.prototype.forEach()`](global_objects/array/foreach) or [`Array.prototype.map()`](global_objects/array/map), array holes are skipped.

    var arr = [1, 2, 3,,,];
    arr.length; // 5

#### Objects

Starting with ECMAScript 5, trailing commas in object literals are legal as well:

    var object = {
      foo: "bar",
      baz: "qwerty",
      age: 42,
    };

### Trailing commas in functions

ECMAScript 2017 allows trailing commas in function parameter lists.

#### Parameter definitions

The following function definition pairs are legal and equivalent to each other. Trailing commas don't affect the `length` property of function declarations or their `arguments` object.

    function f(p) {}
    function f(p,) {}

    (p) => {};
    (p,) => {};

The trailing comma also works with [method definitions](functions/method_definitions) for classes or objects:

    class C {
      one(a,) {}
      two(a, b,) {}
    }

    var obj = {
      one(a,) {},
      two(a, b,) {},
    };

#### Function calls

The following function invocation pairs are legal and equivalent to each other.

    f(p);
    f(p,);

    Math.max(10, 20);
    Math.max(10, 20,);

#### Illegal trailing commas

Function parameter definitions or function invocations only containing a comma will throw a [`SyntaxError`](global_objects/syntaxerror). Furthermore, when using a [rest parameters](functions/rest_parameters), trailing commas are not allowed:

    function f(,) {} // SyntaxError: missing formal parameter
    (,) => {};       // SyntaxError: expected expression, got ','
    f(,)             // SyntaxError: expected expression, got ','

    function f(...p,) {} // SyntaxError: parameter after rest parameter
    (...p,) => {}        // SyntaxError: expected closing parenthesis, got ','

### Trailing commas in destructuring

A trailing comma is also allowed on the left-hand side when using [destructuring assignment](operators/destructuring_assignment):

    // array destructuring with trailing comma
    [a, b,] = [1, 2];

    // object destructuring with trailing comma
    var o = {
      p: 42,
      q: true,
    };
    var {p, q,} = o;

Again, when using a rest element, a [`SyntaxError`](global_objects/syntaxerror) will be thrown:

    var [a, ...b,] = [1, 2, 3];
    // SyntaxError: rest element may not have a trailing comma

### Trailing commas in JSON

Trailing commas in objects were only introduced in ECMAScript 5. As JSON is based on JavaScript's syntax prior to ES5, **trailing commas are not allowed in JSON**.

Both lines will throw a `SyntaxError`:

    JSON.parse('[1, 2, 3, 4, ]');
    JSON.parse('{"foo" : 1, }');
    // SyntaxError JSON.parse: unexpected character
    // at line 1 column 14 of the JSON data

Omit the trailing commas to parse the JSON correctly:

    JSON.parse('[1, 2, 3, 4 ]');
    JSON.parse('{"foo" : 1 }');

## Specifications

**No specification found**

No specification data found for `javascript.grammar.trailing_commas`.  
[Check for problems with this page](#on-github) or contribute a missing `spec_url` to [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). Also make sure the specification is included in [w3c/browser-specs](https://github.com/w3c/browser-specs).

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`Trailing_commas`

1

12

1

9

9.5

1

1

18

4

10.1

1

1.0

`trailing_commas_in_functions`

58

14

52

No

45

10

58

58

52

43

10

7.0

`trailing_commas_in_object_literals`

1

12

1

9

9.5

3

1

18

4

10.1

1

1.0

## See also

-   Initial ECMAScript proposal: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) by Jeff Morrison

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas</a>
