# return

The `return` statement ends function execution and specifies a value to be returned to the function caller.

## Syntax

    return [expression];

`expression`  
The expression whose value is to be returned. If omitted, `undefined` is returned instead.

## Description

When a `return` statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller. For example, the following function returns the square of its argument, `x`, where `x` is a number.

    function square(x) {
       return x * x;
    }
    var demo = square(3);
    // demo will equal 9

If the value is omitted, `undefined` is returned instead.

The following return statements all break the function execution:

    return;
    return true;
    return false;
    return x;
    return x + y / 3;

### Automatic Semicolon Insertion

The `return` statement is affected by [automatic semicolon insertion (ASI)](../lexical_grammar#automatic_semicolon_insertion). No line terminator is allowed between the `return` keyword and the expression.

    return
    a + b;

is transformed by ASI into:

    return;
    a + b;

The console will warn "unreachable code after return statement".

**Note:** Starting with Firefox 40, a warning is shown in the console if unreachable code is found after a `return` statement.

To avoid this problem (to prevent ASI), you could use parentheses:

    return (
      a + b
    );

## Examples

### Interrupt a function

A function immediately stops at the point where `return` is called.

    function counter() {
      for (var count = 1; ; count++) {  // infinite loop
        console.log(count + 'A'); // until 5
          if (count === 5) {
            return;
          }
          console.log(count + 'B');  // until 4
        }
      console.log(count + 'C');  // never appears
    }

    counter();

    // Output:
    // 1A
    // 1B
    // 2A
    // 2B
    // 3A
    // 3B
    // 4A
    // 4B
    // 5A

### Returning a function

See also the article about [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

    function magic() {
      return function calc(x) { return x * 42; };
    }

    var answer = magic();
    answer(1337); // 56154

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-return-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-return-statement</span></a></td></tr></tbody></table>

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

`return`

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

## See also

-   [Functions](../functions)
-   [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return</a>
