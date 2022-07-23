---
title: Git Bash
subtitle: understanding git bash
date: '2021-09-02'
thumb_image_alt: image of
excerpt: 
seo:
    title: 'Git Bash'
    description: 'understanding git bash'
    robots: []
    extra: []
template: post
thumb_image: https://www.tutorialsteacher.com/Content/images/js/hoisting.png
---

Understanding [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) will help you organize your function scope. Just remember, variable declarations and function definitions are hoisted to the top. Variable definitions are not, even if you declare and define a variable on the same line. Also, a variable **declaration** lets the system know that the variable exists while **definition** assigns it a value.

---

```js


function doTheThing() {
    // ReferenceError: notDeclared is not defined
    console.log(notDeclared);

    // Outputs: undefined
    console.log(definedLater);
    var definedLater;

    definedLater = 'I am defined!';
    // Outputs: 'I am defined!'
    console.log(definedLater);

    // Outputs: undefined
    console.log(definedSimulateneously);
    var definedSimulateneously = 'I am defined!';
    // Outputs: 'I am defined!'
    console.log(definedSimulateneously);

    // Outputs: 'I did it!'
    doSomethingElse();

    function doSomethingElse() {
        console.log('I did it!');
    }

    // TypeError: undefined is not a function
    functionVar();

    var functionVar = function () {
        console.log('I did it!');
    };
}
```

To make things easier to read, declare all of your variables at the top of your function scope so it is clear which scope the variables are coming from. Define your variables before you need to use them. Define your functions at the bottom of your scope to keep them out of your way.
