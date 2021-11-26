# Symbol.unscopables

The `Symbol.unscopables` well-known symbol is used to specify an object value of whose own and inherited property names are excluded from the `with` environment bindings of the associated object.

## Description

The `@@unscopables` symbol (`Symbol.unscopables`) can be defined on any object to exclude property names from being exposed as lexical variables in `with` environment bindings. Note that if using [Strict mode](../../strict_mode), `with` statements are not available and will likely also not need this symbol.

Setting a property to `true` in an `unscopables` object will make it _unscopable_ and therefore it won't appear in lexical scope variables. Setting a property to `false` will make it `scopable` and thus it will appear in lexical scope variables.

Property attributes of `Symbol.unscopables`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Scoping in with statements

The following code works fine in ES5 and below. However, in ECMAScript 2015 and later, the [`Array.prototype.keys()`](../array/keys) method was introduced. That means that inside `with` environment "keys" would now be the method and not the variable. That's when the `unscopable`s symbol was introduced. A built-in `unscopables` setting is implemented as [`Array.prototype[@@unscopables]`](../array/@@unscopables) to prevent that some of the Array methods are being scoped into the `with` statement.

    var keys = [];

    with (Array.prototype) {
      keys.push('something');
    }

    Object.keys(Array.prototype[Symbol.unscopables]);
    // ["copyWithin", "entries", "fill", "find", "findIndex",
    //  "includes", "keys", "values"]

### Unscopables in objects

You can also set `unscopables` for your own objects.

    var obj = {
      foo: 1,
      bar: 2
    };

    obj[Symbol.unscopables] = {
      foo: false,
      bar: true
    };

    with (obj) {
      console.log(foo); // 1
      console.log(bar); // ReferenceError: bar is not defined
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.unscopables">ECMAScript Language Specification (ECMAScript)<br />
<span class="small">#sec-symbol.unscopables</span></a></td></tr></tbody></table>

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

`unscopables`

45

12

48

No

32

9

45

45

48

32

9

5.0

## See also

-   [`Array.prototype[@@unscopables]`](../array/@@unscopables)
-   `with` statement (not available in [Strict mode](../../strict_mode))

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables</a>
