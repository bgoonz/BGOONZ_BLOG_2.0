---
title: Exercise
layout_data:
    description: Log the two properties of the object using dot and bracket notation.
    assertion: assert(
        source.indexOf('obj.foo') > -1,
        'Access property foo with dot notation'
        );
        assert(
        /obj\[(42|'42'|"42")\]/.test(source),
        'How exactly did you want to access property 42?'
        );
---

var obj = {foo: 'bar', 42: 'answer'};
