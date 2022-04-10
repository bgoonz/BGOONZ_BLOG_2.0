var functionArray = \[\]; for (var i = 0; i &lt; 3; i++) { functionArray\[i\] = function() { log(i); }; }

for (var j = 0; j &lt; 3; j++) { functionArray[j](); }
