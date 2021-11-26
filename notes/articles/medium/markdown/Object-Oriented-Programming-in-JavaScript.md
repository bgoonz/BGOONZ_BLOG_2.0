Object Oriented Programming in JavaScript
=========================================

Object-Oriented Programming

------------------------------------------------------------------------

### Object Oriented Programming in JavaScript

### Object-Oriented Programming

<figure><img src="https://cdn-images-1.medium.com/max/800/0*56wmllZ_9pRe28TK.jpg" class="graf-image" /></figure>### Overview:

#### `Encapsulation`

-   <span id="b36d">The mechanism that puts behavior and data together behind methods that hide the specific implementation of a class.</span>

#### How can a `CommonJS Module import functionality` from another module?

-   <span id="37ed">Through the use of the require function.</span>

#### How can an ES6 module import functionality from another module?

-   <span id="1e02">Through the use of the import-from syntax that looks like this:</span>
-   <span id="7d93">`import SymbolName from './relative-path.js';`</span>

#### How do `CommonJS Modules` allow other modules to access exported symbols?

-   <span id="31b0">Through the use of the module.exports property.</span>

#### How do `ES6 Modules export` functionality so other modules can use them?

-   <span id="3aa7">Through the use of the export keyword.</span>

#### `Implementation inheritance`

-   <span id="ed04">The data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes</span>

#### `Inheritance`

-   <span id="ed6e">The mechanism that passes traits of a parent class to its descendants.</span>

#### `Prototypal inheritance`

-   <span id="598e">A method of realizing implementation inheritance through process of finding missing properties on an object by delegating the resolution to a prototype object.</span>

#### `The constructor method`

-   <span id="e46e">The special method of a class that is called to initialize an object when code uses the new keyword to instantiate an object from that class.</span>

#### `The Dependency Inversion Principle`

-   <span id="d024">Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance of a dependency.</span>

#### The `extends` keyword

-   <span id="f74f">The keyword in JavaScript that allows one class to inherit from another.</span>

#### `The Interface Segregation Principle`

-   <span id="6af3">Method names should be grouped together into granular collections called “interfaces”</span>

#### `The Law Of Demeter`

-   <span id="e90d">Don’t use more than one dot (not counting the one after “this”).</span>
-   <span id="6cbd">A method of an object can only invoke the methods (or use the properties) of the following kinds of objects: Methods on the object itself Any of the objects passed in as parameters to the method And object created in the method Any values stored in the instance variables of the object Any values stored in global variables</span>

#### `The Liskov Substitution Principle`

-   <span id="4589">You can substitute child class objects for parent class objects and not cause errors.</span>

#### `The Open-Close Principle`

-   <span id="7246">A class is open for extension and closed for modification.</span>

#### `The Single-Responsibility Principle`

-   <span id="48dc">Any one of the following:</span>
-   <span id="3313">A class should do one thing and do it well.</span>
-   <span id="2d3f">A class should have only one reason to change.</span>
-   <span id="e277">Gather together the things that change for the same reasons. Separate those things that change for different reasons.</span>

------------------------------------------------------------------------

### Background:

### Constructor Functions

Defining a constructor function *Example of an object using object initialization*

    const fellowshipOfTheRing = {
      title: "The Fellowship of the Ring",
      series: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
    };

-   <span id="9071">The above literal is a “Book” object type.</span>
-   <span id="a5d6">`Object Type` is defined by it's attributes and behaviors.</span>

> `Behaviors` **are represented by methods.**

-   <span id="ccb5">`Constructor Functions` : Handle the creation of an object - it's a factory for creating objects of a specific type.</span>
-   <span id="bdc9">There are a few specific things to constructors worth noting:</span>
-   <span id="6549">***The name of the constructor function is capitalized***</span>
-   <span id="8e61">The Function *does not explicitly return a value*</span>
-   <span id="8d48">Within the body, the *this* keyword references the newly created object</span>

<!-- -->

    function Book(title, series, author) {
      this.title = title;
      this.series = series;
      this.author = author;
    }

### Invoking a constructor function

-   <span id="dc26">We can invoke a constructor function using the `new` keyword.</span>

<!-- -->

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

### *Four Things will happen when invoking a constructor function*

1.  <span id="b127">A new empty object is created {};</span>
2.  <span id="3c79">The new obj’s `prototype` is set to the object referenced by the constructors prototype property.</span>
3.  <span id="6b2e">`This` is bound to the new object.</span>
4.  <span id="a360">The new object is returned after the constructor function has completed.</span>

### Understanding New Object Instances

-   <span id="1263">`Instance` : term to describe an objected created from a constructor function.</span>
-   <span id="6916">Every instance created is a unique object and therefore not equal to each other.</span>

### Using the instanceof operator to check an object’s type

    console.log(fellowshipOfTheRing instanceof Book); // true

-   <span id="f5e2">By using the `instanceof` operator we can verify that an object was created from a certain object type.</span>
-   <span id="9d20">*The instanceOf operator works by checking to see if the prototype object of the left side of the operator is the same as the prototype object of the right side of the operator.*</span>

### Invoking a constructor function without the new keyword

-   <span id="e812">If we invoke a constructor function without the `new` keyword, we may result in one of two unexpected outcomes:</span>

1.  <span id="c067">In non-strict mode, this will be bound to the global object instead.</span>
2.  <span id="8654">In `strict` mode, this will become undefined.</span>

-   <span id="4f03">You can enable strict mode by typing `"use strict"` at the top of your file.</span>

### Defining Sharable Methods

-   <span id="0f4e">*Avoid the temptation to store an object method inside a constructor function, it is inefficient with computer memory usage b/c each object instance would have it’s own method definition.*</span>
-   <span id="a9e8">`Prototype` : An object that is delegated to when a reference to an object property or method can't be resolved.</span>
-   <span id="ddc6">Every instance created by a constructor function shares the same prototype.</span>
-   <span id="ddba">`Object.setPrototypeOf()` and `Object.getPrototypeOf()` are just used to set a prototype of one object to another object; and also the verify a prototype.</span>
-   <span id="144c">`proto` : aka "dunder proto" is a property used to gain easy access to an object's prototype - it is widely supported by browsers but is considered deprecated.</span>

<!-- -->

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

-   <span id="455e">Every method we define on a constructor function’s prototype property will be shared across all instances of that object type.</span>

The Problem with Arrow Functions

-   <span id="6cb0">We cannot use arrow functions when defining methods on a constructor function’s prototype property.</span>
-   <span id="4f33">Arrow functions don’t include their own this binding; therefore it will not reference the current instance — always stick with the function () keyword.</span>

------------------------------------------------------------------------

### Putting the Class in JavaScript Classes

In ES2015, JS gained the `class` keyword - replacing the need to use only constructor functions & prototypes to mimic classes!

-   <span id="df3e">`class` : keyword that gives developers a formal way to create a class definition to specify an object type's attributes and behavior; also used to create objects of that specific type.</span>

Defining a ES2015 class

    class Book {
      constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
      }
    }

-   <span id="951e">Class names also begin only with capital letters.</span>
-   <span id="28ed">Although not required, class definitions can include a `class constructor function` - these are similar to regular constructors in that:</span>
-   <span id="a4b1">They don’t explicitly return a value.</span>
-   <span id="e85e">The this keyword references the newly created object instance.</span>

### Instantiating an instance of a class

> We can also use the `new`.

### Four things occur when instantiating an instance of a class:

1.  <span id="8842">New empty object is created {};</span>
2.  <span id="1cd6">The new obj’s prototype is set to the class prototype’s property value.</span>
3.  <span id="eddc">`This` is bound to the new object.</span>
4.  <span id="0814">After the constructor method has completed, the new obj is returned.</span>

-   <span id="e722">**Don’t try to instatiate a class object without the new keyword.**</span>

#### Class Definitions are NOT hoisted

    test();

    function test() {
      console.log("This works!");
    }

-   <span id="bf4e">In JS you can call a function before it’s declared — this is known as `hoisting`.</span>
-   <span id="8dd6">Class definitions are **NOT hoisted,** so just get in the habit of declaring them before you use them.</span>

Defining Methods

-   <span id="afc2">A class can contain two types of methods:</span>
-   <span id="6099">`Instance Method` : Methods that are invoked on an instance of the class - useful for performing an action on a specific instance.</span>
-   <span id="ed85">Instance methods are also sometimes referred to as `prototype` methods because they are defined on a shared prototype object.</span>
-   <span id="ca19">`Static Method` : Methods that invoked directly on a class, not on an instance.</span>
-   <span id="3c58">`Important`: Invoking a static method on an instance will result in a runtime error.</span>
-   <span id="a067">Prepending the `static` keyword at the beginning on the method name will make it static.</span>

<!-- -->

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

-   <span id="133d">If we go back to an example of how constructor functions also use static methods — we see that static methods are *defined directly on the constructor function* — whereas instance methods need to be defined on the *prototype* object.</span>

<!-- -->

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

### Comparing Classes to Constructor Functions

> *ES2015 Classes are essentially* ***syntactic sugar*** *over traditional constructor functions and prototypes.*

------------------------------------------------------------------------

### Javascript Inheritance

-   <span id="76a3">`Child Class` : Class that is based upon another class and inherits properties and methods from that other class.</span>
-   <span id="9c4b">`Parent Class` : Class that is being inherited downwards.</span>
-   <span id="673c">`Inheritance` : The process of basing a class upon another class.</span>

<!-- -->

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

-   <span id="8dcd">A `prototype chain` defines a series of prototype objects that are delegated to one by one, when a property or method can't be found on an instance object.</span>

<!-- -->

    console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath

-   <span id="cdf9">When the `getInformation()` method is invoked:</span>
-   <span id="7d03">JS looks for get() on the current object.</span>
-   <span id="c65f">If it isn’t found, the method call is delegated to the object’s prototype.</span>
-   <span id="7ff3">It continues up the prototype chain until the method is found.</span>

Overriding a method in a parent class

-   <span id="71f7">`Method Overriding` : when a child class provides an implementation of a method that's already defined in a parent class.</span>

<!-- -->

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

-   <span id="68fd">We can simply declare our own method of the same name in our child class to override our parent’s version of `getInformation()`</span>

------------------------------------------------------------------------

### JavaScript Modules

Introducing Node.js modules

-   <span id="7869">In Node.js, each JS file in a project defines a `module`.</span>
-   <span id="fdaa">Module’s contents are private by default.</span>
-   <span id="1ee7">`Local Modules` : Modules defined within your project.</span>
-   <span id="47f2">`Core Modules` : Native modules contained within Node.js that you can use to perform tasks or to add functionality to your application.</span>
-   <span id="dc6e">`CommonJS` : A legacy module system.</span>
-   <span id="20cd">`ES Modules` : Newer module sysem that will eventually replace CommonJS.</span>
-   <span id="5889">`Entry Point` : JS File that is passed to Node for access to the entire application.</span>

### Syntax for exporting modules:

    module.exports.Book = Book; module.exports.Movie = Movie;

    module.exports = { Book, Movie, };

#### Syntax for importing modules:

    const classes = require(“./classes”);

    const { Book, Movie } = require(“./classes”);

#### Using Single Item Modules

-   <span id="0b43">Following the convention of a single exported item per module helps to keep modules focused and less likely to become bloted with too much code.</span>

#### Understanding Module Loading

-   <span id="a924">When loading a module, Node will examine the identifier passed to the require() function to determine if our module is local, core, or third-party:</span>
-   <span id="42b7">`Local Module`: identifier starts with ./ ../ or /</span>
-   <span id="7f81">`Node.js Core`: identifier matches name</span>
-   <span id="ecfe">`Third-Party`: identifier matches a module in the node modules folder (installed package)</span>

------------------------------------------------------------------------

### `Encapsulation`

-   <span id="74af">Puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn’t need to worry about the details of it.</span>

### `Inheritance`

-   <span id="5328">`Implementation Inheritance`** :** Means that data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.</span>
-   <span id="743c">`Prototypal Inheritance` : Means that JS uses prototype objects to make its `implementation inheritance` actually work.</span>
-   <span id="39b5">Parent Class === Prototype === Super Class === Base Class</span>
-   <span id="8a35">Inheritance === Subtyping</span>

<!-- -->

    class MyClass {}

    // is the same as
    class MyClass extends Object {}

-   <span id="e595">**When you declare a class with no explicit parent class, JS will make it a child of Object.**</span>

<!-- -->

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

#### The nuts and bolts of prototypal inheritance

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FCIE6k4O9X8f9CbR" class="graf-image" /></figure>-   <span id="8fac">When JavaScript uses a property (or method) from a prototype that it found through prototypal inheritance, then the this property points to the original object on which the first call was made.</span>

<!-- -->

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

### Polymorphism

-   <span id="4da7">The ability to treat an object as if it were an instance of one of its parent classes.</span>

------------------------------------------------------------------------

### The SOLID Principles Explained

SOLID is an anagram for:

-   <span id="cdba">`The Single-Responsibility Principle`</span>
-   <span id="be3a">`The Open-Close Principle`</span>
-   <span id="0822">`The Liskov Substitution Principle`</span>
-   <span id="f90a">`The Interface Segregation Principle`</span>
-   <span id="05aa">`The Dependency Inversion Principle`</span>

### `Single-Responsibility Principle`

> *A class should do one thing and do it well*

-   <span id="46f7">This principle is about limiting the impact of change.</span>

### `The Liskov Substitution Principle:`

*Subtype Requirement: Let ϕ(x) be a property provable about objects x of type T. Then ϕ(y) should be true for objects y of type S where S is a subtype of T.*

> *You can substitute child class objects for parent class objects and not cause errors.*

`The Other Three`

-   <span id="11ae">The remaining three principles are important for languages that have `static typing` - which means a variable can have only one kind of thing in it.</span>
-   <span id="c644">`Open-Close Principle`</span>
-   <span id="450f">A class is open for extension and closed for modification.</span>
-   <span id="d4c9">Creating new functionality can happen in child classes, and not the original class.</span>
-   <span id="9cb7">`Interface Segregation Principle`</span>
-   <span id="37db">Method names should be grouped together into granular collections called “interfaces”.</span>
-   <span id="7861">`Dependency Inversion Principle`</span>
-   <span id="40a9">Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.</span>

### Controlling Coupling with The Law of Demeter

-   <span id="2e83">`Coupling` : The degree of interdependence between two or more classes.</span>
-   <span id="d484">The fewer the connections between classes, the less chance there is for the *ripple effect*.</span>
-   <span id="dc31">Here is the formal definition:</span>
-   <span id="61b4">A method of an object can only invoke the methods (or use the properties) of the following kind of objects:</span>
-   <span id="5733">Methods on the object itself.</span>
-   <span id="163d">Any of the objects passed in as parameters to the method.</span>
-   <span id="c766">Any object created in the method.</span>
-   <span id="d8ce">Any values stores in the instance variables of the object.</span>
-   <span id="ce51">Any values stored in global variables.</span>
-   <span id="0aba">Law of Demeter is more so of a guideline than a law.</span>
-   <span id="0d36">Easiest way to implement it is to *not us more than one dot*</span>
-   <span id="76ea">You cannot cheat by separating extra calls onto different lines.</span>

### When to ignore the Law of Demeter

-   <span id="770a">When you work with objects that come from code that you didn’t create — you will often have to break the LoD.</span>

<!-- -->

    document
      .getElementById("that-link")
      .addEventListener("click", (e) => e.preventDefault());

-   <span id="d850">This breaks the law but there is way about it because your code needs to know about both elements and you have to use the API provided by the DOM.</span>
-   <span id="9dc9">UI’s will break LoD because they are not object-oriented programs.</span>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>Web-Dev-Resource-Hub</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 14, 2021](https://medium.com/p/d45007d06333).

<a href="https://medium.com/@bryanguner/object-oriented-programming-in-javascript-d45007d06333" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
