---
title: Js-Loops
weight: 0
excerpt: lorem-ipsum
seo:
  title: 'Js-Loops'
  description: ''
  robots: []
  extra: []
template: docs
---


# for

The **for statement** creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a [block statement](block)) to be executed in the loop.

## Syntax

    for ([initialization]; [condition]; [final-expression])
       statement

`initialization`  
An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for` loop is in. Variables declared with `let` are local to the statement.

The result of this expression is discarded.

`condition`  
An expression to be evaluated before each loop iteration. If this expression evaluates to true, `statement` is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the `for` construct.

`final-expression`  
An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`. Generally used to update or increment the counter variable.

`statement`  
A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a [block](block) statement (`{ ... }`) to group those statements. To execute no statement within the loop, use an [empty](empty) statement (`;`).

## Examples

### Using for

The following `for` statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than nine, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

    for (let i = 0; i < 9; i++) {
       console.log(i);
       // more statements
    }

### Optional for expressions

All three expressions in the head of the `for` loop are optional.

For example, in the `initialization` block it is not required to initialize variables:

    var i = 0;
    for (; i < 9; i++) {
        console.log(i);
        // more statements
    }

Like the `initialization` block, the `condition` block is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

    for (let i = 0;; i++) {
       console.log(i);
       if (i > 3) break;
       // more statements
    }

You can also omit all three blocks. Again, make sure to use a [`break`](break) statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

    var i = 0;

    for (;;) {
      if (i > 3) break;
      console.log(i);
      i++;
    }

### Using for without a statement

The following `for` cycle calculates the offset position of a node in the `final-expression` section, and therefore it does not require the use of a `statement` section, a semicolon is used instead.

    function showOffsetPos(sId) {

      var nLeft = 0, nTop = 0;

      for (

        var oItNode = document.getElementById(sId); /* initialization */

        oItNode; /* condition */

        nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */

      ); /* semicolon */

      console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');

    }

    /* Example call: */

    showOffsetPos('content');

    // Output:
    // "Offset position of "content" element:
    // left: 0px;
    // top: 153px;"

**Note:** This is one of the few cases in JavaScript where **the semicolon is mandatory**. Indeed, without the semicolon the line that follows the cycle declaration will be considered a statement.


---

## For... In


# for...in

The `for...in` iterates over all [enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) of an object that are keyed by strings (ignoring ones keyed by [Symbol](../global_objects/symbol)s), including inherited enumerable properties.

## Syntax

    for (variable in object)
      statement

`variable`  
A different property name is assigned to `variable` on each iteration.

`object`  
Object whose non-Symbol enumerable properties are iterated over.

## Description

A `for...in` loop only iterates over enumerable, non-Symbol properties. Objects created from built-in constructors like `Array` and `Object` have inherited non-enumerable properties from `Object.prototype` and `String.prototype`, such as [`String`](../global_objects/string)'s [`indexOf()`](../global_objects/string/indexof) method or [`Object`](../global_objects/object)'s [`toString()`](../global_objects/object/tostring) method. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).

### Deleted, added, or modified properties

A `for...in` loop iterates over the properties of an object in an arbitrary order (see the [`delete`](../operators/delete) operator for more on why one cannot depend on the seeming orderliness of iteration, at least in a cross-browser setting).

If a property is modified in one iteration and then visited at a later time, its value in the loop is its value at that later time. A property that is deleted before it has been visited will not be visited later. Properties added to the object over which iteration is occurring may either be visited or omitted from iteration.

In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. There is no guarantee whether an added property will be visited, whether a modified property (other than the current one) will be visited before or after it is modified, or whether a deleted property will be visited before it is deleted.

### Array iteration and for...in

**Note:** `for...in` should not be used to iterate over an [`Array`](../global_objects/array) where the index order is important.

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. There is no guarantee that `for...in` will return the indexes in any particular order. The `for...in` loop statement will return all enumerable properties, including those with non-integer names and those that are inherited.

Because the order of iteration is implementation-dependent, iterating over an array may not visit elements in a consistent order. Therefore, it is better to use a [`for`](for) loop with a numeric index (or [`Array.prototype.forEach()`](../global_objects/array/foreach) or the [`for...of`](for...of) loop) when iterating over arrays where the order of access is important.

### Iterating over own properties only

If you only want to consider properties attached to the object itself, and not its prototypes, use [`getOwnPropertyNames()`](../global_objects/object/getownpropertynames) or perform a [`hasOwnProperty()`](../global_objects/object/hasownproperty) check ([`propertyIsEnumerable()`](../global_objects/object/propertyisenumerable) can also be used). Alternatively, if you know there won't be any outside code interference, you can extend built-in prototypes with a check method.

## Why Use for...in?

Given that `for...in` is built for iterating object properties, not recommended for use with arrays, and options like `Array.prototype.forEach()` and `for...of` exist, what might be the use of `for...in` at all?

It may be most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). Although arrays are often more practical for storing data, in situations where a key-value pair is preferred for working with data (with properties acting as the "key"), there may be instances where you want to check if any of those keys hold a particular value.

## Examples

### Using for...in

The `for...in` loop below iterates over all of the object's enumerable, non-Symbol properties and logs a string of the property names and their values.

    var obj = {a: 1, b: 2, c: 3};

    for (const prop in obj) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }

    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"

### Iterating own properties

The following function illustrates the use of [`hasOwnProperty()`](../global_objects/object/hasownproperty): the inherited properties are not displayed.

    var triangle = {a: 1, b: 2, c: 3};

    function ColoredTriangle() {
      this.color = 'red';
    }

    ColoredTriangle.prototype = triangle;

    var obj = new ColoredTriangle();

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
      }
    }

    // Output:
    // "obj.color = red"
