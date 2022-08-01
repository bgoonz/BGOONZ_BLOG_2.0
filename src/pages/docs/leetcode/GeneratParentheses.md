---
title: Generate Parentheses
weight: 0
excerpt: feel free to try the examples
seo:
    title: '  Generate Parentheses '
    description: ' Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. '
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)

### Problem:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

### Solution:

#### ONE

Recursive DFS backtracking.

```js
//
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
    const result = [];
    if (n > 0) {
        dfs(n, 0, 0, '', result);
    }
    return result;
};

function dfs(n, nopen, nclose, path, result) {
    if (path.length === n * 2) {
        result.push(path);
        return;
    }

    if (nopen < n) {
        dfs(n, nopen + 1, nclose, path + '(', result);
    }

    if (nclose < nopen) {
        dfs(n, nopen, nclose + 1, path + ')', result);
    }
}
```

#### TWO

BFS.

```js
//
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
    if (n <= 0) {
        return [];
    }

    const queue = [
        {
            path: '(',
            open: 1,
            close: 0
        }
    ];

    while (true) {
        const { path, open, close } = queue.shift();
        if (open + close === n * 2) {
            queue.unshift({ path, open, close });
            break;
        }

        if (open < n) {
            queue.push({
                path: path + '(',
                open: open + 1,
                close
            });
        }

        if (close < open) {
            queue.push({
                path: path + ')',
                open,
                close: close + 1
            });
        }
    }

    return queue.map((x) => x.path);
};
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
