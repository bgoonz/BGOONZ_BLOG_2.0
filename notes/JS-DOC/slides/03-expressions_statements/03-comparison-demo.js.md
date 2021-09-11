---
title: Exercise
layout_data:
    description: Run the code and have a look at the output. Is it what you expect?
        What are reasons for this output? Modify the code, so that it prints
        the result you would expect.
    assertion: |
        var values = [" ", "0", 0];

        var c = 1;
        for (var i = 0, l = values.length; i < l; i++) {
          for (var j = i; j <  l; j++) {
            var expectedResult = values[i] === values[j];
            assert(
              expectedResult === output[c],
              'Comparing ' +  JSON.stringify(values[i]) + ' and ' +
              JSON.stringify(values[j]) + ' should yield ' + expectedResult.toString() +
              ' not ' + output[c]
            );
            c += 2;
          }
        }
---

var values = [" ", "0", 0];

for (var i = 0, l = values.length; i < l; i++) {
for (var j = i; j < l; j++) {
log(
JSON.stringify(values[i]) + ' == ' + JSON.stringify(values[j]) + ': ',
values[i] == values[j]
);
}
}
