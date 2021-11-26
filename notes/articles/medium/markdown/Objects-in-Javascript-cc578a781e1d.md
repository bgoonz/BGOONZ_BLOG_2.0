Objects in Javascript
=====================

Codepen with examples for you to practice with below!

------------------------------------------------------------------------

### Objects in Javascript

#### Codepen with examples for you to practice with below!

<figure><img src="https://cdn-images-1.medium.com/max/800/1*F_xu5P1BJ300C3OixplWNA.png" class="graf-image" /></figure>### The Object Type

The `object` is a data structure that stores other data, similar to how an array stores elements.

Javascript simple types:

-   <span id="5a44">numbers *(has object-like methods but they are immutable)*</span>
-   <span id="8cd7">strings *(has object-like methods but they are immutable)*</span>
-   <span id="7ed9">booleans *(has object-like methods but they are immutable)*</span>
-   <span id="420c">null</span>
-   <span id="b51f">undefined</span>

All other values are *objects* including arrays and functions.

Objects are class free, can contain other objects and can inherit properties from their prototypes (which can *reduce object initialisation time and memory consumption*).

In other programming languages, objects are referred to as, “dictionaries”, “maps”, or “associative arrays”.

-   <span id="2839">Objects are indexed with `keys` instead of numbers.</span>
-   <span id="faa0">Order is not guaranteed within an Object.</span>
-   <span id="4575">Objects are defined by using curly braces `{}`</span>
-   <span id="0c11">You can think of Objects as tables.</span>

> *Fun Fact: Objects are affectionately known as POJO’s (Plain Old Javascript Objects)*

**Setting Keys and Values**

-   <span id="2d68">If we try to access a key that has not yet been assigned within an object we will output undefined.</span>
-   <span id="f945">The **preferred method** for checking to see if an object exists at a key is to use the operator.</span>

**Using Variables as Keys**

### Using Different Notations

**Bracket Notation vs Dot Notation**

Easier To Read

You can use variables as keys!

Easier To Write b/c do not need Quotations.

Okay to use variables and Strings that start with numbers.

Cannot access with Variables

Keys cannot contain numbers as their first character

-   <span id="7b34">**When accessing object keys**: Bracket notation needs to refer to that key in quotations, dot notation doesn’t.</span>
-   <span id="9e11">**When accessing object keys via a variable**: Bracket notation can refer to that key w/o use of quotations, dot notation can’t do this at all.</span>

**Putting it All Together**

You can put an object together in a single statement.

**Operator Precedence Revisited**

### Iterating Through Objects

Because objects store ***unordered*** key-value pairs, we do not rely on indices to access values; instead we rely on our keys.

**Methods vs Functions**

A is a function that *belongs* to an object. Every method is a function, but *not* every function is a method.

**Useful Object Methods**

-   <span id="b0e3">`Object.keys()` : A method that allows us to iterate through keys, it accepts an obj as the argument and returns an array of the keys.</span>
-   <span id="7fbd">`Object.values()` : Method that accepts an object as the argument and returns an array of the values.</span>

**Iterating through an Object’s keys & values**

### References vs Primitives

**Primitives vs Objects**

So far we have learned about 6 different data types:

-   <span id="5918">**Primitive** : Boolean, Null, Undefined, Number, String.</span>
-   <span id="d57e">**Reference** : Object (Arrays are a type of object)</span>
-   <span id="f915">Remember that **primitive** types are immutable!</span>

**Immutability**

-   <span id="85e1">When we reassign primitives we simply have our variable point elsewhere in memory.</span>
-   <span id="ae03">In a nutshell, **immutability** cannot change values in memory, but only reassign where our variables are pointing to.</span>

**Mutability**

### Rest and Spread

**Using the Spread Operator and Rest Parameter Syntax**  
**Accepting Arguments**

-   <span id="5f1f">Just keep in mind that function will still run even if it is not passed any arguments.</span>
-   <span id="e494">Parameters will take just as many arguments they need even if more than enough are offered.</span>
-   <span id="f2c8">We will encounter an error if there are not enough parameters ( &gt; 0).</span>

**Utilizing Rest Parameters**

-   <span id="e9b5">`Rest Parameter Syntax` : Allows us to capture all of a function's incoming arguments into an array.</span>
-   <span id="f072">Only the last parameter can be a rest parameter.</span>

**Utilizing Spread Syntax**

-   <span id="347a">Takes a data type (i.e. array, obj) and spreads the values of that type where elements are expected.</span>
-   <span id="4612">Takes iterable data and spreads the elements of that type where arguments are expected.</span>

### Destructuring

**Swapping Variables using destructuring**

**Destructuring objects into variables**

**Destructuring and the Rest Pattern**

### Destructuring Parameters

We can also destructure **incoming parameters** of a function.  
 This is very useful when we’re passing objects around to different functions.

------------------------------------------------------------------------

### Object Literals

-   <span id="b0a3">An object literal is *zero or more comma-separated name/value pairs surrounded by curly braces* {}</span>

<!-- -->

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

### Retrieval

-   <span id="ee43">Can be done with either dot notation `today.weather.morning` or with square brackets `today['month']`</span>
-   <span id="d7ae">Or operand (||) can be used to fill in default values for nonexistent data to prevent and *undefined* error: `var weath = today.weather.evening || "unknown"`</span>

### Update

-   <span id="2d21">Assigning a property value to an object overwrites any existing property values with that property name</span>

### Reference

-   <span id="413d">Objects refer to each other, they don’t hold duplicate copies of data</span>

### Prototype

-   <span id="b567">Every object has a prototype object from which it inherits properties</span>
-   <span id="943e">*Object.prototype* comes standard with Javascript and is almost like a ‘root parent’</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1MKtZt0a5gREie59" class="graf-image" /></figure>-   <span id="2293">The `Object.create` method is now available in ES5 (but the method is in the book if required for older versions)</span>
-   <span id="5001">If an object does not have a property you ask it for, it will keep looking up the prototype chain until it finds it</span>
-   <span id="abaf">If the property *does note exist* anywhere in the chain, it will return *undefined*</span>
-   <span id="03eb">A new property is *immediately visible* to all of the objects below it in the chain once created</span>

More details in <a href="https://github.com/Lambda-April/Unsorted-Notes/blob/main" class="markup--anchor markup--p-anchor">Chapter 6</a>

### Reflection

-   <span id="60ed">Determining what properties an object has</span>
-   <span id="a00d">Using `typeof` includes all properties in the prototype chain including functions</span>
-   <span id="4365">To avoid inherited properties, use `hasOwnProperty(type);` which returns *true* if that property exists only in that object itself (not the chain)</span>

<!-- -->

    today.hasOwnProperty(‘number’) //will return true today.hasOwnProperty(‘constructor’) //will return false

### Enumeration

-   <span id="ce3f">Best way to enumerate all the properties you want is a for loop:</span>

<!-- -->

    let i;
    let properties = [ ‘day’, ‘month’, ‘year’ ]; 
    for (i = 0; i < properties.length; i++) { 
        document.writeIn(properties[i] + ‘:’ + today[properties[i]]);
     }

-   <span id="5d1f">This ensures you get the properties you want (i.e. not up the prototype chain) and in the order you want, as opposed to a *for in* loop which achieves neither of these</span>

### Delete

-   <span id="546d">Removes property from object, but also reveals property from further up the prototype chain if it exists</span>
-   <span id="9258">Format: `delete today.month`</span>

### Global Abatement

-   <span id="5b97">One way to mitigate the risks of global variables is to *create a single global variable* which then contains your whole application</span>

<!-- -->

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

#### Further resources:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>Web-Dev-Resource-Hub</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [April 15, 2021](https://medium.com/p/cc578a781e1d).

<a href="https://medium.com/@bryanguner/objects-in-javascript-cc578a781e1d" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
