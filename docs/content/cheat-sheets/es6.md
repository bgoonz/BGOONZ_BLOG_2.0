subtitle

2022-01-03

------------------------------------------------------------------------

title: ES2015+ category: JavaScript

tags: \[Featured\] weight: -10 intro: | A quick overview of new JavaScript features in ES2015, ES2016, ES2017, ES2018 and beyond.

------------------------------------------------------------------------

### Block scoping

#### Let

------------------------------------------------------------------------

    function fn() {
        let x = 0;
        if (true) {
            let x = 1; // only inside this `if`
        }
    }

{: data-line="2,4”}

#### Const

    const a = 1;

`let` is the new `var`. Constants work just like `let`, but can’t be reassigned. See: [Let and const](https://babeljs.io/learn-es2015/#let--const)

### Backtick strings

#### Interpolation

    const message = `Hello ${name}`;

#### Multiline strings

    const str = `
    hello
    world
    `;

Templates and multiline strings. See: [Template strings](https://babeljs.io/learn-es2015/#template-strings)

### Binary and octal literals

    let bin = 0b1010010;
    let oct = 0o755;

See: [Binary and octal literals](https://babeljs.io/learn-es2015/#binary-and-octal-literals)

### New methods

#### New string methods

    'hello'.repeat(3);
    'hello'.includes('ll');
    'hello'.startsWith('he');
    'hello'.padStart(8); // "   hello"
    'hello'.padEnd(8); // "hello   "
    'hello'.padEnd(8, '!'); // hello!!!
    '\u1E9B\u0323'.normalize('NFC');

See: [New methods](https://babeljs.io/learn-es2015/#math--number--string--object-apis)

### Classes

    class Circle extends Shape {

#### Constructor

      constructor (radius) {
        this.radius = radius
      }

{: data-line="1”}

#### Methods

      getArea () {
        return Math.PI * 2 * this.radius
      }

{: data-line="1”}

#### Calling superclass methods

      expand (n) {
        return super.expand(n) * Math.PI
      }

{: data-line="2”}

#### Static methods

      static createFromDiameter(diameter) {
        return new Circle(diameter / 2)
      }
    }

{: data-line="1”}

Syntactic sugar for prototypes. See: [Classes](https://babeljs.io/learn-es2015/#classes)

### Exponent operator

    const byte = 2 ** 8;
    // Same as: Math.pow(2, 8)

{: data-line="1”}

Promises
--------

### Making promises

    new Promise((resolve, reject) => {
        if (ok) {
            resolve(result);
        } else {
            reject(error);
        }
    });

{: data-line="1”}

For asynchronous programming. See: [Promises](https://babeljs.io/learn-es2015/#promises)

### Using promises

    promise
      .then((result) => { ··· })
      .catch((error) => { ··· })

{: data-line="2,3”}

### Using promises with finally

    promise
      .then((result) => { ··· })
      .catch((error) => { ··· })
      .finally(() => { // logic independent of success/error })

{: data-line="4”}

The handler is called when the promise is fulfilled or rejected.

### Promise functions

    Promise.all(···)
    Promise.race(···)
    Promise.reject(···)
    Promise.resolve(···)

### Async-await

    async function run() {
        const user = await getUser();
        const tweets = await getTweets(user);
        return [user, tweets];
    }

{: data-line="2,3”}

`async` functions are another way of using functions.

See: [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Destructuring
-------------

### Destructuring assignment

#### Arrays

    const [first, last] = ['Nikola', 'Tesla'];

{: data-line="1”}

#### Objects

    let { title, author } = {
        title: 'The Silkworm',
        author: 'R. Galbraith'
    };

{: data-line="1”}

Supports for matching arrays and objects. See: [Destructuring](https://babeljs.io/learn-es2015/#destructuring)

### Default values

    const scores = [22, 33];
    const [math = 50, sci = 50, arts = 50] = scores;

    // Result:
    // math === 22, sci === 33, arts === 50

Default values can be assigned while destructuring arrays or objects.

### Function arguments

------------------------------------------------------------------------

    function greet({ name, greeting }) {
        console.log(`${greeting}, ${name}!`);
    }

{: data-line="1”}

    greet({ name: 'Larry', greeting: 'Ahoy' });

Destructuring of objects and arrays can also be done in function arguments.

### Default values

------------------------------------------------------------------------

    function greet({ name = 'Rauno' } = {}) {
        console.log(`Hi ${name}!`);
    }

{: data-line="1”}

    greet(); // Hi Rauno!
    greet({ name: 'Larry' }); // Hi Larry!

### Reassigning keys

------------------------------------------------------------------------

    function printCoordinates({ left: x, top: y }) {
        console.log(`x: ${x}, y: ${y}`);
    }

{: data-line="1”}

    printCoordinates({ left: 25, top: 90 });

This example assigns `x` to the value of the `left` key.

### Loops

    for (let {title, artist} of songs) {
      ···
    }

{: data-line="1”}

The assignment expressions work in loops, too.

### Object destructuring

    const { id, ...detail } = song;

{: data-line="1”}

Extract some keys individually and remaining keys in the object using rest (…) operator

Spread
------

### Object spread

#### with Object spread

    const options = {
        ...defaults,
        visible: true
    };

{: data-line="2”}

#### without Object spread

    const options = Object.assign({}, defaults, { visible: true });

The Object spread operator lets you build new objects from other objects.

See: [Object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### Array spread

#### with Array spread

    const users = [...admins, ...editors, 'rstacruz'];

{: data-line="2,3”}

#### without Array spread

    const users = admins.concat(editors).concat(['rstacruz']);

The spread operator lets you build new arrays in the same way.

See: [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

Functions
---------

### Function arguments

#### Default arguments

------------------------------------------------------------------------

    function greet(name = 'Jerry') {
        return `Hello ${name}`;
    }

{: data-line="1”}

#### Rest arguments

------------------------------------------------------------------------

    function fn(x, ...y) {
        // y is an Array
        return x * y.length;
    }

{: data-line="1”}

#### Spread

    fn(...[1, 2, 3]);
    // same as fn(1, 2, 3)

{: data-line="1”}

Default, rest, spread. See: [Function arguments](https://babeljs.io/learn-es2015/#default--rest--spread)

### Fat arrows

#### Fat arrows

    setTimeout(() => {
      ···
    })

{: data-line="1”}

#### With arguments

    readFile('text.txt', (err, data) => {
      ...
    })

{: data-line="1”}

#### Implicit return

    numbers.map((n) => n * 2);
    // No curly braces = implicit return
    // Same as: numbers.map(function (n) { return n * 2 })
    numbers.map((n) => ({
        result: n * 2
    }));
    // Implicitly returning objects requires parentheses around the object

{: data-line="1,4,5,6”}

Like functions but with `this` preserved. See: [Fat arrows](https://babeljs.io/learn-es2015/#arrows-and-lexical-this)

Objects
-------

### Shorthand syntax

    module.exports = { hello, bye };
    // Same as: module.exports = { hello: hello, bye: bye }

See: [Object literal enhancements](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Methods

    const App = {
        start() {
            console.log('running');
        }
    };
    // Same as: App = { start: function () {···} }

{: data-line="2”}

See: [Object literal enhancements](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Getters and setters

    const App = {
        get closed() {
            return this.status === 'closed';
        },
        set closed(value) {
            this.status = value ? 'closed' : 'open';
        }
    };

{: data-line="2,5”}

See: [Object literal enhancements](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Computed property names

    let event = 'click';
    let handlers = {
        [`on${event}`]: true
    };
    // Same as: handlers = { 'onclick': true }

See: [Object literal enhancements](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Extract values

    const fatherJS = { age: 57, name: 'Brendan Eich' };

    Object.values(fatherJS);
    // [57, "Brendan Eich"]
    Object.entries(fatherJS);
    // [["age", 57], ["name", "Brendan Eich"]]

{: data-line="3,5”}

Modules
-------

### Imports

    import 'helpers';
    // aka: require('···')

    import Express from 'express';
    // aka: const Express = require('···').default || require('···')

    import { indent } from 'helpers';
    // aka: const indent = require('···').indent

    import * as Helpers from 'helpers';
    // aka: const Helpers = require('···')

    import { indentSpaces as indent } from 'helpers';
    // aka: const indent = require('···').indentSpaces

`import` is the new `require()`. See: [Module imports](https://babeljs.io/learn-es2015/#modules)

### Exports

    export default function () { ··· }
    // aka: module.exports.default = ···

    export function mymethod () { ··· }
    // aka: module.exports.mymethod = ···

    export const pi = 3.14159;
    // aka: module.exports.pi = ···

`export` is the new `module.exports`. See: [Module exports](https://babeljs.io/learn-es2015/#modules)

Generators
----------

### Generators

------------------------------------------------------------------------

    function* idMaker() {
        let id = 0;
        while (true) {
            yield id++;
        }
    }

    let gen = idMaker();
    gen.next().value; // → 0
    gen.next().value; // → 1
    gen.next().value; // → 2

It’s complicated. See: [Generators](https://babeljs.io/learn-es2015/#generators)

### For..of iteration

    for (let i of iterable) {
      ···
    }

For iterating through generators and arrays. See: [For..of iteration](https://babeljs.io/learn-es2015/#iterators--forof)
