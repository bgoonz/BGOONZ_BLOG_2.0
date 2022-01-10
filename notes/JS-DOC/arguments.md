# The arguments object

<span class="summary">`arguments` is an `Array`-like object accessible inside [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) that contains the values of the arguments passed to that function.</span>

## Description

**Note:** If you're writing ES6 compatible code, then [rest parameters](rest_parameters) should be preferred.

**Note:** "Array-like” means that `arguments` has a [`length`](arguments/length) property and properties indexed from zero, but it doesn't have [`Array`](../global_objects/array)'s built-in methods like [`forEach()`](../global_objects/array/foreach) or [`map()`](../global_objects/array/map). See [§Description](#description) for details.

The `arguments` object is a local variable available within all non-[arrow](arrow_functions) functions. You can refer to a function's arguments inside that function by using its `arguments` object. It has entries for each argument the function was called with, with the first entry's index at `0`.

For example, if a function is passed 3 arguments, you can access them as follows:

    arguments[0] // first argument
    arguments[1] // second argument
    arguments[2] // third argument

Each argument can also be set or reassigned:

    arguments[1] = 'new value';

The `arguments` object is not an [`Array`](../global_objects/array). It is similar, but lacks all `Array` properties except [`length`](../global_objects/array/length). For example, it does not have the [`pop()`](../global_objects/array/pop) method.

However, it can be converted to a real `Array`:

    var args = Array.prototype.slice.call(arguments);
    // Using an array literal is shorter than above but allocates an empty array
    var args = [].slice.call(arguments);

As you can do with any Array-like object, you can use ES2015's [`Array.from()`](../global_objects/array/from) method or [spread syntax](../operators/spread_syntax) to convert `arguments` to a real Array:

    let args = Array.from(arguments);
    // or
    let args = [...arguments];

The `arguments` object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as [`Math.min()`](../global_objects/math/min). This example function accepts any number of string arguments and returns the longest one:

    function longestString() {
      var longest = '';
      for (var i=0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
          longest = arguments[i];
        }
      }
      return longest;
    }

You can use [`arguments.length`](arguments/length) to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's [`length`](../global_objects/function/length) property.

### Using typeof with arguments

The [`typeof`](../operators/typeof) operator returns `'object'` when used with `arguments`

    console.log(typeof arguments); // 'object'

The type of individual arguments can be determined by indexing `arguments`:

    console.log(typeof arguments[0]); // returns the type of the first argument

## Properties

[`arguments.callee`](arguments/callee)  
Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.

[`arguments.length`](arguments/length)  
The number of arguments that were passed to the function.

[`arguments[@@iterator]`](arguments/@@iterator)  
Returns a new [Array iterator](../global_objects/array/@@iterator) object that contains the values for each index in `arguments`.

## Examples

### Defining a function that concatenates several strings

This example defines a function that concatenates several strings. The function's only formal argument is a string containing the characters that separate the items to concatenate.

    function myConcat(separator) {
      let args = Array.prototype.slice.call(arguments, 1);
      return args.join(separator);
    }

You can pass as many arguments as you like to this function. It returns a string list using each argument in the list:

    // returns "red, orange, blue"
    myConcat(', ', 'red', 'orange', 'blue');

    // returns "elephant; giraffe; lion; cheetah"
    myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

    // returns "sage. basil. oregano. pepper. parsley"
    myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

### Defining a function that creates HTML lists

This example defines a function that creates a string containing HTML for a list. The only formal argument for the function is a string that is "`u`" if the list is to be [unordered (bulleted)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul), or "`o`" if the list is to be [ordered (numbered)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol). The function is defined as follows:

    function list(type) {
      var html = '<' + type + 'l><li>';
      var args = Array.prototype.slice.call(arguments, 1);
      html += args.join('</li><li>');
      html += '</li></' + type + 'l>'; // end list
      return html;
    }

You can pass any number of arguments to this function, and it adds each argument as a list item to a list of the type indicated. For example:

    let listHTML = list('u', 'One', 'Two', 'Three');

    /* listHTML is:
    "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
    */

### Rest, default, and destructured parameters

The `arguments` object can be used in conjunction with [rest](rest_parameters), [default](default_parameters), and [destructured](../operators/destructuring_assignment) parameters.

    function foo(...args) {
      return args;
    }
    foo(1, 2, 3); // [1, 2, 3]

While the presence of rest, default, or destructured parameters does not alter [the behavior of the `arguments` object in strict mode code](../strict_mode#making_eval_and_arguments_simpler), there are subtle differences for non-strict code.

In strict-mode code, the `arguments` object behaves the same whether or not a function is passed rest, default, or destructured parameters. That is, assigning new values to variables in the body of the function will not affect the `arguments` object. Nor will assigning new variables to the `arguments` object affect the value of variables.

**Note:** You cannot write a `"use strict";` directive in the body of a function definition that accepts rest, default, or destructured parameters. Doing so will throw [a syntax error](../errors/strict_non_simple_params).

Non-strict functions that are passed only simple parameters (that is, not rest, default, or restructured parameters) will sync the value of variables new values in the body of the function with the `arguments` object, and vice versa:

    function func(a) {
      arguments[0] = 99; // updating arguments[0] also updates a
      console.log(a);
    }
    func(10); // 99

And also:

    function func(a) {
      a = 99; // updating a also updates arguments[0]
      console.log(arguments[0]);
    }
    func(10); // 99

Conversely, non-strict functions that **are** passed rest, default, or destructured parameters **will not** sync new values assigned to argument variables in the function body with the `arguments` object. Instead, the `arguments` object in non-strict functions with complex parameters **will always** reflect the values passed to the function when the function was called (this is the same behavior as exhibited by all strict-mode functions, regardless of the type of variables they are passed):

    function func(a = 55) {
      arguments[0] = 99; // updating arguments[0] does not also update a
      console.log(a);
    }
    func(10); // 10

And also:

    function func(a = 55) {
      a = 99; // updating a does not also update arguments[0]
      console.log(arguments[0]);
    }
    func(10); // 10

And also:

    // An untracked default parameter
    function func(a = 55) {
      console.log(arguments[0]);
    }
    func(); // undefined

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-arguments-exotic-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-arguments-exotic-objects</span></a></td></tr></tbody></table>

`arguments`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

`callee`

1

12

1

6

4

1

1

18

4

10.1

1

1.0

`length`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

`@@iterator`

52

12

46

No

39

9

52

52

46

41

9

6.0

## See also

-   [`Function`](../global_objects/function)
-   [Rest parameters](rest_parameters)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments</a>
