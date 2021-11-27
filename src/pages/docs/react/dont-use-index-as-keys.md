---
title: Index as a key is an anti-pattern
weight: 0
excerpt: So many times I have seen developers use the index of an item as its key when they render a list.
seo:
  title: ''
  description: 'Let me explain, a _key_ is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the _key_ is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.'
  robots: []
  extra: []
template: docs
---
## > ## Excerpt
> 

---




](https://robinpokorny.medium.com/?source=post_page-----e0349aece318-----------------------------------)

So many times I have seen developers use the _index_ of an item as its _key_ when they render a list.

todos.map((todo, index) => (  
    <Todo {...todo} key={index} />  
  ));  
}

It looks elegant and it does get rid of the warning (which was the ‘real’ issue, right?). What is the danger here?

> It may break your application and display wrong data!

Let me explain, a _key_ is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the _key_ is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

![](https://miro.medium.com/max/27/1*9N62zUlyJcQet8kr7e_FVg.png?q=20)

![](https://miro.medium.com/max/630/1*9N62zUlyJcQet8kr7e_FVg.png)

Stephen describes the problem he run into on [egghead.io](https://egghead.io/forums/lesson-discussion/topics/break-up-components-into-smaller-pieces-using-functional-components#post-6310)

To demonstrate the potential danger I created [a simple example](https://jsbin.com/wohima/edit?output) ([with source](http://jsbin.com/wohima/edit?js,output)).

![](https://miro.medium.com/max/630/1*GFYGPdDFLYcLFzx-E-GEcw.jpeg)

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

One way to do so it to just move the numbering one step up in the abstraction. Using a global index makes sure any two items would have different _id_s.

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

1.  the list and items are static–they are not computed and do not change;
2.  the items in the list have no ids;
3.  the list is _never_ reordered or filtered.

When _all_ of them are met, you **may safely use the index as a key**.

## Update 2: React, Preact, and \*react

Although in this article I write about React, the problem is not exclusive to it. In similar libraries, like Preact, the danger is present, too. However, the effects can be different.

See the following StackOverflow question, where the last element disappears. Also please note the explanation in the answers provided by the creator of Preact,