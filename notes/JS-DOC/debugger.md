# debugger

The `debugger` invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

## Syntax

    debugger;

## Examples

### Using the debugger statement

The following example shows code where a `debugger` statement has been inserted, to invoke a debugger (if one exists) when the function is called.

    function potentiallyBuggyCode() {
        debugger;
        // do potentially buggy stuff to examine, step through, etc.
    }

When the debugger is invoked, execution is paused at the `debugger` statement. It is like a breakpoint in the script source.

[<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger/screen_shot_2014-02-07_at_9.14.35_am.png" alt="Paused at a debugger statement." width="2730" height="1446" />](https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-debugger-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-debugger-statement</span></a></td></tr></tbody></table>

`debugger`

5

12

1

4

10

5

1

18

4

10.1

4.2

1.0

## See also

-   [Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Mozilla/Debugging/Debugging_JavaScript)
-   [The Debugger in the Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools/Debugger)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger</a>
