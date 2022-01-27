# arguments.callee

The `arguments.callee` property contains the currently executing function.

## Description

`callee` is a property of the `arguments` object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").

**Warning:** The 5th edition of ECMAScript (ES5) forbids use of `arguments.callee()` in [strict mode](../../strict_mode). Avoid using `arguments.callee()` by either giving function expressions a name or use a function declaration where a function must call itself.

### Why was `arguments.callee` removed from ES5 strict mode?

(adapted from [a Stack Overflow answer by olliej](https://stackoverflow.com/a/235760/578288))

Early versions of JavaScript did not allow named function expressions, and for this reason you could not make a recursive function expression.

For example, this syntax worked:

    function factorial (n) {
        return !(n > 1) ? 1 : factorial(n - 1) * n;
    }

    [1, 2, 3, 4, 5].map(factorial);

but:

    [1, 2, 3, 4, 5].map(function(n) {
        return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
    });

did not. To get around this `arguments.callee` was added so you could do

    [1, 2, 3, 4, 5].map(function(n) {
        return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
    });

However, this was actually a really bad solution as this (in conjunction with other `arguments`, `callee`, and `caller` issues) make inlining and tail recursion impossible in the general case (you can achieve it in select cases through tracing, etc., but even the best code is suboptimal due to checks that would not otherwise be necessary.) The other major issue is that the recursive call will get a different `this` value, e.g.:

    var global = this;

    var sillyFunction = function(recursed) {
        if (!recursed) { return arguments.callee(true); }
        if (this !== global) {
            alert('This is: ' + this);
        } else {
            alert('This is the global');
        }
    }

    sillyFunction();

ECMAScript 3 resolved these issues by allowing named function expressions. For example:

    [1, 2, 3, 4, 5].map(function factorial(n) {
        return !(n > 1) ? 1 : factorial(n - 1)*n;
    });

This has numerous benefits:

-   the function can be called like any other from inside your code
-   it does not create a variable in the outer scope ([except for IE 8 and below](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
-   it has better performance than accessing the arguments object

Another feature that was deprecated was `arguments.callee.caller`, or more specifically `Function.caller`. Why is this? Well, at any point in time you can find the deepest caller of any function on the stack, and as I said above looking at the call stack has one single major effect: it makes a large number of optimizations impossible, or much more difficult. For example, if you cannot guarantee that a function `f` will not call an unknown function, it is not possible to inline `f`. Basically it means that any call site that may have been trivially inlinable accumulates a large number of guards:

    function f(a, b, c, d, e) { return a ? b * c : d * e; }

If the JavaScript interpreter cannot guarantee that all the provided arguments are numbers at the point that the call is made, it needs to either insert checks for all the arguments before the inlined code, or it cannot inline the function. Now in this particular case a smart interpreter should be able to rearrange the checks to be more optimal and not check any values that would not be used. However in many cases that's just not possible and therefore it becomes impossible to inline.

## Examples

### Using `arguments.callee` in an anonymous recursive function

A recursive function must be able to refer to itself. Typically, a function refers to itself by its name. However, an anonymous function (which can be created by a [function expression](../../operators/function) or the [`Function` constructor](../../global_objects/function)) does not have a name. Therefore if there is no accessible variable referring to it, the only way the function can refer to itself is by `arguments.callee`.

The following example defines a function, which, in turn, defines and returns a factorial function. This example isn't very practical, and there are nearly no cases where the same result cannot be achieved with [named function expressions](../../operators/function).

    function create() {
       return function(n) {
          if (n <= 1)
             return 1;
          return n * arguments.callee(n - 1);
       };
    }

    var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)

### A use of `arguments.callee` with no good alternative

However, in a case like the following, there are not alternatives to `arguments.callee`, so its deprecation could be a bug (see [bug 725398](https://bugzilla.mozilla.org/show_bug.cgi?id=725398)):

    function createPerson(sIdentity) {
        var oPerson = new Function('alert(arguments.callee.identity);');
        oPerson.identity = sIdentity;
        return oPerson;
    }

    var john = createPerson('John Smith');

    john();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-arguments-exotic-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-arguments-exotic-objects</span></a></td></tr></tbody></table>

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

## See also

-   [`Function`](../../global_objects/function)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee</a>
