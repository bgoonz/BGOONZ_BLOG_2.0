# Object.getOwnPropertyDescriptors()

The `Object.getOwnPropertyDescriptors()` method returns all own property descriptors of a given object.

## Syntax

    Object.getOwnPropertyDescriptors(obj)

### Parameters

`obj`  
The object for which to get all own property descriptors.

### Return value

An object containing all own property descriptors of an object. Might be an empty object, if there are no properties.

## Description

This method permits examination of the precise description of all own properties of an object. A property in JavaScript consists of either a string-valued name or a [`Symbol`](../symbol) and a property descriptor. Further information about property descriptor types and their attributes can be found in [`Object.defineProperty()`](defineproperty).

A property descriptor is a record with some of the following attributes:

`value`  
The value associated with the property (data descriptors only).

`writable`  
`true` if and only if the value associated with the property may be changed (data descriptors only).

`get`  
A function which serves as a getter for the property, or [`undefined`](../undefined) if there is no getter (accessor descriptors only).

`set`  
A function which serves as a setter for the property, or [`undefined`](../undefined) if there is no setter (accessor descriptors only).

`configurable`  
`true` if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

`enumerable`  
`true` if and only if this property shows up during enumeration of the properties on the corresponding object.

## Examples

### Creating a shallow clone

Whereas the [`Object.assign()`](assign) method will only copy enumerable and own properties from a source object to a target object, you are able to use this method and [`Object.create()`](create) for a shallow copy between two unknown objects:

    Object.create(
      Object.getPrototypeOf(obj),
      Object.getOwnPropertyDescriptors(obj)
    );

### Creating a subclass

A typical way of creating a subclass is to define the subclass, set its prototype to an instance of the superclass, and then define properties on that instance. This can get awkward especially for getters and setters. Instead, you can use this code to set the prototype:

    function superclass() {}
    superclass.prototype = {
      // Define your methods and properties here
    };
    function subclass() {}
    subclass.prototype = Object.create(
      superclass.prototype,
      {
        // Define your methods and properties here
      }
    );

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.getownpropertydescriptors">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Object.getOwnPropertyDescriptors' in that specification.</span></a></td></tr></tbody></table>

`getOwnPropertyDescriptors`

54

15

50

No

41

10

54

54

50

41

10

6.0

## See also

-   [`Object.getOwnPropertyDescriptor()`](getownpropertydescriptor)
-   [`Object.defineProperty()`](defineproperty)
-   [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors</a>
