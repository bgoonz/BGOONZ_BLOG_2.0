Objects In JavaScript
=====================

The object is a data structure that stores other data, similar to how an array stores elements.

------------------------------------------------------------------------

### Objects In JavaScript

#### The `object` is a data structure that stores other data, similar to how an array stores elements.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*p8Mho_ONNupan--Z.png" class="graf-image" /></figure>-   <span id="5c25">The object differs in that each `value` stores in an obj is associated with a `key`.</span>

### **The Object**

In other programming languages, objects are referred to as, “dictionaries”, “maps”, or “associative arrays”.

-   <span id="53af">Objects are indexed with `keys` instead of numbers.</span>
-   <span id="2cc0">Order is not guaranteed within an Object.</span>
-   <span id="ac45">Objects are defined by using curly braces `{}`</span>
-   <span id="2ca3">You can think of Objects as tables.</span>

#### **Setting Keys and Values**

-   <span id="d19c">We assign values to an object by defining the name of the key in brackets and assigning it to a value.</span>

<!-- -->

    > car {
        color: "Blue",
        seats: 2
    }

    >
    "color" in car;
    true

        >
        "model" in car;
    false

-   <span id="6499">If we try to access a key that has not yet been assigned within an object we will output undefined.</span>
-   <span id="7d01">The **preferred method** for checking to see if an object exists at a key is to use the `in` operator.</span>

#### **Using Variables as Keys**

-   <span id="e833">It is useful to set a variable as a key because variables can be re-assigned new values — this way we can quickly access different data and also create new key/value pairs.</span>

### Using Different Notations

**Dot notation:**

-   <span id="bec1">Property identifies can only be alphanumeric (and `_` and `$`)</span>
-   <span id="d353">Property identifiers cannot start with a number.</span>
-   <span id="0c2b">Property identifiers cannot contain variables.</span>
-   <span id="b348">OK — `obj.prop_1`, `obj.prop$`</span>
-   <span id="bebd">Not OK — `obj.1prop`, `obj.prop name`</span>

**Bracket notation:**

-   <span id="1e9e">Property identifiers have to be a String or a variable that references a String.</span>
-   <span id="a2b7">It is okay to use variables, spaces, and Strings that start with numbers</span>
-   <span id="6893">OK — `obj["1prop"]`, `obj["prop name"]`</span>

<!-- -->

    >
    let dog = {};
    undefined

        >
        dog.bark = "Bowowowo";
    "Bowowowowo"

    >
    dog.bark "Bowowowo"

        >
        dog {
            bark: "Bowowowowo"
        }

-   <span id="ec54">We can also use **dot notation** **“.”** to access key/value pairs in an object.</span>
-   <span id="cd22">One thing to note is that when using dot notation, we do not have to use string quotes as the key.</span>

#### **Bracket Notation vs Dot Notation**

**DotBracket**Easier To ReadYou can use variables as keys! Easier To Write b/c do not need Quotations. Okay to use variables and Strings that start with numbers.Cannot access with VariablesKeys cannot contain numbers as their first character

-   <span id="8f18">**When accessing object keys**: Bracket notation needs to refer to that key in quotations, dot notation doesn’t.</span>
-   <span id="83be">**When accessing object keys via a variable**: Bracket notation can refer to that key w/o use of quotations, dot notation can’t do this at all.</span>

<!-- -->

-   <span id="872f">As illustrated above, the dot notation cannot access a variable key — since it takes a **literal** interpretation of the key.</span>

You can put an object together in a single statement.

    let myDog = {
        name: "Fido",
        type: "Doge",
        age: 2,
        favoriteToys: ["bone", "ball"],
    };

#### **Operator Precedence Revisited**

-   <span id="ffba">The concept of Operator Precedence also applies to objects.</span>
-   <span id="79e4">There are two types of associativity:</span>
-   <span id="1883">`Right Associativity` : When code is evaluated right to left.</span>

<!-- -->

    a = b = 1;

    - Since **assignment of variables** takes lowest precedence, we end up evaluating b = 1 first before a = b.

-   <span id="3d7c">`Left Associativity` : When code is evaluated left to right.</span>

<!-- -->

    let id = "header";
        let element = document.getElementById(id).value;

    - We first resolve the document variable, then use dot notation to retrieve the getElementById function, we eval it's arguments, access it's value, and then retrieve assignment \(the lowest precedence\).

### Iterating Through Objects

Because objects store **unordered** key-value pairs, we do not rely on indices to access values; instead, we rely on our keys.

#### **A New Kind of For Loop**

> SYNTAX: for (let variable in object) {statement};

-   <span id="6607">We use a special syntax to iterate through each key of an object called a `for-in loop`.</span>

#### **Methods vs Functions**

A `Method` is a function that belongs to an object. Every method is a function, but not every function is a method.

    myFunc is a
    function
    myObject.myFunc is a method of the object myObject
    myObject["myFunc"] is a method of the object myObject

-   <span id="417a">**Methods** are just a key-value pair where the **key is the function name and the value is the function definition**.</span>

<!-- -->

-   <span id="cf41">To invoke these methods we just need to specify which object is calling that method.</span>

<!-- -->

    myObject.methodName();

#### **Useful Object Methods**

-   <span id="dd4b">`Object.keys()` : A method that allows us to iterate through keys, it accepts an obj as the argument and returns an array of the keys.</span>
-   <span id="0d49">`Object.values()` : Method that accepts an object as the argument and returns an array of the values.</span>

#### **Iterating through an Object’s keys & values**

-   <span id="b2aa">`Object.entries` : Method that accepts an object as the argument and returns an array of the \[key, value\] pairs within.</span>

<!-- -->

    > Object.entries(cat)[['name', 'Freyja'], ['color', 'orange']]

### References vs Primitives

#### **Primitives vs Objects**

So far we have learned about 6 different data types:

-   <span id="9e34">**Primitive**: Boolean, Null, Undefined, Number, String.</span>
-   <span id="a9e1">**Reference**: Object (Arrays are a type of object)</span>
-   <span id="4684">Remember that **primitive** types are immutable!</span>

#### **Immutability**

-   <span id="7e6d">When we reassign primitives we simply have our variable point elsewhere in memory.</span>
-   <span id="701f">In a nutshell, **immutability** cannot change values in memory, but only reassign where our variables are pointing to.</span>

#### **Mutability**

-   <span id="0930">If we change either cat1 or cat2, our computer memory will change because they are both pointing at the same memory location.</span>

### Rest and Spread

#### **Using the Spread Operator and Rest Parameter Syntax** **Accepting Arguments**

-   <span id="f131">Just keep in mind that the function will still run even if it is not passed any arguments.</span>
-   <span id="ecdf">Parameters will take just as many arguments as they need even if more than enough is offered.</span>
-   <span id="ff36">We will encounter an error if there are not enough parameters ( &gt; 0).</span>

#### **Utilizing Rest Parameters**

-   <span id="6379">`Rest Parameter Syntax` : Allows us to capture all of a function's incoming arguments into an array.</span>
-   <span id="0807">Only the last parameter can be a rest parameter.</span>

#### **Utilizing Spread Syntax**

-   <span id="71ff">**Spread Operator**: This allows us to break down a data type into the elements that make it up.</span>
-   <span id="6ef0">Takes a data type (i.e. array, obj) and spreads the values of that type where elements are expected.</span>
-   <span id="15e5">Takes iterable data and spreads the elements of that type where arguments are expected.</span>

<!-- -->

    let numArray = [1, 2, 3];

    // here we are taking `numArray` and *spreading* it into a new array where
    // comma separated elements are expected to be
    let moreNums = [...numArray, 4, 5, 6];

    >
    moreNums
    // => [1, 2, 3, 4, 5, 6]

**With Objects**

------------------------------------------------------------------------

### Learn More On My Blog:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 27, 2021](https://medium.com/p/b212486dade6).

<a href="https://medium.com/@bryanguner/objects-in-javascript-b212486dade6" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
