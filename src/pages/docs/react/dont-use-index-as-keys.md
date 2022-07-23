---
title: Index as a key is an anti-pattern
weight: 0
excerpt: So many times I have seen developers use the index of an item as its key when they render a list.
seo:
    title: 'Lists and Keys'
    description: 'Let me explain, a _key_ is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the _key_ is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.'
    robots: []
    extra: []
template: docs
---


## > ## Excerpt

>

---

# Lists and Keys - React

> ## Excerpt
>
> A JavaScript library for building user interfaces

---

First, let's review how you transform lists in JavaScript.

Given the code below, we use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to take an array of `numbers` and double their values. We assign the new array returned by `map()` to the variable `doubled` and log it:

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);console.log(doubled);
```

This code logs `[2, 4, 6, 8, 10]` to the console.

In React, transforming arrays into lists of [elements](https://reactjs.org/docs/rendering-elements.html) is nearly identical.

### [](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)Rendering Multiple Components

You can build collections of elements and [include them in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) using curly braces `{}`.

Below, we loop through the `numbers` array using the JavaScript [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function. We return a `<li>` element for each item. Finally, we assign the resulting array of elements to `listItems`:

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>  <li>{number}</li>);
```

We include the entire `listItems` array inside a `<ul>` element, and [render it to the DOM](https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom):

```
ReactDOM.render(
  <ul>{listItems}</ul>,  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

This code displays a bullet list of numbers between 1 and 5.

### [](https://reactjs.org/docs/lists-and-keys.html#basic-list-component)Basic List Component

Usually you would render lists inside a [component](https://reactjs.org/docs/components-and-props.html).

We can refactor the previous example into a component that accepts an array of `numbers` and outputs a list of elements.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>    <li>{number}</li>  );  return (
    <ul>{listItems}</ul>  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,  document.getElementById('root')
);
```

When you run this code, you'll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. We'll discuss why it's important in the next section.

Let's assign a `key` to our list items inside `numbers.map()` and fix the missing key issue.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

## [](https://reactjs.org/docs/lists-and-keys.html#keys)Keys

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>    {number}
  </li>
);
```

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>    {todo.text}
  </li>
);
```

When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

```
const todoItems = todos.map((todo, index) =>
    <li key={index}>    {todo.text}
  </li>
);
```

We don't recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny's article for an [in-depth explanation on the negative impacts of using an index as a key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318). If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

Here is an [in-depth explanation about why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children) if you're interested in learning more.

Keys only make sense in the context of the surrounding array.

For example, if you [extract](https://reactjs.org/docs/components-and-props.html#extracting-components) a `ListItem` component, you should keep the key on the `<ListItem />` elements in the array rather than on the `<li>` element in the `ListItem` itself.

**Example: Incorrect Key Usage**

```
function ListItem(props) {
  const value = props.value;
  return (
        <li key={value.toString()}>      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
        <ListItem value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**Example: Correct Key Usage**

```
function ListItem(props) {
    return <li>{props.value}</li>;}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

A good rule of thumb is that elements inside the `map()` call need keys.

### [](https://reactjs.org/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings)Keys Must Only Be Unique Among Siblings

Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique. We can use the same keys when we produce two different arrays:

```
function Blog(props) {
  const sidebar = (    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>    <div key={post.id}>      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}      <hr />
      {content}    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

```
const content = posts.map((post) =>
  <Post
    key={post.id}    id={post.id}    title={post.title} />
);
```

With the example above, the `Post` component can read `props.id`, but not `props.key`.

### [](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)Embedding map() in JSX

In the examples above we declared a separate `listItems` variable and included it in JSX:

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>    <ListItem key={number.toString()}              value={number} />  );  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX allows [embedding any expression](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) in curly braces so we could inline the `map()` result:

```
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>        <ListItem key={number.toString()}                  value={number} />      )}    </ul>
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/BLvYrB?editors=0010)

Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the `map()` body is too nested, it might be a good time to [extract a component](https://reactjs.org/docs/components-and-props.html#extracting-components).

So many times I have seen developers use the _index_ of an item as its _key_ when they render a list.

todos.map((todo, index) => (  
 <Todo {...todo} key={index} />  
 ));  
}

It looks elegant and it does get rid of the warning (which was the ‘real' issue, right?). What is the danger here?

> It may break your application and display wrong data!

Let me explain, a _key_ is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the _key_ is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

![medium blog image](https://miro.medium.com/max/27/1*9N62zUlyJcQet8kr7e_FVg.png?q=20)

![medium blog image](https://miro.medium.com/max/630/1*9N62zUlyJcQet8kr7e_FVg.png)

Stephen describes the problem he run into on [egghead.io](https://egghead.io/forums/lesson-discussion/topics/break-up-components-into-smaller-pieces-using-functional-components#post-6310)

To demonstrate the potential danger I created [a simple example](https://jsbin.com/wohima/edit?output) ([with source](http://jsbin.com/wohima/edit?js,output)).

![medium blog image](https://miro.medium.com/max/630/1*GFYGPdDFLYcLFzx-E-GEcw.jpeg)

Screenshot of the example showing the danger of using the index as key.

It turns out, when nothing is passed React uses the _index_ as _key_ because it is the best guess at the moment. Moreover, it will warn you that it is suboptimal (it says that in a bit confusing words, yes). If you provide it by yourself React just thinks that you know what you are doing which — remember the example — can lead to unpredictable results.

## Better

Each such item should have a _permanent_ and _unique_ property. Ideally, it should be assigned when the item is created. Of course, I am speaking about an _id_. Then we can use it the following way:

{  
 todos.map((todo) => (  
 <Todo {...todo} key={todo.id} />  
 ));  
}

> **Note:** First look at the existing properties of the items. It is possible they already have something that can be used as an _id_.

One way to do so it to just move the numbering one step up in the abstraction. Using a global index makes sure any two items would have different \_id_s.

let todoCounter = 1;const createNewTodo = (text) => ({  
 completed: false,  
 id: todoCounter++,  
 text  
}

## Much better

A production solution should use a more robust approach that would handle a distributed creation of items. For such, I recommend [nanoid](https://github.com/ai/nanoid/). It quickly generates short non-sequential url-friendly unique ids. The code could look like the following:

import { nanoid } from 'nanoid';const createNewTodo = (text) => ({  
 completed: false,  
 id: nanoid(),  
 text  
}

> **TL;DR:** Generate a unique _id_ for every item and use it as _key_ when rendering the list.

## Update: Exception from the rule

Many people asked if they always, _always_ have to generate ids. Others have suggested use cases when using the index as a key seems justifiable.

It is true that sometimes generating new ids is redundant and may be avoided. For example translation of license terms or list of contributors.

To help you decide, I put together three conditions which these examples have in common:

1.  the list and items are static-they are not computed and do not change;
2.  the items in the list have no ids;
3.  the list is _never_ reordered or filtered.

When _all_ of them are met, you **may safely use the index as a key**.

## Update 2: React, Preact, and \*react

Although in this article I write about React, the problem is not exclusive to it. In similar libraries, like Preact, the danger is present, too. However, the effects can be different.

See the following StackOverflow question, where the last element disappears. Also please note the explanation in the answers provided by the creator of Preact,
