### Arrays

    list = [a,b,c,d,e]

{: .-setup}

    list[1]                 // → b
    list.indexOf(b)         // → 1

### Subsets

#### Immutable

    list.slice(0,1)         // → [a        ]
    list.slice(1)           // → [  b,c,d,e]
    list.slice(1,2)         // → [  b      ]

#### Mutative

    re = list.splice(1)     // re = [b,c,d,e]  list == [a]
    re = list.splice(1,2)   // re = [b,c]      list == [a,d,e]

### Adding items

#### Immutable

    list.concat([X,Y])      // → [_,_,_,_,_,X,Y]

#### Mutative

    list.push(X)            // list == [_,_,_,_,_,X]
    list.unshift(X)         // list == [X,_,_,_,_,_]
    list.splice(2, 0, X)    // list == [_,_,X,_,_,_]

### Inserting

    // after -- [_,_,REF,NEW,_,_]
    list.splice(list.indexOf(REF)+1, 0, NEW))

    // before -- [_,_,NEW,REF,_,_]
    list.splice(list.indexOf(REF), 0, NEW))

### Replace items

    list.splice(2, 1, X)    // list == [a,b,X,d,e]

### Removing items

    list.pop()              // → e    list == [a,b,c,d]
    list.shift()            // → a    list == [b,c,d,e]
    list.splice(2, 1)       // → [c]  list == [a,b,d,e]

### Iterables

    .filter(n => ...) => array

    .find(n => ...)  // es6
    .findIndex(...)  // es6

    .every(n => ...) => Boolean // ie9+
    .some(n => ..) => Boolean   // ie9+

    .map(n => ...)   // ie9+
    .reduce((total, n) => total) // ie9+
    .reduceRight(...)
