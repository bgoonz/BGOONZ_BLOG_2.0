Quicksort
=========

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

The steps are:

1.  Pick an element, called a pivot, from the array.
2.  Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3.  Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

Animated visualization of the quicksort algorithm. The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

Complexity
----------

<table style="width:97%;"><colgroup><col style="width: 11%" /><col style="width: 10%" /><col style="width: 10%" /><col style="width: 10%" /><col style="width: 4%" /><col style="width: 4%" /><col style="width: 48%" /></colgroup><thead><tr class="header"><th>Name</th><th style="text-align: center;">Best</th><th style="text-align: center;">Average</th><th style="text-align: center;">Worst</th><th style="text-align: center;">Memory</th><th style="text-align: center;">Stable</th><th style="text-align: left;">Comments</th></tr></thead><tbody><tr class="odd"><td><strong>Quick sort</strong></td><td style="text-align: center;">n log(n)</td><td style="text-align: center;">n log(n)</td><td style="text-align: center;">n<sup>2</sup></td><td style="text-align: center;">log(n)</td><td style="text-align: center;">No</td><td style="text-align: left;">Quicksort is usually done in-place with O(log(n)) stack space</td></tr></tbody></table>

References
----------

-   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
-   [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
