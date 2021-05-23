# Callbacks

### 

In JavaScript, a callback is a [function](https://www.javascripttutorial.net/javascript-function/) passed into another function as an argument to be executed later.

Suppose that you the following `numbers` array:

 `let numbers = [1, 2, 4, 7, 3, 5, 6]; `

Code language: JavaScript \(javascript\)

To find all the odd numbers in the array, you can use the `[filter()](https://www.javascripttutorial.net/javascript-array-filter/)` method of the [Array](https://www.javascripttutorial.net/javascript-array/) object.

The `filter()` method creates a new array with the elements that pass the test implemented by a function.

The following test function returns `true` if a number is an odd number:

 `function isOddNumber(number) { return number % 2; }`

Code language: JavaScript \(javascript\)

Now, you can pass the `isOddNumber()` to the `filter()` method:

 `const oddNumbers = numbers.filter(isOddNumber); console.log(oddNumbers); `

Code language: JavaScript \(javascript\)

In this example, the `isOddNumber` is a callback function. When you pass a callback function into another function, you just pass the reference of the function i.e., the function name without the parentheses `()` .

To make it shorter, you can use an anonymous function as a callback:

 `let oddNumbers = numbers.filter(function(number) { return number % 2; }); console.log(oddNumbers); `

Code language: JavaScript \(javascript\)

In ES6, you can use the [arrow functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/):

 `let oddNumbers = numbers.filter(number => number % 2); `

Code language: JavaScript \(javascript\)

When you use the JavaScript on web browsers, you often listen to an event e.g., a button click and carry some actions if the event occurs.

Suppose that you have a button with the id `btn` :

 `<button id="btn">Save</button>`

Code language: HTML, XML \(xml\)

To execute some code when the button is clicked, you use a callback and pass it to the `addEventListener()` method:

\`function btnClicked\(\) {

} let btn = document.querySelector\('\#btn'\); btn.addEventListener\('click', btnClicked\); \`

Code language: JavaScript \(javascript\)

The `btnClicked` in this example is a callback. When the button is clicked, the `btnClicked()` function is called to carry some actions.

Now, you have the basic ideas of callbacks: **passing a function into another function.**

Callbacks are used in two ways: synchronous and asynchronous functions.

### Synchronous callback functions

If your code executes sequentially from top to bottom, it is synchronous. The `isOddNumber()` function is an example of a synchronous callback function.

In the following example, the arrow function is a callback used in a synchronous function.

The `sort()` method completes first before the `console.log()` executes:

 `let numbers = [1, 2, 4, 7, 3, 5, 6]; numbers.sort((a, b) => a - b); console.log(numbers); `

Code language: JavaScript \(javascript\)

### Asynchronous callback functions

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and [event loop](https://www.javascripttutorial.net/javascript-event-loop/).

Suppose that you need to develop a script that downloads a picture from a remote server and process it after the download completes:

\` `function download(url) {`

 `}`

 `function process(picture) {`

 `}`

``download(url); process(picture); 

```

Code language: JavaScript \(javascript\)

However, downloading a picture from a remote server takes time depending on the network speed and the size of the picture.

The following code uses the `setTimeout()` function to simulate the `download()` function:

```javascript
function download(url) { setTimeout(() => {   
     console.log(`Downloading ${url} ...`);
}, 3* 1000);
};
```

Code language: JavaScript \(javascript\)

And this code emulates the `process()` function:

` `function process(picture) { console.log(` Processing ${picture} `); }` `

Code language: JavaScript \(javascript\)

When you execute the following code:

\`let url = '[https://www.javascripttutorial.net/foo.jg](https://www.javascripttutorial.net/foo.jg)'; 

download\(url\); process\(url\); \`

Code language: JavaScript \(javascript\)

you will get the following output:

 `Processing https: Downloading https:`

Code language: JavaScript \(javascript\)

This is not what you expected because the `process()` function executes before the `download()` function. The correct sequence should be:

* Download the picture, wait for it to complete.
* Process the picture.

To fix the issue above, you can pass the `process()` function to the `download()` function and execute the `process()` function inside the `download()` function once the download completes, like this:

```javascript
function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);

        callback(url);
    }, 3000);
}
```

function process\(picture\) { console.log\( `Processing ${picture}` \); }

let url = '[https://wwww.javascripttutorial.net/pic.jpg](https://wwww.javascripttutorial.net/pic.jpg)'; download\(url, process\); \ `\`

Code language: JavaScript \(javascript\)

Output:

 `Downloading https: Processing https:`

Code language: JavaScript \(javascript\)

Now, it works as expected.

In this example, the `process()` is a callback passed into an asynchronous function.

When you use callbacks to continue code execution after asynchronous operations, these callbacks are called asynchronous callbacks.

By using asynchronous callbacks, you can register an action in advance without blocking the entire operation.

To make the code cleaner, you can define the `process()` function as an anonymous function:

```javascript
function download(url, callback) {
    setTimeout(() => {

        console.log(`Downloading ${url} ...`);

        callback(url);

    }, 3000);
}
```

let url = '[https://www.javascripttutorial.net/pic.jpg](https://www.javascripttutorial.net/pic.jpg)'; download\(url, function\(picture\) { console.log\( `Processing ${picture}` \); }\); \ `\`

Code language: JavaScript \(javascript\)

#### Handling errors

The `download()` function assumes that everything works fine and does not consider any exceptions. The following code introduces two callbacks: `success` and `failure` to handle the success and failure cases respectively:

```javascript
  function download(url, success, failure) {
      setTimeout(() => {
          console.log(`Downloading ${url} ...`);

          let error = url.length === 0 || !url;

          error ? failure(url) : success(url);
      }, 3000);
  }
```

download\('', function\(picture\) { console.log\( `Processing the picture ${picture}` \); }, function\(picture\) { console.log\( `Handling error...` \); } \); \ `\`

Code language: JavaScript \(javascript\)

#### Nesting callbacks and the Pyramid of Doom

How do you download three pictures and process them sequentially? A typical approach is to call the `download()` function inside the callback function, like this:

\ `\` function download\(url, callback\) { setTimeout\(\(\) =&gt; {

```text
    console.log(`Downloading ${url} ...`);

    callback(url);
}, 3000);
}
```

```javascript
const url1 = '
https: //www.javascripttutorial.net/pic1.jpg
    '; const url2 = '
https: //www.javascripttutorial.net/pic2.jpg
    '; const url3 = '
https: //www.javascripttutorial.net/pic3.jpg
    ';

download(url1, function(picture) {
            console.log(Processing $ {
                picture
            });
            download(url2, function(picture) {
                console.log(`Processing ${picture}`);

                download(url3, function(picture) {
                    console.log(`Processing ${picture}`);
                });
            });
```

}\); \ `\`

Code language: JavaScript \(javascript\)

Output:

 `Downloading https: Processing https: Downloading https: Processing https: Downloading https: Processing https:`

Code language: JavaScript \(javascript\)

The script works perfectly fine.

However, this callback strategy does not scale well when the complexity grows significantly.

Nesting many asynchronous functions inside callbacks is known as the **pyramid of doom** or the **callback hell**:

 `asyncFunction(function(){ asyncFunction(function(){ asyncFunction(function(){ asyncFunction(function(){ asyncFunction(function(){ .... }); }); }); }); }); `

Code language: JavaScript \(javascript\)

To avoid the pyramid of doom, you use [promises](https://www.javascripttutorial.net/es6/javascript-promises/) or [async/await](https://www.javascripttutorial.net/es-next/javascript-async-await/) functions.

### Summary

* A callback is a function passed into another function as an argument to be executed later.
* Callback functions can be synchronous or asynchronous.

### 

### 

### 

### 

### What is a Callback Function?

In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.

So, we can also pass functions as parameters to other functions and call them inside the outer functions. Sounds complicated? Let me show that in an example below:

```text
function print(callback) {  
    callback();
}
```

The print\( \) function takes another function as a parameter and calls it inside. This is valid in JavaScript and we call it a “callback”. So a function that is passed to another function as a parameter is a callback function. But that’s not all.

**You can also watch the video version of callback functions below:**

#### Why do we need Callback Functions?

JavaScript runs code sequentially in top-down order. However, there are some cases that code runs \(or must run\) after something else happens and also not sequentially. This is called asynchronous programming.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. Let’s see how…

### How to create a Callback

To understand what I’ve explained above, let me start with a simple example. We want to log a message to the console but it should be there after 3 seconds.

```javascript
const message = function() {
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000);
```

There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time \(in milliseconds\). So here, the “message” function is being called after 3 seconds have passed. \(1 second = 1000 milliseconds\)

In other words, the message function is being called after something happened \(after 3 seconds passed for this example\), but not before. So the message function is an example of a callback function.

#### What is an Anonymous Function?

Alternatively, we can define a function directly inside another function, instead of calling it. It will look like this:

```javascript
setTimeout(function() {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

As we can see, the callback function here has no name and a function definition without a name in JavaScript is called as an “anonymous function”. This does exactly the same task as the example above.

#### Callback as an Arrow Function

If you prefer, you can also write the same callback function as an ES6 arrow function, which is a newer type of function in JavaScript:

```javascript
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

### What about Events?

JavaScript is an event-driven programming language. We also use callback functions for event declarations. For example, let’s say we want users to click on a button:

Click here

This time we will see a message on the console only when the user clicks on the button:

```javascript
document.queryselector("#callback-btn")
    .addEventListener("click", function() {
        console.log("User has clicked on the button!");
    });
```

So here we select the button first with its id, and then we add an event listener with the addEventListener method. It takes 2 parameters. The first one is its type, “click”, and the second parameter is a callback function, which logs the message when the button is clicked.

As you can see, callback functions are also used for event declarations in JavaScript.
