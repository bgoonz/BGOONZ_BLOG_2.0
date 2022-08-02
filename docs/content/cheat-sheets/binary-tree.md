# Binary Tree

## Tree Nodes

```js
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

## Tree Traversal

## BFS

implement a queue

## DFS

implement a stack

### Pre-order

node,l. subtree, r. subtree

### In-order

l.subtree, node, r.subtreethe left subtree contains values less than the root

### Post-order

l.subtree, r.subtree, node

BST Definition

1. l. subtree contains values < root
2. r. subtree contains values >= to the root
3. l. & r. subtree are BST

insert: log(n) search: log(n)

## Example of DFS using a adjacency list with itera

-   Using a node implementation with iteration:

```js
// This is easy to swap to a breadth-first approach by using a queue instead of a stack!
// Instead of popping from the top, we can shift from the front
function depthFirstIter(node) {
    let visited = new Set();
    let stack = [node];

    while (stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored
        stack.push(...node.neighbors);
    }
}
```
