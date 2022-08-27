---
title: Flattening arrays in JavaScript
template: docs
excerpt: Flattening arrays may not be an everyday need but, it is still an
    important need enough to be part of most utility libraries in JavaScript.
---

<!--StartFragment-->

# Flattening arrays in JavaScript

Flattening arrays may not be an everyday need but, it is still an important need enough to be part of most utility libraries in JavaScript.

If you have looked at this very simple problem before you have probably noticed that most of the time we only see one kind of implementation for it, the recursive way.

Here, I would like to present another way of doing it, iteratively. I am not saying that the iterative way is better than the recursive way, although it has its advantages, but just that sometimes I think it is good to try solving problem with other approaches.

## The classical recursive way

The classical recursive way is based on a function calling itself if the `i` element in the array that we are looping through is also an array.

This method is the one used in `lodash` for example.

```javascript
function baseFlatten(array, depth, predicate, isStrict, result) {
    // lots of code here
    if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
    } else {
        arrayPush(result, value);
    }
    // lots of code here
}
```

Note the original comment in the source code to remind us about recursion limitations in JavaScript.

Then, here is the basic version that you would have probably implemented if you had to.

```javascript
function flatten(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    }

    var array = [];
    for (var i = 0; i < arr.length; i++) {
        array = array.concat(flatten(arr[i]));
    }
    return array;
}

flatten([1, [2, [3]], [4]]); // => [1,2,3,4]
```

## The iterative way

Now, let’s look at another way of solving that problem. The new idea is to loop through the array and either concatenate the nested arrays to the original array or add the element to a resulting array as shown below.

```javascript
function flatten(arr) {
    var array = [];
    while (arr.length) {
        var value = arr.shift();
        if (Array.isArray(value)) {
            // this line preserve the order
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}

flatten([1, [2, [3]], [4]]); // => [1,2,3,4]
```

# Practice your “outside the box” thinking

I think it is nice to force ourselves to approach problems differently sometimes.

First, you will have to forget about what you know and start thinking outside of “your” box. We all know how hard it is to forget about something we know to think differently but that a very good exercise, it keeps our mind flexible.

Secondly, it reminds us that a solution to a problem is only one solution amongst others. It forces us to evaluate our solutions compared to others and not taking for granted the first idea that came to our mind.

<!--EndFragment-->
