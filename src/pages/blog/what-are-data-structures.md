---
title: What are data structures
template: post
subtitle: Data structures, at a high level, are techniques for storing and
  organizing data that make it easier to modify, navigate, and access. Data
  structures determine how data is collected, the functions we can use to access
  it, and the relationships between data.
excerpt: Data structures, at a high level, are techniques for storing and
  organizing data that make it easier to modify, navigate, and access. Data
  structures determine how data is collected, the functions we can use to access
  it, and the relationships between data.
date: 2022-06-07T06:06:13.244Z
image: https://i.imgur.com/zaS4mm7.png
thumb_image: https://i.imgur.com/zaS4mm7.png
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/ds-algo.yaml
tags:
  - src/data/tags/data-structures-algorithms.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/data-structures-algorithms-resources.md
cmseditable: true
---
<!--StartFragment-->

## What are data structures

Data structures, at a high level, are techniques for storing and organizing data that make it easier to modify, navigate, and access. Data structures determine how data is collected, the functions we can use to access it, and the relationships between data.

Data structures are used in almost all areas of computer science and programming, from operating systems to basic vanilla code to artificial intelligence.

Data structures enable us to:

* Manage and utilize large datasets
* Search for particular data from a database
* Design algorithms that are tailored towards particular programs
* Handle multiple requests from users at once
* Simplify and speed up data processing

Data structures are vital for efficient, real-world problem solving. After all, the way we organize data has a lot of impact on performance and useability. In fact, most top companies require a strong understanding of data structures.

> Anyone looking to crack the coding interview will need to master data structures.

JavaScript has primitive and non-primitive data structures. Primitive data structures and data types are native to the programming language. These include boolean, null, number, string, etc.

Non-primitive data structures are not defined by the programming language but rather by the programmer. These include linear data structures, static data structures, and dynamic data structures, like queue and linked lists.

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#1-array)1. Array

The most basic of all data structures, an array stores data in memory for later use. Each array has a fixed number of cells decided on its creation, and each cell has a corresponding numeric index used to select its data. Whenever you'd like to use the array, all you need are the desired indices, and you can access any of the data within.

![alt-text](https://camo.githubusercontent.com/ab40ae120edb6f03676fd5bd971feb1f59801ee43d90464c5f3c0ac7f5dc4c25/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f35313633353033373435373631323830)

Advantages

* Simple to create and use.
* Foundational building block for complex data structures

Disadvantages

* Fixed size
* Expensive to insert/delete or resequence values
* Inefficient to sort

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications)Applications

* Basic spreadsheets
* Within complex structures such as hash tables

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#2-queues)2. Queues

Queues are conceptually similar to stacks; both are sequential structures, but queues process elements in the order they were entered rather than the most recent element.

As a result, queues can be thought of as a FIFO (First In, First Out) version of stacks. These are helpful as a buffer for requests, storing each request in the order it was received until it can be processed.

![alt-text](https://camo.githubusercontent.com/0e19efa8b7251690191848de4d8538c36f7619aa1a69b46a306b16b19274edb0/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34363038323536343133353332313630)

For a visual, consider a single-lane tunnel: the first car to enter is the first car to exit. If other cars should wish to exit, but the first stops, all cars will have to wait for the first to exit before they can proceed.

Advantages

* Dynamic size
* Orders data in the order it was received
* Low runtime

Disadvantages

* Can only retrieve the oldest element

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications-1)Applications

* Effective as a buffer when receiving frequent data
* Convenient way to store order-sensitive data such as stored voicemails
* Ensures the oldest data is processed first

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#3-linked-list)3. Linked List

Linked lists are a data structure which, unlike the previous three, does not use physical placement of data in memory. This means that, rather than indexes or positions, linked lists use a referencing system: elements are stored in nodes that contain a pointer to the next node, repeating until all nodes are linked.

This system allows efficient insertion and removal of items without the need for reorganization.

![alt-text](https://camo.githubusercontent.com/c5b4f3b037de92da7118b3bbf05e9485a28507729cf9d9cffc2c17f37189971f/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34353336323436353035333038313630)

Advantages

* Efficient insertion and removal of new elements
* Less complex than restructuring an array

Disadvantages

* Uses more memory than arrays
* Inefficient to retrieve a specific element
* Inefficient to traverse the list backward

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications-2)Applications

* Best used when data must be added and removed in quick succession from unknown locations

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#4-trees)4. Trees

Trees are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, nodes contain both elements of data and pointers marking its relation to immediate nodes.

Each tree has a "root" node, off of which all other nodes branch. The root contains references to all elements directly below it, which are known as its "child nodes". This continues, with each child node, branching off into more child nodes.

Nodes with linked child nodes are called internal nodes while those without child nodes are external nodes. A common type of tree is the "binary search tree" which is used to easily search stored data.

These search operations are highly efficient, as its search duration is dependent not on the number of nodes but on the number of levels down the tree.

![alt-text](https://camo.githubusercontent.com/82cd3953e721f75e55b74c5854d64d3de002098592eba6338aa152f3ad1b4cc6/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34383630343534383739383837333630)

This type of tree is defined by four strict rules:

1. The left subtree contains only nodes with elements lesser than the root.
2. The right subtree contains only nodes with elements greater than the root.
3. Left and right subtrees must also be a binary search tree. They must follow the above rules with the "root" of their tree.
4. There can be no duplicate nodes, i.e. no two nodes can have the same value.

Advantages

* Ideal for storing hierarchical relationships
* Dynamic size
* Quick at insert and delete operations
* In a binary search tree, inserted nodes are sequenced immediately.
* Binary search trees are efficient at searches; length is only O(height)O(height).

Disadvantages

* Slow to rearrange nodes
* Child nodes hold no information about their parent node
* Binary search trees are not as fast as the more complicated hash table
* Binary search trees can degenerate into linear search (scanning all elements) if not implemented with balanced subtrees.

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications-3)Applications

* Storing hierarchical data such as a file location.
* Binary search trees are excellent for tasks needing searching or ordering of data.

> *Enjoying the article? Scroll down to [sign up](https://www.educative.io/blog/blog-newsletter-annoucement) for our free, bi-monthly newsletter.*

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#5-graphs)5. Graphs

Graphs are a relation-based data structure helpful for storing web-like relationships. Each node, or vertex, as they're called in graphs, has a title (A, B, C, etc.), a value contained within, and a list of links (called edges) it has with other vertices.

![alt-text](https://camo.githubusercontent.com/615c0612c32e8d319d2c79e596885e4aceb6ce7dc64ac235ede92637fac589f9/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f34393132363931303737343437363830)

In the above example, each circle is a vertex, and each line is an edge. If produced in writing, this structure would look like:

*V = {a, b, c, d}*

*E = {ab, ac, bc, cd}*

While hard to visualize at first, this structure is invaluable in conveying relationship charts in textual form, anything from circuitry to train networks.

Advantages

* Can quickly convey visuals over text
* Usable to model a diverse number of subjects so long as they contain a relational structure

Disadvantages

* At a higher level, text can be time-consuming to convert to an image.
* It can be difficult to see the existing edges or how many edges a given vertex has connected to it

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications-4)Applications

* Network representations
* Modeling social networks, such as Facebook.

## [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#6-hash-tables-map)6. Hash Tables (Map)

Hash tables are a complex data structure capable of storing large amounts of information and retrieving specific elements efficiently. This data structure relies on the concept of key/value pairs, where the "key" is a searched string and the "value" is the data paired with that key.

![alt-text](https://camo.githubusercontent.com/ed02956a5f707a017dc59966166c26835374fa0b48a9b6d0aaec06367d4dae10/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f706167652f363039343438343838333337343038302f696d6167652f646f776e6c6f61642f36373435393131313633303932393932) Each searched key is converted from its string form into a numerical value, called a hash, using a predefined hash function. This hash then points to a storage bucket -- a smaller subgroup within the table. It then searches the bucket for the originally entered key and returns the value associated with that key.

Advantages

* Key can be in any form, while array's indices must be integers
* Highly efficient search function
* Constant number of operations for each search
* Constant cost for insertion or deletion operations

Disadvantages

* Collisions: an error caused when two keys convert to the same hash code or two hash codes point to the same value.
* These errors can be common and often require an overhaul of the hash function.

### [](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Data-Structures#applications-5)Applications

* Database storage
* Address lookups by name

Each hash table can be very different, from the types of the keys and values, to the way their hash functions work. Due to these differences and the multi-layered aspects of a hash table, it is nearly impossible to encapsulate so generally.

<!--EndFragment-->