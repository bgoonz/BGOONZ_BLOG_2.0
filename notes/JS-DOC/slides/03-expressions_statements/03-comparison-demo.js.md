var values = \[" ",”0", 0\];

for (var i = 0, l = values.length; i &lt; l; i++) { for (var j = i; j &lt; l; j++) { log( JSON.stringify(values\[i\]) + ’ == ’ + JSON.stringify(values\[j\]) + ‘:’, values\[i\] == values\[j\] ); } }
