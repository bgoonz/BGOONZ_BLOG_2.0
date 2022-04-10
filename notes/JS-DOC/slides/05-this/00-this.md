What is `this`?
===============

[**`this`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) is a special "variable” which implicitly exists in every function. It can be thought of being similar to Java’s `this` and Python’s `self`, but it’s much more flexible than that.

**Important**: The value of `this` is determined when the function is **called**, not when the function is *defined*.

Given the following function:

------------------------------------------------------------------------


    function foo() {
        console.log(this);
    }

these would be the values of `this` if called in those specific ways:

    // "normal call": global object / window in browsers
    //                undefined in strict mode
    foo();

    // as object "method": to the object
    var obj = { method: foo };
    obj.method();

    // via .call / .apply: To the value passed as first argument
    foo.call(bar);
