---
title: Closures In Javascript
template: docs
excerpt: What is a closure? Can you give a useful example of one?
---

<!--StartFragment-->

# Closures In Javascript

[\#javascript](https://dev.to/t/javascript)

### [](https://dev.to/bgoonz/closures-in-javascript-1moc#what-is-a-closure-can-you-give-a-useful-example-of-one)What is a closure? Can you give a useful example of one?

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#answer)Answer

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

-   Variables declared in its own scope
-   Variables declared in the scope of the parent function
-   Variables declared in the global scope

In JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.

In addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#good-to-hear)Good to hear

-   Closures are useful because they let you associate data with a function that operates on that data.
-   A closure can substitute an object with only a single method.
-   Closures can be used to emulate private properties and methods.

##### [](https://dev.to/bgoonz/closures-in-javascript-1moc#additional-links)Additional links

-   [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
-   [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
-   [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

A closure is the combination of a function bundled together (enclosed) with **references to its surrounding state (the lexical environment)**. In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

**A closure is a function** that retains access to variables of the context it was created in even after said function call has returned.

```

```

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

```

```

## [](https://dev.to/bgoonz/closures-in-javascript-1moc#using-closures-examples)Using Closures (Examples)

Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#in-javascript-closures-are-the-primary-mechanism-used-to-enable-data-privacy-when-you-use-closures-for-data-privacy-the-enclosed-variables-are-only-in-scope-within-the-containing-outer-function-you-cant-get-at-the-data-from-an-outside-scope-except-through-the-objects-privileged-methods-in-javascript-any-exposed-method-defined-within-the-closure-scope-is-privileged-for-example)In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can't get at the data from an outside scope except through the object's privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged. For example:

```

```

In the example above, the `getPrivileged()` method is defined inside the scope of `getSecret()`, which gives it access to any variables from `getSecret()`, and makes it a privileged method. In this case, the parameter, `secret`.

### [](https://dev.to/bgoonz/closures-in-javascript-1moc#another-example-of-closure)Another example of closure

```

```

### [](https://dev.to/bgoonz/closures-in-javascript-1moc#so-whats-going-on-above)So whats going on above

First, when a function runs, a new function Lexical Environment is created automatically. That's a general rule for all functions. That Lexical Environment is used to store local variables and parameters of the call.

During the function call we have two Lexical Environments: the inner one (for the function call) and the outer one (global):

The inner Lexical Environment corresponds to the current execution of that function.

When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.

If a variable is not found anywhere, that's an error in strict mode. Without use strict, an assignment to an undefined variable creates a new global variable, for backwards compatibility.

### [](https://dev.to/bgoonz/closures-in-javascript-1moc#some-overall-key-points)Some overall key points

### [](https://dev.to/bgoonz/closures-in-javascript-1moc#closure)Closure

-   A closure is a function that remembers its outer variables and can access them.
-   Combination of a function and the lexical environment within which that function was declared
-   The `closure` is the function object itself.
-   Accessing variables outside of the immediate lexical scope creates a closure.
-   Happens when we have a nested functions.
-   JavaScript engines also may optimize, discard variables that are unused to save memory.
-   A `Lexical Environment` object lives in the `heap` as long as there is a function which may use it. And when there are none, it is cleared.
-   All functions in JavaScript are closures.
-   The internal property `[[Environment]]` of a function, refers to the outer lexical environment

### [Question: Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
](https://dev.to/bgoonz/closures-in-javascript-1moc#question-look-at-the-code-below-you-have-a-for-loop-if-you-have-settimeout-inside-it-if-log-the-loop-counter-inside-settimeout-what-will-be-logged)
```

```

**Answer**: The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.

**Explanation**: The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. So, the loop finishes and before setTimeout get the chance to execute. However, anonymous functions keep a reference to i by creating a closure. Since, the loop is already finished, the value i has been set to 10. When setTimeout use the value of i by reference, it gets the value of i as 10. Hence, you see 10 ten times.

**Solution**: You can fix it by avoiding closure. Just create a IIFE (Immediately Invoked Function Expression), it will create its own scope and you can pass i to the function. In that case i will be a local variable (will not refer to i in the closure) and value of the i in every loop will be preserved.

```

```

**Alternative Solution**: Look at the code below and use your brain (if any).

```

```

Lets look at this function

```

```

Since the variables X is functions, we can **execute** them. In JavaScript, a function can be executed by adding **()** after the function name, such as **X()**.

When we execute X(), we are essentially executing the `inner` function.

If I run < console.log(X()) > the output will be below

30\
undefined

So the closure function **inner**() is getting the value of **b = 10** from its enclosing **outer()** function ever after **outer()** function has returned.

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#lets-see-stepbystep-what-happens-when-the-outer-function-is-first-invoked)Let's see step-by-step what happens when the outer() function is first invoked:

-   1. Variable b is created, its scope is limited to the outer() function, and its value is set to 10.
-   2. The next line is a function declaration, so nothing to execute.
-   3. On the last line, return inner looks for a variable called inner, finds that this variable inner is actually a function, and so returns the entire body of the function inner.
-   4. Note that the return statement does not execute the inner function — a function is executed only when followed by () — , but rather the return statement returns the entire body of the function.
-   5. The contents returned by the return statement are stored in X.

Thus, X will store the following:

function inner() {\
var a=20;\
console.log(a+b);\
}

This can be easily verified by adding the following to the JavaScript code:

```

```

-   6. Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
-   7. This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist.

The lifespan of a variable defined inside of a function is the lifespan of the function execution.

What this means is that in **console.log(a+b)**, the variable **b** exists only during the execution of the the **outer()** function. Once the outer function has finished execution, the variable b no longer exists.

This is the most important point to realize. The variables inside the functions only come into existence when the function is running, and cease to exist once the functions completes execution.

##### [](https://dev.to/bgoonz/closures-in-javascript-1moc#now-see-the-main-point-of-this-exercise-that-how-a-closure-function-retains-its-enclosing-functions-variable-values-even-after-the-enclosing-function-has-returned)Now see the main point of this exercise - that how a closure function retains its enclosing function's variable values, even after the enclosing function has returned.

-   A. When we execute X(), we are essentially executing the `inner` function.
-   B. If I run < console.log(X()) > the output will be below

```

```

-   C. So the closure function **inner**() is getting the value of **b = 10** from its enclosing **outer()** function ever after **outer()** function has returned.

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#let-us-examine-stepbystep-what-happens-when-x-is-executed-the-first-time)Let us examine step-by-step what happens when X() is executed the first time:

-   1. Variable a is created, and its value is set to 20.
-   2. JavaScript now tries to execute a + b. Here is where things get interesting. JavaScript knows that a exists since it just created it. However, variable b no longer exists. Since b is part of the outer function, b would only exist while the outer() function is in execution. Since the outer() function finished execution long before we invoked X(), any variables within the scope of the outer function cease to exist, and hence variable b no longer exists.

#### [](https://dev.to/bgoonz/closures-in-javascript-1moc#closures)Closures

-   A. The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function's variables.
-   B. In our example, the inner function had preserved the value of b=10 when the outer() function was executed, and continued to preserve (closure) it.
-   C. It now refers to its scope chain and notices that it does have the value of variable b within its scope chain, since it had enclosed the value of b within a closure at the point when the outer function had executed.
-   D. Thus, JavaScript knows a=20 and b=10, and can calculate a+b.

So the inner function has three scope chains:

access to its own scope — variable a\
access to the outer function's variables — variable b, which it enclosed\
access to any global variables that may be defined

##### [](https://dev.to/bgoonz/closures-in-javascript-1moc#further-reading)Further Reading

<https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4>

# [](https://dev.to/bgoonz/closures-in-javascript-1moc#xamples)#xamples:

```

```

<!--EndFragment-->
