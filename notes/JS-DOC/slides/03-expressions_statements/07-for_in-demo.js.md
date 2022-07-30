---
title: Demo
layout_data:
    description: Run this code and look at the output. Do you notice anything unexpected?
        If yes, why do you think this is the case?
---

var obj = {foo: 0, bar: 1, 42: 2};

for (var prop in obj) {
log('property: ' + prop, 'value: ' + obj[prop]);
}
