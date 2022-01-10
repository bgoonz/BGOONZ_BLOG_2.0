# Symbol.toStringTag

The `Symbol.toStringTag` well-known symbol is a string valued property that is used in the creation of the default string description of an object. It is accessed internally by the [`Object.prototype.toString()`](../object/tostring) method.

Property attributes of `Symbol.toStringTag`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Default tags

    Object.prototype.toString.call('foo');     // "[object String]"
    Object.prototype.toString.call([1, 2]);    // "[object Array]"
    Object.prototype.toString.call(3);         // "[object Number]"
    Object.prototype.toString.call(true);      // "[object Boolean]"
    Object.prototype.toString.call(undefined); // "[object Undefined]"
    Object.prototype.toString.call(null);      // "[object Null]"
    // ... and more

### Built-in toStringTag symbols

    Object.prototype.toString.call(new Map());       // "[object Map]"
    Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
    Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
    // ... and more

### Custom classes default to object tag

When creating your own class, JavaScript defaults to the "Object" tag:

    class ValidatorClass {}

    Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"

### Custom tag with toStringTag

Now, with the help of `toStringTag`, you are able to set your own custom tag:

    class ValidatorClass {
      get [Symbol.toStringTag]() {
        return 'Validator';
      }
    }

    Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"

### toStringTag available on all DOM prototype objects

Due to a [WebIDL spec change](https://github.com/heycam/webidl/pull/357) in mid-2020, browsers are adding a `Symbol.toStringTag` property to all DOM prototype objects. For example, to acccess the `Symbol.toStringTag` property on [`HTMLButtonElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement):

    let test = document.createElement('button');
    test.toString(); // Returns [object HTMLButtonElement]
    test[Symbol.toStringTag];  // Returns HTMLButtonElement

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.tostringtag">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.tostringtag</span></a></td></tr></tbody></table>

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

`toStringTag`

49

15

51

No

36

10

49

49

51

36

10

5.0

`dom-objects`

50

79

78

No

37

14

50

50

79

37

14

5.0

## See also

-   [`Object.prototype.toString()`](../object/tostring)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag</a>
