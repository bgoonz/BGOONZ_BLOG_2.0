title: Insert item inside an Array

tip-number: 00 tip-username: loverajoel tip-username-profile: https://github.com/loverajoel tip-tldr: Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice. tip-writer-support: https://www.coinbase.com/loverajoel

-   /en/insert-item-inside-an-array/

Inserting an item into an existing array
========================================

Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.

Those are known methods, but it doesn’t mean there isn’t a more performant way. Here we go:

Adding an element at the end
----------------------------

Adding an element at the end of the array is easy with push(), but it can be done in different ways.

    var arr = [1, 2, 3, 4, 5];
    var arr2 = [];

    arr.push(6);
    arr[arr.length] = 6;
    arr2 = arr.concat([6]);

Both first methods modify the original array. Don’t believe me? Check the [jsperf](http://jsperf.com/push-item-inside-an-array)

### Performance on mobile :

#### Android (v4.2.2)

1.  *arr.push(6);* and *arr\[arr.length\] = 6;* have the same performance // 3 319 694 ops/sec
2.  *arr2 = arr.concat(\[6\]);* 50.61 % slower than the other two methods

#### Chrome Mobile (v33.0.0)

1.  *arr\[arr.length\] = 6;* // 6 125 975 ops/sec
2.  *arr.push(6);* 66.74 % slower
3.  *arr2 = arr.concat(\[6\]);* 87.63 % slower

#### Safari Mobile (v9)

1.  *arr\[arr.length\] = 6;* // 7 452 898 ops/sec
2.  *arr.push(6);* 40.19 % slower
3.  *arr2 = arr.concat(\[6\]);* 49.78 % slower

    Final victor

    1. arr[arr.length] = 6; // with an average of 5 632 856 ops/sec
    2. arr.push(6); // 35.64 % slower
    3. arr2 = arr.concat([6]); // 62.67 % slower

### Performance on desktop

#### Chrome (v48.0.2564)

1.  *arr\[arr.length\] = 6;* // 21 602 722 ops/sec
2.  *arr.push(6);* 61.94 % slower
3.  *arr2 = arr.concat(\[6\]);* 87.45 % slower

#### Firefox (v44)

1.  *arr.push(6);* // 56 032 805 ops/sec
2.  *arr\[arr.length\] = 6;* 0.52 % slower
3.  *arr2 = arr.concat(\[6\]);* 87.36 % slower

#### IE (v11)

1.  *arr\[arr.length\] = 6;* // 67 197 046 ops/sec
2.  *arr.push(6);* 39.61 % slower
3.  *arr2 = arr.concat(\[6\]);* 93.41 % slower

#### Opera (v35.0.2066.68)

1.  *arr\[arr.length\] = 6;* // 30 775 071 ops/sec
2.  *arr.push(6);* 71.60 % slower
3.  *arr2 = arr.concat(\[6\]);* 83.70 % slower

#### Safari (v9.0.3)

1.  *arr.push(6);* // 42 670 978 ops/sec
2.  *arr\[arr.length\] = 6;* 0.80 % slower
3.  *arr2 = arr.concat(\[6\]);* 76.07 % slower

    Final victor

    1. arr[arr.length] = 6; // with an average of 42 345 449 ops/sec
    2. arr.push(6); // 34.66 % slower
    3. arr2 = arr.concat([6]); // 85.79 % slower

Add an element at the beginning
-------------------------------

Now if we are trying to add an item to the beginning of the array:

    var arr = [1, 2, 3, 4, 5];

    arr.unshift(0);
    [0].concat(arr);

Here is a little more detail: unshift edits the original array; concat returns a new array. [jsperf](http://jsperf.com/unshift-item-inside-an-array)

### Performance on mobile :

#### Android (v4.2.2)

1.  *\[0\].concat(arr);* // 1 808 717 ops/sec
2.  *arr.unshift(0);* 97.85 % slower

#### Chrome Mobile (v33.0.0)

1.  *\[0\].concat(arr);* // 1 269 498 ops/sec
2.  *arr.unshift(0);* 99.86 % slower

#### Safari Mobile (v9)

1.  *arr.unshift(0);* // 3 250 184 ops/sec
2.  *\[0\].concat(arr);* 33.67 % slower

    Final victor

    1. [0].concat(arr); // with an average of 4 972 622 ops/sec
    2. arr.unshift(0); // 64.70 % slower

### Performance on desktop

#### Chrome (v48.0.2564)

1.  *\[0\].concat(arr);* // 2 656 685 ops/sec
2.  *arr.unshift(0);* 96.77 % slower

#### Firefox (v44)

1.  *\[0\].concat(arr);* // 8 039 759 ops/sec
2.  *arr.unshift(0);* 99.72 % slower

#### IE (v11)

1.  *\[0\].concat(arr);* // 3 604 226 ops/sec
2.  *arr.unshift(0);* 98.31 % slower

#### Opera (v35.0.2066.68)

1.  *\[0\].concat(arr);* // 4 102 128 ops/sec
2.  *arr.unshift(0);* 97.44 % slower

#### Safari (v9.0.3)

1.  *arr.unshift(0);* // 12 356 477 ops/sec
2.  *\[0\].concat(arr);* 15.17 % slower

    Final victor

    1. [0].concat(arr); // with an average of 6 032 573 ops/sec
    2. arr.unshift(0); // 78.65 % slower

Add an element in the middle
----------------------------

Adding items in the middle of an array is easy with splice, and it’s the most performant way to do it.

    var items = ['one', 'two', 'three', 'four'];
    items.splice(items.length / 2, 0, 'hello');

I tried to run these tests in various Browsers and OS and the results were similar. I hope these tips will be useful for you and encourage to perform your own tests!
