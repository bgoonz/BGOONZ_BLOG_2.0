# typeof

The `typeof` operator returns a string indicating the type of the unevaluated operand.

## Syntax

The `typeof` operator is followed by its operand:

    typeof operand
    typeof(operand)

### Parameters

`operand`  
An expression representing the object or [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) whose type is to be returned.

## Description

The following table summarizes the possible return values of `typeof`. For more information about types and primitives, see also the [JavaScript data structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) page.

<table><thead><tr class="header"><th>Type</th><th>Result</th></tr></thead><tbody><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/undefined">Undefined</a></td><td><code>"undefined"</code></td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Null">Null</a></td><td><code>"object"</code> (see <a href="#typeof_null">below</a>)</td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Boolean">Boolean</a></td><td><code>"boolean"</code></td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Number">Number</a></td><td><code>"number"</code></td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/BigInt">BigInt</a> (new in ECMAScript 2020)</td><td><code>"bigint"</code></td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/String">String</a></td><td><code>"string"</code></td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Symbol">Symbol</a> (new in ECMAScript 2015)</td><td><code>"symbol"</code></td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Function">Function</a> object (implements [[Call]] in ECMA-262 terms)</td><td><code>"function"</code></td></tr><tr class="odd"><td>Any other object</td><td><code>"object"</code></td></tr></tbody></table>

**Note:** ECMAScript 2019 and older permitted implementations to have `typeof` return any implementation-defined string value for non-callable non-standard exotic objects.

The only known browser to have actually taken advantage of this is old Internet Explorer (see [below](#ie-specific_notes)).

## Examples

### Basic usage

    // Numbers
    typeof 37 === 'number';
    typeof 3.14 === 'number';
    typeof(42) === 'number';
    typeof Math.LN2 === 'number';
    typeof Infinity === 'number';
    typeof NaN === 'number'; // Despite being "Not-A-Number"
    typeof Number('1') === 'number';      // Number tries to parse things into numbers
    typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

    typeof 42n === 'bigint';

    // Strings
    typeof '' === 'string';
    typeof 'bla' === 'string';
    typeof `template literal` === 'string';
    typeof '1' === 'string'; // note that a number within a string is still typeof string
    typeof (typeof 1) === 'string'; // typeof always returns a string
    typeof String(1) === 'string'; // String converts anything into a string, safer than toString

    // Booleans
    typeof true === 'boolean';
    typeof false === 'boolean';
    typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
    typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

    // Symbols
    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'

    // Undefined
    typeof undefined === 'undefined';
    typeof declaredButUndefinedVariable === 'undefined';
    typeof undeclaredVariable === 'undefined';

    // Objects
    typeof {a: 1} === 'object';

    // use Array.isArray or Object.prototype.toString.call
    // to differentiate regular objects from arrays
    typeof [1, 2, 4] === 'object';

    typeof new Date() === 'object';
    typeof /regex/ === 'object'; // See Regular expressions section for historical results

    // The following are confusing, dangerous, and wasteful. Avoid them.
    typeof new Boolean(true) === 'object';
    typeof new Number(1) === 'object';
    typeof new String('abc') === 'object';

    // Functions
    typeof function() {} === 'function';
    typeof class C {} === 'function';
    typeof Math.sin === 'function';

### `typeof null`

    // This stands since the beginning of JavaScript
    typeof null === 'object';

In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was `0`. `null` was represented as the NULL pointer (`0x00` in most platforms). Consequently, `null` had `0` as type tag, hence the `typeof` return value `"object"`. ([reference](https://www.2ality.com/2013/10/typeof-null.html))

A fix was proposed for ECMAScript (via an opt-in), but [was rejected](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). It would have resulted in `typeof null === 'null'`.

### Using `new` operator

    // All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
    let str = new String('String');
    let num = new Number(100);

    typeof str; // It will return 'object'
    typeof num; // It will return 'object'

    let func = new Function();

    typeof func; // It will return 'function'

### Need for parentheses in Syntax

    // Parentheses can be used for determining the data type of expressions.
    let iData = 99;

    typeof iData + ' Wisen'; // 'number Wisen'
    typeof (iData + ' Wisen'); // 'string'

### Regular expressions

Callable regular expressions were a non-standard addition in some browsers.

    typeof /s/ === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1
    typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1

### Errors

Before ECMAScript 2015, `typeof` was always guaranteed to return a string for any operand it was supplied with. Even with undeclared identifiers, `typeof` will return `'undefined'`. Using `typeof` could never generate an error.

But with the addition of block-scoped [`let`](../statements/let) and [`Statements/const`](../statements/const) using `typeof` on `let` and `const` variables (or using `typeof` on a `class`) in a block before they are declared will throw a [`ReferenceError`](../global_objects/referenceerror). Block scoped variables are in a "[temporal dead zone](../statements/let#the_temporal_dead_zone_and_typeof)" from the start of the block until the initialization is processed, during which, it will throw an error if accessed.

    typeof undeclaredVariable === 'undefined';

    typeof newLetVariable; // ReferenceError
    typeof newConstVariable; // ReferenceError
    typeof newClass; // ReferenceError

    let newLetVariable;
    const newConstVariable = 'hello';
    class newClass{};

### Exceptions

All current browsers expose a non-standard host object [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) with type `undefined`.

    typeof document.all === 'undefined';

Although the specification allows custom type tags for non-standard exotic objects, it requires those type tags to be different from the predefined ones. The case of `document.all` having type `'undefined'` is classified in the web standards as a "willful violation" of the original ECMA JavaScript standard.

### Real-world usage

`typeof` is very useful, but it's not as versatile as might be required. For example, `typeof([])` , is `'object'`, as well as `typeof(new Date())`, `typeof(/abc/)`, etc.

For greater specificity in checking types, a `typeof` wrapper for usage in production-level code would be as follows (provided `obj` exists):

      function type(obj, fullClass) {

        // get toPrototypeString() of obj (handles all types)
        // Early JS environments return '[object Object]' for null, so it's best to directly check for it.
        if (fullClass) {
            return (obj === null) ? '[object Null]' : Object.prototype.toString.call(obj);
        }
        if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion

        var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
        if (deepType === 'generatorfunction') { return 'function' }

        // Prevent overspecificity (for example, [object HTMLDivElement], etc).
        // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
        // String.prototype.match is universally supported.

        return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
           (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
      }

For checking non-existent variables that would otherwise throw a [`ReferenceError`](../global_objects/referenceerror), use `typeof nonExistentVar === 'undefined'`.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-typeof-operator">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'The typeof Operator' in that specification.</span></a></td></tr></tbody></table>

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

`typeof`

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

### IE-specific notes

On IE 6, 7, and 8 a lot of host objects are objects and not functions. For example:

    typeof alert === 'object'

Some non-standard IE properties return other values ([tc39/ecma262\#1440 (comment)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

    typeof window.external.AddSearchProvider === "unknown";
    typeof window.external.IsSearchProviderInstalled === "unknown";

## See also

-   [`instanceof`](instanceof)
-   [`document.all` willful violation of the standard](https://github.com/tc39/ecma262/issues/668)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof</a>
