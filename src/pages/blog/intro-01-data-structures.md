---
title: Intro-01-Data Structures
template: post
subtitle: a visual guide
excerpt: The most basic of all data structures, an array s
date: 2022-04-19T05:30:39.001Z
image: images/https://camo.githubusercontent.com/ab40ae120edb6f03676fd5bd971feb1f59801ee43d90464c5f3c0ac7f5dc4c25/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f35313633353033373435373631323830
thumb_image: images/https://camo.githubusercontent.com/ab40ae120edb6f03676fd5bd971feb1f59801ee43d90464c5f3c0ac7f5dc4c25/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f35313633353033373435373631323830
image_position: top
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/ds.yaml
tags:
  - src/data/tags/ds-algo.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/data-structures-algorithms-resources.md
cmseditable: true
---

<!--StartFragment-->

### 1. Array

The most basic of all data structures, an array stores data in memory for later use. Each array has a fixed number of cells decided on its creation, and each cell has a corresponding numeric index used to select its data. Whenever you’d like to use the array, all you need are the desired indices, and you can access any of the data within.

[![](https://camo.githubusercontent.com/ab40ae120edb6f03676fd5bd971feb1f59801ee43d90464c5f3c0ac7f5dc4c25/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f35313633353033373435373631323830)](https://camo.githubusercontent.com/ab40ae120edb6f03676fd5bd971feb1f59801ee43d90464c5f3c0ac7f5dc4c25/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f35313633353033373435373631323830)

Advantages

- Simple to create and use.
- Foundational building block for complex data structures

Disadvantages

- Fixed size
- Expensive to insert/delete or resequence values
- Inefficient to sort

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications)Applications

- Basic spreadsheets
- Within complex structures such as hash tables

\
\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#2-queues)2. Queues

Queues are conceptually similar to stacks; both are sequential structures, but queues process elements in the order they were entered rather than the most recent element.

As a result, queues can be thought of as a FIFO (First In, First Out) version of stacks. These are helpful as a buffer for requests, storing each request in the order it was received until it can be processed.

[![](https://camo.githubusercontent.com/0e19efa8b7251690191848de4d8538c36f7619aa1a69b46a306b16b19274edb0/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34363038323536343133353332313630)](https://camo.githubusercontent.com/0e19efa8b7251690191848de4d8538c36f7619aa1a69b46a306b16b19274edb0/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34363038323536343133353332313630)

For a visual, consider a single-lane tunnel: the first car to enter is the first car to exit. If other cars should wish to exit, but the first stops, all cars will have to wait for the first to exit before they can proceed.

Advantages

- Dynamic size
- Orders data in the order it was received
- Low runtime

Disadvantages

- Can only retrieve the oldest element

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications-1)Applications

- Effective as a buffer when receiving frequent data
- Convenient way to store order-sensitive data such as stored voicemails
- Ensures the oldest data is processed first

\
\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#3-linked-list)3. Linked List

Linked lists are a data structure which, unlike the previous three, does not use physical placement of data in memory. This means that, rather than indexes or positions, linked lists use a referencing system: elements are stored in nodes that contain a pointer to the next node, repeating until all nodes are linked.

This system allows efficient insertion and removal of items without the need for reorganization.

[![](https://camo.githubusercontent.com/c5b4f3b037de92da7118b3bbf05e9485a28507729cf9d9cffc2c17f37189971f/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34353336323436353035333038313630)](https://camo.githubusercontent.com/c5b4f3b037de92da7118b3bbf05e9485a28507729cf9d9cffc2c17f37189971f/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34353336323436353035333038313630)

Advantages

- Efficient insertion and removal of new elements
- Less complex than restructuring an array

Disadvantages

- Uses more memory than arrays
- Inefficient to retrieve a specific element
- Inefficient to traverse the list backward

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications-2)Applications

- Best used when data must be added and removed in quick succession from unknown locations

\
\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#4-trees)4. Trees

Trees are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, nodes contain both elements of data and pointers marking its relation to immediate nodes.

Each tree has a “root” node, off of which all other nodes branch. The root contains references to all elements directly below it, which are known as its “child nodes”. This continues, with each child node, branching off into more child nodes.

Nodes with linked child nodes are called internal nodes while those without child nodes are external nodes. A common type of tree is the “binary search tree” which is used to easily search stored data.

These search operations are highly efficient, as its search duration is dependent not on the number of nodes but on the number of levels down the tree.

[![](https://camo.githubusercontent.com/82cd3953e721f75e55b74c5854d64d3de002098592eba6338aa152f3ad1b4cc6/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34383630343534383739383837333630)](https://camo.githubusercontent.com/82cd3953e721f75e55b74c5854d64d3de002098592eba6338aa152f3ad1b4cc6/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34383630343534383739383837333630)

This type of tree is defined by four strict rules:

1. The left subtree contains only nodes with elements lesser than the root.
2. The right subtree contains only nodes with elements greater than the root.
3. Left and right subtrees must also be a binary search tree. They must follow the above rules with the “root” of their tree.
4. There can be no duplicate nodes, i.e. no two nodes can have the same value.

Advantages

- Ideal for storing hierarchical relationships
- Dynamic size
- Quick at insert and delete operations
- In a binary search tree, inserted nodes are sequenced immediately.
- Binary search trees are efficient at searches; length is only O(height)O(height).

Disadvantages

- Slow to rearrange nodes
- Child nodes hold no information about their parent node
- Binary search trees are not as fast as the more complicated hash table
- Binary search trees can degenerate into linear search (scanning all elements) if not implemented with balanced subtrees.

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications-3)Applications

- Storing hierarchical data such as a file location.
- Binary search trees are excellent for tasks needing searching or ordering of data.

> **\*Enjoying the article?** Scroll down to\* *[sign up](https://www.educative.io/blog/blog-newsletter-annoucement)* *for our free, bi-monthly newsletter.*

\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#5-graphs)5. Graphs

Graphs are a relation-based data structure helpful for storing web-like relationships. Each node, or vertex, as they’re called in graphs, has a title (A, B, C, etc.), a value contained within, and a list of links (called edges) it has with other vertices.

[![](https://camo.githubusercontent.com/615c0612c32e8d319d2c79e596885e4aceb6ce7dc64ac235ede92637fac589f9/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34393132363931303737343437363830)](https://camo.githubusercontent.com/615c0612c32e8d319d2c79e596885e4aceb6ce7dc64ac235ede92637fac589f9/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34393132363931303737343437363830)

In the above example, each circle is a vertex, and each line is an edge. If produced in writing, this structure would look like:

_V = {a, b, c, d}_

_E = {ab, ac, bc, cd}_

While hard to visualize at first, this structure is invaluable in conveying relationship charts in textual form, anything from circuitry to train networks.

Advantages

- Can quickly convey visuals over text
- Usable to model a diverse number of subjects so long as they contain a relational structure

Disadvantages

- At a higher level, text can be time-consuming to convert to an image.
- It can be difficult to see the existing edges or how many edges a given vertex has connected to it

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications-4)Applications

- Network representations
- Modeling social networks, such as Facebook.

\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#6-hash-tables-map)6. Hash Tables (Map)

Hash tables are a complex data structure capable of storing large amounts of information and retrieving specific elements efficiently. This data structure relies on the concept of key/value pairs, where the “key” is a searched string and the “value” is the data paired with that key.

[![](https://camo.githubusercontent.com/ed02956a5f707a017dc59966166c26835374fa0b48a9b6d0aaec06367d4dae10/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36373435393131313633303932393932)](https://camo.githubusercontent.com/ed02956a5f707a017dc59966166c26835374fa0b48a9b6d0aaec06367d4dae10/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36373435393131313633303932393932) Each searched key is converted from its string form into a numerical value, called a hash, using a predefined hash function. This hash then points to a storage bucket – a smaller subgroup within the table. It then searches the bucket for the originally entered key and returns the value associated with that key.

Advantages

- Key can be in any form, while array’s indices must be integers
- Highly efficient search function
- Constant number of operations for each search
- Constant cost for insertion or deletion operations

Disadvantages

- Collisions: an error caused when two keys convert to the same hash code or two hash codes point to the same value.
- These errors can be common and often require an overhaul of the hash function.

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#applications-5)Applications

- Database storage
- Address lookups by name

Each hash table can be very different, from the types of the keys and values, to the way their hash functions work. Due to these differences and the multi-layered aspects of a hash table, it is nearly impossible to encapsulate so generally.

\
\

### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#data-structure-interview-questions)Data structure interview questions

For many developers and programmers, data structures are most important for [cracking Javascript coding interviews](https://www.educative.io/blog/acing-the-javascript-interview-top-questions-explained). Questions and problems on data structures are fundamental to modern-day coding interviews. In fact, they have a lot to say over your hireability and entry-level rate as a candidate.

Today, we will be going over seven common coding interview questions for JavaScript data structures, one for each of the data structures we discussed above. Each will also discuss its time complexity based on the [BigO notation](https://www.educative.io/blog/a-big-o-primer-for-beginning-devs) theory.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#array-remove-all-even-integers-from-an-array)Array: Remove all even integers from an array

**Problem statement:** Implement a function `removeEven(arr)`, which takes an array arr in its input and removes all the even elements from a given array.

**Input:** An array of random integers

```

```

**Output:** an array containing only odd integers

```

```

There are two ways you could solve this coding problem in an interview. Let’s discuss each.

\

**Solution #1: Doing it “by hand”**

123456789function removeEven(arr) { var odds = \[] for (let number of arr) { if (number % 2 != 0) // Check if the item in the list is NOT even ('%' is the modulus symbol!) odds.push(number) //If it isn't even append it to the empty list } return odds // Return the new list}console.log(removeEven(\[3, 2, 41, 3, 34]))Run

This approach starts with the first element of the array. If that current element is not even, it pushes this element into a new array. If it is even, it will move to the next element, repeating until it reaches the end of the array. In regards to time complexity, since the entire array has to be iterated over, this solution is in *O(n)O(n).*

\

**Solution #2: Using filter() and lambda function**

1234function removeEven(arr) { return arr.filter((v => (v % 2) != 0))}console.log(removeEven(\[3,2,41,3,34]))

This solution also begins with the first element and checks if it is even. If it is even, it filters out this element. If not, skips to the next element, repeating this process until it reaches the end of the array.

The filter function uses lambda or arrow functions, which use shorter, simpler syntax. The filter filters out the element for which the lambda function returns false. The time complexity of this is the same as the time complexity of the previous solution.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#stack-check-for-balanced-parentheses-using-a-stack)Stack: Check for balanced parentheses using a stack

**Problem statement:** Implement the `isBalanced()` function to take a string containing only curly `{}`, square `[]`, and round `()` parentheses. The function should tell us if all the parentheses in the string are balanced. This means that every opening parenthesis will have a closing one. For example, `{[]}` is balanced, but `{[}]` is not.

**Input:** A string consisting solely of `(`, `)`, `{`, `}`, `[` and `]`

```

```

**Output:** Returns `False` if the expression doesn’t have balanced parentheses. If it does, the function returns `True`.

```

```

To solve this problem, we can simply use a stack of characters. Look below at the code to see how it works.

index.jsStack.js12345678910111213141516171819202122232425262728293031"use strict";module.exports = class Stack { constructor() { this.items = \[]; this.top = null; } getTop() { if (this.items.length == 0) return null; return this.top; } isEmpty() { return this.items.length == 0; } size() { return this.items.length; } push(element) { this.items.push(element); this.top = element; } pop() { if (this.items.length != 0) { if (this.items.length == 1) { this.top = null; return this.items.pop();Run

This process will iterate over the string one character at a time. We can determine that the string is unbalanced based on two factors:

1. The stack is empty.
2. The top element in the stack is not the right type.

If either of these conditions is true, we return `False`. If the parenthesis is an opening parenthesis, it is pushed into the stack. If by the end all are balanced, the stack will be empty. If it is not empty, we return `False`. Since we traverse the string exp only once, the time complexity is *O(n)*.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#queue-generate-binary-numbers-from-1-to-n)Queue: Generate Binary Numbers from 1 to n

**Problem statement:** Implement a function `findBin(n)`, which will generate binary numbers from `1` to `n` in the form of a string using a queue.

**Input:** A positive integer n

```

```

**Output:** Returns binary numbers in the form of strings from `1` up to `n`

```

```

The easiest way to solve this problem is using a queue to generate new numbers from previous numbers. Let’s break that down.

index.jsQueue.js12345678910111213141516171819202122232425262728293031"use strict";module.exports = class Queue { constructor() { this.items = \[]; this.front = null; this.back = null; } isEmpty() { return this.items.length == 0; } getFront() { if (this.items.length != 0) { return this.items\[0]; } else return null; } size() { return this.items.length; } enqueue(element) { this.items.push(element); }Run

The key is to generate consecutive binary numbers by appending 0 and 1 to previous binary numbers. To clarify,

- 10 and 11 can be generated if 0 and 1 are appended to 1.
- 100 and 101 are generated if 0 and 1 are appended to 10.

Once we generate a binary number, it is then enqueued to a queue so that new binary numbers can be generated if we append 0 and 1 when that number will be enqueued.

Since a queue follows the *First-In First-Out* property, the enqueued binary numbers are dequeued so that the resulting array is mathematically correct.

Look at the code above. On line 7, `1` is enqueued. To generate the sequence of binary numbers, a number is dequeued and stored in the array `result`. On lines 11-12, we append `0` and `1` to produce the next numbers.

Those new numbers are also enqueued at lines 14-15. The queue will take integer values, so it converts the string to an integer as it is enqueued.

The time complexity of this solution is in *O(n)O(n)* since constant-time operations are executed for n times.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#linked-list-reverse-a-linked-list)Linked List: Reverse a linked list

**Problem statement:** Write the `reverse` function to take a singly linked list and reverse it in place.

**Input:** a singly linked list

```

```

**Output:** a reverse linked list

```

```

The easiest way to solve this problem is by using iterative pointer manipulation. Let’s take a look.

index.jsLinkedList.jsNode.js12345678910111213141516171819202122232425262728293031"use strict";const Node = require('./Node.js');module.exports = class LinkedList { constructor() { this.head = null; } //Insertion At Head insertAtHead(newData) { let tempNode = new Node(newData); tempNode.nextElement = this.head; this.head = tempNode; return this; //returning the updated list } isEmpty() { return (this.head == null); } //function to print the linked list printList() { if (this.isEmpty()) { console.log("Empty List"); return false; } else { let temp = this.head; while (temp != null) { process.stdout.write(String(temp.data)); process.stdout.write(" -> "); temp = temp.nextElement;Run

We use a loop to iterate through the input list. For a `current` node, its link with the `previous` node is reversed. then, `next` stores the next node in the list. Let’s break that down by line.

- Line 22- Store the `current` node’s `nextElement` in `next`
- Line 23 - Set `current` node’s `nextElement` to `previous`
- Line 24 - Make the `current` node the new `previous` for the next iteration
- Line 25 - Use `next` to go to the next node
- Line 29 - We reset the `head` pointer to point at the last node

Since the list is traversed only once, the algorithm runs in *O(n)*.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#tree-find-the-minimum-value-in-a-binary-search-tree)Tree: Find the Minimum Value in a Binary Search Tree

**Problem statement:** Use the `findMin(root)` function to find the minimum value in a Binary Search Tree.

**Input:** a root node for a binary search tree

```

```

**Output:** the smallest integer value from that binary search tree

```

```

Let’s look at an easy solution for this problem.

\

**Solution: Iterative `findMin( )`**

This solution begins by checking if the root is `null`. It returns `null` if so. It then moves to the left subtree and continues with each node’s left child until the left-most child is reached.

index.jsBinarySearchTree.jsNode.js12345678910111213141516171819202122232425262728293031"use strict";const Node = require('./Node.js');module.exports = class BinarySearchTree { constructor(rootValue) { this.root = new Node(rootValue); } insert(currentNode, newValue) { if (currentNode === null) { currentNode = new Node(newValue); } else if (newValue < currentNode.val) { currentNode.leftChild = this.insert(currentNode.leftChild, newValue); } else { currentNode.rightChild = this.insert(currentNode.rightChild, newValue); } return currentNode; } insertBST(newValue) { if(this.root==null){ this.root=new Node(newValue); return; } this.insert(this.root, newValue); } preOrderPrint(currentNode) { if (currentNode !== null) { console.log(currentNode.val); this.preOrderPrint(currentNode.leftChild);Run\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#graph-remove-edge)Graph: Remove Edge

**Problem statement:** Implement the removeEdge function to take a source and a destination as arguments. It should detect if an edge exists between them.

**Input:** A graph, a source, and a destination

[![]()](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md)[![widget](https://camo.githubusercontent.com/428156ffac3c84ccdc035827728a34648c3fb537f5967696fff27d5625f9fc18/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3630302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36353736313335363639323834383634)](https://camo.githubusercontent.com/428156ffac3c84ccdc035827728a34648c3fb537f5967696fff27d5625f9fc18/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3630302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36353736313335363639323834383634)[![widget](https://camo.githubusercontent.com/bab248d2d24b5387823fe7b0259e5ce89b5b38e322500cae5fe67b5a379dad90/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3330302c713d31302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36353736313335363639323834383634)](https://camo.githubusercontent.com/bab248d2d24b5387823fe7b0259e5ce89b5b38e322500cae5fe67b5a379dad90/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3330302c713d31302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36353736313335363639323834383634)

**Output:** A graph with the edge between the source and the destination removed.

```

```

[![]()](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md)[![widget](https://camo.githubusercontent.com/3c66578e7e5a92a7e8bbe6957356049a8d4206d6d9a91ed2fd6460c7b9fb8ff5/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3630302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36303338353930393834323930333034)](https://camo.githubusercontent.com/3c66578e7e5a92a7e8bbe6957356049a8d4206d6d9a91ed2fd6460c7b9fb8ff5/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3630302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36303338353930393834323930333034)[![widget](https://camo.githubusercontent.com/da5b513fd1a1678e0b6d6209a9673acb5555e3a7f863eb1580ff38d71f6bbfed/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3330302c713d31302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36303338353930393834323930333034)](https://camo.githubusercontent.com/da5b513fd1a1678e0b6d6209a9673acb5555e3a7f863eb1580ff38d71f6bbfed/68747470733a2f2f7777772e6564756361746976652e696f2f63646e2d6367692f696d6167652f663d6175746f2c6669743d636f6e7461696e2c773d3330302c713d31302f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36303338353930393834323930333034)

The solution to this problem is fairly simple: we use Indexing and deletion. Take a look

index.jsGraph.jsLinkedList.jsNode.js12345678910111213141516171819202122232425262728293031"use strict";const LinkedList = require('./LinkedList.js');const Node = require('./Node.js');module.exports = class Graph { constructor(vertices) { this.vertices = vertices; this.list = \[]; var it; for (it = 0; it < vertices; it++) { let temp = new LinkedList(); this.list.push(temp); } } addEdge(source, destination) { if (source < this.vertices && destination < this.vertices) this.list\[source].insertAtHead(destination); return this; } printGraph() { console.log(">>Adjacency List of Directed Graph<<"); var i; for (i = 0; i < this.list.length; i++) { process.stdout.write("|" + String(i) + "| => ");Run

Since our vertices are stored in an array, we can access the `source` linked list. We then call the `delete` function for linked lists. The time complexity for this solution is O(E) since we may have to traverse E edges.

\

#### [](https://github.com/bgoonz/INTERVIEW-PREP-COMPLETE/blob/master/useful-downloads.md#hash-table-convert-max-heap-to-min-heap)Hash Table: Convert Max-Heap to Min-Heap

**Problem statement:** Implement the function `convertMax(maxHeap)` to convert a binary max-heap into a binary min-heap. `maxHeap` should be an array in the `maxHeap` format, i.e the parent is greater than its children.

**Input:** a Max-Heap

```

```

**Output:** returns the converted array

```

```

To solve this problem, we must min heapify all parent nodes. Take a look.

123456789101112131415161718192021222324252627function minHeapify(heap, index) { var left = index \* 2; var right = (index \* 2) + 1; var smallest = index; if ((heap.length > left) && (heap\[smallest] > heap\[left])) { smallest = left } if ((heap.length > right) && (heap\[smallest] > heap\[right])) smallest = right if (smallest != index) { var tmp = heap\[smallest] heap\[smallest] = heap\[index] heap\[index] = tmp minHeapify(heap, smallest) } return heap;}function convertMax(maxHeap) { for (var i = Math.floor((maxHeap.length) / 2); i > -1; i--) maxHeap = minHeapify(maxHeap, i) return maxHeap}var maxHeap = \[9,4,7,1,-2,6,5]console.log(convertMax(maxHeap))Run

We consider `maxHeap` to be a regular array and reorder it to accurately represent a min-heap. You can see this done in the code above. The `convertMax()` function then restores the heap property on all nodes from the lowest parent node by calling the `minHeapify()` function. In regards to time complexity, this solution takes *O(nlog(n))O(nlog(n))* time.

<!--EndFragment-->
