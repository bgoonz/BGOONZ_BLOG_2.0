# graphs_cheatsheet

```
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

implement a queue

implement a stack

node,l. subtree, r. subtree

l.subtree, node, r.subtreethe left subtree contains values less than the root

l.subtree, r.subtree, node

BST Definition

1. l. subtree contains values < root
2. r. subtree contains values >= to the root
3. l. & r. subtree are BST

insert: log(n)\
search: log(n)

-   Using a node implementation with iteration:

```
function depthFirstIter(node) {
    let visited = new Set();
    let stack = [ node ];

    while (stack.length) {
        let node = stack.pop();


        if (visited.has(node.val)) continue;



        console.log(node.val);
        visited.add(node.val);


        stack.push(...node.neighbors);
    }
}
```
