Most Common Javascript Errors
=============================

Written in quiz format

------------------------------------------------------------------------

### Most Common Javascript Errors

#### Written in quiz format

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*Z3bZOpQH9SFYpYZh.jpg" class="graf-image" /></figure>

### Javascript Errors

**1. How do you halt program execution with an instance of an error object in JavaScript?**

-   <span id="f2d5">Using the keyword throw you can throw your own runtime errors that will stop program execution.</span>

**2. What kind of error is thrown when a variable or parameter is not of a valid type?**

-   <span id="a3e9">A TypeError is thrown when an operation cannot be performed because the operand is a value of the wrong type.</span>

**3. What kind of error will be thrown when the below code is executed?**

    function callPuppy() {
      const puppy = "puppy";
      console.log(pupy);
    }

    callPuppy();

-   <span id="d2cc">ReferenceError: pupy is not defined</span>

**4. What kind of error will be thrown when the below code is run?**

    function broken () {
      console.log("I'm broke")
    }}

-   <span id="d2b1">SyntaxError: Unexpected token ‘}’</span>

**5. What kind of error will the below code throw when executed?**

    const puppy = "puppy";

    puppy = "apple";

-   <span id="1ca0">TypeError: Assignment to constant variable.</span>

**6. What kind of error will the below code throw when executed?**

    let dog;

    dog();

-   <span id="bd34">TypeError: dog is not a function</span>

**7. What type of block will allow you to run an erroring function then continue the execution of code after that function is run?**

-   <span id="656d">We can use try…catch blocks with functions that might throw an error to catch that error and continue code execution after that error was thrown</span>

**8. What type of error is thrown when a non-existent variable is referenced?**

-   <span id="a260">The ReferenceError object represents an error when a non-existent variable is referenced.</span>

**9. When is a JavaScript Error Object thrown?**

-   <span id="55cf">The Error object is how JavaScript deals with runtime errors — so at code runtime!</span>

**10. When kind of error is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language?**

-   <span id="af0c">A SyntaxError is thrown when there is an error in the syntax of the executed code.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NV9Oo1MMTGfTlHWs.jpeg" class="graf-image" /></figure>### My Blog:

<a href="https://master--bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://master--bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>master--bgoonz-blog.netlify.app</a><a href="https://master--bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/311ea1356a3d).

<a href="https://medium.com/@bryanguner/most-common-javascript-errors-311ea1356a3d" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
