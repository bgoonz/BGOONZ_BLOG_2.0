---
title: my gists
weight: 0
excerpt:
seo:
  title: "Gist Archive"
  description: "A collection of my github gists"
  robots: []
  extra: []
  type: stackbit_page_meta
template: docs
---

## Gist Archive

<h2>Gist Archive</h2>

<iframe src="https://bgoonzgist.netlify.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<hr>
<br>


---

## Featured Gists:

```js
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const crypto = require("crypto");
const path = require("path");
const pathA = ".";
const pathB = "/path/to/the/directory/you/want/to/compare/it/to";
let hashes = [];
function hashDirIn(folder) {
  var pathPromiseA = fs
    .readdirAsync(folder)
    .map(function (fileName) {
      var workPath = path.join(folder, fileName);
      var statPromise = fs.statAsync(workPath);
      return Promise.join(
        statPromise,
        fileName,
        function (statPromise, fileName) {
          if (statPromise.isFile()) {
            function makeStream(file, callback) {
              var result = fs.createReadStream(workPath);
              return callback(result);
            }
            function process(stream) {
              var hash = crypto.createHash("md5");
              return new Promise(function (resolve, reject) {
                stream.on("data", function updateProcess(chunk) {
                  hash.update(chunk, "utf8");
                });
                stream.on("end", resolve);
              }).then(function publish() {
                var digest = hash.digest("hex");
                hashes.push({ digest: digest, path: workPath });
              });
            }
            return makeStream(fileName, process);
          }
        }
      );
    })
    .then(function () {
      if (i == 1) {
        hashes.sort(function (a, b) {
          if (a.digest < b.digest) {
            return -1;
          }
          if (a.digest > b.digest) {
            return 1;
          }
          return 0;
        });
        var dupe = 1;
        hashes.map(function (obj, index) {
          if (index - 1 >= 0) {
            if (obj.digest == hashes[index - 1].digest) {
              console.log("Dupe " + dupe + " found:");
              console.log(obj.path);
              console.log("Equal to:");
              console.log(hashes[index - 1].path + "\n");
              dupe++;
            }
          }
        });
      }
      i++;
    });
}
var i = 0;
hashDirIn(pathA);
hashDirIn(pathB);
```

---

---

> will replace any spaces in file names with an underscore!

```bash
 for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done
  ## TAKING IT A STEP FURTHER:
 # Let's do it recursivley:
  function RecurseDirs ()
{
    oldIFS=$IFS
    IFS=$'\n'
    for f in "$@"
    do
  # YOUR CODE HERE!

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)]

for file in \*; do mv "$file" `echo $file | tr ' ' '_'` ; done
        if [[ -d "${f}" ]]; then
cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"

```

---

### Copy to clipboard jQuerry

> Language: Javascript/Jquery

> In combination with the script tag : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> , this snippet will add a copy to clipboard button to all of your embedded <code> blocks.

```js
$(document).ready(function () {
  $("code, pre").append(
    '<span class="command-copy" ><i class="fa fa-clipboard" aria-hidden="true"></i></span>'
  );
  $("code span.command-copy").click(function (e) {
    var text = $(this).parent().text().trim(); //.text();
    var copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });

  $("pre span.command-copy").click(function (e) {
    var text = $(this).parent().text().trim();
    var copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });
});
```

---

### Append Files in PWD

```js
//APPEND-DIR.js
const fs = require("fs");
let cat = require("child_process").execSync("cat *").toString("UTF-8");
fs.writeFile("output.md", cat, (err) => {
  if (err) throw err;
});
```

---

### doesUserFrequentStarbucks.js

```js
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

---

### arr-intersection.js

```js
/*
 function named intersection(firstArr) that takes in an array and
returns a function. 
When the function returned by intersection is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.
*/
function intersection(firstArr) {
  return (secondArr) => {
    let common = [];
    for (let i = 0; i < firstArr.length; i++) {
      let el = firstArr[i];
      if (secondArr.indexOf(el) > -1) {
        common.push(el);
      }
    }
    return common;
  };
}
let abc = intersection(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

let fame = intersection(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]
```

---

### arr-of-cum-partial-sums.js

```js
/*
First is recurSum(arr, start) which returns the sum of the elements of arr from the index start till the very end.
Second is partrecurSum() that recursively concatenates the required sum into an array and when we reach the end of the array, it returns the concatenated array.
*/
//arr.length -1 = 5
//                   arr   [    1,    7,    12,   6,    5,    10   ]
//                   ind   [    0     1     2     3     4      5   ]
//                              ↟                              ↟
//                            start                           end

function recurSum(arr, start = 0, sum = 0) {
  if (start < arr.length) {
    return recurSum(arr, start + 1, sum + arr[start]);
  }
  return sum;
}

function rPartSumsArr(arr, partSum = [], start = 0, end = arr.length - 1) {
  if (start <= end) {
    return rPartSumsArr(
      arr,
      partSum.concat(recurSum(arr, start)),
      ++start,
      end
    );
  }
  return partSum.reverse();
}

console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
console.log("rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]: ", rPartSumsArr(arr));
console.log("rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]: ", rPartSumsArr(arr1));
console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
/*
------------------------------------------------rPartSumArr------------------------------------------------
rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]:  [ 10, 16, 18, 23, 24, 25 ]
rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]:  [ 10, 15, 21, 33, 40, 41 ]
------------------------------------------------rPartSumArr------------------------------------------------
*/
```

---

### camel2Kabab.js

```js
function camelToKebab(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
```

---

### camelCase.js

```js
function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
```

---

### concatLinkedLists.js

```js
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  let carryOver = 0;
  while (l1 != null || l2 != null) {
    let v1 = 0;
    let v2 = 0;
    if (l1 != null) v1 = l1.val;
    if (l2 != null) v2 = l2.val;
    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }
  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }
  return result.next;
}
```

---

### fast-is-alpha-numeric.js

```js
//Function to test if a character is alpha numeric that is faster than a regular
//expression in JavaScript

let isAlphaNumeric = (char) => {
  char = char.toString();
  let id = char.charCodeAt(0);
  if (
    !(id > 47 && id < 58) && // if not numeric(0-9)
    !(id > 64 && id < 91) && // if not letter(A-Z)
    !(id > 96 && id < 123) // if not letter(a-z)
  ) {
    return false;
  }
  return true;
};

console.log(isAlphaNumeric("A")); //true
console.log(isAlphaNumeric(2)); //true
console.log(isAlphaNumeric("z")); //true
console.log(isAlphaNumeric(" ")); //false
console.log(isAlphaNumeric("!")); //false
```

---

### find-n-replace.js

```js
function replaceWords(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
console.log(replaceWords("Let us go to the store", "store", "mall")); //"Let us go to the mall"
console.log(replaceWords("He is Sleeping on the couch", "Sleeping", "sitting")); //"He is Sitting on the couch"
console.log(replaceWords("His name is Tom", "Tom", "john"));
//"His name is John"
```

---

### flatten-arr.js

```js
/*Simple Function to flatten an array into a single layer */
const flatten = (array) =>
  array.reduce(
    (accum, ele) => accum.concat(Array.isArray(ele) ? flatten(ele) : ele),
    []
  );
```

---

### isWeekDay.js

```js
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 11)));
// Result: true (Monday)
console.log(isWeekday(new Date(2021, 0, 10)));
// Result: false (Sunday)
```

---

### longest-common-prefix.js

```js
function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}
```
