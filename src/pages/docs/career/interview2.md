---
title: Interview 2
weight: 0
excerpt: Reference materials and descriptions of fundamental concepts as well as visua
seo:
    title: Interview 2
    description: Job search guidance for front end web developers.
    robots: []
    extra:
        - name: 'og:image'
          value: images/og-image.png
          keyName: property
          relativeUrl: true
template: docs
---

<details>

<summary> From #250 Onward </summary>
250.    What is the advantage of a comma operator

             It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a `for` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,

 ```js

        //
        for (var a = 0, b =10; a <= 10; a++, b--)

  ```

             You can also use the comma operator in a return statement where it processes before returning.

 ```js

        //
        function myFunction() {
        var a = 1;
        return (a += 10), a; // 11
        }
  ```

251.    What is typescript

        TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language. You can install it globally as

  ```bash
        npm install -g typescript
  ```

        Let's see a simple example of TypeScript usage,

  ```typescript
        function greeting(name: string): string {
            return 'Hello, ' + name;
        }

        let user = 'Sudheer';

        console.log(greeting(user));
  ```

        The greeting method allows only string type as argument.

252.    What are the differences between javascript and typescript

        Below are the list of differences between javascript and typescript,

        | feature             | typescript                            | javascript                                      |
        | ------------------- | ------------------------------------- | ----------------------------------------------- |
        | Language paradigm   | Object oriented programming language  | Scripting language                              |
        | Typing support      | Supports static typing                | It has dynamic typing                           |
        | Modules             | Supported                             | Not supported                                   |
        | Interface           | It has interfaces concept             | Doesn't support interfaces                      |
        | Optional parameters | Functions support optional parameters | No support of optional parameters for functions |

253.    What are the advantages of typescript over javascript

        Below are some of the advantages of typescript over javascript,

        1. TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors. Whereas javascript is an interpreted language.
        2. TypeScript is strongly-typed or supports static typing which allows for checking type correctness at compile time. This is not available in javascript.
        3. TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.

254.    What is an object initializer

             An object initializer is an expression that describes the initialization of an Object. The syntax for this expression is represented as a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). This is also known as literal notation. It is one of the ways to create an object.

 ```js

        //
        var initObject = { a: 'John', b: 50, c: {} };

             console.log(initObject.a); // John
 ```

255.    What is a constructor method

             The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,

 ```js

        //
        class Employee {
        constructor() {
        this.name = 'John';
        }
        }

             var employeeObject = new Employee();

             console.log(employeeObject.name); // John
 ```

256.    What happens if you write constructor more than once in a class

             The "constructor" in a class is a special method and it should be defined only once in a class. i.e, If you write a constructor method more than once in a class it will throw a `SyntaxError` error.

 ```js

        //
        class Employee {
        constructor() {
        this.name = "John";
        }
        constructor() { // Uncaught SyntaxError: A class may only have one constructor
        this.age = 30;
        }
        }

              var employeeObject = new Employee();

              console.log(employeeObject.name);
 ```

257.    How do you call the constructor of a parent class

             You can use the `super` keyword to call the constructor of a parent class. Remember that `super()` must be called before using 'this' reference. Otherwise it will cause a reference error. Let's the usage of it,

 ```js

        //
        class Square extends Rectangle {
        constructor(length) {
        super(length, length);
        this.name = 'Square';
        }

                 get area() {
                     return this.width * this.height;
                 }

                 set area(value) {
                     this.area = value;
                 }
             }
 ```

258.    How do you get the prototype of an object

             You can use the `Object.getPrototypeOf(obj)` method to return the prototype of the specified object. i.e. The value of the internal `prototype` property. If there are no inherited properties then `null` value is returned.

 ```js

        //
        const newPrototype = {};
        const newObject = Object.create(newPrototype);

             console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
 ```

259.    What happens If I pass string type for getPrototype method

             In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an `Object`.

 ```js

        //
        // ES5
        Object.getPrototypeOf('James'); // TypeError: "James" is not an object
        // ES2015
        Object.getPrototypeOf('James'); // String.prototype

  ```

  ```

260.    How do you set prototype of one object to another

             You can use the `Object.setPrototypeOf()` method that sets the prototype (i.e., the internal `Prototype` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

 ```js

        //
        Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
        Object.setPrototypeOf({}, null);

  ```

  ```

261.    How do you check whether an object can be extendable or not

             The `Object.isExtensible()` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.

 ```js

        //
        const newObject = {};
        console.log(Object.isExtensible(newObject)); //true

  ```

             **Note:** By default, all the objects are extendable. i.e, The new properties can be added or modified.

  ```

262.    How do you prevent an object to extend

             The `Object.preventExtensions()` method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,

 ```js

        //
        const newObject = {};
        Object.preventExtensions(newObject); // NOT extendable

             try {
                 Object.defineProperty(newObject, 'newProperty', {
                     // Adding new property
                     value: 100
                 });
             } catch (e) {
                 console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
             }
 ```

263.    What are the different ways to make an object non-extensible

             You can mark an object non-extensible in 3 ways,

             1. Object.preventExtensions
             2. Object.seal
             3. Object.freeze

 ```js

        //
        var newObject = {};

             Object.preventExtensions(newObject); // Prevent objects are non-extensible
             Object.isExtensible(newObject); // false

             var sealedObject = Object.seal({}); // Sealed objects are non-extensible
             Object.isExtensible(sealedObject); // false

             var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
             Object.isExtensible(frozenObject); // false
 ```

264.    How do you define multiple properties on an object

             The `Object.defineProperties()` method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,

 ```js

        //
        const newObject = {};

             Object.defineProperties(newObject, {
                 newProperty1: {
                     value: 'John',
                     writable: true
                 },
                 newProperty2: {}
             });
 ```

265.    What is MEAN in javascript

        The MEAN (MongoDB, Express, AngularJS, and Node.js) stack is the most popular open-source JavaScript software tech stack available for building dynamic web apps where you can write both the server-side and client-side halves of the web project entirely in JavaScript.

266.    What Is Obfuscation in javascript

             Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. It is something similar to encryption, but a machine can understand the code and execute it.
             Let's see the below function before Obfuscation,

 ```js

        //
        function greeting() {
        console.log('Hello, welcome to JS world');
        }

  ```

             And after the code Obfuscation, it would be appeared as below,

 ```js

        //
        eval(
        (function (p, a, c, k, e, d) {
        e = function (c) {
        return c;
        };
        if (!''.replace(/^/, String)) {
        while (c--) {
        d[c] = k[c] || c;
        }
        k = [
        function (e) {
        return d[e];
        }
        ];
        e = function () {
        return '\\w+';
        };
        c = 1;
        }
        while (c--) {
        if (k[c]) {
        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        }
        }
        return p;
        })("2 1(){0.3('4, 7 6 5 8')}", 9, 9, 'console|greeting|function|log|Hello|JS|to|welcome|world'.split('|'), 0, {})
        );
  ```

267.    Why do you need Obfuscation

        Below are the few reasons for Obfuscation,

        1. The Code size will be reduced. So data transfers between server and client will be fast.
        2. It hides the business logic from outside world and protects the code from others
        3. Reverse engineering is highly difficult
        4. The download time will be reduced

268.    What is Minification

        Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .

269.    What are the advantages of minification

        Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,

        1. Decreases loading times of a web page
        2. Saves bandwidth usages

270.    What are the differences between Obfuscation and Encryption

        Below are the main differences between Obfuscation and Encryption,

        | Feature            | Obfuscation                                     | Encryption                                                              |
        | ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
        | Definition         | Changing the form of any data in any other form | Changing the form of information to an unreadable format by using a key |
        | A key to decode    | It can be decoded without any key               | It is required                                                          |
        | Target data format | It will be converted to a complex form          | Converted into an unreadable format                                     |

271.    What are the common tools used for minification

        There are many online/offline tools to minify the javascript files,

        1. Google's Closure Compiler
        2. UglifyJS2
        3. jsmin
        4. javascript-minifier.com/
        5. prettydiff.com

272.    How do you perform form validation using javascript

             JavaScript can be used to perform HTML form validation. For example, if the form field is empty, the function needs to notify, and return false, to prevent the form being submitted.
             Lets' perform user login in an html form,

 ```html
             <form name="myForm" onsubmit="return validateForm()" method="post">
                 User name: <input type="text" name="uname" />
                 <input type="submit" value="Submit" />
             </form>
 ```

             And the validation on user login is below,

 ```js

        //
        function validateForm() {
        var x = document.forms['myForm']['uname'].value;
        if (x == '') {
        alert("The username shouldn't be empty");
        return false;
        }
        }

  ```

  ```

273.    How do you perform form validation without javascript

        You can perform HTML form validation automatically without using javascript. The validation enabled by applying the `required` attribute to prevent form submission when the input is empty.

  ```html
        <form method="post">
            <input type="text" name="uname" required />
            <input type="submit" value="Submit" />
        </form>
  ```

        **Note:** Automatic form validation does not work in Internet Explorer 9 or earlier.

274.    What are the DOM methods available for constraint validation

             The below DOM methods are available for constraint validation on an invalid input,

             1. checkValidity(): It returns true if an input element contains valid data.
             2. setCustomValidity(): It is used to set the validationMessage property of an input element.
                Let's take an user login form with DOM validations

 ```js

        //
        function myFunction() {
        var userName = document.getElementById('uname');
        if (!userName.checkValidity()) {
        document.getElementById('message').innerHTML = userName.validationMessage;
        } else {
        document.getElementById('message').innerHTML = 'Entered a valid username';
        }
        }

  ```

  ```

275.    What are the available constraint validation DOM properties

        Below are the list of some of the constraint validation DOM properties available,

        1. validity: It provides a list of boolean properties related to the validity of an input element.
        2. validationMessage: It displays the message when the validity is false.
        3. willValidate: It indicates if an input element will be validated or not.

276.    What are the list of validity properties

        The validity property of an input element provides a set of properties related to the validity of data.

        1. customError: It returns true, if a custom validity message is set.
        2. patternMismatch: It returns true, if an element's value does not match its pattern attribute.
        3. rangeOverflow: It returns true, if an element's value is greater than its max attribute.
        4. rangeUnderflow: It returns true, if an element's value is less than its min attribute.
        5. stepMismatch: It returns true, if an element's value is invalid according to step attribute.
        6. tooLong: It returns true, if an element's value exceeds its maxLength attribute.
        7. typeMismatch: It returns true, if an element's value is invalid according to type attribute.
        8. valueMissing: It returns true, if an element with a required attribute has no value.
        9. valid: It returns true, if an element's value is valid.

277.    Give an example usage of rangeOverflow property

             If an element's value is greater than its max attribute then rangeOverflow property returns true. For example, the below form submission throws an error if the value is more than 100,

 ```html
             <input id="age" type="number" max="100" /> <button onclick="myOverflowFunction()">OK</button>
 ```

 ```js

        //
        function myOverflowFunction() {
        if (document.getElementById('age').validity.rangeOverflow) {
        alert('The mentioned age is not allowed');
        }
        }

  ```

  ```

278.    Is enums feature available in javascript

             No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,

 ```js

        //
        var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})

  ```

  ```

279.    What is an enum

             An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.

 ```js

        //
        enum Color {
        RED, GREEN, BLUE
        }

  ```

  ```

280.    How do you list all properties of an object

             You can use the `Object.getOwnPropertyNames()` method which returns an array of all properties found directly in a given object. Let's the usage of it in an example,

 ```js

        //
        const newObject = {
        a: 1,
        b: 2,
        c: 3
        };

             console.log(Object.getOwnPropertyNames(newObject));
             ['a', 'b', 'c'];
 ```

281.    How do you get property descriptors of an object

             You can use the `Object.getOwnPropertyDescriptors()` method which returns all own property descriptors of a given object. The example usage of this method is below,

 ```js

        //
        const newObject = {
        a: 1,
        b: 2,
        c: 3
        };
        const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
        console.log(descriptorsObject.a.writable); //true
        console.log(descriptorsObject.a.configurable); //true
        console.log(descriptorsObject.a.enumerable); //true
        console.log(descriptorsObject.a.value); // 1

  ```

  ```

282.    What are the attributes provided by a property descriptor

        A property descriptor is a record which has the following attributes

        1. value: The value associated with the property
        2. writable: Determines whether the value associated with the property can be changed or not
        3. configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
        4. enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
        5. set: A function which serves as a setter for the property
        6. get: A function which serves as a getter for the property

283.    How do you extend classes

             The `extends` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,

 ```js

        //
        class ChildClass extends ParentClass { ... }

  ```

             Let's take an example of Square subclass from Polygon parent class,

 ```js

        //
        class Square extends Rectangle {
        constructor(length) {
        super(length, length);
        this.name = 'Square';
        }

                 get area() {
                     return this.width * this.height;
                 }

                 set area(value) {
                     this.area = value;
                 }
             }
 ```

  ```

284.    How do I modify the url without reloading the page

             The `window.location.url` property will be helpful to modify the url but it reloads the page. HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

 ```js

        //
        window.history.pushState('page2', 'Title', '/page2.html');

  ```

  ```

285.    How do you check whether an array includes a particular value or not

             The `Array#includes()` method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.

 ```js

        //
        var numericArray = [1, 2, 3, 4];
        console.log(numericArray.includes(3)); // true

             var stringArray = ['green', 'yellow', 'blue'];
             console.log(stringArray.includes('blue')); //true
 ```

286.    How do you compare scalar arrays

             You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,

 ```js

        //
        const arrayFirst = [1, 2, 3, 4, 5];
        const arraySecond = [1, 2, 3, 4, 5];
        console.log(arrayFirst.length === arraySecond.length && arrayFirst.every((value, index) => value === arraySecond[index])); // true

  ```

             If you would like to compare arrays irrespective of order then you should sort them before,

 ```js

        //
        const arrayFirst = [2, 3, 1, 4, 5];
        const arraySecond = [1, 2, 3, 4, 5];
        console.log(arrayFirst.length === arraySecond.length && arrayFirst.sort().every((value, index) => value === arraySecond[index])); //true
  ```

287.    How to get the value from get parameters

             The `new URL()` object accepts the url string and `searchParams` property of this object can be used to access the get parameters. Remember that you may need to use polyfill or `window.location` to access the URL in older browsers(including IE).

 ```js

        //
        let urlString = 'http://www.some-domain.com/about.html?x=1&y=2&z=3'; //window.location.href
        let url = new URL(urlString);
        let parameterZ = url.searchParams.get('z');
        console.log(parameterZ); // 3

  ```

  ```

288.    How do you print numbers with commas as thousand separators

             You can use the `Number.prototype.toLocaleString()` method which returns a string with a language-sensitive representation such as thousand separator,currency etc of this number.

 ```js

        //
        function convertToThousandFormat(x) {
        return x.toLocaleString(); // 12,345.679
        }

             console.log(convertToThousandFormat(12345.6789));
 ```

289.    What is the difference between java and javascript

        Both are totally unrelated programming languages and no relation between them. Java is statically typed, compiled, runs on its own VM. Whereas Javascript is dynamically typed, interpreted, and runs in a browser and nodejs environments. Let's see the major differences in a tabular format,
        | Feature | Java | JavaScript |
        |---- | ---- | -----
        | Typed | It's a strongly typed language | It's a dynamic typed language |
        | Paradigm | Object oriented programming | Prototype based programming |
        | Scoping | Block scoped | Function-scoped |
        | Concurrency | Thread based | event based |
        | Memory | Uses more memory | Uses less memory. Hence it will be used for web pages |

290.    Does JavaScript supports namespace

             JavaScript doesn't support namespace by default. So if you create any element(function, method, object, variable) then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without any namespace,

 ```js

        //
        function func1() {
        console.log('This is a first definition');
        }
        function func1() {
        console.log('This is a second definition');
        }
        func1(); // This is a second definition

  ```

             It always calls the second function definition. In this case, namespace will solve the name collision problem.

  ```

291.    How do you declare namespace

             Even though JavaScript lacks namespaces, we can use Objects , IIFE to create namespaces.

             1. **Using Object Literal Notation:** Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation

 ```js

        //
        var namespaceOne = {
        function func1() {
        console.log("This is a first definition");
        }
        }
        var namespaceTwo = {
        function func1() {
        console.log("This is a second definition");
        }
        }
        namespaceOne.func1(); // This is a first definition
        namespaceTwo.func1(); // This is a second definition

  ```

             1. **Using IIFE (Immediately invoked function expression):** The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.

 ```js

        //
        (function () {
        function fun1() {
        console.log('This is a first definition');
        }
        fun1();
        })();

             (function () {
                 function fun1() {
                     console.log('This is a second definition');
                 }
                 fun1();
             })();
 ```

             1. **Using a block and a let/const declaration:** In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.

 ```js

        //
        {
        let myFunction = function fun1() {
        console.log('This is a first definition');
        };
        myFunction();
        }
        //myFunction(): ReferenceError: myFunction is not defined.

             {
                 let myFunction = function fun1() {
                     console.log('This is a second definition');
                 };
                 myFunction();
             }
             //myFunction(): ReferenceError: myFunction is not defined.
 ```

  ```

292.    How do you invoke javascript code in an iframe from parent page

             Initially iFrame needs to be accessed using either `document.getElementBy` or `window.frames`. After that `contentWindow` property of iFrame gives the access for targetFunction

 ```js

        //
        document.getElementById('targetFrame').contentWindow.targetFunction();
        window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox

  ```

  ```

293.    How do get the timezone offset from date

             You can use the `getTimezoneOffset` method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC

 ```js

        //
        var offset = new Date().getTimezoneOffset();
        console.log(offset); // -480

  ```

  ```

294.    How do you load CSS and JS files dynamically

             You can create both link and script elements in the DOM and append them as child to head tag. Let's create a function to add script and style resources as below,

 ```js

        //
        function loadAssets(filename, filetype) {
        if (filetype == 'css') {
        // External CSS file
        var fileReference = document.createElement('link');
        fileReference.setAttribute('rel', 'stylesheet');
        fileReference.setAttribute('type', 'text/css');
        fileReference.setAttribute('href', filename);
        } else if (filetype == 'js') {
        // External JavaScript file
        var fileReference = document.createElement('script');
        fileReference.setAttribute('type', 'text/javascript');
        fileReference.setAttribute('src', filename);
        }
        if (typeof fileReference != 'undefined') document.getElementsByTagName['head'](0).appendChild(fileReference);
        }

  ```

  ```

295.    What are the different methods to find HTML elements in DOM

        If you want to access any element in an HTML page, you need to start with accessing the document object. Later you can use any of the below methods to find the HTML element,

        1. document.getElementById(id): It finds an element by Id
        2. document.getElementsByTagName(name): It finds an element by tag name
        3. document.getElementsByClassName(name): It finds an element by class name

296.    What is jQuery

             jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. It is widely famous with its philosophy of "Write less, do more". For example, you can display welcome message on the page load using jQuery as below,

 ```js

        //
        $(document).ready(function () {
        // It selects the document and apply the function on page load
        alert('Welcome to jQuery world');
        });

  ```

             **Note:** You can download it from jquery's official site or install it from CDNs, like google.

  ```

297.    What is V8 JavaScript engine

        V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
        **Note:** It can run standalone, or can be embedded into any C++ application.

298.    Why do we call javascript as dynamic language

             JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.

 ```js

        //
        let age = 50; // age is a number now
        age = 'old'; // age is a string now
        age = true; // age is a boolean

  ```

  ```

299.    What is a void operator

             The `void` operator evaluates the given expression and then returns undefined(i.e, without returning value). The syntax would be as below,

 ```js

        //
        void expression;
        void expression;

  ```

             Let's display a message without any redirection or reload

 ```js

        //
        <a href="javascript:void(alert('Welcome to JS world'))">Click here to see a message</a>
  ```

             **Note:** This operator is often used to obtain the undefined primitive value, using "void(0)".

300.    How to set the cursor to wait

             The cursor can be set to wait in JavaScript by using the property "cursor". Let's perform this behavior on page load using the below function.

 ```js

        //
        function myFunction() {
        window.document.body.style.cursor = 'wait';
        }

  ```

             and this function invoked on page load

 ```html
             <body onload="myFunction()">

        </body>
 ```

  ```

301.    How do you create an infinite loop

             You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,

 ```js

        //
        for (;;) {}
        while (true) {}

  ```

  ```

302.    Why do you need to avoid with statement

             JavaScript's with statement was intended to provide a shorthand for writing recurring accesses to objects. So it can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. Let's take an example where it is used to avoid redundancy when accessing an object several times.

 ```js

        //
        a.b.c.greeting = 'welcome';
        a.b.c.age = 32;

  ```

             Using `with` it turns this into:

 ```js

        //
        with (a.b.c) {
        greeting = 'welcome';
        age = 32;
        }
  ```

             But this `with` statement creates performance problems since one cannot predict whether an argument will refer to a real variable or to a property inside the with argument.

303.    What is the output of below for loops

 ```js

        //
        for (var i = 0; i < 4; i++) {
        // global scope
        setTimeout(() => console.log(i));
        }

             for (let i = 0; i < 4; i++) {
                 // block scope
                 setTimeout(() => console.log(i));
             }
 ```

             The output of the above for loops is 4 4 4 4 and 0 1 2 3

             **Explanation:** Due to the event queue/loop of javascript, the `setTimeout` callback function is called after the loop has been executed. Since the variable i is declared with the `var` keyword it became a global variable and the value was equal to 4 using iteration when the time `setTimeout` function is invoked. Hence, the output of the first loop is `4 4 4 4`.

             Whereas in the second loop, the variable i is declared as the `let` keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is `0 1 2 3`.

304.    List down some of the features of ES6

        Below are the list of some new features of ES6,

        1. Support for constants or immutable variables
        2. Block-scope support for variables, constants and functions
        3. Arrow functions
        4. Default parameters
        5. Rest and Spread Parameters
        6. Template Literals
        7. Multi-line Strings
        8. Destructuring Assignment
        9. Enhanced Object Literals
        10. Promises
        11. Classes
        12. Modules

305.    What is ES6

        ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

306.    Can I redeclare let and const variables

             No, you cannot redeclare let and const variables. If you do, it throws below error

 ```bash
             Uncaught SyntaxError: Identifier 'someVariable' has already been declared
 ```

             **Explanation:** The variable declaration with `var` keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

 ```js

        //
        var name = 'John';
        function myFunc() {
        var name = 'Nick';
        var name = 'Abraham'; // Re-assigned in the same function block
        alert(name); // Abraham
        }
        myFunc();
        alert(name); // John

  ```

             The block-scoped multi-declaration throws syntax error,

 ```js

        //
        let name = 'John';
        function myFunc() {
        let name = 'Nick';
        let name = 'Abraham'; // Uncaught SyntaxError: Identifier 'name' has already been declared
        alert(name);
        }

             myFunc();
             alert(name);
 ```

  ```

307.    Is const variable makes the value immutable

             No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

 ```js

        //
        const userList = [];
        userList.push('John'); // Can mutate even though it can't re-assign
        console.log(userList); // ['John']

  ```

  ```

308.    What are default parameters

             In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

 ```js

        //
        //ES5
        var calculateArea = function (height, width) {
        height = height || 50;
        width = width || 60;

                 return width * height;
             };
             console.log(calculateArea()); //300
 ```

             The default parameters makes the initialization more simpler,

 ```js

        //
        //ES6
        var calculateArea = function (height = 50, width = 60) {
        return width \* height;
        };

             console.log(calculateArea()); //300
 ```

309.    What are template literals

             Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes.
             In E6, this feature enables using dynamic expressions as below,

 ```js

        //
        var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;

  ```

             In ES5, you need break string like below,

 ```js

        //
        var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
  ```

             **Note:** You can use multi-line strings and string interpolation features with template literals.

310.    How do you write multi-line strings in template literals

             In ES5, you would have to use newline escape characters('\\n') and concatenation symbols(+) in order to get multi-line strings.

 ```js

        //
        console.log('This is string sentence 1\n' + 'This is string sentence 2');

  ```

             Whereas in ES6, You don't need to mention any newline sequence character,

 ```js

        //
        console.log(`This is string sentence 'This is string sentence 2`);
  ```

311.    What are nesting templates

             The nesting template is a feature supported within template literals syntax to allow inner backticks inside a placeholder ${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,

 ```js

        //
        const iconStyles = `icon ${isMobilePlatform() ? '' :`icon-${user.isAuthorized ? 'submit' : 'disabled'}`}`;

  ```

             You can write the above use case without nesting template features as well. However, the nesting template feature is more compact and readable.

 ```js

        //
        //Without nesting templates
        const iconStyles = `icon ${ isMobilePlatform() ? '' : (user.isAuthorized ? 'icon-submit' : 'icon-disabled'}`;
  ```

312.    What are tagged templates

             Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function. The tag function accepts the first parameter as an array of strings and remaining parameters as expressions. This function can also return manipulated strings based on parameters. Let's see the usage of this tagged template behavior of an IT professional skill set in an organization,

 ```js

        //
        var user1 = 'John';
        var skill1 = 'JavaScript';
        var experience1 = 15;

             var user2 = 'Kane';
             var skill2 = 'JavaScript';
             var experience2 = 5;

             function myInfoTag(strings, userExp, experienceExp, skillExp) {
               var str0 = strings[0]; // "Mr/Ms. "
               var str1 = strings[1]; // " is a/an "
               var str2 = strings[2]; // "in"

               var expertiseStr;
               if (experienceExp > 10){
                 expertiseStr = 'expert developer';
               } else if(skillExp > 5 && skillExp <= 10) {
                 expertiseStr = 'senior developer';
               } else {
                 expertiseStr = 'junior developer';
               }

               return ${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp};
             }

             var output1 = myInfoTag`Mr/Ms. ${ user1 } is a/an ${ experience1 } in ${skill1}`;
             var output2 = myInfoTag`Mr/Ms. ${ user2 } is a/an ${ experience2 } in ${skill2}`;

             console.log(output1);// Mr/Ms. John is a/an expert developer in JavaScript
             console.log(output2);// Mr/Ms. Kane is a/an junior developer in JavaScript
 ```

313.    What are raw strings

             ES6 provides a raw strings feature using the `String.raw()` method which is used to get the raw string form of template strings. This feature allows you to access the raw strings as they were entered, without processing escape sequences. For example, the usage would be as below,

 ```js

        //
        var calculationString = String.raw`The sum of numbers is \n${1 + 2 + 3 + 4}!`;
        console.log(calculationString); // The sum of numbers is 10

  ```

             If you don't use raw strings, the newline character sequence will be processed by displaying the output in multiple lines

 ```js

        //
        var calculationString = `The sum of numbers is \n${1 + 2 + 3 + 4}!`;
        console.log(calculationString);
        // The sum of numbers is
        // 10
  ```

             Also, the raw property is available on the first argument to the tag function

 ```js

        //
        function tag(strings) {
        console.log(strings.raw[0]);
        }

  ```

  ```

314.    What is destructuring assignment

             The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
             Let's get the month values from an array using destructuring assignment

 ```js

        //
        var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

             console.log(one); // "JAN"
             console.log(two); // "FEB"
             console.log(three); // "MARCH"
 ```

             and you can get user properties of an object using destructuring assignment,

 ```js

        //
        var { name, age } = { name: 'John', age: 32 };

             console.log(name); // John
             console.log(age); // 32
 ```

315.    What are default values in destructuring assignment

             A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

             **Arrays destructuring:**

 ```js

        //
        var x, y, z;

             [x = 2, y = 4, z = 6] = [10];
             console.log(x); // 10
             console.log(y); // 4
             console.log(z); // 6
 ```

             **Objects destructuring:**

 ```js

        //
        var { x = 2, y = 4, z = 6 } = { x: 10 };

             console.log(x); // 10
             console.log(y); // 4
             console.log(z); // 6
 ```

316.    How do you swap variables in destructuring assignment

             If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,

 ```js

        //
        var x = 10,
        y = 20;

             [x, y] = [y, x];
             console.log(x); // 20
             console.log(y); // 10
 ```

317.    What are enhanced object literals

             Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

 ```js

        //
        //ES6
        var x = 10,
        y = 20;
        obj = { x, y };
        console.log(obj); // {x: 10, y:20}
        //ES5
        var x = 10,
        y = 20;
        obj = { x: x, y: y };
        console.log(obj); // {x: 10, y:20}

  ```

  ```

318.    What are dynamic imports

             The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.
             The syntax of dynamic imports would be as below,

 ```js

        //
        import('./Module').then((Module) => Module.method());

  ```

  ```

319.    What are the use cases for dynamic imports

             Below are some of the use cases of using dynamic imports over static imports,

             1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

 ```js

        //
        if (isLegacyBrowser()) {
        import(···)
        .then(···);
        }

  ```

             1. Compute the module specifier at runtime. For example, you can use it for internationalization.

 ```js

        //
        import(`messages_${getLocale()}.js`).then(···);
  ```

             1. Import a module from within a regular script instead a module.

320.    What are typed arrays

             Typed arrays are array-like objects from ECMAScript 6 API for handling binary data. JavaScript provides 8 Typed array types,

             1. Int8Array: An array of 8-bit signed integers
             2. Int16Array: An array of 16-bit signed integers
             3. Int32Array: An array of 32-bit signed integers
             4. Uint8Array: An array of 8-bit unsigned integers
             5. Uint16Array: An array of 16-bit unsigned integers
             6. Uint32Array: An array of 32-bit unsigned integers
             7. Float32Array: An array of 32-bit floating point numbers
             8. Float64Array: An array of 64-bit floating point numbers

             For example, you can create an array of 8-bit signed integers as below

 ```js

        //
        const a = new Int8Array();
        // You can pre-allocate n bytes
        const bytes = 1024;
        const a = new Int8Array(bytes);

  ```

  ```

321.    What are the advantages of module loaders

        The module loaders provides the below features,

        1. Dynamic loading
        2. State isolation
        3. Global namespace isolation
        4. Compilation hooks
        5. Nested virtualization

322.    What is collation

             Collation is used for sorting a set of strings and searching within a set of strings. It is parameterized by locale and aware of Unicode. Let's take comparison and sorting features,

             1. **Comparison:**

 ```js

        //
        var list = ['ä', 'a', 'z']; // In German, "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
        var l10nDE = new Intl.Collator('de');
        var l10nSV = new Intl.Collator('sv');
        console.log(l10nDE.compare('ä', 'z') === -1); // true
        console.log(l10nSV.compare('ä', 'z') === +1); // true

  ```

             1. **Sorting:**

 ```js

        //
        var list = ['ä', 'a', 'z']; // In German, "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
        var l10nDE = new Intl.Collator('de');
        var l10nSV = new Intl.Collator('sv');
        console.log(list.sort(l10nDE.compare)); // [ "a", "ä", "z" ]
        console.log(list.sort(l10nSV.compare)); // [ "a", "z", "ä" ]
  ```

323.    What is for...of statement

             The for...of statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of for...of statement on arrays would be as below,

 ```js

        //
        let arrayIterable = [10, 20, 30, 40, 50];

             for (let value of arrayIterable) {
                 value++;
                 console.log(value); // 11 21 31 41 51
             }
 ```

324.    What is the output of below spread operator array

 ```js

        //
        [...'John Resig'];

  ```

             The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g']
             **Explanation:** The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

  ```

325.    Is PostMessage secure

        Yes, postMessages can be considered very secure as long as the programmer/developer is careful about checking the origin and source of an arriving message. But if you try to send/receive a message without verifying its source will create cross-site scripting attacks.

326.    What are the problems with postmessage target origin as wildcard

             The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard "\*" as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.

 ```js

        //
        targetWindow.postMessage(message, '\*');

  ```

  ```

327.    How do you avoid receiving postMessages from attackers

             Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker's origin, which gives an impression that the receiver received the message from the actual sender's window. You can avoid this issue by validating the origin of the message on the receiver's end using the "message.origin" attribute. For examples, let's check the sender's origin [http://www.some-sender.com](http://www.some-sender.com) on receiver side [www.some-receiver.com](www.some-receiver.com),

 ```js

        //
        //Listener on <http://www.some-receiver.com/>
        window.addEventListener("message", function(message){
        if(/^http://www\.some-sender\.com$/.test(message.origin)){
        console.log('You received the data from valid sender', message.data);
        }
        });

  ```

  ```

328.    Can I avoid using postMessages completely

        You cannot avoid using postMessages completely(or 100%). Even though your application doesn't use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.

329.    Is postMessages synchronous

        The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned.

330.    What paradigm is Javascript

        JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.

331.    What is the difference between internal and external javascript

        **Internal JavaScript:** It is the source code within the script tag.
        **External JavaScript:** The source code is stored in an external file(stored with .js extension) and referred with in the tag.

332.    Is JavaScript faster than server side script

        Yes, JavaScript is faster than server side script. Because JavaScript is a client-side script it does not require any web server's help for its computation or calculation. So JavaScript is always faster than any server-side script like ASP, PHP, etc.

333.    How do you get the status of a checkbox

             You can apply the `checked` property on the selected checkbox in the DOM. If the value is `True` means the checkbox is checked otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below,

 ```html
             <input type="checkbox" name="checkboxname" value="Agree" /> Agree the conditions<br />
 ```

 ```js

        //
        console.log(document.getElementById('checkboxname').checked); // true or false

  ```

  ```

334.    What is the purpose of double tilde operator

        The double tilde operator(~~) is known as double NOT bitwise operator. This operator is going to be a quicker substitute for Math.floor().

335.    How do you convert character to ASCII code

             You can use the `String.prototype.charCodeAt()` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,

 ```js

        //
        'ABC'.charCodeAt(0); // returns 65

  ```

             Whereas `String.fromCharCode()` method converts numbers to equal ASCII characters.

 ```js

        //
        String.fromCharCode(65, 66, 67); // returns 'ABC'
  ```

336.    What is ArrayBuffer

             An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,

 ```js

        //
        let buffer = new ArrayBuffer(16); // create a buffer of length 16
        alert(buffer.byteLength); // 16

  ```

             To manipulate an ArrayBuffer, we need to use a "view" object.

 ```js

        //
        //Create a DataView referring to the buffer
        let view = new DataView(buffer);
  ```

337.    What is the output of below string expression

 ```js

        //
        console.log('Welcome to JS world'[0]);

  ```

             The output of the above expression is "W".
             **Explanation:** The bracket notation with specific index on a string returns the character at a specific location. Hence, it returns the character "W" of the string. Since this is not supported in IE7 and below versions, you may need to use the .charAt() method to get the desired result.

  ```

338.    What is the purpose of Error object

             The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,

 ```js

        //
        new Error([message[, fileName[, lineNumber]]])

  ```

             You can throw user defined exceptions or errors using Error object in try...catch block as below,

 ```js

        //
        try {
        if (withdraw > balance) throw new Error("Oops! You don't have enough balance");
        } catch (e) {
        console.log(e.name + ': ' + e.message);
        }
  ```

339.    What is the purpose of EvalError object

             The EvalError object indicates an error regarding the global `eval()` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,

 ```js

        //
        new EvalError([message[, fileName[, lineNumber]]])

  ```

             You can throw EvalError with in try...catch block as below,

 ```js

        //
        try {
        throw new EvalError('Eval function error', 'someFile.js', 100);
        } catch (e) {
        console.log(e.message, e.name, e.fileName); // "Eval function error", "EvalError", "someFile.js"
  ```

340.    What are the list of cases error thrown from non-strict mode to strict mode

             When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script

             1. When you use Octal syntax

 ```js

        //
        var n = 022;

  ```

             1. Using `with` statement
             2. When you use delete operator on a variable name
             3. Using eval or arguments as variable or function argument name
             4. When you use newly reserved keywords
             5. When you declare a function in a block

 ```js

        //
        if (someCondition) {
        function f() {}
        }
  ```

             Hence, the errors from above cases are helpful to avoid errors in development/production environments.

341.    Do all objects have prototypes

        No. All objects have prototypes except for the base object which is created by the user, or an object that is created using the new keyword.

342.    What is the difference between a parameter and an argument

             Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function

 ```js

        //
        function myFunction(parameter1, parameter2, parameter3) {
        console.log(arguments[0]); // "argument1"
        console.log(arguments[1]); // "argument2"
        console.log(arguments[2]); // "argument3"
        }
        myFunction('argument1', 'argument2', 'argument3');

  ```

  ```

343.    What is the purpose of some method in arrays

             The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

 ```js

        //
        var array = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

             var odd = element ==> element % 2 !== 0;

             console.log(array.some(odd)); // true (the odd element exists)
 ```

344.    How do you combine two or more arrays

             The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,

 ```js

        //
        array1.concat(array2, array3, ..., arrayX)

  ```

             Let's take an example of array's concatenation with veggies and fruits arrays,

 ```js

        //
        var veggies = ['Tomato', 'Carrot', 'Cabbage'];
        var fruits = ['Apple', 'Orange', 'Pears'];
        var veggiesAndFruits = veggies.concat(fruits);
        console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
  ```

345.    What is the difference between Shallow and Deep copy

             There are two ways to copy an object,

             **Shallow Copy:**
             Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

             **Example**

 ```js

        //
        var empDetails = {
        name: 'John',
        age: 25,
        expertise: 'Software Developer'
        };

  ```

             to create a duplicate

 ```js

        //
        var empDetailsShallowCopy = empDetails; //Shallow copying!
  ```

             if we change some property value in the duplicate one like this:

 ```js

        //
        empDetailsShallowCopy.name = 'Johnson';

  ```

             The above statement will also change the name of `empDetails`, since we have a shallow copy. That means we're losing the original data as well.

             **Deep copy:**
             A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

             **Example**

 ```js

        //
        var empDetails = {
        name: 'John',
        age: 25,
        expertise: 'Software Developer'
        };
  ```

             Create a deep copy by using the properties from the original object into new variable

 ```js

        //
        var empDetailsDeepCopy = {
        name: empDetails.name,
        age: empDetails.age,
        expertise: empDetails.expertise
        };

  ```

             Now if you change `empDetailsDeepCopy.name`, it will only affect `empDetailsDeepCopy` & not `empDetails`

  ```

346.    How do you create specific number of copies of a string

             The `repeat()` method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification.
             Let's take an example of Hello string to repeat it 4 times,

 ```js

        //
        'Hello'.repeat(4); // 'HelloHelloHelloHello'

  ```

  ```

347.    How do you return all matching strings against a regular expression

             The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,

 ```js

        //
        let regexp = /Hello(\d?))/g;
        let greeting = 'Hello1Hello2Hello3';

             let greetingList = [...greeting.matchAll(regexp)];

             console.log(greetingList[0]); //Hello1
             console.log(greetingList[1]); //Hello2
             console.log(greetingList[2]); //Hello3
 ```

348.    How do you trim a string at the beginning or ending

             The `trim` method of string prototype is used to trim on both sides of a string. But if you want to trim especially at the beginning or ending of the string then you can use `trimStart/trimLeft` and `trimEnd/trimRight` methods. Let's see an example of these methods on a greeting message,

 ```js

        //
        var greeting = ' Hello, Goodmorning! ';

             console.log(greeting); // "   Hello, Goodmorning!   "
             console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
             console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

             console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
             console.log(greeting.trimRight()); // "   Hello, Goodmorning!"
 ```

349.    What is the output of below console statement with unary operator

             Let's take console statement with unary operator as given below,

 ```js

        //
        console.log(+'Hello');

  ```

             The output of the above console log statement returns NaN. Because the element is prefixed by the unary operator and the JavaScript interpreter will try to convert that element into a number type. Since the conversion fails, the value of the statement results in NaN value.

  ```

350.    Does javascript uses mixins

351.    What is a thunk function

             A thunk is just a function which delays the evaluation of the value. It doesn't take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

 ```js

        //
        const add = (x, y) => x + y;

             const thunk = () => add(2, 3);

             thunk(); // 5
 ```

352.    What are asynchronous thunks

             The asynchronous thunks are useful to make network requests. Let's see an example of network requests,

 ```js

        //
        function fetchData(fn) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => fn(json));
        }

             const asyncThunk = function () {
                 return fetchData(function getData(data) {
                     console.log(data);
                 });
             };

             asyncThunk();
 ```

             The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

353.    What is the output of below function calls

             **Code snippet:**

 ```js

        //
        const circle = {
        radius: 20,
        diameter() {
        return this.radius _2;
        },
perimeter: () => 2_ Math.PI \* this.radius
        };

  ```

             console.log(circle.diameter());
             console.log(circle.perimeter());

             **Output:**

             The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The `this` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.

  ```

354.    How to remove all line breaks from a string

             The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.

 ```js

        //
        function remove_linebreaks( var message ) {
        return message.replace( /[\r\n]+/gm, "" );
        }

  ```

             In the above expression, g and m are for global and multiline flags.

  ```

355.    What is the difference between reflow and repaint

        A _repaint_ occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A _reflow_ involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

356.    What happens with negating an array

             Negating an array with `!` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return `false`.

 ```js

        //
        console.log(![alt-text]); // false

  ```

  ```

357.    What happens if we add two arrays

             If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

 ```js

        //
        console.log(['a'] + ['b']); // "ab"
        console.log([] + []); // ""
        console.log(![alt-text] + []); // "false", because ![alt-text] returns false.

  ```

  ```

358.    What is the output of prepend additive operator on falsy values

             If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on browser console as below,

 ```js

        //
        console.log(+null); // 0
        console.log(+undefined); // NaN
        console.log(+false); // 0
        console.log(+NaN); // NaN
        console.log(+''); // 0

  ```

  ```

359.    How do you create self string using special characters

             The self string can be formed with the combination of `[]()!+` characters. You need to remember the below conventions to achieve this pattern.

             1. Since Arrays are truthful values, negating the arrays will produce false: ![alt-text] === false
             2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
             3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

             By applying the above rules, we can derive below conditions

 ```js

        //
        (![alt-text] + [] === 'false' + !+[]) === 1;

  ```

             Now the character pattern would be created as below,

 ```js

        //
        s e l f
        ^^^^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^^^^^^

              (![alt-text] + [])[3] + (![alt-text] + [])[4] + (![alt-text] + [])[2] + (![alt-text] + [])[0]
              ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
             (![alt-text] + [])[+!+[]+!+[]+!+[]] +
             (![alt-text] + [])[+!+[]+!+[]+!+[]+!+[]] +
             (![alt-text] + [])[+!+[]+!+[]] +
             (![alt-text] + [])[+[]]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
             (![alt-text]+[])[+!+[]+!+[]+!+[]]+(![alt-text]+[])[+!+[]+!+[]+!+[]+!+[]]+(![alt-text]+[])[+!+[]+!+[]]+(![alt-text]+[])[+[]]
 ```

  ```

360.    How do you remove falsy values from an array

             You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

 ```js

        //
        const myArray = [false, null, 1, 5, undefined];
        myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);

  ```

  ```

361.    How do you get unique values of an array

             You can get unique values of an array with the combination of `Set` and rest expression/spread(...) syntax.

 ```js

        //
        console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]

  ```

  ```

362.    What is destructuring aliases

             Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.

 ```js

        //
        const obj = { x: 1 };
        // Grabs obj.x as as { otherName }
        const { x: otherName } = obj;

  ```

  ```

363.    How do you map the array values without using map method

             You can map the array values without using the `map` method by just using the `from` method of Array. Let's map city names from Countries array,

 ```js

        //
        const countries = [
        { name: 'India', capital: 'Delhi' },
        { name: 'US', capital: 'Washington' },
        { name: 'Russia', capital: 'Moscow' },
        { name: 'Singapore', capital: 'Singapore' },
        { name: 'China', capital: 'Beijing' },
        { name: 'France', capital: 'Paris' }
        ];

             const cityNames = Array.from(countries, ({ capital }) => capital);
             console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
 ```

364.    How do you empty an array

             You can empty an array quickly by setting the array length to zero.

 ```js

        //
        let cities = ['Singapore', 'Delhi', 'London'];
        cities.length = 0; // cities becomes []

  ```

  ```

365.    How do you rounding numbers to certain decimals

             You can round numbers to a certain number of decimals using `toFixed` method from native javascript.

 ```js

        //
        let pie = 3.141592653;
        pie = pie.toFixed(3); // 3.142

  ```

  ```

366.    What is the easiest way to convert an array to an object

             You can convert an array to an object with the same data using spread(...) operator.

 ```js

        //
        var fruits = ['banana', 'apple', 'orange', 'watermelon'];
        var fruitsObject = { ...fruits };
        console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

  ```

  ```

367.    How do you create an array with some data

             You can create an array with some data or an array with the same values using `fill` method.

 ```js

        //
        var newArray = new Array(5).fill('0');
        console.log(newArray); // ["0", "0", "0", "0", "0"]

  ```

  ```

368.    What are the placeholders from console object

             Below are the list of placeholders available from console object,

             1. %o — It takes an object,
             2. %s — It takes a string,
             3. %d — It is used for a decimal or integer
                These placeholders can be represented in the console.log as below

 ```js

        //
        const user = { name: 'John', id: 1, city: 'Delhi' };
        console.log('Hello %s, your details %o are available in the object form', 'John', user); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object

  ```

  ```

369.    Is it possible to add CSS to console messages

             Yes, you can apply CSS styles to console messages similar to html text on the web page.

 ```js

        //
        console.log('%c The text has blue color, with large font and red background', 'color: blue; font-size: x-large; background: red');

  ```

             The text will be displayed as below,
             ![Screenshot](images/console-css.png)

             **Note:** All CSS styles can be applied to console messages.

  ```

370.    What is the purpose of dir method of console object

             The `console.dir()` is used to display an interactive list of the properties of the specified JavaScript object as JSON.

 ```js

        //
        const user = { name: 'John', id: 1, city: 'Delhi' };
        console.dir(user);

  ```

             The user object displayed in JSON representation
             ![Screenshot](images/console-dir.png)

  ```

371.    Is it possible to debug HTML elements in console

             Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

 ```js

        //
        const element = document.getElementsByTagName['body'](0);
        console.log(element);

  ```

             It prints the HTML element in the console,

             ![Screenshot](images/console-html.png)

  ```

372.    How do you display data in a tabular format using console object

             The `console.table()` is used to display data in the console in a tabular format to visualize complex arrays or objects.

 ```js

        //
        const users = [
        { name: 'John', id: 1, city: 'Delhi' },
        { name: 'Max', id: 2, city: 'London' },
        { name: 'Rod', id: 3, city: 'Paris' }
        ];
        console.table(users);

  ```

             The data visualized in a table format,

             ![Screenshot](images/console-table.png)
             **Not:** Remember that `console.table()` is not supported in IE.

  ```

373.    How do you verify that an argument is a Number or not

             The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

 ```js

        //
        function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
        }

  ```

  ```

374.    How do you create copy to clipboard button

             You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.

 ```js

        //
        document.querySelector('#copy-button').onclick = function () {
        // Select the content
        document.querySelector('#copy-input').select();
        // Copy to the clipboard
        document.execCommand('copy');
        };

  ```

  ```

375.    What is the shortcut to get timestamp

             You can use `new Date().getTime()` to get the current timestamp. There is an alternative shortcut to get the value.

 ```js

        //
        console.log(+new Date());
        console.log(Date.now());

  ```

  ```

376.    How do you flattening multi dimensional arrays

             Flattening bi-dimensional arrays is trivial with Spread operator.

 ```js

        //
        const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
        const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]

  ```

             But you can make it work with multi-dimensional arrays by recursive calls,

 ```js

        //
        function flattenMultiArray(arr) {
        const flattened = [].concat(...arr);
        return flattened.some((item) => Array.isArray(item)) ? flattenMultiArray(flattened) : flattened;
        }
        const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
        const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
  ```

377.    What is the easiest multi condition checking

             You can use `indexOf` to compare input with multiple values instead of checking each value as one condition.

 ```js

        //
        // Verbose approach
        if (input === 'first' || input === 1 || input === 'second' || input === 2) {
        someFunction();
        }
        // Shortcut
        if (['first', 1, 'second', 2].indexOf(input) !== -1) {
        someFunction();
        }

  ```

  ```

378.    How do you capture browser back button

             The `window.onbeforeunload` method is used to capture browser back button events. This is helpful to warn users about losing the current data.

 ```js

        //
        window.onbeforeunload = function () {
        alert('You work will be lost');
        };

  ```

  ```

379.    How do you disable right click in the web page

             The right click on the page can be disabled by returning false from the `oncontextmenu` attribute on the body element.

 ```html
             <body oncontextmenu="return false;">

        </body>
 ```

380.    What are wrapper objects

             Primitive Values like string,number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.

 ```js

        //
        let name = 'john';

             console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
 ```

             i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String,Number,Boolean,Symbol and BigInt.

381.    What is AJAX

        AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.

382.    What are the different ways to deal with Asynchronous Code

        Below are the list of different ways to deal with Asynchronous code.

        1. Callbacks
        2. Promises
        3. Async/await
        4. Third-party libraries such as async.js,bluebird etc

383.    How to cancel a fetch request

             Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request. But the new `AbortController` from js specification allows you to use a signal to abort one or multiple fetch calls.
             The basic flow of cancelling a fetch request would be as below,

             1. Create an `AbortController` instance
             2. Get the signal property of an instance and pass the signal as a fetch option for signal
             3. Call the AbortController's abort property to cancel all fetches that use that signal
                For example, let's pass the same signal to multiple fetch calls will cancel all requests with that signal,

 ```js

        //
        const controller = new AbortController();
        const { signal } = controller;

             fetch('http://localhost:8000', { signal })
                 .then((response) => {
                     console.log(`Request 1 is complete!`);
                 })
                 .catch((e) => {
                     if (e.name === 'AbortError') {
                         // We know it's been canceled!
                     }
                 });

             fetch('http://localhost:8000', { signal })
                 .then((response) => {
                     console.log(`Request 2 is complete!`);
                 })
                 .catch((e) => {
                     if (e.name === 'AbortError') {
                         // We know it's been canceled!
                     }
                 });

             // Wait 2 seconds to abort both requests
             setTimeout(() => controller.abort(), 2000);
 ```

384.    What is web speech API

             Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). This API has been introduced by W3C Community in the year 2012. It has two main parts,

             1. **SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text):** It provides the ability to recognize voice context from an audio input and respond accordingly. This is accessed by the `SpeechRecognition` interface.
                The below example shows on how to use this API to get text from speech,

 ```js

        //
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
        // SpeechRecognitionEvent type
        const speechToText = event.results[0][0].transcript;
        console.log(speechToText);
        };
        recognition.start();

  ```

             In this API, browser is going to ask you for permission to use your microphone

             1. **SpeechSynthesis (Text-to-Speech):** It provides the ability to recognize voice context from an audio input and respond. This is accessed by the `SpeechSynthesis` interface.
                For example, the below code is used to get voice/speech from text,

 ```js

        //
        if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance('Hello World!');
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
        }
  ```

             The above examples can be tested on chrome(33+) browser's developer console.
             **Note:** This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)

385.    What is minimum timeout throttling

             Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.
             **Browsers:** They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
             Note: The older browsers have a minimum delay of 10ms.
             **Nodejs:** They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.
             The best example to explain this timeout throttling behavior is the order of below code snippet.

 ```js

        //
        function runMeFirst() {
        console.log('My script is initialized');
        }
        setTimeout(runMeFirst, 0);
        console.log('Script loaded');

  ```

             and the output would be in

 ```bash
             Script loaded
             My script is initialized
 ```

             If you don't use `setTimeout`, the order of logs will be sequential.

 ```js

        //
        function runMeFirst() {
        console.log('My script is initialized');
        }
        runMeFirst();
        console.log('Script loaded');
  ```

             and the output is,

 ```bash
             My script is initialized
             Script loaded
 ```

386.    How do you implement zero timeout in modern browsers

        You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.

387.    What are tasks in event loop

        A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.
        Below are the list of use cases to add tasks to the task queue,

        1. When a new javascript program is executed directly from console or running by the `<script>` element, the task will be added to the task queue.
        2. When an event fires, the event callback added to task queue
        3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

388.    What is microtask

        Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty.
        The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

        **Note:** All of these microtasks are processed in the same turn of the event loop.

389.    What are different event loops

390.    What is the purpose of queueMicrotask

391.    How do you use javascript libraries in typescript file

             It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in our TypeScript files without getting compilation errors, the only solution is `declare` keyword along with a variable declaration. For example, let's imagine you have a library called `customLibrary` that doesn't have a TypeScript declaration and have a namespace called `customLibrary` in the global namespace. You can use this library in typescript code as below,

 ```js

        //
        declare var customLibrary;

  ```

             In the runtime, typescript will provide the type to the `customLibrary` variable as `any` type. The another alternative without using declare keyword is below

 ```js

        //
        var customLibrary: any;
  ```

392.    What are the differences between promises and observables

        Some of the major difference in a tabular form

        | Promises                                                           | Observables                                                                              |
        | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
        | Emits only a single value at a time                                | Emits multiple values over a period of time(stream of values ranging from 0 to multiple) |
        | Eager in nature; they are going to be called immediately           | Lazy in nature; they require subscription to be invoked                                  |
        | Promise is always asynchronous even though it resolved immediately | Observable can be either synchronous or asynchronous                                     |
        | Doesn't provide any operators                                      | Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc        |
        | Cannot be canceled                                                 | Canceled by using unsubscribe() method                                                   |

393.    What is heap

        Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime.
        Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

        ![Screenshot](images/heap.png)

394.    What is an event table

        Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.
        It doesn't not execute functions on it's own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.

        ![Screenshot](images/event-table.png)

395.    What is a microTask queue

        Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.
        The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

396.    What is the difference between shim and polyfill

        A shim is a library that brings a new API to an older environment, using only the means of that environment. It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).
        Whereas polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
        In a simple sentence, A polyfill is a shim for a browser API.

397.    How do you detect primitive or non primitive value type

             In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function,

 ```js

        //
        var myPrimitive = 30;
        var myNonPrimitive = {};
        function isPrimitive(val) {
        return Object(val) !== val;
        }

             isPrimitive(myPrimitive);
             isPrimitive(myNonPrimitive);
 ```

             If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

398.    What is babel

        Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,

        1. Transform syntax
        2. Polyfill features that are missing in your target environment (using @babel/polyfill)
        3. Source code transformations (or codemods)

399.    Is Node.js completely single threaded

        Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

400.    What are the common use cases of observables

        Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc

401.    What is RxJS

        RxJS (Reactive Extensions for JavaScript) is a library for implementing reactive programming using observables that makes it easier to compose asynchronous or callback-based code. It also provides utility functions for creating and working with observables.

402.    What is the difference between Function constructor and function declaration

             The functions which are created with `Function constructor` do not create closures to their creation contexts but they are always created in the global scope. i.e, the function can access its own local variables and global scope variables only. Whereas function declarations can access outer function variables(closures) too.

             Let's see this difference with an example,

             **Function Constructor:**

 ```js

        //
        var a = 100;
        function createFunction() {
        var a = 200;
        return new Function('return a;');
        }
        console.log(createFunction()()); // 100

  ```

             **Function declaration:**

 ```js

        //
        var a = 100;
        function createFunction() {
        var a = 200;
        return function func() {
        return a;
        };
        }
        console.log(createFunction()()); // 200
  ```

403.    What is a Short circuit condition

             Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,

 ```js

        //
        if (authenticate) {
        loginToPorta();
        }

  ```

             Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator

 ```js

        //
        authenticate && loginToPorta();
  ```

404.    What is the easiest way to resize an array

             The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,

 ```js

        //
        var array = [1, 2, 3, 4, 5];
        console.log(array.length); // 5

             array.length = 2;
             console.log(array.length); // 2
             console.log(array); // [1,2]
 ```

             and the array can be emptied too

 ```js

        //
        var array = [1, 2, 3, 4, 5];
        array.length = 0;
        console.log(array.length); // 0
        console.log(array); // []

  ```

  ```

405.    What is an observable

             An Observable is basically a function that can return a stream of values either synchronously or asynchronously to an observer over time. The consumer can get the value by calling `subscribe()` method.
             Let's look at a simple example of an Observable

 ```js

        //
        import { Observable } from 'rxjs';

             const observable = new Observable((observer) => {
                 setTimeout(() => {
                     observer.next('Message from a Observable!');
                 }, 3000);
             });

             observable.subscribe((value) => console.log(value));
 ```

             ![Screenshot](images/observables.png)

             **Note:** Observables are not part of the JavaScript language yet but they are being proposed to be added to the language

406.    What is the difference between function and class declarations

             The main difference between function declarations and class declarations is `hoisting`. The function declarations are hoisted but not class declarations.

             **Classes:**

 ```js

        //
        const user = new User(); // ReferenceError

             class User {}
 ```

             **Constructor Function:**

 ```js

        //
        const user = new User(); // No error

             function User() {}
 ```

407.    What is an async function

             An async function is a function declared with the `async` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more `await` expressions.

             Let's take a below async function example,

 ```js

        //
        async function logger() {
        let data = await fetch('http://someapi.com/users'); // pause until fetch returns
        console.log(data);
        }
        logger();

  ```

             It is basically syntax sugar over ES2015 promises and generators.

  ```

408.    How do you prevent promises swallowing errors

             While using asynchronous code, JavaScript's ES6 promises can make your life a lot easier without having callback pyramids and error handling on every second line. But Promises have some pitfalls and the biggest one is swallowing errors by default.

             Let's say you expect to print an error to the console for all the below cases,

 ```js

        //
        Promise.resolve('promised value').then(function () {
        throw new Error('error');
        });

             Promise.reject('error value').catch(function () {
                 throw new Error('error');
             });

             new Promise(function (resolve, reject) {
                 throw new Error('error');
             });
 ```

             But there are many modern JavaScript environments that won't print any errors. You can fix this problem in different ways,

             1. **Add catch block at the end of each chain:** You can add catch block to the end of each of your promise chains

  ```js

        //
        Promise.resolve('promised value')
        .then(function () {
        throw new Error('error');
        })
        .catch(function (error) {
        console.error(error.stack);
        });

  ```

                 But it is quite difficult to type for each promise chain and verbose too.

             2. **Add done method:** You can replace first solution's then and catch blocks with done method

  ```js

        //
        Promise.resolve('promised value').done(function () {
        throw new Error('error');
        });
  ```

                 Let's say you want to fetch data using HTTP and later perform processing on the resulting data asynchronously. You can write `done` block as below,

  ```js

        //
        getDataFromHttp()
        .then(function (result) {
        return processDataAsync(result);
        })
        .done(function (processed) {
        displayData(processed);
        });

  ```

                 In future, if the processing library API changed to synchronous then you can remove `done` block as below,

  ```js

        //
        getDataFromHttp().then(function (result) {
        return displayData(processDataAsync(result));
        });
  ```

                 and then you forgot to add `done` block to `then` block leads to silent errors.

             3. **Extend ES6 Promises by Bluebird:**
                Bluebird extends the ES6 Promises API to avoid the issue in the second solution. This library has a "default" onRejection handler which will print all errors from rejected Promises to stderr. After installation, you can process unhandled rejections

  ```js

        //
        Promise.onPossiblyUnhandledRejection(function (error) {
        throw error;
        });

  ```

                 and discard a rejection, just handle it with an empty catch

  ```js

        //
        Promise.reject('error value').catch(function () {});
  ```

409.    What is deno

        Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 JavaScript engine and the Rust programming language.

410.    How do you make an object iterable in javascript

             By default, plain objects are not iterable. But you can make the object iterable by defining a `Symbol.iterator` property on it.

             Let's demonstrate this with an example,

 ```js

        //
        const collection = {
        one: 1,
        two: 2,
        three: 3,
        [Symbol.iterator]() {
        const values = Object.keys(this);
        let i = 0;
        return {
        next: () => {
        return {
        value: this[values[i++]],
        done: i > values.length
        };
        }
        };
        }
        };

             const iterator = collection[Symbol.iterator]();

             console.log(iterator.next()); // → {value: 1, done: false}
             console.log(iterator.next()); // → {value: 2, done: false}
             console.log(iterator.next()); // → {value: 3, done: false}
             console.log(iterator.next()); // → {value: undefined, done: true}
 ```

             The above process can be simplified using a generator function,

 ```js

        //
        const collection = {
        one: 1,
        two: 2,
        three: 3,
        [Symbol.iterator]: function\* () {
        for (let key in this) {
        yield this[key];
        }
        }
        };
        const iterator = collection[Symbol.iterator]();
        console.log(iterator.next()); // {value: 1, done: false}
        console.log(iterator.next()); // {value: 2, done: false}
        console.log(iterator.next()); // {value: 3, done: false}
        console.log(iterator.next()); // {value: undefined, done: true}

  ```

  ```

411.    What is a Proper Tail Call

             First, we should know about tail call before talking about "Proper Tail Call". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas **Proper tail call(PTC)** is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.

             For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto `n * factorial(n - 1)`

 ```js

        //
        function factorial(n) {
        if (n === 0) {
        return 1;
        }
        return n \* factorial(n - 1);
        }
        console.log(factorial(5)); //120

  ```

             But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.

 ```js

        //
        function factorial(n, acc = 1) {
        if (n === 0) {
        return acc;
        }
        return factorial(n - 1, n \* acc);
        }
        console.log(factorial(5)); //120
  ```

             The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.

412.    How do you check an object is a promise or not

             If you don't know if a value is a promise or not, wrapping the value as `Promise.resolve(value)` which returns a promise

 ```js

        //
        function isPromise(object) {
        if (Promise && Promise.resolve) {
        return Promise.resolve(object) == object;
        } else {
        throw 'Promise not supported in your environment';
        }
        }

             var i = 1;
             var promise = new Promise(function (resolve, reject) {
                 resolve();
             });

             console.log(isPromise(i)); // false
             console.log(isPromise(p)); // true
 ```

             Another way is to check for `.then()` handler type

 ```js

        //
        function isPromise(value) {
        return Boolean(value && typeof value.then === 'function');
        }
        var i = 1;
        var promise = new Promise(function (resolve, reject) {
        resolve();
        });

             console.log(isPromise(i)); // false
             console.log(isPromise(promise)); // true
 ```

413.    How to detect if a function is called as constructor

             You can use `new.target` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

             1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
             2. For function calls, new.target is undefined.

 ```js

        //
        function Myfunc() {
        if (new.target) {
        console.log('called with new');
        } else {
        console.log('not called with new');
        }
        }

             new Myfunc(); // called with new
             Myfunc(); // not called with new
             Myfunc.call({}); not called with new
 ```

414.    What are the differences between arguments object and rest parameter

        There are three main differences between arguments object and rest parameters

        1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
        2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
        3. The rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function

415.    What are the differences between spread operator and rest parameter

        Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

416.    What are the different kinds of generators

             There are five kinds of generators,

             1. **Generator function declaration:**

  ```js

        //
        function\* myGenFunc() {
        yield 1;
        yield 2;
        yield 3;
        }
        const genObj = myGenFunc();

  ```

             2. **Generator function expressions:**

  ```js

        //
        const myGenFunc = function\* () {
        yield 1;
        yield 2;
        yield 3;
        };
        const genObj = myGenFunc();
  ```

             3. **Generator method definitions in object literals:**

  ```js

        //
        const myObj = {
        \*myGeneratorMethod() {
        yield 1;
        yield 2;
        yield 3;
        }
        };
        const genObj = myObj.myGeneratorMethod();

  ```

             4. **Generator method definitions in class:**

  ```js

        //
        class MyClass {
        \*myGeneratorMethod() {
        yield 1;
        yield 2;
        yield 3;
        }
        }
        const myObject = new MyClass();
        const genObj = myObject.myGeneratorMethod();
  ```

             5. **Generator as a computed property:**

  ```js

        //
        const SomeObj = { \*[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        }
        };

                 console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
  ```

417.    What are the built-in iterables

        Below are the list of built-in iterables in javascript,

        1. Arrays and TypedArrays
        2. Strings: Iterate over each character or Unicode code-points
        3. Maps: iterate over its key-value pairs
        4. Sets: iterates over their elements
        5. arguments: An array-like special variable in functions
        6. DOM collection such as NodeList

418.    What are the differences between for...of and for...in statements

             Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:

             1. for..in iterates over all enumerable property keys of an object
             2. for..of iterates over the values of an iterable object.

             Let's explain this difference with an example,

 ```js

        //
        let arr = ['a', 'b', 'c'];

             arr.newProp = 'newVlue';

             // key are the property keys
             for (let key in arr) {
                 console.log(key);
             }

             // value are the property values
             for (let value of arr) {
                 console.log(value);
             }
 ```

             Since for..in loop iterates over the keys of the object, the first loop logs 0, 1, 2 and newProp while iterating over the array object. The for..of loop iterates over the values of a arr data structure and logs a, b, c in the console.

419.    How do you define instance and non-instance properties

             The Instance properties must be defined inside of class methods. For example, name and age properties defined insider constructor as below,

 ```js

        //
        class Person {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        }

  ```

             But Static(class) and prototype data properties must be defined outside of the ClassBody declaration. Let's assign the age value for Person class as below,

 ```js

        //
        Person.staticAge = 30;
        Person.prototype.prototypeAge = 40;
  ```

420.    What is the difference between isNaN and Number.isNaN?

             1. **isNaN**: The global function `isNaN` converts the argument to a Number and returns true if the resulting value is NaN.
             2. **Number.isNaN**: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.

             Let's see the difference with an example,

 ```js

        //
        isNaN('hello'); // true
        Number.isNaN('hello'); // false

  ```

  ```

421.    How to invoke an IIFE without any extra brackets?

             Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.

 ```js

        //
        (function (dt) {
        console.log(dt.toLocaleTimeString());
        })(new Date());

  ```

             Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using `void operator` for IIFE as below,

 ```js

        //
        void (function (dt) {
        console.log(dt.toLocaleTimeString());
        })(new Date());
  ```

422.    Is that possible to use expressions in switch cases?

             You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temparature as an example,

 ```js

        //
        const weather = (function getWeather(temp) {
        switch (true) {
        case temp < 0:
        return 'freezing';
        case temp < 10:
        return 'cold';
        case temp < 24:
        return 'cool';
        default:
        return 'unknown';
        }
        })(10);

  ```

  ```

423.    What is the easiest way to ignore promise errors?

             The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.

 ```js

        //
        await promise.catch((e) => void e);

  ```

  ```

424.    How do style the console output using CSS?

             You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red the color text using console.log and CSS specifier as below,

 ```js

        //
        console.log('%cThis is a red text', 'color:red');

  ```

             It is also possible to add more styles for the content. For example, the font-size can be modified for the above text

 ```js

        //
        console.log('%cThis is a red text with bigger font', 'color:red; font-size:20px');
  ```

425.    What is nullish coalescing operator (??)?

             It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

 ```js

        //
        console.log(null ?? true); // true
        console.log(false ?? true); // false
        console.log(undefined ?? true); // true

  ```

  ```

### Coding Exercise

#### 1. What is the output of below code

```js
//
var car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```

-   Undefined
-   2: ReferenceError
-   3: null
-   4: {model: "Honda", color: "white", year: "2010", country: "UK"}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The function declarations are hoisted similar to any variables. So the placement for `Vehicle` function declaration doesn't make any difference.

</p>
</details>

---

#### 2. What is the output of below code

---

```js
//


function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
}

c ole.log(foo(), typeof x, typeof y);
```

-   1, undefined and undefined
-   2: ReferenceError: X is not defined
-   3: 1, undefined and number
-   4: 1, number and number

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

Of course the return value of `foo()` is 1 due to the increment operator. But the statement `let x = y = 0` declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

```js
//
let x;
window.y = 0;
x = window.y;
```

Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable `y` is available outside the function, the value is 0 and type is number.

</p>
</details>

---

#### 3. What is the output of below code

---

```js
//

function main() {
    console.log('A');
    setTimeout(function print() {
        console.log('B');
    }, 0);
    console.log('C');
}
m();
```

-   A, B and C
-   2: B, A and C
-   3: A and C
-   4: A, C and B

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The statements order is based on the event loop mechanism. The order of statements follows the below order,

1. At first, the main function is pushed to the stack.
2. Then the browser pushes the fist statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
3. But `setTimeout` statement moved to Browser API to apply the delay for callback.
4. In the meantime, C's console.log added to stack, executed and popped out.
5. The callback of `setTimeout` moved from Browser API to message queue.
6. The `main` function popped out from stack because there are no statements to execute
7. The callback moved from message queue to the stack since the stack is empty.
8. The console.log for B is added to the stack and display on the console.

</p>
</details>

---

#### 4. What is the output of below equality check

```js
//
c ole.log(0.1 + 0.2 === 0.3);
```

-   1: false
-   2: true

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results.
You can find more details about the explanation here [0.30000000000000004.com/](https://0.30000000000000004.com/)

</p>
</details>

---

#### 5. What is the output of below code

```js
//
var y = 1;
if (function f() {}) {
    y += typeof f;
}
c ole.log(y);
```

-   1function
-   2: 1object
-   3: ReferenceError
-   4: 1undefined

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The main points in the above code snippets are,

1. You can see function expression instead function declaration inside if statement. So it always returns true.
2. Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.

In other words, it is same as

```js
//
var y = 1;
if ('foo') {
    y += typeof f;
}
console.log(y);
```

**Note:** It returns 1object for MS Edge browser

</p>
</details>

---

#### 6. What is the output of below code

---

```js
//


function foo() {
    return;
    {
        message: 'Hello World';
    }
}
c ole.log(foo());
```

-   Hello World
-   2: Object {message: "Hello World"}
-   3: Undefined
-   4: SyntaxError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.

---

```js
//

function foo() {
    return {
        message: 'Hello World'
    };
}
console.log(foo()); // {message: "Hello World"}
```

</p>
</details>

---

#### 7. What is the output of below code

```js
//
var myChars = ['a', 'b', 'c', 'd'];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
c ole.log(myChars.length);
```

-   [empty, 'b', 'c', 'd'], empty, 3
-   2: [null, 'b', 'c', 'd'], empty, 3
-   3: [empty, 'b', 'c', 'd'], undefined, 4
-   4: [null, 'b', 'c', 'd'], undefined, 4

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

The `delete` operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed.
If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use `empty` instead of `undefined` to make the difference a bit clearer.

</p>
</details>

---

#### 8. What is the output of below code in latest Chrome

```js
//
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
c ole.log(array3);
```

-   [undefined × 3], [undefined × 2, 100], [undefined × 3]
-   2: [empty × 3], [empty × 2, 100], [empty × 3]
-   3: [null × 3], [null × 2, 100], [null × 3]
-   4: [], [100], []

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

The latest chrome versions display `sparse array`(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation.
**Note:** The latest version of FF displays `n empty slots` notation.

</p>
</details>

---

#### 9. What is the output of below code

```js
//
const obj = {
    prop1: function () {
        return 0;
    },
    prop2() {
        return 1;
    },
    ['prop' + 3]() {
        return 2;
    }
};

console.log(obj.prop1());
console.log(obj.prop2());
c ole.log(obj.prop3());
```

-   0, 1, 2
-   2: 0, { return 1 }, 2
-   3: 0, { return 1 }, { return 2 }
-   4: 0, 1, undefined

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.

</p>
</details>

---

#### 10. What is the output of below code

```js
//
console.log(1 < 2 < 3);
c ole.log(3 > 2 > 1);
```

-   true, true
-   2: true, false
-   3: SyntaxError, SyntaxError,
-   4: false, false

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right.
The first statement follows the below order,

1. console.log(1 < 2 < 3);
2. console.log(true < 3);
3. console.log(1 < 3); // True converted as `1` during comparison
4. True

Whereas the second statement follows the below order,

1. console.log(3 > 2 > 1);
2. console.log(true > 1);
3. console.log(1 > 1); // False converted as `0` during comparison
4. False

</p>
</details>

---

#### 11. What is the output of below code in non-strict mode

---

```js
//


function printNumbers(first, second, first) {
    console.log(first, second, first);
}
p tNumbers(1, 2, 3);
```

-   1, 2, 3
-   2: 3, 2, 3
-   3: SyntaxError: Duplicate parameter name not allowed in this context
-   4: 1, 2, 1

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters.
The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

**Note:** In strict mode, duplicate parameters will throw a Syntax Error.

</p>
</details>

---

#### 12. What is the output of below code

```js
//
const printNumbersArrow = (first, second, first) => {
    console.log(first, second, first);
};
p tNumbersArrow(1, 2, 3);
```

-   1, 2, 3
-   2: 3, 2, 3
-   3: SyntaxError: Duplicate parameter name not allowed in this context
-   4: 1, 2, 1

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see `SyntaxError` in the console.

</p>
</details>

---

#### 13. What is the output of below code

```js
//
const arrowFunc = () => arguments.length;
c ole.log(arrowFunc(1, 2, 3));
```

-   ReferenceError: arguments is not defined
-   2: 3
-   3: undefined
-   4: null

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

Arrow functions do not have an `arguments, super, this, or new.target` bindings. So any reference to `arguments` variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

Where as the normal function provides the number of arguments passed to the function

```js
//
const func = function () {
    return arguments.length;
};
console.log(func(1, 2, 3));
```

But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

```js
//
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</p>
</details>

---

#### 14. What is the output of below code

```js
//
console.log(String.prototype.trimLeft.name === 'trimLeft');
c ole.log(String.prototype.trimLeft.name === 'trimStart');
```

-   1: True, False
-   2: False, True

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

In order to be consistent with functions like `String.prototype.padStart`, the standard method name for trimming the whitespaces is considered as `trimStart`. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart'

</p>
</details>

---

#### 15. What is the output of below code

```js
//
c ole.log(Math.max());
```

-   undefined
-   2: Infinity
-   3: 0
-   4: -Infinity

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

-Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned.
**Note:** Zero number of arguments is a valid case.

</p>
</details>

---

#### 16. What is the output of below code

```js
//
console.log(10 == [10]);
c ole.log(10 == [[[[[[[10]]]]]]]);
```

-   True, True
-   2: True, False
-   3: False, False
-   4: False, True

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below

```js
//
10 === Number([10].valueOf().toString()); // 10
```

So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.

</p>
</details>

---

#### 17. What is the output of below code

```js
//
console.log(10 + '10');
c ole.log(10 - '10');
```

-   20, 0
-   2: 1010, 0
-   3: 1010, 10-10
-   4: NaN, NaN

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.

</p>
</details>

---

#### 18. What is the output of below code

```js
//
console.log([0] == false);
if ([0]) {
    console.log("I'm True");
} else {
    console.log("I'm False");
}
```

-   True, I'm True
-   2: True, I'm False
-   3: False, I'm True
-   4: False, I'm False

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

In comparison operators, the expression `[0]` converted to Number([0].valueOf().toString()) which is resolved to false. Whereas `[0]` just becomes a truthy value without any conversion because there is no comparison operator.

</p>
</details>

#### 19. What is the output of below code

```js
//
c ole.log([1, 2] + [3, 4]);
```

-   [1,2,3,4]
-   2: [1,2][3,4]
-   3: SyntaxError
-   4: 1,23,4

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.

</p>
</details>

---

#### 20. What is the output of below code

```js
//
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
c ole.log(browser);
```

-   {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
-   2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
-   3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
-   4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

Since `Set` object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.

</p>
</details>

---

#### 21. What is the output of below code

```js
//
c ole.log(NaN === NaN);
```

-   1: True
-   2: False

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.

</p>
</details>

---

#### 22. What is the output of below code

```js
//
let numbers = [1, 2, 3, 4, NaN];
c ole.log(numbers.indexOf(NaN));
```

-   4
-   2: NaN
-   3: SyntaxError
-   4: -1

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The `indexOf` uses strict equality operator(===) internally and `NaN === NaN` evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always.
But you can use `Array.prototype.findIndex` method to find out the index of NaN in an array or You can use `Array.prototype.includes` to check if NaN is present in an array or not.

```js
//
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</p>
</details>

---

#### 23. What is the output of below code

```js
//
let [a, ...b,] = [1, 2, 3, 4, 5];
c ole.log(a, b);
```

-   1, [2, 3, 4, 5]
-   2: 1, {2, 3, 4, 5}
-   3: SyntaxError
-   4: 1, [2, 3, 4]

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

When using rest parameters, trailing commas are not allowed and will throw a SyntaxError.
If you remove the trailing comma then it displays 1st answer

```js
//
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
```

</p>
</details>

---

#### 25. What is the output of below code

```js
//
async function func() {
    return 10;
}
c ole.log(func());
```

-   Promise {\<fulfilled\>: 10}
-   2: 10
-   3: SyntaxError
-   4: Promise {\<rejected\>: 10}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,

---

```js
//

function func() {
    return Promise.resolve(10);
}
```

</p>
</details>

---

#### 26. What is the output of below code

```js
//
async function func() {
    await 10;
}
c ole.log(func());
```

-   Promise {\<fulfilled\>: 10}
-   2: 10
-   3: SyntaxError
-   4: Promise {\<resolved\>: undefined}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a `.then` callback. In this case, there is no return expression at the end of the function. Hence, the default return value of `undefined` is returned as the resolution of the promise. The above async function is equivalent to below expression,

---

```js
//

function func() {
    return Promise.resolve(10).then(() => undefined);
}
```

</p>
</details>

---

#### 27. What is the output of below code

---

```js
//


function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function processArray(array) {
    array.forEach((item) => {
        await delayedLog(item);
    });
}

p essArray([1, 2, 3, 4]);
```

-   SyntaxError
-   2: 1, 2, 3, 4
-   3: 4, 4, 4, 4
-   4: 4, 3, 2, 1

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

Even though "processArray" is an async function, the anonymous function that we use for `forEach` is synchronous. If you use await inside a synchronous function then it throws a syntax error.

</p>

</details>

---

#### 28. What is the output of below code

---

```js
//


function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function process(array) {
    array.forEach(async (item) => {
        await delayedLog(item);
    });
    console.log('Process completed!');
}
p ess([1, 2, 3, 5]);
```

-   1 2 3 5 and Process completed!
-   2: 5 5 5 5 and Process completed!
-   3: Process completed! and 5 5 5 5
-   4: Process completed! and 1 2 3 5

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.

But you control the array sequence using for..of loop,

```js
//
async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Process completed!');
}
```

</p>
</details>

---

#### 29. What is the output of below code

```js
//
var set = new Set();
set.add('+0').add('-0').add(NaN).add(undefined).add(NaN);
c ole.log(set);
```

-   Set(4) {"+0", "-0", NaN, undefined}
-   2: Set(3) {"+0", NaN, undefined}
-   3: Set(5) {"+0", "-0", NaN, undefined, NaN}
-   4: Set(4) {"+0", NaN, undefined, NaN}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

Set has few exceptions from equality check,

1. All NaN values are equal
2. Both +0 and -0 considered as different values

</p>
</details>

---

#### 30. What is the output of below code

```js
//
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

c oe.log(sym1 === sym2, sym3 === sym4);
```

-   true, true
-   2: true, false
-   3: false, true
-   4: false, false

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

Symbol follows below conventions,

1. Every symbol value returned from Symbol() is unique irrespective of the optional string.
2. `Symbol.for()` function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.

**Note:** The symbol description is just useful for debugging purposes.

</p>

</details>

---

#### 31. What is the output of below code

```js
//
const sym1 = new Symbol('one');
c ole.log(sym1);
```

-   SyntaxError
-   2: one
-   3: Symbol('one')
-   4: Symbol

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

`Symbol` is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

</p>

</details>

---

#### 32. What is the output of below code

```js
//
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === 'string') {
    console.log('It is not a string!');
} else {
    console.log('It is a string!');
}

if (!typeof myString === 'number') {
    console.log('It is not a number!');
} else {
    console.log('It is a number!');
}
```

-   SyntaxError
-   2: It is not a string!, It is not a number!
-   3: It is not a string!, It is a number!
-   4: It is a string!, It is a number!

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The return value of `typeof myNumber (OR) typeof myString` is always the truthy value (either "number" or "string"). Since ! operator converts the value to a boolean value, the value of both `!typeof myNumber or !typeof myString` is always false. Hence the if condition fails and control goes to else block.

</p>

</details>

---

#### 33. What is the output of below code

```js
//
console.log(JSON.stringify({ myArray: ['one', undefined, function () {}, Symbol('')] }));
c ole.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
```

-   {"myArray":['one', undefined, {}, Symbol]}, {}
-   2: {"myArray":['one', null,null,null]}, {}
-   3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
-   4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

The symbols has below constraints,

1. The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
2. All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

</p>

</details>

---

#### 34. What is the output of below code

```js
//
class A {
    constructor() {
        console.log(new.target.name);
    }
}

class B extends A {
    constructor() {
        super();
    }
}

new A();
n B();
```

-   1: A, A
-   2: A, B

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Using constructors, `new.target` refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

</p>

</details>

---

#### 35. What is the output of below code

```js
//
const [x, ...y,] = [1, 2, 3, 4];
c ole.log(x, y);
```

-   1, [2, 3, 4]
-   2: 1, [2, 3]
-   3: 1, [2]
-   4: SyntaxError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.

</p>

</details>

---

#### 36. What is the output of below code

```js
//
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
c ole.log(y);
```

-   30, 20
-   2: 10, 20
-   3: 10, undefined
-   4: 30, undefined

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

The object property follows below rules,

1. The object properties can be retrieved and assigned to a variable with a different name
2. The property assigned a default value when the retrieved value is `undefined`

</p>

</details>

---

#### 37. What is the output of below code

---

```js
//

function area({ length = 10, width = 20 }) {
    console.log(length * width);
}

a();
```

-   200
-   2: Error
-   3: undefined
-   4: 0

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error `Error: Cannot read property 'length' of undefined` as mentioned above.

You can avoid the error with either of the below changes,

1. **Pass at least an empty object:**

---

```js
//

function area({ length = 10, width = 20 }) {
    console.log(length * width);
}

area({});
```

2. **Assign default empty object:**

---

```js
//

function area({ length = 10, width = 20 } = {}) {
    console.log(length * width);
}

area();
```

</p>

</details>

---

#### 38. What is the output of below code

```js
//
const props = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Tom' }
];

const [, , { name }] = props;
c ole.log(name);
```

-   Tom
-   2: Error
-   3: undefined
-   4: John

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.

</p>

</details>

---

#### 39. What is the output of below code

---

```js
//


function checkType(num = 1) {
    console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
c kType(null);
```

-   number, undefined, string, object
-   2: undefined, undefined, string, object
-   3: number, number, string, object
-   4: number, number, number, number

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

Hence, the result of function calls categorized as below,

1. The first two function calls logs number type since the type of default value is number
2. The type of '' and null values are string and object type respectively.

</p>

</details>

---

#### 40. What is the output of below code

---

```js
//


function add(item, items = []) {
    items.push(item);
    return items;
}

console.log(add('Orange'));
c ole.log(add('Apple'));
```

-   1: ['Orange'], ['Orange', 'Apple']
-   2: ['Orange'], ['Apple']

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

</p>

</details>

---

#### 41. What is the output of below code

---

```js
//


function greet(greeting, name, message = greeting + ' ' + name) {
    console.log([greeting, name, message]);
}

greet('Hello', 'John');
g t('Hello', 'John', 'Good morning!');
```

-   1: SyntaxError
-   2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

</p>

</details>

---

#### 42. What is the output of below code

---

```js
//


function outer(f = inner()) {
    function inner() {
        return 'Inner';
    }
}
o r();
```

-   1: ReferenceError
-   2: Inner

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, `inner` is not defined).

</p>

</details>

---

#### 43. What is the output of below code

---

```js
//


function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
m n(1, 2);
```

-   [3, 4, 5], undefined
-   2: SyntaxError
-   3: [3, 4, 5], []
-   4: [3, 4, 5], [undefined]

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

</p>

</details>

---

#### 44. What is the output of below code

```js
//
const obj = { key: 'value' };
const array = [...obj];
c ole.log(array);
```

-   ['key', 'value']
-   2: TypeError
-   3: []
-   4: ['key']

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as `map(), reduce(), and assign()`. If you still try to do it, it still throws `TypeError: obj is not iterable`.

</p>

</details>

---

#### 45. What is the output of below code

---

```js
//


function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = new myGenFunc();
c ole.log(myGenObj.next().value);
```

-   1
-   2: undefined
-   3: SyntaxError
-   4: TypeError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

</p>

</details>

---

#### 46. What is the output of below code

---

```js
//


function* yieldAndReturn() {
    yield 1;
    return 2;
    yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
c ole.log(myGenObj.next());
```

-   { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
-   2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
-   3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
-   4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: `{value: undefined, done: true}`.

</p>

</details>

---

#### 47. What is the output of below code

```js
//
const myGenerator = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
for (const value of myGenerator) {
    console.log(value);
    break;
}

for (const value of myGenerator) {
    console.log(value);
}
```

-   1,2,3 and 1,2,3
-   2: 1,2,3 and 4,5,6
-   3: 1 and 1
-   4: 1

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.

</p>

</details>

---

#### 48. What is the output of below code

```js
//
const num = 0o38;
c ole.log(num);
```

-   1: SyntaxError
-   2: 38

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.

</p>

</details>

---

#### 49. What is the output of below code

```js
//
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
    constructor(length) {
        this.length = length;
    }

    get area() {
        return this.length * this.length;
    }

    set area(value) {
        this.area = value;
    }
}
```

-   1: 100
-   2: ReferenceError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

**Note:** Class expressions also applies to the same hoisting restrictions of class declarations.

</p>

</details>

---

#### 50. What is the output of below code

---

```js
//


function Person() {}

Person.prototype.walk = function () {
    return this;
};

Person.run = function () {
    return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
c ole.log(run());
```

-   undefined, undefined
-   2: Person, Person
-   3: SyntaxError
-   4: Window, Window

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

When a regular or prototype method is called without a value for **this**, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial `this` value is undefined so both methods return window objects.

</p>

</details>

---

#### 51. What is the output of below code

```js
//
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`${this.name} vehicle started`);
    }
}

class Car extends Vehicle {
    start() {
        console.log(`${this.name} car started`);
        super.start();
    }
}

const car = new Car('BMW');
c ole.log(car.start());
```

-   SyntaxError
-   2: BMW vehicle started, BMW car started
-   3: BMW car started, BMW vehicle started
-   4: BMW car started, BMW car started

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 3

The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.

</p>

</details>

---

#### 52. What is the output of below code

```js
//
const USER = { age: 30 };
USER.age = 25;
c ole.log(USER.age);
```

-   30
-   2: 25
-   3: Uncaught TypeError
-   4: SyntaxError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.

</p>

</details>

---

#### 53. What is the output of below code

```js
//
c ole.log('🙂' === '🙂');
```

-   1: false
-   2: true

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 2

Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.

</p>

</details>

---

#### 54. What is the output of below code?

```js
//
c ole.log(typeof typeof typeof true);
```

-   string
-   2: boolean
-   3: NaN
-   4: number

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.

</p>

</details>

---

#### 55. What is the output of below code?

```js
//
let zero = new Number(0);

if (zero) {
    console.log('If');
} else {
    console.log('Else');
}
```

-   If
-   2: Else
-   3: NaN
-   4: SyntaxError

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

1. The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
2. Objects are always truthy in if block

Hence the above code block always goes to if section.

</p>

</details>

---

#### 55. What is the output of below code in non strict mode?

```js
//
let msg = 'Good morning!!';

msg.name = 'John';

c ole.log(msg.name);
```

-   ""
-   2: Error
-   3: John
-   4: Undefined

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 4

It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.

</p>

</details>

---

#### 56. What is the output of below code?

```js
//
let count = 10;

(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
} ;
```

-   11, 10
-   2: 11, 11
-   3: 10, 11
-   4: 10, 10

<details>
<summary>
<b>Answer</b>
</summary>
<p>

##### Answer: 1

11 and 10 is logged to the console.

The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable `count` which overwrites the ourter `count` variable. So the first console.log displays value 11.
Whereas the second console.log logs 10 by capturing the count variable from outerscope.

</p>

</details>



