---
title: Exercise
layout_data:
    description: Which value does the code log and why? How can it be changed to log the value
        of `obj.foo`?
    assertion: |
        assert(output[0] === 42, 'The code should only log 42');
        assert(/log\s*\(\s*this\.foo\s*\)/.test(source), "Looks like you tried to be clever. Don't modify log(this.foo).");
---

var obj = {
foo: 42,
bar: function () {
log(this.foo);
}
};

var foo = obj.bar;
foo();
