# Data Structures In Python

The idea behind big O notation

---

### Data Structures In Python

### The idea behind big O notation

**Big O notation is the language we use for talking about how long an algorithm takes to run**. It’s how we compare the efficiency of different approaches to a problem.

With big O notation we express the runtime in terms of

### how quickly it grows relative to the input, as the input gets arbitrarily large\_.

1.  <span id="4b38">**how quickly the runtime grows** — It’s hard to pin down the _exact runtime_ of an algorithm.</span>

-   <span id="6a4e">It depends on the speed of the processor,</span>
-   <span id="21a0">what else the computer is running, etc.</span>

So instead of talking about the runtime directly, we use big O notation to talk about _how quickly the runtime grows_.

1.  <span id="f7ef">**relative to the input** — If we were measuring our runtime directly,</span>

we could express our speed in seconds. Since we’re measuring _how quickly our runtime grows_, we need to express our speed in terms of…something else. With Big O notation, we use the size of the input, which we call “n.” So we can say things like the runtime grows “on the order of the size of the input” () or “on the order of the square of the size of the input” (). 3. **as the input gets arbitrarily large** —

Our algorithm may have steps that seem expensive when n is small but are eclipsed eventually by other steps as n gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as n gets very large. (If you know what an asymptote is, you might see why “big O analysis” is sometimes called “asymptotic analysis.”)hy “big O analysis” is sometimes called “asymptotic analysis.”)

###

#### Data Structures Reference

### Array

Stores things in order. Has quick lookups by index.

### Linked List

Also stores things in order. Faster insertions and deletions than arrays, but slower lookups (you have to “walk down” the whole list).

### Queue

Like the line outside a busy restaurant. “First come, first served.”

### Stack

Like a stack of dirty plates in the sink. The first one you take off the top is the last one you put down.

### Tree

Good for storing hierarchies. Each node can have “child” nodes.

### Binary Search Tree

Everything in the left subtree is smaller than the current node, everything in the right subtree is larger. lookups, but only if the tree is balanced!

### Binary Search Tree

### Graph

Good for storing networks, geography, social relationships, etc.

### Heap

A binary tree where the smallest value is always at the top. Use it to implement a priority queue.

\[A binary heap is a binary tree where the nodes are organized to so that the smallest value is always at the top.\]

### Adjacency list

A list where the index represents the node and the value at that index is a list of the node’s neighbors:

graph = \[ \[1\], \[0, 2, 3\], \[1, 3\], \[1, 2\], \]

Since node 3 has edges to nodes 1 and 2, graph\[3\] has the adjacency list \[1, 2\].

We could also use <a href="https://www.interviewcake.com/concept/hash-map" class="markup--anchor markup--p-anchor">a dictionary</a> where the keys represent the node and the values are the lists of neighbors.

graph = { 0: \[1\], 1: \[0, 2, 3\], 2: \[1, 3\], 3: \[1, 2\], }

This would be useful if the nodes were represented by strings, objects, or otherwise didn’t map cleanly to list indices.

### Adjacency matrix

A matrix of 0s and 1s indicating whether node x connects to node y (0 means no, 1 means yes).

graph = \[ \[0, 1, 0, 0\], \[1, 0, 1, 1\], \[0, 1, 0, 1\], \[0, 1, 1, 0\], \]

Since node 3 has edges to nodes 1 and 2, graph\[3\]\[1\] and graph\[3\]\[2\] have value 1.

a = LinkedListNode(5) b = LinkedListNode(1) c = LinkedListNode(9) a.next = b b.next = c

---

### Arrays

Ok, so we know how to store individual numbers. Let’s talk about storing _several numbers_.

That’s right, things are starting to _heat up_.

Suppose we wanted to keep a count of how many bottles of kombucha we drink every day.

Let’s store each day’s kombucha count in an 8-bit, fixed-width, unsigned integer. That should be plenty — we’re not likely to get through more than 256 (2⁸) bottles in a _single day_, right?

And let’s store the kombucha counts right next to each other in RAM, starting at memory address 0:

Bam. That’s an **array**. RAM is _basically_ an array already.

Just like with RAM, the elements of an array are numbered. We call that number the **index** of the array element (plural: indices). In _this_ example, each array element’s index is the same as its address in RAM.

But that’s not usually true. Suppose another program like Spotify had already stored some information at memory address 2:

We’d have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3, and index 1 would be at memory address 4, etc.:

Suppose we wanted to get the kombucha count at index 4 in our array. How do we figure out what _address in memory_ to go to? Simple math:

Take the array’s starting address (3), add the index we’re looking for (4), and that’s the address of the item we’re looking for. 3 + 4 = 7. In general, for getting the nth item in our array:

\\text{address of nth item in array} = \\text{address of array start} + n

This works out nicely because the size of the addressed memory slots and the size of each kombucha count are _both_ 1 byte. So a slot in our array corresponds to a slot in RAM.

But that’s not always the case. In fact, it’s _usually not_ the case. We _usually_ use _64-bit_ integers.

So how do we build an array of _64-bit_ (8 byte) integers on top of our _8-bit_ (1 byte) memory slots?

We simply give each array index _8_ address slots instead of 1:

So we can still use simple math to grab the start of the nth item in our array — just gotta throw in some multiplication:

\\text{address of nth item in array} = \\text{address of array start} + (n \* \\text{size of each item in bytes})

Don’t worry — adding this multiplication doesn’t really slow us down. Remember: addition, subtraction, multiplication, and division of fixed-width integers takes time. So _all_ the math we’re using here to get the address of the nth item in the array takes time.

And remember how we said the memory controller has a _direct connection_ to each slot in RAM? That means we can read the stuff at any given memory address in time.

**Together, this means looking up the contents of a given array index is time.** This fast lookup capability is the most important property of arrays.

But the formula we used to get the address of the nth item in our array only works _if_:

1.  <span id="13a2">**Each item in the array is the _same size_** (takes up the same</span>

number of bytes).

1.  <span id="b7c3">**The array is _uninterrupted_ (contiguous) in memory**. There can’t</span>

be any gaps in the array…like to “skip over” a memory slot Spotify was already using.

These things make our formula for finding the nth item _work_ because they make our array _predictable_. We can _predict_ exactly where in memory the nth element of our array will be.

But they also constrain what kinds of things we can put in an array. Every item has to be the same size. And if our array is going to store a _lot_ of stuff, we’ll need a _bunch_ of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs (like Spotify).

That’s the tradeoff. Arrays have fast lookups ( time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

###

#### Pointers

Remember how we said every item in an array had to be the same size? Let’s dig into that a little more.

Suppose we wanted to store a bunch of ideas for baby names. Because we’ve got some _really_ cute ones.

Each name is a string. Which is really an array. And now we want to store _those arrays_ in an array. _Whoa_.

Now, what if our baby names have different lengths? That’d violate our rule that all the items in an array need to be the same size!

We could put our baby names in arbitrarily large arrays (say, 13 characters each), and just use a special character to mark the end of the string within each array…

“Wigglesworth” is a cute baby name, right?

But look at all that wasted space after “Bill”. And what if we wanted to store a string that was _more_ than 13 characters? We’d be out of luck.

There’s a better way. Instead of storing the strings right inside our array, let’s just put the strings wherever we can fit them in memory. Then we’ll have each element in our array hold the _address in memory_ of its corresponding string. Each address is an integer, so really our outer array is just an array of integers. We can call each of these integers a **pointer**, since it points to another spot in memory.

The pointers are marked with a \* at the beginning.

Pretty clever, right? This fixes _both_ the disadvantages of arrays:

1.  <span id="5925">The items don’t have to be the same length — each string can be as</span>

long or as short as we want.

1.  <span id="bb7a">We don’t need enough uninterrupted free memory to store all our</span>

strings next to each other — we can place each of them separately, wherever there’s space in RAM.

We fixed it! No more tradeoffs. Right?

Nope. Now we have a _new_ tradeoff:

Remember how the memory controller sends the contents of _nearby_ memory addresses to the processor with each read? And the processor caches them? So reading sequential addresses in RAM is _faster_ because we can get most of those reads right from the cache?

Our original array was very **cache-friendly**, because everything was sequential. So reading from the 0th index, then the 1st index, then the 2nd, etc. got an extra speedup from the processor cache.

**But the pointers in this array make it _not_ cache-friendly**, because the baby names are scattered randomly around RAM. So reading from the 0th index, then the 1st index, etc. doesn’t get that extra speedup from the cache.

That’s the tradeoff. This pointer-based array requires less uninterrupted memory and can accommodate elements that aren’t all the same size, _but_ it’s _slower_ because it’s not cache-friendly.

This slowdown isn’t reflected in the big O time cost. Lookups in this pointer-based array are _still_ time.

###

### Linked lists

Our word processor is definitely going to need fast appends — appending to the document is like the _main thing_ you do with a word processor.

Can we build a data structure that can store a string, has fast appends, _and_ doesn’t require you to say how long the string will be ahead of time?

Let’s focus first on not having to know the length of our string ahead of time. Remember how we used _pointers_ to get around length issues with our array of baby names?

What if we pushed that idea even further?

**What if each _character_ in our string were a _two-index array_ with:**

1.  <span id="c2e9">the character itself </span>

2.  a pointer to the next character

<figure><img src="https://cdn-images-1.medium.com/max/600/1*pNqDJJPz8tOruH51VDXJkA.png" class="graf-image" /></figure>We would call each of these two-item arrays a **node** and we’d call this series of nodes a **linked list**.

#### Here’s how we’d actually implement it in memory:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*Thlwxph-5BmpYLmHjmQm9w.png" class="graf-image" /></figure>

Notice how we’re free to store our nodes wherever we can find two open slots in memory. They don’t have to be next to each other. They don’t even have to be _in order_:

“But that’s not cache-friendly,” you may be thinking. Good point! We’ll get to that.

The first node of a linked list is called the **head**, and the last node is usually called the **tail**.

Confusingly, some people prefer to use “tail” to refer to _everything after the head_ of a linked list. In an interview it’s fine to use either definition. Briefly say which definition you’re using, just to be clear.

It’s important to have a pointer variable referencing the head of the list — otherwise we’d be unable to find our way back to the start of the list!

We’ll also sometimes keep a pointer to the tail. That comes in handy when we want to add something new to the end of the linked list. In fact, let’s try that out:

Suppose we had the string “LOG” stored in a linked list:

Suppose we wanted to add an “S” to the end, to make it “LOGS”. How would we do that?

Easy. We just put it in a new node:

And tweak some pointers:

​1. Grab the last letter, which is “G”. Our tail pointer lets us do this in time.

​2. Point the last letter’s next to the letter we’re appending (“S”).

​3. Update the tail pointer to point to our _new_ last letter, “S”.

That’s time.

Why is it time? Because the runtime doesn’t get bigger if the string gets bigger. No matter how many characters are in our string, we still just have to tweak a couple pointers for any append.

Now, what if instead of a linked list, our string had been a _dynamic array_? We might not have any room at the end, forcing us to do one of those doubling operations to make space:

So with a dynamic array, our append would have a _worst-case_ time cost of .

**Linked lists have worst-case -time appends, which is better than the worst-case time of dynamic arrays.**

That _worst-case_ part is important. The _average case_ runtime for appends to linked lists and dynamic arrays is the same: .

Now, what if we wanted to *pre*pend something to our string? Let’s say we wanted to put a “B” at the beginning.

For our linked list, it’s just as easy as appending. Create the node:

And tweak some pointers:

1.  <span id="f027">Point “B”’s next to “L”. 2. Point the head to “B”.</span>

Bam. time again.

But if our string were a _dynamic array_…

And we wanted to add in that “B”:

Eep. We have to _make room_ for the “B”!

We have to move _each character_ one space down:

_Now_ we can drop the “B” in there:

What’s our time cost here?

It’s all in the step where we made room for the first letter. We had to move _all n_ characters in our string. One at a time. That’s time.

**So linked lists have faster *pre*pends ( time) than dynamic arrays ( time).**

No “worst case” caveat this time — prepends for dynamic arrays are _always_ time. And prepends for linked lists are _always_ time.

These quick appends and prepends for linked lists come from the fact that linked list nodes can go anywhere in memory. They don’t have to sit right next to each other the way items in an array do.

So if linked lists are so great, why do we usually store strings in an array? **Because** <a href="http://127.0.0.1:5500/DS_ALGO/DS-ALGO-OFFICIAL/CONTENT/Resources/My-Data-Structures-Notes/Data-Structures-Concepts.html#constant-time-array-lookups" class="markup--anchor markup--p-anchor"><strong>arrays have -time lookups</strong></a>**.** And those constant-time lookups _come from_ the fact that all the array elements are lined up next to each other in memory.

Lookups with a linked list are more of a process, because we have no way of knowing where the ith node is in memory. So we have to walk through the linked list node by node, counting as we go, until we hit the ith item.

def get_ith_item_in_linked_list(head, i): if i &lt; 0: raise ValueError(“i can’t be negative: %d” % i) current_node = head current_position = 0 while current_node: if current_position == i: \# Found it! return current_node \# Move on to the next node current_node = current_node.next current_position += 1 raise ValueError(‘List has fewer than i + 1 (%d) nodes’ % (i + 1))

That’s i + 1 steps down our linked list to get to the ith node (we made our function zero-based to match indices in arrays). **So linked lists have -time lookups.** Much slower than the -time lookups for arrays and dynamic arrays.

Not only that — **walking down a linked list is _not_ cache-friendly.** Because the next node could be _anywhere_ in memory, we don’t get any benefit from the processor cache. This means lookups in a linked list are even slower.

So the tradeoff with linked lists is they have faster prepends and faster appends than dynamic arrays, _but_ they have slower lookups.

###

---

###  Doubly Linked Lists

<figure><img src="https://cdn-images-1.medium.com/max/800/1*-7V4JTr5aQ4LrsClVr-xuw.png" class="graf-image" /></figure>

In a basic linked list, each item stores a single pointer to the next element.

In a **doubly linked list**, items have pointers to the next _and the previous_ nodes.

Doubly linked lists allow us to traverse our list _backwards_. In a _singly_ linked list, if you just had a pointer to a node in the _middle_ of a list, there would be _no way_ to know what nodes came before it. Not a problem in a doubly linked list.

### Not cache-friendly

Most computers have <a href="https://www.interviewcake.com/article/data-structures-coding-interview#ram" class="markup--anchor markup--p-anchor">caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses</a>.

<a href="https://www.interviewcake.com/concept/array" class="markup--anchor markup--p-anchor">Array</a> items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they’re both theoretically time.

###

#### Hash tables

Quick lookups are often really important. For that reason, we tend to use arrays (-time lookups) much more often than linked lists (-time lookups).

For example, suppose we wanted to count how many times each ASCII character appears in <a href="https://raw.githubusercontent.com/GITenberg/The-Tragedy-of-Romeo-and-Juliet_1112/master/1112.txt" class="markup--anchor markup--p-anchor">Romeo and Juliet</a>. How would we store those counts?

We can use arrays in a clever way here. Remember — characters are just numbers. In ASCII (a common character encoding) ‘A’ is 65, ‘B’ is 66, etc.

So we can use the character(‘s number value) as the _index_ in our array, and store the _count_ for that character _at that index_ in the array:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*MLTDan4kVmZI6C86UrEYVA.png" class="graf-image" /></figure>

With this array, we can look up (and edit) the count for any character in constant time. Because we can access any index in our array in constant time.

Something interesting is happening here — this array isn’t just a list of values. This array is storing _two_ things: characters and counts. The characters are _implied_ by the indices.

**So we can think of an array as a _table_ with _two columns_…except you don’t really get to pick the values in one column (the indices) — they’re always 0, 1, 2, 3, etc.**

But what if we wanted to put _any_ value in that column and still get quick lookups?

Suppose we wanted to count the number of times each _word_ appears in Romeo and Juliet. Can we adapt our array?

Translating a _character_ into an array index was easy. But we’ll have to do something more clever to translate a _word_ (a string) into an array index…

<figure><img src="https://cdn-images-1.medium.com/max/800/1*hfr8DtpZy_jk8cEs5Mu97g.png" class="graf-image" /></figure>

Here’s one way we could do it:

Grab the number value for each character and add those up.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*eeNtdxkd24nJHWnQvXcBGQ.png" class="graf-image" /></figure>

The result is 429. But what if we only have _30_ slots in our array? We’ll use a common trick for forcing a number into a specific range: the modulus operator (%). Modding our sum by 30 ensures we get a whole number that’s less than 30 (and at least 0):

429 \\: \\% \\: 30 = 9

Bam. That’ll get us from a word (or any string) to an array index.

This data structure is called a **hash table** or **hash map**. In our hash table, the _counts_ are the **values** and the _words_ (“lies,” etc.) are the **keys** (analogous to the _indices_ in an array). The process we used to translate a key into an array index is called a **hashing function**.

!\[A blank array except for a 20, labeled as the value, stored at index

1.  <span id="5295">To the left the array is the word “lies,” labeled as the key, with an</span>

arrow pointing to the right at diamond with a question mark in the middle, labeled as the hashing function. The diamond points to the 9th index of the array.\](https://www.interviewcake.com/images/svgs/cs\_for\_hackers\_\_hash\_tables\_lies\_key\_labeled.svg?bust=209)

The hashing functions used in modern systems get pretty complicated — the one we used here is a simplified example.

Note that our quick lookups are only in one direction — we can quickly get the value for a given key, but the only way to get the key for a given value is to walk through all the values and keys.

Same thing with arrays — we can quickly look up the value at a given index, but the only way to figure out the index for a given value is to walk through the whole array.

One problem — what if two keys hash to the same index in our array? Look at “lies” and “foes”:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*hGd8tFErxDF13NiMUmo2cA.png" class="graf-image" /></figure>

They both sum up to 429! So of course they’ll have the same answer when we mod by 30:

429 \\: \\% \\: 30 = 9

So our hashing function gives us the same answer for “lies” and “foes.” This is called a **hash collision**. There are a few different strategies for dealing with them.

Here’s a common one: instead of storing the actual values in our array, let’s have each array slot hold a _pointer_ to a _linked list_ holding the counts for all the words that hash to that index:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*yxfOGRLcCxCULyKwmkY-mA.png" class="graf-image" /></figure>

One problem — how do we know which count is for “lies” and which is for “foes”? To fix this, we’ll store the _word_ as well as the count in each linked list node:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*qzIReSNqaYI9Dgtidf6zFw.png" class="graf-image" /></figure>“But wait!” you may be thinking, “Now lookups in our hash table take time in the worst case, since we have to walk down a linked list.” That’s true! You could even say that in the worst case *every* key creates a hash collision, so our whole hash table *degrades to a linked list*.

In industry though, we usually wave our hands and say **collisions are rare enough that on _average_ lookups in a hash table are time**. And there are fancy algorithms that keep the number of collisions low and keep the lengths of our linked lists nice and short.

But that’s sort of the tradeoff with hash tables. You get fast lookups by key…except _some_ lookups could be slow. And of course, you only get those fast lookups in one direction — looking up the _key_ for a given _value_ still takes time.

### Breadth-First Search (BFS) and Breadth-First Traversal

**Breadth-first search** (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore “ripple out” from the starting point.

Here’s a how a BFS would traverse this tree, starting with the root:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*rfDuWJ751EkuKsOnpQgf5w.png" class="graf-image" /></figure>

We’d visit all the immediate children (all the nodes that’re one step away from our starting node):

Then we’d move on to all _those_ nodes’ children (all the nodes that’re _two steps_ away from our starting node):

And so on:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*f4-3MJeN358hr4WFKlJ_wg.png" class="graf-image" /></figure>

Until we reach the end.

Breadth-first search is often compared with **depth-first search**.

Advantages:

-   <span id="6bc4">A BFS will find the **shortest path** between the starting point and</span>

any other reachable node. A depth-first search will not necessarily find the shortest path.

Disadvantages

-   <span id="e7ef">A BFS on a binary tree _generally_ requires more memory than a DFS.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*a3CyhFdhi_7CsOf5iwLwZw.png" class="graf-image" /></figure>### Binary Search Tree

A **binary tree** is a **tree** where &lt;==(**_every node has two or fewer children_**)==&gt;. The children are usually called **_left_** and **_right_**.

class BinaryTreeNode(object):

This lets us build a structure like this:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*xCMjvShUIAYY7OSewzzXpQ.png" class="graf-image" /></figure>

That particular example is special because every level of the tree is completely full. There are no “gaps.” We call this kind of tree “**perfect**.”

Binary trees have a few interesting properties when they’re perfect:

**Property 1: the number of total nodes on each “level” doubles as we move down the tree.**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*A-4qyUowaBB9grMEhkwCcw.png" class="graf-image" /></figure>

**Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1).** In other words, about _half_ of our nodes are on the last level.

&lt;==(**_Let’s call the number of nodes n,_**)==&gt;

&lt;==(**_and the height of the tree h._** )==&gt;

**h can also be thought of as the “number of levels.”**

If we had h, how could we calculate n?

Let’s just add up the number of nodes on each level!

If we zero-index the levels, the number of nodes on the xth level is exactly 2^x.

1.  <span id="3e28">Level 0: 2⁰ nodes,</span>
2.  <span id="f3e6">Level 1: 2¹ nodes,</span>
3.  <span id="bd51">Level 2: 2² nodes,</span>
4.  <span id="8d32">Level 3: 2³ nodes,</span>
5.  <span id="4217">_etc_</span>

So our total number of nodes is:

**n = 2⁰ + 2¹ + 2² + 2³ + … + 2^{h-1}**

Why only up to 2^{h-1}?

Notice that we **started counting our levels at 0.**

-   <span id="2775">So if we have h levels in total,</span>
-   <span id="e463">the last level is actually the “h-1”-th level.</span>
-   <span id="d1e3">That means the number of nodes on the last level is 2^{h-1}.</span>

But we can simplify.

**Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes**,

**so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall**.

-   <span id="dc7f">We know the number of nodes on the last level is 2^{h-1},</span>

So:

**n = 2^{h-1} \* 2–1 n = 2^{h-1} \* 2¹ — 1 n = 2^{h-1+1}- 1 n = 2^{h} — 1**

So that’s how we can go from h to n. What about the other direction?

We need to bring the h down from the exponent.

That’s what logs are for!

First, some quick review.

&lt;==(log\_{10} (100) )==&gt;

simply means,

**“What power must you raise 10 to in order to get 100?”**.

Which is 2,

because .

&lt;==(10² = 100 )==&gt;

### Graph Data Structure: Directed, Acyclic, etc

Graph =====

### Binary numbers

Let’s put those bits to use. Let’s store some stuff. Starting with numbers.

The number system we usually use (the one you probably learned in elementary school) is called **base 10**, because each digit has _ten_ possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0).

But computers don’t have digits with ten possible values. They have _bits_ with _two_ possible values. So they use **base 2** numbers.

Base 10 is also called **decimal**. Base 2 is also called **binary**.

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*b3LwD1x5v48TlzHXgoaDtg.png" class="graf-image" /></figure>

-   <span id="c9ce">10⁰=1 \* 10¹=10 \* 10²=100 \* 10³=1000 \* etc.</span>

**The places in _binary_ (base 2) are sequential powers of _2_:**

-   <span id="3622">2⁰=1 \* 2¹=2 \* 2²=4 \* 2³=8 \* etc.</span>

So let’s take that same “101” but this time let’s read it as a _binary_ number:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*qfOiEoP3-9P_vTt9hlSWLQ.png" class="graf-image" /></figure>Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*GtnQucEpPbc_B92TXo0gWg.png" class="graf-image" /></figure>

---

---

### Variables and Expressions

-   <span id="4fdb">**Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.</span>
-   <span id="63e5">  
    </span>
-   <span id="211a">Duck Typing is the fundamental approach of Python.</span>
-   <span id="9716">  
    </span>
-   <span id="d286">Assignment of a value automatically declares.</span>
-   <span id="0cb8">  
    </span>

<!-- -->

    a = 7 b = 'Marbles' print(a) # => 7 print(b) # => Marbles

-   <span id="6c22">You can chain variable assignments to give multiple var names the same value.</span>
-   <span id="c495">Use with caution as this is highly unreadable</span>
-   <span id="d6cf">  
    </span>

<!-- -->

    count = max = min = 0 print(count) # => 0 print(max) # => 0 print(min) # => 0

-   <span id="f21e">The value and type of a variable can be re-assigned at any time.</span>

<!-- -->

    a = 17 print(a) # => 17 a = 'seventeen' print(a) # => seventeen

-   <span id="599c">`NaN` does not exist in Python, but you can ‘create’ it like so: `print(float("nan"))`</span>
-   <span id="6aec">  
    </span>
-   <span id="8b84">Python replaces `null` with `none`.</span>
-   <span id="6eff">`none` is an object and can be directly assigned to a variable.</span>
-   <span id="7bd0">Using none is a convenient way to check to see why an action may not be operating correctly in your program.</span>
-   <span id="989e">  
    </span>

---

### Boolean Data Type

-   <span id="0a6e">One of the biggest benefits of Python is that it reads more like English than JS does.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*yAvBwIGmRbBGs40T.png" class="graf-image" /></figure>-   <span id="9176">  
    </span>

<!-- -->

    # Logical AND print(True and True) # => True print(True and False) # => False print(False and False) # => False  # Logical OR print(True or True) # => True print(True or False) # => True print(False or False) # => False  # Logical NOT print(not True) # => False print(not False and True) # => True print(not True or False) # => False

-   <span id="949a">By default, Python considers an object to be true UNLESS it is one of the following:</span>
-   <span id="c871">  
    </span>
-   <span id="aaf6">Constant `None` or `False`</span>
-   <span id="df2c">Zero of any numeric type.</span>
-   <span id="6ea2">Empty Sequence or Collection.</span>
-   <span id="b781">  
    </span>
-   <span id="1c0f">`True` and `False` must be capitalized</span>
-   <span id="8bbf">  
    </span>

---

### Comparison Operators

-   <span id="c71d">Python uses all the same equality operators as JS.</span>
-   <span id="f555">  
    </span>
-   <span id="2c6f">In Python, equality operators are processed from left to right.</span>
-   <span id="0d2a">  
    </span>
-   <span id="8509">Logical operators are processed in this order:</span>
-   <span id="1550">  
    </span>

1.  <span id="3675">**NOT**</span>
2.  <span id="032b">**AND**</span>
3.  <span id="1bf0">**OR**</span>

-   <span id="9436">  
    </span>
-   <span id="92a5">Just like in JS, you can use `parentheses` to change the inherent order of operations.</span>
-   <span id="7799">  
    </span>
-   <span id="d84a">**Short Circuit** : Stopping a program when a `true` or `false` has been reached.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*a4Dlmts1soSJz0ay.png" class="graf-image" /></figure>-   <span id="0bb2">  
    </span>
-   <span id="49da">  
    </span>

---

### Identity vs Equality

    print (2 == '2') # => False print (2 is '2') # => False  print ("2" == '2') # => True print ("2" is '2') # => True  # There is a distinction between the number types. print (2 == 2.0) # => True print (2 is 2.0) # => False

-   <span id="48e4">In the Python community it is better to use `is` and `is not` over `==` or `!=`</span>

---

### If Statements

    if name == 'Monica':  print('Hi, Monica.')

    if name == 'Monica':  print('Hi, Monica.') else:  print('Hello, stranger.')

    if name == 'Monica':  print('Hi, Monica.') elif age < 12:  print('You are not Monica, kiddo.') elif age > 2000:  print('Unlike you, Monica is not an undead, immortal vampire.') elif age > 100:  print('You are not Monica, grannie.')

-   <span id="dce9">Remember the order of `elif` statements matter.</span>

---

### While Statements

    spam = 0 while spam < 5:  print('Hello, world.')  spam = spam + 1

-   <span id="ed7d">`Break` statement also exists in Python.</span>

<!-- -->

    spam = 0 while True:  print('Hello, world.')  spam = spam + 1  if spam >= 5:  break

-   <span id="6d07">As are `continue` statements</span>

<!-- -->

    spam = 0 while True:  print('Hello, world.')  spam = spam + 1  if spam < 5:  continue  break

---

### Try/Except Statements

-   <span id="d629">Python equivalent to `try/catch`</span>

<!-- -->

    a = 321 try:  print(len(a)) except:  print('Silently handle error here')   # Optionally include a correction to the issue  a = str(a)  print(len(a)

    a = '321' try:  print(len(a)) except:  print('Silently handle error here')   # Optionally include a correction to the issue  a = str(a)  print(len(a))

-   <span id="77e7">You can name an error to give the output more specificity.</span>

<!-- -->

    a = 100 b = 0 try:  c = a / b except ZeroDivisionError:  c = None print(c)

-   <span id="cf4e">You can also use the `pass` commmand to by pass a certain error.</span>

<!-- -->

    a = 100 b = 0 try:  print(a / b) except ZeroDivisionError:  pass

-   <span id="9876">The `pass` method won’t allow you to bypass every single error so you can chain an exception series like so:</span>

<!-- -->

    a = 100 # b = "5" try:  print(a / b) except ZeroDivisionError:  pass except (TypeError, NameError):  print("ERROR!")

-   <span id="b20a">You can use an `else` statement to end a chain of `except` statements.</span>

<!-- -->

    # tuple of file names files = ('one.txt', 'two.txt', 'three.txt')  # simple loop for filename in files:  try:  # open the file in read mode  f = open(filename, 'r')  except OSError:  # handle the case where file does not exist or permission is denied  print('cannot open file', filename)  else:  # do stuff with the file object (f)  print(filename, 'opened successfully')  print('found', len(f.readlines()), 'lines')  f.close()

-   <span id="ca14">`finally` is used at the end to clean up all actions under any circumstance.</span>

<!-- -->

    def divide(x, y):  try:  result = x / y  except ZeroDivisionError:  print("Cannot divide by zero")  else:  print("Result is", result)  finally:  print("Finally...")

-   <span id="d61b">Using duck typing to check to see if some value is able to use a certain method.</span>

<!-- -->

    # Try a number - nothing will print out a = 321 if hasattr(a, '__len__'):  print(len(a))  # Try a string - the length will print out (4 in this case) b = "5555" if hasattr(b, '__len__'):  print(len(b))

---

### Pass

-   <span id="3eeb">Pass Keyword is required to write the JS equivalent of :</span>

<!-- -->

    if (true) { }  while (true) {}

    if True:  pass  while True:  pass

---

### Functions

-   <span id="429f">**Function** definition includes:</span>
-   <span id="5d05">The `def` keyword</span>
-   <span id="5adc">The name of the function</span>
-   <span id="1653">A list of parameters enclosed in parentheses.</span>
-   <span id="87ce">A colon at the end of the line.</span>
-   <span id="a4c3">One tab indentation for the code to run.</span>
-   <span id="b6f0">  
    </span>

<!-- -->

    def printCopyright():  print("Copyright 2020. Me, myself and I. All rights reserved.")

-   <span id="384f">You can use default parameters just like in JS</span>

<!-- -->

    def greeting(name, saying="Hello"):  print(saying, name)  greeting("Monica") # Hello Monica  greeting("Barry", "Hey") # Hey Barry

-   <span id="8626">Keep in mind, default parameters must always come after regular parameters.</span>

<!-- -->

    # THIS IS BAD CODE AND WILL NOT RUN def increment(delta=1, value):  return delta + value

-   <span id="20b2">You can specify arguments by name without destructuring in Python.</span>

<!-- -->

    def greeting(name, saying="Hello"):  print(saying, name)  # name has no default value, so just provide the value # saying has a default value, so use a keyword argument greeting("Monica", saying="Hi")

-   <span id="31a9">The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.</span>

`toUpper = lambda s: s.upper()`

### Formatted Strings

-   <span id="76a9">Remember that in Python `join()` is called on a string with an array/list passed in as the argument.</span>

<!-- -->

    shopping_list = ['bread','milk','eggs'] print(','.join(shopping_list))

-   <span id="4261">Python has a very powerful formatting engine.</span>
-   <span id="38d6">`format()` is also applied directly to strings.</span>

<!-- -->

    # Comma Thousands Separator  print('{:,}'.format(1234567890))  '1,234,567,890'  # Date and Time d = datetime.datetime(2020, 7, 4, 12, 15, 58) print('{:%Y-%m-%d %H:%M:%S}'.format(d)) '2020-07-04 12:15:58'  # Percentage points = 190 total = 220 print('Correct answers: {:.2%}'.format(points/total)) Correct answers: 86.36%  # Data Tables width=8 print(' decimal hex binary') print('-'*27) for num in range(1,16):  for base in 'dXb':  print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')  print()

---

### Getting Input from the Command Line

-   <span id="72ae">Python runs synchronously, all programs and processes will stop when listening for a user input.</span>
-   <span id="0edb">The `input` function shows a prompt to a user and waits for them to type ‘ENTER’.</span>

---

### Scripts vs Programs

-   <span id="f795">**Programming Script** : A set of code that runs in a linear fashion.</span>
-   <span id="95c7">The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.</span>
-   <span id="3dd5">  
    </span>
-   <span id="9e8a">Python can be used to display html, css, and JS.</span>
-   <span id="fc0f">We will be using Python as an API (Application Programming Interface)</span>
-   <span id="4954">  
    </span>

---

### Structured Data

-   <span id="0d5b">**Sequence** : The most basic data structure in Python where the index determines the order.</span>
-   <span id="e214">  
    </span>
-   <span id="a52e">List</span>
-   <span id="ea3e">Tuple</span>
-   <span id="9b6b">Range</span>
-   <span id="1208">  
    </span>
-   <span id="d1cb">**Collections** : Unordered data structures, hashable values.</span>
-   <span id="3ea2">  
    </span>
-   <span id="9535">Dictionaries</span>
-   <span id="e8f7">Sets</span>
-   <span id="05ff">  
    </span>
-   <span id="d100">**Iterable** : Generic name for a sequence or collection; any object that can be iterated through.</span>
-   <span id="c180">Can be mutable or immutable.</span>
-   <span id="c3a2">  
    </span>

---

### Built In Data Types

-   <span id="fa4d">**Lists** are the python equivalent of arrays.</span>

<!-- -->

    empty_list = [] departments = ['HR','Development','Sales','Finance','IT','Customer Support']  # You can instantiate specials = list()  # Test if a value is in a list. print(1 in [1, 2, 3]) #> True print(4 in [1, 2, 3]) #> False

-   <span id="0272">**Tuples** : Very similar to lists, but they are `immutable`</span>

<!-- -->

    # Instantiated with parentheses time_blocks = ('AM','PM')  # Sometimes instantiated without colors = 'red','blue','green' numbers = 1, 2, 3  # Tuple() built in can be used to convert other data into a tuple tuple('abc') # returns ('a', 'b', 'c') tuple([1,2,3]) # returns (1, 2, 3)

-   <span id="0275">Think of tuples as constant variables.</span>
-   <span id="c9cf">  
    </span>
-   <span id="8f79">**Ranges** : A list of numbers which can’t be changed; often used with `for` loops.</span>
-   <span id="de8e">Declared using one to three parameters.</span>
-   <span id="92ae">  
    </span>

1.  <span id="8464">**Start** : opt. default 0, first \# in sequence.</span>
2.  <span id="0343">**Stop** : `required` next number past the last number in the sequence.</span>
3.  <span id="afa3">**Step** : opt. default 1, difference between each number in the sequence.</span>

-   <span id="2c3a">  
    </span>

<!-- -->

    range(5) # [0, 1, 2, 3, 4] range(1,5) # [1, 2, 3, 4] range(0, 25, 5) # [0, 5, 10, 15, 20] range(0) # [ ]

    for let (i = 0; i < 5; i++) for let (i = 1; i < 5; i++) for let (i = 0; i < 25; i+=5) for let(i = 0; i = 0; i++)

-   <span id="a9ff">Keep in mind that `stop` is not included in the range.</span>
-   <span id="c5a2">  
    </span>
-   <span id="6190">`Dictionaries` : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.</span>
-   <span id="894b">Mutable.</span>
-   <span id="ee9a">  
    </span>

<!-- -->

    a = {'one':1, 'two':2, 'three':3} b = dict(one=1, two=2, three=3) c = dict([('two', 2), ('one', 1), ('three', 3)])

> _a, b, and c are all equal_

>

-   <span id="0d61">Declared with curly braces of the built in `dict()`</span>
-   <span id="813c">  
    </span>
-   <span id="9916">Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.</span>
-   <span id="25d7">  
    </span>
-   <span id="efa2">Use the `in` operator to see if a key exists in a dictionary.</span>
-   <span id="2c63">  
    </span>
-   <span id="b0fa">**Sets** : Unordered collection of distinct objects; objects that **need** to be hashable.</span>
-   <span id="3c38">  
    </span>
-   <span id="278c">Always be unique, duplicate items are auto dropped from the set.</span>
-   <span id="e9b4">**Common Uses**:</span>
-   <span id="17c4">Removing Duplicates</span>
-   <span id="ea50">Membership Testing</span>
-   <span id="3e11">Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.</span>
-   <span id="5ea2">Standard Set is mutable, Python has a immutable version called `frozenset`.</span>
-   <span id="d339">  
    </span>
-   <span id="a730">  
    </span>
-   <span id="f4fe">Sets created by putting comma seperated values inside braces:</span>
-   <span id="e00d">  
    </span>

<!-- -->

    school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'} print(school_bag)  # Also can use set constructor to automatically put it into a set. letters = set('abracadabra') print(letters)

---

### Built-In Functions

**Functions using iterables**

-   <span id="c028">**filter(function, iterable)** : creates new iterable of the same type which includes each item for which the function returns true.</span>
-   <span id="5779">  
    </span>
-   <span id="3285">**map(function, iterable)** : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.</span>
-   <span id="688a">  
    </span>
-   <span id="b12a">**sorted(iterable, key=None, reverse=False)** : creates a new sorted list from the items in the iterable.</span>
-   <span id="8879">  
    </span>
-   <span id="92c1">Output is always a `list`</span>
-   <span id="54fe">`key`: opt function which coverts and item to a value to be compared.</span>
-   <span id="0b9a">`reverse`: optional boolean.</span>
-   <span id="b0a2">  
    </span>
-   <span id="cc11">**enumerate(iterable, start=0)** : starts with a sequence and converts it to a series of tuples</span>
-   <span id="ad42">  
    </span>

<!-- -->

    quarters = ['First', 'Second', 'Third', 'Fourth'] print(enumerate(quarters)) print(enumerate(quarters, start=1))  # (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth') # (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth')

-   <span id="ed4a">**zip(\*iterables)** : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.</span>

**Functions that analyze iterables**

-   <span id="e971">**len(iterable)** : returns the count of the number of items.</span>
-   <span id="eb73">  
    </span>
-   <span id="3cc8">**max(\*args, key=None)** : returns the largest of two or more arguments.</span>
-   <span id="e57d">  
    </span>
-   <span id="dc41">**max(iterable, key=None)** : returns the largest item in the iterable.</span>
-   <span id="4c97">  
    </span>
-   <span id="22ba">`key` optional function which converts an item to a value to be compared.</span>
-   <span id="2df4">  
    </span>
-   <span id="34c5">**min** works the same way as `max`</span>
-   <span id="4dc2">  
    </span>
-   <span id="56c1">**sum(iterable)** : used with a list of numbers to generate the total.</span>
-   <span id="1ed2">  
    </span>
-   <span id="a814">There is a faster way to concatenate an array of strings into one string, so do not use sum for that.</span>
-   <span id="e73c">  
    </span>
-   <span id="b97e">**any(iterable)** : returns True if any items in the iterable are true.</span>
-   <span id="0f5b">  
    </span>
-   <span id="5b70">**all(iterable)** : returns True is all items in the iterable are true.</span>
-   <span id="f4e7">  
    </span>

**Working with dictionaries**

-   <span id="f986">**dir(dictionary)** : returns the list of keys in the dictionary.</span>

**Working with sets**

-   <span id="5a80">**Union** : The pipe | operator or `union(*sets)` function can be used to produce a new set which is a combination of all elements in the provided set.</span>

<!-- -->

    a = {1, 2, 3} b = {2, 4, 6} print(a | b) # => {1, 2, 3, 4, 6}

-   <span id="6795">**Intersection** : The & operator ca be used to produce a new set of only the elements that appear in all sets.</span>

<!-- -->

    a = {1, 2, 3} b = {2, 4, 6} print(a & b) # => {2}

-   <span id="8e32">**Difference** : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.</span>
-   <span id="cbe9">  
    </span>
-   <span id="86a5">**Symmetric Difference** : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.</span>
-   <span id="1ca7">  
    </span>

<!-- -->

    a = {1, 2, 3} b = {2, 4, 6} print(a - b) # => {1, 3} print(b - a) # => {4, 6} print(a ^ b) # => {1, 3, 4, 6}

---

### For Statements

-   <span id="cb18">In python, there is only one for loop.</span>
-   <span id="ef6d">  
    </span>
-   <span id="f666">Always Includes:</span>
-   <span id="6703">The `for` keyword</span>
-   <span id="9682">A variable name</span>
-   <span id="9e9d">The `in` keyword</span>
-   <span id="ef34">An iterable of some kid</span>
-   <span id="17a6">A colon</span>
-   <span id="42bb">On the next line, an indented block of code called the `for` clause.</span>
-   <span id="7915">  
    </span>
-   <span id="3e5c">  
    </span>
-   <span id="a797">You can use `break` and `continue` statements inside for loops as well.</span>
-   <span id="7d45">  
    </span>
-   <span id="bc7f">You can use the range function as the iterable for the `for` loop.</span>
-   <span id="79b7">  
    </span>

<!-- -->

    print('My name is') for i in range(5):  print('Carlita Cinco (' + str(i) + ')')  total = 0 for num in range(101):  total += num print(total)

-   <span id="376f">Looping over a list in Python</span>

<!-- -->

    for c in ['a', 'b', 'c']:  print(c)  lst = [0, 1, 2, 3] for i in lst:  print(i)

-   <span id="bdfd">Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list.</span>

<!-- -->

    supplies = ['pens', 'staplers', 'flame-throwers', 'binders'] for i in range(len(supplies)):  print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

-   <span id="5def">You can loop and destructure at the same time.</span>

<!-- -->

    l = [[1, 2], [3, 4], [5, 6]] for a, b in l:  print(a, ', ', b)  # Prints 1, 2 # Prints 3, 4 # Prints 5, 6

-   <span id="5a4a">You can use `values()` and `keys()` to loop over dictionaries.</span>

<!-- -->

    spam = {'color': 'red', 'age': 42} for v in spam.values():  print(v)  # Prints red # Prints 42  for k in spam.keys():  print(k)  # Prints color # Prints age

-   <span id="2895">For loops can also iterate over both keys and values.</span>

<!-- -->

    # Getting tuples for i in spam.items():  print(i)  # Prints ('color', 'red') # Prints ('age', 42)   # Destructuring to values for k, v in spam.items():  print('Key: ' + k + ' Value: ' + str(v))  # Prints Key: age Value: 42 # Prints Key: color Value: red

-   <span id="f2cd">Looping over string</span>

<!-- -->

    for c in "abcdefg":  print(c)

---

### More On Functions

-   <span id="3eff">**Variable-length positional arguments** : (\*args)</span>

<!-- -->

    def add(a, b, *args):  total = a + b;  for n in args:  total += n  return total  add(1, 2) # Returns 3  add(2, 3, 4, 5) # Returns 14

-   <span id="7a52">**keyword arguments** : (\*kwargs)</span>

<!-- -->

    def print_names_and_countries(greeting, **kwargs):  for k, v in kwargs.items():  print(greeting, k, "from", v)  print_names_and_countries("Hi",  Monica="Sweden",  Charles="British Virgin Islands",  Carlo="Portugal") # Prints # Hi Monica from Sweden # Hi Charles from British Virgin Islands # Hi Carlo from Portugal

-   <span id="a918">When you order arguments within a function or function call, the args need to occur in a particular order:</span>
-   <span id="ea3a">  
    </span>

1.  <span id="6091">formal positional args.</span>

-   <span id="04ce">  
    </span>

1.  <span id="c4c0">\*args</span>

-   <span id="a430">  
    </span>

1.  <span id="dbea">keyword args with default values</span>

-   <span id="6df6">  
    </span>

1.  <span id="4b58">\*\*kwargs</span>

-   <span id="ae11">  
    </span>
-   <span id="cf21">  
    </span>

<!-- -->

    def example(arg_1, arg_2, *args, **kwargs):  pass  def example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):  pass

---

### Importing in Python

-   <span id="724a">Modules are similar to packages in Node.js</span>
-   <span id="de18">Come in different types: Built-In, Third-Party, Custom.</span>
-   <span id="1fb6">All loaded using `import` statements.</span>

**Terms**

-   <span id="5a96">**module** : Python code in a separate file.</span>
-   <span id="116b">**package** : Path to a directory that contains modules.</span>
-   <span id="1ea3">\***\*init**.py\*\* : Default file for a package.</span>
-   <span id="eb85">**submodule** : Another file in a module’s folder.</span>
-   <span id="b53d">**function** : Function in a module.</span>
-   <span id="e161">  
    </span>
-   <span id="29e5">A module can be any file but it is usually created by placing a special file `__init__.py` into a folder.</span>
-   <span id="22a4">  
    </span>
-   <span id="476f">  
    </span>
-   <span id="649f">Try to avoid importing with wildcards in Python.</span>
-   <span id="9699">  
    </span>
-   <span id="915f">Use multiple lines for clarity when importing.</span>
-   <span id="c3de">  
    </span>

<!-- -->

    from urllib.request import (  HTTPDefaultErrorHandler as ErrorHandler,  HTTPRedirectHandler as RedirectHandler,  Request,  pathname2url,  url2pathname,  urlopen, )

---

### Watching Out for Python 2

-   <span id="74ef">Python 3 removed `<>` and only uses `!=`</span>
-   <span id="8c29">  
    </span>
-   <span id="e361">`format()` was introduced with P3</span>
-   <span id="ebe1">All strings in P3 are unicode and encoded.</span>
-   <span id="1faa">`md5` was removed.</span>
-   <span id="46d2">`ConfigParser` was renamed to `configparser`</span>
-   <span id="1d0b">`sets` were killed in favor of `set()` class.</span>
-   <span id="6aa5">  
    </span>
-   <span id="3bb8">`print` was a statement in P2, but is a function in P3.</span>

### Classes In Python

-   <span id="de5f">Classes are a way of combining information and behavior.</span>
-   <span id="3b7b">Classes are blueprints to make objects.</span>

<!-- -->

    class AngryBird {  constructor() {  this.x = 0;  this.y = 0;  } }

    class AngryBird:  def __init__(self):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self.x = 0  self.y = 0

-   <span id="a9b1">Both JS and PY use the `class` keyword to declare classes.</span>
-   <span id="a7a0">`constructor` == `__init__`</span>
-   <span id="18e9">`this` == `self`</span>

<!-- -->

    bird = AngryBird() print(bird.x, bird.y) #> 0 0

    class AngryBird:  def __init__(self):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self.x = 0  self.y = 0   def move_up_by(self, delta):  self.y += delta

-   <span id="61dc">Note how you do not need to define `self` it is already bound to the class.</span>
-   <span id="9edd">  
    </span>
-   <span id="c0ff">It is good practice to write a comment at the beginning of your class, describing the class.</span>
-   <span id="794f">  
    </span>

**Dunder Methods**

-   <span id="cc63">Double Underscore Methods, special built in functions that PY uses in certain ways.</span>
-   <span id="8fae">i.e. `__init__()` lets you make sure all relevant attributes are set to their proper values when an object is created from the class.</span>
-   <span id="5fa4">  
    </span>
-   <span id="004d">The `self` keyword refers to the current object that you are working with.</span>
-   <span id="5d09">  
    </span>
-   <span id="e7ce">Method is a function that is part of a class.</span>
-   <span id="bbb1">  
    </span>

<!-- -->

    class AngryBird:  def __init__(self):  self.x = 0  self.y = 0   def move_up_by(self, delta):  self.y += delta   bird = AngryBird() print(bird) print(bird.y) bird.move_up_by(5) print(bird.y)

-   <span id="2c79">_Use one leading underscore only for non-public methods and instance variables_</span>

<!-- -->

    class AngryBird:  def __init__(self, x=0, y=0):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self._x = x  self._y = y   def move_up_by(self, delta):  self._y += delta   def get_x(self):  return self._x   def get_y(self):  return self._y

-   <span id="f01b">_All instance variables should be considered non-public_</span>
-   <span id="20e3">  
    </span>
-   <span id="f56d">\***\*slots\*\*** : Dunder class variable used to reserve memory for the instance variables that you know will you will use.</span>
-   <span id="31a3">  
    </span>

<!-- -->

    class AngryBird:  __slots__ = ['_x', '_y']   def __init__(self, x=0, y=0):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self._x = x  self._y = y   def move_up_by(self, delta):  self._y += delta   def get_x(self):  return self._x   def get_y(self):  return self._y

-   <span id="b4c1">You can use `__repr__()` to override the behavior of printing out a class in a verbose manner.</span>

<!-- -->

    class AngryBird:  __slots__ = ['_x', '_y']   def __init__(self, x=0, y=0):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self._x = x  self._y = y   def move_up_by(self, delta):  self._y += delta   def get_x(self):  return self._x   def get_y(self):  return self._y   def __repr__(self):  return f"<AngryBird ({self._x}, {self._y})>"

---

### Properties for Classes

-   <span id="e7cd">Getters and Setters are used in object-oriented programming to add validation logic around getting and setting a value.</span>

**Getters**

    bird = AngryBird()  print(bird.get_x(), bird.get_y())

-   <span id="f614">Getting the x and y values of our class can get very cumbersome.</span>
-   <span id="bb70">**Decorators** : Allow us to change the way methods get invoked.</span>
-   <span id="c8aa">Always start with the @ symbol.</span>
-   <span id="5763">Can be applied to methods, classes, and parameters.</span>
-   <span id="771f">Built in decorator named `property` that you can apply to a method to make it readable.</span>
-   <span id="dec0">  
    </span>

<!-- -->

    @property  def x(self):  return self._x   @property  def y(self):  return self._y   bird = AngryBird()   print(bird.x, bird.y)

**Setters**

    class AngryBird:  def __init__(self, x=0, y=0):  """  Construct a new AngryBird by setting its position to (0, 0).  """  self._x = x  self._y = y   def move_up_by(self, delta):  self._y += delta   @property  def x(self):  return self._x   @x.setter  def x(self, value):  if value < 0:  value = 0  self._x = value   @property  def y(self):  return self._y   @y.setter  def y(self, value):  if value < 0:  value = 0  self._y = value

---

### List Comprehensions

-   <span id="65a0">List comprehensions are the equivalent of wrapped up filter namp array methods while also allowing nested loops.</span>
-   <span id="a071">  
    </span>
-   <span id="30d6">`new_list = [expression for member in iterable]`</span>
-   <span id="29be">  
    </span>
-   <span id="e544">**expression** : member itself, a call to a methd, or any other valid expression that returns a value.</span>
-   <span id="33d3">  
    </span>
-   <span id="6581">**member** : object or value in the list or iterable.</span>
-   <span id="6096">  
    </span>
-   <span id="bffc">**iterable** : iterable.</span>
-   <span id="0685">  
    </span>

`new_list = [expression for member in iterable (if conditional)]`

-   <span id="db4e">Adding a conditional into a list comprehension.</span>

<!-- -->

    sentence = 'Mary, Mary, quite contrary, how does your garden grow?' def is_consonant(letter):  vowels = "aeiou"  return letter.isalpha() and letter.lower() not in vowels  consonants = [i for i in sentence if is_consonant(i)]  print(consonants) # Prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c', # 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y', # 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']

**When to not use list comprehensions** — List comprehensions may make your code run more slowly or use more memory. — You can use nest lists to create matrices.

    matrix = [[i for i in range(5)] for _ in range(6)]  print(matrix) # Prints # [ # [0, 1, 2, 3, 4], # [0, 1, 2, 3, 4], # [0, 1, 2, 3, 4], # [0, 1, 2, 3, 4], # [0, 1, 2, 3, 4], # [0, 1, 2, 3, 4] # ]

[View original.](https://medium.com/p/f4f47fbf6ee)

Exported from [Medium](https://medium.com) on August 10, 2021.
