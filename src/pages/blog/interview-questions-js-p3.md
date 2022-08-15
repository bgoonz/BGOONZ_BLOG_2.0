---
title: JS-Questions P3
subtitle: Javascript Interview Questions P3
date: '2021-09-11'
thumb_image_alt: big o
excerpt: What are the possible ways to create objects in JavaScript
seo:
    title: 'Javascript Interview'
    description: What are the possible ways to create objects in JavaScript
    robots: []
    extra:
        - name: 'og:image'
          value: images/js-code-spiral-num.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:title'
          value: JS-Interview
          keyName: name
          relativeUrl: false
        - name: 'twitter:description'
          value: What are the possible ways to create objects in JavaScript
          keyName: name
          relativeUrl: false
template: post
thumb_image: images/bigo.jpg
image: images/js-questions-n-answers.png
---

#### 45. What is the output of below code

---





---


```js



function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = new myGenFunc();
c ole.log(myGenObj.next().value);

```

-  1
- 2: undefined
- 3: SyntaxError
- 4: TypeError

<details>
<summary>Answer</summary>

<p>


##### Answer: 4
Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"
</p>
</details>

---

#### 46. What is the output of below code

---





---


```js



function* yieldAndReturn() {
    yield 1;
    return 2;
    yield 3;
}
var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
c ole.log(myGenObj.next());

```

-  { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details>
<summary>Answer</summary>

<p>


##### Answer: 1
A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: `{value: undefined, done: true}`.
</p>
</details>

---

#### 47. What is the output of below code


---


```js

const myGenerator = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
for (const value of myGenerator) {
    console.log(value);
    break;
}
for (const value of myGenerator) {
    console.log(value);
}
```
-  1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1

<details>
<summary>Answer</summary>

<p>


##### Answer: 4
The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.
</p>
</details>

---

#### 48. What is the output of below code


---


```js

const num = 0o38;
c ole.log(num);

```

- 1: SyntaxError
- 2: 38

<details>
<summary>Answer</summary>

<p>


##### Answer: 1
If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.
</p>
</details>

---

#### 49. What is the output of below code


---


```js

const squareObj = new Square(10);
console.log(squareObj.area);
class Square {
    constructor(length) {
        this.length = length;
    }
    get area() {
        return this.length * this.length;
    }
    set area(value) {
        this.area = value;
    }
}
```
- 1: 100
- 2: ReferenceError

<details>
<summary>Answer</summary>

<p>


##### Answer: 2
Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".
**Note:** Class expressions also applies to the same hoisting restrictions of class declarations.
</p>
</details>

---

#### 50. What is the output of below code

---





---


```js



function Person() {}
Person.prototype.walk = function () {
    return this;
};
Person.run = function () {
    return this;
};
let user = new Person();
let walk = user.walk;
console.log(walk());
let run = Person.run;
c ole.log(run());

```

-  undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window

<details>
<summary>Answer</summary>

<p>


##### Answer: 4
When a regular or prototype method is called without a value for **this**, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial `this` value is undefined so both methods return window objects.
</p>
</details>

---

#### 51. What is the output of below code


---


```js

class Vehicle {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} vehicle started`);
    }
}
class Car extends Vehicle {
    start() {
        console.log(`${this.name} car started`);
        super.start();
    }
}
const car = new Car('BMW');
c ole.log(car.start());

```

-  SyntaxError
- 2: BMW vehicle started, BMW car started
- 3: BMW car started, BMW vehicle started
- 4: BMW car started, BMW car started

<details>
<summary>Answer</summary>

<p>


##### Answer: 3
The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.
</p>
</details>

---

#### 52. What is the output of below code


---


```js

const USER = { age: 30 };
USER.age = 25;
c ole.log(USER.age);

```

-  30
- 2: 25
- 3: Uncaught TypeError
- 4: SyntaxError

<details>
<summary>Answer</summary>

<p>


##### Answer: 2
Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.
</p>
</details>

---

#### 53. What is the output of below code


---


```js

c ole.log('🙂' === '🙂');

```

- 1: false
- 2: true

<details>
<summary>Answer</summary>

<p>


##### Answer: 2
Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.
</p>
</details>

---

#### 54. What is the output of below code?


---


```js

c ole.log(typeof typeof typeof true);

```

-  string
- 2: boolean
- 3: NaN
- 4: number

<details>
<summary>Answer</summary>

<p>


##### Answer: 1
The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.
</p>
</details>

---

#### 55. What is the output of below code?


---


```js

let zero = new Number(0);
if (zero) {
    console.log('If');
} else {
    console.log('Else');
}

```


-  If
- 2: Else
- 3: NaN
- 4: SyntaxError

<details>
<summary>Answer</summary>

<p>


##### Answer: 1
1. The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
2. Objects are always truthy in if block
Hence the above code block always goes to if section.
</p>
</details>

---

#### 55. What is the output of below code in non strict mode?


---


```js

let msg = 'Good morning!!';
msg.name = 'John';
c ole.log(msg.name);

```

-  ""
- 2: Error
- 3: John
- 4: Undefined

<details>
<summary>Answer</summary>

<p>


##### Answer: 4
It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.
</p>
</details>

---

#### 56. What is the output of below code?


---


```js

let count = 10;
(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
} ;

```

-  11, 10
- 2: 11, 11
- 3: 10, 11
- 4: 10, 10

<details>
<summary>Answer</summary>

<p>


##### Answer: 1
11 and 10 is logged to the console.
The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable `count` which overwrites the ourter `count` variable. So the first console.log displays value 11.
Whereas the second console.log logs 10 by capturing the count variable from outerscope.
</p>
</details>

---


---


```

