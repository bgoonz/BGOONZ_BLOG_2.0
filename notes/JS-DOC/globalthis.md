# globalThis

The global `globalThis` property contains the global `this` value, which is akin to the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object).

Property attributes of `globalThis`

Writable

yes

Enumerable

no

Configurable

yes

## Description

Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window), [`self`](https://developer.mozilla.org/en-US/docs/Web/API/Window/self), or [`frames`](https://developer.mozilla.org/en-US/docs/Web/API/Window/frames) - but in [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker) only `self` will work. In Node.js none of these work, and you must instead use `global`.  
The `this` keyword could be used inside functions running in non–strict mode, but `this` will be `undefined` in Modules and inside functions running in strict mode. You can also use `Function('return this')()`, but environments that disable [`eval()`](eval), like [CSP](https://developer.mozilla.org/en-US/docs/Glossary/CSP) in browsers, prevent use of [`Function`](function) in this way.

The `globalThis` property provides a standard way of accessing the global `this` value (and hence the global object itself) across environments. Unlike similar properties such as `window` and `self`, it's guaranteed to work in window and non-window contexts. In this way, you can access the global object in a consistent manner without having to know which environment the code is being run in. To help you remember the name, just remember that in global scope the `this` value is `globalThis`.

### HTML and the WindowProxy

In many engines `globalThis` will be a reference to the actual global object, but in web browsers, due to iframe and cross-window security considerations, it references a [`Proxy`](proxy) around the actual global object (which you can't directly access). This distinction is rarely relevant in common usage, but important to be aware of.

### Naming

Several other popular name choices such as `self` and `global` were removed from consideration because of their potential to break compatibility with existing code. See the [language proposal's "naming" document](https://github.com/tc39/proposal-global/blob/master/NAMING.md) for more details.

## Examples

### Search for the global across environments

Prior to `globalThis`, the only reliable cross-platform way to get the global object for an environment was `Function('return this')()`. However, this causes [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) violations in some settings, so [es6-shim](https://github.com/paulmillr/es6-shim) uses a check like this, for example:

    var getGlobal = function () {
      if (typeof self !== 'undefined') { return self; }
      if (typeof window !== 'undefined') { return window; }
      if (typeof global !== 'undefined') { return global; }
      throw new Error('unable to locate global object');
    };

    var globals = getGlobal();

    if (typeof globals.setTimeout !== 'function') {
      // no setTimeout in this environment!
    }

With `globalThis` available, the additional search for the global across environments is not necessary anymore:

    if (typeof globalThis.setTimeout !== 'function') {
      // no setTimeout in this environment!
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-globalthis">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-globalthis</span></a></td></tr></tbody></table>

`globalThis`

71

79

65

No

58

12.1

71

71

65

50

12.2

10.0

## See also

-   [`this`](../operators/this)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis</a>
