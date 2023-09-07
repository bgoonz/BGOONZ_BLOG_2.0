---
title: Typescript & React
template: post
subtitle: Using react with typescript
excerpt: Typescript is a superset of javascript
date: 2023-03-30T23:54:21.750Z
image: https://tech.pelmorex.com/wp-content/uploads/2020/06/ReactTS.png
thumb_image: https://tech.pelmorex.com/wp-content/uploads/2020/06/ReactTS.png
image_position: right
author: src/data/authors/bgoonz.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/deploy-react-app-to-heroku.md
cmseditable: true
---
<!--StartFragment-->

## React & Typescript:

###### [](https://github.com/bgoonz/React-Complete-Guide-Course#typescript)[Typescript](https://www.typescriptlang.org/)

**Typescript is a superset of javascript**

> Typescript adds static typing to javascript

* Javascript is a dynamically typed language, this means a javascript function does not expect a certain type for arguments to it's parameters...
* For Example:

```typescript
function add(a, b) {
  return a + b;
}
const result = add(2, 5);
console.log(result);
```

* here javascript knows that 2 and 5 are of type number but it doesn't know what type a and b are... so it's up to the developer to make sure that the function is called with the correct arguments to it's parameters.

```typescript
function add(a, b) {
  return a + b;
}
const result = add(2, 5);
const result2 = add("2", "5");
console.log(result);
console.log(result2);
```

* Here where we add the strings 2 and 5 we get the unexpected behavior of 25 because it concatenates the strings instead of adding them as numbers.
* Typescript can not run directly in the browser... we need to compile it to javascript first.
* To compile a specific typescript file without a typescript config file we can use the following command:

```shell
npx tsc <filename.ts>
```

* Default type assumed for a variable is `any` which means that the variable can be of any type.

```typescript
//Primatives (number, string, boolean, null, undefined, symbol)
//References(Objects, Arrays, Functions)
// Primatives
let age: number;
age = 12;
let userName: string;
userName = "Bryan";
let isInstructor: boolean;
isInstructor = true;
// References
let hobbies: string[];
hobbies = ["Sports", "Cooking"];
let person: {
  name: string;
  age: number;
};
person = {
  name: "Bryan",
  age: 27,
};
//People is an array of objects of the person type description
let people: {
  name: string;
  age: number;
}[];
//Type Alias
type Person = {
  name: string;
  age: number;
};
//this is an array of objects of the person type description
let People: Person[];
people = [
  {
    name: "Bryan",
    age: 27,
  },
];
//Type inference
let course = "React - The Complete Guide";
//course = 12345; //Error
//Union Types
let courseUnion: string | number = "React - The Complete Guide";
courseUnion = 12345;
//Union of a string or an array of strings
let courseUnion2: string | string[] = "React - The Complete Guide";
courseUnion2 = ["React - The Complete Guide", "Angular - The Complete Guide"];
//Functions & Types
function addNumbers(a: number, b: number): number {
  return a + b;
}
function printOutput(value: any) {
  console.log(value);
}
printOutput(add(5, 2));
//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']
//the problem with the above is that it is not type safe... the following would not throw an error
//Can't use split on a number
// console.log(updatedArray[0].split("")); // ['-', '1']
//This tells typescript that the type of the elements in the array and the value that should be added to it must be of the same type:
//array: T[], value: T
```

**Type Infrenece** *Typescript can infer the type of a variable based on the value assigned to it*

```typescript
//Type inference
let course = "React - The Complete Guide";
//course = 12345; //Error
```

**Union Types** *Typescript allows us to define a variable as a union of types*

```typescript
//Union Types
let courseUnion: string | number = "React - The Complete Guide";
courseUnion = 12345;
```

**Generics** *Generics allow us to create reusable components that can work with a variety of types*

```typescript
//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
```

Generic Types ("Generics") can be tricky to wrap your head around. But indeed, we are working with them all the time - one of the most prominent examples is an array. Consider this example array:

1. let numbers = \[1, 2, 3]; Here, the type is inferred, but if we would assign it explicitly, we could do it like this:
2. let numbers: number\[] = \[1, 2, 3]; `number[]` is the TypeScript notation for saying "this is an array of numbers". But actually, `number[]` is just syntactic sugar! The actual type is `Array`. ALL arrays are of the `Array` type. BUT: Since an array type really only makes sense if we also describe the type of items in the array, `Array` actually is a generic type. You could also write the above example liks this:
3. let numbers: Array = \[1, 2, 3]; Here we have the angle brackets (`<>`) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (`T` in the previous lecture). Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:
4. let numbers = \[1, 2, 3]; But if we want to explicitly set a type, we could do it like this:
5. let numbers: Array = \[1, 2, 3]; Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:
6. let numbers: number\[] = \[1, 2, 3]; If we take the example from the previous lecture, we could've also set the concrete type for our placeholder `T` explicitly:
7. const stringArray = insertAtBeginning(\['a', 'b', 'c'], 'd'); So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section! **Creating a React Typescript Project** *We can create a typescript project using the create-react-app command with the --template typescript flag*

```shell
npx create-react-app my-app --template typescript
```

###### [](https://github.com/bgoonz/React-Complete-Guide-Course#prop-types-in-react)Prop Types in React

```typescript
import React from "react";
const Todos: React.FC = (props) => {
  return <ul>{}</ul>;
};
export default Todos;
```

**React.FC** is a type that is a generic type that takes in a generic type argument. This generic type argument is the type of props that the component will receive. It makes it clear that Todos is a function that is a *React Function Component* that takes in a generic type argument of type *object*. **Three ways to create a data model with typescript**

* Interface
* type
* class **using classes**

```typescript
class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}
export default Todo;
```

> In Javascript it would look like this:

```typescript
class Todo {
  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}
export default Todo;
```

<!--EndFragment-->