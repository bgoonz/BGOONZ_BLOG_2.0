Data Structures… Under The Hood
===============================

Data Structures Reference

------------------------------------------------------------------------

### Data Structures… Under The Hood

### Data Structures Reference

------------------------------------------------------------------------

### Array

Stores things in order. Has quick lookups by index.

### Linked List

Also stores things in order. Faster insertions and deletions than  
arrays, but slower lookups (you have to “walk down” the whole list).

!

### Queue

Like the line outside a busy restaurant. “First come, first served.”

### Stack

Like a stack of dirty plates in the sink. The first one you take off the  
top is the last one you put down.

### Tree

Good for storing hierarchies. Each node can have “child” nodes.

### Binary Search Tree

Everything in the left subtree is smaller than the current node,  
everything in the right subtree is larger. lookups, but only if the tree  
is balanced!

### Binary Search Tree

### Graph

Good for storing networks, geography, social relationships, etc.

### Heap

A binary tree where the smallest value is always at the top. Use it to implement a priority queue.

!\[A binary heap is a binary tree where the nodes are organized to so that the smallest value is always at the top.\]

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

------------------------------------------------------------------------

### Arrays

Ok, so we know how to store individual numbers. Let’s talk about storing *several numbers*.

That’s right, things are starting to *heat up*.

Suppose we wanted to keep a count of how many bottles of kombucha we drink every day.

Let’s store each day’s kombucha count in an 8-bit, fixed-width, unsigned integer. That should be plenty — we’re not likely to get through more than 256 (2⁸) bottles in a *single day*, right?

And let’s store the kombucha counts right next to each other in RAM, starting at memory address 0:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FM_W-EkXYGYwG6LK" class="graf-image" /></figure>Bam. That’s an **array**. RAM is *basically* an array already.

Just like with RAM, the elements of an array are numbered. We call that number the **index** of the array element (plural: indices). In *this* example, each array element’s index is the same as its address in RAM.

But that’s not usually true. Suppose another program like Spotify had already stored some information at memory address 2:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*IBpMv-88FpWo2gbu" class="graf-image" /></figure>We’d have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3, and index 1 would be at memory address 4, etc.:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Zeqpub-zKSWyyBeg" class="graf-image" /></figure>Suppose we wanted to get the kombucha count at index 4 in our array. How do we figure out what *address in memory* to go to? Simple math:

Take the array’s starting address (3), add the index we’re looking for (4), and that’s the address of the item we’re looking for. 3 + 4 = 7. In general, for getting the nth item in our array:

\\text{address of nth item in array} = \\text{address of array start} + n

This works out nicely because the size of the addressed memory slots and the size of each kombucha count are *both* 1 byte. So a slot in our array corresponds to a slot in RAM.

But that’s not always the case. In fact, it’s *usually not* the case. We *usually* use *64-bit* integers.

So how do we build an array of *64-bit* (8 byte) integers on top of our *8-bit* (1 byte) memory slots?

We simply give each array index *8* address slots instead of 1:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y_mxvkxQGPP7rqQJ" class="graf-image" /></figure>So we can still use simple math to grab the start of the nth item in our array — just gotta throw in some multiplication:

\\text{address of nth item in array} = \\text{address of array start} + (n \* \\text{size of each item in bytes})

Don’t worry — adding this multiplication doesn’t really slow us down. Remember: addition, subtraction, multiplication, and division of fixed-width integers takes time. So *all* the math we’re using here to get the address of the nth item in the array takes time.

And remember how we said the memory controller has a *direct connection* to each slot in RAM? That means we can read the stuff at any given memory address in time.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*kqv_M8aCHZWjRv90" class="graf-image" /></figure>**Together, this means looking up the contents of a given array index is time.** This fast lookup capability is the most important property of arrays.

But the formula we used to get the address of the nth item in our array only works *if*:

1.  <span id="ae12">**Each item in the array is the *same size*** (takes up the same</span>

number of bytes).

1.  <span id="cae3">**The array is *uninterrupted* (contiguous) in memory**. There can’t</span>

be any gaps in the array…like to “skip over” a memory slot Spotify was already using.

These things make our formula for finding the nth item *work* because they make our array *predictable*. We can *predict* exactly where in memory the nth element of our array will be.

But they also constrain what kinds of things we can put in an array. Every item has to be the same size. And if our array is going to store a *lot* of stuff, we’ll need a *bunch* of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs (like Spotify).

That’s the tradeoff. Arrays have fast lookups ( time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

------------------------------------------------------------------------

\#\# Pointers

Remember how we said every item in an array had to be the same size? Let’s dig into that a little more.

Suppose we wanted to store a bunch of ideas for baby names. Because we’ve got some *really* cute ones.

Each name is a string. Which is really an array. And now we want to store *those arrays* in an array. *Whoa*.

Now, what if our baby names have different lengths? That’d violate our rule that all the items in an array need to be the same size!

We could put our baby names in arbitrarily large arrays (say, 13 characters each), and just use a special character to mark the end of the string within each array…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*DanfoIJ9nNaOKn-G" class="graf-image" /></figure>“Wigglesworth” is a cute baby name, right?

But look at all that wasted space after “Bill”. And what if we wanted to store a string that was *more* than 13 characters? We’d be out of luck.

There’s a better way. Instead of storing the strings right inside our array, let’s just put the strings wherever we can fit them in memory. Then we’ll have each element in our array hold the *address in memory* of its corresponding string. Each address is an integer, so really our outer array is just an array of integers. We can call each of these integers a **pointer**, since it points to another spot in memory.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aLJ4pDr4uAXU1_Qs" class="graf-image" /></figure>The pointers are marked with a \* at the beginning.

Pretty clever, right? This fixes *both* the disadvantages of arrays:

1.  <span id="0cd5">The items don’t have to be the same length — each string can be as</span>

long or as short as we want.

1.  <span id="8ecd">We don’t need enough uninterrupted free memory to store all our</span>

strings next to each other — we can place each of them separately, wherever there’s space in RAM.

We fixed it! No more tradeoffs. Right?

Nope. Now we have a *new* tradeoff:

Remember how the memory controller sends the contents of *nearby* memory addresses to the processor with each read? And the processor caches them? So reading sequential addresses in RAM is *faster* because we can get most of those reads right from the cache?

<figure><img src="https://cdn-images-1.medium.com/max/800/0*UkWe4Y0h8O7mz0E_" class="graf-image" /></figure>Our original array was very **cache-friendly**, because everything was sequential. So reading from the 0th index, then the 1st index, then the 2nd, etc. got an extra speedup from the processor cache.

**But the pointers in this array make it *not* cache-friendly**, because the baby names are scattered randomly around RAM. So reading from the 0th index, then the 1st index, etc. doesn’t get that extra speedup from the cache.

That’s the tradeoff. This pointer-based array requires less uninterrupted memory and can accommodate elements that aren’t all the same size, *but* it’s *slower* because it’s not cache-friendly.

This slowdown isn’t reflected in the big O time cost. Lookups in this pointer-based array are *still* time.

------------------------------------------------------------------------

### Linked lists

Our word processor is definitely going to need fast appends — appending to the document is like the *main thing* you do with a word processor.

Can we build a data structure that can store a string, has fast appends, *and* doesn’t require you to say how long the string will be ahead of time?

Let’s focus first on not having to know the length of our string ahead of time. Remember how we used *pointers* to get around length issues with our array of baby names?

What if we pushed that idea even further?

What if each *character* in our string were a *two-index array* with:

1.  <span id="4410">the character itself 2. a pointer to the next character</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KcG72KzdYU-ftXWq" class="graf-image" /></figure>We would call each of these two-item arrays a **node** and we’d call this series of nodes a **linked list**.

Here’s how we’d actually implement it in memory:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0KZl9hNN_IFP15RH" class="graf-image" /></figure>Notice how we’re free to store our nodes wherever we can find two open slots in memory. They don’t have to be next to each other. They don’t even have to be *in order*:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lSOAxFuMAS2xK3JI" class="graf-image" /></figure>“But that’s not cache-friendly, “ you may be thinking. Good point! We’ll get to that.

The first node of a linked list is called the **head**, and the last node is usually called the **tail**.

Confusingly, some people prefer to use “tail” to refer to *everything after the head* of a linked list. In an interview it’s fine to use either definition. Briefly say which definition you’re using, just to be clear.

It’s important to have a pointer variable referencing the head of the list — otherwise we’d be unable to find our way back to the start of the list!

We’ll also sometimes keep a pointer to the tail. That comes in handy when we want to add something new to the end of the linked list. In fact, let’s try that out:

Suppose we had the string “LOG” stored in a linked list:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*c3-7UhJ39PZohsuz" class="graf-image" /></figure>Suppose we wanted to add an “S” to the end, to make it “LOGS”. How would we do that?

Easy. We just put it in a new node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*U1OJCEX8zUd5QbuU" class="graf-image" /></figure>And tweak some pointers:

​1. Grab the last letter, which is “G”. Our tail pointer lets us do this in time.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YzvjIGZQ6MnkGWcw" class="graf-image" /></figure>​2. Point the last letter’s next to the letter we’re appending (“S”).

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-CA8KHc1tdRfVYoe" class="graf-image" /></figure>​3. Update the tail pointer to point to our *new* last letter, “S”.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Gbf918HOvlJhMHEf" class="graf-image" /></figure>That’s time.

Why is it time? Because the runtime doesn’t get bigger if the string gets bigger. No matter how many characters are in our string, we still just have to tweak a couple pointers for any append.

Now, what if instead of a linked list, our string had been a *dynamic array*? We might not have any room at the end, forcing us to do one of those doubling operations to make space:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wSK-FGV0kCiskLNS" class="graf-image" /></figure>So with a dynamic array, our append would have a *worst-case* time cost of .

**Linked lists have worst-case -time appends, which is better than the worst-case time of dynamic arrays.**

That *worst-case* part is important. The *average case* runtime for appends to linked lists and dynamic arrays is the same: .

Now, what if we wanted to \*pre\*pend something to our string? Let’s say we wanted to put a “B” at the beginning.

For our linked list, it’s just as easy as appending. Create the node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*MSenMuHQuHb1dV1X" class="graf-image" /></figure>And tweak some pointers:

1.  <span id="cf06">Point “B”’s next to “L”. 2. Point the head to “B”.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GoeByRt15C4nQvQr" class="graf-image" /></figure>Bam. time again.

But if our string were a *dynamic array*…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PhElGwum7RgTPqAy" class="graf-image" /></figure>And we wanted to add in that “B”:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*n4qjPFNz4BVHBt5w" class="graf-image" /></figure>Eep. We have to *make room* for the “B”!

We have to move *each character* one space down:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*n90vZS_Exw8Wjs2b" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*zryPfLJtzXqnGOth" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*PlEqTgXBKKpG5DCF" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*DampgIgyO6Silk8U" class="graf-image" /></figure>*Now* we can drop the “B” in there:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Xxkr4sYP9-drZeEe" class="graf-image" /></figure>What’s our time cost here?

It’s all in the step where we made room for the first letter. We had to move *all n* characters in our string. One at a time. That’s time.

**So linked lists have faster \*pre\*pends ( time) than dynamic arrays ( time).**

No “worst case” caveat this time — prepends for dynamic arrays are *always* time. And prepends for linked lists are *always* time.

These quick appends and prepends for linked lists come from the fact that linked list nodes can go anywhere in memory. They don’t have to sit right next to each other the way items in an array do.

So if linked lists are so great, why do we usually store strings in an array? **Because** <a href="https://dev.to/bgoonz/common-data-structures-their-background-11eg#constant-time-array-lookups" class="markup--anchor markup--p-anchor"><strong>arrays have -time lookups</strong></a>**.** And those constant-time lookups *come from* the fact that all the array elements are lined up next to each other in memory.

Lookups with a linked list are more of a process, because we have no way of knowing where the ith node is in memory. So we have to walk through the linked list node by node, counting as we go, until we hit the ith item.

def get\_ith\_item\_in\_linked\_list(head, i): if i &lt; 0: raise ValueError(“i can’t be negative: %d” % i) current\_node = head current\_position = 0 while current\_node: if current\_position == i: \# Found it! return current\_node \# Move on to the next node current\_node = current\_node.next current\_position += 1 raise ValueError(‘List has fewer than i + 1 (%d) nodes’ % (i + 1))

That’s i + 1 steps down our linked list to get to the ith node (we made our function zero-based to match indices in arrays). **So linked lists have -time lookups.** Much slower than the -time lookups for arrays and dynamic arrays.

Not only that — **walking down a linked list is *not* cache-friendly.** Because the next node could be *anywhere* in memory, we don’t get any benefit from the processor cache. This means lookups in a linked list are even slower.

So the tradeoff with linked lists is they have faster prepends and faster appends than dynamic arrays, *but* they have slower lookups.

------------------------------------------------------------------------

\#\# Doubly Linked Lists

In a basic linked list, each item stores a single pointer to the next element.

In a **doubly linked list**, items have pointers to the next *and the previous* nodes.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*OEAPr9oLUTWovm86" class="graf-image" /></figure>Doubly linked lists allow us to traverse our list *backwards*. In a *singly* linked list, if you just had a pointer to a node in the *middle* of a list, there would be *no way* to know what nodes came before it. Not a problem in a doubly linked list.

### Not cache-friendly

Most computers have <a href="https://www.interviewcake.com/article/data-structures-coding-interview#ram" class="markup--anchor markup--p-anchor">caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses</a>.

<a href="https://www.interviewcake.com/concept/array" class="markup--anchor markup--p-anchor">Array</a> items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they’re both theoretically time.

------------------------------------------------------------------------

### Hash tables

Quick lookups are often really important. For that reason, we tend to use arrays (-time lookups) much more often than linked lists (-time lookups).

For example, suppose we wanted to count how many times each ASCII character appears in <a href="https://raw.githubusercontent.com/GITenberg/The-Tragedy-of-Romeo-and-Juliet_1112/master/1112.txt" class="markup--anchor markup--p-anchor">Romeo and Juliet</a>. How would we store those counts?

We can use arrays in a clever way here. Remember — characters are just numbers. In ASCII (a common character encoding) ‘A’ is 65, ‘B’ is 66, etc.

So we can use the character(‘s number value) as the *index* in our array, and store the *count* for that character *at that index* in the array:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*84jW_RfhW2MNqLGl" class="graf-image" /></figure>With this array, we can look up (and edit) the count for any character in constant time. Because we can access any index in our array in constant time.

Something interesting is happening here — this array isn’t just a list of values. This array is storing *two* things: characters and counts. The characters are *implied* by the indices.

**So we can think of an array as a *table* with *two columns*…except you don’t really get to pick the values in one column (the indices) — they’re always 0, 1, 2, 3, etc.**

But what if we wanted to put *any* value in that column and still get quick lookups?

Suppose we wanted to count the number of times each *word* appears in Romeo and Juliet. Can we adapt our array?

Translating a *character* into an array index was easy. But we’ll have to do something more clever to translate a *word* (a string) into an array index…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YuLIJSmkIcaveoBk" class="graf-image" /></figure>Here’s one way we could do it:

Grab the number value for each character and add those up.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*viH0fNvJKep80ecH" class="graf-image" /></figure>The result is 429. But what if we only have *30* slots in our array? We’ll use a common trick for forcing a number into a specific range: the modulus operator (%). Modding our sum by 30 ensures we get a whole number that’s less than 30 (and at least 0):

429 \\: \\% \\: 30 = 9

Bam. That’ll get us from a word (or any string) to an array index.

This data structure is called a **hash table** or **hash map**. In our hash table, the *counts* are the **values** and the *words* (“lies, “ etc.) are the **keys** (analogous to the *indices* in an array). The process we used to translate a key into an array index is called a **hashing function**.

!\[A blank array except for a 20, labeled as the value, stored at index

1.  <span id="fadd">To the left the array is the word “lies,” labeled as the key, with an</span>

arrow pointing to the right at diamond with a question mark in the middle, labeled as the hashing function. The diamond points to the 9th index of the array.\](<a href="https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209" class="markup--anchor markup--p-anchor">https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209</a>)

The hashing functions used in modern systems get pretty complicated — the one we used here is a simplified example.

Note that our quick lookups are only in one direction — we can quickly get the value for a given key, but the only way to get the key for a given value is to walk through all the values and keys.

Same thing with arrays — we can quickly look up the value at a given index, but the only way to figure out the index for a given value is to walk through the whole array.

One problem — what if two keys hash to the same index in our array? Look at “lies” and “foes”:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FEGUBbShygDT_Xmp" class="graf-image" /></figure>They both sum up to 429! So of course they’ll have the same answer when we mod by 30:

429 \\: \\% \\: 30 = 9

So our hashing function gives us the same answer for “lies” and “foes.” This is called a **hash collision**. There are a few different strategies for dealing with them.

Here’s a common one: instead of storing the actual values in our array, let’s have each array slot hold a *pointer* to a *linked list* holding the counts for all the words that hash to that index:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FJ_oFYwm3xi5gvS6" class="graf-image" /></figure>One problem — how do we know which count is for “lies” and which is for “foes”? To fix this, we’ll store the *word* as well as the count in each linked list node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zUqqK4NJil6nCjlK" class="graf-image" /></figure>“But wait!” you may be thinking, “Now lookups in our hash table take time in the worst case, since we have to walk down a linked list.” That’s true! You could even say that in the worst case *every* key creates a hash collision, so our whole hash table *degrades to a linked list*.

In industry though, we usually wave our hands and say **collisions are rare enough that on *average* lookups in a hash table are time**. And there are fancy algorithms that keep the number of collisions low and keep the lengths of our linked lists nice and short.

But that’s sort of the tradeoff with hash tables. You get fast lookups by key…except *some* lookups could be slow. And of course, you only get those fast lookups in one direction — looking up the *key* for a given *value* still takes time

### Breadth-First Search (BFS) and Breadth-First Traversal

**Breadth-first search** (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore “ripple out” from the starting point.

Here’s a how a BFS would traverse this tree, starting with the root:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m463vT-gl3X8F6AS" class="graf-image" /></figure>We’d visit all the immediate children (all the nodes that’re one step away from our starting node):

<figure><img src="https://cdn-images-1.medium.com/max/800/0*_un0xsKDp2pgNPoM" class="graf-image" /></figure>Then we’d move on to all *those* nodes’ children (all the nodes that’re *two steps* away from our starting node):

<figure><img src="https://cdn-images-1.medium.com/max/800/0*b6vBOLT_H0Bpf2v4" class="graf-image" /></figure>And so on:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CtPtZ_RChr2hrfH8" class="graf-image" /></figure>Until we reach the end.

Breadth-first search is often compared with **depth-first search**.

Advantages:

-   <span id="123c">A BFS will find the **shortest path** between the starting point and</span>

any other reachable node. A depth-first search will not necessarily find the shortest path.

Disadvantages

-   <span id="a412">A BFS on a binary tree *generally* requires more memory than a DFS.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1ptw-98Yjj1scRX6" class="graf-image" /></figure>### Binary Search Tree

A **binary tree** is a **tree** where &lt;==(***every node has two or fewer children***)==&gt;.  
The children are usually called ***left*** and ***right***.

class BinaryTreeNode(object):

This lets us build a structure like this:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*jrVPHH5A60cni3qY" class="graf-image" /></figure>That particular example is special because every level of the tree is completely full. There are no “gaps.” We call this kind of tree “**perfect**.”

Binary trees have a few interesting properties when they’re perfect:

**Property 1: the number of total nodes on each “level” doubles as we move down the tree.**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*r1nTqbN_TJyaaT4L" class="graf-image" /></figure>**Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1).** In other words, about *half* of our nodes are on the last level.

&lt;==(*\*Let’s call the number of nodes n, \**)==&gt;

&lt;==(**\_**and the height of the tree h. **\_**)==&gt;

**h can also be thought of as the “number of levels.”**

If we had h, how could we calculate n?

Let’s just add up the number of nodes on each level!

If we zero-index the levels, the number of nodes on the xth level is exactly 2^x.

1.  <span id="937f">Level 0: 2⁰ nodes,</span>
2.  <span id="5630">2. Level 1: 2¹ nodes,</span>
3.  <span id="72ca">3. Level 2: 2² nodes,</span>
4.  <span id="fd85">4. Level 3: 2³ nodes,</span>
5.  <span id="1685">5. *etc*</span>

So our total number of nodes is:

**n = 2⁰ + 2¹ + 2² + 2³ + … + 2^{h-1}**

Why only up to 2^{h-1}?

Notice that we **started counting our levels at 0.**

-   <span id="7500">So if we have h levels in total,</span>
-   <span id="6752">the last level is actually the “h-1”-th level.</span>
-   <span id="da3a">That means the number of nodes on the last level is 2^{h-1}.</span>

But we can simplify.

**Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes**,

**so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall**.

-   <span id="d63d">We know the number of nodes on the last level is 2^{h-1},</span>
-   <span id="1c97">So:</span>

**n = 2^{h-1} \* 2–1  
n = 2^{h-1} \* 2¹ — 1  
n = 2^{h-1+1}- 1  
n = 2^{h} — 1**

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

The number system we usually use (the one you probably learned in elementary school) is called **base 10**, because each digit has *ten* possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0).

But computers don’t have digits with ten possible values. They have *bits* with *two* possible values. So they use **base 2** numbers.

Base 10 is also called **decimal**. Base 2 is also called **binary**.

To understand binary, let’s take a closer look at how decimal numbers work. Take the number “101” in decimal:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SeL92lcm_RTuG-32" class="graf-image" /></figure>Notice we have two “1”s here, but they don’t *mean* the same thing. The leftmost “1” *means* 100, and the rightmost “1” *means* 1. That’s because the leftmost “1” is in the hundreds place, while the rightmost “1” is in the ones place. And the “0” between them is in the tens place.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*5kyLwItFLJiwsDRY" class="graf-image" /></figure>**So this “101” in base 10 is telling us we have “1 hundred, 0 tens, and 1 one.”**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*BHTYqymE77CnzKpP" class="graf-image" /></figure>Notice how the *places* in base 10 (ones place, tens place, hundreds place, etc.) are *sequential powers of 10*:

-   <span id="8102">10⁰=1 \* 10¹=10 \* 10²=100 \* 10³=1000 \* etc.</span>

**The places in *binary* (base 2) are sequential powers of *2*:**

-   <span id="1ddc">2⁰=1 \* 2¹=2 \* 2²=4 \* 2³=8 \* etc.</span>

So let’s take that same “101” but this time let’s read it as a *binary* number:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*pKEnJ9JCGcMapiG4" class="graf-image" /></figure>Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bCIyxai2cNhILyxr" class="graf-image" /></figure>### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 4, 2021](https://medium.com/p/660256c2e4e3).

<a href="https://medium.com/@bryanguner/data-structures-under-the-hood-660256c2e4e3" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
