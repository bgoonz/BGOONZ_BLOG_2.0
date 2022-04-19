---
title: What are data structures
weight: 0
excerpt: Data structures, at a high level, are techniques for storing and organizing data that make it easier to modify, navigate, and access. Data structures determine how data is collected, the functions we can use to access it, and the relationships between data.
seo:
    title: ' What are data structures'
    description: 'Data structures are used in almost all areas of computer science and programming, from operating systems to basic vanilla code to artificial intelligence.'
    robots: []
    extra: []
template: docs
---


# What is heap data structure

Heap is one efficient implementation of an abstract data structure called a [priority queue](https://learnersbucket.com/tutorials/data-structures/priority-queue-implementation-in-javascript).

---

## Priority Queue

<details>

<summary> Click To Learn About Priority Queues </summary>

What is priority queue?
-----------------------

As queues are widely used in computer programming and in real lives as well, there was a need for some different models of original [queue data structure](https://learnersbucket.com/tutorials/algorithms/queue-implementation-in-javascript) to process the data more efficiently.

A priority queue is one of the variants of the original queue. In this elements are added and removed based on their priorities. It is an abstract data type that captures the idea of a container whose elements have priorities attached to them. An element of highest priority always appears at the front of the queue. If that element is removed, the next highest priority element advances to the front.

A real-life example of the priority queue are the patients in the hospitals, the one with at most priority are treated first and then the others.

Another example is people standing in a queue at the boarding line at the airport, first and second class(Business class) peoples passengers get priority over the coach class(Economy).

In India elderly or women get priority over young and men at many places like in railway and bus.

![Priority queue in javascript](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/09/ezgif.com-optimize-2.gif?resize=600%2C338&ssl=1)

Why do we need priority queue?
------------------------------

It is used when we have to choose between the same values who have different priorities or weight.

-   Dijkstra's Shortest Path Algorithm using priority queue: When the graph is stored in the form of adjacency list or matrix, priority queue can be used to extract minimum efficiently when implementing Dijkstra's algorithm.
-   Prim's algorithm: to store keys of nodes and extract minimum key node at every step.
-   Data compression: It is used in Huffman Codes which is used to compresses data.
-   Operating system: It is used by operating systems for [load balancing](https://www.nginx.com/resources/glossary/load-balancing/).

Now I am sure that you have a good idea about priority queue, so let us start implementing it in javascript.

List of operations performed on priority queue
----------------------------------------------

-   enqueue(): Adds an item at the tail of the queue.
-   dequeue(): Removes an item from the head of the queue.
-   front(): Retruns the first item in the queue.
-   rear(): Retruns the last item in the queue.
-   size(): Returns the size of the queue.
-   isEmpty(): Returns `true` if queue is empty, `false` otherwise.

There are two ways of implementing a priority queue.

-   Add elements at appropriate place based on their priorities.
-   Queue elements as they are added and remove them according to their priorities.

We will be using the first approach as we just have to place the elements at the appropriate place and then it can be dequeued normally.

Implementing a priority queue in javascript
-------------------------------------------

We will use an extra function (container) which will be storing the value and its priority.

function  PriorityQueue(){  let items =  [];  //Container  function  QueueElement(element, priority){  this.element = element;  this.priority = priority;  }  //Other methods go here  }

---

### Adding an item in the priority queue

This is the only major method which will be modifying to store the data based on priorities.

We will iterate each element that is already present in the queue and compare their priority with the new element's priority. If the new elements priority is greater then will add it at that place.

To add elements at specific index we will need to shift the remaining elements back, But [javascript array] has an inbuilt method for this `splice(index, count, element)` which we will be using.

//Add a new element in queue  this.enqueue =  function(element, priority){  let queueElement =  new  QueueElement(element, priority);  //To check if element is added  let added =  false;  for(let i =  0; i < items.length; i++){  //We are using giving priority to higher numbers  //If new element has more priority then add it at that place  if(queueElement.priority > items[i].priority){ items.splice(i,  0, queueElement);  //Mark the flag true added =  true;  break;  }  }  //If element is not added  //Then add it to the end of the queue  if(!added){ items.push(queueElement);  }  }

---

### Remove an item from the priority queue

//Remove element from the queue  this.dequeue =  ()  =>  {  return items.shift();  }

---

### Return the first element from the priority queue

//Return the first element from the queue  this.front =  ()  =>  {  return items[0];  }

---

### Return the last element from the priority queue

//Return the last element from the queue  this.rear =  ()  =>  {  return items[items.length -  1];  }

---

### Check if queue is empty

//Check if queue is empty  this.isEmpty =  ()  =>  {  return items.length ==  0;  }

---

### Return the size of the queue

//Return the size of the queue  this.size =  ()  =>  {  return items.length;  }

---

### Print the queue

//Print the queue  this.print  =  function(){  for(let i =  0; i < items.length; i++){ console.log(`${items[i].element} - ${items[i].priority}`);  }  }

---

Complete code of the priority queue
------------------------------------

function  PriorityQueue(){  let items =  [];  //Container  function  QueueElement(element, priority){  this.element = element;  this.priority = priority;  }  //Add a new element in queue  this.enqueue =  function(element, priority){  let queueElement =  new  QueueElement(element, priority);  //To check if element is added  let added =  false;  for(let i =  0; i < items.length; i++){  //We are using giving priority to higher numbers  //If new element has more priority then add it at that place  if(queueElement.priority > items[i].priority){ items.splice(i,  0, queueElement);  //Mark the flag true added =  true;  break;  }  }  //If element is not added  //Then add it to the end of the queue  if(!added){ items.push(queueElement);  }  }  //Remove element from the queue  this.dequeue =  ()  =>  {  return items.shift();  }  //Return the first element from the queue  this.front =  ()  =>  {  return items[0];  }  //Return the last element from the queue  this.rear =  ()  =>  {  return items[items.length -  1];  }  //Check if queue is empty  this.isEmpty =  ()  =>  {  return items.length ==  0;  }  //Return the size of the queue  this.size =  ()  =>  {  return items.length;  }  //Print the queue  this.print  =  function(){  for(let i =  0; i < items.length; i++){ console.log(`${items[i].element} - ${items[i].priority}`);  }  }  }

Input:  let pQ =  new  PriorityQueue(); pQ.enqueue(1,  3); pQ.enqueue(5,  2); pQ.enqueue(6,  1); pQ.enqueue(11,  1); pQ.enqueue(13,  1); pQ.enqueue(10,  3); pQ.dequeue(); pQ.print();  Output:  "10 - 3"  "5 - 2"  "6 - 1"  "11 - 1"  "13 - 1"

---

ES6 class based implementation of priority queue
-------------------------------------------------

//Container  class  QueueElement{  constructor(element, priority){  this.element = element;  this.priority = priority;  }  }  //PriorityQueue  class  PriorityQueue{  constructor(){  this.items =  [];  }  //Add a new element in queue enqueue =  function(element, priority){  let queueElement =  new  QueueElement(element, priority);  //To check if element is added  let added =  false;  for(let i =  0; i <  this.items.length; i++){  //We are using giving priority to higher numbers  //If new element has more priority then add it at that place  if(queueElement.priority >  this.items[i].priority){  this.items.splice(i,  0, queueElement);  //Mark the flag true added =  true;  break;  }  }  //If element is not added  //Then add it to the end of the queue  if(!added){  this.items.push(queueElement);  }  }  //Remove element from the queue dequeue =  function(){  return  this.items.shift();  }  //Return the first element from the queue front =  function(){  return  this.items[0];  }  //Return the last element from the queue rear =  function(){  return  this.items[this.items.length -  1];  }  //Check if queue is empty isEmpty =  function(){  return  this.items.length ==  0;  }  //Return the size of the queue size =  function(){  return  this.items.length;  }  //Print the queue  print  =  function(){  for(let i =  0; i <  this.items.length; i++){ console.log(`${this.items[i].element} - ${this.items[i].priority}`);  }  }  }

Input:  let pQ =  new  PriorityQueue(); pQ.enqueue(1,  3); pQ.enqueue(5,  2); pQ.enqueue(6,  1); pQ.enqueue(11,  1); pQ.enqueue(13,  1); pQ.enqueue(10,  3); pQ.dequeue(); pQ.print();  Output:  "10 - 3"  "5 - 2"  "6 - 1"  "11 - 1"  "13 - 1"

---

Making this class private with closure and IIFE
------------------------------------------------

let  PriorityQueue  =  (function(){  //Container  class  QueueElement{  constructor(element, priority){  this.element = element;  this.priority = priority;  }  }  //PriorityQueue  return  class  PriorityQueue{  constructor(){  this.items =  [];  }  //Add a new element in queue enqueue =  function(element, priority){  let queueElement =  new  QueueElement(element, priority);  //To check if element is added  let added =  false;  for(let i =  0; i <  this.items.length; i++){  //We are using giving priority to higher numbers  //If new element has more priority then add it at that place  if(queueElement.priority >  this.items[i].priority){  this.items.splice(i,  0, queueElement);  //Mark the flag true added =  true;  break;  }  }  //If element is not added  //Then add it to the end of the queue  if(!added){  this.items.push(queueElement);  }  }  //Remove element from the queue dequeue =  function(){  return  this.items.shift();  }  //Return the first element from the queue front =  function(){  return  this.items[0];  }  //Return the last element from the queue rear =  function(){  return  this.items[this.items.length -  1];  }  //Check if queue is empty isEmpty =  function(){  return  this.items.length ==  0;  }  //Return the size of the queue size =  function(){  return  this.items.length;  }  //Print the queue  print  =  function(){  for(let i =  0; i <  this.items.length; i++){ console.log(`${this.items[i].element} - ${this.items[i].priority}`);  }  }  }  }());

#### Time Complexity

| #       | Access | Search | Insert | Delete |
|---------|--------|--------|--------|--------|
| Average | Θ(N)   | Θ(N)   | Θ(N)   | Θ(1)   |
| Worst   | O(N)   | O(N)   | O(N)   | O(1)   |

---

#### Space Complexity

| #     | space |
|-------|-------|
| Worst | O(N)  |

</details>



In a heap, the highest (or lowest) priority element is always stored at the root, thus priority queue is often referred to as heaps irrespective of their implementation.

Heap is the most useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority.

One of the most common implementations of the heap is the binary heap which is basically a binary tree.

A binary heap is basically a binary tree with two additional properties.

1.  **Shape property**: It must be a complete binary tree, which means all the levels of the tree, except the deepest (last) one are fully filled. In case the last level of the tree is not complete, the nodes of that level are filled from left to right.
2.  **Heap property**: All nodes are either greater than or equal to or less than or equal to each of its children. If the parent nodes are greater than their child nodes, the heap is called a Max-Heap, and if the parent nodes are smaller than their child nodes, the heap is called Min-Heap.

![Max and Min heap](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/max-and-min-heap-1.png?resize=768%2C500&ssl=1)

___

## List of operations performed on binary heap

-   **insert(num)**: Add a new key to the heap.
-   **delete(num)**: Removes a key from the heap.
-   **heapify**: Create a (min or max) heap from the given array.
-   **findMax or (findMin)**: Return the max element from the heap or (min).
-   **extractMax or (extractMin)**: Remove and return the max element from the heap or (min).
-   **deleteMax or (deleteMin)**: Remove the max element from the heap or (min).
-   **size**: Return the size of the heap.
-   **isEmpty**: Is heap empty or not?.
-   **getList**: Get the heap as an array.

___

## Implementing binary heap data structure in Javascript

Binary heaps can be represented using an array with certain mathematical calculations.

If the index of any element in the array is `i`, the element in the index `2i+1` will become the left child, and the element in the `2i+2` index will become the right child. Also, the parent of any element at index `i` is given by the lower bound of `(i-1)/2`.

Thus we can create the binary heap using an array rather than using a tree.

```js
function BinaryHeap(){
  let list = [];
  
  //other operations will go here.
}
```

___

### Heapify

The first operation which we will be adding is heapify, because either after inserting or deleting a new element in the heap we will have to heapify it to retain the form.

To build a max-heap from any tree, we can start heapifying each sub-tree from the bottom up and end up with a max-heap. Repeat this for all the elements including the root element.

In the case of a complete tree, the first index of a non-leaf node is given by `n/2 - 1`. All other nodes after that are leaf-nodes and thus don't need to be heapified.

![Heapify root element](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/how-to-heapify-root-element-1.png?resize=768%2C500&ssl=1)

```
  //Heapify
  this.maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }

     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
```

___

### Inserting a new element in the heap

To add a new element, we first check if the list is empty or not. If it is empty then push the element directly, else we will have to heapify the list after addition.

![Adding a new node in the binary heap](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/Adding-a-new-node-in-the-binary-heap-1.png?resize=768%2C500&ssl=1)

```
//Insert Value
  this.insert = (num) => {
    const size = list.length;
    if(size === 0){
      list.push(num);
    }else{
      list.push(num);
      
     for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(list, list.length, i); 
     }
    }
  }
```

___

### Removing an element from the heap

Removing a node is 4 step process.

1.  Find the element in the array.
2.  Swap the element with the last element.
3.  Remove the last element.
4.  Heapify the list.

![Delete a node in binary heap ](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/Delete-a-node-in-binary-heap-1-1.png?resize=768%2C500&ssl=1)

```
//Remove value
  this.delete = (num) => {
    const size = list.length;
    
    //Get the index of the number to be removed
    let i;
    for(i = 0; i < size; i++){
      if(num === list[i]){
        break;
      }
    }
    
    //Swap the number with last element
    [list[i], list[size - 1]] = [list[size - 1], list[i]];
    
    //Remove the last element
    list.splice(size - 1);
    
    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(list, list.length, i); 
     }
  }
```

___

### Find max from the heap

As the list is already max heapified, we just need to return the root element because it is the max.

```
//Return max value
  this.findMax = () => list[0];
```

___

### Delete max from the heap

Delete the root to remove the max. We can use the exisiting delete method for it.

```
//Remove max val
  this.deleteMax = () => {
    this.delete(list[0]);
  }
```

___

### Extract max from the heap

Store the max value in a variable and then delete it from the heap, after that return the value.

```
//Remove and return max value
  this.extractMax = () => {
    const max = list[0];
    this.delete(max);
    return max;
  }
```

___

### Size of the heap

```
//Size
  this.size = () => list.length;
```

___

### IsEmpty check

```
//IsEmpty
  this.isEmpty = () => list.length === 0;
```

___

### Get the heap

```
//Return head
  this.getList = () => list;
```

___

## Complete code of binary heap data structure implemented in Javascript

```
function BinaryHeap(){
  let list = [];
  
  //Heapify
  this.maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }

     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
  
  //Insert Value
  this.insert = (num) => {
    const size = list.length;
    
    if(size === 0){
      list.push(num);
    }else{
      list.push(num);

      //Heapify
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(list, list.length, i); 
      }
    }
  }
  
  //Remove value
  this.delete = (num) => {
    const size = list.length;
    
    //Get the index of the number to be removed
    let i;
    for(i = 0; i < size; i++){
      if(list[i] === num){
        break;
      }
    }
    
    //Swap the number with last element
    [list[i], list[size - 1]] = [list[size - 1], list[i]];

    //Remove the last element
    list.splice(size - 1);
    
    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(list, list.length, i); 
     }
  }
  
  //Return max value
  this.findMax = () => list[0];
  
  //Remove max val
  this.deleteMax = () => {
    this.delete(list[0]);
  }
  
  //Remove and return max value
  this.extractMax = () => {
    const max = list[0];
    this.delete(max);
    return max;
  }
  
  //Size
  this.size = () => list.length;
  
  //IsEmpty
  this.isEmpty = () => list.length === 0;
  
  //Return head
  this.getList = () => list;
}
```

```
Input:
const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());

Output:
[9, 5, 4, 3, 2]
[5, 3, 4, 2]
[7, 5, 4, 2, 3]
```

___

## Binary heap with Min-Heap

```js
function BinaryHeap(){
  let list = [];
  
  //Heapify
  this.minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] < arr[smallest]) {
           smallest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] < arr[smallest]) {
          smallest = r; 
     }

     // If smallest is not root 
     if (smallest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[smallest]; 
          arr[smallest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.minHeapify(arr, n, smallest); 
      } 
  }
  
  //Insert Value
  this.insert = (num) => {
    const size = list.length;
    
    if(size === 0){
      list.push(num);
    }else{
      list.push(num);
      
      //Heapify
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.minHeapify(list, list.length, i); 
      }
    }
  }
  
  //Remove value
  this.delete = (num) => {
    const size = list.length;
    
    //Get the index of the number to be removed
    let i;
    for(i = 0; i < size; i++){
      if(list[i] === num){
        break;
      }
    }
    
    //Swap the number with last element
    [list[i], list[size - 1]] = [list[size - 1], list[i]];

    //Remove the last element
    list.splice(size - 1);
    
    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
         this.minHeapify(list, list.length, i); 
     }
  }
  
  //Return min value
  this.findMin = () => list[0];
  
  //Remove min val
  this.deleteMin = () => {
    this.delete(list[0]);
  }
  
  //Remove and return min value
  this.extractMin = () => {
    const min = list[0];
    this.delete(min);
    return min;
  }
  
  //Size
  this.size = () => list.length;
  
  //IsEmpty
  this.isEmpty = () => list.length === 0;
  
  //Return head
  this.getList = () => list;
}
```

```js
Input:
const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());

Output:
[2, 3, 9, 5, 4]
[2, 3, 4, 5]
[2, 3, 4, 5, 7]
```

___

## Class based implementation of binary heap in javascript

```js
class BinaryHeap{
  constructor(){
    this.list = [];
  }
  
  //Heapify
  maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }

     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
  
  //Insert Value
  insert = (num) => {
    const size = this.list.length;
    if(size === 0){
      this.list.push(num);
    }else{
      this.list.push(num);
      
      //Heapify
      for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(this.list, this.list.length, i); 
      }
    }
  }
  
  //Remove value
  delete = (num) => {
    const size = this.list.length;
    
    //Get the index of the number to be removed
    let i;
    for(i = 0; i < size; i++){
      if(num === this.list[i]){
        break;
      }
    }
    
    //Swap the number with last element
    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];
    
    //Remove the last element
    this.list.splice(size - 1);
    
    //Heapify the list again
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(this.list, this.list.length, i); 
     }
  }
  
  //Return max value
  findMax = () => this.list[0];
  
  //Remove max val
  deleteMax = () => {
    this.delete(this.list[0]);
  }
  
  //Remove and return max value
  extractMax = () => {
    const max = this.list[0];
    this.delete(max);
    return max;
  }
  
  //Size
  size = () => this.list.length;
  
  //IsEmpty
  isEmpty = () => this.list.length === 0;
  
  //Return head
  getList = () => this.list;
}
```

### Time complexity of heap data structure

| #       | Access | Search | Insert  | Delete  | FindMax or (Min) | DeleteMax or (Min) |
|---------|--------|--------|---------|---------|------------------|--------------------|
| Average | Θ(N)   | Θ(N)   | ΘLog(N) | ΘLog(N) | Θ(1)             | ΘLog(N)            |
| Worst   | O(N)   | O(N)   | OLog(N) | OLog(N) | O(1)             | OLog(N)            |

### Space complexity

___

### Applications

-   Implementing a priority queue.
-   Dijkstra's Algorithm.
-   Heap Sort.
