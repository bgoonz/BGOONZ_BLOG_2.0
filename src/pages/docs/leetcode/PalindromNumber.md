---
title: Palindrome Number
weight: 0
excerpt: feel free to try the examples
seo:
    title: 'Palindrome Number'
    description: 'Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

### Problem:

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

```
Input: 121
Output: true
```

**Example 2:**

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Follow up:**

Coud you solve it without converting the integer to a string?

### Solution:

#### ONE

Easy to write but slow since it generates an array.

```js
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    return x == String(x).split('').reverse().join('');
};
```

#### TWO

A bit faster.

```js
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    const s = String(x);
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};
```

#### THREE

General solution. Combining [7. Reverse Integer](./007.%20Reverse%20Integer.md).

```js
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    return x === reverse(x);
};

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let result = 0;
    while (x) {
        result = result * 10 + (x % 10);
        x = (x / 10) | 0;
    }
    return result;
}
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
