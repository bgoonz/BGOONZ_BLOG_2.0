# Object.prototype.hasOwnProperty()

The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

## Syntax

    hasOwnProperty(prop)

### Parameters

prop  
The [`String`](../string) name or [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) of the property to test.

### Return value

A [`Boolean`](../boolean) indicating whether or not the object has the specified property as own property.

## Description

All descendants of [`Object`](../object) inherit the `hasOwnProperty` method. This method can be used to determine whether an object has the specified property as a direct property of that object; unlike the [`in`](../../operators/in) operator, this method does not check for a property in the object's prototype chain. If an [`Object`](../object) is an [`Array`](../array), `hasOwnProperty` method can check whether an index exists.

## Note

`hasOwnProperty` returns true even if the value of the property is `null` or `undefined`.

    o = new Object();
    o.propOne = null;
    o.hasOwnProperty('propOne');   // returns true
    o.propTwo = undefined;
    o.hasOwnProperty('propTwo');   // returns true

## Examples

### Using hasOwnProperty to test for a property's existence

The following example determines whether the `o` object contains a property named `prop`:

    o = new Object();
    o.hasOwnProperty('prop');   // returns false
    o.prop = 'exists';
    o.hasOwnProperty('prop');   // returns true

### Direct vs. inherited properties

The following example differentiates between direct properties and properties inherited through the prototype chain:

    o = new Object();
    o.prop = 'exists';
    o.hasOwnProperty('prop');             // returns true
    o.hasOwnProperty('toString');         // returns false
    o.hasOwnProperty('hasOwnProperty');   // returns false

### Iterating over the properties of an object

The following example shows how to iterate over the properties of an object without executing on inherited properties. Note that the [`for...in`](../../statements/for...in) loop is already only iterating enumerable items, so one should not assume based on the lack of non-enumerable properties shown in the loop that `hasOwnProperty` itself is confined strictly to enumerable items (as with [`Object.getOwnPropertyNames()`](getownpropertynames)).

    var buz = {
      fog: 'stack'
    };

    for (var name in buz) {
      if (buz.hasOwnProperty(name)) {
        console.log('this is fog (' +
          name + ') for sure. Value: ' + buz[name]);
      }
      else {
        console.log(name); // toString or something else
      }
    }

### Using hasOwnProperty as a property name

JavaScript does not protect the property name `hasOwnProperty`; thus, if the possibility exists that an object might have a property with this name, it is necessary to use an _external_ `hasOwnProperty` to get correct results:

    var foo = {
      hasOwnProperty: function() {
        return false;
      },
      bar: 'Here be dragons'
    };

    foo.hasOwnProperty('bar'); // always returns false

    // Use another Object's hasOwnProperty
    // and call it with 'this' set to foo
    ({}).hasOwnProperty.call(foo, 'bar'); // true

    // It's also possible to use the hasOwnProperty property
    // from the Object prototype for this purpose
    Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

Note that in the last case there are no newly created objects.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.prototype.hasownproperty">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.prototype.hasownproperty</span></a></td></tr></tbody></table>

`hasOwnProperty`

1

12

1

5.5

5

3

1

18

4

10.1

1

1.0

## See also

-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
-   [`Object.getOwnPropertyNames()`](getownpropertynames)
-   [`for...in`](../../statements/for...in)
-   [`in`](../../operators/in)
-   [JavaScript Guide: Inheritance revisited](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty</a>
