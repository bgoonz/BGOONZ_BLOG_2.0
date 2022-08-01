---

title: Introducing JSX

weight: 0

excerpt: lorem-ipsum

seo:

    title: ''

    description: ''

    robots: []

    extra: []

template: docs

---



# Introducing JSX&#xA;&#xA;



Consider this variable declaration:



This funny tag syntax is neither a string nor HTML.



It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.



JSX produces React “elements”. We will explore rendering them to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html). Below, you can find the basics of JSX necessary to get you started.



### Why JSX?



React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.



Instead of artificially separating *technologies* by putting markup and logic in separate files, React [separates *concerns*](https://en.wikipedia.org/wiki/Separation_of_concerns) with loosely coupled units called “components” that contain both. We will come back to components in a [further section](https://reactjs.org/docs/components-and-props.html), but if you're not yet comfortable putting markup in JS, [this talk](https://www.youtube.com/watch?v=x7cQ3mrcKaY) might convince you otherwise.



React [doesn't require](https://reactjs.org/docs/react-without-jsx.html) using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.



With that out of the way, let's get started!



### Embedding Expressions in JSX



In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:



You can put any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.



In the example below, we embed the result of calling a JavaScript function, formatName(user), into an \<h1> element.



[Try it on CodePen](https://reactjs.org/redirect-to-codepen/introducing-jsx)



We split JSX over multiple lines for readability. While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of [automatic semicolon insertion](https://stackoverflow.com/q/2846283).



### JSX is an Expression Too



After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.



This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:



### Specifying Attributes with JSX



You may use quotes to specify string literals as attributes:



You may also use curly braces to embed a JavaScript expression in an attribute:



Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.



> **Warning:**

>

> Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

>

> For example, class becomes [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in JSX, and tabindex becomes [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).



### Specifying Children with JSX



If a tag is empty, you may close it immediately with />, like XML:



JSX tags may contain children:



### JSX Prevents Injection Attacks



It is safe to embed user input in JSX:



By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.



### JSX Represents Objects



Babel compiles JSX down to React.createElement() calls.



These two examples are identical:



React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:



These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.



We will explore rendering React elements to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html).



> **Tip:**

>

> We recommend using the [“Babel” language definition](https://babeljs.io/docs/en/next/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.

