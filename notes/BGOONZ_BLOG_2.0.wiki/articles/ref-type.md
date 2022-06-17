EN

-   <a href="https://ar.javascript.info/reference-type"
-   <a href="reference-type.html"
-   <a href="https://es.javascript.info/reference-type"
-   <a href="https://fr.javascript.info/reference-type"
-   <a href="https://it.javascript.info/reference-type"
    reference-type"

<!-- -->

-   <a href="https://ko.javascript.info/reference-type"
-   <a href="
-   <a href="https://tr.javascript.info/"
-   <a href="https://zh.javascript.info/reference-type"

We want to make this open-source project available for people all around the world.

[Help to translate](translate.html) the content of this tutorial to your language!

<a href="index.html" class="sitetoolbar__link sitetoolbar__link_logo">
<img src="img/sitetoolbar__logo_en.svg" class="sitetoolbar__logo sitetoolbar__logo_normal" width="200" />
<img src="img/sitetoolbar__logo_small_en.svg" class="sitetoolbar__logo sitetoolbar__logo_small" width="70" />
</a>

<a href="ebook.html" class="buy-book-button">
<span class="buy-book-button__extra-text">Buy</span>EPUB/PDF</a>

Search

Search

<a href="tutorial/map.html" class="map">

<span class="share-icons__title">Share</span>
<a href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Freference-type" class="share share_tw">
</a>
<a href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Burl%5D=https%3A%2F%2Fjavascript.info%2Freference-type" </a>

1.  <a href="index.html" class="breadcrumbs__link">
<span class="breadcrumbs__hidden-text">Tutorial</span>
</a>
2.  <span id="breadcrumb-1">
<a href="js.html" The JavaScript language</span>
</a>
</span>
3.  <span id="breadcrumb-2">
<a href="js-misc.html" Miscellaneous</span>
</a>
</span>

30th April 2021

# Reference Type

<span class="important__type">In-depth language feature</span>

This article covers an advanced topic, to understand certain edge-cases better.

It's not important. Many experienced developers live fine without knowing it. Read on if you want to know how things work under the hood.

A dynamically evaluated method call can lose `this`.

For instance:

<a href="reference-type.html#"
<a href="reference-type.html#"

    let user = {
      name: "John",
      hi() { alert(this.name); },
      bye() { alert("Bye"); }
    };

    user.hi(); // works

    // now let's call user.hi or user.bye depending on the name
    (user.name == "John" ? user.hi : user.bye)(); // Error!

On the last line there is a conditional operator that chooses either `user.hi` or `user.bye`. In this case the result is `user.hi`.

Then the method is immediately called with parentheses `()`. But it doesn't work correctly!

As you can see, the call results in an error, because the value of `"this"` inside the call becomes `undefined`.

This works (object dot method):

    user.hi();

This doesn't (evaluated method):

    (user.name == "John" ? user.hi : user.bye)(); // Error!

Why? If we want to understand why it happens, let's get under the hood of how `obj.method()` call works.

## <a href="reference-type.html#reference-type-explained" id="reference-type-explained" class="main__anchor">Reference type explained</a>

Looking closely, we may notice two operations in `obj.method()` statement:

1.  First, the dot `'.'` retrieves the property `obj.method`.
2.  Then parentheses `()` execute it.

So, how does the information about `this` get passed from the first part to the second one?

If we put these operations on separate lines, then `this` will be lost for sure:

<a href="reference-type.html#"
<a href="reference-type.html#"

    let user = {
      name: "John",
      hi() { alert(this.name); }
    }

    // split getting and calling the method in two lines
    let hi = user.hi;
    hi(); // Error, because this is undefined

Here `hi = user.hi` puts the function into the variable, and then on the last line it is completely standalone, and so there's no `this`.

**To make `user.hi()` calls work, JavaScript uses a trick - the dot `'.'` returns not a function, but a value of the special [Reference Type](https://tc39.github.io/ecma262/#sec-reference-specification-type).**

The Reference Type is a "specification type". We can't explicitly use it, but it is used internally by the language.

The value of Reference Type is a three-value combination `(base, name, strict)`, where:

-   `base` is the object.
-   `name` is the property name.
-   `strict` is true if `use strict` is in effect.

The result of a property access `user.hi` is not a function, but a value of Reference Type. For `user.hi` in strict mode it is:

    // Reference Type value
    (user, "hi", true)

When parentheses `()` are called on the Reference Type, they receive the full information about the object and its method, and can set the right `this` (`=user` in this case).

Reference type is a special "intermediary" internal type, with the purpose to pass information from dot `.` to calling parentheses `()`.

Any other operation like assignment `hi = user.hi` discards the reference type as a whole, takes the value of `user.hi` (a function) and passes it on. So any further operation "loses" `this`.

So, as the result, the value of `this` is only passed the right way if the function is called directly using a dot `obj.method()` or square brackets `obj['method']()` syntax (they do the same here). There are various ways to solve this problem such as [func.bind()](bind.html#solution-2-bind).

## <a href="reference-type.html#summary" id="summary" class="main__anchor">Summary</a>

Reference Type is an internal type of the language.

Reading a property, such as with dot `.` in `obj.method()` returns not exactly the property value, but a special "reference type" value that stores both the property value and the object it was taken from.

That's for the subsequent method call `()` to get the object and set `this` to it.

For all other operations, the reference type automatically becomes the property value (a function in our case).

The whole mechanics is hidden from our eyes. It only matters in subtle cases, such as when a method is obtained dynamically from the object, using an expression.

## <a href="reference-type.html#tasks" class="tasks__title-anchor main__anchor main__anchor main__anchor_noicon">Tasks</a>

### <a href="reference-type.html#syntax-check" id="syntax-check" class="main__anchor">Syntax check</a>

<a href="task/check-syntax.html" class="task__open-link">
</a>

<span class="task__importance" title="How important is the task, from 1 to 5">importance: 2</span>

What is the result of this code?

    let user = {
      name: "John",
      go: function() { alert(this.name) }
    }

    (user.go)()

P.S. There's a pitfall :)

solution

**Error**!

Try it:

<a href="reference-type.html#"
<a href="reference-type.html#"

    let user = {
      name: "John",
      go: function() { alert(this.name) }
    }

    (user.go)() // error!

The error message in most browsers does not give us much of a clue about what went wrong.

**The error appears because a semicolon is missing after `user = {...}`.**

JavaScript does not auto-insert a semicolon before a bracket `(user.go)()`, so it reads the code like:

    let user = { go:... }(user.go)()

Then we can also see that such a joint expression is syntactically a call of the object `{ go: ... }` as a function with the argument `(user.go)`. And that also happens on the same line with `let user`, so the `user` object has not yet even been defined, hence the error.

If we insert the semicolon, all is fine:

<a href="reference-type.html#"
<a href="reference-type.html#"

    let user = {
      name: "John",
      go: function() { alert(this.name) }
    };

    (user.go)() // John

Please note that parentheses around `(user.go)` do nothing here. Usually they setup the order of operations, but here the dot `.` works first anyway, so there's no effect. Only the semicolon thing matters.

### <a href="reference-type.html#explain-the-value-of-this" id="explain-the-value-of-this" class="main__anchor">Explain the value of "this"</a>

<a href="task/why-this.html" class="task__open-link">
</a>

<span class="task__importance" title="How important is the task, from 1 to 5">importance: 3</span>

In the code below we intend to call `obj.go()` method 4 times in a row.

But calls `(1)` and `(2)` works differently from `(3)` and `(4)`. Why?

<a href="reference-type.html#"
<a href="reference-type.html#"

    let obj, method;

    obj = {
      go: function() { alert(this); }
    };

    obj.go();               // (1) [object Object]

    (obj.go)();             // (2) [object Object]

    (method = obj.go)();    // (3) undefined

    (obj.go || obj.stop)(); // (4) undefined

solution

Here's the explanations.

1.  That's a regular object method call.

2.  The same, parentheses do not change the order of operations here, the dot is first anyway.

3.  Here we have a more complex call `(expression)()`. The call works as if it were split into two lines:

        f = obj.go; // calculate the expression
        f();        // call what we have

    Here `f()` is executed as a function, without `this`.

4.  The similar thing as `(3)`, to the left of the parentheses `()` we have an expression.

To explain the behavior of `(3)` and `(4)` we need to recall that property accessors (dot or square brackets) return a value of the Reference Type.

Any operation on it except a method call (like assignment `=` or `||`) turns it into an ordinary value, which does not carry the information allowing to set `this`.

<a href="currying-partials.html" class="page__nav page__nav_prev">
<span class="page__nav-text">
<span class="page__nav-text-shortcut">
</span>
</span>
<span class="page__nav-text-alternate">Previous lesson</span>
</a>
<a href="bigint.html" class="page__nav page__nav_next">
<span class="page__nav-text">
<span class="page__nav-text-shortcut">
</span>
</span>
<span class="page__nav-text-alternate">Next lesson</span>
</a>

<span class="share-icons__title">Share</span>
<a href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Freference-type" class="share share_tw">
</a>
<a href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Burl%5D=https%3A%2F%2Fjavascript.info%2Freference-type" </a>

<a href="tutorial/map.html" class="map">

## <a href="reference-type.html#comments" id="comments">Comments</a>

<span class="comments__read-before-link">read this before commenting…</span>

-   If you have suggestions what to improve - please [submit a GitHub issue](https://github.com/javascript-tutorial/en.javascript.info/issues/new) or a pull request instead of commenting.
-   If you can't understand something in the article - please elaborate.
-   To insert few words of code, use the `<code>` tag, for several lines - wrap them in `<pre>` tag, for more than 10 lines - use a sandbox ([plnkr](https://plnkr.co/edit/?p=preview), [jsbin](https://jsbin.com), [codepen](http://codepen.io)…)

<a href="tutorial/map.html" class="map">
</a>

#### Chapter

-   <a href="js-misc.html" class="sidebar__link">Miscellaneous</a>

#### Lesson navigation

-   <a href="reference-type.html#reference-type-explained" class="sidebar__link">Reference type explained</a>
-   <a href="reference-type.html#summary" class="sidebar__link">Summary</a>

-   <a href="reference-type.html#tasks" class="sidebar__link">Tasks (2)</a>
-   <a href="reference-type.html#comments" class="sidebar__link">Comments</a>

Share

<a href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Freference-type" class="share share_tw sidebar__share">
</a>
<a href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Burl%5D=https%3A%2F%2Fjavascript.info%2Freference-type" class="share share_fb sidebar__share">
</a>

<a href="https://github.com/javascript-tutorial/en.javascript.info/blob/master/1-js/99-js-misc/04-reference-type" class="sidebar__link">Edit on GitHub</a>

-   <a href="about.html" class="page-footer__link">about the project</a>
-   <a href="about.html#contact-us" class="page-footer__link">contact us</a>
-   <a href="terms.html" class="page-footer__link">terms of usage</a>
-   <a href="privacy.html" class="page-footer__link">privacy policy</a>
