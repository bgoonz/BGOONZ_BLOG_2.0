# Object.prototype.\_\_proto\_\_

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

**Warning:** Changing the `[[Prototype]]` of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in **_every_** browser and JavaScript engine. The effects on the performance of altering inheritance are subtle and far-flung, and are not limited to the time spent in `obj.__proto__ = ...` statements, but may extend to **_any_** code that has access to **_any_** object whose `[[Prototype]]` has been altered. If you care about performance you should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the desired `[[Prototype]]` using [`Object.create()`](create).

**Warning:** While `Object.prototype.__proto__` is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, use [`Object.getPrototypeOf()`](getprototypeof) instead.

The `__proto__` property of [`Object.prototype`](../object) is an accessor property (a getter function and a setter function) that exposes the internal `[[Prototype]]` (either an object or [`null`](../null)) of the object through which it is accessed.

The use of `__proto__` is controversial and discouraged. It was never originally included in the ECMAScript language spec, but modern browsers implemented it anyway. Only recently was the `__proto__` property standardized by the ECMAScript 2015 specification for compatibility with web browsers, so it will be supported into the future. It is deprecated in favor of [`Object.getPrototypeOf`](getprototypeof)/[`Reflect.getPrototypeOf`](../reflect/getprototypeof) and [`Object.setPrototypeOf`](setprototypeof)/[`Reflect.setPrototypeOf`](../reflect/setprototypeof) (though still, setting the `[[Prototype]]` of an object is a slow operation that should be avoided if performance is a concern).

The `__proto__` property can also be used in an object literal definition to set the object `[[Prototype]]` on creation, as an alternative to [`Object.create()`](create). See: [object initializer / literal syntax](../../operators/object_initializer).

## Description

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is [`Object.prototype`](../object). For objects created using array literals, this value is <span class="page-not-created">`Array.prototype`</span>. For functions, this value is [`Function.prototype`](../function). For objects created using `new fun`, where `fun` is one of the built-in constructor functions provided by JavaScript ([`Array`](../array), [`Boolean`](../boolean), [`Date`](../date), [`Number`](../number), [`Object`](../object), [`String`](../string), and so on — including new constructors added as JavaScript evolves), this value is always `fun.prototype`. For objects created using `new fun`, where `fun` is a function defined in a script, this value is the value of `fun.prototype`. (That is, if the constructor didn't return an other object explicitly, or the `fun.prototype` has been reassigned since the instance was created.)

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The object must be extensible according to [`Object.isExtensible()`](isextensible): if it is not, a [`TypeError`](../typeerror) is thrown. The value provided must be an object or [`null`](../null). Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

The `__proto__` property is a simple accessor property on [`Object.prototype`](../object) consisting of a getter and setter function. A property access for `__proto__` that eventually consults [`Object.prototype`](../object) will find this property, but an access that does not consult [`Object.prototype`](../object) will not. If some other `__proto__` property is found before [`Object.prototype`](../object) is consulted, that property will hide the one found on [`Object.prototype`](../object).

## Examples

### Using \_\_proto\_\_

    function Circle() {}
    const shape = {};
    const circle = new Circle();

    // Set the object prototype.
    // DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
    shape.__proto__ = circle;

    // Get the object prototype
    console.log(shape.__proto__ === Circle);  // false

    const ShapeA = function () {};
    const ShapeB = {
        a() {
            console.log('aaa');
        }
    };
    console.log(ShapeA.prototype.__proto__ = ShapeB);

    const shapea = new ShapeA();
    shapea.a(); // aaa
    console.log(ShapeA.prototype === shapea.__proto__); // true

    // or
    const ShapeC = function () {};
    const ShapeD = {
        a() {
            console.log('a');
        }
    };

    const shapeC = new ShapeC();
    shapeC.__proto__ = ShapeD;
    shapeC.a(); // a
    console.log(ShapeC.prototype === shapeC.__proto__); // false

    // or
    function Test() {}
    Test.prototype.myname = function () {
        console.log('myname');
    };

    const a = new Test();
    console.log(a.__proto__ === Test.prototype); // true
    a.myname(); // myname

    // or
    const fn = function () {};
    fn.prototype.myname = function () {
        console.log('myname');
    };

    var obj = {
        __proto__: fn.prototype
    };

    obj.myname(); // myname

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-additional-properties-of-the-object.prototype-object">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-additional-properties-of-the-object.prototype-object</span></a></td></tr></tbody></table>

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

`proto`

1

12

1

11

10.5

3

1

18

4

11

1

1.0

## See also

-   [`Object.prototype.isPrototypeOf()`](isprototypeof)
-   [`Object.getPrototypeOf()`](getprototypeof)
-   [`Object.setPrototypeOf()`](setprototypeof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto</a>
