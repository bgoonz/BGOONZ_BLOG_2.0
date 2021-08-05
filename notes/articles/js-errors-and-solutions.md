# Top 8 JavaScript Errors with Solutions

> According to the JavaScript MDN web docs there are six types of JavaScript errors, seven if we count warnings. However, the most common JavaScript…

According to the JavaScript MDN web docs there are six types of JavaScript errors, seven if we count warnings. However, the most common JavaScript errors triggered while coding are reference, syntax, and type errors. This article dives into the top eight of these errors, with examples and descriptive solutions on how to fix them.

![pool-table-with-eight-ball](https://blog.repl.it/images/careerkarma/eightball.jpg)

## TypeErrors

A [TypeError](https://careerkarma.com/blog/javascript-typeerror/) is an object that represents an error as a result of doing an operation that cannot be performed, usually because a value in an operation is not of the expected type.

But what are types? According to the latest version of the JavaScript specifications, ECMAScript, there are nine data and structural types. Six of which, sometimes seven if we count null, are primitive data types, those being string, number, bigint, boolean, undefined, and symbol.

TypeErrors can be thrown when you attempt to change a value that cannot be changed or when using a value in an inappropriate way. It can also occur when an argument is passed to a function incompatible with the type expected by the function or the operator inside of the function.

1.  Changing a Value that Cannot be Changed

When you use the const keyword to assign a value to something, it is constant and it will not change. Attempting to change the value of a constant variable will result in a TypeError.

    const a = 5
    a = "5"
    // Uncaught TypeError: Assignment to constant variable.

We can fix this by simply changing the name of the identifier we want to identify the string of “5”.

    const a = 5
    const b = "5"

2.  Using a Value in an Inappropriate Way

Developers must also make sure values are being used as intended. In the example below, “Cat” and “garfield” are backwards when trying to verify if garfield is an [instance of](https://careerkarma.com/blog/js-comparison/) the Cat() function.

    function Cat() {}
    function Dog() {}

    let garfield = new Cat()

    Cat instanceof garfield

    // Uncaught TypeError: Right-hand side of 'instanceof' is not callable

We can fix this by correcting the order of the two.

    function Cat() {}
    function Dog() {}

    let garfield = new Cat()

    garfield instanceof Cat

3.  An Argument that is Incompatible with the Type Expected by a Function

When coding an operation, developers must ensure they are using values to obtain a desired result. The value of null can be used intentionally to signify the absence of an object, but the way it is used below will result in a TypeError as it is an argument incompatible with the type expected by the function.

    function readingErrorsAreImportant(a){
        if(a.length === 5){
          return "equals five"
        } else if(a.length > 5) {
          return "Greater than five"
        }  else {
          return "Less than five"
        }
       }
       console.log(readingErrorsAreImportant(null))
       // Uncaught TypeError: Cannot read property 'length' of null

We can fix this by passing in a value type it is expecting. Like a numeric value type.

    function readingErrorsAreImportant(a){
        if(a.length === 5){
          return "equals five"
        } else if(a.length > 5) {
          return "Greater than five"
        }  else {
          return "Less than five"
        }
       }
       console.log(readingErrorsAreImportant(10))

## ReferenceErrors

In JavaScript, a [reference error](https://careerkarma.com/blog/javascript-referenceerror/) is thrown when a code attempts to reference a non-existing variable. Here, we talk about the most common types of reference error triggers and how to fix them.

4.  Undefined variables

Forgetting to define a variable before referencing is a common reference error trigger for new developers. This can also happen if the referenced variable has been commented out.

    let firstName = "John"
    let age = 23

    console.log(lastName)
    // Uncaught ReferenceError: lastName is not defined

    let firstName = "John"
    let lastName = "Smith"
    let age = 23

    console.log(lastName)
    // returns Smith

5.  Scope

Variables defined inside a function’s [scope](https://careerkarma.com/blog/javascript-closure/) cannot be accessed outside of it. We can think of scope as laws that govern certain parts of land, let’s say in the United States. A law in the books for the city of San Francisco may not be okay to follow in the city of Miami. Residents of Miami living in Miami must follow Miami laws.

In the function below, we attempt to access the value of a outside of its lexical scope.

    function nums() {
        numA = 1
        numB = 2


        return numA + numB
      }


      console.log(numA);

    //   Uncaught ReferenceError: numA is not defined

We can fix this by defining our variables in the global scope.

    numA = 1
    numB = 2

    function nums() {
      return numA + numB
    }

    console.log(nums());

    // returns 3

6.  Redeclarations

Not fully understanding how to redeclare variables can also trigger reference errors.

    function redeclarations() {
        let declare = 1;
        if (true) {
          let declare = (declare + 1);
        }
      }
      console.log(redeclarations())
    // Uncaught ReferenceError: Cannot access 'declare' before initialization

To fix the code above, we must either change “let” to “var” or omit “let” inside our if statement completely.

    function redeclarations() {
        let declare = 1;
        if (true) {
        declare = (declare + 1);


        }
      }
      console.log(redeclarations())

## SyntaxError

Syntax are rules that dictate how programming languages should be written. Each language has its own set of syntax rules different from others. We can think of them like grammar or punctuation in spoken languages. The question mark in English (?) differs from the question mark in Greek (;).

You can deduce that when you get a [syntax error](https://careerkarma.com/blog/javascript-syntaxerror/), you are writing the programming language incorrectly. You may either be omitting something accidentally or accidentally using syntax from a different language, which often occurs as developers grow their tech stack.

7.  Brackets and Parentheses

Missing or having an overflow of brackets are a cause for common syntax errors. One short bracket can result in a syntax error of an unexpected end of input, one too many can result in an unexpected token.

    function errors(a){

        if(a > 5){
          return true
        } else {
          return false
        // missing closing curly bracket


      }


      console.log(errors(5))
    // Uncaught SyntaxError: Unexpected end of input

    function errors(a){


        if(a > 5){
          return true
        } else {
          return false
        }


      }
    //   one bracket too many below
    }


      console.log(errors(5))
    // Uncaught SyntaxError: Unexpected token '}'

There are several extensions available in VS Code and other text editors to help you keep track of matched and mismatched brackets to prevent these errors from being thrown. The error in the console will also state what line in the code the error occurs.

Like brackets, sometimes it can be hard to follow a match to a closing parentheses, or where a parenthese may be needed, like in the parameters of arrow functions.

    const errors = a, b => {
        if(a + b == 5){
          return "equals"
        } else if (a + b > 5 ) {
          return "greater"
        } else {
          return "less"
        }
      }


      console.log(errors(1, 2))
    //   Uncaught SyntaxError: Missing initializer in const declaration

You need to enclose the parameters “a” and “b” inside a parentheses to write the syntax of the above function correctly.

8.  Commas

Forgetting commas in objects is another common syntax error trigger.

    let student = {
        name: "John",
        age: 23
        location: "Remote"
      }


      console.log(student.name)
    //   Uncaught SyntaxError: Unexpected identifier

We need a comma after every key value pair. The fix for the above would be putting a comma after 23.

## Conclusion

Errors in any programming language can be frustrating to debug, especially for new developers. The more you know about the error being triggered, the better your chances are at debugging quickly. Learning about the error and what it means not only helps us better understand the language, but also makes us better programmers.

[Source](https://blog.replit.com/Top-8-JavaScript-Errors-career-karma)
