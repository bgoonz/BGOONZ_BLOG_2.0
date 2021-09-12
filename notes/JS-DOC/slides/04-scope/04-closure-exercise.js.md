---
title: Exercise
layout_data:
    description: Which values does this code log and why? Modify the code so that it logs the
        values as "expected".
    assertion: assert(
        output.every(function(x, i) {
        return x === i;
        }),
        'The code should output the loop variable of each iteration, i.e. 0, 1, 2'
        );
---

var functionArray = [];
for (var i = 0; i < 3; i++) {
functionArray[i] = function() {
log(i);
};
}

for (var j = 0; j < 3; j++) {
functionArray[j]();
}
