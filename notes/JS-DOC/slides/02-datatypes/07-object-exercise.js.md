---
title: Exercise
layout_data:
    description: |
        Log two value: an object which has a property `foo` and a value `"bar"`,
        and an array with the values `1`, `2` and `42`.
    assertion: |
        assert(
          output.some(function(x) {
            return JSON.stringify(x) === JSON.stringify({foo: 'bar'});
          }),
          'Your log must contain an object with property "foo" and value "bar". Hint: `{key: value}`.'
        );

        assert(
          output.some(function(x) {
            return JSON.stringify(x) === JSON.stringify([1, 2, 42]);
          }),
          'Your log must contain an array with values 1, 2 and 42. Hint: `[value, ...]`.'
        );
---
