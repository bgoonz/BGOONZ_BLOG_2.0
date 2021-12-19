---
title: Exercise
layout_data:
    description: |
        Create a local variable with name `foo` and value `42`.
        Use `log(foo)` to log the value of `foo`.
        Remember to open your browser's *developer tools* to view the log output.
    assertion: |
        assert(
          /var foo\s*=.+;?$/m.test(source),
          "It doesn't look like you have declared a variable (hint: var)."
        );
        assert(output[0] === 42, "Don't forget to log the value");
---

// Create variable

//
log(foo);
