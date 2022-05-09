---
title: Letter Combinations of a Phone Number
weight: 0
excerpt: feel free to try the examples
seo:
    title: 'Letter Combinations of a Phone Number'
    description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

### Problem:

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![200px-Telephone-keypad2](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

**Example:**

```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Note:**

Although the above answer is in lexicographical order, your answer could be in any order you want.

### Solution:

#### ONE

JavaScript specific optimization.

`Array.prototype.push` accepts arbitrary arguments which enables tighter loops.

Also, appending string is faster than prepending.

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
    if (digits.length <= 0) {
        return [];
    }

    const letters = [
        ,
        ,
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    let result = [''];

    for (let i = 0; i < digits.length; i++) {
        const arr = letters[digits[i]];
        let newResult = [];
        arr.forEach((c) => newResult.push(...result.map((r) => r + c)));
        result = newResult;
    }

    return result;
};
```

#### TWO

General recursive DFS solution.

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
    const letters = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result = [];
    if (digits.length > 0) {
        dfs(digits, 0, '', letters, result);
    }
    return result;
};

function dfs(digits, idigit, path, letters, result) {
    if (idigit >= digits.length) {
        result.push(path);
        return;
    }
    const str = letters[digits[idigit]];
    for (let i = 0; i < str.length; i++) {
        dfs(digits, idigit + 1, path + str[i], letters, result);
    }
}
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
