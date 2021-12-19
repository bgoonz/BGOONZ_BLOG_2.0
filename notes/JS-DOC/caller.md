# Function.caller

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `function.caller` property returns the function that invoked the specified function. It returns `null` for strict, async function and generator function callers.

## Description

If the function `f` was invoked by the top level code, the value of `f.caller` is [`null`](../null), otherwise it's the function that called `f`. It's also `null` for strict, async function and generator function callers.

This property replaces the obsolete <span class="page-not-created">`arguments.caller`</span> property of the [`arguments`](../../functions/arguments) object.

The special property `__caller__`, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.

### Notes

Note that in case of recursion, you can't reconstruct the call stack using this property. Consider:

    function f(n) { g(n - 1); }
    function g(n) { if (n > 0) { f(n); } else { stop(); } }
    f(2);

At the moment `stop()` is called the call stack will be:

    f(2) -> g(1) -> f(1) -> g(0) -> stop()

The following is true:

    stop.caller === g && f.caller === g && g.caller === f

so if you tried to get the stack trace in the `stop()` function like this:

    var f = stop;
    var stack = 'Stack trace:';
    while (f) {
      stack += '\n' + f.name;
      f = f.caller;
    }

the loop would never stop.

## Examples

### Checking the value of a function's `caller` property

The following code checks the value a function's `caller` property.

    function myFunc() {
      if (myFunc.caller == null) {
        return 'The function was called from the top!';
      } else {
        return 'This function\'s caller was ' + myFunc.caller;
      }
    }

## Specifications

<span class="pl-s">Not part of any standard.</span>

`caller`

1

12

1

8

9.6

3

1

18

4

10.1

1

1.0

## See also

-   [`Function.name`](name)
-   [`arguments`](../../functions/arguments)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller</a>
