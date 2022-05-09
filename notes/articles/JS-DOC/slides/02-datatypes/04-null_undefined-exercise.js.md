---
title: Exercise
layout_data:
    description: Log the values `null` and `undefined`.
    assertion: |
        assert(
          output.some(function(x) { return x === null }),
          'Your log must contain null.'
        );
        assert(
          output.some(function(x) { return x === void 0; }),
          'Your log must contain undefined.'
        );
        assert(
          source.indexOf('undefined') === -1,
          'Try to log undefined without writing it in the source code.'
        );
---
