# Objects in Javascript

Codepen with examples for you to practice with below!

## Objects in Javascript

### Codepen with examples for you to practice with below!

![](https://cdn-images-1.medium.com/max/800/1*F_xu5P1BJ300C3OixplWNA.png)\#\#\# The Object Type

The `object` is a data structure that stores other data, similar to how an array stores elements.

Javascript simple types:

* numbers _\(has object-like methods but they are immutable\)_
* strings _\(has object-like methods but they are immutable\)_
* booleans _\(has object-like methods but they are immutable\)_
* null
* undefined

All other values are _objects_ including arrays and functions.

Objects are class free, can contain other objects and can inherit properties from their prototypes \(which can _reduce object initialisation time and memory consumption_\).

In other programming languages, objects are referred to as, “dictionaries”, “maps”, or “associative arrays”.

* Objects are indexed with `keys` instead of numbers.
* Order is not guaranteed within an Object.
* Objects are defined by using curly braces `{}`
* You can think of Objects as tables.

> _Fun Fact: Objects are affectionately known as POJO’s \(Plain Old Javascript Objects\)_

**Setting Keys and Values**

* If we try to access a key that has not yet been assigned within an object we will output undefined.
* The **preferred method** for checking to see if an object exists at a key is to use the operator.

**Using Variables as Keys**

## Using Different Notations

**Bracket Notation vs Dot Notation**

Easier To Read

You can use variables as keys!

Easier To Write b/c do not need Quotations.

Okay to use variables and Strings that start with numbers.

Cannot access with Variables

Keys cannot contain numbers as their first character

* **When accessing object keys**: Bracket notation needs to refer to that key in quotations, dot notation doesn’t.
* **When accessing object keys via a variable**: Bracket notation can refer to that key w/o use of quotations, dot notation can’t do this at all.

**Putting it All Together**

You can put an object together in a single statement.

**Operator Precedence Revisited**

## Iterating Through Objects

Because objects store _**unordered**_ key-value pairs, we do not rely on indices to access values; instead we rely on our keys.

**Methods vs Functions**

A is a function that _belongs_ to an object. Every method is a function, but _not_ every function is a method.

**Useful Object Methods**

* `Object.keys()` : A method that allows us to iterate through keys, it accepts an obj as the argument and returns an array of the keys.
* `Object.values()` : Method that accepts an object as the argument and returns an array of the values.

**Iterating through an Object’s keys & values**

## References vs Primitives

**Primitives vs Objects**

So far we have learned about 6 different data types:

* **Primitive** : Boolean, Null, Undefined, Number, String.
* **Reference** : Object \(Arrays are a type of object\)
* Remember that **primitive** types are immutable!

**Immutability**

* When we reassign primitives we simply have our variable point elsewhere in memory.
* In a nutshell, **immutability** cannot change values in memory, but only reassign where our variables are pointing to.

**Mutability**

## Rest and Spread

**Using the Spread Operator and Rest Parameter Syntax**  
**Accepting Arguments**

* Just keep in mind that function will still run even if it is not passed any arguments.
* Parameters will take just as many arguments they need even if more than enough are offered.
* We will encounter an error if there are not enough parameters \( &gt; 0\).

**Utilizing Rest Parameters**

* `Rest Parameter Syntax` : Allows us to capture all of a function's incoming arguments into an array.
* Only the last parameter can be a rest parameter.

**Utilizing Spread Syntax**

* Takes a data type \(i.e. array, obj\) and spreads the values of that type where elements are expected.
* Takes iterable data and spreads the elements of that type where arguments are expected.

## Destructuring

**Swapping Variables using destructuring**

**Destructuring objects into variables**

**Destructuring and the Rest Pattern**

## Destructuring Parameters

We can also destructure **incoming parameters** of a function.  
This is very useful when we’re passing objects around to different functions.

## Object Literals

* An object literal is _zero or more comma-separated name/value pairs surrounded by curly braces_ {}

```text
let empty_object = {};

let today = {
    day: "Wednesday",
    month: "April",
    year: 2014,

weather: { //objects can contain nested objects like this one
        morning: "sunny",
        afternoon: "cloudy"
    }
}
```

## Retrieval

* Can be done with either dot notation `today.weather.morning` or with square brackets `today['month']`
* Or operand \(\|\|\) can be used to fill in default values for nonexistent data to prevent and _undefined_ error: `var weath = today.weather.evening || "unknown"`

## Update

* Assigning a property value to an object overwrites any existing property values with that property name

## Reference

* Objects refer to each other, they don’t hold duplicate copies of data

## Prototype

* Every object has a prototype object from which it inherits properties
* _Object.prototype_ comes standard with Javascript and is almost like a ‘root parent’

![](https://cdn-images-1.medium.com/max/800/0*1MKtZt0a5gREie59)- The `Object.create` method is now available in ES5 \(but the method is in the book if required for older versions\)

* If an object does not have a property you ask it for, it will keep looking up the prototype chain until it finds it
* If the property _does note exist_ anywhere in the chain, it will return _undefined_
* A new property is _immediately visible_ to all of the objects below it in the chain once created

More details in [Chapter 6](https://github.com/Lambda-April/Unsorted-Notes/blob/main)

## Reflection

* Determining what properties an object has
* Using `typeof` includes all properties in the prototype chain including functions
* To avoid inherited properties, use `hasOwnProperty(type);` which returns _true_ if that property exists only in that object itself \(not the chain\)

```text
today.hasOwnProperty(‘number’) //will return true today.hasOwnProperty(‘constructor’) //will return false
```

## Enumeration

* Best way to enumerate all the properties you want is a for loop:

```text
let i;
let properties = [ ‘day’, ‘month’, ‘year’ ]; 
for (i = 0; i < properties.length; i++) { 
    document.writeIn(properties[i] + ‘:’ + today[properties[i]]);
 }
```

* This ensures you get the properties you want \(i.e. not up the prototype chain\) and in the order you want, as opposed to a _for in_ loop which achieves neither of these

## Delete

* Removes property from object, but also reveals property from further up the prototype chain if it exists
* Format: `delete today.month`

## Global Abatement

* One way to mitigate the risks of global variables is to _create a single global variable_ which then contains your whole application

```text
let MYAPP = {}

MYAPP.today = {
    day: "Wednesday",
    month: "April",
    year: 2014,

weather: { //objects can contain nested objects like this one
        morning: "sunny",
        afternoon: "cloudy"
    }
}
//Making sure all other variables (like today) are contained within this one global variable (MYAPP) means none of them have global scope and therefore the risk of naming conflicts, etc in your application is reduced
```

### Further resources:

[**A list of all of my articles to link to future posts**  
 _You should probably skip this one…_ _seriously it’s just for internal use!_bryanguner.medium.com](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

[**bgoonz’s gists**  
 _Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \|…_gist.github.com](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

[**Web-Dev-Resource-Hub**  
 _Edit description_web-dev-resource-hub.netlify.app](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [April 15, 2021](https://medium.com/p/cc578a781e1d).

[Canonical link](https://medium.com/@bryanguner/objects-in-javascript-cc578a781e1d)

Exported from [Medium](https://medium.com) on May 23, 2021.

