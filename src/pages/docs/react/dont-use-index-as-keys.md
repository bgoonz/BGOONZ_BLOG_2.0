---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
## Lorem ipsum

Index as a key is an anti-pattern
Robin Pokorny
Robin Pokorny

Oct 12, 2015·4 min read






So many times I have seen developers use the index of an item as its key when they render a list.
todos.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}
It looks elegant and it does get rid of the warning (which was the ‘real’ issue, right?). What is the danger here?
It may break your application and display wrong data!
Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

Stephen describes the problem he run into on egghead.io
To demonstrate the potential danger I created a simple example (with source).

Screenshot of the example showing the danger of using the index as key.
It turns out, when nothing is passed React uses the index as key because it is the best guess at the moment. Moreover, it will warn you that it is suboptimal (it says that in a bit confusing words, yes). If you provide it by yourself React just thinks that you know what you are doing which — remember the example — can lead to unpredictable results.
Better
Each such item should have a permanent and unique property. Ideally, it should be assigned when the item is created. Of course, I am speaking about an id. Then we can use it the following way:
{
  todos.map((todo) => (
    <Todo {...todo} key={todo.id} />
  ));
}
Note: First look at the existing properties of the items. It is possible they already have something that can be used as an id.
One way to do so it to just move the numbering one step up in the abstraction. Using a global index makes sure any two items would have different ids.
let todoCounter = 1;
const createNewTodo = (text) => ({
  completed: false,
  id: todoCounter++,
  text
}
Much better
A production solution should use a more robust approach that would handle a distributed creation of items. For such, I recommend nanoid. It quickly generates short non-sequential url-friendly unique ids. The code could look like the following:
import { nanoid } from 'nanoid';
const createNewTodo = (text) => ({
  completed: false,
  id: nanoid(),
  text
}
TL;DR: Generate a unique id for every item and use it as key when rendering the list.
Update: Exception from the rule
Many people asked if they always, always have to generate ids. Others have suggested use cases when using the index as a key seems justifiable.
It is true that sometimes generating new ids is redundant and may be avoided. For example translation of license terms or list of contributors.
To help you decide, I put together three conditions which these examples have in common:
the list and items are static–they are not computed and do not change;
the items in the list have no ids;
the list is never reordered or filtered.
When all of them are met, you may safely use the index as a key.
Update 2: React, Preact, and *react
Although in this article I write about React, the problem is not exclusive to it. In similar libraries, like Preact, the danger is present, too. However, the effects can be different.
See the following StackOverflow question, where the last element disappears. Also please note the explanation in the answers provided by the creator of Preact, 
Jason Miller
.
Wrong components rendered by Preact
This is a classic issue that is totally underserved by Preact's documentation, so I'd like to personally apologize for…
stackoverflow.com

Update 3: Nano ID
Previously this guide recommended shortid. This ID generator was deprecated, so I replaced its use with Nano ID.
References and related articles
Dynamic Children and Keyed Fragments in React Docs
Explanation from Paul O’Shannessy
The importance of component keys in React.js
React.js and Dynamic Children — Why the Keys are Important
React animations for a single component, section The key is using key
Why you need keys for collections in React by 
Paul Gray