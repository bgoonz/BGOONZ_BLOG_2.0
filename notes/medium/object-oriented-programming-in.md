# Object Oriented Programming in JavaScript

Object-Oriented Programming

## Object Oriented Programming in JavaScript

## Object-Oriented Programming

![](https://cdn-images-1.medium.com/max/800/0*56wmllZ_9pRe28TK.jpg)\#\#\# Overview:

### `Encapsulation`

* The mechanism that puts behavior and data together behind methods that hide the specific implementation of a class.

### How can a `CommonJS Module import functionality` from another module?

* Through the use of the require function.

### How can an ES6 module import functionality from another module?

* Through the use of the import-from syntax that looks like this:
* `import SymbolName from './relative-path.js';`

### How do `CommonJS Modules` allow other modules to access exported symbols?

* Through the use of the module.exports property.

### How do `ES6 Modules export` functionality so other modules can use them?

* Through the use of the export keyword.

### `Implementation inheritance`

* The data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes

### `Inheritance`

* The mechanism that passes traits of a parent class to its descendants.

### `Prototypal inheritance`

* A method of realizing implementation inheritance through process of finding missing properties on an object by delegating the resolution to a prototype object.

### `The constructor method`

* The special method of a class that is called to initialize an object when code uses the new keyword to instantiate an object from that class.

### `The Dependency Inversion Principle`

* Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance of a dependency.

### The `extends` keyword

* The keyword in JavaScript that allows one class to inherit from another.

### `The Interface Segregation Principle`

* Method names should be grouped together into granular collections called “interfaces”

### `The Law Of Demeter`

* Don’t use more than one dot \(not counting the one after “this”\).
* A method of an object can only invoke the methods \(or use the properties\) of the following kinds of objects: Methods on the object itself Any of the objects passed in as parameters to the method And object created in the method Any values stored in the instance variables of the object Any values stored in global variables

### `The Liskov Substitution Principle`

* You can substitute child class objects for parent class objects and not cause errors.

### `The Open-Close Principle`

* A class is open for extension and closed for modification.

### `The Single-Responsibility Principle`

* Any one of the following:
* A class should do one thing and do it well.
* A class should have only one reason to change.
* Gather together the things that change for the same reasons. Separate those things that change for different reasons.

## Background:

## Constructor Functions

Defining a constructor function _Example of an object using object initialization_

```text
const fellowshipOfTheRing = {
  title: "The Fellowship of the Ring",
  series: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
};
```

* The above literal is a “Book” object type.
* `Object Type` is defined by it's attributes and behaviors.

> `Behaviors` **are represented by methods.**

* `Constructor Functions` : Handle the creation of an object - it's a factory for creating objects of a specific type.
* There are a few specific things to constructors worth noting:
* _**The name of the constructor function is capitalized**_
* The Function _does not explicitly return a value_
* Within the body, the _this_ keyword references the newly created object

```text
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}
```

## Invoking a constructor function

* We can invoke a constructor function using the `new` keyword.

```text
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing); // Book { title: 'The Fellowship of the Ring', ... }
```

## _Four Things will happen when invoking a constructor function_

1. A new empty object is created {};
2. The new obj’s `prototype` is set to the object referenced by the constructors prototype property.
3. `This` is bound to the new object.
4. The new object is returned after the constructor function has completed.

## Understanding New Object Instances

* `Instance` : term to describe an objected created from a constructor function.
* Every instance created is a unique object and therefore not equal to each other.

## Using the instanceof operator to check an object’s type

```text
console.log(fellowshipOfTheRing instanceof Book); // true
```

* By using the `instanceof` operator we can verify that an object was created from a certain object type.
* _The instanceOf operator works by checking to see if the prototype object of the left side of the operator is the same as the prototype object of the right side of the operator._

## Invoking a constructor function without the new keyword

* If we invoke a constructor function without the `new` keyword, we may result in one of two unexpected outcomes:
* In non-strict mode, this will be bound to the global object instead.
* In `strict` mode, this will become undefined.
* You can enable strict mode by typing `"use strict"` at the top of your file.

## Defining Sharable Methods

* _Avoid the temptation to store an object method inside a constructor function, it is inefficient with computer memory usage b/c each object instance would have it’s own method definition._
* `Prototype` : An object that is delegated to when a reference to an object property or method can't be resolved.
* Every instance created by a constructor function shares the same prototype.
* `Object.setPrototypeOf()` and `Object.getPrototypeOf()` are just used to set a prototype of one object to another object; and also the verify a prototype.
* `proto` : aka "dunder proto" is a property used to gain easy access to an object's prototype - it is widely supported by browsers but is considered deprecated.

```text
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

// Any method defined on the `Book.prototype` property
// will be shared across all `Book` instances.
Book.prototype.getInformation = function () {
  return `${this.title} by ${this.author}`;
};

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing.getInformation());
```

* Every method we define on a constructor function’s prototype property will be shared across all instances of that object type.

The Problem with Arrow Functions

* We cannot use arrow functions when defining methods on a constructor function’s prototype property.
* Arrow functions don’t include their own this binding; therefore it will not reference the current instance — always stick with the function \(\) keyword.

## Putting the Class in JavaScript Classes

In ES2015, JS gained the `class` keyword - replacing the need to use only constructor functions & prototypes to mimic classes!

* `class` : keyword that gives developers a formal way to create a class definition to specify an object type's attributes and behavior; also used to create objects of that specific type.

Defining a ES2015 class

```text
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}
```

* Class names also begin only with capital letters.
* Although not required, class definitions can include a `class constructor function` - these are similar to regular constructors in that:
* They don’t explicitly return a value.
* The this keyword references the newly created object instance.

## Instantiating an instance of a class

> We can also use the `new`.

## Four things occur when instantiating an instance of a class:

1. New empty object is created {};
2. The new obj’s prototype is set to the class prototype’s property value.
3. `This` is bound to the new object.
4. After the constructor method has completed, the new obj is returned.
5. **Don’t try to instatiate a class object without the new keyword.**

### Class Definitions are NOT hoisted

```text
test();

function test() {
  console.log("This works!");
}
```

* In JS you can call a function before it’s declared — this is known as `hoisting`.
* Class definitions are **NOT hoisted,** so just get in the habit of declaring them before you use them.

Defining Methods

* A class can contain two types of methods:
* `Instance Method` : Methods that are invoked on an instance of the class - useful for performing an action on a specific instance.
* Instance methods are also sometimes referred to as `prototype` methods because they are defined on a shared prototype object.
* `Static Method` : Methods that invoked directly on a class, not on an instance.
* `Important`: Invoking a static method on an instance will result in a runtime error.
* Prepending the `static` keyword at the beginning on the method name will make it static.

```text
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }

  // Notice the use of a rest parameter (...books)
  // to capture the passed parameters as an array of values.
  static getTitles(...books) {
    return books.map((book) => book.title);
  }

  getInformation() {
    return `${this.title} by ${this.author}`;
  }
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const theTwoTowers = new Book(
  "The Two Towers",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(", ")); // The Fellowship of the Ring, The Two Towers
```

* If we go back to an example of how constructor functions also use static methods — we see that static methods are _defined directly on the constructor function_ — whereas instance methods need to be defined on the _prototype_ object.

```text
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

// Static methods are defined
// directly on the constructor function.
Book.getTitles = function (...books) {
  return books.map((book) => book.title);
};

// Instance methods are defined
// on the constructor function's `prototype` property.
Book.prototype.getInformation = function () {
  return `${this.title} by ${this.author}`;
};

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const theTwoTowers = new Book(
  "The Two Towers",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing.getInformation()); // The Fellowship of the Ring by J.R.R. Tolkien

console.log(theTwoTowers.getInformation()); // The Two Towers by J.R.R. Tolkien

// Call the static `Book.getTitles()` method
// to get an array of the book titles.
const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(", ")); // The Fellowship of the Ring, The Two Towers
```

## Comparing Classes to Constructor Functions

> _ES2015 Classes are essentially_ _**syntactic sugar**_ _over traditional constructor functions and prototypes._

## Javascript Inheritance

* `Child Class` : Class that is based upon another class and inherits properties and methods from that other class.
* `Parent Class` : Class that is being inherited downwards.
* `Inheritance` : The process of basing a class upon another class.

```text
class CatalogItem {
  constructor(title, series) {
    this.title = title;
    this.series = series;
  }

  getInformation() {
    if (this.series) {
      return `${this.title} (${this.series})`;
    } else {
      return this.title;
    }
  }
}

class Book extends CatalogItem {
  constructor(title, series, author) {
    super(title, series);
    this.author = author;
  }
}

class Movie extends CatalogItem {
  constructor(title, series, director) {
    super(title, series);
    this.director = director;
  }
}

const theGrapesOfWrath = new Book(
  "The Grapes of Wrath",
  null,
  "John Steinbeck"
);
const aNewHope = new Movie(
  "Episode 4: A New Hope",
  "Star Wars",
  "George Lucas"
);

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars)
console.log(Catalogitem instanceof Function); // true
console.log(Book instanceof Function); // true
```

* A `prototype chain` defines a series of prototype objects that are delegated to one by one, when a property or method can't be found on an instance object.

```text
console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
```

* When the `getInformation()` method is invoked:
* JS looks for get\(\) on the current object.
* If it isn’t found, the method call is delegated to the object’s prototype.
* It continues up the prototype chain until the method is found.

Overriding a method in a parent class

* `Method Overriding` : when a child class provides an implementation of a method that's already defined in a parent class.

```text
class Movie extends CatalogItem {
  constructor(title, series, director) {
    super(title, series);
    this.director = director;
  }

  getInformation() {
    let result = super.getInformation();

    if (this.director) {
      result += ` [directed by ${this.director}]`;
    }

    return result;
  }
}
```

* We can simply declare our own method of the same name in our child class to override our parent’s version of `getInformation()`

## JavaScript Modules

Introducing Node.js modules

* In Node.js, each JS file in a project defines a `module`.
* Module’s contents are private by default.
* `Local Modules` : Modules defined within your project.
* `Core Modules` : Native modules contained within Node.js that you can use to perform tasks or to add functionality to your application.
* `CommonJS` : A legacy module system.
* `ES Modules` : Newer module sysem that will eventually replace CommonJS.
* `Entry Point` : JS File that is passed to Node for access to the entire application.

## Syntax for exporting modules:

```text
module.exports.Book = Book; module.exports.Movie = Movie;

module.exports = { Book, Movie, };
```

### Syntax for importing modules:

```text
const classes = require(“./classes”);

const { Book, Movie } = require(“./classes”);
```

### Using Single Item Modules

* Following the convention of a single exported item per module helps to keep modules focused and less likely to become bloted with too much code.

### Understanding Module Loading

* When loading a module, Node will examine the identifier passed to the require\(\) function to determine if our module is local, core, or third-party:
* `Local Module`: identifier starts with ./ ../ or /
* `Node.js Core`: identifier matches name
* `Third-Party`: identifier matches a module in the node modules folder \(installed package\)

## `Encapsulation`

* Puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn’t need to worry about the details of it.

## `Inheritance`

* `Implementation Inheritance` **:** Means that data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
* `Prototypal Inheritance` : Means that JS uses prototype objects to make its `implementation inheritance` actually work.
* Parent Class === Prototype === Super Class === Base Class
* Inheritance === Subtyping

```text
class MyClass {}

// is the same as
class MyClass extends Object {}
```

* **When you declare a class with no explicit parent class, JS will make it a child of Object.**

```text
class Charity {}

class Business {
  toString() {
    return "Give us your money.";
  }
}

class Restaurant extends Business {
  toString() {
    return "Eat at Joe's!";
  }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() {
    return "Buy some stuff!";
  }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() {
    return "Upgrade your perfectly good phone, now!";
  }
}

console.log(new PhoneStore().toString()); // 'Upgrade your perfectly good phone, now!'
console.log(new ClothingStore().toString()); // 'Buy some stuff!';
console.log(new Restaurant().toString()); // 'Eat at Joe\'s!'
console.log(new AutoRepairShop().toString()); // 'Give us your money.'
console.log(new Charity().toString()); // [object object]
```

### The nuts and bolts of prototypal inheritance

![](https://cdn-images-1.medium.com/max/800/0*FCIE6k4O9X8f9CbR)- When JavaScript uses a property \(or method\) from a prototype that it found through prototypal inheritance, then the this property points to the original object on which the first call was made.

```text
class Parent {
  constructor() {
    this.name = "PARENT";
  }
  toString() {
    return `My name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "CHILD";
  }
}

const parent = new Parent();
console.log(parent.toString()); // my name is Parent

const child = new Child();
console.log(child.toString()); // my name is Child
```

## Polymorphism

* The ability to treat an object as if it were an instance of one of its parent classes.

## The SOLID Principles Explained

SOLID is an anagram for:

* `The Single-Responsibility Principle`
* `The Open-Close Principle`
* `The Liskov Substitution Principle`
* `The Interface Segregation Principle`
* `The Dependency Inversion Principle`

## `Single-Responsibility Principle`

> _A class should do one thing and do it well_

* This principle is about limiting the impact of change.

## `The Liskov Substitution Principle:`

_Subtype Requirement: Let ϕ\(x\) be a property provable about objects x of type T. Then ϕ\(y\) should be true for objects y of type S where S is a subtype of T._

> _You can substitute child class objects for parent class objects and not cause errors._

`The Other Three`

* The remaining three principles are important for languages that have `static typing` - which means a variable can have only one kind of thing in it.
* `Open-Close Principle`
* A class is open for extension and closed for modification.
* Creating new functionality can happen in child classes, and not the original class.
* `Interface Segregation Principle`
* Method names should be grouped together into granular collections called “interfaces”.
* `Dependency Inversion Principle`
* Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.

## Controlling Coupling with The Law of Demeter

* `Coupling` : The degree of interdependence between two or more classes.
* The fewer the connections between classes, the less chance there is for the _ripple effect_.
* Here is the formal definition:
* A method of an object can only invoke the methods \(or use the properties\) of the following kind of objects:
* Methods on the object itself.
* Any of the objects passed in as parameters to the method.
* Any object created in the method.
* Any values stores in the instance variables of the object.
* Any values stored in global variables.
* Law of Demeter is more so of a guideline than a law.
* Easiest way to implement it is to _not us more than one dot_
* You cannot cheat by separating extra calls onto different lines.

## When to ignore the Law of Demeter

* When you work with objects that come from code that you didn’t create — you will often have to break the LoD.

```text
document
  .getElementById("that-link")
  .addEventListener("click", (e) => e.preventDefault());
```

* This breaks the law but there is way about it because your code needs to know about both elements and you have to use the API provided by the DOM.
* UI’s will break LoD because they are not object-oriented programs.

## If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[**bgoonz’s gists**  
 _Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \|…_gist.github.com](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

## Or Checkout my personal Resource Site:

[**Web-Dev-Resource-Hub**  
 _Edit description_web-dev-resource-hub.netlify.app](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 14, 2021](https://medium.com/p/d45007d06333).

[Canonical link](https://medium.com/@bryanguner/object-oriented-programming-in-javascript-d45007d06333)

Exported from [Medium](https://medium.com) on May 23, 2021.

