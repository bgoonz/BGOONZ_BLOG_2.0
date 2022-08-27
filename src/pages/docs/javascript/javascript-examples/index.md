---
title: JavaScript Examples
template: docs
excerpt: Data structures examples in JavaScript
---

# JavaScript Examples

**Hello World**

```javascript
function output(t) {
    document.write('<p>' + t + '</p>');
}

alert('Hello, World!');
console.log('Hello, World!');
output('Hello, World!');
```

-   **Variables**

```javascript
var num = 1; // {1}
num = 3; // {2}

var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

// ******* Variable Scope

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}
```

-   **Arithmetic operators**

```javascript
let num = 0; // {1}
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);

num++;
num--;

console.log('New num value is ' + num);

console.log('num mod 2 value is ' + (num % 2));

/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);

/* Assignment operators */
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* Logical operators */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Bitwise operators */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete */
let myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // Object {name: "John"}
```

-   **Truthy & Falsey**

```javascript
function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy(''); // false
testTruthy('a'); // true
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)

testTruthy({}); // true (object is always true)

let obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false (property is undefined)
```

-   **Equals Operator:**

```javascript
console.log('packt' ? true : false);
// outputs true

console.log('packt' == true);
// 1 - converts Boolean using toNumber
// 'packt' == 1
// 2 - converts String using toNumber
// NaN == 1
// outputs false

console.log('packt' == false);
// 1 - converts Boolean using toNumber
// 'packt' == 0
// 2 - converts String using toNumber
// NaN == 0
// outputs false

console.log([0] == true);
// 1 - converts Boolean using toNumber
// [0] == 1
// 2 - converts Object using toPrimitive
// 2.1 - [0].valueOf() is not primitive
// 2.2 - [0].toString is 0
// 0 == 1
// outputs false

//* ****************************** ===
console.log('packt' === true); // false

console.log('packt' === 'packt'); // true

let person1 = { name: 'John' };
let person2 = { name: 'John' };
console.log(person1 === person2); // false, different objects
```

-   #### **:**

```javascript
/* Example 01 - if */
let num = 1;
if (num === 1) {
    console.log('num is equal to 1');
}

/* Example 02 - if-else */
let num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num);
}

/* Example 03 - if-else-if-else... */
let month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}

/* Example 04 - switch */
let month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
}

/* Example 05 - ternary operator - if..else */
if (num === 1) {
    num--;
} else {
    num++;
}

// is the same as
num === 1 ? num-- : num++;
```

-   **Loops**

```javascript
console.log('**** for example ****');
/* for - example */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('**** while example ****');
/* while - example */
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log('**** do-while example ****');
/* do-while - example */
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

-   **Functions:**

```javascript
function sayHello() {
    console.log('Hello!');
}

sayHello();

/* function with parameter */
function output(text) {
    console.log(text);
}

output('Hello!');

output('Hello!', 'Other text');

output();

/* function using the return statement */
function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(1, 2);
output(result);
```

-   **Object Orientation:**

```javascript
/* Object example 1 */
let obj = new Object();

/* Object example 2 */
let obj = {};

obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

/* Object example 3 */
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the updated value

Book.prototype.printTitle = function () {
    console.log(this.title);
};

book.printTitle();

book.printIsbn();
```

-   **Let & Const:**

```javascript
//* ****** EcmaScript 2015 (ES6): let and const keywords

//* ****** EcmaScript 2015 (ES6): let is the new var (https://goo.gl/he0udZ)
var framework = 'Angular';
var framework = 'React';
console.log(framework);

let language = 'JavaScript!'; // {1}
// let language = 'Ruby!'; // {2} - throws error
console.log(language);

//* ****** EcmaScript 2015 (ES6): const (https://goo.gl/YUQj3r)
const PI = 3.141593;
// PI = 3.0; //throws error
console.log(PI);

const jsFramework = {
    name: 'Angular'
};
jsFramework.name = 'React';

// error, cannot reassign object reference
/*
jsFramework = {
  name: 'Vue'
};
*/
```

-   #### **11-ES2015-ES6-variableScope:**

```javascript
//* ****** EcmaScript 2015 (ES6): variables scope (https://goo.gl/NbsVvg)
let movie = 'Lord of the Rings'; // {1}
// let movie = 'Batman v Superman'; //throws error, variable movie already declared

function starWarsFan() {
    const movie = 'Star Wars'; // {2}
    return movie;
}

function marvelFan() {
    movie = 'The Avengers'; // {3}
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft'; // {4}
    console.log('Before if: ' + phrase);
    if (isFan) {
        let phrase = 'initial text'; // {5}
        phrase = 'For the Horde!'; // {6}
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!'; // {7}
    console.log('After if: ' + phrase);
}

console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan(); // {12}

// output
// Lord of the Rings
// Star Wars
// The Avengers
// The Avengers
// Before if: Warcraft
// Inside if: For the Horde!
// After if: For the Alliance!
```

-   **String Templates:**

```javascript
//* ****** EcmaScript 2015 (ES6): Template literals (https://goo.gl/4N36CS)
const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n	and this is a new line\n	and so is this.');

console.log(`You are reading ${book.name}.,
   and this is a new line
    and so is this.`);
```

-   **Arrow Functions:**

```javascript
//* ****** EcmaScript 2015 (ES6): arrow functions (https://goo.gl/nM414v)
var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2));

const circleArea = (r) => {
    // {1}
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2));

const circleArea2 = (r) => 3.14 * r * r;
console.log(circleArea2(2));

const hello = () => console.log('hello!');
hello();
```

-   **Parameter Handlers:**

```javascript
//* ****** EcmaScript 2015 (ES6): Default Parameter Values (https://goo.gl/AP5EYb)
function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
console.log(sum(4, 2)); // outputs 9

// function above is the same as
function sum2(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}
console.log(sum2(4, 2)); // outputs 9

// or
function sum3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    return x + y + z;
}
console.log(sum3(4, 2)); // outputs 9

//* ****** EcmaScript 6: spread operator ('...') (https://goo.gl/8equk5)
let params = [3, 4, 5];
console.log(sum(...params)); // ES2015
console.log(sum.apply(undefined, params)); // ES5

let numbers = [1, 2, ...params]; // pushing values into array
console.log(numbers);

//* ****** EcmaScript 6: rest parameter ('...') (https://goo.gl/LaJZqU)
function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7)); // outputs 9;

// code above is the same as ES5:
function restParamaterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParamaterFunction2(1, 2, 'hello', true, 7));
```

-   **Destructuring Assignment**

```javascript
//* ****** EcmaScript 2015 (ES6): Destructuring Assignment + Property Shorthand (https://goo.gl/VsLecp )
let [x, y] = ['a', 'b'];
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// swap (https://goo.gl/EyFAII)
[x, y] = [y, x];
var temp = x;
x = y;
y = temp;

// code above is the same as
var x2 = 'a';
var y2 = 'b';
var obj2 = { x2: x2, y2: y2 };
console.log(obj2); // { x: "a", y: "b" }

// Method Properties (https://goo.gl/DKU2PN)
const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello());

// code above is the same as:
var hello2 = {
    name: 'abcdef',
    printHello: function printHello() {
        console.log('Hello');
    }
};
console.log(hello2.printHello());
```

-   **Classes & More:**

```javascript
//* ****** EcmaScript 2015 (ES6): classes (https://goo.gl/UhK1n4)
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the book title

// inheritance (https://goo.gl/hgQvo9)
class ITBook extends Book {
    // {1}
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn); // {2}
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');

console.log(jsBook.title);
console.log(jsBook.printTechnology());

// getter and setters (https://goo.gl/SMRYsv)
class Person {
    constructor(name) {
        this._name = name; // {1}
    }

    get name() {
        // {2}
        return this._name;
    }

    set name(value) {
        // {3}
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name); // {4}
lotrChar.name = 'Gandalf'; // {5}
console.log(lotrChar.name);
lotrChar._name = 'Sam'; // {6}
console.log(lotrChar.name);

// using symbols for private atributes
var _name = Symbol();
class Person2 {
    constructor(name) {
        this[_name] = name;
    }

    get name() {
        return this[_name];
    }

    set name(value) {
        this[_name] = value;
    }
}

let lotrChar2 = new Person2('Frodo');
console.log(lotrChar2.name);
lotrChar2.name = 'Gandalf';
console.log(lotrChar2.name);

console.log(Object.getOwnPropertySymbols(lotrChar2));
```

More:

```javascript
export default class Book {
    constructor(title) {
        this.title = title;
    }
    printTitle() {
        console.log(this.title);
    }
}

export const circleArea = (r) => 3.14 * r ** 2;

export const squareArea = (s) => s * s;

// export { circleArea, squareArea }; // {1}
export { circleArea as circle, squareArea as square };

const area = require('./lib/17-CalcArea');
const Book = require('./lib/17-Book');

console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book('some title');
myBook.printTitle();

/* Different way of importing the module  */
// import * as area from './17-CalcArea';
// import Book from './17-Book';

import * as area from './17-CalcArea.js'; // we need the .js to run this code in the browser
import Book from './17-Book.js';

console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book('some title');
myBook.printTitle();

//* ****** EcmaScript 2016 (ES7): Exponentiation operator (https://goo.gl/Z6dCFB)
let r = 2;
const area = 3.14 * r * r;
const area2 = 3.14 * Math.pow(r, 2);
const area3 = 3.14 * r ** 2;

console.log(area);
console.log(area2);
console.log(area3);
```
