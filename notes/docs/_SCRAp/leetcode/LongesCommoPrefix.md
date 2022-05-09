---
title: Leetcode
weight: 0
excerpt: feel free to try the examples
seo:
    title: ' Longest Common Prefix'
    description: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string '
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

### Problem:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.

### Solution:

#### ONE

JavaScript specific solution. Get the min len then narrow down the prefix.

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    if (strs.length > 0) {
        let minLen = Math.min(...strs.map((s) => s.length));
        const anyStr = strs[0];
        while (minLen) {
            const prefix = anyStr.slice(0, minLen--);
            if (strs.every((s) => s.startsWith(prefix))) {
                return prefix;
            }
        }
    }
    return '';
};
```

#### TWO

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    if (strs.length <= 0) {
        return '';
    }

    let i = 0;
    while (strs.every((s) => s[i] && s[i] === strs[0][i])) {
        i++;
    }
    return strs[0].slice(0, i);
};
```

#### THREE

General solution. Build up the prefix.

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length > 0) {
        for (let i = 0; ; i++) {
            const c = strs[0][i];
            if (!c) {
                return prefix;
            }
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== c) {
                    return prefix;
                }
            }
            prefix += c;
        }
    }
    return prefix;
};
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
