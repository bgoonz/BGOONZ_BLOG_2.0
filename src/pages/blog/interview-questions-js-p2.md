---
title: JS-Questions P2
subtitle: Javascript Interview Questions P2
date: '2021-09-11'
thumb_image_alt: big o
excerpt: What are the possible ways to create objects in JavaScript
seo:
    title: 'Javascript Interview'
    description: What are the possible ways to create objects in JavaScript
    robots: []
    extra:
        - name: 'og:image'
          value: images/js-code-spiral-num.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:title'
          value: JS-Interview
          keyName: name
          relativeUrl: false
        - name: 'twitter:description'
          value: What are the possible ways to create objects in JavaScript
          keyName: name
          relativeUrl: false
template: post
thumb_image: images/bigo.jpg
image: images/js-questions-n-answers.png
---



20. How do you redeclare variables in switch block without an error

    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,

    ```javascript
    let counter = 1;
    switch (x) {
        case 0:
            let name;
            break;

        case 1:
            let name; // SyntaxError for redeclaration.
            break;
    }
    ```

    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
    switch (x) {
        case 0: {
            let name;
            break;
        }
        case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
        }
    }
    ```

21. What is the Temporal Dead Zone

    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable's binding and its declaration, is called the temporal dead zone.

    Let's see this behavior with an example,

    ```javascript
    function somemethod() {
        console.log(counter1); // undefined
        console.log(counter2); // ReferenceError
        var counter1 = 1;
        let counter2 = 2;
    }
    ```

22. What is IIFE(Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function () {
        // logic here
    })();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ```javascript
    (function () {
        var message = 'IIFE';
        console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ```

23. What is the benefit of using modules

    There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,

    1. Maintainability
    2. Reusability
    3. Namespacing

24. What is memoization

    Memoization is a programming technique which attempts to increase a function's performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizAddition = () => {
        let cache = {};
        return (value) => {
            if (value in cache) {
                console.log('Fetching from cache');
                return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
            } else {
                console.log('Calculating result');
                let result = value + 20;
                cache[value] = result;
                return result;
            }
        };
    };
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

25. What is Hoisting

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
    ```

    The above code looks like as below to the interpreter,

    ```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
    ```

26. What are classes in ES6

    In ES6, Javascript classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ```javascript
    function Bike(model, color) {
        this.model = model;
        this.color = color;
    }

    Bike.prototype.getDetails = function () {
        return this.model + ' bike has' + this.color + ' color';
    };
    ```

    Whereas ES6 classes can be defined as an alternative

    ```javascript
    class Bike {
        constructor(color, model) {
            this.color = color;
            this.model = model;
        }

        getDetails() {
            return this.model + ' bike has' + this.color + ' color';
        }
    }
    ```

27. What are closures

    A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function's variables. The closure has three scope chains

    1. Own scope where variables defined between its curly brackets
    2. Outer function's variables
    3. Global variables

    Let's take an example of closure concept,

    ```javascript
    function Welcome(name) {
        var greetingInfo = function (message) {
            console.log(message + ' ' + name);
        };
        return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

28. What are modules

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

29. Why do you need modules

    Below are the list of benefits using modules in javascript ecosystem

    1. Maintainability
    2. Reusability
    3. Namespacing

30. What is scope in javascript

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

31. What is a service worker

    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

32. How do you manipulate DOM using a service worker

    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.

33. How do you reuse information across service worker restarts

    The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

34. What is IndexedDB

    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

35. What is web storage

    Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

    1. **Local storage:** It stores data for current origin with no expiration date.
    2. **Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

36. What is a post message

    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

37. What is a Cookie

    A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
    For example, you can create a cookie named username as below,

    ```javascript
    document.cookie = 'username=John';
    ```

    ![Screenshot](images/cookie.png)

38. Why do you need a Cookie

    Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

    1. When a user visits a web page, the user profile can be stored in a cookie.
    2. Next time the user visits the page, the cookie remembers the user profile.

39. What are the options in a cookie

    There are few below options available for a cookie,

    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

    ```javascript
    document.cookie = 'username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC';
    ```

    1. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

    ```javascript
    document.cookie = 'username=John; path=/services';
    ```

40. How do you delete a cookie

    You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.

    ```javascript
    document.cookie = 'username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;';
    ```

    **Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.