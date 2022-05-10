---
title: Exercise
layout_data:
    description: Create three variables `x`, `y`, `z`, where `x` contains a string value,
        `y` a number and `z` a boolean value. Log the values with `log`.
    assertion: |
        assert(
          output.some(function(x) { return typeof x === 'string' }),
          'Your log must contain a string.'
        );
        assert(
          output.some(function(x) { return typeof x === 'number' }),
          'Your log must contain a number.'
        );
        assert(
          output.some(function(x) { return typeof x === 'boolean' }),
          'Your log must contain a boolean.'
        );
---

// Hint: You can pass multiple arguments to log:
// log(a, b)
