---
title: Data Structures 
weight: 0
excerpt: Asymptotic Notation is the hardware independent notation used to tell the time and space complexity of an algorithm. Meaning it's a standardized way of measuring how much memory an algorithm uses or how long it runs for given an input.
seo:
  title: 'Data Structures '
  description: 'In Javascript'
  robots: []
  extra: []
template: docs
---




### Resources (article content below):

#### Videos

-   [Abdul Bari: YouTubeChannel for Algorithms](https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=2&t=0s)
-   [Data Structures and algorithms](https://www.youtube.com/watch?v=lxja8wBwN0k&list=PLKKfKV1b9e8ps6dD3QA5KFfHdiWj9cB1s)
-   [Data Structures and algorithms Course](https://www.youtube.com/playlist?list=PLmGElG-9wxc9Us6IK6Qy-KHlG_F3IS6Q9)
-   [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms)
-   [Data structures by mycodeschool](https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P)Pre-requisite for this lesson is good understanding of pointers in C.
-   [MIT 6.006: Intro to Algorithms(2011)](https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb)
-   [Data Structures and Algorithms by Codewithharry](https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi)

#### Books

-   [Introduction to Algorithms](https://edutechlearners.com/download/Introduction_to_algorithms-3rd%20Edition.pdf) by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
-   [Competitive Programming 3](http://www.sso.sy/sites/default/files/competitive%20programming%203_1.pdf) by Steven Halim and Felix Halim
-   [Competitive Programmers Hand Book](https://cses.fi/book/book.pdf) Beginner friendly hand book for competitive programmers.
-   [Data Structures and Algorithms Made Easy](https://github.com/Amchuz/My-Data-Structures-and-Algorithms-Resources/raw/master/Books/Data%20Structures%20and%20Algorithms%20-%20Narasimha%20Karumanchi.pdf) by Narasimha Karumanchi
-   [Learning Algorithms Through Programming and Puzzle Solving](https://github.com/Amchuz/My-Data-Structures-and-Algorithms-Resources/raw/master/Books/Learning%20Algorithms%20Through%20Programming%20and%20Puzzle%20Solving.pdf) by Alexander Kulikov and Pavel Pevzner

#### Coding practice

-   [LeetCode](https://leetcode.com/)
-   [InterviewBit](https://www.interviewbit.com/)
-   [Codility](https://codility.com/)
-   [HackerRank](https://www.hackerrank.com/)
-   [Project Euler](https://projecteuler.net/)
-   [Spoj](https://spoj.com/)
-   [Google Code Jam practice problems](https://code.google.com/codejam/contests.html)
-   [HackerEarth](https://www.hackerearth.com/)
-   [Top Coder](https://www.topcoder.com/)
-   [CodeChef](https://www.codechef.com/)
-   [Codewars](https://www.codewars.com/)
-   [CodeSignal](https://codesignal.com/)
-   [CodeKata](http://codekata.com/)
-   [Firecode](https://www.firecode.io/)

#### Courses

-   [Master the Coding Interview: Big Tech (FAANG) Interviews](https://academy.zerotomastery.io/p/master-the-coding-interview-faang-interview-prep) Course by Andrei and his team.
-   [Common Python Data Structures](https://realpython.com/python-data-structures) Data structures are the fundamental constructs around which you build your programs. Each data structure provides a particular way of organizing data so it can be accessed efficiently, depending on your use case. Python ships with an extensive set of data structures in its standard library.
-   [Fork CPP](https://www.geeksforgeeks.org/fork-cpp-course-structure) A good course for beginners.
-   [EDU](https://codeforces.com/edu/course/2) Advanced course.
-   [C++ For Programmers](https://www.udacity.com/course/c-for-programmers--ud210) Learn features and constructs for C++.

#### Guides

-   [GeeksForGeeks --- A CS portal for geeks](http://www.geeksforgeeks.org/)
-   [Learneroo --- Algorithms](https://www.learneroo.com/subjects/8)
-   [Top Coder tutorials](http://www.topcoder.com/tc?d1=tutorials&d2=alg_index&module=Static)
-   [Infoarena training path](http://www.infoarena.ro/training-path) (RO)
-   Steven & Felix Halim --- [Increasing the Lower Bound of Programming Contests](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=118) (UVA Online Judge)

### ***space***

> *The space complexity represents the memory consumption of a data structure. As for most of the things in life, you can''t have it all, so it is with the data structures. You will generally need to trade some time for space or the other way around.*

### *time*

> *The time complexity for a data structure is in general more diverse than its space complexity.*

### *Several operations*

> *In contrary to algorithms, when you look at the time complexity for data structures you need to express it for several operations that you can do with data structures. It can be adding elements, deleting elements, accessing an element or even searching for an element.*

### *Dependent on data*

> *Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity.*

-   **The best-case complexity: when the data looks the best**
-   **The worst-case complexity: when the data looks the worst**
-   **The average-case complexity: when the data looks average**

### Big O notation

The complexity is usually expressed with the Big O notation. The wikipedia page about this subject is pretty complex but you can find here a good summary of the different complexity for the most famous data structures and sorting algorithms.

### The Array data structure

![](https://cdn-images-1.medium.com/max/800/0*Qk3UYgeqXamRrFLR.gif)

### Definition

An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. From Wikipedia

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

*Complexity*\
*Average*\
*Access Search Insertion Deletion*

O(1) O(n) O(1) O(n)
```js
  class ArrayADT { 
  constructor() { 
  this.array = []; 
  } 
   
  add( data ) { 
  this.array.push( data ); 
  } 
   
  remove( data ) { 
  this.array = this.array.filter( ( current ) => current !== data ); 
  } 
   
  search( data ) { 
  const foundIndex = this.array.indexOf( data ); 
  if ( foundIndex === -1 ) { 
  return foundIndex; 
  } 
   
  return null; 
  } 
   
  getAtIndex( index ) { 
  return this.array[ index ]; 
  } 
   
  length() { 
  return this.array.length; 
  } 
   
  print() { 
  console.log( this.array.join( ' ' ) ); 
  } 
  } 
   
  const array = new ArrayADT(); 
  console.log( 'const array = new ArrayADT();: ', array ); 
  console.log( '-------------------------------' ); 
   
  console.log( 'array.add(1): ', array.add( 1 ) ); 
  array.add( 3 ); 
  array.add( 4 ); 
  console.log( 
  'array.add(2);: ', 
  array.add( 2 ), 
  'array.add(3);', 
  array.add( 3 ), 
  'array.add(4); ', 
  array.add( 4 ) 
  ); 
   
  console.log( '-------------------------------' ); 
  array.print(); 
  console.log( '-------------------------------' ); 
   
  console.log( 'search 3 gives index 2:', array.search( 3 ) ); 
  console.log( '-------------------------------' ); 
   
  console.log( 'getAtIndex 2 gives 3:', array.getAtIndex( 2 ) ); 
  console.log( '-------------------------------' ); 
   
  console.log( 'length is 4:', array.length() ); 
  console.log( '-------------------------------' ); 
   
  array.remove( 3 ); 
  array.print(); 
  console.log( '-------------------------------' ); 
   
  array.add( 5 ); 
  array.add( 5 ); 
  array.print(); 
  console.log( '-------------------------------' ); 
   
  array.remove( 5 ); 
  array.print(); 
  console.log( '-------------------------------' ); 
  ```
  /* 
  ~ final : (master) node 01-array.js 
  ```js
  const array = new ArrayADT();: ArrayADT { array: [] } 
  ------------------------------- 
  array.add(1): undefined 
  array.add(2);: undefined array.add(3); undefined array.add(4); undefined 
  ------------------------------- 
  1 3 4 2 3 4 
  ------------------------------- 
  search 3 gives index 2: null 
  ------------------------------- 
  getAtIndex 2 gives 3: 4 
  ------------------------------- 
  length is 4: 6 
  ------------------------------- 
  1 4 2 4 
  ------------------------------- 
  1 4 2 4 5 5 
  ------------------------------- 
  1 4 2 4 
  ------------------------------- 
  ~ final : (master) 
  */ 
```
[view raw](https://gist.github.com/bgoonz/6d82ba2d67954922ddad6607f0ae18d9/raw/0dcce6cc5a99edd9d4889ea49add07c5861a3b5d/ArrayADT.js)[ArrayADT.js ](https://gist.github.com/bgoonz/6d82ba2d67954922ddad6607f0ae18d9#file-arrayadt-js)hosted with ❤ by [GitHub](https://github.com/)

![](https://cdn-images-1.medium.com/max/800/1*-BJ2hU-CZO2kuzu4x5a53g.png)

indexvalue0 ... this is the first value, stored at zero position

1.  The index of an array **runs in sequence**

2\. This could be useful for storing data that are required to be ordered, such as rankings or queues

3\. In JavaScript, array''s value could be mixed; meaning value of each index could be of different data, be it String, Number or even Objects

  // 1. Creating Arrays 
  let firstArray = [ "a", "b", "c" ]; 
  let secondArray = [ "d", "e", "f" ]; 
   
  // 2. Access an Array Item 
  console.log( firstArray[ 0 ] ); // Results: "a" 
   
  // 3. Loop over an Array 
  firstArray.forEach( (item, index, array) => { 
  console.log( item, index ); 
  } ); 
  // Results: 
  // a 0 
  // b 1 
  // c 2 
   
  // 4. Add new item to END of array 
  secondArray.push( 'g' ); 
  console.log( secondArray ); 
  // Results: ["d","e","f", "g"] 
   
  // 5. Remove item from END of array 
  secondArray.pop(); 
  console.log( secondArray ); 
  // Results: ["d","e","f"] 
   
  // 6. Remove item from FRONT of array 
  secondArray.shift(); 
  console.log( secondArray ); 
  // Results: ["e","f"] 
   
  // 7. Add item to FRONT of array 
  secondArray.unshift( "d" ); 
  console.log( secondArray ); 
  // Results: ["d","e","f"] 
   
  // 8. Find INDEX of an item in array 
  let position = secondArray.indexOf( 'f' ); 
  // Results: 2 
   
  // 9. Remove Item by Index Position 
  secondArray.splice( position, 1 ); 
  console.log( secondArray ); 
  // Note, the second argument, in this case "1", 
  // represent the number of array elements to be removed 
  // Results: ["d","e"] 
   
  // 10. Copy an Array 
  let shallowCopy = secondArray.slice(); 
  console.log( secondArray ); 
  console.log( shallowCopy ); 
  // Results: ShallowCopy === ["d","e"] 
   
  // 11. JavaScript properties that BEGIN with a digit MUST be accessed using bracket notation 
  renderer ['.3d'].setTexture( model, 'character.png' ); // a syntax error 
  renderer[ '3d' ].setTexture( model, 'character.png' ); // works properly 
   
   
  // 12. Combine two Arrays 
  let thirdArray = firstArray.concat( secondArray ); 
  console.log( thirdArray ); 
  // ["a","b","c", "d", "e"]; 
   
  // 13. Combine all Array elements into a string 
  console.log( thirdArray.join() ); // Results: a,b,c,d,e 
  console.log( thirdArray.join( '' ) ); // Results: abcde 
  console.log( thirdArray.join( '-' ) ); // Results: a-b-c-d-e 
   
  // 14. Reversing an Array (in place, i.e. destructive) 
  console.log( thirdArray.reverse() ); // ["e", "d", "c", "b", "a"] 
   
  // 15. sort 
  let unsortedArray = [ "Alphabet", "Zoo", "Products", "Computer Science", "Computer" ]; 
  console.log( unsortedArray.sort() ); 
  // Results: ["Alphabet", "Computer", "Computer Science", "Products", "Zoo" ] 

[view raw](https://gist.github.com/bgoonz/7065a52f96e241439d2cbc4137b6e1d7/raw/49249544007550b826fb023292e6016eb73bb84f/arrays.js)[arrays.js ](https://gist.github.com/bgoonz/7065a52f96e241439d2cbc4137b6e1d7#file-arrays-js)hosted with ❤ by [GitHub](https://github.com/)

### 2\. Objects

Think of objects as a logical grouping of a bunch of properties.

Properties could be some variable that it''s storing or some methods that it''s using.

I also visualize an object as a table.

The main difference is that object''s "index" need not be numbers and is not necessarily sequenced.

![](https://cdn-images-1.medium.com/max/1200/1*KVZkD2zrgEa_47igW8Hq8g.png)

   
  // 16. Creating an Object 
   ```js
  let newObj = { 
  name: "I'm an object", 
  values: [ 1, 10, 11, 20 ], 
  others: '', 
  '1property': 'example of property name starting with digit', 
  }; 
   
  // 17. Figure out what keys/properties are in an object 
  console.log( Object.keys( newObj ) ); 
  // Results: [ 'name', 'values', 'others', '1property' ] 
   
  // 18. Show all values stored in the object 
  console.log( Object.values( newObj ) ); 
   
  // Results: 
  // [ 'I\'m an object', 
  // [ 1, 10, 11, 20 ], 
  // '', 
  // 'example of property name starting with digit' ] 
   
  // 19. Show all key and values of the object 
  for ( let [ key, value ] of Object.entries( newObj ) ) { 
  console.log( `${key}: ${value}` ); 
  } 
  // Results: 
  // name: I'm an object 
  // values: 1,10,11,20 
  // others: 
  // 1property: example of property name starting with digit 
   
  // 20. Accessing Object's Properties 
  // Two different ways to access properties, both produce same results 
  console.log( newObj.name ); 
  console.log( newObj[ 'name' ] ); 
   
  // But if the property name starts with a digit, 
  // we CANNOT use dot notation 
  console.log( newObj[ '1property' ] ); 
   
  // 21. Adding a Method to an Object 
  newObj.helloWorld = () => { 
  console.log( 'Hello World from inside an object!' ); 
  }; 
   
  // 22. Invoking an Object's Method 
  newObj.helloWorld(); 
```
[view raw](https://gist.github.com/bgoonz/ed42c5c0f3a1a7757b33b437a9ad7129/raw/7e120a8332ec848fe45ed14bb6974ee9b71ebb25/object.js)[object.js ](https://gist.github.com/bgoonz/ed42c5c0f3a1a7757b33b437a9ad7129#file-object-js)hosted with ❤ by [GitHub](https://github.com/)

### The Hash Table

![](https://cdn-images-1.medium.com/max/800/0*avbxLAFocSV6vsl5.gif)

![](https://cdn-images-1.medium.com/max/800/0*3GJiRoLyEoZ_aIlO)

### *Definition*

> *A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. From Wikipedia*

Hash Tables are considered the more efficient data structure for lookup and for this reason, they are widely used.

Complexity\
Average\
Access Search Insertion Deletion

-   O(1) O(1) O(1)

> *The code*

Note, here I am storing another object for every hash in my Hash Table.
```js
  class HashTable { 
  constructor( size ) { 
  this.values = {}; 
  this.numberOfValues = 0; 
  this.size = size; 
  } 
  add( key, value ) { 
  let hash = this.calculateHash( key ); 
  if ( !this.values.hasOwnProperty( hash ) ) { 
  this.values[ hash ] = {}; 
  } 
  if ( !this.values[ hash ].hasOwnProperty( key ) ) { 
  this.numberOfValues++; 
  } 
  this.values[ hash ][ key ] = value; 
  } 
  remove( key ) { 
  let hash = this.calculateHash( key ); 
  if ( 
  this.values.hasOwnProperty( hash ) && 
  this.values[ hash ].hasOwnProperty( key ) 
  ) { 
  delete this.values[ hash ][ key ]; 
  this.numberOfValues--; 
  } 
  } 
  calculateHash( key ) { 
  return key.toString().length % this.size; 
  } 
  search( key ) { 
  let hash = this.calculateHash( key ); 
  if ( 
  this.values.hasOwnProperty( hash ) && 
  this.values[ hash ].hasOwnProperty( key ) 
  ) { 
  return this.values[ hash ][ key ]; 
  } else { 
  return null; 
  } 
  } 
  length() { 
  return this.numberOfValues; 
  } 
  print() { 
  let string = ''; 
  for ( let value in this.values ) { 
  for ( let key in this.values[ value ] ) { 
  string += this.values[ value ][ key ] + ' '; 
  } 
  } 
  console.log( string.trim() ); 
  } 
  } 
  let hashTable = new HashTable( 3 ); 
  hashTable.add( 'first', 1 ); 
  hashTable.add( 'second', 2 ); 
  hashTable.add( 'third', 3 ); 
  hashTable.add( 'fourth', 4 ); 
  hashTable.add( 'fifth', 5 ); 
  hashTable.print(); // => 2 4 1 3 5 
  console.log( 'length gives 5:', hashTable.length() ); // => 5 
  console.log( 'search second gives 2:', hashTable.search( 'second' ) ); // => 2 
  hashTable.remove( 'fourth' ); 
  hashTable.remove( 'first' ); 
  hashTable.print(); // => 2 3 5 
  console.log( 'length gives 3:', hashTable.length() ); // => 3 
  /* 
  ~ js-files : (master) node hash.js 
  2 4 1 3 5 
  length gives 5: 5 
  search second gives 2: 2 
  2 3 5 
  length gives 3: 3 
  */ 
```
[view raw](https://gist.github.com/bgoonz/b5d026f60e899b6e8e0ab5ad9bf3bb82/raw/0177cba4aadd80aa93b70832f8d39b953565c77f/hashtable.js)[hashtable.js ](https://gist.github.com/bgoonz/b5d026f60e899b6e8e0ab5ad9bf3bb82#file-hashtable-js)hosted with ❤ by [GitHub](https://github.com/)

### The Set

### Sets

Sets are pretty much what it sounds like. It''s the same intuition as Set in Mathematics. I visualize Sets as Venn Diagrams.

![](https://cdn-images-1.medium.com/max/800/0*AIQljh9p8Baw9TnE.png)
```js
  // 23. Creating a new Set 
  let newSet = new Set(); 
   
  // 24. Adding new elements to a set 
  newSet.add( 1 ); // Set[1] 
  newSet.add( 'text' ); // Set[1, "text"] 
   
  // 25. Check if element is in set 
  newSet.has( 1 ); // true 
   
  // 24. Check size of set 
  console.log( newSet.size ); // Results: 2 
   
  // 26. Delete element from set 
  newSet.delete( 1 ); // Set["text"] 
   
  // 27. Set Operations: isSuperSet 
  function isSuperset( set, subset ) { 
  for ( let elem of subset ) { 
  if ( !set.has( elem ) ) { 
  return false; 
  } 
  } 
  return true; 
  } 
  // 28. Set Operations: union 
  function union( setA, setB ) { 
  let _union = new Set( setA ); 
  for ( let elem of setB ) { 
  _union.add( elem ); 
  } 
  return _union; 
  } 
   
  // 29. Set Operations: intersection 
  function intersection( setA, setB ) { 
  let _intersection = new Set(); 
  for ( let elem of setB ) { 
  if ( setA.has( elem ) ) { 
  _intersection.add( elem ); 
  } 
  } 
  return _intersection; 
  } 
  // 30. Set Operations: symmetricDifference 
  function symmetricDifference( setA, setB ) { 
  let _difference = new Set( setA ); 
  for ( let elem of setB ) { 
  if ( _difference.has( elem ) ) { 
  _difference.delete( elem ); 
  } else { 
  _difference.add( elem ); 
  } 
  } 
  return _difference; 
  } 
  // 31. Set Operations: difference 
  function difference( setA, setB ) { 
  let _difference = new Set( setA ); 
  for ( let elem of setB ) { 
  _difference.delete( elem ); 
  } 
  return _difference; 
  } 
   
  // Examples 
  let setA = new Set( [ 1, 2, 3, 4 ] ); 
  let setB = new Set( [ 2, 3 ] ); 
  let setC = new Set( [ 3, 4, 5, 6 ] ); 
   
  console.log( isSuperset( setA, setB ) ); // => true 
  console.log( union( setA, setC ) ); // => Set [1, 2, 3, 4, 5, 6] 
  console.log( intersection( setA, setC ) ); // => Set [3, 4] 
  console.log( symmetricDifference( setA, setC ) ); // => Set [1, 2, 5, 6] 
  console.log( difference( setA, setC ) ); // => Set [1, 2] 
```
[view raw](https://gist.github.com/bgoonz/94905bc0d9f1feb9954c3442761973e7/raw/42e5a12c83e29e15514b5df33aa08c129292e439/native-set.js)[native-set.js ](https://gist.github.com/bgoonz/94905bc0d9f1feb9954c3442761973e7#file-native-set-js)hosted with ❤ by [GitHub](https://github.com/)

![](https://cdn-images-1.medium.com/max/800/0*gOE33ANZP2ujbjIG)

### *Definition*

> *A Set is an abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite Set. From Wikipedia*

The Set data structure is usually used to test whether elements belong to set of values. Rather then only containing elements, Sets are more used to perform operations on multiple values at once with methods such as union, intersect, etc...

Complexity\
Average\
Access Search Insertion Deletion

-   O(n) O(n) O(n)

> *The code*
```js
  class Set { 
  constructor() { 
  this.values = []; 
  this.numberOfValues = 0; 
  } 
   
  add(value) { 
  if ( !~this.values.indexOf( value ) ) { 
  this.values.push( value ); 
  this.numberOfValues++; 
  } 
  } 
   
  remove(value) { 
  let index = this.values.indexOf( value ); 
  if ( ~index ) { 
  this.values.splice( index, 1 ); 
  this.numberOfValues--; 
  } 
  } 
   
  contains(value) { 
  return this.values.indexOf( value ) !== -1; 
  } 
   
  union(set) { 
  let newSet = new Set(); 
  set.values.forEach( value => { 
  newSet.add( value ); 
  } ); 
  this.values.forEach( value => { 
  newSet.add( value ); 
  } ); 
  return newSet; 
  } 
   
  intersect(set) { 
  let newSet = new Set(); 
  this.values.forEach( value => { 
  if ( set.contains( value ) ) { 
  newSet.add( value ); 
  } 
  } ); 
  return newSet; 
  } 
   
  difference(set) { 
  let newSet = new Set(); 
  this.values.forEach( value => { 
  if ( !set.contains( value ) ) { 
  newSet.add( value ); 
  } 
  } ); 
  return newSet; 
  } 
   
  isSubset(set) { 
  return set.values.every( function ( value ) { 
  return this.contains( value ); 
  }, this ); 
  } 
   
  length() { 
  return this.numberOfValues; 
  } 
   
  print() { 
  console.log( this.values.join( ' ' ) ); 
  } 
  } 
   
   
  let set = new Set(); 
  set.add( 1 ); 
  set.add( 2 ); 
  set.add( 3 ); 
  set.add( 4 ); 
  set.print(); // => 1 2 3 4 
  set.remove( 3 ); 
  set.print(); // => 1 2 4 
  console.log( 'contains 4 is true:', set.contains( 4 ) ); // => true 
  console.log( 'contains 3 is false:', set.contains( 3 ) ); // => false 
  console.log( '---' ); 
  let set1 = new Set(); 
  set1.add( 1 ); 
  set1.add( 2 ); 
  let set2 = new Set(); 
  set2.add( 2 ); 
  set2.add( 3 ); 
  let set3 = set2.union( set1 ); 
  set3.print(); // => 1 2 3 
  let set4 = set2.intersect( set1 ); 
  set4.print(); // => 2 
  let set5 = set.difference( set3 ); // 1 2 4 diff 1 2 3 
  set5.print(); // => 4 
  let set6 = set3.difference( set ); // 1 2 3 diff 1 2 4 
  set6.print(); // => 3 
  console.log( 'set1 subset of set is true:', set.isSubset( set1 ) ); // => true 
  console.log( 'set2 subset of set is false:', set.isSubset( set2 ) ); // => false 
  console.log( 'set1 length gives 2:', set1.length() ); // => 2 
  console.log( 'set3 length gives 3:', set3.length() ); // => 3 
```
[view raw](https://gist.github.com/bgoonz/d5fcc5173fc13774b72544ccc1df6a98/raw/9f2ffaee5894609a85e50aedab0ea33b1b52c15e/setADS.js)[setADS.js ](https://gist.github.com/bgoonz/d5fcc5173fc13774b72544ccc1df6a98#file-setads-js)hosted with ❤ by [GitHub](https://github.com/)

### The Singly Linked List

![](https://cdn-images-1.medium.com/max/800/0*fLs64rV-Xq19aVCA.gif)

### *Definition*

> *A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence.*

Linked Lists are among the simplest and most common data structures because it allows for efficient insertion or removal of elements from any position in the sequence.

Complexity\
Average\
Access Search Insertion Deletion\
O(n) O(n) O(1) O(1)

> *The code*

 ---
```js
  function Node( data ) { 
  this.data = data; 
  this.next = null; 
  } 
   
  class SinglyLinkedList { 
  constructor() { 
  this.head = null; 
  this.tail = null; 
  this.numberOfValues = 0; 
  } 
   
  add(data) { 
  let node = new Node( data ); 
  if ( !this.head ) { 
  this.head = node; 
  this.tail = node; 
  } else { 
  this.tail.next = node; 
  this.tail = node; 
  } 
  this.numberOfValues++; 
  } 
   
  remove(data) { 
  let previous = this.head; 
  let current = this.head; 
  while ( current ) { 
  if ( current.data === data ) { 
  if ( current === this.head ) { 
  this.head = this.head.next; 
  } 
  if ( current === this.tail ) { 
  this.tail = previous; 
  } 
  previous.next = current.next; 
  this.numberOfValues--; 
  } else { 
  previous = current; 
  } 
  current = current.next; 
  } 
  } 
   
  insertAfter(data, toNodeData) { 
  let current = this.head; 
  while ( current ) { 
  if ( current.data === toNodeData ) { 
  let node = new Node( data ); 
  if ( current === this.tail ) { 
  this.tail.next = node; 
  this.tail = node; 
  } else { 
  node.next = current.next; 
  current.next = node; 
  } 
  this.numberOfValues++; 
  } 
  current = current.next; 
  } 
  } 
   
  traverse(fn) { 
  let current = this.head; 
  while ( current ) { 
  if ( fn ) { 
  fn( current ); 
  } 
  current = current.next; 
  } 
  } 
   
  length() { 
  return this.numberOfValues; 
  } 
   
  print() { 
  let string = ''; 
  let current = this.head; 
  while ( current ) { 
  string += current.data + ' '; 
  current = current.next; 
  } 
  console.log( string.trim() ); 
  } 
  } 
   
  let singlyLinkedList = new SinglyLinkedList(); 
  singlyLinkedList.print(); // => '' 
  singlyLinkedList.add( 1 ); 
  singlyLinkedList.add( 2 ); 
  singlyLinkedList.add( 3 ); 
  singlyLinkedList.add( 4 ); 
  singlyLinkedList.print(); // => 1 2 3 4 
  console.log( 'length is 4:', singlyLinkedList.length() ); // => 4 
  singlyLinkedList.remove( 3 ); // remove value 
  singlyLinkedList.print(); // => 1 2 4 
  singlyLinkedList.remove( 9 ); // remove non existing value 
  singlyLinkedList.print(); // => 1 2 4 
  singlyLinkedList.remove( 1 ); // remove head 
  singlyLinkedList.print(); // => 2 4 
  singlyLinkedList.remove( 4 ); // remove tail 
  singlyLinkedList.print(); // => 2 
  console.log( 'length is 1:', singlyLinkedList.length() ); // => 1 
  singlyLinkedList.add( 6 ); 
  singlyLinkedList.print(); // => 2 6 
  singlyLinkedList.insertAfter( 3, 2 ); 
  singlyLinkedList.print(); // => 2 3 6 
  singlyLinkedList.insertAfter( 4, 3 ); 
  singlyLinkedList.print(); // => 2 3 4 6 
  singlyLinkedList.insertAfter( 5, 9 ); // insertAfter a non existing node 
  singlyLinkedList.print(); // => 2 3 4 6 
  singlyLinkedList.insertAfter( 5, 4 ); 
  singlyLinkedList.insertAfter( 7, 6 ); // insertAfter the tail 
  singlyLinkedList.print(); // => 2 3 4 5 6 7 
  singlyLinkedList.add( 8 ); // add node with normal method 
  singlyLinkedList.print(); // => 2 3 4 5 6 7 8 
  console.log( 'length is 7:', singlyLinkedList.length() ); // => 7 
  singlyLinkedList.traverse( node => { 
  node.data = node.data + 10; 
  } ); 
  singlyLinkedList.print(); // => 12 13 14 15 16 17 18 
  singlyLinkedList.traverse( node => { 
  console.log( node.data ); 
  } ); // => 12 13 14 15 16 17 18 
  console.log( 'length is 7:', singlyLinkedList.length() ); // => 7 
```

[view raw](https://gist.github.com/bgoonz/50b1eedffde6353523e0909bcb903330/raw/f0304ea395db26b45a4d3ce2229eb183feaaf41e/singly-linked-list.js)[singly-linked-list.js ](https://gist.github.com/bgoonz/50b1eedffde6353523e0909bcb903330#file-singly-linked-list-js)hosted with ❤ by [GitHub](https://github.com/)

### The Doubly Linked List

![](https://cdn-images-1.medium.com/max/800/0*TQXiR-L_itiG3WP-.gif)

### *Definition*

> *A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. From Wikipedia*

Having two node links allow traversal in either direction but adding or removing a node in a doubly linked list requires changing more links than the same operations on a Singly Linked List.

Complexity\
Average\
Access Search Insertion Deletion\
O(n) O(n) O(1) O(1)

> *The code*
```js
  class Node { 
  constructor(data) { 
  this.data = data; 
  this.previous = null; 
  this.next = null; 
  } 
  } 
  class DoublyLinkedList { 
  constructor() { 
  this.head = null; 
  this.tail = null; 
  this.numberOfValues = 0; 
  } 
  add(data) { 
  let node = new Node(data); 
  if (!this.head) { 
  this.head = node; 
  this.tail = node; 
  } else { 
  node.previous = this.tail; 
  this.tail.next = node; 
  this.tail = node; 
  } 
  this.numberOfValues++; 
  } 
  remove(data) { 
  let current = this.head; 
  while (current) { 
  if (current.data === data) { 
  if (current === this.head && current === this.tail) { 
  this.head = null; 
  this.tail = null; 
  } else if (current === this.head) { 
  this.head = this.head.next; 
  this.head.previous = null; 
  } else if (current === this.tail) { 
  this.tail = this.tail.previous; 
  this.tail.next = null; 
  } else { 
  current.previous.next = current.next; 
  current.next.previous = current.previous; 
  } 
  this.numberOfValues--; 
  } 
  current = current.next; 
  } 
  } 
  insertAfter(data, toNodeData) { 
  let current = this.head; 
  while (current) { 
  if (current.data === toNodeData) { 
  let node = new Node(data); 
  if (current === this.tail) { 
  this.add(data); 
  } else { 
  current.next.previous = node; 
  node.previous = current; 
  node.next = current.next; 
  current.next = node; 
  this.numberOfValues++; 
  } 
  } 
  current = current.next; 
  } 
  } 
  traverse(fn) { 
  let current = this.head; 
  while (current) { 
  if (fn) { 
  fn(current); 
  } 
  current = current.next; 
  } 
  } 
  traverseReverse(fn) { 
  let current = this.tail; 
  while (current) { 
  if (fn) { 
  fn(current); 
  } 
  current = current.previous; 
  } 
  } 
  length() { 
  return this.numberOfValues; 
  } 
  print() { 
  let string = ""; 
  let current = this.head; 
  while (current) { 
  string += current.data + " "; 
  current = current.next; 
  } 
  console.log(string.trim()); 
  } 
  } 
  let doublyLinkedList = new DoublyLinkedList(); 
  doublyLinkedList.print(); // => '' 
  doublyLinkedList.add(1); 
  doublyLinkedList.add(2); 
  doublyLinkedList.add(3); 
  doublyLinkedList.add(4); 
  doublyLinkedList.print(); // => 1 2 3 4 
  console.log("length is 4:", doublyLinkedList.length()); // => 4 
  doublyLinkedList.remove(3); // remove value 
  doublyLinkedList.print(); // => 1 2 4 
  doublyLinkedList.remove(9); // remove non existing value 
  doublyLinkedList.print(); // => 1 2 4 
  doublyLinkedList.remove(1); // remove head 
  doublyLinkedList.print(); // => 2 4 
  doublyLinkedList.remove(4); // remove tail 
  doublyLinkedList.print(); // => 2 
  console.log("length is 1:", doublyLinkedList.length()); // => 1 
  doublyLinkedList.remove(2); // remove tail, the list should be empty 
  doublyLinkedList.print(); // => '' 
  console.log("length is 0:", doublyLinkedList.length()); // => 0 
  doublyLinkedList.add(2); 
  doublyLinkedList.add(6); 
  doublyLinkedList.print(); // => 2 6 
  doublyLinkedList.insertAfter(3, 2); 
  doublyLinkedList.print(); // => 2 3 6 
  doublyLinkedList.traverseReverse(function (node) { 
  console.log(node.data); 
  }); 
  doublyLinkedList.insertAfter(4, 3); 
  doublyLinkedList.print(); // => 2 3 4 6 
  doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node 
  doublyLinkedList.print(); // => 2 3 4 6 
  doublyLinkedList.insertAfter(5, 4); 
  doublyLinkedList.insertAfter(7, 6); // insertAfter the tail 
  doublyLinkedList.print(); // => 2 3 4 5 6 7 
  doublyLinkedList.add(8); // add node with normal method 
  doublyLinkedList.print(); // => 2 3 4 5 6 7 8 
  console.log("length is 7:", doublyLinkedList.length()); // => 7 
  doublyLinkedList.traverse(function (node) { 
  node.data = node.data + 10; 
  }); 
  doublyLinkedList.print(); // => 12 13 14 15 16 17 18 
  doublyLinkedList.traverse(function (node) { 
  console.log(node.data); 
  }); // => 12 13 14 15 16 17 18 
  console.log("length is 7:", doublyLinkedList.length()); // => 7 
  doublyLinkedList.traverseReverse(function (node) { 
  console.log(node.data); 
  }); // => 18 17 16 15 14 13 12 
  doublyLinkedList.print(); // => 12 13 14 15 16 17 18 
  console.log("length is 7:", doublyLinkedList.length()); // => 7 
  /* 
  ~ js-files : (master) node double-linked-list.js 
  1 2 3 4 
  length is 4: 4 
  1 2 4 
  1 2 4 
  2 4 
  2 
  length is 1: 1 
  length is 0: 0 
  2 6 
  2 3 6 
  6 
  3 
  2 
  2 3 4 6 
  2 3 4 6 
  2 3 4 5 6 7 
  2 3 4 5 6 7 8 
  length is 7: 7 
  12 13 14 15 16 17 18 
  12 
  13 
  14 
  15 
  16 
  17 
  18 
  length is 7: 7 
  18 
  17 
  16 
  15 
  14 
  13 
  12 
  12 13 14 15 16 17 18 
  length is 7: 7 
  ~ js-files : (master) 
  */ 
```
[view raw](https://gist.github.com/bgoonz/60a1ac977059e4dd5827c34fd0dbdcc4/raw/cc9a8a8930441c438469ccd8d9f1ffb309d15af2/doubly-linked-list.js)[doubly-linked-list.js ](https://gist.github.com/bgoonz/60a1ac977059e4dd5827c34fd0dbdcc4#file-doubly-linked-list-js)hosted with ❤ by [GitHub](https://github.com/)

### The Stack

![](https://cdn-images-1.medium.com/max/1200/0*qsjYW-Lvfo22ecLE.gif)

### *Definition*

> *A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out). From Wikipedia*

A Stack often has a third method peek which allows to check the last pushed element without popping it.

Complexity\
Average\
Access Search Insertion Deletion\
O(n) O(n) O(1) O(1)

> *The code*

  /* Stack data-structure. It's work is based on the LIFO method (last-IN-first-OUT). 
  * It means that elements added to the stack are placed on the top and only the 
  * last element (from the top) can be reached. After we get access to the last 
  * element, he pops from the stack. 
  * This is a class-based implementation of a Stack. It provides functions 
  * 'push' - to add an element, 'pop' - to remove an element from the top. 
  * Also it implements 'length', 'last' and 'isEmpty' properties and 
  * static isStack method to check is an object the instance of Stack class. 
  */ 
   ```js
  // Class declaration 
  class Stack { 
  constructor() { 
  this.stack = [] 
  this.top = 0 
  } 
   
  // Adds a value to the end of the Stack 
  push( newValue ) { 
  this.stack.push( newValue ) 
  this.top += 1 
  } 
   
  // Returns and removes the last element of the Stack 
  pop() { 
  if ( this.top !== 0 ) { 
  this.top -= 1 
  return this.stack.pop() 
  } 
  throw new Error( 'Stack Underflow' ) 
  } 
   
  // Returns the number of elements in the Stack 
  get length() { 
  return this.top 
  } 
   
  // Returns true if stack is empty, false otherwise 
  get isEmpty() { 
  return this.top === 0 
  } 
   
  // Returns the last element without removing it 
  get last() { 
  if ( this.top !== 0 ) { 
  return this.stack[ this.stack.length - 1 ] 
  } 
  return null 
  } 
   
  // Checks if an object is the instance os the Stack class 
  static isStack( el ) { 
  return el instanceof Stack 
  } 
  } 
  const newStack = new Stack() 
  console.log( 'Is it a Stack?,', Stack.isStack( newStack ) ) 
  console.log( 'Is stack empty? ', newStack.isEmpty ) 
  newStack.push( 'Hello world' ) 
  newStack.push( 42 ) 
  newStack.push( { 
  a: 6, 
  b: 7 
  } ) 
  console.log( 'The length of stack is ', newStack.length ) 
  console.log( 'Is stack empty? ', newStack.isEmpty ) 
  console.log( 'Give me the last one ', newStack.last ) 
  console.log( 'Pop the latest ', newStack.pop() ) 
  console.log( 'Pop the latest ', newStack.pop() ) 
  console.log( 'Pop the latest ', newStack.pop() ) 
  console.log( 'Is stack empty? ', newStack.isEmpty ) 
  /* 
  | 19: 26: 04 | bryan @LAPTOP - 9 LGJ3JGS: [ Stack ] Stack_exitstatus: 0 __________________________________________________________o > 
   
  node StackES6.js 
  Is it a Stack ? , true 
  Is stack empty ? true 
  The length of stack is 3 
  Is stack empty ? false 
  Give me the last one { 
  a: 6, 
  b: 7 
  } 
  Pop the latest { 
  a: 6, 
  b: 7 
  } 
  Pop the latest 42 
  Pop the latest Hello world 
  Is stack empty ? true | 
  19 : 26: 10 | bryan @LAPTOP - 9 LGJ3JGS: [ Stack ] Stack_exitstatus: 0 __________________________________________________________o > 
  */ 
```
[view raw](https://gist.github.com/bgoonz/a3c27a5126ed87a5f708b11bb3032994/raw/1ed13120c7da9e3fd4e7edd4808daf6679be9c45/stack.js)[stack.js ](https://gist.github.com/bgoonz/a3c27a5126ed87a5f708b11bb3032994#file-stack-js)hosted with ❤ by [GitHub](https://github.com/)

### The Queue

![](https://cdn-images-1.medium.com/max/800/0*YvfuX5tKP7-V0p7v.gif)

### *Definition*

> *A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the Queue will be the first one to be removed.*

As for the Stack data structure, a peek operation is often added to the Queue data structure. It returns the value of the front element without dequeuing it.

Complexity\
Average\
Access Search Insertion Deletion\
O(n) O(n) O(1) O(n)

> *The code*

```
```js
  class Node { 
  constructor(value) { 
  this.value = value; 
  this.next = null; 
  } 
  } 
   
  class Queue { 
  constructor(front = null, back = null, length = 0) { 
  this.front = front; 
  this.back = back; 
  this.length = length; 
  } 
   
  enqueue(input) { 
  if (this.length === 0) { 
  this.front = new Node(input); 
  this.back = this.front; 
  this.length++; 
  } else if (this.length >= 1) { 
  let prevBack = this.back; 
  this.back = new Node(input); 
  prevBack.next = this.back; 
  this.length++; 
  } 
  return this.length; 
  } 
   
  dequeue() { 
  if (this.length !== 0) { 
  let tempFront = this.front.value; 
  if (this.length === 1) { 
  this.front = null; 
  this.back = null; 
  this.length--; 
  } else { 
  this.front = this.front.next; 
  this.length--; 
  } 
  return tempFront; 
  } else { 
  return null; 
  } 
  } 
   
  size() { 
  return this.length; 
  } 
  } 
```
[view raw](https://gist.github.com/bgoonz/af7cddac66b05b47f797a539929e8976/raw/c6ffc2afb87c54018de60b8b84b6bbeba0ebd35d/queue.js)[queue.js ](https://gist.github.com/bgoonz/af7cddac66b05b47f797a539929e8976#file-queue-js)hosted with ❤ by [GitHub](https://github.com/)

### The Tree

![](https://cdn-images-1.medium.com/max/800/0*yUiQ-NaPKeLQnN7n)

### *Definition*

> *A Tree is a widely used data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node. A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root node. From Wikipedia*

Complexity\
Average\
Access Search Insertion Deletion\
O(n) O(n) O(n) O(n)\
To get a full overview of the time and space complexity of the Tree data structure, have a look to this excellent Big O cheat sheet.

![](https://cdn-images-1.medium.com/max/800/1*DCdQiB6XqBJCrFRz12BwqA.png)

> *The code*
```js
  function Node( data ) { 
  this.data = data; 
  this.children = []; 
  } 
  class Tree { 
  constructor() { 
  this.root = null; 
  } 
  add( data, toNodeData ) { 
  let node = new Node( data ); 
  let parent = toNodeData ? this.findBFS( toNodeData ) : null; 
  if ( parent ) { 
  parent.children.push( node ); 
  } else { 
  if ( !this.root ) { 
  this.root = node; 
  } else { 
  return 'Root node is already assigned'; 
  } 
  } 
  } 
  remove( data ) { 
  if ( this.root.data === data ) { 
  this.root = null; 
  } 
  let queue = [ this.root ]; 
  while ( queue.length ) { 
  let node = queue.shift(); 
  for ( let i = 0; i < node.children.length; i++ ) { 
  if ( node.children[ i ].data === data ) { 
  node.children.splice( i, 1 ); 
  } else { 
  queue.push( node.children[ i ] ); 
  } 
  } 
  } 
  } 
  contains( data ) { 
  return this.findBFS( data ) ? true : false; 
  } 
  findBFS( data ) { 
  let queue = [ this.root ]; 
  while ( queue.length ) { 
  let node = queue.shift(); 
  if ( node.data === data ) { 
  return node; 
  } 
  for ( let i = 0; i < node.children.length; i++ ) { 
  queue.push( node.children[ i ] ); 
  } 
  } 
  return null; 
  } 
  _preOrder( node, fn ) { 
  if ( node ) { 
  if ( fn ) { 
  fn( node ); 
  } 
  for ( let i = 0; i < node.children.length; i++ ) { 
  this._preOrder( node.children[ i ], fn ); 
  } 
  } 
  } 
  _postOrder( node, fn ) { 
  if ( node ) { 
  for ( let i = 0; i < node.children.length; i++ ) { 
  this._postOrder( node.children[ i ], fn ); 
  } 
  if ( fn ) { 
  fn( node ); 
  } 
  } 
  } 
  traverseDFS( fn, method ) { 
  let current = this.root; 
  if ( method ) { 
  this[ '_' + method ]( current, fn ); 
  } else { 
  this._preOrder( current, fn ); 
  } 
  } 
  traverseBFS( fn ) { 
  let queue = [ this.root ]; 
  while ( queue.length ) { 
  let node = queue.shift(); 
  if ( fn ) { 
  fn( node ); 
  } 
  for ( let i = 0; i < node.children.length; i++ ) { 
  queue.push( node.children[ i ] ); 
  } 
  } 
  } 
  print() { 
  if ( !this.root ) { 
  return console.log( 'No root node found' ); 
  } 
  let newline = new Node( '|' ); 
  let queue = [ this.root, newline ]; 
  let string = ''; 
  while ( queue.length ) { 
  let node = queue.shift(); 
  string += node.data.toString() + ' '; 
  if ( node === newline && queue.length ) { 
  queue.push( newline ); 
  } 
  for ( let i = 0; i < node.children.length; i++ ) { 
  queue.push( node.children[ i ] ); 
  } 
  } 
  console.log( string.slice( 0, -2 ).trim() ); 
  } 
  printByLevel() { 
  if ( !this.root ) { 
  return console.log( 'No root node found' ); 
  } 
  let newline = new Node( '\n' ); 
  let queue = [ this.root, newline ]; 
  let string = ''; 
  while ( queue.length ) { 
  let node = queue.shift(); 
  string += node.data.toString() + ( node.data !== '\n' ? ' ' : '' ); 
  if ( node === newline && queue.length ) { 
  queue.push( newline ); 
  } 
  for ( let i = 0; i < node.children.length; i++ ) { 
  queue.push( node.children[ i ] ); 
  } 
  } 
  console.log( string.trim() ); 
  } 
  } 
  let tree = new Tree(); 
  tree.add( 'ceo' ); 
  tree.add( 'cto', 'ceo' ); 
  tree.add( 'dev1', 'cto' ); 
  tree.add( 'dev2', 'cto' ); 
  tree.add( 'dev3', 'cto' ); 
  tree.add( 'cfo', 'ceo' ); 
  tree.add( 'accountant', 'cfo' ); 
  tree.add( 'cmo', 'ceo' ); 
  tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant 
  tree.printByLevel(); // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant 
  console.log( 'tree contains dev1 is true:', tree.contains( 'dev1' ) ); // => true 
  console.log( 'tree contains dev4 is false:', tree.contains( 'dev4' ) ); // => false 
  console.log( '--- BFS' ); 
  tree.traverseBFS( node => { 
  console.log( node.data ); 
  } ); // => ceo cto cfo cmo dev1 dev2 dev3 accountant 
  console.log( '--- DFS preOrder' ); 
  tree.traverseDFS( node => { 
  console.log( node.data ); 
  }, 'preOrder' ); // => ceo cto dev1 dev2 dev3 cfo accountant cmo 
  console.log( '--- DFS postOrder' ); 
  tree.traverseDFS( node => { 
  console.log( node.data ); 
  }, 'postOrder' ); // => dev1 dev2 dev3 cto accountant cfo cmo ceo 
  tree.remove( 'cmo' ); 
  tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant 
  tree.remove( 'cfo' ); 
  tree.print(); // => ceo | cto | dev1 dev2 dev3 
  /* 
  19: 32: 39 | bryan @LAPTOP - 9 LGJ3JGS: [ Tree ] Tree_exitstatus: 0 __________________________________________________________o > 
  node BinarySearchTree.js 
  ceo | cto cfo cmo | dev1 dev2 dev3 accountant 
  ceo 
  cto cfo cmo 
  dev1 dev2 dev3 accountant 
  tree contains dev1 is true: true 
  tree contains dev4 is false: false 
  -- - BFS 
  ceo 
  cto 
  cfo 
  cmo 
  dev1 
  dev2 
  dev3 
  accountant 
  -- - DFS preOrder 
  ceo 
  cto 
  dev1 
  dev2 
  dev3 
  cfo 
  accountant 
  cmo 
  -- - DFS postOrder 
  dev1 
  dev2 
  dev3 
  cto 
  accountant 
  cfo 
  cmo 
  ceo 
  ceo | cto cfo | dev1 dev2 dev3 accountant 
  ceo | cto | dev1 dev2 dev3 | 
  19: 32: 53 | bryan @LAPTOP - 9 LGJ3JGS: [ Tree ] Tree_exitstatus: 0 __________________________________________________________o > 
  */ 
```
[view raw](https://gist.github.com/bgoonz/3ac1f86fc096e8097a9a5e4395d36039/raw/014643d64f62a7d6908e070a6e23220b702a4b20/bst.js)[bst.js ](https://gist.github.com/bgoonz/3ac1f86fc096e8097a9a5e4395d36039#file-bst-js)hosted with ❤ by [GitHub](https://github.com/)

### The Graph

![](https://cdn-images-1.medium.com/max/800/0*q31mL1kjFWlIzw3l.gif)

### *Definition*

> *A Graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected Graph or a set of ordered pairs for a directed Graph. These pairs are known as edges, arcs, or lines for an undirected Graph and as arrows, directed edges, directed arcs, or directed lines for a directed Graph. The vertices may be part of the Graph structure, or may be external entities represented by integer indices or references.*

-   A graph is **any** collection of nodes and edges.
-   Much more relaxed in structure than a tree.
-   It doesn''t need to have a root node (not every node needs to be accessible from a single node)
-   It can have cycles (a group of nodes whose paths begin and end at the same node)
-   Cycles are not always "isolated", they can be one part of a larger graph. You can detect them by starting your search on a specific node and finding a path that takes you back to that same node.
-   Any number of edges may leave a given node
-   A Path is a sequence of nodes on a graph

### Cycle Visual

![](https://cdn-images-1.medium.com/max/800/1*dn1BqCdXdFg4FCVSz6uArA.png)

A Graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.).

Representation\
There are different ways of representing a graph, each of them with its own advantages and disadvantages. Here are the main 2:

Adjacency list: For every vertex a list of adjacent vertices is stored. This can be viewed as storing the list of edges. This data structure allows the storage of additional data on the vertices and edges.\
Adjacency matrix: Data are stored in a two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices. The data on the edges and vertices must be stored externally.

Ways to Reference Graph Nodes
-----------------------------

 ---

### Node Class

 ---

Uses a class to define the neighbors as properties of each node.

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

 ---

### Adjacency Matrix

 ---

The row index will corespond to the source of an edge and the column index will correspond to the edges destination.

-   When the edges have a direction, `matrix[i][j]` may not be the same as `matrix[j][i]`
-   It is common to say that a node is adjacent to itself so `matrix[x][x]` is true for any node
-   Will be O(n^2) space complexity

let matrix = [

  **A** | **B** | **C** | **D** | **E** | **F** 
| --- | --- | --- | --- | --- | --- | --- 
| **A** | [True, | True, | True, | False, | True, | False] 
| **B** | [False, | True, | False, | False, | False, | False] 
| **C** | [False, | True, | True, | True, | False, | False] 
| **D** | [False, | False, | False, | True, | False, | False] 
| **E** | [True, | False, | False, | False, | True, | False] 
| **F** | [False, | False, | False, | False, | True, | True] 

];

 ---

### Adjacency List

 ---

Seeks to solve the shortcomings of the matrix implementation. It uses an object where keys represent node labels and values associated with that key are the adjacent node keys held in an array.

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

 ---

 ---

Code Examples
-------------

 ---

### Basic Graph Class

```js
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    this.addVertex(srcValue);
    this.addVertex(destValue);
    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    edges.forEach((ele) => {
      this.addEdges(ele[0], ele[1]);
    });
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    const queue = [startingVertex];
    const visited = new Set();
    const result = new Array();

    while (queue.length) {
      const value = queue.shift();
      if (visited.has(value)) continue;
      result.push(value);
      visited.add(value);
      queue.push(...this.adjList[value]);
    }
    return result;
  }

  depthFirstTraversalIterative(startingVertex) {
    const stack = [startingVertex];
    const visited = new Set();
    const result = new Array();

    while (stack.length) {
      const value = stack.pop();
      if (visited.has(value)) continue;
      result.push(value);
      visited.add(value);
      stack.push(...this.adjList[value]);
    }
    return result;
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (visited.has(startingVertex)) return [];

    vertices.push(startingVertex);
    visited.add(startingVertex);

    this.adjList[startingVertex].forEach((vertex) => {
      this.depthFirstTraversalRecursive(vertex, visited, vertices);
    });
    return [...vertices];
  }
```

 ---

### Node Class Examples

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

function breadthFirstSearch(startingNode, targetVal) {
  const queue = [startingNode];
  const visited = new Set();

  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node.val)) continue;
    visited.add(node.val);
    if (node.val === targetVal) return node;
    node.neighbors.forEach((ele) => queue.push(ele));
  }
  return null;
}

function numRegions(graph) {
  let maxLength = 0;
  for (node in graph) {
    if (graph[node].length > maxLength) maxLength = graph[node].length;
  }
  if (maxLength === 0) {
    return (length = Object.keys(graph).length);
  } else {
    return maxLength;
  }
}

function maxValue(node, visited = new Set()) {
  let queue = [node];
  let maxValue = 0;
  while (queue.length) {
    let currentNode = queue.shift();
    if (visited.has(currentNode.val)) continue;
    visited.add(currentNode.val);
    if (currentNode.val > maxValue) maxValue = currentNode.val;
    currentNode.neighbors.forEach((ele) => queue.push(ele));
  }
  return maxValue;
}
```

 ---

### Traversal Examples

#### With Graph Node Class

```js
function depthFirstRecur(node, visited = new Set()) {
  if (visited.has(node.val)) return;

  console.log(node.val);
  visited.add(node.val);

  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}

function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    if (visited.has(node.val)) continue;

    console.log(node.val);
    visited.add(node.val);

    stack.push(...node.neighbors);
  }
}
```

### With Adjacency List

```js
function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

function _depthFirstRecur(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}
```

[view raw](https://gist.github.com/bgoonz/de05ada6da193c8a13bed59451290f0b/raw/dc60f3c66fe2dd698f99a5ecaa503eeeac181fdd/graph-representation.md)[graph-representation.md ](https://gist.github.com/bgoonz/de05ada6da193c8a13bed59451290f0b#file-graph-representation-md)hosted with ❤ by [GitHub](https://github.com/)

Graph

> *The code*

 ---
```js

  class Graph { 
  constructor() { 
  this.vertices = []; 
  this.edges = []; 
  this.numberOfEdges = 0; 
  } 
   
  addVertex(vertex) { 
  this.vertices.push( vertex ); 
  this.edges[ vertex ] = []; 
  } 
   
  removeVertex(vertex) { 
  let index = this.vertices.indexOf( vertex ); 
  if ( ~index ) { 
  this.vertices.splice( index, 1 ); 
  } 
  while ( this.edges[ vertex ].length ) { 
  let adjacentVertex = this.edges[ vertex ].pop(); 
  this.removeEdge( adjacentVertex, vertex ); 
  } 
  } 
   
  addEdge(vertex1, vertex2) { 
  this.edges[ vertex1 ].push( vertex2 ); 
  this.edges[ vertex2 ].push( vertex1 ); 
  this.numberOfEdges++; 
  } 
   
  removeEdge(vertex1, vertex2) { 
  let index1 = this.edges[ vertex1 ] ? this.edges[ vertex1 ].indexOf( vertex2 ) : -1; 
  let index2 = this.edges[ vertex2 ] ? this.edges[ vertex2 ].indexOf( vertex1 ) : -1; 
  if ( ~index1 ) { 
  this.edges[ vertex1 ].splice( index1, 1 ); 
  this.numberOfEdges--; 
  } 
  if ( ~index2 ) { 
  this.edges[ vertex2 ].splice( index2, 1 ); 
  } 
  } 
   
  size() { 
  return this.vertices.length; 
  } 
   
  relations() { 
  return this.numberOfEdges; 
  } 
   
  traverseDFS(vertex, fn) { 
  if ( !~this.vertices.indexOf( vertex ) ) { 
  return console.log( 'Vertex not found' ); 
  } 
  let visited = []; 
  this._traverseDFS( vertex, visited, fn ); 
  } 
   
  _traverseDFS(vertex, visited, fn) { 
  visited[ vertex ] = true; 
  if ( this.edges[ vertex ] !== undefined ) { 
  fn( vertex ); 
  } 
  for ( let i = 0; i < this.edges[ vertex ].length; i++ ) { 
  if ( !visited[ this.edges[ vertex ][ i ] ] ) { 
  this._traverseDFS( this.edges[ vertex ][ i ], visited, fn ); 
  } 
  } 
  } 
   
  traverseBFS(vertex, fn) { 
  if ( !~this.vertices.indexOf( vertex ) ) { 
  return console.log( 'Vertex not found' ); 
  } 
  let queue = []; 
  queue.push( vertex ); 
  let visited = []; 
  visited[ vertex ] = true; 
   
  while ( queue.length ) { 
  vertex = queue.shift(); 
  fn( vertex ); 
  for ( let i = 0; i < this.edges[ vertex ].length; i++ ) { 
  if ( !visited[ this.edges[ vertex ][ i ] ] ) { 
  visited[ this.edges[ vertex ][ i ] ] = true; 
  queue.push( this.edges[ vertex ][ i ] ); 
  } 
  } 
  } 
  } 
   
  pathFromTo(vertexSource, vertexDestination) { 
  if ( !~this.vertices.indexOf( vertexSource ) ) { 
  return console.log( 'Vertex not found' ); 
  } 
  let queue = []; 
  queue.push( vertexSource ); 
  let visited = []; 
  visited[ vertexSource ] = true; 
  let paths = []; 
   
  while ( queue.length ) { 
  let vertex = queue.shift(); 
  for ( let i = 0; i < this.edges[ vertex ].length; i++ ) { 
  if ( !visited[ this.edges[ vertex ][ i ] ] ) { 
  visited[ this.edges[ vertex ][ i ] ] = true; 
  queue.push( this.edges[ vertex ][ i ] ); 
  // save paths between vertices 
  paths[ this.edges[ vertex ][ i ] ] = vertex; 
  } 
  } 
  } 
  if ( !visited[ vertexDestination ] ) { 
  return undefined; 
  } 
   
  let path = []; 
  for ( let j = vertexDestination; j != vertexSource; j = paths[ j ] ) { 
  path.push( j ); 
  } 
  path.push( j ); 
  return path.reverse().join( '-' ); 
  } 
   
  print() { 
  console.log( this.vertices.map( function ( vertex ) { 
  return ( vertex + ' -> ' + this.edges[ vertex ].join( ', ' ) ).trim(); 
  }, this ).join( ' | ' ) ); 
  } 
  } 
   
  let graph = new Graph(); 
  graph.addVertex( 1 ); 
  graph.addVertex( 2 ); 
  graph.addVertex( 3 ); 
  graph.addVertex( 4 ); 
  graph.addVertex( 5 ); 
  graph.addVertex( 6 ); 
  graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 -> 
  graph.addEdge( 1, 2 ); 
  graph.addEdge( 1, 5 ); 
  graph.addEdge( 2, 3 ); 
  graph.addEdge( 2, 5 ); 
  graph.addEdge( 3, 4 ); 
  graph.addEdge( 4, 5 ); 
  graph.addEdge( 4, 6 ); 
  graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4 
  console.log( 'graph size (number of vertices):', graph.size() ); // => 6 
  console.log( 'graph relations (number of edges):', graph.relations() ); // => 7 
  graph.traverseDFS( 1, vertex => { 
  console.log( vertex ); 
  } ); // => 1 2 3 4 5 6 
  console.log( '---' ); 
  graph.traverseBFS( 1, vertex => { 
  console.log( vertex ); 
  } ); // => 1 2 5 3 4 6 
  graph.traverseDFS( 0, vertex => { 
  console.log( vertex ); 
  } ); // => 'Vertex not found' 
  graph.traverseBFS( 0, vertex => { 
  console.log( vertex ); 
  } ); // => 'Vertex not found' 
  console.log( 'path from 6 to 1:', graph.pathFromTo( 6, 1 ) ); // => 6-4-5-1 
  console.log( 'path from 3 to 5:', graph.pathFromTo( 3, 5 ) ); // => 3-2-5 
  graph.removeEdge( 1, 2 ); 
  graph.removeEdge( 4, 5 ); 
  graph.removeEdge( 10, 11 ); 
  console.log( 'graph relations (number of edges):', graph.relations() ); // => 5 
  console.log( 'path from 6 to 1:', graph.pathFromTo( 6, 1 ) ); // => 6-4-3-2-5-1 
  graph.addEdge( 1, 2 ); 
  graph.addEdge( 4, 5 ); 
  console.log( 'graph relations (number of edges):', graph.relations() ); // => 7 
  console.log( 'path from 6 to 1:', graph.pathFromTo( 6, 1 ) ); // => 6-4-5-1 
  graph.removeVertex( 5 ); 
  console.log( 'graph size (number of vertices):', graph.size() ); // => 5 
  console.log( 'graph relations (number of edges):', graph.relations() ); // => 4 
  console.log( 'path from 6 to 1:', graph.pathFromTo( 6, 1 ) ); // => 6-4-3-2-1 
```