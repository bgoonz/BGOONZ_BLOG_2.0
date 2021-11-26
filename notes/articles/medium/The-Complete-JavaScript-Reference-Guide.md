The Complete JavaScript Reference Guide
=======================================

You will want to bookmark this

------------------------------------------------------------------------

### The Complete JavaScript Reference Guide

<figure><img src="https://cdn-images-1.medium.com/max/800/0*In5wB-29T0Ud_zs3.jpg" class="graf-image" /></figure>### How to learn effectively

**Learning**: The acquisition of skills and the ability to apply them in the future.

**What makes an Effective learner?**

-   <span id="7504">They are active listeners.</span>
-   <span id="179b">They are engaged with the material.</span>
-   <span id="3193">They are receptive of feedback.</span>
-   <span id="17d8">They are open to difficulty.</span>

**Why do active learning techniques feel difficult?**

-   <span id="7848">It feels difficult because you are constantly receiving feedback, and so you are constantly adapting and perfecting the material.</span>

**Desirable Difficulty**

-   <span id="67c9">The skills we wish to obtain is often a difficult one.</span>
-   <span id="c939">We want challenging but possible lessons based on current level of skill.</span>

**Effective learners space their practice**

-   <span id="59a4">Consistent effort &gt; cramming =&gt; for **durable knowledge**</span>

------------------------------------------------------------------------

### Getting visual feedback in your programs

The first command we’ll learn in JavaScript is `console.log`. This command is used to *print* something onto the screen. As we write our first lines of code, we’ll be using `console.log` frequently as a way to visually see the output of our programs. Let’s write our first program:

    console.log("hello world");
    console.log("how are you?");

Executing the program above would print out the following:

    hello world
    how are you?

Nothing too ground breaking here, but pay close attention to the exact way we wrote the program. In particular, notice how we lay out the periods, parentheses, and quotation marks. We’ll also terminate lines with semicolons (;).

> *Depending on how you structure your code, sometimes you’ll be able to omit semicolons at the end of lines. For now, you’ll want to include them just as we do.*

### Syntax

We refer to the exact arrangement of the symbols, characters, and keywords as **syntax**. These details matter — your computer will only be able to “understand” proper JavaScript syntax. A programming language is similar to a spoken language. A spoken language like English has grammar rules that we should follow in order to be understood by fellow speakers. In the same way, a programming language like JavaScript has syntax rules that we ought to follow!

As you write your first lines of code in this new language, you may make many syntax errors. Don’t get frustrated! This is normal — all new programmers go through this phase. Every time we recognize an error in our code, we have an opportunity to reinforce your understanding of correct syntax. Adopt a growth mindset and learn from your mistakes.

Additionally, one of the best things about programming is that we can get such immediate feedback from our creations. There is no penalty for making a mistake when programming. Write some code, run the code, read the errors, fix the errors, rinse and repeat!

### Code comments

Occasionally we’ll want to leave **comments** or notes in our code. Commented lines will be ignored by our computer. This means that we can use comments to write plain english or temporarily avoid execution of some JavaScript lines. The proper *syntax* for writing a comment is to begin the line with double forward slashes (`//`):

    // let's write another program!!!
    console.log("hello world");

    // console.log("how are you?");

    console.log("goodbye moon");

The program above would only print:

    hello world
    goodbye moon

Comments are useful when annotating pieces of code to offer an explanation of how the code works. We’ll want to strive to write straightforward code that is self-explanatory when possible, but we can also use comments to add additional clarity. The real art of programming is to write code so elegantly that it is easy to follow.

**The Number Data Type**

The **number** data type in JS is used to represent any numerical values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   <span id="f533">**+** (addition)</span>
-   <span id="5b9f">**-** (subtraction)</span>
-   <span id="b98b">**asterisk** (multiplication)</span>
-   <span id="9a15">**/** (division)</span>
-   <span id="c752">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of operations aka PEMDAS.

-   <span id="b6e3">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="9c25">*To force a specific order of operation, use the group operator ( ) around a part of the expression.*</span>

**Modulo** : Very useful operation to check divisibility of numbers, check for even & odd, whether a number is prime, and much more! *(Discrete Math concept, circular problems can be solved with modulo)*

-   <span id="cf5b">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.   
     console.log(7 % 10) // =&gt; 7;</span>

**The String Data Type**

The **string** data type is a primitive data type that used to represent textual data.

-   <span id="e1b0">can be wrapped by either **single** or **double** quotation marks, *best to choose one and stick with it for consistency*.</span>
-   <span id="f8ad">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.  
     “That’s a great string”; (valid)  
       
     ‘Shakespeare wrote, “To be or not to be”’; (valid)  
       
     ‘That’s a bad string’; (invalid)</span>
-   <span id="b2cb">Alt. way to add other quotes within strings is to use template literals.  
     \`This is a temp’l’ate literal ${function}\` // use ${} to invoke functions within.</span>
-   <span id="7b1a">**.length** : property that can be appended to data to return the length.</span>
-   <span id="f633">empty strings have a length of zero.</span>
-   <span id="0a07">**indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].  
     console.log(“bootcamp”\[0\]); // =&gt; “b”  
     console.log(“bootcamp”\[10\]); // =&gt; “undefined”  
     console.log(“boots”\[1 \* 2\]); // =&gt; “o”  
     console.log(“boots”\[“boot”.length-1\]); // =&gt; “t”</span>
-   <span id="6482">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="e2f5">The index of the last character of a string is always one less than it’s length.</span>
-   <span id="2271">**indexOf()** : method used to find the first index of a given character within a string.  
     console.log(“bagel”.indexOf(“b”)); // =&gt; 0  
     console.log(“bagel”.indexOf(“z”)); // =&gt; -1</span>
-   <span id="8d68">if the character inside the indexOf() search does not exist in the string, the output will be -1.</span>
-   <span id="d15e">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="a275">**concatenate** : word to describe joining strings together into a single string.</span>

**The Boolean Data Type**

The **Boolean** data type is the simplest data type since there are only two values: **true** and **false**.

-   <span id="60da">**Logical Operators** (B*oolean Operators*) are used to establish logic in our code.</span>
-   <span id="139b">**!** (not) : reverses a Boolean value.  
     console.log(!true); // =&gt; false  
     console.log(!!false); // =&gt; false</span>
-   <span id="e412">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="99ad">**Short-Circuit Evaluation** : Because JS evalutes from left to right, expressions can “short-circuit”. For example if we have true on the left of an || logical comparison, it will stop evaluating and yield true instead of wasting resources on processing the rest of the statement.  
     console.log(true || !false) // =&gt; stops after it sees “true ||”</span>

**Comparison Operators**

All comparison operators will result in a boolean output.

**The relative comparators**

-   <span id="6fee">**&gt;** (greater than)</span>
-   <span id="0437">**&lt;** (less than)</span>
-   <span id="17ff">**&gt;=** (greater than or equal to)</span>
-   <span id="b2b4">**&lt;=** (less than or equal to)</span>
-   <span id="0c13">**===** (equal to)</span>
-   <span id="b73a">**!==** (not equal to)</span>

Fun Fact: “a” &lt; “b” is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so “a” is less than “b” because it appears earlier!

If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser.

**Difference between == and ===**

#### ===

Strict Equality, will only return true if the two comparisons are entirely the same.

#### ==

Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)

**Variables**

Variables are used to store information to be referenced and manipulated in a program.

-   <span id="c73d">We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).   
     let bootcamp = “App Academy”;  
     console.log(bootcamp); // “App Academy”</span>
-   <span id="7849">JS variable names can contain any alphanumeric characters, underscores, or dollar signs (cannot being with a number).</span>
-   <span id="ad76">If you do not declare a value for a variable, undefined is automatically set.   
     let bootcamp;  
     console.log(bootcamp); // undefined</span>
-   <span id="2188">We can change the value of a previously declared variable (let, not const) by re-assigning it another value.</span>
-   <span id="47ca">**let** is the updated version of **var**; there are some differences in terms of hoisting and global/block scope</span>

**Assignment Shorthand**

let num = 0;  
 num += 10; // same as num = num + 10  
 num -= 2; // same as num = num — 2  
 num /= 4; // same as num = num / 4  
 num \*= 7; // same as num = num \* 7

-   <span id="9c05">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>

**Functions**

A function is a procedure of code that will run when called. Functions are used so that we do not have to rewrite code to do the same thing over and over. (Think of them as ‘subprograms’)

-   <span id="366f">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="676f">Includes three things:</span>
-   <span id="80c2">Name of the function.</span>
-   <span id="f3a4">A list of *parameters* ()</span>
-   <span id="2b0e">The code to execute {}</span>
-   <span id="6879">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="8374">JS evaluates code top down, left to right.</span>
-   <span id="2687">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="0c3a">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="4207">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="e39f">When naming functions in JS always use camelCase and name it something appropriate.</span>

Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!

**Parameters and Arguments**

-   <span id="e94e">**Parameters** : Comma seperated variables specified as part of a function’s declaration.</span>
-   <span id="6740">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="004c">*If the number of arguments passed during a function invocation is different than the number of paramters listed, it will still work.*</span>
-   <span id="7da5">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

### Including Comments

Comments are important because they help other people understand what is going on in your code or remind you if you forgot something yourself. Keep in mind that they have to be marked properly so the browser won’t try to execute them.

In JavaScript you have two different options:

-   <span id="356d">Single-line comments — To include a comment that is limited to a single line, precede it with `//`</span>
-   <span id="ee3a">Multi-line comments — In case you want to write longer comments between several lines, wrap it in `/*` and `*/` to avoid it from being executed</span>

### Variables in JavaScript

Variables are stand-in values that you can use to perform operations. You should be familiar with them from math class.

### var, const, let

You have three different possibilities for declaring a variable in JavaScript, each with their own specialties:

-   <span id="4b29">`var` — The most common variable. It can be reassigned but only accessed within a function. Variables defined with `var` move to the top when the code is executed.</span>
-   <span id="d234">`const` — Can not be reassigned and not accessible before they appear within the code.</span>
-   <span id="0e3b">`let` — Similar to `const`, the `let` variable can be reassigned but not re-declared.</span>

### Data Types

Variables can contain different types of values and data types. You use `=` to assign them:

-   <span id="b276">Numbers — `var age = 23`</span>
-   <span id="5571">Variables — `var x`</span>
-   <span id="e26c">Text (strings) — `var a = "init"`</span>
-   <span id="1312">Operations — `var b = 1 + 2 + 3`</span>
-   <span id="9880">True or false statements — `var c = true`</span>
-   <span id="335a">Constant numbers — `const PI = 3.14`</span>
-   <span id="7221">Objects — `var name = {firstName:"John", lastName:"Doe"}`</span>

There are more possibilities. Note that variables are case sensitive. That means `lastname` and `lastName` will be handled as two different variables.

### Objects

Objects are certain kinds of variables. They are variables that can have their own values and methods. The latter are actions that you can perform on objects.

var person = {

firstName:”John”,

lastName:”Doe”,

age:20,

nationality:”German”

};

### The Next Level: Arrays

Next up in our JavaScript cheat sheet are arrays. Arrays are part of many different programming languages. They are a way of organizing variables and properties into groups. Here’s how to create one in JavaScript:

var fruit = \[“Banana”, “Apple”, “Pear”\];

Now you have an array called `fruit` which contains three items that you can use for future operations.

### Array Methods

Once you have created arrays, there are a few things you can do with them:

-   <span id="4e4b">`concat()` — Join several arrays into one</span>
-   <span id="5c02">`indexOf()` — Returns the first position at which a given element appears in an array</span>
-   <span id="45cd">`join()` — Combine elements of an array into a single string and return the string</span>
-   <span id="3a4e">`lastIndexOf()` — Gives the last position at which a given element appears in an array</span>
-   <span id="8fbb">`pop()` — Removes the last element of an array</span>
-   <span id="28e4">`push()` — Add a new element at the end</span>
-   <span id="0be2">`reverse()` — Sort elements in a descending order</span>
-   <span id="775e">`shift()` — Remove the first element of an array</span>
-   <span id="1063">`slice()` — Pulls a copy of a portion of an array into a new array</span>
-   <span id="53fd">`sort()` — Sorts elements alphabetically</span>
-   <span id="f551">`splice()` — Adds elements in a specified way and position</span>
-   <span id="c46b">`toString()` — Converts elements to strings</span>
-   <span id="ef66">`unshift()` —Adds a new element to the beginning</span>
-   <span id="4598">`valueOf()` — Returns the primitive value of the specified object</span>

### Operators

If you have variables, you can use them to perform different kinds of operations. To do so, you need operators.

### Basic Operators

-   <span id="5d34">`+` — Addition</span>
-   <span id="5fd9">`-` — Subtraction</span>
-   <span id="3b13">`*` — Multiplication</span>
-   <span id="521a">`/` — Division</span>
-   <span id="cf0f">`(...)` — Grouping operator, operations within brackets are executed earlier than those outside</span>
-   <span id="bb2a">`%` — Modulus (remainder )</span>
-   <span id="e837">`++` — Increment numbers</span>
-   <span id="71ea">`--` — Decrement numbers</span>

### Comparison Operators

-   <span id="a2b0">`==` — Equal to</span>
-   <span id="5105">`===` — Equal value and equal type</span>
-   <span id="c79c">`!=` — Not equal</span>
-   <span id="1f7f">`!==` — Not equal value or not equal type</span>
-   <span id="78c3">`>` — Greater than</span>
-   <span id="d40b">`<` — Less than</span>
-   <span id="081b">`>=` — Greater than or equal to</span>
-   <span id="d065">`<=` — Less than or equal to</span>
-   <span id="174d">`?` — Ternary operator</span>

### Logical Operators

-   <span id="cb7b">`&&` — Logical and</span>
-   <span id="b1ee">`||` — Logical or</span>
-   <span id="96d4">`!` — Logical not</span>

### Bitwise Operators

-   <span id="8cf7">`&` — AND statement</span>
-   <span id="02d5">`|` — OR statement</span>
-   <span id="e576">`~` — NOT</span>
-   <span id="9c66">`^` — XOR</span>
-   <span id="b343">`<<` — Left shift</span>
-   <span id="52b1">`>>` — Right shift</span>
-   <span id="1b5c">`>>>` — Zero fill right shift</span>

### Functions

JavaScript functions are blocks of code that perform a certain task. A basic function looks like this:

function name(parameter1, parameter2, parameter3) {

// what the function does

}

As you can see, it consists of the `function` keyword plus a name. The function’s parameters are in the brackets and you have curly brackets around what the function performs. You can create your own, but to make your life easier – there are also a number of default functions.

### Outputting Data

A common application for functions is the output of data. For the output, you have the following options:

-   <span id="a7a7">`alert()` — Output data in an alert box in the browser window</span>
-   <span id="0c44">`confirm()` — Opens up a yes/no dialog and returns true/false depending on user click</span>
-   <span id="9690">`console.log()` — Writes information to the browser console, good for debugging purposes</span>
-   <span id="0d4d">`document.write()` — Write directly to the HTML document</span>
-   <span id="16aa">`prompt()` — Creates a dialogue for user input</span>

### Global Functions

Global functions are functions built into every browser capable of running JavaScript.

-   <span id="f4f1">`decodeURI()` — Decodes a <a href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier" class="markup--anchor markup--li-anchor">Uniform Resource Identifier (URI)</a> created by `encodeURI` or similar</span>
-   <span id="c203">`decodeURIComponent()` — Decodes a URI component</span>
-   <span id="176a">`encodeURI()` — Encodes a URI into UTF-8</span>
-   <span id="6720">`encodeURIComponent()` — Same but for URI components</span>
-   <span id="e97b">`eval()` — Evaluates JavaScript code represented as a string</span>
-   <span id="390b">`isFinite()` — Determines whether a passed value is a finite number</span>
-   <span id="5d46">`isNaN()` — Determines whether a value is NaN or not</span>
-   <span id="f668">`Number()` —- Returns a number converted from its argument</span>
-   <span id="a5ff">`parseFloat()` — Parses an argument and returns a floating-point number</span>
-   <span id="a666">`parseInt()` — Parses its argument and returns an integer</span>

### JavaScript Loops

Loops are part of most programming languages. They allow you to execute blocks of code desired number of times with different values:

for (before loop; condition **for** loop; execute after loop) {

// what to do during the loop

}

You have several parameters to create loops:

-   <span id="ff62">`for` — The most common way to create a loop in JavaScript</span>
-   <span id="7ad1">`while` — Sets up conditions under which a loop executes</span>
-   <span id="c2f4">`do while` — Similar to the `while` loop but it executes at least once and performs a check at the end to see if the condition is met to execute again</span>
-   <span id="7157">`break` —Used to stop and exit the cycle at certain conditions</span>
-   <span id="f5c0">`continue` — Skip parts of the cycle if certain conditions are met</span>

### If — Else Statements

These types of statements are easy to understand. Using them, you can set conditions for when your code is executed. If certain conditions apply, something is done, if not — something else is executed.

if (condition) {

// what to do if condition is met

} **else** {

// what to do if condition is not met

}

A similar concept to `if else` is the `switch` statement. However, using the switch you select one of several code blocks to execute.

### Strings

Strings are what JavaScript calls to text that does not perform a function but can appear on the screen.

var person = “John Doe”;

In this case, `John Doe` is the string.

### Escape Characters

In JavaScript, strings are marked with single or double-quotes. If you want to use quotation marks in a string, you need to use special characters:

-   <span id="b4b1">`\'` — Single quote</span>
-   <span id="3b22">`\"` — Double quote</span>

Aside from that you also have additional escape characters:

-   <span id="b412">`\\` — Backslash</span>
-   <span id="1592">`\b` — Backspace</span>
-   <span id="3a72">`\f` — Form feed</span>
-   <span id="145a">`\n` — New line</span>
-   <span id="1416">`\r` — Carriage return</span>
-   <span id="95d4">`\t` — Horizontal tabulator</span>
-   <span id="d962">`\v` — Vertical tabulator</span>

### String Methods

There are many different ways to work with strings:

-   <span id="2021">`charAt()` — Returns a character at a specified position inside a string</span>
-   <span id="d3e5">`charCodeAt()` — Gives you the Unicode of a character at that position</span>
-   <span id="fdd1">`concat()` — Concatenates (joins) two or more strings into one</span>
-   <span id="009c">`fromCharCode()` — Returns a string created from the specified sequence of UTF-16 code units</span>
-   <span id="7ed3">`indexOf()` — Provides the position of the first occurrence of a specified text within a string</span>
-   <span id="2937">`lastIndexOf()` — Same as `indexOf()` but with the last occurrence, searching backward</span>
-   <span id="142d">`match()` — Retrieves the matches of a string against a search pattern</span>
-   <span id="6c18">`replace()` — Find and replace specified text in a string</span>
-   <span id="e279">`search()` — Executes a search for a matching text and returns its position</span>
-   <span id="6bcd">`slice()` — Extracts a section of a string and returns it as a new string</span>
-   <span id="e4ee">`split()` — Splits a string object into an array of strings at a specified position</span>
-   <span id="3a27">`substr()` — Similar to `slice()` but extracts a substring depending on a specified number of characters</span>
-   <span id="3d14">`substring()` — Also similar to `slice()` but can’t accept negative indices</span>
-   <span id="fa33">`toLowerCase()` — Convert strings to lower case</span>
-   <span id="3485">`toUpperCase()` — Convert strings to upper case</span>
-   <span id="4f96">`valueOf()` — Returns the primitive value (that has no properties or methods) of a string object</span>

### Regular Expression Syntax

Regular expressions are search patterns used to match character combinations in strings. The search pattern can be used for text search and text to replace operations.

### Pattern Modifiers

-   <span id="bb29">`e` — Evaluate replacement</span>
-   <span id="b6b8">`i` — Perform case-insensitive matching</span>
-   <span id="4f50">`g` — Perform global matching</span>
-   <span id="4add">`m` — Perform multiple line matching</span>
-   <span id="a073">`s` — Treat strings as a single line</span>
-   <span id="482b">`x` — Allow comments and whitespace in the pattern</span>
-   <span id="f6ad">`U` — Ungreedy pattern</span>

### Brackets

-   <span id="aae1">`[abc]` — Find any of the characters between the brackets</span>
-   <span id="e048">`[^abc]` — Find any character which is not in the brackets</span>
-   <span id="f9b5">`[0-9]` — Used to find any digit from 0 to 9</span>
-   <span id="ac71">`[A-z]` — Find any character from uppercase A to lowercase z</span>
-   <span id="6fce">`(a|b|c)` — Find any of the alternatives separated with `|`</span>

### Metacharacters

-   <span id="dcd6">`.` — Find a single character, except newline or line terminator</span>
-   <span id="e944">`\w` — Word character</span>
-   <span id="c4bf">`\W` — Non-word character</span>
-   <span id="7b81">`\d` — A digit</span>
-   <span id="a533">`\D` — A non-digit character</span>
-   <span id="1fcc">`\s` — Whitespace character</span>
-   <span id="374c">`\S` — Non-whitespace character</span>
-   <span id="72d0">`\b` — Find a match at the beginning/end of a word</span>
-   <span id="2d38">`\B` — A match not at the beginning/end of a word</span>
-   <span id="859b">`\0` — NUL character</span>
-   <span id="df4d">`\n` — A new line character</span>
-   <span id="5acd">`\f` — Form feed character</span>
-   <span id="833f">`\r` — Carriage return character</span>
-   <span id="4f31">`\t` — Tab character</span>
-   <span id="e618">`\v` — Vertical tab character</span>
-   <span id="dcfc">`\xxx` — The character specified by an octal number xxx</span>
-   <span id="cf5e">`\xdd` — Character specified by a hexadecimal number dd</span>
-   <span id="978f">`\uxxxx` — The Unicode character specified by a hexadecimal number XXXX</span>

### Quantifiers

-   <span id="e4cf">`n+` — Matches any string that contains at least one n</span>
-   <span id="be07">`n*` — Any string that contains zero or more occurrences of n</span>
-   <span id="4a93">`n?` — A string that contains zero or one occurrence of n</span>
-   <span id="91f0">`n{X}` — String that contains a sequence of X n’s</span>
-   <span id="097b">`n{X,Y}` — Strings that contain a sequence of X to Y n’s</span>
-   <span id="e9f2">`n{X,}` — Matches any string that contains a sequence of at least X n’s</span>
-   <span id="15b3">`n$` — Any string with n at the end of it</span>
-   <span id="5fc9">`^n` — String with n at the beginning of it</span>
-   <span id="2b42">`?=n` — Any string that is followed by a specific string n</span>
-   <span id="6ffa">`?!n` — String that is not followed by a specific string ni</span>

### Numbers and Math

In JavaScript, you can also work with numbers, constants and perform mathematical functions.

### Number Properties

-   <span id="3554">`MAX_VALUE` — The maximum numeric value representable in JavaScript</span>
-   <span id="c55d">`MIN_VALUE` — Smallest positive numeric value representable in JavaScript</span>
-   <span id="49e0">`NaN` — The “Not-a-Number” value</span>
-   <span id="3024">`NEGATIVE_INFINITY` — The negative Infinity value</span>
-   <span id="0bf4">`POSITIVE_INFINITY` — Positive Infinity value</span>

### Number Methods

-   <span id="9478">`toExponential()` — Returns the string with a rounded number written as exponential notation</span>
-   <span id="2ad0">`toFixed()` — Returns the string of a number with a specified number of decimals</span>
-   <span id="d464">`toPrecision()` — String of a number written with a specified length</span>
-   <span id="2244">`toString()` — Returns a number as a string</span>
-   <span id="bc1e">`valueOf()` — Returns a number as a number</span>

### Math Properties

-   <span id="9f68">`E` — Euler’s number</span>
-   <span id="a4df">`LN2` — The natural logarithm of 2</span>
-   <span id="0f06">`LN10` — Natural logarithm of 10</span>
-   <span id="1a92">`LOG2E` — Base 2 logarithm of E</span>
-   <span id="42e7">`LOG10E` — Base 10 logarithm of E</span>
-   <span id="1fbe">`PI` — The number PI</span>
-   <span id="2a56">`SQRT1_2` — Square root of 1/2</span>
-   <span id="aab4">`SQRT2` — The square root of 2</span>

### Math Methods

-   <span id="8836">`abs(x)` — Returns the absolute (positive) value of x</span>
-   <span id="ddb9">`acos(x)` — The arccosine of x, in radians</span>
-   <span id="a0c3">`asin(x)` — Arcsine of x, in radians</span>
-   <span id="c2ca">`atan(x)` — The arctangent of x as a numeric value</span>
-   <span id="8b93">`atan2(y,x)` — Arctangent of the quotient of its arguments</span>
-   <span id="b103">`ceil(x)` — Value of x rounded up to its nearest integer</span>
-   <span id="c68a">`cos(x)` — The cosine of x (x is in radians)</span>
-   <span id="d480">`exp(x)` — Value of Ex</span>
-   <span id="2954">`floor(x)` — The value of x rounded down to its nearest integer</span>
-   <span id="ff4d">`log(x)` — The natural logarithm (base E) of x</span>
-   <span id="b6a9">`max(x,y,z,...,n)` — Returns the number with the highest value</span>
-   <span id="dfb0">`min(x,y,z,...,n)` — Same for the number with the lowest value</span>
-   <span id="a6f1">`pow(x,y)` — X to the power of y</span>
-   <span id="8851">`random()` — Returns a random number between 0 and 1</span>
-   <span id="d32e">`round(x)` — The value of x rounded to its nearest integer</span>
-   <span id="fe9a">`sin(x)` — The sine of x (x is in radians)</span>
-   <span id="c244">`sqrt(x)` — Square root of x</span>
-   <span id="b5ef">`tan(x)` — The tangent of an angle</span>

### Dealing with Dates in JavaScript

You can also work with and modify dates and time with JavaScript. This is the next chapter in the JavaScript cheat sheet.

### Setting Dates

-   <span id="b187">`Date()` — Creates a new date object with the current date and time</span>
-   <span id="42f8">`Date(2017, 5, 21, 3, 23, 10, 0)` — Create a custom date object. The numbers represent a year, month, day, hour, minutes, seconds, milliseconds. You can omit anything you want except for a year and month.</span>
-   <span id="4e80">`Date("2017-06-23")` — Date declaration as a string</span>

### Pulling Date and Time Values

-   <span id="465e">`getDate()` — Get the day of the month as a number (1-31)</span>
-   <span id="1b08">`getDay()` — The weekday as a number (0-6)</span>
-   <span id="6d9e">`getFullYear()` — Year as a four-digit number (yyyy)</span>
-   <span id="a216">`getHours()` — Get the hour (0-23)</span>
-   <span id="388a">`getMilliseconds()` — The millisecond (0-999)</span>
-   <span id="a97f">`getMinutes()` — Get the minute (0-59)</span>
-   <span id="2427">`getMonth()` — Month as a number (0-11)</span>
-   <span id="b964">`getSeconds()` — Get the second (0-59)</span>
-   <span id="505d">`getTime()` — Get the milliseconds since January 1, 1970</span>
-   <span id="7c14">`getUTCDate()` — The day (date) of the month in the specified date according to universal time (also available for day, month, full year, hours, minutes etc.)</span>
-   <span id="d6b6">`parse` — Parses a string representation of a date and returns the number of milliseconds since January 1, 1970</span>

### Set Part of a Date

-   <span id="9a97">`setDate()` — Set the day as a number (1-31)</span>
-   <span id="d4f0">`setFullYear()` — Sets the year (optionally month and day)</span>
-   <span id="1a45">`setHours()` — Set the hour (0-23)</span>
-   <span id="8020">`setMilliseconds()` — Set milliseconds (0-999)</span>
-   <span id="7feb">`setMinutes()` — Sets the minutes (0-59)</span>
-   <span id="d7ca">`setMonth()` — Set the month (0-11)</span>
-   <span id="795d">`setSeconds()` — Sets the seconds (0-59)</span>
-   <span id="1d7f">`setTime()` — Set the time (milliseconds since January 1, 1970)</span>
-   <span id="78e1">`setUTCDate()` — Sets the day of the month for a specified date according to universal time (also available for day, month, full year, hours, minutes etc.)</span>

### DOM Mode

The DOM is the <a href="https://en.wikipedia.org/wiki/Document_Object_Model" class="markup--anchor markup--p-anchor">Document Object Model</a> of a page. It is the code of the structure of a webpage. JavaScript comes with a lot of different ways to create and manipulate HTML elements (called nodes).

### Node Properties

-   <span id="cfb7">`attributes` — Returns a live collection of all attributes registered to an element</span>
-   <span id="6138">`baseURI` — Provides the absolute base URL of an HTML element</span>
-   <span id="34da">`childNodes` — Gives a collection of an element’s child nodes</span>
-   <span id="58ec">`firstChild` — Returns the first child node of an element</span>
-   <span id="2f34">`lastChild` — The last child node of an element</span>
-   <span id="fdea">`nextSibling` — Gives you the next node at the same node tree level</span>
-   <span id="1ca4">`nodeName` —Returns the name of a node</span>
-   <span id="d4ee">`nodeType` — Returns the type of a node</span>
-   <span id="cd22">`nodeValue` — Sets or returns the value of a node</span>
-   <span id="a9a3">`ownerDocument` — The top-level document object for this node</span>
-   <span id="51b4">`parentNode` — Returns the parent node of an element</span>
-   <span id="31ef">`previousSibling` — Returns the node immediately preceding the current one</span>
-   <span id="ec40">`textContent` — Sets or returns the textual content of a node and its descendants</span>

### Node Methods

-   <span id="7f05">`appendChild()` — Adds a new child node to an element as the last child node</span>
-   <span id="3b3a">`cloneNode()` — Clones an HTML element</span>
-   <span id="661c">`compareDocumentPosition()` — Compares the document position of two elements</span>
-   <span id="86d2">`getFeature()` — Returns an object which implements the APIs of a specified feature</span>
-   <span id="059c">`hasAttributes()` — Returns true if an element has any attributes, otherwise false</span>
-   <span id="5d0d">`hasChildNodes()` — Returns true if an element has any child nodes, otherwise false</span>
-   <span id="4c86">`insertBefore()` — Inserts a new child node before a specified, existing child node</span>
-   <span id="4b38">`isDefaultNamespace()` — Returns true if a specified namespaceURI is the default, otherwise false</span>
-   <span id="8c4e">`isEqualNode()` — Checks if two elements are equal</span>
-   <span id="2f6a">`isSameNode()` — Checks if two elements are the same node</span>
-   <span id="944e">`isSupported()` — Returns true if a specified feature is supported on the element</span>
-   <span id="b7ef">`lookupNamespaceURI()` — Returns the namespace URI associated with a given node</span>
-   <span id="5f59">`lookupPrefix()` — Returns a DOMString containing the prefix for a given namespace URI if present</span>
-   <span id="6670">`normalize()` — Joins adjacent text nodes and removes empty text nodes in an element</span>
-   <span id="c80a">`removeChild()` — Removes a child node from an element</span>
-   <span id="8108">`replaceChild()` — Replaces a child node in an element</span>

### Element Methods

-   <span id="9530">`getAttribute()` — Returns the specified attribute value of an element node</span>
-   <span id="0dd1">`getAttributeNS()` — Returns string value of the attribute with the specified namespace and name</span>
-   <span id="8a0d">`getAttributeNode()` — Gets the specified attribute node</span>
-   <span id="fc41">`getAttributeNodeNS()` — Returns the attribute node for the attribute with the given namespace and name</span>
-   <span id="2a3e">`getElementsByTagName()` — Provides a collection of all child elements with the specified tag name</span>
-   <span id="11a4">`getElementsByTagNameNS()` — Returns a live HTMLCollection of elements with a certain tag name belonging to the given namespace</span>
-   <span id="e2ae">`hasAttribute()` — Returns true if an element has any attributes, otherwise false</span>
-   <span id="17dd">`hasAttributeNS()` — Provides a true/false value indicating whether the current element in a given namespace has the specified attribute</span>
-   <span id="f28c">`removeAttribute()` — Removes a specified attribute from an element</span>
-   <span id="8cd0">`removeAttributeNS()` — Removes the specified attribute from an element within a certain namespace</span>
-   <span id="e6c3">`removeAttributeNode()` — Takes away a specified attribute node and returns the removed node</span>
-   <span id="a7b9">`setAttribute()` — Sets or changes the specified attribute to a specified value</span>
-   <span id="bf42">`setAttributeNS()` — Adds a new attribute or changes the value of an attribute with the given namespace and name</span>
-   <span id="2322">`setAttributeNode()` — Sets or changes the specified attribute node</span>
-   <span id="0540">`setAttributeNodeNS()` — Adds a new namespaced attribute node to an element</span>

### Working with the User Browser

Besides HTML elements, JavaScript is also able to take into account the user browser and incorporate its properties into the code.

### Window Properties

-   <span id="1b1f">`closed` — Checks whether a window has been closed or not and returns true or false</span>
-   <span id="805f">`defaultStatus` — Sets or returns the default text in the status bar of a window</span>
-   <span id="458e">`document` — Returns the document object for the window</span>
-   <span id="93ee">`frames` — Returns all `<iframe>` elements in the current window</span>
-   <span id="c42a">`history` — Provides the History object for the window</span>
-   <span id="3a5d">`innerHeight` — The inner height of a window’s content area</span>
-   <span id="c609">`innerWidth` — The inner width of the content area</span>
-   <span id="5167">`length` — Find out the number of `<iframe>` elements in the window</span>
-   <span id="4f05">`location` — Returns the location object for the window</span>
-   <span id="4125">`name` — Sets or returns the name of a window</span>
-   <span id="3d7f">`navigator` — Returns the Navigator object for the window</span>
-   <span id="c601">`opener` — Returns a reference to the window that created the window</span>
-   <span id="734e">`outerHeight` — The outer height of a window, including toolbars/scrollbars</span>
-   <span id="9b0a">`outerWidth` — The outer width of a window, including toolbars/scrollbars</span>
-   <span id="3140">`pageXOffset` — Number of pixels the current document has been scrolled horizontally</span>
-   <span id="0bcc">`pageYOffset` — Number of pixels the document has been scrolled vertically</span>
-   <span id="a2af">`parent` — The parent window of the current window</span>
-   <span id="3634">`screen` — Returns the Screen object for the window</span>
-   <span id="9566">`screenLeft` — The horizontal coordinate of the window (relative to the screen)</span>
-   <span id="1245">`screenTop` — The vertical coordinate of the window</span>
-   <span id="5656">`screenX` — Same as `screenLeft` but needed for some browsers</span>
-   <span id="21e7">`screenY` — Same as `screenTop` but needed for some browsers</span>
-   <span id="d000">`self` — Returns the current window</span>
-   <span id="99af">`status` — Sets or returns the text in the status bar of a window</span>
-   <span id="0a0f">`top` — Returns the topmost browser window</span>

### Window Methods

-   <span id="5715">`alert()` — Displays an alert box with a message and an OK button</span>
-   <span id="4afc">`blur()` — Removes focus from the current window</span>
-   <span id="ef9a">`clearInterval()` — Clears a timer set with `setInterval()`</span>
-   <span id="fa72">`clearTimeout()` — Clears a timer set with `setTimeout()`</span>
-   <span id="7bce">`close()` — Closes the current window</span>
-   <span id="ccbf">`confirm()` — Displays a dialogue box with a message and an *OK* and *Cancel* button</span>
-   <span id="e6f2">`focus()` — Sets focus to the current window</span>
-   <span id="5eb7">`moveBy()` — Moves a window relative to its current position</span>
-   <span id="16b6">`moveTo()` — Moves a window to a specified position</span>
-   <span id="32d8">`open()` — Opens a new browser window</span>
-   <span id="4198">`print()` — Prints the content of the current window</span>
-   <span id="3bec">`prompt()` — Displays a dialogue box that prompts the visitor for input</span>
-   <span id="e16a">`resizeBy()` — Resizes the window by the specified number of pixels</span>
-   <span id="31c8">`resizeTo()` — Resizes the window to a specified width and height</span>
-   <span id="6c44">`scrollBy()` — Scrolls the document by a specified number of pixels</span>
-   <span id="959f">`scrollTo()` — Scrolls the document to specified coordinates</span>
-   <span id="704a">`setInterval()` — Calls a function or evaluates an expression at specified intervals</span>
-   <span id="87c3">`setTimeout()` — Calls a function or evaluates an expression after a specified interval</span>
-   <span id="1cde">`stop()` — Stops the window from loading</span>

### Screen Properties

-   <span id="7e50">`availHeight` — Returns the height of the screen (excluding the Windows Taskbar)</span>
-   <span id="d7ea">`availWidth` — Returns the width of the screen (excluding the Windows Taskbar)</span>
-   <span id="4feb">`colorDepth` — Returns the bit depth of the color palette for displaying images</span>
-   <span id="f2f7">`height` — The total height of the screen</span>
-   <span id="8e22">`pixelDepth` — The color resolution of the screen in bits per pixel</span>
-   <span id="bc5a">`width` — The total width of the screen</span>

### JavaScript Events

Events are things that can happen to HTML elements and are performed by the user. The programming language can listen for these events and trigger actions in the code. No JavaScript cheat sheet would be complete without them.

### Mouse

-   <span id="9546">`onclick` — The event occurs when the user clicks on an element</span>
-   <span id="9b50">`oncontextmenu` — User right-clicks on an element to open a context menu</span>
-   <span id="147a">`ondblclick` — The user double-clicks on an element</span>
-   <span id="3720">`onmousedown` — User presses a mouse button over an element</span>
-   <span id="a40a">`onmouseenter` — The pointer moves onto an element</span>
-   <span id="345e">`onmouseleave` — Pointer moves out of an element</span>
-   <span id="79b1">`onmousemove` — The pointer is moving while it is over an element</span>
-   <span id="fa70">`onmouseover` — When the pointer is moved onto an element or one of its children</span>
-   <span id="94f8">`onmouseout` — User moves the mouse pointer out of an element or one of its children</span>
-   <span id="486e">`onmouseup` — The user releases a mouse button while over an element</span>

### Keyboard

-   <span id="6a8f">`onkeydown` — When the user is pressing a key down</span>
-   <span id="0647">`onkeypress` — The moment the user starts pressing a key</span>
-   <span id="ff0f">`onkeyup` — The user releases a key</span>

### Frame

-   <span id="9d29">`onabort` — The loading of a media is aborted</span>
-   <span id="baa4">`onbeforeunload` — Event occurs before the document is about to be unloaded</span>
-   <span id="740e">`onerror` — An error occurs while loading an external file</span>
-   <span id="be95">`onhashchange` — There have been changes to the anchor part of a URL</span>
-   <span id="d0fd">`onload` — When an object has loaded</span>
-   <span id="65e5">`onpagehide` — The user navigates away from a webpage</span>
-   <span id="aae6">`onpageshow` — When the user navigates to a webpage</span>
-   <span id="e3dc">`onresize` — The document view is resized</span>
-   <span id="96c8">`onscroll` — An element’s scrollbar is being scrolled</span>
-   <span id="f2fa">`onunload` — Event occurs when a page has unloaded</span>

### Form

-   <span id="731a">`onblur` — When an element loses focus</span>
-   <span id="facf">`onchange` — The content of a form element changes (for `<input>`, `<select>` and `<textarea>`)</span>
-   <span id="7a0a">`onfocus` — An element gets focus</span>
-   <span id="5188">`onfocusin` — When an element is about to get focus</span>
-   <span id="594a">`onfocusout` — The element is about to lose focus</span>
-   <span id="700e">`oninput` — User input on an element</span>
-   <span id="dd0f">`oninvalid` — An element is invalid</span>
-   <span id="6cad">`onreset` — A form is reset</span>
-   <span id="f4f2">`onsearch` — The user writes something in a search field (for `<input="search">`)</span>
-   <span id="32a9">`onselect` — The user selects some text (for `<input>` and `<textarea>`)</span>
-   <span id="3e1d">`onsubmit` — A form is submitted</span>

### Drag

-   <span id="912c">`ondrag` — An element is dragged</span>
-   <span id="6897">`ondragend` — The user has finished dragging the element</span>
-   <span id="8225">`ondragenter` — The dragged element enters a drop target</span>
-   <span id="cf37">`ondragleave` — A dragged element leaves the drop target</span>
-   <span id="5bc3">`ondragover` — The dragged element is on top of the drop target</span>
-   <span id="2b0c">`ondragstart` — User starts to drag an element</span>
-   <span id="8e24">`ondrop` — Dragged element is dropped on the drop target</span>

### Clipboard

-   <span id="c299">`oncopy` — User copies the content of an element</span>
-   <span id="267c">`oncut` — The user cuts an element’s content</span>
-   <span id="e33c">`onpaste` — A user pastes the content in an element</span>

### Media

-   <span id="e0ab">`onabort` — Media loading is aborted</span>
-   <span id="0758">`oncanplay` — The browser can start playing media (e.g. a file has buffered enough)</span>
-   <span id="0bc2">`oncanplaythrough` — The browser can play through media without stopping</span>
-   <span id="4c27">`ondurationchange` — The duration of the media changes</span>
-   <span id="aa9a">`onended` — The media has reached its end</span>
-   <span id="25b8">`onerror` — Happens when an error occurs while loading an external file</span>
-   <span id="cdf4">`onloadeddata` — Media data is loaded</span>
-   <span id="edce">`onloadedmetadata` — Metadata (like dimensions and duration) are loaded</span>
-   <span id="7928">`onloadstart` — The browser starts looking for specified media</span>
-   <span id="159c">`onpause` — Media is paused either by the user or automatically</span>
-   <span id="057f">`onplay` — The media has been started or is no longer paused</span>
-   <span id="ce2a">`onplaying` — Media is playing after having been paused or stopped for buffering</span>
-   <span id="2655">`onprogress` — The browser is in the process of downloading the media</span>
-   <span id="a11c">`onratechange` — The playing speed of the media changes</span>
-   <span id="f8bb">`onseeked` — User is finished moving/skipping to a new position in the media</span>
-   <span id="9895">`onseeking` — The user starts moving/skipping</span>
-   <span id="c636">`onstalled` — The browser is trying to load the media but it is not available</span>
-   <span id="6480">`onsuspend` — The browser is intentionally not loading media</span>
-   <span id="f94b">`ontimeupdate` — The playing position has changed (e.g. because of fast forward)</span>
-   <span id="e96b">`onvolumechange` — Media volume has changed (including mute)</span>
-   <span id="9fe8">`onwaiting` — Media paused but expected to resume (for example, buffering)</span>

### Animation

-   <span id="4497">`animationend` — A CSS animation is complete</span>
-   <span id="fc16">`animationiteration` — CSS animation is repeated</span>
-   <span id="0f40">`animationstart` — CSS animation has started</span>

### Other

-   <span id="614b">`transitionend` — Fired when a CSS transition has completed</span>
-   <span id="5a40">`onmessage` — A message is received through the event source</span>
-   <span id="0dad">`onoffline` — The browser starts to work offline</span>
-   <span id="058e">`ononline` — The browser starts to work online</span>
-   <span id="090a">`onpopstate` — When the window’s history changes</span>
-   <span id="d940">`onshow` — A `<menu>` element is shown as a context menu</span>
-   <span id="3062">`onstorage` — A Web Storage area is updated</span>
-   <span id="2681">`ontoggle` — The user opens or closes the `<details>` element</span>
-   <span id="6a40">`onwheel` — Mouse wheel rolls up or down over an element</span>
-   <span id="7178">`ontouchcancel` — Screen-touch is interrupted</span>
-   <span id="bec5">`ontouchend` — User’s finger is removed from a touch-screen</span>
-   <span id="3b60">`ontouchmove` — A finger is dragged across the screen</span>
-   <span id="3c0e">`ontouchstart` — A finger is placed on the touch-screen</span>

### Errors

When working with JavaScript, different errors can occur. There are several ways of handling them:

-   <span id="54c9">`try` — Lets you define a block of code to test for errors</span>
-   <span id="cb14">`catch` — Set up a block of code to execute in case of an error</span>
-   <span id="6a5b">`throw` — Create custom error messages instead of the standard JavaScript errors</span>
-   <span id="6aea">`finally` — Lets you execute code, after try and catch, regardless of the result</span>

### Error Name Values

JavaScript also has a built-in error object. It has two properties:

-   <span id="ca3b">`name` — Sets or returns the error name</span>
-   <span id="7047">`message` — Sets or returns an error message in a string from</span>

The error property can return six different values as its name:

-   <span id="b389">`EvalError` — An error has occurred in the `eval()` function</span>
-   <span id="570c">`RangeError` — A number is “out of range”</span>
-   <span id="2352">`ReferenceError` — An illegal reference has occurred</span>
-   <span id="5019">`SyntaxError` — A syntax error has occurred</span>
-   <span id="0527">`TypeError` — A type error has occurred</span>
-   <span id="02a3">`URIError` — An `encodeURI()` error has occurred</span>

### Explicit Conversions

The simplest way to perform an explicit type conversion is to use the `Boolean(), Number()`, and `String()` functions.

Any value other than `null `or `undefined `has a` toString()` method.

`n.toString(2);`

binary

`n.toString(8);`

octal

`n.toString(16);`

hex

`let n = 123456.789;`

`n.toFixed(0)`

“123457”

`n.toFixed(5)`

“123456.78900”

`n.toExponential(3)`

“1.235e+5”

`n.toPrecision(7)`

“123456.8”

`n.toPrecision(10)`

“123456.7890”

`parseInt("3 blind mice")`

3

`parseFloat(" 3.14 meters")`

3.14

`parseInt("-12.34")`

-12

`parseInt("0xFF")`

255

### Types, Values, and Variables

### Links

**Resource**

**URL**

MDN

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="markup--anchor markup--p-anchor">https://developer.mozilla.org/en-US/docs/Web/JavaScript</a>

Run Snippets

<a href="https://developers.google.com/web/tools/chrome-devtools/javascript/snippets" class="markup--anchor markup--p-anchor">https://developers.google.com/web/tools/chrome-devtools/javascript/snippets</a>

### Explicit Conversions

The simplest way to perform an explicit type conversion is to use the `Boolean(), Number()`, and `String()` functions.

Any value other than `null `or `undefined `has a` toString()` method.

`n.toString(2);`

binary

`n.toString(8);`

octal

`n.toString(16);`

hex

`let n = 123456.789;`

`n.toFixed(0)`

“123457”

`n.toFixed(5)`

“123456.78900”

`n.toExponential(3)`

“1.235e+5”

`n.toPrecision(7)`

“123456.8”

`n.toPrecision(10)`

“123456.7890”

`parseInt("3 blind mice")`

3

`parseFloat(" 3.14 meters")`

3.14

`parseInt("-12.34")`

-12

`parseInt("0xFF")`

255

`parseInt("0xff")`

255

`parseInt("-0XFF")`

-255

`parseInt("0.1")`

0

`parseInt(".1")`

NaN: integers can’t start with “.”

`parseFloat("$72.47")`

NaN: numbers can’t start with “$”

Supply Radix

`parseInt("11", 2)`

3

`parseInt("ff", 16)`

255

`parseInt("077", 8)`

63

### Conversion Idioms

`x + ""`

`String(x)`

`+x`

`Number(x)`

`x-0`

`Number(x)`

`!!x`

`Boolean(x)`

### Destructuring Assignment

`let [x,y] = [1,2];`

let x=1, y=2

`[x,y] = [x + 1,y + 1];`

x = x + 1, y = y + 1

`[x,y] = [y,x];`

Swap the value of the two variables

Destructuring assignment makes it easy to work with functions that return arrays of values:

`let [r,theta] = toPolar(1.0, 1.0);`

    function toPolar(x, y) {

    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];

    }

Variable destructuring in loops:

`let o = { x: 1, y: 2 };`

    for(const [name, value] of Object.entries(o)) {

    console.log(name, value); // Prints "x 1" and "y 2"

    }

**Note**: The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a `for...in` loop. (The only important difference is that a `for...in` loop enumerates properties in the prototype chain as well).

The list of variables on the left can include extra commas to skip certain values on the right

`[,x,,y] = [1,2,3,4];`

x == 2; y == 4

**Note**: the last comma does not stand for a value.

To collect all unused or remaining values into a single variable when destructuring an array, use three dots `(...) `before the last variable name on the left-hand side

`let [x, ...y] = [1,2,3,4];`

y == \[2,3,4\]

`let [first, ...rest] = "Hello";`

first == “H”; rest ==\[“e”,”l”,”l”,”o”\]

Destructuring assignment can also be performed when the righthand side is an object value.

`let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};`

`let {r, g, b} = transparent;`

r == 0.0; g == 0.0; b == 0.0

`const {sin, cos, tan} = Math;`

sin=Math.sin, cos=Math.cos, tan=Math.tan

### Expressions and Operators

In JavaScript, the values `null `and `undefined `are the only two values that do not have properties. In a regular property access expression using . or \[\], you get a `TypeError` if the expression on the left evaluates to `null `or `undefined`. You can use `?.` and `?.[]` syntax to guard against errors of this type.

You can also invoke a function using `?.()` instead of `()`.

With the `new ?.()` invocation syntax, if the expression to the left of the `?.` evaluates to `null` or `undefined`, then the entire invocation expression evaluates to `undefined `and no exception is thrown.

Write the function invocation using `?.(),` knowing that invocation will only happen if there is actually a value to be invoked

    function square(x, log) {

    log?.(x); // Call the function if there is one

    return x * x;

    }

Note that expression `x++` is not always the same as `x = x + 1`.The `++` operator never performs string concatenation: it always converts its operand to a number and increments it. If x is the string "1", `++x` is the number 2, but` x + 1` is the string "11".

JavaScript objects are compared by reference, not by value. An object is equal to itself, but not to any other object. If two distinct objects have the same number of properties, with the same names and values, they are still not equal. Similarly, two arrays that have the same elements in the same order are not equal to each other.

`NaN `value is never equal to any other value, including itself! To check whether a value `x` is `NaN`, use `x !== `, or the global `isNaN()` function.

If both values refer to the same object, array, or function, they are equal. If they refer to different objects, they are not equal, even if both objects have identical properties.

### Evaluating Expressions

JavaScript has the ability to interpret strings of JavaScript source code, evaluating them to produce a value.

`eval("3+2")`

Because of security issues, some web servers use the HTTP “Content-Security-Policy” header to disable` eval()` for an entire website.

### First-Defined (??)

The first-defined operator `??` evaluates to its first defined operand: if its left operand is not `null` and not `undefined`, it returns that value.

`a ?? b` is equivalent to `(a !== null && a !== undefined) ? a : b`

`??` is a useful alternative to `||.` The problem with this idiomatic use is that zero, the empty string, and false are all `falsy `values that may be perfectly valid in some circumstances. In this code example, if `maxWidth `is zero, that value will be ignored. But if we change the `||` operator to `??`, we end up with an expression where zero is a valid value.

`let max = maxWidth || preferences.maxWidth || 500;`

`let max = maxWidth ?? preferences.maxWidth ?? 500;`

### delete Operator

Deleting an array element leaves a “hole” in the array and does not change the array’s length. The resulting array is sparse.

### void Operator

Using the `void` operator makes sense only if the operand has side effects.

`let counter = 0;`

`const increment = () => void counter++;`

`increment()`

undefined

`counter`

1

### Statements

Expressions are evaluated to produce a value, but statements are executed to make something happen.

Expressions with side effects, such as assignments and function invocations, can stand alone as statements, and when used this way are known as expression statements.

A similar category of statements are the declaration statements that declare new variables and define new functions.

If a function does not have any side effects, there is no sense in calling it, unless it is part of a larger expression or an assignment statement.

### for/of

The `for/of` loop works with iterable objects. Arrays, strings, sets, and maps are iterable.

Array

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;

    for(let element of data) {

    sum += element;

    }

    let text = "Na na na na na na na na";

    let wordSet = new Set(text.split(" "));

    let unique = [];

    for(let word of wordSet) {

    unique.push(word);

    }

String

    let frequency = {};

    for(let letter of "mississippi") {

    if (frequency[letter]) {

    frequency[letter]++;

    }

    else {

    frequency[letter] = 1;

    }

    }

Map

    let m = new Map([[1, "one"]]);

    for(let [key, value] of m) {

    key // => 1

    value // => "one"

    }

Objects are not (by default) iterable. Attempting to use `for/of` on a regular object throws a `TypeError` at runtime.

If you want to iterate through the properties of an object, you can use the `for/in` loop.

Note: `for/of` can be used on objects with `Object.entries` property, but it will not pick properties from object’s prototype.

### for/in

`for/in` loop works with any object after the `in`.

    for(let p in o) {

    console.log(o[p]);

    }

Note: this will enumerate array indexes, not values.

    for(let i in a) console.log(i);

The `for/in` loop does not actually enumerate all properties of an object. It does not enumerate properties whose names are symbols. And of the properties whose names are strings, it only loops over the `enumerable`properties.

### with

The with statement runs a block of code as if the properties of a specified object were variables in scope for that code.

The `with `statement is forbidden in strict mode and should be considered deprecated in non-strict mode: avoid using it whenever possible.

    document.forms[0].address.value

    with(document.forms[0]) {

    name.value = "";

    address.value = "";

    email.value = "";

    }

### debugger

If a debugger program is available and is running, then an implementation may (but is not required to) perform some kind of debugging action.

In practice, this statement acts like a breakpoint: execution of JavaScript code stops, and you can use the debugger to print variables’ values, examine the call stack, and so on.

Note that it is not enough to have a debugger available: the debugger statement won’t start the debugger for you. If you’re using a web browser and have the developer tools console open, however, this statement will cause a breakpoint.

### use strict

Strict mode is a restricted subset of the language that fixes important language deficiencies and provides stronger error checking and increased security.

The differences between strict mode and non-strict mode are the following:

· The `with `statement is not allowed in strict mode.

· In strict mode, all variables must be declared: a `ReferenceError `is thrown if you assign a value to an identifier that is not a declared variable, function, function parameter, catch clause parameter, or property of the global object.

· In non-strict mode, this implicitly declares a global variable by adding a new property to the global object.

· In strict mode, functions invoked as functions (rather than as methods) have a `this `value of undefined. (In non-strict mode, functions invoked as functions are always passed the global object as their `this `value.)

· A function is invoked with `call() `or `apply()` , the `this `value is exactly the value passed as the first argument to `call()` or `apply()`. (In non-strict mode, `null `and `undefined `values are replaced with the global object and non-object values are converted to objects.)

· In strict mode, assignments to non-writable properties and attempts to create new properties on non-extensible objects throw a `TypeError`. (In non-strict mode, these attempts fail silently.)

· In strict mode, code passed to `eval() `cannot declare variables or define functions in the caller’s scope as it can in non-strict mode. Instead, variable and function definitions live in a new scope created for the `eval()`. This scope is discarded when the `eval()` returns.

· In strict mode, the Arguments object in a function holds a static copy of the values passed to the function. In non-strict mode, the Arguments object has “magical” behavior in which elements of the array and named function parameters both refer to the same value.

· In strict mode, a `SyntaxError `is thrown if the `delete `operator is followed by an unqualified identifier such as a variable, function, or function parameter. (In non-strict mode, such a `delete `expression does nothing and evaluates to false.)

· In strict mode, an attempt to delete a non-configurable property throws a `TypeError`. (In non-strict mode, the attempt fails and the delete expression evaluates to false.)

· In strict mode, it is a syntax error for an object literal to define two or more properties by the same name. (In non-strict mode, no error occurs.)

### Objects

In addition to its name and value, each property has three property attributes:

· The `writable `attribute specifies whether the value of the property can be set.

· The `enumerable `attribute specifies whether the property name is returned by a `for/in` loop.

· The `configurable `attribute specifies whether the property can be deleted and whether its attributes can be altered.

### Prototypes

All objects created by object literals have the same prototype object, `Object.prototype.`

Objects created using the `new `keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype.

Object created by `new Object()` inherits from `Object.prototype`, just as the object created by `{}` does. Similarly, the object created by `new Array()` uses `Array.prototype` as its prototype, and the object created by` new Date()` uses `Date.prototype` as its prototype.

Almost all objects have a prototype, but only a relatively small number of objects have a `prototype `property. It is these objects with prototype properties that define the prototypes for all the other objects.

Most built-in constructors (and most user-defined constructors) have a prototype that inherits from `Object.prototype`.

`Date.prototype` inherits properties from `Object.prototype`, so a Date object created by `new Date()` inherits properties from both `Date.prototype` and `Object.prototype`. This linked series of prototype objects is known as a prototype chain.

### Creating Objects

Objects can be created with object literals, with the `new` keyword, and with the `Object.create()` function.

Literal

`let empty = {};`

`let point = { x: 0, y: 0 };`

    let book = {

    "main title": "JavaScript",

    "sub-title": "The Definitive Guide",

    for: "all audiences",

    author: {

    firstname: "David", .

    surname: "Flanagan"

    }

    };

`new`

`let o = new Object(); `  
 `let a = new Array(); `  
 `let d = new Date(); `  
 `let r = new Map();`

`Object.create`

`let o3 = Object.create(Object.prototype);`

Use `Object.create` to guard against accidental modifications:

    let o = { x: "don't change this value" };

    library.function(Object.create(o));

Note: the library function can modify the passed in object, but not the original `o` object

### Access Object Properties with an array (\[\]) notation

    let addr = "";

    for(let i = 0; i < 4; i++) {

    addr += customer[`address${i}`] + "\n";

    }

### Inheritance

`let o = {};`

`o.x = 1;`

`let p = Object.create(o);`

`p.y = 2;`

`let q = Object.create(p);`

`q.z = 3;`

Property `x` and `y` available on object `q`

`q.x + q.y`

### How to query for property which may be undefined

`surname = book && book.author && book.author.surname;`

`let surname = book?.author?.surname;`

### Deleting properties

The `delete` operator only deletes own properties, not inherited ones. (To delete an inherited property, you must delete it from the prototype object in which it is defined. Doing this affects every object that inherits from that prototype.)

`delete` does not remove properties that have a `configurable `attribute of false.

Certain properties of built-in objects are non-configurable, as are properties of the global object created by variable declaration and function declaration.

`delete Object.prototype`

false: property is non-configurable

`var x = 1;`

`delete globalThis.x`

false: can’t delete `this `property

`function f() {}`

`delete globalThis.f`

false

`globalThis.x = 1;`

`delete globalThis.x`

true

### Testing properties

To check whether an object has a property with a given name. You can do this with the `in` operator, with the `hasOwnProperty()` and `propertyIsEnumerable()` methods, or simply by querying the property

( `!= undefined`).

### in & query

`let o = { x: 1 };`

`"x" in o`

true

`o.x !== undefined`

`"y" in o`

false

`o.y !== undefined`

`"toString" in o`

true: o inherits a `toString `property

`o.toString !== undefined`

Advantage of using in: `in` can distinguish between properties that do not exist and properties that exist but have been set to `undefined`.

### hasOwnProperty

`let o = { x: 1 };`

`o.hasOwnProperty("x")`

true

`o.hasOwnProperty("y")`

false

`o.hasOwnProperty("toString")`

false: toString is an inherited property

The `propertyIsEnumerable()` returns true only if the named property is an own property and its `enumerable` attribute is true.

`let o = { x: 1 };`

`o.propertyIsEnumerable("x")`

true

`o.propertyIsEnumerable("toString")`

false: not an own property

`Object.prototype.propertyIsEnumerable("toString")`

false: not enumerable

### Enumerating properties

To guard against enumerating inherited properties with `for/in`, you can add an explicit check inside the loop body:

    for(let p in o) {

    if (!o.hasOwnProperty(p)) continue;

    }

    for(let p in o) {

    if (typeof o[p] === "function") continue;

    }

Functions you can use to get an array of property names

· `Object.keys()` returns an array of the names of the enumerable own properties of an object. It does not include non-enumerable properties, inherited properties, or properties whose name is a Symbol.

· `Object.getOwnPropertyNames()` works like `Object.keys() `but returns an array of the names of nonenumerable own properties as well.

· `Object.getOwnPropertySymbols()` returns own properties whose names are Symbols, whether or not they are enumerable.

· `Reflect.ownKeys()` returns all own property names, both enumerable and non-enumerable, and both string and Symbol.

### Extending Objects

To copy the properties of one object to another object

    let target = {x: 1}, source = {y: 2, z: 3};

    for(let key of Object.keys(source)) {

    target[key] = source[key];

    }

One reason to assign properties from one object into another is when you have an object that defines default values for many properties and you want to copy those default properties into another object if a property by that name does not already exist in that object. Using `Object.assign()` naively will not do what you want:

    Object.assign(o, defaults);

overwrites everything in o with defaults

Instead, use one of the following:,

`o = Object.assign({}, defaults, o);`

`o = {...defaults, ...o};`

### Serializing Objects

The functions `JSON.stringify()` and` JSON.parse()` serialize and restore JavaScript objects.

`let o = {x: 1, y: {z: [false, null, ""]}};`

`let s = JSON.stringify(o);`

s == ‘{“x”:1,”y”:{“z”:\[false,null,””\]}}’

`let p = JSON.parse(s);`

p == {x: 1, y: {z: \[false,null, “”\]}}

### Object methods

`toString(), valueOf(), loLocaleString(), toJSON()`

`let s = { x: 1, y: 1 }.toString();`

s == “\[object Object\]”

### Extended Object Literal Syntax

### Shorthand Properties

    let x = 1, y = 2;

    let o = {

    x: x,

    y: y

    };

←&gt;

`let x = 1, y = 2;`  
 `let o = { x, y };`

### Computer Property Names

`const PROPERTY_NAME = "p1";`  
 `function computePropertyName() { return "p" + 2; }`

    let o = {};

    o[PROPERTY_NAME] = 1;

    o[computePropertyName()] = 2;

←&gt;

    let p = {

    [PROPERTY_NAME]: 1,

    [computePropertyName()]: 2

    };

### Symbols as Property Names

    const extension = Symbol("my extension symbol");

    let o = {

    [extension]: {}

    };

    o[extension].x = 0;

Two Symbols created with the same string argument are still different from one another.

The point of Symbols is not security, but to define a safe extension mechanism for JavaScript objects. If you get an object from third-party code that you do not control and need to add some of your own properties to that object but want to be sure that your properties will not conflict with any properties that may already exist on the object, you can safely use Symbols as your property names.

### Spread Operator

You can copy the properties of an existing object into a new object using the “spread operator” … inside an object literal:

`let position = { x: 0, y: 0 };`  
 `let dimensions = { width: 100, height: 75 };`  
 `let rect = { ...position, ...dimensions };`  
 `rect.x + rect.y + rect.width + rect.height`

### Shorthand Methods

    let square = {

    area: function() {

    return this.side * this.side; },

    side: 10

    };

←&gt;

    let square = {

    area() {

    return this.side * this.side; },

    side: 10

    };

When you write a method using this shorthand syntax, the property name can take any of the forms that are legal in an object literal: in addition to a regular JavaScript identifier like the name area above, you can also use string literals and computed property names, which can include Symbol property names:

    const METHOD_NAME = "m";

    const symbol = Symbol();

    let weirdMethods = {

    "method With Spaces"(x) { return x + 1; },

    [METHOD_NAME](x) { return x + 2; },

    [symbol](x) { return x + 3; }

    };

`weirdMethods["method With Spaces"](1)`

2

`weirdMethods[METHOD_NAME](1)`

3

`weirdMethods[symbol](1)`

4

### Property Getters and Setters

    let o = {

    dataProp: value,

    get accessorProp() { return this.dataProp; },

    set accessorProp(value) { this.dataProp = value; }

    };

### Arrays

### Creating Arrays

· Array literals

· The … spread operator on an iterable object

· The `Array()` constructor

· The `Array.of()` and `Array.from()` factory methods

### Array literals

`let empty = [];`

`let primes = [2, 3, 5, 7, 11];`

`let misc = [ 1.1, true, "a", ];`

`let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];`

If an array literal contains multiple commas in a row, with no value between, the array is sparse

`let count = [1,,3];`

`let undefs = [,,];`

Array literal syntax allows an optional trailing comma, so `[,,]` has a length of 2, not 3.

### The Spread Operator

`let a = [1, 2, 3];`

`let b = [0, ...a, 4];`

\[0, 1, 2, 3, 4\]

create a copy of an array — modifying the copy does not change the original

`let original = [1,2,3];`  
 `let copy = [...original];`

`let digits = [..."0123456789ABCDEF"];`

\[“0”,”1",”2",”3",”4",”5",”6",”7",”8",”9",”A”,”B”,”C”,”D”,”E”,”F”\]

`let letters = [..."hello world"];`

\[“h”,”e”,”l”,”l””o”,””,”w”,”o””r”,”l”,”d”\]

`[...new Set(letters)]`

\[“h”,”e”,”l”,”o”,””,”w”,”r”,”d”\]

### Array.of()

When the `Array()` constructor function is invoked with one numeric argument, it uses that argument as an array length. But when invoked with more than one numeric argument, it treats those arguments as elements for the array to be created. This means that the `Array()` constructor cannot be used to create an array with a single numeric element.

`Array.of()`

\[\]

`Array.of(10)`

\[10\]

`Array.of(1,2,3)`

\[1, 2, 3\]

### Array.from()

It is also a simple way to make a copy of an array:

`let copy = Array.from(original);`

`Array.from()` is also important because it defines a way to make a true-array copy of an array-like object. Array-like objects are non-array objects that have a numeric length property and have values stored with properties whose names happen to be integers.

`let truearray = Array.from(arraylike);`

`Array.from()` also accepts an optional second argument. If you pass a function as the second argument, then as the new array is being built, each element from the source object will be passed to the function you specify, and the return value of the function will be stored in the array instead of the original value.

### Reading and Writing Array Elements

What is special about arrays is that when you use property names that are non-negative integers , the array automatically maintains the value of the `length` property for you.

JavaScript converts the numeric array index you specify to a string — the index 1 becomes the string “1”, then uses that string as a property name.

It is helpful to clearly distinguish an array index from an object property name. All indexes are property names, but only property names that are integers between 0 and 231 are indexes. All arrays are objects, and you can create properties of any name on them. If you use properties that are array indexes, however, arrays have the special behavior of updating their `length` property as needed.

Note that you can index an array using numbers that are negative or that are not integers. When you do this, the number is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a regular object property, not an array index.

`a[-1.23] = true;`

This creates a property named “-1.23”

`a["1000"] = 0;`

This the 1001st element of the array

`a[1.000] = 1;`

Array index 1. Same as a\[1\] = 1;

The fact that array indexes are simply a special type of object property name means that JavaScript arrays have no notion of an “out of bounds” error. When you try to query a nonexistent property of any object, you don’t get an error; you simply get `undefined`.

### Sparse Arrays

Sparse arrays can be created with the `Array()` constructor or simply by assigning to an array index larger than the current array length.

`a[1000] = 0;`

Assignment adds one element but sets length to 1001.

you can also make an array sparse with the `delete` operator.

Note that when you omit a value in an array literal (using repeated commas as in `[1,,3]`), the resulting array is sparse, and the omitted elements simply do not exist

### Array Length

if you set the length property to a nonnegative integer `n` smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array.

`a = [1,2,3,4,5];`

`a.length = 3;`

a is now \[1,2,3\].

`a.length = 0;`

Delete all elements. a is \[\].

`a.length = 5;`

Length is 5, but no elements, like `new Array(5)`

You can also set the length property of an array to a value larger than its current value. Doing this does not actually add any new elements to the array; it simply creates a sparse area at the end of the array.

### Adding and Deleting Array Elements

`let a = [];`

`a[0] = "zero";`

`a[1] = "one";`

add elements to it.

You can also use the `push()` method to add one or more values to the end of an array.

You can use the` unshift()` method to insert a value at the beginning of an array, shifting the existing array elements to higher indexes.

The `pop()` method is the opposite of `push()`: it removes the last element of the array and returns it, reducing the length of an array by 1.

Similarly, the `shift()` method removes and returns the first element of the array, reducing the length by 1 and shifting all elements down to an index one lower than their current index.

You can delete array elements with the delete operator

`let a = [1,2,3];`

`delete a[2];`

a now has no element at index 2

`2 in a`

false

`a.length`

3: delete does not affect array length

### Iterating Arrays

The easiest way to loop through each of the elements of an array (or any iterable object) is with the `for/of`loop

    let letters = [..."Hello world"];

    let string = "";

    for(let letter of letters) {

    string += letter;

    }

It has no special behavior for sparse arrays and simply returns `undefined` for any array elements that do not exist.

If you want to use a `for/of` loop for an array and need to know the index of each array element, use the `entries()` method of the array

    let letters = [..."Hello world"];

    let everyother = "";

    for(let [index, letter] of letters.entries()) {

    if (index % 2 === 0) everyother += letter;

    }

Another good way to iterate arrays is with `forEach()`. This is not a new form of the for loop, but an array method that offers a functional approach to array iteration.

    let letters = [..."Hello world"];

    let uppercase = "";

    letters.forEach(letter => {

    uppercase += letter.toUpperCase();

    });

You can also loop through the elements of an array with a `for` loop.

    for(let i = 0, len = letters.length; i < len; i++) {

    // loop body

    }

### Multidimensional Arrays

### Create a multidimensional array

`let table = new Array(10);`

    for(let i = 0; i < table.length; i++) {

    table[i] = new Array(10);

    }

    for(let row = 0; row < table.length; row++) {

    for(let col = 0; col < table[row].length; col++) {

    table[row][col] = row * col;

    }

    }

### Array Methods

### Array Iterator Methods

First, all of these methods accept a function as their first argument and invoke that function once for each element (or some elements) of the array. If the array is sparse, the function you pass is not invoked for nonexistent elements. In most cases, the function you supply is invoked with three arguments: the value of the array element, the index of the array element, and the array itself.

FOREACH()

`let data = [1,2,3,4,5], sum = 0;`

    data.forEach(value => { sum += value; });

    data.forEach(function(v, i, a) {

    a[i] = v + 1;

    });

15

\[2,3,4,5,6\]

MAP()

`let a = [1, 2, 3];`  
 `a.map(x => x*x)`

\[1, 4, 9\]

FILTER()

`let a = [5, 4, 3, 2, 1];`  
 `a.filter(x => x < 3) `  
 `a.filter((x,i) => i % 2 === 0)`

\[2, 1\];

\[5, 3, 1\];

FIND()

FINDINDEX()

`let a = [1,2,3,4,5];`

`a.findIndex(x => x === 3)`

`a.find(x => x % 5 === 0)`

`a.find(x => x % 7 === 0)`

2

5

undefined

EVERY()

SOME()

`let a = [1,2,3,4,5];`

`a.every(x => x < 10)`

`a.some(x => x % 2 === 0)`

`a.some(isNaN)`

true

true

false

REDUCE()

ReduceRight()

l`et a = [1,2,3,4,5];`

`a.reduce((x,y) => x+y, 0)`

`a.reduce((x,y) => x*y, 1)`

`a.reduce((x,y) => (x > y) ? x : y)`

15

120

5

Note that `map()` returns a new array: it does not modify the array it is invoked on. If that array is sparse, your function will not be called for the missing elements, but the returned array will be sparse in the same way as the original array: it will have the same length and the same missing elements.

To close the gaps in a sparse array, you can do this:

`let dense = sparse.filter(() => true);`

And to close gaps and remove undefined and null elements, you can use filter, like this:

`a = a.filter(x => x !== undefined && x !== null);`

Unlike `filter()`, however,` find()` and `findIndex()` stop iterating the first time the predicate finds an element. When that happens, `find()` returns the matching element, and `findIndex()` returns the index of the matching element. If no matching element is found,` find()` returns `undefined` and` findIndex()`returns -1.

When you invoke `reduce()` with no initial value, it uses the first element of the array as the initial value.

`reduceRight()` works just like `reduce()`, except that it processes the array from highest index to lowest (right-to-left), rather than from lowest to highest. You might want to do this if the reduction operation has right-to-left associativity

### Flattening arrays with `flat()` and `flatMap()`

`[1, [2, 3]].flat()`

\[1, 2, 3\]

`[1, [2, [3]]].flat()`

\[1, 2, \[3\]\]

`let a = [1, [2, [3, [4]]]];`

`a.flat(1)`

`a.flat(2)`

`a.flat(3)`

`a.flat(4)`

\[1, 2, \[3, \[4\]\]\]

\[1, 2, 3, \[4\]\]

\[1, 2, 3, 4\]

\[1, 2, 3, 4\]

`let phrases = ["hello world", "the definitive guide"];`  
 `let words = phrases.flatMap(phrase => phrase.split(" "));`

\[“hello”, “world”, “the”, “definitive”, “guide”\];

Calling `a.flatMap(f)` is the same as (but more efficient than) `a.map(f).flat()`:

### Adding arrays with concat()

`let a = [1,2,3];`

`a.concat(4, 5)`

\[1,2,3,4,5\]

`a.concat([4,5],[6,7])`

\[1,2,3,4,5,6,7\]

### Stacks and Queues with push(), pop(), shift(), and unshift()

The `push()` and` pop()` methods allow you to work with arrays as if they were stacks. The `push()` method appends one or more new elements to the end of an array and returns the new length of the array.

The `unshift()` and `shift()` methods behave much like `push()` and` pop()`, except that they insert and remove elements from the beginning of an array rather than from the end.

You can implement a queue data structure by using `push()` to add elements at the end of an array and `shift()` to remove them from the start of the array. Note differences in `unshift `with single and multiple values.

`let a = [];`

`a.unshift(1)`

\[1\]

`a.unshift(2)`

\[2, 1\]

`a = [];`

`a.unshift(1,2)`

\[1, 2\]

### Subarrays with `slice(), splice(), fill()`, and `copyWithin()`

SLICE()

`let a = [1,2,3,4,5];`

`a.slice(0,3);`

`a.slice(3);`

`a.slice(1,-1);`

`a.slice(-3,-2);`

\[1,2,3\]

\[4,5\]

\[2,3,4\]

\[3\]

SPLICE

`let a = [1,2,3,4,5,6,7,8];`

`a.splice(4)`

`a.splice(1,2)`

`a.splice(1,1)`

`let a = [1,2,3,4,5];`

`a.splice(2,0,"a","b")`

`a.splice(2,2,[1,2],3)`

\[5,6,7,8\]; `a` is now \[1,2,3,4\]

\[2,3\]; a is now \[1,4\]

\[4\]; a is now \[1\]

\[\]; a is now \[1,2,”a”,”b”,3,4,5\]

\[“a”,”b”\]; a is now \[1,2,\[1,2\],3,3,4,5\]

FILL()

`let a = new Array(5);`

`a.fill(0)`

`a.fill(9, 1)`

`a.fill(8, 2, -1)`

\[0,0,0,0,0\]

\[0,9,9,9,9\]

\[0,9,8,8,9\]

COPYWITHIN()

`let a = [1,2,3,4,5];`

`a.copyWithin(1)`

`a.copyWithin(2, 3, 5)`

`a.copyWithin(0, -2)`

\[1,1,2,3,4\]

\[1,1,3,4,4\]

\[4,4,3,4,4\]

`splice()` is a general-purpose method for inserting or removing elements from an array.` splice()` can delete elements from an array, insert new elements into an array, or perform both operations at the same time.

The first argument to `splice()` specifies the array position at which the insertion and/or deletion is to begin. The second argument specifies the number of elements that should be deleted from (spliced out of) the array.

Unlike `concat(), splice()` inserts arrays themselves, not the elements of those arrays.

`copyWithin()` copies a slice of an array to a new position within the array. It modifies the array in place and returns the modified array, but it will not change the length of the array.

### Array Searching and Sorting Methods

INDEXOF()  
 LASTINDEXOF()

`let a = [0,1,2,1,0];`

`a.indexOf(1)`

`a.lastIndexOf(1)`

`a.indexOf(3)`

1

3

-1

SORT()

`let a = [33, 4, 1111, 222];`

`a.sort();`

`a.sort((a,b) => a - b);`

Case-insensitive sort

    let a = ["ant", "Bug", "cat", "Dog"];

    a.sort(); // a == ["Bug","Dog","ant","cat"];

    a.sort(function(s,t) {

    let a = s.toLowerCase();

    let b = t.toLowerCase();

    if (a < b) return -1;

    if (a > b) return 1;

    return 0;

    });

`[1111, 222, 33, 4];`

`[4, 33, 222, 1111]`

REVERSE()

`let a = [1,2,3];`  
 `a.reverse();`

\[3,2,1\]

`indexOf()` and `lastIndexOf()` compare their argument to the array elements using the equivalent of the === operator. If your array contains objects instead of primitive values, these methods check to see if two references both refer to exactly the same object. If you want to actually look at the content of an object, try using the `find()` method with your own custom predicate function instead.

`indexOf()` and `lastIndexOf()` take an optional second argument that specifies the array index at which to begin the search. Negative values are allowed for the second argument and are treated as an offset from the end of the array.

`indexOf()` will not detect the NaN value in an array, but `includes()` will

When `sort()` is called with no arguments, it sorts the array elements in alphabetical order. To sort an array into some order other than alphabetical, you must pass a comparison function as an argument to `sort()`.

### Array to String Conversions

The `join()` method converts all the elements of an array to strings and concatenates them, returning the resulting string.

`let a = [1, 2, 3];`

`a.join()`

`a.join(" ")`

`a.join("")`

“1,2,3”

“1 2 3”

“123”

`let b = new Array(10);`

`b.join("-")`

“ — — — — -”

Arrays, like all JavaScript objects, have a `toString()` method. For an array, this method works just like the `join()` method with no arguments:

`[1,2,3].toString()`

“1,2,3”

`["a", "b", "c"].toString()`

“a,b,c”

`[1, [2,"c"]].toString()`

“1,2,c”

### Static Array Functions

`Array.isArray([])`

true

`Array.isArray({})`

false

### Array-Like Objects

It is often perfectly reasonable to treat any object with a numeric `length` property and corresponding non-negative integer properties as a kind of array.

    let a = {};

    let i = 0;

    while(i < 10) {

    a[i] = i * i;

    i++;

    }

    a.length = i;

    // Now iterate through it as if it were a real array

    let total = 0;

    for(let j = 0; j < a.length; j++) {

    total += a[j];

    }

Since array-like objects do not inherit from `Array.prototype`, you cannot invoke array methods on them directly. You can invoke them indirectly using the `Function.call` method.

`let a = {"0": "a", "1": "b", "2": "c", length: 3};`

// An array-like object

`Array.prototype.join.call(a, "+")`

“a+b+c”

`Array.prototype.join.call("JavaScript", " ")`

“J a v a S c r i p t”

`Array.prototype.map.call(a, x => x.toUpperCase())`

\[“A”,”B”,”C”\]

`Array.from(a)`

\[“a”,”b”,”c”\]

### Strings as Arrays

`let s = "test";`

`s.charAt(0)`

t

`s[1]`

e

### Functions

In addition to the arguments, each invocation has another value — the invocation context — that is the value of the `this` keyword.

### Function Declarations

    function printprops(o) {

    for(let p in o) {

    console.log(`${p}: ${o[p]}\n`);

    }

    }

Function declaration statements are “hoisted” to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears before the definition.

### Function Expressions

`const square = function(x) { return x*x; };`

    const f = function fact(x) {

    if (x <= 1) return 1;

    return x * fact(x-1);

    }

Function expressions can include names, which is useful for recursion

`[3,2,1].sort(function(a,b) { return a - b; });`

Function expressions can also be used as arguments to other functions

`let tensquared = (function(x) {return x*x;}(10));`

Function expressions are sometimes defined and immediately invoked

### Arrow Functions

`const sum = (x, y) => { return x + y; };`

`const sum = (x, y) => x + y;`

no need for `return`

`const polynomial = x => x*x + 2*x + 3;`

omit parens with single parameter

`const constantFunc = () => 42;`

usage for no params

If the body of your arrow function is a single return statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal

`const f = x => { return { value: x }; };`

good

`const g = x => ({ value: x });`

good

`const h = x => { value: x };`

returns nothing

`const i = x => { v: x, w: x };`

syntax error

Arrow functions differ from functions defined in other ways in one critical way: they inherit the value of the `this` keyword from the environment in which they are defined rather than defining their own invocation context as functions defined in other ways do.

### Nested Functions

    function hypotenuse(a, b) {

    function square(x) { return x*x; }

    return Math.sqrt(square(a) + square(b));

    }

### Invoking Functions

For function invocation in non-strict mode, the invocation context (the `this` value) is the global object. In strict mode, however, the invocation context is `undefined`.

`const strict = (function() { return !this; }())`

Determine if we’re in strict mode

### Constructor Invocation

A constructor invocation creates a new, empty object that inherits from the object specified by the `prototype`property of the constructor.

### Indirect invocation

JavaScript functions are objects, and like all JavaScript objects, they have methods. Two of these methods, `call()` and `apply()`, invoke the function indirectly. Both methods allow you to explicitly specify the `this `value for the invocation, which means you can invoke any function as a method of any object, even if it is not actually a method of that object.

### Function Arguments and Parameters

### Optional Parameters and Defaults

When a function is invoked with fewer arguments than declared parameters, the additional parameters are set to their default value, which is normally `undefined`.

    function getPropertyNames(o, a) {

    a = a || [];

    for(let property in o) a.push(property);

    return a;

    }

    function getPropertyNames(o, a = []) {

    for(let property in o) a.push(property);

    return a;

    }

One interesting case is that, for functions with multiple parameters, you can use the value of a previous parameter to define the default value of the parameters that follow it

    const rectangle = (width, height = width*2) => ({width, height});

### Rest Parameters and Variable-Length Argument Lists

Rest parameters enable us to write functions that can be invoked with arbitrarily more arguments than parameters.

    function max(first=-Infinity, ...rest) {

    let maxValue = first;

    for(let n of rest) {

    if (n > maxValue) {

    maxValue = n;

    }

    }

    return maxValue;

    }

    max(1, 10, 100, 2, 3, 1000, 4, 5, 6)

1000

within the body of a function, the value of a rest parameter will always be an array. The array may be empty, but a rest parameter will never be `undefined`.

This type of function is called variadic functions, variable arity functions, or vararg functions.

### The Arguments Object

Within the body of any function, the identifier `arguments` refers to the Arguments object for that invocation.

    function max(x) {

    let maxValue = -Infinity;

    for(let i = 0; i < arguments.length; i++) {

    if (arguments[i] > maxValue)

    maxValue = arguments[i];

    }

    return maxValue;

    }

    max(1, 10, 100, 2, 3, 1000, 4, 5, 6)

1000

you should avoid using it in any new code you write.

### The Spread Operator for Function Calls

    let numbers = [5, 2, 10, -1, 9, 100, 1];

    Math.min(...numbers)

-1

    function timed(f) {

    return function(...args) {

    console.log(`Entering function ${f.name}`);

    let startTime = Date.now();

    try {

    return f(...args);

    }

    finally {

    console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);

    }

    };

    }

    // Compute the sum of the numbers between 1 and n by brute force

    function benchmark(n) {

    let sum = 0;

    for(let i = 1; i <= n; i++) sum += i;

    return sum;

    }

    // Now invoke the timed version of that test function

    timed(benchmark)(1000000)

### Destructuring Function Arguments into Parameters

    function vectorAdd(v1, v2) {

    return [v1[0] + v2[0], v1[1] + v2[1]];

    }

    vectorAdd([1,2], [3,4])

←&gt;

    function vectorAdd([x1,y1], [x2,y2]) {

    return [x1 + x2, y1 + y2];

    }

    vectorAdd([1,2], [3,4])

    function vectorMultiply({x, y}, scalar) {

    return { x: x*scalar, y: y*scalar };

    }

    vectorMultiply({x: 1, y: 2}, 2)

←&gt;

    function vectorMultiply({x,y}, scalar) {

    return { x: x*scalar, y: y*scalar};

    }

    vectorMultiply({x: 1, y: 2}, 2)

### Argument Types

Adding code to check the types of arguments

    function sum(a) {

    let total = 0;

    for(let element of a) {

    if (typeof element !== "number") {

    throw new TypeError("sum(): elements must be numbers");

    }

    total += element;

    }

    return total;

    }

`sum([1,2,3])`

6

`sum(1, 2, 3);`

`TypeError`: 1 is not iterable

`sum([1,2,"3"]);`

`TypeError`: element 2 is not a number

### Functions as Values

    function square(x) { return x * x; }

`let s = square;`

`square(4)`

16

`s(4)`

16

Functions can also be assigned to object properties rather than variables.

`let o = {square: function(x) { return x*x; }};`

`let y = o.square(16);`

256

Functions don’t even require names at all, as when they’re assigned to array elements:

`let a = [x => x*x, 20];`

`a[0](a[1])`

400

`a[0]` accesses first element of the array, which is "`x => x*x`", `(a[1])` passes parameter, which is 20.

### Examples of using functions as data

    function add(x,y) { return x + y; }

    function subtract(x,y) { return x - y; }

    function multiply(x,y) { return x * y; }

    function divide(x,y) { return x / y; }

    function operate(operator, operand1, operand2) {

    return operator(operand1, operand2);

    }

`let i = operate(add, operate(add, 2, 3), operate(multiply, 4,5));`

`(2+3) + (4*5):`

or:

    const operators = {

    add: (x,y) => x+y,

    subtract: (x,y) => x-y,

    multiply: (x,y) => x*y,

    divide: (x,y) => x/y,

    pow: Math.pow

    };

    function operate2(operation, operand1, operand2) {

    if (typeof operators[operation] === "function") {

    return operators[operation](operand1, operand2);

    }

    else throw "unknown operator";

    }

`operate2("add", "hello", operate2("add", " ", "world"))`

// “hello world”

`operate2("pow", 10, 2)`

100

### Defining Your Own Function Properties

When a function needs a “static” variable whose value persists across invocations, it is often convenient to use a property of the function itself.

For example, suppose you want to write a function that returns a unique integer whenever it is invoked. The function must never return the same value twice. In order to manage this, the function needs to keep track of the values it has already returned, and this information must persist across function invocations.

    uniqueInteger.counter = 0;

    function uniqueInteger() {

    return uniqueInteger.counter++;

    }

    uniqueInteger()

0

    uniqueInteger()

1

Compute factorials and cache results as properties of the function itself.

    function factorial(n) {

    if (Number.isInteger(n) && n > 0) {

    if (!(n in factorial)) {

    factorial[n] = n * factorial(n-1);

    }

    return factorial[n];

    }

    else {

    return NaN;

    }

    }

    factorial[1] = 1;

Initialize the cache to hold this base case.

    factorial(6)

720

    factorial[5]

120; the call above caches this value

### Functions as Namespaces

Variables declared within a function are not visible outside of the function. For this reason, it is sometimes useful to define a function simply to act as a temporary namespace in which you can define variables without cluttering the global namespace.

Variables that would have been global become local to the function. Following code defines only a single global variable: the function name `chunkNamespace`.

    function chunkNamespace() {

    // Chunk of code goes here

    // Any variables defined in the chunk are local to this function

    // instead of cluttering up the global namespace.

    }

    chunkNamespace();

If defining even a single property is too much, you can define and invoke an anonymous function in a single expression — IIEF (immediately invoked function expression)

    (function() {

    // chunkNamespace() function rewritten as an unnamed expression.

    // Chunk of code goes here

    }());

### Closures

JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.

In order to implement lexical scoping, the internal state of a JavaScript function object must include not only the code of the function but also a reference to the scope in which the function definition appears.

This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure.

Closures become interesting when they are invoked from a different scope than the one they were defined in. This happens most commonly when a nested function object is returned from the function within which it was defined.

    let scope = "global scope";

    function checkscope() {

    let scope = "local scope";

    function f() { return scope; }

    return f();

    }

`checkscope()`

“local scope”

    let scope = "global scope";

    function checkscope() {

    let scope = "local scope";

    function f() { return scope; }

    return f;

    }

`let s = checkscope()();`

“local scope”

Closures capture the local variables of a single function invocation and can use those variables as private state.

    let uniqueInteger = (function() {

    let counter = 0;

    return function() { return counter++; };

    }());

`uniqueInteger()`

0

`uniqueInteger()`

1

it is the return value of the function that is being assigned to `uniqueInteger`.

Private variables like counter need not be exclusive to a single closure: it is perfectly possible for two or more nested functions to be defined within the same outer function and share the same scope.

    function counter() {

    let n = 0;

    return {

    count: function() { return n++; },

    reset: function() { n = 0; }

    };

    }

`let c = counter(), d = counter();`

`c.count()`

0

`d.count()`

0

`c.reset();`

`c.count()`

0

`d.count()`

1

You can combine this closure technique with property getters and setters

    function counter(n) {

    return {

    get count() { return n++; },

    set count(m) {

    if (m > n) n = m;

    else throw Error("count can only be set to a larger value")

    }

    };

    }

`let c = counter(1000);`

`c.count`

1000

`c.count`

1001

`c.count = 2000;`

`c.count`

2000

`c.count = 2000;`

Error: count can only be set to a larger value

Define a private variable and two nested functions to get and set the value of that variable.

    function addPrivateProperty(o, name, predicate) {

    let value;

    o[`get${name}`] = function() { return value; };

    o[`set${name}`] = function(v) {

    if (predicate && !predicate(v)) {

    throw new TypeError(`set${name}: invalid value ${v}`);

    }

    else {

    value = v;

    }

    };

    }

`let o = {};`

`addPrivateProperty(o, "Name", x => typeof x === "string");`

`o.setName("Frank");`

`o.getName()`

“Frank”

`o.setName(0);`

TypeError: try to set a value ofthe wrong type

### Function Properties, Methods, and Constructor

Since functions are objects, they can have properties and methods, just like any other object.

### The length Property

The read-only length property of a function specifies the arity of the function — the number of parameters it declares in its parameter list, which is usually the number of arguments that the function expects.

### The name Property

This property is primarily useful when writing debugging or error messages.

### The prototype Property

When a function is used as a constructor, the newly created object inherits properties from the prototype object.

### The call() and apply() Methods

`call()` and `apply()` allow you to indirectly invoke a function as if it were a method of some other object. The first argument to both `call()` and `apply()` is the object on which the function is to be invoked; this argument is the invocation context and becomes the value of the `this` keyword within the body of the function.

To invoke the function` f()` as a method of the object o (passing no arguments),

`f.call(o);`

`f.apply(o);`

To pass two numbers to the function `f()` and invoke it as if it were a method of the object o,

    f.call(o, 1, 2);

The `apply()` method is like the `call()` method, except that the arguments to be passed to the function are specified as an array:

    f.apply(o, [1,2]);

The `trace() `function defined uses the `apply() `method instead of a spread operator, and by doing that, it is able to invoke the wrapped method with the same arguments and the same this value as the wrapper method

    function trace(o, m) {

    let original = o[m];

    o[m] = function(...args) {

    console.log(new Date(), "Entering:", m);

    let result = original.apply(this, args);

    console.log(new Date(), "Exiting:", m);

    return result;

    };

    }

### The bind() Method

The primary purpose of `bind()` is to bind a function to an object.

`function f(y) { return this.x + y; }`

`let o = { x: 1 };`

`let g = f.bind(o);`

`g(2)`

3

`let p = { x: 10, g };`

`p.g(2)`

3 // g is still bound to o, not p.

The most common use case for calling `bind()` is to make non-arrow functions behave like arrow functions.

Partial application is a common technique in functional programming and is sometimes called `currying`.

`let sum = (x,y) => x + y;`

`let succ = sum.bind(null, 1);`

`succ(2)`

3

### The toString() Method

Most (but not all) implementations of this `toString()` method return the complete source code for the function

### The Function() Constructor

The Function() constructor is best thought of as a globally scoped version of `eval()` that defines new variables and functions in its own private scope. You will probably never need to use this constructor in your code.

### Higher-Order Functions

A higher-order function is a function that operates on functions, taking one or more functions as arguments and returning a new function.

    function not(f) {

    return function(...args) {

    let result = f.apply(this, args);

    return !result;

    };

    }

`const even = x => x % 2 === 0;`

A function to determine if a number is even

`const odd = not(even);`

`[1,1,3,5,5].every(odd)`

true

Returns a new function that maps one array to another

    const map = function(a, ...args) { return a.map(...args); };

    function mapper(f) {

    return a => map(a, f);

    }

    const increment = x => x + 1;

    const incrementAll = mapper(increment);

    incrementAll([1,2,3]

\[2,3,4\]

Example that takes two functions, f and g, and returns a new function that computes f(g()):

    function compose(f, g) {

    return function(...args) {

    return f.call(this, g.apply(this, args));

    };

    }

`const sum = (x,y) => x+y;`

`const square = x => x*x;`

`compose(square, sum)(2,3)`

25

### Memoization

We defined a factorial function that cached its previously computed results. In functional programming, this kind of caching is called memoization.

### Classes

JavaScript’s classes and prototype-based inheritance mechanism are substantially different from the classes and class-based inheritance mechanism of Java.

### Classes and Prototypes

If we define a prototype object and then use `Object.create()` to create objects that inherit from it, we have defined a JavaScript class.

Factory function that returns a new range object:

    function range(from, to) {

    let r = Object.create(range.methods);

    r.from = from;

    r.to = to;

    return r;

    }

    range.methods = {

    includes(x) { return this.from <= x && x <= this.to; },

    *[Symbol.iterator]() {

    for(let x = Math.ceil(this.from); x <= this.to; x++)

    yield x;

    },

    toString() { return "(" + this.from + "..." + this.to +")"; }

    };

`let r = range(1,3);`

`r.includes(2)`

true

`r.toString()`

“(1…3)”

`[...r]`

\[1, 2, 3\]

### Classes and Constructors

A constructor is a function designed for the initialization of newly created objects.

The critical feature of constructor invocations is that the `prototype` property of the constructor is used as the prototype of the new object.

While almost all objects have a prototype, only a few objects have a `prototype` property. It is function objects that have a `prototype` property.

This means that all objects created with the same constructor function inherit from the same object and are therefore members of the same class.

A Range class using a constructor

    function Range(from, to) {

    this.from = from;

    this.to = to;

    }

    Range.prototype = {

    includes: function(x) { return this.from <= x && x <= this.to; },

    [Symbol.iterator]: function*() {

    for(let x = Math.ceil(this.from); x <= this.to; x++)

    yield x;

    },

    toString: function() { return "(" + this.from + "..." + this.to + ")"; }

    };

`let r = new Range(1,3);`

`r.includes(2)`

true

`r.toString()`

“(1…3)”

`[...r]`

\[1, 2, 3\]

Because the `Range() `constructor is invoked with `new`, it does not have to call `Object.create()` or take any action to create a new object.

In the first example, the prototype was `range.methods`. This was a convenient and descriptive name, but arbitrary. In the second example, the prototype is `Range.prototype`, and this name is mandatory.

An invocation of the `Range()` constructor automatically uses `Range.prototype` as the prototype of the `new Range` object.

### Constructors, Class Identity, and instanceof

Two objects are instances of the same class if and only if they inherit from the same prototype object.

The `instanceof` operator is not checking whether `r` was actually initialized by the Range constructor. Instead, it is checking whether `r` inherits from `Range.prototype`.

    function Strange() {}

    Strange.prototype = Range.prototype;

    new Strange() instanceof Range

true

If you want to test the prototype chain of an object for a specific prototype and do not want to use the constructor function as an intermediary, you can use the `isPrototypeOf()` method

    range.methods.isPrototypeOf(r);

### The constructor Property

Every regular JavaScript function automatically has a `prototype` property. The value of this property is an object that has a single, non-enumerable `constructor` property.

The value of the `constructor` property is the function object

    let F = function() {};

    let p = F.prototype;

    let c = p.constructor;

    c === F

true

`let o = new F();`

`o.constructor === F`

true

Instances of the Range class, as defined, do not have a constructor property. We can remedy this problem by explicitly adding a constructor to the prototype:

    Range.prototype = {

    constructor: Range

    };

Another common technique that you are likely to see in older JavaScript code is to use the predefined prototype object with its constructor property and add methods to it one at a time with code like this:

    Range.prototype.includes = function(x) {

    return this.from <= x && x <= this.to;

    };

    Range.prototype.toString = function() {

    return "(" + this.from + "..." + this.to + ")";

    };

### Classes with the class Keyword

    class Range {

    constructor(from, to) {

    this.from = from;

    this.to = to;

    }

    includes(x) { return this.from <= x && x <= this.to; }

    *[Symbol.iterator]() {

    for(let x = Math.ceil(this.from); x <= this.to; x++)

    yield x;

    }

    toString() { return `(${this.from}...${this.to})`; }

    }

`let r = new Range(1,3);`

`r.includes(2)`

true

`r.toString()`

(1…3)

`[...r]`

\[1, 2, 3\]

Although class bodies are superficially similar to object literals, they are not the same thing. In particular, they do not support the definition of properties with name/value pairs.

If your class does not need to do any initialization, you can omit the constructor keyword and its body, and an empty constructor function will be implicitly created for you.

If you want to define a class that subclasses — or inherits from — another class, you can use the `extends` keyword with the class keyword:

    class Span extends Range {

    constructor(start, length) {

    if (length >= 0) {

    super(start, start + length);

    }

    else {

    super(start + length, start);

    }

    }

    }

class declarations have both statement and expression forms

`let Square = class { constructor(x) { this.area = x * x; } };`

`new Square(3).area`

9

### Static methods

You can define a `static` method within a class body by prefixing the method declaration with the `static` keyword. Static methods are defined as properties of the constructor function rather than properties of the prototype object.

    static parse(s) {

    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);

    if (!matches) {

    throw new TypeError(`Cannot parse Range from "${s}".`)

    }

    return new Range(parseInt(matches[1]),

    parseInt(matches[2]));

    }

The method defined by this code is `Range.parse()`, not `Range.prototype.parse()`, and you must invoke it through the constructor, not through an instance:

    let r = Range.parse('(1...10)');

### Getters, Setters, and other Method Forms

Within a class body, you can define getter and setter methods just as you can in object literals. The only difference is that in class bodies, you don’t put a comma after the getter or setter.

### Public, Private, and Static Fields

The ES6 standard only allows the creation of methods (including getters, setters, and generators) and static methods; it does not include syntax for defining fields.

If you want to define a field on a class instance, you must do that in the constructor function or in one of the methods. And if you want to define a static field for a class, you must do that outside the class body, after the class has been defined.

Standardization is underway, however, for extended class syntax that allows the definition of instance and static fields, in both public and private forms.

    class Buffer {

    constructor() {

    this.size = 0;

    this.capacity = 4096;

    this.buffer = new Uint8Array(this.capacity);

    }

    }

←&gt;

    class Buffer {

    size = 0;

    capacity = 4096;

    buffer = new Uint8Array(this.capacity);

    }

The same proposal that seeks to standardize these instance fields also defines private (with the \# prefix) instance fields.

    class Buffer {

    #size = 0;

    get size() { return this.#size; }

    }

A related proposal seeks to standardize the use of the `static` keyword for fields.

    static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;

    static parse(s) {

    let matches = s.match(Range.integerRangePattern);

    if (!matches) {

    throw new TypeError(`Cannot parse Range from "${s}".`)

    }

    return new Range(parseInt(matches[1]), matches[2]);

    }

### Adding Methods to Existing Classes

We can augment JavaScript classes simply by adding new methods to their prototype objects.

    if (!String.prototype.startsWith) {

    String.prototype.startsWith = function(s) {

    return this.indexOf(s) === 0;

    };

    }

    Number.prototype.times = function(f, context) {

    let n = this.valueOf();

    for(let i = 0; i < n; i++) f.call(context, i);

    };

### Subclasses

### Subclasses and Prototypes

Span subclass of the Range class. This subclass will work just like a Range, but instead of initializing it with a start and an end, we’ll instead specify a start and a distance, or span.

    function Span(start, span) {

    if (span >= 0) {

    this.from = start;

    this.to = start + span;

    }

    else {

    this.to = start;

    this.from = start + span;

    }

    }

Ensure that the `Span` prototype inherits from the `Range`

    Span.prototype = Object.create(Range.prototype);

We don’t want to inherit `Range.prototype.constructor`, so we define our own constructor property:

    Span.prototype.constructor = Span;

`Span` overrides the `toString()` method

`Span.prototype.toString = function() {`  
 `` return `(${this.from}... +${this.to - this.from})`; ``  
 `};`

A robust subclassing mechanism needs to allow classes to invoke the methods and constructor of their superclass, but prior to ES6, JavaScript did not have a simple way to do these things.

### Subclasses with extends and super

    class EZArray extends Array {

    get first() { return this[0]; }

    get last() { return this[this.length-1]; }

    }

`let a = new EZArray();`

`a instanceof EZArray`

true

`a instanceof Array`

true

`a.push(1,2,3,4);`

`a.pop()`

4

`a.first`

1

`a.last`

3

`Array.isArray(a)`

true

`EZArray.isArray(a)`

true

`Array.prototype.isPrototypeOf(EZArray.prototype`

true

`Array.isPrototypeOf(EZArray)`

true

Example demonstrates the use of the `super` keyword to invoke the constructor and methods of the superclass

    class TypedMap extends Map {

    constructor(keyType, valueType, entries) {

    if (entries) {

    for(let [k, v] of entries) {

    if (typeof k !== keyType || typeof v !== valueType) {

    throw new TypeError(`Wrong type for entry [${k}, ${v}]`);

    }

    }

    }

    super(entries);

    this.keyType = keyType;

    this.valueType = valueType;

    }

    set(key, value) {

    if (this.keyType && typeof key !== this.keyType) {

    throw new TypeError(`${key} is not of type${this.keyType}`);

    }

    if (this.valueType && typeof value !== this.valueType)

    {

    throw new TypeError(`${value} is not of type ${this.valueType}`);

    }

    return super.set(key, value);

    }

    }

You may not use the `this` keyword in your constructor until after you have invoked the superclass constructor with `super()`. This enforces a rule that superclasses get to initialize themselves before subclasses do.

Once private fields are supported, we could change these properties to `#keyType` and `#valueType` so that they could not be altered from the outside.

### Class Hierarchies and Abstract Classes

Define abstract classes — classes that do not include a complete implementation — to serve as a common superclass for a group of related subclasses.

### Modules

### Automating Closure-Based Modularity

Imagine a tool that takes a set of files, wraps the content of each of those files within an immediately invoked function expression, keeps track of the return value of each function, and concatenates everything into one big file.

    const modules = {};

    function require(moduleName) { return modules[moduleName]; }

    modules["sets.js"] = (function() {

    const exports = {};

    exports.BitSet = class BitSet { ... };

    return exports;

    }());

    modules["stats.js"] = (function() {

    const exports = {};

    const sum = (x, y) => x + y;

    const square = x = > x * x;

    exports.mean = function(data) { ... };

    exports.stddev = function(data) { ... };

    return exports;

    }());

writing code like the following to make use of those modules

    const stats = require("stats.js");

    const BitSet = require("sets.js").BitSet;

    // Now write code using those modules

    let s = new BitSet(100);

    s.insert(10);

    s.insert(20);

    s.insert(30);

    let average = stats.mean([...s]);

### Modules in ES6

ES6 adds import and export keywords to JavaScript and finally supports real modularity as a core language feature.

ES6 modularity is conceptually the same as Node modularity: each file is its own module, and constants, variables, functions, and classes defined within a file are private to that module unless they are explicitly exported.

### ES6 Exports

To export a constant, variable, function, or class from an ES6 module, simply add the keyword export before the declaration

    export const PI = Math.PI;

    export function degreesToRadians(d) { return d * PI / 180; }

    export class Circle {

    constructor(r) { this.r = r; }

    area() { return PI * this.r * this.r; }

    }

or:

    export { Circle, degreesToRadians, PI };

It is common to write modules that export only one value (typically a function or class), and in this case, we usually use export `default` instead of `export`

    export default class BitSet {

    // implementation omitted

    }

### ES6 Imports

    import BitSet from './bitset.js';

    import { mean, stddev } from "./stats.js";

When importing from a module that defines many exports, however, you can easily import everything with an import statement like this:

    import * as stats from "./stats.js";

With the wildcard import shown in the previous example, the importing module would use the imported `mean()` and` stddev()` functions through the stats object, invoking them as `stats.mean()` and `stats.stddev()`.

Note: not finished.

### The JavaScript Standard Library

### The Set Class

Sets are not ordered or indexed, and they do not allow duplicates.

    let s = new Set();

    let t = new Set([1, s]);

    let t = new Set(s);

    let unique = new Set("Mississippi");

The argument to the `Set()` constructor need not be an array: any iterable object (including other Set objects) is allowed.

The `add()` method takes a single argument; if you pass an array, it adds the array itself to the set, not the individual array elements. `add()` always returns the set it is invoked on, however, so if you want to add multiple values to a set, you can used chained method calls like.

it is very important to understand that set membership is based on strict equality checks, like the === operator performs.

The most important thing we do with sets is not to add and remove elements from them, but to check to see whether a specified value is a member of the set:

`let oneDigitPrimes = new Set([2,3,5,7]);`

`oneDigitPrimes.has(2)`

The Set class is iterable, which means that you can use a `for/of` loop to enumerate all of the elements of a set:

    let sum = 0;

    for(let p of oneDigitPrimes) {

    sum += p; // and add them up

    }

Because Set objects are iterable, you can convert them to arrays and argument lists with the … spread operator

`[...oneDigitPrimes]`

JavaScript Set class always remembers the order that elements were inserted in, and it always uses this order when you iterate a set: the first element inserted will be the first one iterated (assuming you haven’t deleted it first), and the most recently inserted element will be the last one iterated.

Set class also implements a `forEach()` method

    let product = 1;

    oneDigitPrimes.forEach(n => { product *= n; });

### The Map Class

    let m = new Map();

    let n = new Map([["one", 1],["two", 2]]);

    let copy = new Map(n);

    let o = { x: 1, y: 2};

    let p = new Map(Object.entries(o));

map is a set of keys, each of which has an associated value. This is not quite the same as a set of key/value pairs.

use `has()` to check whether a map includes the specified key; use `delete()` to remove a key (and its associated value) from the map; use `clear()` to remove all key/value pairs from the map; and use the size property to find out how many keys a map contains.

`set()` method of Map can be chained.

Any JavaScript value can be used as a key or a value in a Map. This includes` null, undefined`, and `NaN`, as well as reference types like objects and arrays.

Map compares keys by identity, not by equality.

`let m = new Map();`

`m.set({}, 1);`

`m.set({}, 2);`

Map a different empty object to the number 2.

`m.get({})`

undefined:

`m.set(m, undefined);`

`m.has(m)`

true

`m.get(m)`

undefined

Iterate over map:

`let m = new Map([["x", 1], ["y", 2]]);`

`[...m]`

\[\[“x”, 1\], \[“y”, 2\]\]

`for(let [key, value] of m) {...}`

Map class iterates in insertion order

If you want to iterate just the keys or just the associated values of a map, use the `keys()` and `values()` methods: these return iterable objects that iterate keys and values, in insertion order. (The  
 `entries()` method returns an iterable object that iterates key/value pairs, but this is exactly the same as iterating the map directly.)

    [...m.keys()]

    [...m.values()]

    [...m.entries()]

Map objects can also be iterated using the `forEach()`

    m.forEach((value, key) => {...}

Note that the value parameter comes before the key parameter.

### WeakMap and WeakSet

The `WeakMap `class is a variant (but not an actual subclass) of the Map class that does not prevent its key values from being garbage collected.

`WeakMap `keys must be objects or arrays; primitive values are not subject to garbage collection and cannot be used as keys.

WeakMap implements only the` get(), set(), has(),` and `delete()` methods. In particular, `WeakMap` is not iterable and does not define `keys(), values(),` or `forEach()`. If WeakMap was iterable, then its keys would be reachable and it wouldn’t be weak.

Similarly, WeakMap does not implement the size property because the `size` of a WeakMap could change at any time as objects are garbage collected

### Typed Arrays and Binary Data

They differ from regular arrays in some very important ways

· The elements of a typed array are all numbers. Unlike regular JavaScript numbers, however, typed arrays allow you to specify the type (signed and unsigned integers and IEEE-754 floating point) and size (8 bits to 64 bits) of the numbers to be stored in the array.

· You must specify the length of a typed array when you create it, and that length can never change.

· The elements of a typed array are always initialized to 0 when the array is created.

    Int8Array()

    Uint8Array()

    Uint8ClampedArray()

    Int16Array()

    Uint32Array()

    Uint16Array()

    Int32Array()

    BigInt64Array()

    BigUint64Array()

    Float32Array()

    let bytes = new Uint8Array(1024);

    let matrix = new Float64Array(9);

    let sudoku = new Int8Array(81);

Initialize with values

    let white = Uint8ClampedArray.of(255, 255, 255, 0);

    let ints = Uint32Array.from(white);

one more way to create typed arrays that involves the `ArrayBuffer` type

    let buffer = new ArrayBuffer(1024*1024);

    buffer.byteLength

1024\*1024

Typed arrays are not true arrays, but they re-implement most array methods, so you can use them pretty much just like you’d use regular arrays:

`let ints = new Int16Array(10);`

10 short integers

`ints.fill(3).map(x=>x*x).join("")`

“9999999999”

Remember that typed arrays have fixed lengths, so the length property is read-only, and methods that change the length of the array (such as` push(), pop(), unshift(), shift(),` and `splice()`) are not implemented for typed arrays. Methods that alter the contents of an array without changing the length (such as `sort(), reverse()`, and `fill()`) are implemented.

### Determine Endianess and DataView

    let littleEndian = new Int8Array(new Int32Array([1]).buffer)

    [0] === 1;

You can use the `DataView` class, which defines methods for reading and writing values from an `ArrayBuffer` with explicitly specified byte ordering. Refer to book for more examples.

### Pattern Matching with Regular Expressions

RegExp objects may be created with the `RegExp()` constructor, of course, but they are more often created using a special literal syntax.

    let pattern = /s$/;

←&gt;

    let pattern = new RegExp("s$");

Regular expressions can also have one or more flag characters that affect how they work

    let pattern = /s$/i;

i = case insensitive

Punctuation characters have special meanings in regular expressions: `^ $ . * + ? = ! : | \ / ( ) [ ] { }. `Other punctuation characters, such as quotation marks and @, do not have special meaning and simply match themselves literally in a regular expression.

If you use the `RegExp()` constructor, keep in mind that any backslashes in your regular expression need to be doubled, since strings also use backslashes as an escape character.

**Character**

**Matches**

`[...]`

Any one character between the brackets.

`[^...]`

Any one character not between the brackets

`.`

Any character except newline or another Unicode line terminator. Or, if the `RegExp` uses the s flag, then a period matches any character, including line terminators.

`\w`

Any ASCII word character. Equivalent to \[a-zA-Z0–9\_\].

`\W`

Equivalent to \[^a-zA-Z0–9\_\]

`\s`

Any Unicode whitespace character.

`\S`

Any character that is not Unicode whitespace.

`\d`

Equivalent to \[0–9\].

`\D`

Equivalent to \[⁰-9\].

`[\b]`

A literal backspace (special case).

`[\s\d]`

Any one whitespace character or digit

REPETITIONS

**Character**

**Meaning**

`{n,m}`

Match the previous item at least n times but no more than m times

`{n,}`

Match the previous item n or more times.

`{n}`

Match exactly n occurrences of the previous item.

`?`

Equivalent to {0,1}.

`+`

Equivalent to {1,}

\*

Equivalent to {0,}.

**Example**

**Description**

    let r = /\d{2,4}/;

Match between two and four digits

    r = /\w{3}\d?/;

Match exactly three word characters and an optional digit

    r = /\s+java\s+/;

Match “java” with one or more spaces before and after

    r = /[^(]*/;

Match zero or more characters that are not open parens

If you want to match repetitions of more complicated expressions, you’ll need to define a group with parentheses

Be careful when using the \* and ? repetition characters. Since these characters may match zero instances of whatever precedes them, they are allowed to match nothing.

### NON-GREEDY REPETITION

It is also possible to specify that repetition should be done in a non-greedy way. Simply follow the repetition character or characters with a question mark: `??, +?, *?`, or even {1,5}?.

**String**

**Pattern**

**Match**

    "aaa"

    /a+/

    "aaa"

    "aaa"

    /a+?/

    "a"

Note that using non-greedy repetition may not always produce the results you expect. This is because regular expression pattern matching is done by findingthe first position in the string at which a match is possible. Since a match is possible starting at the first character of the string, shorter matches starting at subsequent characters are never even considered.

### ALTERNATION, GROUPING, AND REFERENCES

**Char**

**Pattern**

**Pattern**

`|`

`/ab|cd|ef/`

“ab” or the string “cd” or the string “ef”.

`/\d{3}|[a-z]{4}/`

either three digits or four lowercase letters.

`/a|ab/`

matches only the first letter “a”

`()`

`/java(script)?/`

matches “java” followed by the optional “script”

`/(ab|cd)+|ef/`

matches “java” followed by the optional “script”

If the left alternative matches, the right alternative is ignored, even if it would have produced a “better” match

Another purpose of parentheses in regular expressions is to define subpatterns within the complete pattern. When a regular expression is successfully matched against a target string, it is possible to extract the portions of the target string that matched any particular parenthesized subpattern. For example, suppose you are looking for one or more lowercase letters followed by one or more digits. You might use the pattern `/[a-z]+\d+/`. But suppose you only really care about the digits at the end of each match. If you put that part of the pattern in parentheses (/\[a-z\]+(\\d+)/), you can extract the digits from any matches you find,

A related use of parenthesized subexpressions is to allow you to refer back to a subexpression later in the same regular expression. This is done by following a \\ character by a digit or digits. The digits refer to the position of the parenthesized subexpression within the regular expression. For example, \\1 refers back to the first subexpression, and \\3 refers to the third.

**Match**

**Pattern**

zero or more characters within single or double quotes. However, it does not  
 require the opening and closing quotes to match

    /['"][^'"]*['"]/

To require the quotes to match,use a reference

    /(['"])[^'"]*\1/

**Character**

**Meaning**

|

match either the subexpression to the left or the subexpression to the right.

(…)

Grouping: group items into a single unit that can be used with \*, +, ?, |, and so on. Also remember the characters that match this group for use with later references

(?:…)

group items into a single unit, but do not remember the characters that match this group.

Note` (?:...)` syntax:

In pattern` "/([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/`" `\2` refers to the text matched by `(fun\w*)` since `(?:[Ss]cript)?)` in not remembered.

### SPECIFYING MATCH POSITION

*regular expression anchors* because they anchor the pattern to a specific position in the search string. The most commonly used anchor elements are ^, which ties the pattern to the beginning of the string, and $, which anchors the pattern to the end of the string.

**Example**

**Pattern**

match the word “JavaScript” on a line by itself

`/^JavaScript$/`

To search for “Java” as a word by itself you can try the pattern `/\sJava\s/`, which requires a space before and after the word. But there are two problems with this solution. First, it does not match "Java" at the beginning or the end of a string, but only if it appears with space on either side. Second, when this pattern does find a match, the matched string it returns has leading and trailing spaces, which is not quite what’s needed. So instead of matching actual space characters with \\s, match (or anchor to) word boundaries with \\b. The resulting expression is `/\bJava\b/`.

The element `\B` anchors the match to a location that is not a word boundary. Thus, the pattern `/\B[Ss]cript/` matches "JavaScript" and "postscript", but not "script" or "Scripting".

You can also use arbitrary regular expressions as anchor conditions.

If you include an expression within `(?= and )` characters, it is a lookahead assertion, and it specifies that the enclosed characters must match, without actually matching them.

**Example**

**Pattern**

**Matches**

to match the name of a common programming language, but only if it is followed by a colon

`/[Jj]ava([Ss]cript)?(?=\:)/`

matches the word “JavaScript” in “JavaScript: The DefinitiveGuide”

does not match “Java” in “Java in a Nutshell”

If you instead introduce an assertion with `(?!`, it is a negative lookahead assertion.

### FLAGS

Flags are specified after the second / character of a regular expression literal or as a string passed as the second argument to the RegExp() constructor.

**Flag**

**Meaning**

g

“global” — that is,that we intend to use it to find all matches within a string rather than just finding the first <a href="http://match.it/" class="markup--anchor markup--p-anchor">match.it</a> does alter the behavior of the String `match()` method and the `RegExp exec()` method in important ways.

i

case-insensitive

m

“multiline” mode

s

useful when working with text that includes newlines.Normally, a “.” in a regular expression matches any character except a line terminator. When the s flag is used, however, “.” will match any character, including line terminators.

u

Unicode.

Setting the u flag on a RegExp also allows you to use the new `\u{...}` escape sequence for Unicode character and also enables the \\p{...} notation for Unicode character classes.

y

“sticky”. should match at the beginning of a string or at the first character following the previous match

### String Methods for Pattern Matching

### SEARCH()

Strings support four methods that use regular expressions.

`"JavaScript".search(/script/ui)`

4

`"Python".search(/script/ui)`

-1

`search()` does not support global searches; it ignores the `g` flag of its regular expression argument.

REPLACE()

`text.replace(/javascript/gi, "JavaScript");`

No matter how it is capitalized, replace it with the correct capitalization

parenthesized subexpressions of a regular expression are numbered from left to right and that the regular expression remembers the text that each subexpression matches.

to replace quotation marks in a string with other characters:

`let quote = /"([^"]*)"/g;`

`'He said "stop"'.replace(quote, '«$1»')`

‘He said «stop»’

If your RegExp uses named capture groups, then you can refer to the matching text by name rather than by number:

`let quote = /"(?<quotedText>[^"]*)"/g;`

`'He said "stop"'.replace(quote, '«$<quotedText>»')`

‘He said «stop»’

Instead of passing a replacement string as the second argument to replace(), you can also pass a function that will be invoked to compute the replacement value.

Example to convert decimal integers in a string to hexadecimal:

`let s = "15 times 15 is 225";`

`s.replace(/\d+/gu, n => parseInt(n).toString(16))`

“f times f is e1”

### MATCH()

`"7 plus 8 equals 15".match(/\d+/g)`

\[“7”, “8”, “15”\]

If the regular expression does not have the `g` flag set, `match()` does not do a global search; it simply searches for the first match. In this nonglobal case, `match()` still returns an array, but the array elements are completely different.

Thus, if `match()` returns an array a, a\[0\] contains the complete match, a\[1\] contains the substring that matched the first parenthesized expression, and so on.

    let url = /(\w+):\/\/([\w.]+)\/(\S*)/;

    let text = "Visit my blog at http://www.example.com/~david";

    let match = text.match(url);

    let fullurl, protocol, host, path;

    if (match !== null) {

    fullurl = match[0];

<a href="http://www.example.com/~david" class="markup--anchor markup--p-anchor">“http://www.example.com/~david</a>"

    protocol = match[1];

“http”

    host = match[2];

<a href="http://www.example.com/" class="markup--anchor markup--p-anchor">“www.example.com</a>"

    path = match[3];

“~david”

In this non-global case, the array returned by match() also has some object properties in addition to the numbered array elements.

input property refers to the string on which match() was called

The index property is the position within that string at which the match starts.

if the regular expression contains named capture groups, then the returned array also has a groups property whose value is an object.

`let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;`

`let text = "Visit my blog at http://www.example.com/~david";`

`let match = text.match(url);`

`match[0]`

<a href="http://www.example.com/~david" class="markup--anchor markup--p-anchor">“http://www.example.com/~david</a>"

`match.input`

text

`match.index`

17

`match.groups.protocol`

“http”

`match.groups.host`

<a href="http://www.example.com/" class="markup--anchor markup--p-anchor">“www.example.com</a>"

`match.groups.path`

“~david”

There are also important but less dramatic differences in behavior when the y flag is set. Refer to book for examples.

### MATCHALL()

Instead of returning an array of matching substrings like `match()` does, however, it returns an iterator that yields the kind of match objects that match() returns when used with a non-global RegExp.

### SPLIT()

`"123,456,789".split(",")`

\[“123”, “456”,”789"\]

`"1, 2, 3,\n4, 5".split(/\s*,\s*/)`

\[“1”, “2”, “3”, “4”,”5"\]

Surprisingly, if you call `split()` with a RegExp delimiter and the regular expression includes capturing groups, then the text that matches the capturing groups will be included in the returned array.

`const htmlTag = /<([^>]+)>/;`

`"Testing<br/>1,2,3".split(htmlTag)`

\[“Testing”, “br/”,”1,2,3"\]

### The RegExp Class

The `RegExp()` constructor is useful when a regular expression is being dynamically created and thus cannot be represented with the regular expression literal syntax.

    let zipcode = new RegExp("\\d{5}", "g");

`let exactMatch = /JavaScript/;`  
 `let caseInsensitive = new RegExp(exactMatch, "i");`

### TEST()

Returns true or false by calling `exec()`.

### EXEC()

    let pattern = /Java/g;

    let text = "JavaScript > Java";

    let match;

    while((match = pattern.exec(text)) !== null) {

    console.log(`Matched ${match[0]} at ${match.index}`);

    console.log(`Next search begins at ${pattern.lastIndex}`);

    }

### THE LASTINDEX PROPERTY AND REGEXP REUSE

The use of the `lastIndex` property with the g and y flags is a particularly awkward part of this API. When you use these flags, you need to be particularly careful when calling the `match(), exec()`, or `test()` methods because the behavior of these methods depends on `lastIndex`, and the value of `lastIndex` depends on what you have previously done with the RegExp object.

To find the index of all &lt;p&gt; tags within a string of HTML text:

    let match, positions = [];

    while((match = /<p>/g.exec(html)) !== null) {

    positions.push(match.index);

    }

If the html string contains at least one &lt;p&gt; tag, then it will loop forever. For each iteration of the loop, we’re creating a new RegExp object with `lastIndex` set to 0, so `exec()` always begins at the start of the string, and if there is a match, it will keep matching over and over. The solution, of course, is to define the RegExp once, and save it to a variable so that we’re using the same RegExp object for each iteration of the loop.

On the other hand, sometimes reusing a RegExp object is the wrong thing to do. Suppose, for example, that we want to loop through all of the words in a dictionary to find words that contain pairs of double letters.

    let dictionary = [ "apple", "book", "coffee" ];

    let doubleLetterWords = [];

    let doubleLetter = /(\w)\1/g;

    for(let word of dictionary) {

    if (doubleLetter.test(word)) {

    doubleLetterWords.push(word);

    }

    }

`doubleLetterWords`

\[“apple”, “coffee”\]: “book” is missing!

Because we set the g flag on the RegExp, the `lastIndex` property is changed after successful matches, and the `test()` method (which is based on `exec()`) starts searching for a match at the position specified by `lastIndex`. After matching the "pp" in "apple", `lastIndex` is 3, and so we start searching the word "book" at position 3 and do not see the "oo" that it contains.

### Dates and Times

    let now = new Date();

The current time

    let epoch = new Date(0);

Midnight, January 1st, 1970, GMT

    let century = new Date(2100,

    0,

    1,

    2, 3, 4, 5);

Year 2100

January

1st

02:03:04.005, local

    let century = new Date(Date.UTC(2100, 0, 1));

Midnight in GMT, January 1, 2100

If you print a date (with console.log(century), for example), it will, by default, be printed in your local time zone. If you want to display a date in UTC, you should explicitly convert it to a string with `toUTCString()` or` toISOString()`.

if you pass a string to the Date() constructor, it will attempt to parse that string as a date and time specification

`let century = new Date("2100-01-01T00:00:00Z");`

Once you have a Date object, various get and set methods allow you to query and modify the year, month, day-of-month, hour, minute, second, and millisecond fields of the Date. Each of these methods hastwo forms: one that gets or sets using local time and one that gets or sets using UTC time.

Note that the methods for querying the day-of-month are `getDate()` and `getUTCDate()`. The more natural-sounding functions `getDay()` and `getUTCDay()` return the day-of-week (0 for Sunday through 6 for Saturday). The day-of-week is read-only, so there is not a corresponding `setDay()` method.

### Timestamps

JavaScript represents dates internally as integers that specify the number of milliseconds since (or before) midnight on January 1, 1970, UTC time.

For any Date object, the `getTime()` method returns this internal value, and the `setTime()` method sets it.

    d.setTime(d.getTime() + 30000);

add 30 secs

The static Date.now() method returns the current time as a timestamp and is helpful when you want to measure how long your code takes to run

    let startTime = Date.now();

    reticulateSplines(); // Do some time-consuming operation

    let endTime = Date.now();

    console.log(`Spline reticulation took ${endTime -startTime}ms.`);

adds three months and two weeks to the current date:

`let d = new Date();`  
 `d.setMonth(d.getMonth() + 3, d.getDate() + 14);`

### Formatting and Parsing Date Strings

    let d = new Date(2020, 0, 1, 17, 10, 30);

    d.toString()

“Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)”

    d.toUTCString()

“Thu, 02 Jan 2020 01:10:30 GMT”

    d.toLocaleDateString()

“1/1/2020”: ‘en-US’ locale

    d.toLocaleTimeString()

“5:10:30 PM”: ‘en-US’ locale

    d.toISOString()

“2020–01–02T01:10:30.000Z”

there is also a static Date.parse() method that takes a string as its argument, attempts to parse it as a date and time, and returns a timestamp representing that date. `Date.parse()` is able to parse the same strings that the `Date()` constructor can and is guaranteed to be able to parse the output of` toISOString(), toUTCString()`, and` toString()`.

### Error Classes

One good reason to use an Error object is that, when you create an Error, it captures the state of the JavaScript stack, and if the exception is uncaught, the stack trace will be displayed with the error message, which will help you debug the issue.

Error objects have two properties: `message` and `name`, and a` toString()` method. Node and all modern browsers also define a `stack` property on Error objects.

Subclasses are `EvalError, RangeError, ReferenceError, SyntaxError, TypeError,` and `URIError`.

You should feel free to define your own Error subclasses that best encapsulate the error conditions of your own program.

    class HTTPError extends Error {

    constructor(status, statusText, url) {

    super(`${status} ${statusText}: ${url}`);

    this.status = status;

    this.statusText = statusText;

    this.url = url;

    }

    get name() { return "HTTPError"; }

    }

    let error = new HTTPError(404, "Not Found", "http://example.com/");

    error.status

404

    error.message

“404 Not Found:<a href="http://example.com/" class="markup--anchor markup--p-anchor">http://example.com/</a>"

    error.name

HTTPError

### JSON Serialization and Parsing

JavaScript supports JSON serialization and deserialization with the two functions `JSON.stringify()` and `JSON.parse().`

    let o = {s: "", n: 0, a: [true, false, null]};

    let s = JSON.stringify(o);

s == ‘{“s”:””,”n”:0,”a”:\[true,false,null\]}’

    let copy = JSON.parse(s);

copy == {s: “”, n: 0, a:\[true, false, null\]}

Inefficient way of creating a deep copy of an object

    function deepcopy(o) {

    return JSON.parse(JSON.stringify(o));

    }

Typically, you pass only a single argument to `JSON.stringify()` and `JSON.parse()`. Both functions accept an optional second argument that allows us to extend the JSON format.

`JSON.stringify()` also takes an optional third argument. If you would like your JSONformatted string to be human-readable (if it is being used as a configuration file, for example), then you should pass null as the second argument and pass a number or string as the third argument. If the third argument is a number, then it will use that number of spaces for each indentation level. If the third argument is a string of whitespace (such as '\\t'), it will use that string for each level of indent.

### JSON Customizations

If `JSON.stringify()` is asked to serialize a value that is not natively supported by the JSON format, it looks to see if that value has a `toJSON()` method, and if so, it calls that method and then stringifies the return value in place of the original value. Date objects implement `toJSON()`: it returns the same string that `toISOString()` method does.

If you need to re-create Date objects (or modify the parsed object inany other way), you can pass a “reviver” function as the second argument to `JSON.parse()`.

    let data = JSON.parse(text, function(key, value) {

    if (key[0] === "_") return undefined;

    if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {

    return new Date(value);

    }

    return value;

    });

### The Console API

Console functions that print their arguments like console.log() have a little-known feature: if the first argument is a string that includes `%s, %i, %d, %f, %o, %O, or %c`, then this first argument is treated as format string, and the values of subsequent arguments are substituted into the string in place of the two-character % sequences.

### URL API

    let url = new URL("https://example.com:8000/path/name?q=term#fragment");

    url.href

<a href="https://example.com:8000/path/name" class="markup--anchor markup--p-anchor">“https://example.com:8000/path/name</a>?q=term\#fragment"

    url.origin

<a href="https://example.com:8000/" class="markup--anchor markup--p-anchor">“https://example.com:8000</a>"

    url.protocol

“https:”

    url.host

<a href="http://example.com/" class="markup--anchor markup--p-anchor">“example.com</a>:8000”

    url.hostname

<a href="http://example.com/" class="markup--anchor markup--p-anchor">“example.com</a>”

    url.port

“8000”

    url.pathname

“/path/name”

    url.search

“?q=term”

    url.hash

“\#fragment”

    let url = new URL("https://example.com");

    url.pathname = "api/search";

Add a path to an API endpoint

    url.search = "q=test";

Add a query parameter

    url.toString()

<a href="https://example.com/api/search?q=test" class="markup--anchor markup--p-anchor">“https://example.com/api/search?q=test</a>"

One of the important features of the URL class is that it correctly adds punctuation and escapes special characters in URLs when that is needed

    let url = new URL("https://example.com");

    url.pathname = "path with spaces";

    url.pathname

“/path%20with%20spaces”

    url.search = "q=foo#bar";

    url.search

“?q=foo%23bar”

    url.href

<a href="https://example.com/path%20with%20spaces?q=foo%23bar" class="markup--anchor markup--p-anchor">“https://example.com/path%20with%20spaces?q=foo%23bar</a>"

Often, however, HTTP requests encode the values of multiple form fields or multiple API parameters into the query portion of a URL. In this format, the query portion of the URL is a question mark followed by one or more name/value pairs, which are separated from one another by ampersands.

If you want to encode these kinds of name/value pairs into the query portion of a URL, then the searchParams property will be more useful than the search property.

`let url = new URL("https://example.com/search");`

`url.search`

“”

`url.searchParams.append("q", "term");`

`url.search`

“?q=term”

`url.searchParams.set("q", "x");`

`url.search`

“?q=x”

`url.searchParams.append("opts", "1");`

`url.search`

“?q=x&opts=1”

The value of the searchParams property is a URLSearchParams object.

`let url = new URL("http://example.com");`

`let params = new URLSearchParams();`

`params.append("q", "term");`

`params.append("opts", "exact");`

`params.toString()`

“q=term&opts=exact”

`url.search = params;`

`url.href`

<a href="http://example.com/" class="markup--anchor markup--p-anchor">“http://example.com/</a>?q=term&opts=exact"

### Timers

`setTimeout()` and` setInterval()`—that allow programs to ask the browser to invoke a function after a specified amount of time has elapsed or to invoke the function repeatedly at a specified interval.

    setTimeout(() => { console.log("Ready..."); }, 1000);

    setTimeout(() => { console.log("set..."); }, 2000);

    setTimeout(() => { console.log("go!"); }, 3000);

If you want to invoke a function repeatedly, use `setInterval()`

Both `setTimeout()` and `setInterval()` return a value. If you save this value in a variable, you can then use it later to cancel the execution of the function by passing it to `clearTimeout()` or `clearInterval()`.

    let clock = setInterval(() => {

    console.clear();

    console.log(new Date().toLocaleTimeString());

    }, 1000);

    setTimeout(() => { clearInterval(clock); }, 10000);

After 10 seconds: stop the repeating code above

### Iterators and Generators

The iterator method of an iterable object does not have a conventional name but uses the Symbol, Symbol.iterator as its name. So a simple for/of loop over an iterable object iterable could also be written the hard way, like this:

    let iterable = [99];

    let iterator = iterable[Symbol.iterator]();

    for(let result = iterator.next(); !result.done; result =iterator.next()) {

    console.log(result.value) // result.value == 99

    }

When you want to iterate though a “partially used” iterator:

`let list = [1,2,3,4,5];`  
 `let iter = list[Symbol.iterator]();`

`let head = iter.next().value;`

head == 1

`let tail = [...iter];`

tail == \[2,3,4,5\]

### Implementing Iterable Objects

we will implement the Range class one more time, making it iterable without relying on a generator.

In order to make a class iterable, you must implement a method whose name is the Symbol `Symbol.iterator`

    class Range {

    constructor (from, to) {

    this.from = from;

    this.to = to;

    }

    has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }

    toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to}}`; }

    [Symbol.iterator]() {

    let next = Math.ceil(this.from);

    let last = this.to;

    return {

    next() {

    return (next <= last) ? { value: next++ } : { done: true };

    },

    [Symbol.iterator]() { return this; }

    };

    }

    }

    for(let x of new Range(1,10)) console.log(x);

Logs numbers 1 to 10

    [...new Range(-2,2)]

\[-2, -1, 0,1, 2\]

In addition to making your classes iterable, it can be quite useful to define functions that return iterable values.

Return an iterable object that iterates the result of applying `f()` to each value from the source iterable

    function map(iterable, f) {

    let iterator = iterable[Symbol.iterator]();

    return {

    [Symbol.iterator]() { return this; },

    next() {

    let v = iterator.next();

    if (v.done) {

    return v;

    }

    else {

    return { value: f(v.value) };

    }

    }

    };

    }

`[...map(new Range(1,4), x => x*x)]`

\[1, 4, 9, 16\]

Return an iterable object that filters the specified iterable, iterating only those elements for which the predicate returns true

    function filter(iterable, predicate) {

    let iterator = iterable[Symbol.iterator]();

    return {

    [Symbol.iterator]() { return this; },

    next() {

    for(;;) {

    let v = iterator.next();

    if (v.done || predicate(v.value)) {

    return v;

    }

    }

    }

    };

    }

`[...filter(new Range(1,10), x => x % 2 === 0)]`

\[2,4,6,8,10\]

### Generators

Particularly useful when the values to be iterated are not the elements of a data structure, but the result of a computation.

To create a generator, you must first define a generator function — defined with the keyword `function*` rather than `function`

When you invoke a generator function, it does not actually execute the function body, but instead returns a generator object. This generator object is an iterator.

Calling its `next()` method causes the body of the generator function to run from the start (or whatever its current position is) until it reaches a `yield` statement.

The value of the `yield` statement becomes the value returned by the `next()` call on the iterator.

    function* oneDigitPrimes() {

    yield 2;

    yield 3;

    yield 5;

    yield 7;

    }

    let primes = oneDigitPrimes();

we get a generator

    primes.next().value

2

    primes.next().value

3

    primes.next().value

5

    primes.next().value

7

    primes.next().done

true

Generators have a `Symbol.iterator` method to make them iterable

`primes[Symbol.iterator]()`

`[...oneDigitPrimes()]`

\[2,3,5,7\]

    let sum = 0;

    for(let prime of oneDigitPrimes()) sum += prime;

    sum

17

Like regular functions, however, we can also define generators in expression form.

    const seq = function*(from,to) {

    for(let i = from; i <= to; i++) yield i;

    };

    [...seq(3,5)]

\[3, 4, 5\]

In classes and object literals, we can use shorthand notation to omit the function keyword entirely when we define methods.

    let o = {

    x: 1, y: 2, z: 3,

    *g() {

    for(let key of Object.keys(this)) {

    yield key;

    }

    }

    };

`[...o.g()]`

\[“x”, “y”, “z”, “g”\]

Generators often make it particularly easy to define iterable classes.

    *[Symbol.iterator]() {

    for(let x = Math.ceil(this.from); x <= this.to; x++)

    yield x;

    }

### Generator Examples

Generators are more interesting if they actually generate the values they yield by doing some kind of computation.

generator function that yields Fibonacci numbers

    function* fibonacciSequence() {

    let x = 0, y = 1;

    for(;;) {

    yield y;

    [x, y] = [y, x+y];

    }

    }

If this generator is used with the … spread operator, it will loop until memory is exhausted and the program crashes.

Use it in a `for/of` loop, however

    function fibonacci(n) {

    for(let f of fibonacciSequence()) {

    if (n-- <= 0) return f;

    }

    }

    fibonacci(20)

10946

This kind of infinite generator becomes more useful with a `take()` generator like this

    function* take(n, iterable) {

    let it = iterable[Symbol.iterator]();

    while(n-- > 0) {

    let next = it.next();

    if (next.done) return;

    else yield next.value;

    }

    }

    [...take(5, fibonacciSequence())]

\[1, 1, 2, 3, 5\]

### Asynchronous Javascript

`Promises`, new in ES6, are objects that represent the not-yet-available result of an asynchronous operation.

The keywords `async` and `await` were introduced in ES2017 and provide new syntax that simplifies asynchronous programming by allowing you to structure your Promise based code as if it was synchronous.

Asynchronous iterators and the` for/await` loop were introduced in ES2018 and allow you to work with streams of asynchronous events using simple loops that appear synchronous.

### Asynchronous Programming with Callbacks

### Timers

`setTimeout(checkForUpdates, 60000);`

    let updateIntervalId = setInterval(checkForUpdates, 60000);

    function stopCheckingForUpdates() {

    clearInterval(updateIntervalId);

    }

### Events

Event-driven JavaScript programs register callback functions for specified types of events in specified contexts, and the web browser invokes those functions whenever the specified events occur.

These callback functions are called event handlers or event listeners, and they are registered with `addEventListener()`

Ask the web browser to return an object representing the HTML &lt;button&gt; element that matches this CSS selector:

`let okay = document.querySelector('#confirmUpdateDialogbutton.okay');`

Now register a callback function to be invoked when the user clicks on that button

`okay.addEventListener('click', applyUpdate);`

### Network Events

JavaScript running in the browser can fetch data from a web server with code like this:

    function getCurrentVersionNumber(versionCallback) {

    let request = new XMLHttpRequest();

    request.open("GET", "http://www.example.com/api/version");

    request.send();

    request.onload = function() {

    if (request.status === 200) {

    let currentVersion = parseFloat(request.responseText);

    versionCallback(null, currentVersion);

    }

    else {

    versionCallback(response.statusText, null);

    }

    };

    request.onerror = request.ontimeout = function(e) {

    versionCallback(e.type, null);

    };

    }

### Promises

Promises, a core language feature designed to simplify asynchronous programming.

A Promise is an object that represents the result of an asynchronous computation. That result may or may not be ready yet, and the Promise API is intentionally vague about this: there is no way to synchronously get the value of a Promise; you can only ask the Promise to call a callback function when the value is ready.

One real problem with callback-based asynchronous programming is that it is common to end up with callbacks inside callbacks inside callbacks, with lines of code so highly indented that it is difficult to read.

Promises allow this kind of nested callback to be re-expressed as a more linear Promise chain that tends to be easier to read and easier to reason about.

Another problem with callbacks is that they can make handling errors difficult. If an asynchronous function (or an asynchronously invoked callback) throws an exception, there is no way for that exception to propagate back to the initiator of the asynchronous operation. This is a fundamental fact about asynchronous programming: it breaks exception handling. Promises help here by standardizing a way to handle errors and providing a way for errors to propagate correctly through a chain of promises.

Note that Promises represent the future results of single asynchronous computations. They cannot be used to represent repeated asynchronous computations, however.

We can’t use Promises to replace `setInterval()` because that function invokes a callback function repeatedly, which is something that Promises are just not designed to do.

### Using Promises

How we would use this Promise returning utility function

    getJSON(url).then(jsonData => {

    // callback function that will be asynchronously invoked with the parsed JSON value when it becomes available.

    });

The Promise object defines a then() instance method. Instead of passing our callback function directly to `getJSON()`, we instead pass it to the then() method. When the HTTP response arrives, the body of that response is parsed as JSON, and the resulting parsed value is passed to the function that we passed to `then()`.

If you call the `then()` method of a Promise object multiple times, each of the functions you specify will be called when the promised computation is complete.

Unlike many event listeners, though, a Promise represents a single computation, and each function registered with then() will be invoked only once.

    function displayUserProfile(profile) { ...}

    getJSON("/api/user/profile").then(displayUserProfile);

### HANDLING ERRORS WITH PROMISES

Asynchronous operations, particularly those that involve networking, can typically fail in a number of ways, and robust code has to be written to handle the errors that will inevitably occur.

`getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);`

if `getJSON()` runs normally, it passes its result to `displayUserProfile()`. If there is an error (the user is not logged in, the server is down, the user’s internet connection dropped, the request timed out, etc.), then `getJSON()` passes an Error object to `handleProfileError()`.

In practice, it is rare to see two functions passed to then(). There is a better and more idiomatic way of handling errors when working with Promises.

To understand it, first consider what happens if `getJSON()` completes normally but an error occurs in `displayUserProfile()`. That callback function is invoked asynchronously when `getJSON()` returns, so it is also asynchronous and cannot meaningfully throw an exception (because there is no code on the call stack to handle it).

    getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);

With this code, a normal result from` getJSON()` is still passed to `displayUserProfile()`, but any error in `getJSON()` or in `displayUserProfile()` (including any exceptions thrown by `displayUserProfile`) get passed to `handleProfileError()`.

### Chaining Promises

One of the most important benefits of Promises is that they provide a natural way to express a sequence of asynchronous operations as a linear chain of `then()` method invocations, without having to nest each operation within the callback of the previous one.

    fetch(documentURL)

    .then(response => response.json())

    .then(document => {return render(document); })

    .then(rendered => {cacheInDatabase(rendered); })

    .catch(error => handle(error));

has largely been replaced by the newer, Promise-based Fetch API. In its simplest form, this new HTTP API is just the function fetch(). That promise is fulfilled when the HTTP response begins to arrive and the HTTP status and headers are available.

    fetch("/api/user/profile")

    .then(response => {

    if (response.ok &&  response.headers.get("Content-Type") === "application/json") {

    // What can we do here? We don't actually have the response body yet.

    }

    });

But although the initial Promise is fulfilled, the body of the response may not yet have arrived. So these `text()` and` json()` methods for accessing the body of the response themselves return Promises.

    fetch("/api/user/profile")

    .then(response => {

    return response.json();

    })

    .then(profile => {

    displayUserProfile(profile);

    });

There is a second `then()` in the chain, which means that the first invocation of the `then()` method must itself return a Promise. That is not how Promises work, however.

When we write a chain of `.then()` invocations, we are not registering multiple callbacks on a single Promise object. Instead, each invocation of the `then()` method returns a new Promise object. That new Promise object is not fulfilled until the function passed to `then()` is complete.

    fetch(theURL)       // task 1; returns promise 1

    .then(callback1)  // task 2; returns promise 2

    .then(callback2); // task 3; returns promise 3

### Resolving Promises

There is actually a fourth Promise object involved as which brings up the point of what it means for a Promise to be “resolved.”

fetch() returns a Promise object which, when fulfilled, passes a Response object to the callback function we register. This Response object has `.text(), .json(),` and other methods to request the body of the HTTP response in various forms. But since the body may not yet have arrived, these methods must return Promise objects.

“task 2” calls the `.json()` method and returns its value. This is the fourth Promise object, and it is the return value of the `callback1()` function.

Let’s consider:

    function c1(response) {

    let p4 = response.json();

    return p4;

    }

    // callback 1

    // returns promise 4

    function c2(profile) {

    displayUserProfile(profile);

    }

    // callback 2

    let p1 = fetch("/api/user/profile");

    promise 1, task 1

    let p2 = p1.then(c1);

    promise 2, task 2

    let p3 = p2.then(c2);

    promise 3, task 3

In order for Promise chains to work usefully, the output of task 2 must become the input to task 3. The input to task 3 is the body of the URL that was fetched, parsed as a JSON object. But the return value of callback c1 is not a JSON object, but Promise p4 for that JSON object.

When p1 is fulfilled, c1 is invoked, and task 2 begins. And when p2 is fulfilled, c2 is invoked, and task 3 begins.

And when p2 is fulfilled, c2 is invoked, and task 3 begins. But just because task 2 begins when c1 is invoked,it does not mean that task 2 must end when c1 returns.

Promises are about managing asynchronous tasks, and if task 2 is asynchronous, then that task will not be complete by the time the callback returns.

When you pass a callback c to the `then()` method, `then()` returns a Promise p and arranges to asynchronously invoke c at some later time. The callback performs some computation and returns a value v. When the callback returns, p is resolved with the value v. When a Promise is resolved with a value that is not itself a Promise, it is immediately fulfilled with that value.

So if c returns a non-Promise, that return value becomes the value of p, p is fulfilled and we are done. But if the return value v is itself a Promise, then p is resolved but not yet fulfilled.

At this stage, p cannot settle until the Promise v settles. If v is fulfilled, then p will be fulfilled to the same value. If v is rejected, then p will be rejected for the same reason. This is what the “resolved” state of a Promise means

the Promise has become associated with, or “locked onto,” another Promise. We don’t know yet whether p will be fulfilled or rejected, but our callback c no longer has any control over that. p is “resolved” in the sense that its fate now depends entirely on what happens to Promise v.

Let’s bring this back to our URL-fetching example. When c1 returns p4, p2 is resolved. But being resolved is not the same as being fulfilled, so task 3 does not begin yet. When the full body of the HTTP response becomes available, then the .`json()` method can parse it and use that parsed value to fulfill p4. When p4 is fulfilled, p2 is automatically fulfilled as well, with the same parsed JSON value. At this point, the parsed JSON object is passed to c2, and task 3 begins.

### More on Promises and Errors

With synchronous code, if you leave out error-handling code, you’ll at least get an exception and a stack trace that you can use to figure out what is going wrong. With asynchronous code, unhandled exceptions will often go unreported, and errors can occur silently, making them much harder to debug. The good news is that the `.catch()` method makes it easy to handle errors when working with Promises.

THE CATCH AND FINALLY METHODS

The `.catch()` method of a Promise is simply a shorthand way to call `.then()` with null as the first argument and an error-handling callback as the second argument.

Normal exceptions don’t work with asynchronous code. The `.catch()` method of Promises is an alternative that does work for asynchronous code.

    fetch("/api/user/profile")

    .then(response => {

    if (!response.ok) {

    return null;

    }

    let type = response.headers.get("content-type");

    if (type !== "application/json") {

    throw new TypeError(`Expected JSON, got ${type}`);

    }

    return response.json();

    })

    .then(profile => {

    if (profile) {

    displayUserProfile(profile);

    }

    else {

    displayLoggedOutProfilePage();

    }

    })

    .catch(e => {

    if (e instanceof NetworkError) {

    displayErrorMessage("Check your internet connection.");

    }

    else if (e instanceof TypeError) {

    displayErrorMessage("Something is wrong with our server!");

    }

    else {

    console.error(e);

    }

    });

p1 is the Promise returned by the `fetch()` call

p2 is the Promise returned by the first `.then()` call

c1 is the callback that we pass to that .`then()` call

p3 is the Promise returned by the second `.then()` call

c2 is the callback we pass to that call

c3 is the callback that we pass to the `.catch()` call

The first thing that could fail is the fetch() request itself. Let’s say p1 was rejected with a NetworkError object.

We didn’t pass an error-handling callback function as the second argument to the `.then()` call, so p2 rejects as well with the same NetworkError object.

Without a handler, though, p2 is rejected, and then p3 is rejected for the same reason.

At this point, the c3 error-handling callback is called, and the NetworkError-specific code within it runs.

There are a couple of things worth noting about this code. First, notice that the error object thrown with a regular, synchronous throw statement ends up being handled asynchronously with a `.catch()` method invocation in a Promise chain. This should make it clear why this shorthand method is preferred over passing a second argument to .`then()`, and also why it is so idiomatic to end Promise chains with a `.catch()` call.

it is also perfectly valid to use `.catch()` elsewhere in a Promise chain. If one of the stages in your Promise chain can fail with an error, and if the error is some kind of recoverable error that should not stop the rest of the chain from running, then you can insert a `.catch()` call in the chain, resulting in code that might look like this:

    startAsyncOperation()

    .then(doStageTwo)

    .catch(recoverFromStageTwoError)

    .then(doStageThree)

    .then(doStageFour)

    .catch(logStageThreeAndFourErrors);

If the callback returns normally, then the `.catch()` callback will be skipped, and the return value of the previous callback will become the input to the next .`then()` callback.

Once an error has been passed to a `.catch()` callback, it stops propagating down the Promise chain. A `.catch()` callback can throw a new error, but if it returns normally, than that return value is used to resolve and/or fulfill the associated Promise, and  
 the error stops propagating.

Sometimes, in complex network environments, errors can occur more or less at random, and it can be appropriate to handle those errors by simply retrying the asynchronous request.

    queryDatabase()

    .catch(e => wait(500).then(queryDatabase))

    .then(displayTable)

    .catch(displayDatabaseError);

### Promises in Parallel

Sometimes,we want to execute a number of asynchronous operations in parallel. The function `Promise.all()` can do this. `Promise.all()` takes an array of Promise objects as its input and returns a Promise.

The returned Promise will be rejected if any of the input Promises are rejected. Otherwise, it will be fulfilled with an array of the fulfillment values of each of the input Promises.

    const urls = [ /* zero or more URLs here */ ];

    promises = urls.map(url => fetch(url).then(r => r.text()));

    Promise.all(promises)

    .then(bodies => { /* do something with the array of strings */ })

    .catch(e => console.error(e));

The Promise returned by `Promise.all()` rejects when any of the input Promises is rejected. This happens immediately upon the first rejection and can happen while other input Promises are still pending. In ES2020, `Promise.allSettled()` takes an array of input  
 Promises and returns a Promise, just like Promise.all() does. But `Promise.allSettled()` never rejects the returned Promise, and it does not fulfill that Promise until all of the input Promises have settled. The Promise resolves to an array of objects, with one object for each input Promise. Each of these returned objects has a status property set to "fulfilled" or "rejected." If the status is "fulfilled", then the object will also have a value property that gives the fulfillment value. And if the status is "rejected", then the object will also have a reason property that gives the error or rejection value of the corresponding Promise.

    Promise.allSettled([Promise.resolve(1), Promise.reject(2),3]).then(results => {

    results[0] // => { status: "fulfilled", value: 1 }

    results[1] // => { status: "rejected", reason: 2 }

    results[2] // => { status: "fulfilled", value: 3 }

    });

Occasionally, you may want to run a number of Promises at once but may only care about the value of the first one to fulfill. In that case, you can use `Promise.race()` instead of `Promise.all()`. It returns a Promise that is fulfilled or rejected when the first of the Promises in the input array is fulfilled or rejected.

### Making Promises

### Promises in Sequence

### async and await

These new keywords dramatically simplify the use of Promises and allow us to write Promise-based, asynchronous code that looks like synchronous code that blocks while waiting for network responses or other asynchronous events.

Asynchronous code can’t return a value or throw an exception the way that regular synchronous code can. And this is why Promises are designed the way the are. The value of a fulfilled Promise is like the return value of a synchronous function. And the value of a rejected Promise is like a value thrown by a synchronous function.

`async` and `await` take efficient, Promise-based code and hide the Promises so that your asynchronous code can be as easy to read and as easy to reason about as inefficient, blocking, synchronous code.

Given a Promise object p, the expression await p waits until p settles. If p fulfills, then the value of await p is the fulfillment value of p. On the other hand, if p is rejected, then the await p expression throws the rejection value of p.

    let response = await fetch("/api/user/profile");

    let profile = await response.json();

It is critical to understand right away that the `await` keyword does not cause your program to block and literally do nothing until the specified Promise settles. The code remains asynchronous, and the `await` simply disguises this fact. This means that any code that uses await is itself asynchronous.

### async Functions

Because any code that uses await is asynchronous, there is one critical rule: you can only use the await keyword within functions that have been declared with the `async` keyword.

    async function getHighScore() {

    let response = await fetch("/api/user/profile");

    let profile = await response.json();

    return profile.highScore;

    }

Declaring a function `async` means that the return value of the function will be a Promise even if no Promise-related code appears in the body of the function.

The `getHighScore()` function is declared `async`, so it returns a Promise. And because it returns a Promise, we can use the `await` keyword with it:

    displayHighScore(await getHighScore());

### Awaiting Multiple Promises

Suppose that we’ve written our `getJSON()` function using async:

    async function getJSON(url) {

    let response = await fetch(url);

    let body = await response.json();

    return body;

    }

And now suppose that we want to fetch two JSON values with this function

    let value1 = await getJSON(url1);

    let value2 = await getJSON(url2);

The problem with this code is that it is unnecessarily sequential: the fetch of the second URL will not begin until the first fetch is complete. If the second URL does not depend on the value obtained from the firstURL, then we should probably try to fetch the two values at the same time.

    let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);

### The for/await Loop

Suppose you have an array of URLs:

    const urls = [url1, url2, url3];

You can call fetch() on each URL to get an array of Promises:

    const promises = urls.map(url => fetch(url));

We could now use` Promise.all()` to wait for all the Promises in the array to be fulfilled. But suppose we want the results of the first fetch as soon as they become available and don’t want to wait for all the URLs to be fetched.

    for(const promise of promises) {

    response = await promise;

    handle(response);

    }

←&gt;

    for await (const response of promises) {

    handle(response);

    }

both examples will only work if they are within functions declared async; a `for/await` loop is no different than a regular await expression in that way

#### If you found this guide helpful feel free to checkout my GitHub/gist’s where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor"><strong>bgoonz’s</strong> gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or checkout my personal resource site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 8, 2021](https://medium.com/p/64306cd6b0db).

<a href="https://medium.com/@bryanguner/complete-javascript-reference-guide-64306cd6b0db" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
