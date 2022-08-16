---
title: JS-Questions P3
subtitle: Javascript Interview Questions P3
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


41. What are the differences between cookie, local storage and session storage

    Below are some of the differences between cookie, local storage and session storage,

    | Feature                           | Cookie                             | Local storage    | Session storage     |
    | --------------------------------- | ---------------------------------- | ---------------- | ------------------- |
    | Accessed on client or server side | Both server-side & client-side     | client-side only | client-side only    |
    | Lifetime                          | As configured using Expires option | until deleted    | until tab is closed |
    | SSL support                       | Supported                          | Not supported    | Not supported       |
    | Maximum data size                 | 4KB                                | 5 MB             | 5MB                 |

42. What is the main difference between localStorage and sessionStorage

    LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

43. How do you access web storage

    The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).
    For example, you can read and write on local storage objects as below

    ```javascript
    localStorage.setItem('logo', document.getElementById('logo').value);
    localStorage.getItem('logo');
    ```

44. What are the methods available on session storage

    The session storage provided methods for reading, writing and clearing the session data

    ```javascript
    // Save data to sessionStorage
    sessionStorage.setItem('key', 'value');

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('key');

    // Remove saved data from sessionStorage
    sessionStorage.removeItem('key');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ```

45. What is a storage event and its event handler

    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below

    ```javascript
    window.onstorage = functionRef;
    ```

    Let's take the example usage of onstorage event handler which logs the storage key and it's values

    ```javascript
    window.onstorage = function (e) {
        console.log('The ' + e.key + ' key has been changed from ' + e.oldValue + ' to ' + e.newValue + '.');
    };
    ```

46. Why do you need web storage

    Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

47. How do you check web storage browser support

    You need to check browser support for localStorage and sessionStorage before using web storage,

    ```javascript
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
    } else {
        // Sorry! No Web Storage support..
    }
    ```

48. How do you check web workers browser support

    You need to check browser support for web workers before using it

    ```javascript
    if (typeof Worker !== 'undefined') {
        // code for Web worker support.
    } else {
        // Sorry! No Web Worker support..
    }
    ```

49. Give an example of a web worker

    You need to follow below steps to start using web workers for counting example

    1. Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js

    ```javascript
    let i = 0;

    function timedCount() {
        i = i + 1;
        postMessage(i);
        setTimeout('timedCount()', 500);
    }

    timedCount();
    ```

    Here postMessage() method is used to post a message back to the HTML page

    1. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

    ```javascript
    if (typeof w == 'undefined') {
        w = new Worker('counter.js');
    }
    ```

    and we can receive messages from web worker

    ```javascript
    w.onmessage = function (event) {
        document.getElementById('message').innerHTML = event.data;
    };
    ```

    1. Terminate a Web Worker:
       Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.

    ```javascript
    w.terminate();
    ```

    1. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code

    ```javascript
    w = undefined;
    ```

50. What are the restrictions of web workers on DOM

    WebWorkers don't have access to below javascript objects since they are defined in an external files

    1. Window object
    2. Document object
    3. Parent object

51. What is a promise

    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it's not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

    The syntax of Promise creation looks like below,

    ```javascript
    const promise = new Promise(function (resolve, reject) {
        // promise description
    });
    ```

    The usage of a promise would be as below,

    ```javascript
    const promise = new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve("I'm a Promise!");
            }, 5000);
        },
        (reject) => {}
    );

    promise.then((value) => console.log(value));
    ```

    The action flow of a promise will be as below,

    ![Screenshot](images/promises.png)

52. Why do you need a promise

    Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

53. What are the three states of promise

    Promises have three states:

    1. **Pending:** This is an initial state of the Promise before an operation begins
    2. **Fulfilled:** This state indicates that the specified operation was completed.
    3. **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

54. What is a callback function

    A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
    Let's take a simple example of how to use callback function

    ```javascript
    function callbackFunction(name) {
        console.log('Hello ' + name);
    }

    function outerFunction(callback) {
        let name = prompt('Please enter your name.');
        callback(name);
    }

    outerFunction(callbackFunction);
    ```

55. Why do we need callbacks

    The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
    Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

    ```javascript
    function firstFunction() {
        // Simulate a code delay
        setTimeout(function () {
            console.log('First function called');
        }, 1000);
    }
    function secondFunction() {
        console.log('Second function called');
    }
    firstFunction();
    secondFunction();

    Output;
    // Second function called
    // First function called
    ```

    As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn't execute until the other code finishes execution.

56. What is a callback hell

    Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

    ```javascript
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    ```

57. What are server-sent events

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

58. How do you receive server-sent event notifications

    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,

    ```javascript
    if (typeof EventSource !== 'undefined') {
        var source = new EventSource('sse_generator.js');
        source.onmessage = function (event) {
            document.getElementById('output').innerHTML += event.data + '<br>';
        };
    }
    ```

59. How do you check browser support for server-sent events

    You can perform browser support for server-sent events before using it as below,

    ```javascript
    if (typeof EventSource !== 'undefined') {
        // Server-sent events supported. Let's have some code here!
    } else {
        // No server-sent events supported
    }
    ```

60. What are the events available for server sent events

    Below are the list of events available for server sent events
    | Event | Description |
    |---- | ---------
    | onopen | It is used when a connection to the server is opened |
    | onmessage | This event is used when a message is received |
    | onerror | It happens when an error occurs|



#### 1. What is the output of below code

```javascript
var car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```

-  Undefined
- 2: ReferenceError
- 3: null
- 4: {model: "Honda", color: "white", year: "2010", country: "UK"}


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

```javascript
function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
}
```
```js
console.log(foo(), typeof x, typeof y);
```

- 1, undefined and undefined
- 2: ReferenceError: X is not defined
- 3: 1, undefined and number
- 4: 1, number and number


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 3

Of course the return value of `foo()` is 1 due to the increment operator. But the statement `let x = y = 0` declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

```javascript
let x;
window.y = 0;
x = window.y;
```

Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable `y` is available outside the function, the value is 0 and type is number.

</p>
</details>

---

#### 3. What is the output of below code

```javascript
function main() {
    console.log('A');
    setTimeout(function print() {
        console.log('B');
    }, 0);
    console.log('C');
}
m();
```

- A, B and C
- 2: B, A and C
- 3: A and C
- 4: A, C and B


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

```javascript
c ole.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true


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

```javascript
var y = 1;
if (function f() {}) {
    y += typeof f;
}
c ole.log(y);
```

- 1function
- 2: 1object
- 3: ReferenceError
- 4: 1undefined


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

```javascript
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

```javascript
function foo() {
    return;
    {
        message: 'Hello World';
    }
}
c ole.log(foo());
```

- Hello World
- 2: Object {message: "Hello World"}
- 3: Undefined
- 4: SyntaxError


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 3

This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.

```javascript
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

```javascript
var myChars = ['a', 'b', 'c', 'd'];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
c ole.log(myChars.length);
```

- [empty, 'b', 'c', 'd'], empty, 3
- 2: [null, 'b', 'c', 'd'], empty, 3
- 3: [empty, 'b', 'c', 'd'], undefined, 4
- 4: [null, 'b', 'c', 'd'], undefined, 4


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

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
c ole.log(array3);
```

- [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []


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

```javascript
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

- 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined


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

```javascript
console.log(1 < 2 < 3);
c ole.log(3 > 2 > 1);
```

- true, true
- 2: true, false
- 3: SyntaxError, SyntaxError,
- 4: false, false


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

```javascript
function printNumbers(first, second, first) {
    console.log(first, second, first);
}
p tNumbers(1, 2, 3);
```

- 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1


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

```javascript
const printNumbersArrow = (first, second, first) => {
    console.log(first, second, first);
};
p tNumbersArrow(1, 2, 3);
```

- 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1


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

```javascript
const arrowFunc = () => arguments.length;
c ole.log(arrowFunc(1, 2, 3));
```

- ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 1

Arrow functions do not have an `arguments, super, this, or new.target` bindings. So any reference to `arguments` variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

Where as the normal function provides the number of arguments passed to the function

```javascript
const func = function () {
    return arguments.length;
};
console.log(func(1, 2, 3));
```

But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

```javascript
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</p>
</details>

---

#### 14. What is the output of below code

```javascript
console.log(String.prototype.trimLeft.name === 'trimLeft');
c ole.log(String.prototype.trimLeft.name === 'trimStart');
```

- 1: True, False
- 2: False, True


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

```javascript
c ole.log(Math.max());
```

- undefined
- 2: Infinity
- 3: 0
- 4: -Infinity


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

```javascript
console.log(10 == [10]);
c ole.log(10 == [[[[[[[10]]]]]]]);
```

- True, True
- 2: True, False
- 3: False, False
- 4: False, True


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 1

As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below

```javascript
10 === Number([10].valueOf().toString()); // 10
```

So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.

</p>
</details>

---

#### 17. What is the output of below code

```javascript
console.log(10 + '10');
c ole.log(10 - '10');
```

- 20, 0
- 2: 1010, 0
- 3: 1010, 10-10
- 4: NaN, NaN


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

```javascript
console.log([0] == false);
if ([0]) {
    console.log("I'm True");
} else {
    console.log("I'm False");
}
`

-  True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False


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

```javascript
c ole.log([1, 2] + [3, 4]);
```

- [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4


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

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
c ole.log(browser);
```

- {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}


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

```javascript
c ole.log(NaN === NaN);
```

- 1: True
- 2: False


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

```javascript
let numbers = [1, 2, 3, 4, NaN];
c ole.log(numbers.indexOf(NaN));
```

- 4
- 2: NaN
- 3: SyntaxError
- 4: -1


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 4

The `indexOf` uses strict equality operator(===) internally and `NaN === NaN` evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always.
But you can use `Array.prototype.findIndex` method to find out the index of NaN in an array or You can use `Array.prototype.includes` to check if NaN is present in an array or not.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</p>
</details>

---

#### 23. What is the output of below code

```javascript
let [a, ...b,] = [1, 2, 3, 4, 5];
c ole.log(a, b);
```

- 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 3

When using rest parameters, trailing commas are not allowed and will throw a SyntaxError.
If you remove the trailing comma then it displays 1st answer

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
```

</p>
</details>

---

#### 25. What is the output of below code

```javascript
async function func() {
    return 10;
}
c ole.log(func());
```

- Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<rejected\>: 10}


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 1

Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,

```javascript
function func() {
    return Promise.resolve(10);
}
```

</p>
</details>

---

#### 26. What is the output of below code

```javascript
async function func() {
    await 10;
}
c ole.log(func());
```

- Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<resolved\>: undefined}


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 4

The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a `.then` callback. In this case, there is no return expression at the end of the function. Hence, the default return value of `undefined` is returned as the resolution of the promise. The above async function is equivalent to below expression,

```javascript
function func() {
    return Promise.resolve(10).then(() => undefined);
}
```

</p>
</details>

---

#### 27. What is the output of below code

```javascript
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

- SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1


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

```javascript
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

- 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 4

The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.

But you control the array sequence using for..of loop,

```javascript
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

```javascript
var set = new Set();
set.add('+0').add('-0').add(NaN).add(undefined).add(NaN);
c ole.log(set);
```

- Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}


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

```javascript
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

c oe.log(sym1 === sym2, sym3 === sym4);
```

- true, true
- 2: true, false
- 3: false, true
- 4: false, false


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

```javascript
const sym1 = new Symbol('one');
c ole.log(sym1);
```

- SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol


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

```javascript
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
`

-  SyntaxError
- 2: It is not a string!, It is not a number!
- 3: It is not a string!, It is a number!
- 4: It is a string!, It is a number!


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

```javascript
console.log(JSON.stringify({ myArray: ['one', undefined, function () {}, Symbol('')] }));
c ole.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
```

- {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}


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

```javascript
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

- 1: A, A
- 2: A, B


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

```javascript
const [x, ...y,] = [1, 2, 3, 4];
c ole.log(x, y);
```

- 1, [2, 3, 4]
- 2: 1, [2, 3]
- 3: 1, [2]
- 4: SyntaxError


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

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
c ole.log(y);
```

- 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined


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

```javascript
function area({ length = 10, width = 20 }) {
    console.log(length * width);
}

a();
```

- 200
- 2: Error
- 3: undefined
- 4: 0


<details>


<summary>

<b>Answer</b>


</summary>


<p>

##### Answer: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error `Error: Cannot read property 'length' of undefined` as mentioned above.

You can avoid the error with either of the below changes,

1. **Pass at least an empty object:**

```javascript
function area({ length = 10, width = 20 }) {
    console.log(length * width);
}

area({});
```

2. **Assign default empty object:**

```javascript
function area({ length = 10, width = 20 } = {}) {
    console.log(length * width);
}

area();
```

</p>

</details>

---

#### 38. What is the output of below code

```javascript
const props = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Tom' }
];

const [, , { name }] = props;
c ole.log(name);
```

- Tom
- 2: Error
- 3: undefined
- 4: John


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

```javascript
function checkType(num = 1) {
    console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
c kType(null);
```

- number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, number


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

```javascript
function add(item, items = []) {
    items.push(item);
    return items;
}

console.log(add('Orange'));
c ole.log(add('Apple'));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']


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

```javascript
function greet(greeting, name, message = greeting + ' ' + name) {
    console.log([greeting, name, message]);
}

greet('Hello', 'John');
g t('Hello', 'John', 'Good morning!');
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']


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

```javascript
function outer(f = inner()) {
    function inner() {
        return 'Inner';
    }
}
o r();
```

- 1: ReferenceError
- 2: Inner


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

```javascript
function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
m n(1, 2);
```

- [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]


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

```javascript
const obj = { key: 'value' };
const array = [...obj];
c ole.log(array);
```

- ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']


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

```javascript
function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = new myGenFunc();
c ole.log(myGenObj.next().value);
```

- 1
- 2: undefined
- 3: SyntaxError
- 4: TypeError


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

```javascript
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

- { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }


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

```javascript
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
`

-  1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1


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

```javascript
const num = 0o38;
c ole.log(num);
```

- 1: SyntaxError
- 2: 38


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

```javascript
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
`

- 1: 100
- 2: ReferenceError


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

```javascript
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

- undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window


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

```javascript
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

- SyntaxError
- 2: BMW vehicle started, BMW car started
- 3: BMW car started, BMW vehicle started
- 4: BMW car started, BMW car started


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

```javascript
const USER = { age: 30 };
USER.age = 25;
c ole.log(USER.age);
```

- 30
- 2: 25
- 3: Uncaught TypeError
- 4: SyntaxError


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

```javascript
c ole.log('🙂' === '🙂');
```

- 1: false
- 2: true


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

```javascript
c ole.log(typeof typeof typeof true);
```

- string
- 2: boolean
- 3: NaN
- 4: number


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

```javascript
let zero = new Number(0);

if (zero) {
    console.log('If');
} else {
    console.log('Else');
}
`

-  If
- 2: Else
- 3: NaN
- 4: SyntaxError


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

```javascript
let msg = 'Good morning!!';

msg.name = 'John';

c ole.log(msg.name);
```

- ""
- 2: Error
- 3: John
- 4: Undefined


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

```javascript
let count = 10;

(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
} ;
```

- 11, 10
- 2: 11, 11
- 3: 10, 11
- 4: 10, 10


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

---

---
