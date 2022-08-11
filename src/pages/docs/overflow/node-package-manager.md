---
title: Sorting Algorithms
weight: 0
excerpt: Sorting Algorithms
seo:
    title: ''
    description: ''
    robots: []
    extra:
        - name: 'og:title'
          value: Sorting Algorithms
          keyName: property
          relativeUrl: false
        - name: 'og:description'
          value: >-
              We are creating the same number of variables with an exact size,
              independent of our input. No new arrays are created.
          keyName: property
          relativeUrl: false
        - name: 'og:type'
          value: website
          keyName: property
          relativeUrl: false
        - name: 'twitter:image'
          value: images/Classical-2D-floorplanning-data-structures-left-and-their-3D.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: sorting algos
          keyName: name
          relativeUrl: false
        - name: 'og:image'
          value: images/image (9).png
          keyName: property
          relativeUrl: true
    type: stackbit_page_meta
template: docs
---


## Sorting Algorithms

### Sorting Algorithms

1. Explain the complexity of and write a function that performs bubble sort on an array of numbers.

- Time Complexity: O(n^2)
- - In our worst case, our input is in the opposite order. We have to perform n swaps and loop through our input n times because a swap is made each
- Space Complexity: O(1)
    - We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.
- Code example for bubbleSort:

---


```js
//


function bubbleSort(array) {
    // We could have also had a 'sorted = false' flag and flipped our logic below
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                // The above three lines could also be in a helper swap function
                // swap(array, i, i+1);
                swapped = true;
            }
        }
    }

    return array;
}
```

2. Explain the complexity of and write a function that performs selection sort on an array of numbers.

- Time Complexity: O(n^2)
    - Our nested loop structure is dependent on the size of our input.
    - The outer loop always occurs n times.
    - For each of those iterations, we have another loop that runs (n - i) times. This just means that the inner loop runs one less time each iteration, but this averages out to (n/2).
    - Our nested structure is then T(n \* n/2) = O(n^2)
- Space Complexity: O(1)
- - We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.
- Code example for selectSort:

---


```js
//


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        // The above three lines could also be in a helper swap function
        // swap(arr, i, minIndex);
    }
    return arr;
}
```

3. Explain the complexity of and write a function that performs insertion sort on an array of numbers.

- Time Complexity: O(n^2)
    - Our nested loop structure is dependent on the size of our input.
    - The outer loop always occurs n times.
    - For each of those iterations, we have another loop that runs a maximum of (i - 1) times. This just means that the inner loop runs one more time each iteration, but this averages out to (n/2).
    - Our nested structure is then T(n \* n/2) = O(n^2)
- Space Complexity: O(1)
- - We are creating the same number of variables with an exact size, independent of our input. No new arrays are created.
- Code example for insertionSort:

---


```js
//


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currElement;
    }
    return arr;
}
```

4. Explain the complexity of and write a function that performs merge sort on an array of numbers.

- Time Complexity: O(n log n)
    - Our mergeSort function divides our input in half at each step, recursively calling itself with smaller and smaller input. This results in log n stack frames.
    - On each stack frame, our worst case scenario is having to make n comparisons in our merge function in order to determine which element should come next in our sorted array.
    - Since we have log n stack frames and n operations on each frame, we end up with an O(n log n) time complexity
- Space Complexity: O(n)
- - We are ultimately creating n subarrays, making our space complexity linear to our input size.
- Code example for mergeSort:

```js
//
// The merge function is what is combining our sorted sub-arrays
function merge(array1, array2) {
    let merged = [];

    // keep running while either array still contains elements
    while (array1.length || array2.length) {
        // if array1 is nonempty, take its the first element as ele1
        // otherwise array1 is empty, so take Infinity as ele1
        let ele1 = array1.length ? array1[0] : Infinity;

        // do the same for array2, ele2
        let ele2 = array2.length ? array2[0] : Infinity;

        let next;
        // remove the smaller of the eles from it's array
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        // and add that ele to the new array
        merged.push(next);
    }

    return merged;
}

// The mergeSort function breaks apart our input into smaller sub-arrays until we have an input of length <= 1, which is inherently sorted.
// Once we have a left and right subarray that's sorted, we can merge them together to get our sorted result of this sub-problem, passing the sorted version back up the call stack.
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}
```

5. Explain the complexity of and write a function that performs quick sort on an array of numbers.

- Time Complexity: Average O(n log n), Worst O(n^2)
    - In our worst case, the pivot that we select results in every element going into either the left or right array. If this happens we end up making n recursive calls to quickSort, with n comparisons at each call.
    - In our average case, we pick something that more evenly splits the arrays, resulting in approximately log n recursive calls and an overall complexity of O(n log n).
    - Quick sort is unique in that the worst case is so exceedingly rare that it is often considered an O(n log n) complexity, even though this is not technically accurate.
- Space Complexity: Our implementation O(n), Possible implementation O(log n)
    - The partition arrays that we create are directly proportional to the size of the input, resulting in O(n) space complexity.
    - With some tweaking, we could implement an in-place quick sort, which would eliminate the creation of new arrays. In this case, the log n stack frames from the recursion are the only proportional amount of space that is used, resulting in O(log n) space complexity.
- Code example for quickSort:

---


```js
//


function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    // This implementation uses filter, which returns a new array with any element that passes the criteria (ie the callback returns true).
    // We also could have iterated over the array (array.forEach(el => ...)) and pushed each value into the appropriate left/right subarray as we encountered it.
    let left = array.filter((el) => el < pivot);
    let right = array.filter((el) => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
    // We also could have concatenated the arrays instead of spreading their contents
    // return leftSorted.concat([pivot]).concat(rightSorted);
}
```

6. Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

- Time Complexity: O(log n)
- - With each recursive call, we split our input in half. This means we have to make at most log n checks to know if the element is in our array.
- Space Complexity: Our implementation O(n), Possible implementation O(1)
    - We have to make a subarray for each recursive call. In the worst case (we don't find the element), the total length of these arrays is approximately equal to the length of the original (n).
    - If we kept references to the beginning and end index of the portion of the array that we are searching, we could eliminate the need for creating new subarrays. We could also use a while loop to perform this functionality until we either found our target or our beginning and end indices crossed. This would eliminate the space required for recursive calls (adding stack frames). Ultimately we would be using the same number of variables independent of input size, resulting in O(1).
- Code example for binarySearch and binarySearchIndex:

```js
//
// Returns simply true/false for presence
function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

// Returns the index or -1 if not found
function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    const midIdx = Math.floor(array.length / 2);
    const midEl = array[midIdx];

    if (target < midEl) {
        return binarySearchIndex(array.slice(0, midIdx), target);
    } else if (target > midEl) {
        // Since our recursive call will have new indices for the subarray, we have to adjust the return value to align it with the indices of our original array.
        // If the recursive call returns -1, it was not found and we can immediately return -1
        // If it was found in the subarray, we have to add on the number of elements that were removed from the beginning of our larger original array.
        // For example, if we try to find 15 in an array of [5, 10, 15]:
        // - Our first call to binarySearchIndex will check our middle element of 10
        // - Since our target is greater, we will recursively call our search on elements to the right, being the subarray [15]
        // - On our recursive call we found our target! It's index in this call is 0.
        // - When we return 0 to where binarySearchIndex was called, we need to adjust it to line up with this larger array (the 0th element of this larger array is 5, but our target was at the 0th index of the subarray)
        // - Since we sliced off 2 elements from the beginning before making our recursive call, we add 2 to the return value to adjust it back to line up with our original array.
        const idxShift = binarySearchIndex(array.slice(midIdx + 1), target);
        return idxShift === -1 ? -1 : idxShift + midIdx + 1;
    } else {
        return midIdx;
    }
}
```
