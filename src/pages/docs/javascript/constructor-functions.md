---
title: Constructor Functions
weight: 0
excerpt: Constructor Functions
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## **Constructor Functions**

**Defining a constructor function**
_Example of an object using object initialiation_

```js
//
const fellowshipOfTheRing = {
    title: 'The Fellowship of the Ring',
    series: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
};
```

- The above literal is a "Book" object type.
- **`Object Type`** is defined by it's attributes and behaviors.

    - **`Behaviors`** are represented by methods.

- **`Constructor Functions`** : Handle the creation of an object - it's a factory for creating objects of a specific type.
    - There are a few specific things to constructors worth noting:
        - **The name of the constructor function is capitalized**
        - **The Function does not explicityly return a value**
        - **Within the body, the _this_ keyword references the newly created object**

---


```js
//


function Book(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
}
```

## **Invoking a constructor function**

- We can invoke a constructor function using the **`new`** keyword.

---


```js
//


function Book(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
}

const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'The Lord of the Rings', 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing); // Book { title: 'The Fellowship of the Ring', ... }
```

- _Four Things will happen when invoking a constructor function_
    1. A new empty object is created {};
    2. The new obj's **`prototype`** is set to the object referenced by the constructors prototype property.
    3. **`This`** is bound to the new object.
    4. The new object is returned after the constructor function has completed.

**Understanding New Object Instances**

- **`Instance`** : term to describe an objected created from a constructor function.
- Every instance created is a unique object and therefore not equal to each other.

**Using the instanceof operator to check an object's type**

```js
//
console.log(fellowshipOfTheRing instanceof Book); // true
```

- By using the `instanceof` operator we can verify that an object was created from a certain object type.
    - _The instanceOf operator works by checking to see if the prototype object of the left side of the operator is the same as the prototype object of the right side of the operator._

**Invoking a constructor function without the new keyword**

- If we invoke a constructor function without the **`new`** keyword, we may result in one of two unexpected outcomes:
    1. In **non-strict** mode, this will be bound to the **global object** instead.
    2. In **`strict`** mode, this will become undefined.
        - You can enable strict mode by typing `"use strict"` at the top of your file.

**Defining Sharable Methods**

- _Avoid the temptation to store an object method inside a constructor function, it is inefficient with computer memory usage b/c each object instance would have it's own method definition._

*   **`Prototype`** : An object that is delegated to when a reference to an object property or method can't be resolved.

    - Every instance created by a constructor function shares the same prototype.

*   **`Object.setPrototypeOf()`** and **`Object.getPrototypeOf()`** are just used to set a prototype of one object to another object; and also the verify a prototype.
    - **`proto`** : aka "dunder proto" is a property used to gain easy access to an object's prototype - it is widely supported by browsers but is considered deprecated.

---


```js
//


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

const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'The Lord of the Rings', 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing.getInformation());
```

- Every method we define on a constructor function's prototype property will be shared across all instances of that object type.

**The Problem with Arrow Functions**

- We **cannot** use arrow functions when defining methods on a constructor function's prototype property.
    - Arrow functions don't include their own **this** binding; therefore it will not reference the current instance - always stick with the function () keyword.

---

## **Putting the Class in Javascript Classes**

In ES2015, JS gained the **`class`** keyword - replacing the need to use only constructor functions & prototypes to mimic classes!

- **`class`** : keyword that gives developers a formal way to create a class definition to specify an object type's attributes and behavior; also used to create objects of that specific type.

**Defining a ES2015 class**

```js
//
class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
    }
}
```

- Class names also begin only with capital letters.
- Although not required, class definitions can include a **`class constructor function`** - these are similar to regular constructors in that:
    - They don't explicitly return a value.
    - The **this** keyword references the newly created object instance.

**Instantiating an instance of a class**

- We can also use the **`new`**.

    - Four things occur when instantiating an instance of a class:

    1. New empty object is created {};
    2. The new obj's prototype is set to the class prototype's property value.
    3. **`This`** is bound to the new object.
    4. After the constructor method has completed, the new obj is returned.

- Don't try to instatiate a class object without the **new** keyword.

**Class Definitions are NOT hoisted**

```js
//
test();

function test() {
    console.log('This works!');
}
```

- In JS you can call a function before it's declared - this is known as **`hoisting`**.
- Class defs are NOT hoisted, so just get in the habit of declaring them **before** you use them.

**Defining Methods**

- A class can contain two types of methods:
- 
- **`Instance Method`** : Methods that are invoked on an instance of the class - useful for performing an action on a specific instance.

    - Instance methods are also sometimes referred to as **`prototype`** methods because they are defined on a shared prototype object.

- **`Static Method`** : Methods that invoked directly on a class, not on an instance.
    - `Important`: Invoking a static method on an instance will result in a runtime error.
    - Prepending the **`static`** keyword at the beginning on the method name will make it static.

```js
//
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

const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'The Lord of the Rings', 'J.R.R. Tolkien');

const theTwoTowers = new Book('The Two Towers', 'The Lord of the Rings', 'J.R.R. Tolkien');

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(', ')); // The Fellowship of the Ring, The Two Towers
```

- If we go back to an example of how constructor functions also use static methods - we see that static methods are _defined directly on the constructor function_ - whereas instance methods need to be defined on the _prototype_ object.

---


```js
//


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

const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'The Lord of the Rings', 'J.R.R. Tolkien');

const theTwoTowers = new Book('The Two Towers', 'The Lord of the Rings', 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing.getInformation()); // The Fellowship of the Ring by J.R.R. Tolkien

console.log(theTwoTowers.getInformation()); // The Two Towers by J.R.R. Tolkien

// Call the static `Book.getTitles()` method
// to get an array of the book titles.
const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(', ')); // The Fellowship of the Ring, The Two Towers
```

**Comparing Classes to Constructor Functions**

> ES2015 Classes are essentially syntactic sugar over traditional constructor functions and prototypes.

---

## **Javascript Inheritance**

- **`Child Class`** : Class that is based upon another class and inherits properties and methods from that other class.
- **`Parent Class`** : Class that is being inherited downwards.
- **`Inheritance`** : The process of basing a class upon another class.

```js
//
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

const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
const aNewHope = new Movie('Episode 4: A New Hope', 'Star Wars', 'George Lucas');

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars)
console.log(Catalogitem instanceof Function); // true
console.log(Book instanceof Function); // true
```

- A **`prototype chain`** defines a series of prototype objects that are delegated to one by one, when a property or method can't be found on an instance object.
    ```js
//
    console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
    ```
    When the `getInformation()` method is invoked:
    - JS looks for get() on the current object.
    - If it isn't found, the method call is delegated to the object's prototype.
    - It continues up the prototype chain until the method is found.

**Overriding a method in a parent class**

- **`Method Overriding`** : when a child class provides an implementation of a method that's already defined in a parent class.

```js
//
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

- We can simply declare our own method of the same name in our child class to override our parent's version of `getInformation()`

---

## **Javascript Modules**

**Introducing Node.js modules**

- In Node.js, each JS file in a project defines a **`module`**.
- Module's contents are private by default.
- **`Local Modules`** : Modules defined within your project.
- **`Core Modules`** : Native modules contained within Node.js that you can use to perform tasks or to add functionality to your application.
- **`CommonJS`** : A legacy module system.
- **`ES Modules`** : Newer module sysem that will eventually replace CommonJS.

*   **`Entry Point`** : JS File that is passed to Node for access to the entire application.
*   Syntax for exporting modules:
    ```js
//
    module.exports.Book = Book;
    module.exports.Movie = Movie;
    ```
    ```js
//
    module.exports = {
        Book,
        Movie
    };
    ```
*   Syntax for importing modules:

    ```js
//
    const classes = require('./classes');
    ```

    ```js
//
    const { Book, Movie } = require('./classes');
    ```

    **Using Single Item Modules**

    > Following the convention of a single exported item per module helps to keep modules focused and less likely to become bloted with too much code.

    **Understanding Module Loading**

    - When loading a module, Node will examine the identifier passed to the require() function to determine if our module is local, core, or third-party:
        - **`Local Module`**: identifier starts with ./ ../ or /
        - **`Node.js Core`**: identifier matches name
        - **`Third-Party`**: identifier matches a module in the node modules folder (installed package)

    ---
