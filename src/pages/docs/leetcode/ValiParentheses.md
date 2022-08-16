---
title: Valid Parentheses
weight: 0
excerpt: feel free to try the examples
seo:
    title: 'Valid Parentheses'
    description: 'determine if the input string is valid.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

### Problem:

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

```
Input: "()"
Output: true
```

**Example 2:**

```
Input: "()[]{}"
Output: true
```

**Example 3:**

```
Input: "(]"
Output: false
```

**Example 4:**

```
Input: "([)]"
Output: false
```

**Example 5:**

```
Input: "{[]}"
Output: true
```

### Solution:

Stack 101.

Whenever we meet a close bracket, we want to compare it to the last open bracket.

That is why we use stack to store open brackets: first in, last out.

And since there is only bracket characters, the last open bracket happens to be the last character.

```js
//
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    const stack = [];
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    for (const c of s) {
        const open = pairs[c];
        if (open) {
            if (stack.pop() !== open) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length <= 0;
};
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
