# The Queue data structure

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.

## Get the code on Github

Of course, all the code can also be found on Github in the repository [data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript).

## Definition

> A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the Queue will be the first one to be removed. **From** [**Wikipedia**](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)

As for the Stack data structure, a peek operation is often added to the Queue data structure. It returns the value of the front element without dequeuing it.

## Complexity

| Average |        |           |          |
| ------- | ------ | --------- | -------- |
| Access  | Search | Insertion | Deletion |
| O(n)    | O(n)   | O(1)      | O(n)     |

To get a full overview of the time and space complexity of the Queue data structure, have a look to this excellent [Big O cheat sheet](http://bigocheatsheet.com).

## The code

```
function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function(value) {
  this.queue.push(value);
};
Queue.prototype.dequeue = function() {
  return this.queue.shift();
};
Queue.prototype.peek = function() {
  return this.queue[0];
};
Queue.prototype.length = function() {
  return this.queue.length;
};
Queue.prototype.print = function() {
  console.log(this.queue.join(' '));
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // => 1 2 3
console.log('length is 3:', queue.length()); // => 3
console.log('peek is 1:', queue.peek()); // => 3
console.log('dequeue is 1:', queue.dequeue()); // => 1
queue.print(); // => 2 3
console.log('dequeue is 2:', queue.dequeue());  // => 2
console.log('length is 1:', queue.length()); // => 1
console.log('dequeue is 3:', queue.dequeue()); // => 3
queue.print(); // => ''
console.log('peek is undefined:', queue.peek()); // => undefined
console.log('dequeue is undefined:', queue.dequeue()); // => undefined
```

---

---

---

[Source](http://blog.benoitvallon.com/data-structures-in-javascript/the-queue-data-structure/)
