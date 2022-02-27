# Object.setPrototypeOf()

The `Object.setPrototypeOf()` method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or [`null`](../null).

**Warning:** Changing the `[[Prototype]]` of an object is, by the nature of [how modern JavaScript engines optimize property accesses](https://mathiasbynens.be/notes/prototypes), currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the `Object.setPrototypeOf(...)` statement, but may extend to **_any_** code that has access to any object whose `[[Prototype]]` has been altered.

Because this feature is a part of the language, it is still the burden on engine developers to implement that feature performantly (ideally). Until engine developers address this issue, if you are concerned about performance, you should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the desired `[[Prototype]]` using [`Object.create()`](create).

## Syntax

    Object.setPrototypeOf(obj, prototype)

### Parameters

`obj`  
The object which is to have its prototype set.

`prototype`  
The object's new prototype (an object or [`null`](../null)).

### Return value

The specified object.

## Description

Throws a [`TypeError`](../typeerror) exception if the object whose `[[Prototype]]` is to be modified is non-extensible according to [`Object.isExtensible()`](isextensible). Does nothing if the `prototype` parameter isn't an object or [`null`](../null) (i.e., number, string, boolean, or [`undefined`](../undefined)). Otherwise, this method changes the `[[Prototype]]` of `obj` to the new value.

`Object.setPrototypeOf()` is in the ECMAScript 2015 specification. It is generally considered the proper way to set the prototype of an object, vs. the more controversial [`Object.prototype.__proto__`](proto) property.

## Appending Prototype Chains

A combination of `Object.getPrototypeOf()` and [`Object.prototype.__proto__`](proto) permits appending a whole prototype chain to a new prototype object:

    /**
    *** Object.appendChain(@object, @prototype)
    *
    * Appends the first non-native prototype of a chain to a new prototype.
    * Returns @object (if it was a primitive value it will transformed into an object).
    *
    *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
    *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
    *
    * Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
    * new Function(["@arg"(s)], "@function_body") to that chain.
    * Returns the function.
    *
    **/

    Object.appendChain = function(oChain, oProto) {
      if (arguments.length < 2) {
        throw new TypeError('Object.appendChain - Not enough arguments');
      }
      if (typeof oProto !== 'object' && typeof oProto !== 'string') {
        throw new TypeError('second argument to Object.appendChain must be an object or a string');
      }

      var oNewProto = oProto,
          oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

      for (var o1st = this.getPrototypeOf(o2nd);
        o1st !== Object.prototype && o1st !== Function.prototype;
        o1st = this.getPrototypeOf(o2nd)
      ) {
        o2nd = o1st;
      }

      if (oProto.constructor === String) {
        oNewProto = Function.prototype;
        oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
        this.setPrototypeOf(oReturn, oLast);
      }

      this.setPrototypeOf(o2nd, oNewProto);
      return oReturn;
    }

### Usage

#### First example: Appending a chain to a prototype

    function Mammal() {
      this.isMammal = 'yes';
    }

    function MammalSpecies(sMammalSpecies) {
      this.species = sMammalSpecies;
    }

    MammalSpecies.prototype = new Mammal();
    MammalSpecies.prototype.constructor = MammalSpecies;

    var oCat = new MammalSpecies('Felis');

    console.log(oCat.isMammal); // 'yes'

    function Animal() {
      this.breathing = 'yes';
    }

    Object.appendChain(oCat, new Animal());

    console.log(oCat.breathing); // 'yes'

#### Second example: Transforming a primitive value into an instance of its constructor and append its chain to a prototype

    function MySymbol() {
      this.isSymbol = 'yes';
    }

    var nPrime = 17;

    console.log(typeof nPrime); // 'number'

    var oPrime = Object.appendChain(nPrime, new MySymbol());

    console.log(oPrime); // '17'
    console.log(oPrime.isSymbol); // 'yes'
    console.log(typeof oPrime); // 'object'

#### Third example: Appending a chain to the Function.prototype object and appending a new function to that chain

    function Person(sName) {
      this.identity = sName;
    }

    var george = Object.appendChain(new Person('George'),
                                    'console.log("Hello guys!!");');

    console.log(george.identity); // 'George'
    george(); // 'Hello guys!!'

## Examples

### Using Object.setPrototypeOf

    var dict = Object.setPrototypeOf({}, null);

## Polyfill

Using the older [`Object.prototype.__proto__`](proto) property, we can easily define `Object.setPrototypeOf` if it isn't available already:

    if (!Object.setPrototypeOf) {
        // Only works in Chrome and FireFox, does not work in IE:
         Object.prototype.setPrototypeOf = function(obj, proto) {
             if(obj.__proto__) {
                 obj.__proto__ = proto;
                 return obj;
             } else {
                 // If you want to return prototype of Object.create(null):
                 var Fn = function() {
                     for (var key in obj) {
                         Object.defineProperty(this, key, {
                             value: obj[key],
                         });
                     }
                 };
                 Fn.prototype = proto;
                 return new Fn();
             }
         }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.setprototypeof">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.setprototypeof</span></a></td></tr></tbody></table>

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

`setPrototypeOf`

34

12

31

11

21

9

37

34

31

21

9

2.0

## See also

-   [`Reflect.setPrototypeOf()`](../reflect/setprototypeof)
-   [`Object.prototype.isPrototypeOf()`](isprototypeof)
-   [`Object.getPrototypeOf()`](getprototypeof)
-   [`Object.prototype.__proto__`](proto)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf</a>
