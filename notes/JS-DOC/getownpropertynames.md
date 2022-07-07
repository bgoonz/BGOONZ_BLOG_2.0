# Object.getOwnPropertyNames()

The `Object.getOwnPropertyNames()` method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

## Syntax

    Object.getOwnPropertyNames(obj)

### Parameters

`obj`  
The object whose enumerable and non-enumerable properties are to be returned.

### Return value

An array of strings that corresponds to the properties found directly in the given object.

## Description

`Object.getOwnPropertyNames()` returns an array whose elements are strings corresponding to the enumerable and non-enumerable properties found directly in a given object `obj`. The ordering of the enumerable properties in the array is consistent with the ordering exposed by a [`for...in`](../../statements/for...in) loop (or by [`Object.keys()`](keys)) over the properties of the object. According to ES6, the integer keys of the object (both enumerable and non-enumerable) are added in ascending order to the array first, followed by the string keys in the order of insertion.

In ES5, if the argument to this method is not an object (a primitive), then it will cause a [`TypeError`](../typeerror). In ES2015, a non-object argument will be coerced to an object.

    Object.getOwnPropertyNames('foo');
    // TypeError: "foo" is not an object (ES5 code)

    Object.getOwnPropertyNames('foo');
    // ["0", "1", "2", "length"]  (ES2015 code)

## Examples

### Using Object.getOwnPropertyNames()

    var arr = ['a', 'b', 'c'];
    console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
    // logs ["0", "1", "2", "length"]

    // Array-like object
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
    // logs ["0", "1", "2"]

    // Logging property names and values using Array.forEach
    Object.getOwnPropertyNames(obj).forEach(
      function (val, idx, array) {
        console.log(val + ' -> ' + obj[val]);
      }
    );
    // logs
    // 0 -> a
    // 1 -> b
    // 2 -> c

    // non-enumerable property
    var my_obj = Object.create({}, {
      getFoo: {
        value: function() { return this.foo; },
        enumerable: false
      }
    });
    my_obj.foo = 1;

    console.log(Object.getOwnPropertyNames(my_obj).sort());
    // logs ["foo", "getFoo"]

If you want only the enumerable properties, see [`Object.keys()`](keys) or use a [`for...in`](../../statements/for...in) loop (note that this will also return enumerable properties found along the prototype chain for the object unless the latter is filtered with [`hasOwnProperty()`](hasownproperty)).

Items on the prototype chain are not listed:

    function ParentClass() {}
    ParentClass.prototype.inheritedMethod = function() {};

    function ChildClass() {
      this.prop = 5;
      this.method = function() {};
    }
    ChildClass.prototype = new ParentClass;
    ChildClass.prototype.prototypeMethod = function() {};

    console.log(
      Object.getOwnPropertyNames(
        new ChildClass() // ["prop", "method"]
      )
    );

### Get non-enumerable properties only

This uses the [`Array.prototype.filter()`](../array/filter) function to remove the enumerable keys (obtained with [`Object.keys()`](keys)) from a list of all keys (obtained with `Object.getOwnPropertyNames()`) thus giving only the non-enumerable keys as output.

    var target = myObject;
    var enum_and_nonenum = Object.getOwnPropertyNames(target);
    var enum_only = Object.keys(target);
    var nonenum_only = enum_and_nonenum.filter(function(key) {
      var indexInEnum = enum_only.indexOf(key);
      if (indexInEnum == -1) {
        // Not found in enum_only keys,
        // meaning that the key is non-enumerable,
        // so return true so we keep this in the filter
        return true;
      } else {
        return false;
      }
    });

    console.log(nonenum_only);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.getownpropertynames">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.getownpropertynames</span></a></td></tr></tbody></table>

`getOwnPropertyNames`

5

12

4

9

12

5

1

18

4

12

5

1.0

## See also

-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
-   [`Object.prototype.hasOwnProperty()`](hasownproperty)
-   [`Object.prototype.propertyIsEnumerable()`](propertyisenumerable)
-   [`Object.create()`](create)
-   [`Object.keys()`](keys)
-   [`Array.forEach()`](../array/foreach)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames</a>
