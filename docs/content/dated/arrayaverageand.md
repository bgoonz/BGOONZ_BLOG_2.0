-   /en/array-average-and-median/

The following examples will be based on the following array:

```js
let values = [2, 56, 3, 41, 0, 4, 100, 23];
```

To get the average, we have to sum up numbers and then divide by the number of values. Steps are:

-   get the array length
-   sum up values
-   get the average (`sum/length`)

```js
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => (current += previous));
let avg = sum / values.length;
// avg = 28
```

Or:

```js
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let count = values.length;
values = values.reduce((previous, current) => (current += previous));
values /= count;
// avg = 28
```

Now, to get the median steps are:

-   sort the array
-   get the arethmic mean of the middle values

```js
let values = [2, 56, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;
// median = 13,5
```

With a bitwise operator:

```js
let values = [2, 56, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
let median = (values[(values.length - 1) >> 1] + values[values.length >> 1]) / 2;
// median = 13,5
```
