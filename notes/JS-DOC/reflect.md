# Reflect

**Reflect** is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of [proxy handlers](proxy/proxy). `Reflect` is not a function object, so it's not constructible.

## Description

Unlike most global objects, `Reflect` is not a constructor. You cannot use it with a [`new` operator](../operators/new) or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (just like the [`Math`](math) object).

The `Reflect` object provides the following static functions which have the same names as the [proxy handler methods](proxy/proxy).

Some of these methods are also the same as corresponding methods on [`Object`](object), although they do have [some subtle differences](reflect/comparing_reflect_and_object_methods) between them.

## Static methods

[`Reflect.apply(target, thisArgument, argumentsList)`](reflect/apply)  
Calls a `target` function with arguments as specified by the `argumentsList` parameter. See also [`Function.prototype.apply()`](function/apply).

[`Reflect.construct(target, argumentsList[, newTarget])`](reflect/construct)  
The [`new` operator](../operators/new) as a function. Equivalent to calling `new target(...argumentsList)`. Also provides the option to specify a different prototype.

[`Reflect.defineProperty(target, propertyKey, attributes)`](reflect/defineproperty)  
Similar to [`Object.defineProperty()`](object/defineproperty). Returns a [`Boolean`](boolean) that is `true` if the property was successfully defined.

[`Reflect.deleteProperty(target, propertyKey)`](reflect/deleteproperty)  
The [`delete` operator](../operators/delete) as a function. Equivalent to calling `delete target[propertyKey]`.

[`Reflect.get(target, propertyKey[, receiver])`](reflect/get)  
Returns the value of the property. Works like getting a property from an object (`target[propertyKey]`) as a function.

[`Reflect.getOwnPropertyDescriptor(target, propertyKey)`](reflect/getownpropertydescriptor)  
Similar to [`Object.getOwnPropertyDescriptor()`](object/getownpropertydescriptor). Returns a property descriptor of the given property if it exists on the object, [`undefined`](undefined) otherwise.

[`Reflect.getPrototypeOf(target)`](reflect/getprototypeof)  
Same as [`Object.getPrototypeOf()`](object/getprototypeof).

[`Reflect.has(target, propertyKey)`](reflect/has)  
Returns a [`Boolean`](boolean) indicating whether the target has the property. Either as own or inherited. Works like the [`in` operator](../operators/in) as a function.

[`Reflect.isExtensible(target)`](reflect/isextensible)  
Same as [`Object.isExtensible()`](object/isextensible). Returns a [`Boolean`](boolean) that is `true` if the target is extensible.

[`Reflect.ownKeys(target)`](reflect/ownkeys)  
Returns an array of the target object's own (not inherited) property keys.

[`Reflect.preventExtensions(target)`](reflect/preventextensions)  
Similar to [`Object.preventExtensions()`](object/preventextensions). Returns a [`Boolean`](boolean) that is `true` if the update was successful.

[`Reflect.set(target, propertyKey, value[, receiver])`](reflect/set)  
A function that assigns values to properties. Returns a [`Boolean`](boolean) that is `true` if the update was successful.

[`Reflect.setPrototypeOf(target, prototype)`](reflect/setprototypeof)  
A function that sets the prototype of an object. Returns a [`Boolean`](boolean) that is `true` if the update was successful.

## Examples

### Detecting whether an object contains certain properties

    const duck = {
      name: 'Maurice',
      color: 'white',
      greeting: function() {
        console.log(`Quaaaack! My name is ${this.name}`);
      }
    }

    Reflect.has(duck, 'color');
    // true
    Reflect.has(duck, 'haircut');
    // false

### Returning the object's own keys

    Reflect.ownKeys(duck);
    // [ "name", "color", "greeting" ]

### Adding a new property to the object

    Reflect.set(duck, 'eyes', 'black');
    // returns "true" if successful
    // "duck" now contains the property "eyes: 'black'"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-reflect-object">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-reflect-object</span></a></td></tr></tbody></table>

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

`Reflect`

49

12

42

No

36

10

49

49

42

36

10

5.0

`apply`

49

12

42

No

36

10

49

49

42

36

10

5.0

`construct`

49

12

42

No

36

10

49

49

42

36

10

5.0

`defineProperty`

49

12

42

No

36

10

49

49

42

36

10

5.0

`deleteProperty`

49

12

42

No

36

10

49

49

42

36

10

5.0

`get`

49

12

42

No

36

10

49

49

42

36

10

5.0

`getOwnPropertyDescriptor`

49

12

42

No

36

10

49

49

42

36

10

5.0

`getPrototypeOf`

49

12

42

No

36

10

49

49

42

36

10

5.0

`has`

49

12

42

No

36

10

49

49

42

36

10

5.0

`isExtensible`

49

12

42

No

36

10

49

49

42

36

10

5.0

`ownKeys`

49

12

42

No

36

10

49

49

42

36

10

5.0

`preventExtensions`

49

12

42

No

36

10

49

49

42

36

10

5.0

`set`

49

12

42

No

36

10

49

49

42

36

10

5.0

`setPrototypeOf`

49

12

42

No

36

10

49

49

42

36

10

5.0

## See also

-   The [`Proxy`](proxy) global object.
-   The [`handler`](proxy/proxy) object.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect</a>
