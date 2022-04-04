# Function Context Cheatsheet

## Types of Invocation

-   Applies to only **named** and **unnamed** functions
-   **Doesn't matter** for fat arrow functions

### Function-style invocation

-   Context of the function will be global context **UNLESS** binded

### Method-style invocation

-   Context of the function will be the object which the function is called on **UNLESS** binded

```js
const obj = {
    name: 'Example Object',
    unnamedFunc: function () {
        console.log(this.name);
    }
};

// Method-style invocation
obj.unnamedFunc(); // 'Example Object'

// Function-style invocation
const unnamedFunc = obj.unnamedFunc;
unnamedFunc(); // Global context
```

## Types of Functions

### Named Function

-   explicit `return` keyword required
-   curly braces `{}` around function body
-   **NOT** saved to a variable
-   parameters must be surrounded by parentheses `()`
-   context is defined by how it's invoked or called
    -   function-style: global context
    -   method-style: context is object that function is being called on
-   calling `bind` on the function will return a function binded to the context of the `bind` argument

---

```js
function namedFunc(params) {
    return 'named function';
}
```

```js
// bindedNamedFunc will have the context of obj
const bindedNamedFunc = namedFunc.bind(obj);
```

### Unnamed Function

-   explicit `return` keyword required
-   curly braces `{}` around function body
-   **MUST** be saved to a variable
-   parameters must be surrounded by parentheses `()`
-   context is defined by how it's invoked or called
    -   function-style: global context
    -   method-style: context is object that function is being called on
-   calling `bind` on the function will return a function binded to the context of the `bind` argument

```js
const unnamedFunc = function (params) {
    return 'unnamed function';
};
```

```js
// bindedUnnamedFunc will have the context of obj
const bindedUnnamedFunc = unnamedFunc.bind(obj);
```

### Explicit Fat Arrow Function

-   explicit `return` keyword required
-   curly braces `{}` around function body
-   **MUST** be saved to a variable
-   parameters must be surrounded by parentheses `()` **IF more than one parameter**
-   takes the context of where it's defined
-   **CANNOT** be binded using `bind`

```js
const explicitFatArrow = (params) => {
    return 'explicit fat arrow function';
};
```

### Implicit Fat Arrow Function

-   **NO** `return` keyword
-   function body can only consist of what is being returned
-   Optional parentheses `()` around function body

> NOTE: Parentheses needs to be used if returning an object `ex: ({ key: value })`

-   **MUST** be saved to a variable
-   parameters must be surrounded by parentheses `()` **IF more than one parameter**
-   takes the context of where it's defined
-   **CANNOT** be binded using `bind`

```js
const implicitFatArrow = (params) => 'implicit fat arrow function';
```

```js
const implicitFatArrow = (params) => 'implicit fat arrow function';
```

```js
const implicitFatArrow = (params) => ({
    function: 'implicit fat arrow'
});
```

## Bind

-   `bind` accepts multiple arguments
-   first argument is the context that you want to bind the function to
-   any arguments that come afterwards will be passed in when the bound function is called **BEFORE** the call time arguments
