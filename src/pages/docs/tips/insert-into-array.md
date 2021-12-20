---
title: Insert Into Array
weight: 0
excerpt: Insert Into Array
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
## Insert Into Array


We have some `in-built methods` to add at elements at the beginning and end of the array.

`push(value)` → Add an element to the end of the array.

`unshift(value)` → Add an element to the beginning of an array.

To add an element to the specific index there is no method available in `Array` object. But we can use already available `splice` method in `Array` object to achieve this.

An array starts from `index 0` ,So if we want to add an element as first element of the array , then the index of the element is `0` .If we want to add an element to `nth` position , then the index is `(n-1) th` index.

MDN :    The splice() method changes the contents of an array by removing      or replacing existing elements and/or adding new elements, in the original array(which means the source array is modified)

`splice()` method takes three argument

1.  *start** → *The index at which to start changing the array.
2.  *deleteCount(optional) → *An integer indicating the number of elements in the array to remove from `start`.
3.  *(elem1, elem2 ...) → *The elements to add to the array, beginning from `start`. If you do not specify any elements, `splice()` will only remove elements from the array.

In order to insert an element to the specific index , we need to provide arguments as

1.  `start` → `index` where to insert the element
2.  `deleteCount` → `0` (because we don't need to delete element)
3.  `elem` → elements to insert

Let's Write the function\
function insertAt(array, index, ...elementsArray) { array.splice(index, 0, ...elements);}

Now Let's call the function

var num = [1,2,3,6,7,8];/*\
                           arguments\
 * 1. source array - num\
 * 2. index to insert - 3\
 * 3. remaining are elements to insert\
*/insertAt(num, 3, 4, 5); // [1,2,3,4,5,6,7,8]________________________________________________________________// let's try changing the indexvar num = [1,2,3,6,7,8];insertAt(numbers, 2, 4,5); // [1,2,4,5,3,6,7,8]

