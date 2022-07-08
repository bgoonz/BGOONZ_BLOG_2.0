---
title: Next Permutation
weight: 0
excerpt: feel free to try the examples
seo:
    title: 'Next Permutation'
    description: 'Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## [31. Next Permutation](https://leetcode.com/problems/next-permutation/description/)

### Problem:

Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be **in-place** and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

`1,2,3` → `1,3,2`  
`3,2,1` → `1,2,3`  
`1,1,5` → `1,5,1`

### Solution:

Observe a few longer examples and the pattern is self-evident.

Divide the list into two parts. The first half must be incremental and the second half must be decremental.

Reverse the second half and find the smallest number in it that is greater the last number of the first half.

Swap the two.

```js
//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
    const len = nums.length;
    if (len <= 1) {
        return;
    }

    for (let i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            let t;
            for (let s = i, e = len - 1; s < e; s++, e--) {
                t = nums[s];
                nums[s] = nums[e];
                nums[e] = t;
            }

            let j = len - 1;
            while (nums[j] <= nums[i - 1]) {
                j--;
            }

            t = nums[j];
            nums[j] = nums[i - 1];
            nums[i - 1] = t;

            break;
        }
    }

    if (i === 0) {
        nums.reverse();
    }
};
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---
