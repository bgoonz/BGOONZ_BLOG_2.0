Web Developer’s Technical Glossary
==================================

This will be a running list as I make updates!

------------------------------------------------------------------------

### Web Developer’s Technical Appendix

This will be a running list as I make updates!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Cnf7R_30Pu8Wur3b.jpg" class="graf-image" /></figure>

------------------------------------------------------------------------

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

------------------------------------------------------------------------

### Update Terms:

### CDN

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7kT2S7lsQbsJUk7Q.png" class="graf-image" /></figure>Content Delivery Network

This is typically a paid service you can use to get great performance for your app. Many CDNs act as caching proxies to your origin server; some require you to upload your assets to them. They give you a URL for each resource in your app. This URL will resolve differently for folks depending on where they’re browsing.

Behind the scenes, the CDN will distribute your content geographically with the goal of end-users being able to fetch your content with the lowest latency possible. For example, if a user is in India, they’d likely get content served from India faster than from the United States.

### CoffeeScript, TypeScript

These are both languages that compile to JavaScript. You’re able to write your code using the syntax they offer and when ready you compile your TypeScript or CoffeeScript into JavaScript.

<a href="http://www.stoutsystems.com/articles/coffeescript-versus-typescript/" class="markup--anchor markup--p-anchor" title="http://www.stoutsystems.com/articles/coffeescript-versus-typescript/">CoffeeScript vs TypeScript</a>

### Evergreen browsers

Browsers that update themselves (without user intervention).

<a href="http://tomdale.net/2013/05/evergreen-browsers/" class="markup--anchor markup--p-anchor" title="http://tomdale.net/2013/05/evergreen-browsers/">Evergreen Browsers</a>

### ES3, ES5, ES5.1, ES6 (aka ES2015), etc

ES stands for ECMAScript, which is the specification that JavaScript is based on. The number that follows is the version of the specification.

Most browsers support at least ES5, and some even have ES6 (also known as ES2015) support. You can check each browser’s support (including yours) here:

-   <span id="280c"><a href="http://kangax.github.io/compat-table/es5/" class="markup--anchor markup--li-anchor" title="http://kangax.github.io/compat-table/es5/">ES5 support</a></span>
-   <span id="f676"><a href="http://kangax.github.io/compat-table/es6/" class="markup--anchor markup--li-anchor" title="http://kangax.github.io/compat-table/es6/">ES6 support</a></span>

<a href="https://en.wikipedia.org/wiki/ECMAScript" class="markup--anchor markup--p-anchor" title="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a>

### LESS, Sass

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Zgup2nchwl-taGZMniA46w.png" class="graf-image" /></figure>Both LESS and Sass are types of CSS preprocessor markup intended to give you much more control over your CSS. During the build process, the LESS or Sass resources compile down to vanilla CSS (which can be executed in a browser).

<a href="https://gist.github.com/chriseppstein/674726" class="markup--anchor markup--p-anchor" title="https://gist.github.com/chriseppstein/674726">Sass/Less Comparison</a>

### Linter, linting, jslint, jshint

A validation tool which checks for common issues in your JavaScript. You’d usually use this in your build process to enforce quality in your codebase. A great example of something to check for: *making sure you’ve always got your semicolons*.

<a href="http://jshint.com/docs/options/" class="markup--anchor markup--p-anchor" title="http://jshint.com/docs/options/">An example of some of the options you can configure</a>

### Polyfill

This is a concept that typically means providing JavaScript which tests for features that are missing (prototypes not defined, etc) and “fills” them by providing an implementation.

### Promise

Asynchronous calls typically return a promise (or deferred). This is an object which has a state: it can be given handlers for when it’s fulfilled or rejected.

Ember makes use of these in places like the model hook for a route. Until the promise resolves, Ember is able to put the route into a “loading” state.

-   <span id="a026"><a href="https://promisesaplus.com/" class="markup--anchor markup--li-anchor" title="https://promisesaplus.com/">An open standard for sound, interoperable JavaScript promises</a></span>
-   <span id="f0eb"><a href="http://emberjs.com/guides/routing/asynchronous-routing/#toc_a-word-on-promises" class="markup--anchor markup--li-anchor" title="http://emberjs.com/guides/routing/asynchronous-routing/#toc_a-word-on-promises">emberjs.com — A word on promises</a></span>

### SSR

Server Side Rendering

<a href="http://emberjs.com/blog/2014/12/22/inside-fastboot-the-road-to-server-side-rendering.html" class="markup--anchor markup--p-anchor" title="http://emberjs.com/blog/2014/12/22/inside-fastboot-the-road-to-server-side-rendering.html">Inside FastBoot: The Road to Server-Side Rendering</a>

### Transpile

When related to JavaScript, this can be part of your build process which “transpiles” (converts) your ES6 syntax JavaScript to JavaScript that is supported by current browsers.

Besides ES6, you’ll see a lot of content about compiling/transpiling CoffeeScript, a short-hand language which can “compile” to JavaScript.

-   <span id="3730">Ember CLI specifically uses <a href="https://babeljs.io/" class="markup--anchor markup--li-anchor" title="https://babeljs.io/">Babel</a> via the <a href="https://github.com/babel/ember-cli-babel" class="markup--anchor markup--li-anchor" title="https://github.com/babel/ember-cli-babel">ember-cli-babel</a> plugin.</span>

### Shadow DOM

Not to be confused with Virtual DOM. Shadow DOM is still a work in progress, but basically a proposed way to have an “isolated” DOM encapsulated within your app’s DOM.

Creating a re-usable “widget” or control might be a good use-case for this. Browsers implement some of their controls using their own version of a shadow DOM.

-   <span id="0bcb"><a href="http://www.w3.org/TR/shadow-dom/" class="markup--anchor markup--li-anchor" title="http://www.w3.org/TR/shadow-dom/">W3C Working Draft</a></span>
-   <span id="df28"><a href="http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/" class="markup--anchor markup--li-anchor" title="http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/">What the Heck is Shadow DOM?</a></span>

### Virtual DOM

Not to be confused with Shadow DOM. The concept of a virtual DOM means abstracting your code (or in our case, Ember) away from using the browser’s DOM in favor of a “virtual” DOM that can easily be accessed for read/writes or even serialized.

------------------------------------------------------------------------

**Adaptive Web Design (AWD)** — encourages the creation of several versions of a  
web page for a specified number of device dimensions. Which template to display  
is determined in the HTTP GET request which recognises the screen size of the  
device. Adaptive Web Design was introduced to deal with mobile browsing when  
most sites were optimised for desktop only. As devices now exist in many sizes  
and dimensions from different mobile brands through tablets to desktops,  
**Responsive Web Design** has become a popular and more flexible alternative.

**Authentication** — the process of verifying that you are who you say you are  
E.g. when you login to your email you use a password to authenticate your  
identity. Other methods for authentication include using an ID card or  
fingerprint/biometric method.

**Authorization** — check that you are authorised (have permission) to perform a  
certain action or to see a given page. E.g. admin users are authorised to create  
new users on the website.

**Declarations** — in JavaScript declarations are `var`, `const` and `let` for  
the creation of variables, constants and lexically scoped variables.

**Closure** — the scope where a variable can be accessed. A function used within another function can access the parent function’s variables since its scope extends to its parent.

In this example, the variable `color` is accessible to the function `displayColor()`.

    function color() {
        var color = 'red';
        function displayColor() {
            alert(color);
        }
        displayColor();
    }

**CSS Box Model** — the concept that in HTML all elements are contained within  
rectangles or boxes. Each box consists of: margins, borders, padding, and the  
actual content.

**Customer relationship management (CRM)** — a CRM system allows businesses to  
manage business relationships and the data and information associated with them.  
E.g. using CRM to track holiday bookings for a holiday bookings site. The CRM  
would have information on the customer and the trip they’re planning/ have  
booked and any staff members or actions that may need taking to progress or  
confirm their booking.

**Create, Read, Update, and Delete (CRUD)** — CRUD refers to the 4 basic  
operations you can perform on data in a relational database application. Create  
a new data entry, read or retrieve existing data from the database, update the  
value of an existing piece of data or delete an existing piece of data.

**Cross-Origin Resource Sharing (CORS)** — is a specification that allows  
specified resources on a web page to be requested from another domain outside  
the domain from which the first resource was served. E.g. uploading images using  
different domains using Amazon S3. For more about origin policies see  
‘Same-origin Policy’.

<a href="https://en.wikipedia.org/wiki/JavaScript_syntax#Destructuring_assignment" class="markup--anchor markup--p-anchor"><strong>Destructuring Assignment</strong></a> -  
the ability to unpack and assign variables when there are multiple parameters.

A way to simply assign the variables and then swap their values.

    let x, y;
    [x, y] = [5, 6];
    // x = 5, y = 6
    [y, x] = [x, y];
    // x = 6, y = 5

To assign values from an object.

    let obj = { 'a': 1, 'b': {'b1': '1.1'}}
    let {a, b, b:{b1}} = obj
    // a = 1, b = {'b1': '1.1'}, b1 = 1.1

There is an extensive list found <a href="https://stackoverflow.com/questions/54605286/what-is-destructuring-assignment-and-its-uses" class="markup--anchor markup--p-anchor">here</a> for more examples.

**Domain Name** — the characters/words used to identify a website after `http://` or  
`www.`. The domain name consists of two parts. Take this example:  
`https://dwyl.com`, `dwyl` makes up the **second level domain (SLD)** which is  
then followed by `.com` which what is known as the **top level domain (TLD)** or  
**parent domain**. Other examples of top level domains are: `.org`, `.co.uk`  
`.io`. Domain names are the more memorable and user-friendly representation of a  
website's **IP address**. Domain names are registered under the **Domain Name  
System (DNS)**.

**Domain Name System (DNS)** — a distributed global directory of website domain  
names (and other internet resources). The directory stores already registered  
domain names along with their corresponding IP addresses.

<a href="https://en.wikipedia.org/wiki/Hexadecimal" class="markup--anchor markup--p-anchor"><strong>Hexadecimal</strong></a> — Uses 16 different symbols. “0”-”9" to represent the values 0 to 9 and “A”-”F” (“a”-”f” is acceptable too) to represent the values 10 to 15. It’s common to use  
hexadecimals when working in CSS to assign colors to your elements.

The hexadecimal for dwyl’s logo color is \#4bc0a9 (teal).  
To convert the hexadecimal into RGB values, do the following:

    R = 4b
    G = c0
    B = a9

    Convert the letters to their numerical value.
    b = 11
    c = 12
    a = 10

    Red: 4 * (16^1) + 11 * (16^0) = 75
    Green: 12 * (16^1) + 0 * (16^0) = 192
    Blue: 10 * (16^1) + 9 * (16^0) = 169

Hex: \#4bc0a9 is RGB: 75, 192, 169.

**Hoisting** — Hoisting is JavaScript’s default behaviour of moving `var`  
declarations to the top of the current **scope** when your code is run. What  
this means is that whatever line your write a `var` declaration on e.g. `var x;`,  
when your code is run it will automatically be lifted and read as if it were  
written on the top lines of your current **scope** (to the top of the current  
script or the current function).

This means that you can use `var`'s higher up in the code before the line you've  
declared them on. So this example:

    x = "hello";
    console.log(x)     // logs 'hello'
    var x;            //  declaring `x` which is hoisted as if it were written at the top on compilation

Is read by the computer like this:

    var x;            //  declaring `x` which has been hoisted to the top line on compilation
    x = "hello";
    console.log(x)     // logs 'hello'

**Higher-order Function** — Functions that take other functions as parameters and/or return a function. Some examples of these types of functions are the `map` and `reduce` method used for arrays. They both accept a function to use on the elements in the given array.

    // perform an action twice
    function twice (func, value) {
      return func(func(value));
    }

    // func can be any simple (preferably pure) function:
    function func (value) {
      return value + 3;
    }

    console.log(twice(func, 1)); // 7
    console.log(twice(func, 7)); // 13

Not to be confused with pure functions, <a href="https://github.com/dwyl/learn-redux/issues/40#issuecomment-272489779" class="markup--anchor markup--p-anchor">this comment</a> explains the difference between the variations.

**Hypertext Transfer Protocol (HTTP)** — the set of rules for transferring files  
(text, graphic images, sound, video, and other multimedia files) on the World  
Wide Web. When you enter http:// in your address bar in front of the domain, it  
tells the browser to connect over HTTP.

**Initialisation** — defining a variable and providing it with an initial value:  
e.g. `var x = 1;`.

**Internet Protocol (IP) Address** — a unique series of numbers or hexadecimal  
digits used to identify a website.

**Microservices** — the practice of running multiple web/application servers  
simultaneously. It is a widely accepted/used application architecture used in  
most companies. Lambda Functions are an example of a micro Node.js Server.

**Polymorphism** — the ability for an object to take on many forms or types e.g.  
when a parent class is used to refer to a child class object. **Operator  
overloading** is one form of polymorphism. It is not used in Javascript but is a  
feature of C++, Scala, Ruby, Haskell and Rust.

**Progressive Web App (PWA)** — PWAs are traditional websites that are enhanced  
with modern web technologies, allowing them to provide a more app-like  
experience. They offer functionality such as being saved as a tile on your  
mobile home screen, working offline and push notifications. The “progressive”  
part means they’re “progressively enhanced” with newer features, which means  
they’ll also work in older browsers that don’t support the new features. Unlike  
native apps, they don’t have to be updated/listed in the app store although it  
is possible to list them in the app store when this is desired.

<a href="https://www.softwaretestingmaterial.com/regression-testing/" class="markup--anchor markup--p-anchor"><strong>Regression Testing</strong></a> -  
the re-running of existing tests to ensure that new changes/fixes have not  
broken any existing functionality. We should perform regression testing any time  
we modify an application, automated testing is a convenient way to achieve this.

**REPL (READ, EVAL, PRINT, LOOP)** — a REPL is an interactive toplevel or  
language shell. A simple, interactive computer programming environment that  
takes single user inputs (i.e. single expressions), evaluates them, and returns  
the result to the user. They are a handy tool for experimenting with  
functionality outside of the context of a project.

**Responsive Web Design (RWD)** — is designing one version of a web page which  
reorders and resizes content in response to the size of a browser **at any given  
point**, not just predetermined device sizes. This means the design of the site  
is optimised for all screen sizes. See Adaptive Design for another approach to  
designing.

**Same-origin Policy** — Under this security policy implemented by web browsers,  
a document (i.e. like a web page) hosted on server A can only interact with  
other documents that are also on server A. In short, the same-origin policy  
enforces that documents that interact with each other have the same origin.

**Search Engine Optimisation (SEO)** — is the process of improving the visibility  
of a website or web page in unpaid/organic search engine results. There are many  
aspects to SEO and search engines change how it’s calculated over time. It may  
include the use of key words on a page, how often you add/edit content on your  
site, to the way other sites link to you on the web.

**Semantic HTML** — semantic HTML is the use of HTML elements that accurately  
describe what they contain/are being used for E.g. a `<p>` tag indicates that the  
text within it is a paragraph whereas a `<nav>` tag should contain navigation  
content and a `<footer>` should appear at the end of the page.

**Syntactic Sugar** — syntactic sugar refers to syntax in a language that is  
designed to make things easier to read. The syntax makes the language “sweeter”  
to use as things can be expressed more clearly or concisely. Something can be  
considered “syntactic sugar” if it could be removed from the language without  
removing any functionality on what the language can do. For example ternary  
operators in Javascript: `x ? a : b` doesn't require the ternary operator syntax  
it could also be expressed with an `if/else` statement:

    if(x)
     { a }
    else
     { b }

**Technical Debt** — Technical  
debt is the time/cost of “re-working” a feature (or entire app) because corners  
were cut the first time it was built. Think of Technical Debt like a “loan shark”  
for your project, if you take “shortcuts” to implement a feature quickly (e.g:  
by skipping tests) you will pay for it later and usually with “interest”. For  
more detail see: <a href="https://github.com/dwyl/product-owner-guide#what-is-technical-debt" class="markup--anchor markup--p-anchor">https://github.com/dwyl/product-owner-guide#what-is-technical-debt</a>

**Transmission Control Protocol (TCP)** -  
TCP is a protocol which exists to enable the establishment of a connection and  
the exchange of streams of data (multiple  
<a href="https://www.techopedia.com/definition/6751/data-packet" class="markup--anchor markup--p-anchor">data packets</a>) between  
one or more computers. TCP guarantees the delivery of data and that packets will  
be delivered in the same order in which they were sent.

**Transmission Control Protocol (TCP) handshake** -  
A TCP handshake or three-way handshake is the first part in a three part process  
for TCP data transfer between a local host/client and a server. The handshake is  
a three-step method that requires both the client and server to exchange SYN and  
ACK (acknowledgment) packets to establish a connection before actual data  
communication begins.

Sources:

1.  <span id="8d0d">) <a href="https://www.techopedia.com/definition/10339/three-way-handshake" class="markup--anchor markup--li-anchor">https://www.techopedia.com</a></span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 14, 2021](https://medium.com/p/2066beae5e96).

<a href="https://medium.com/@bryanguner/web-developers-technical-glossary-2066beae5e96" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 6, 2021.
