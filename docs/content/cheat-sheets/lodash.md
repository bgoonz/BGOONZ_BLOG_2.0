Collections
-----------

### Finding

    _.filter(list, (n) => n % 2)    // → Array
    _.find(list, (n) => n % 2)      // → item
    _.findLast(list, ...)           // → item

Works for both arrays and objects.

### Accessing

    _.at([abcd], 0); // → [ a ] - same as list[0]
    _.at([abcd], [0, 1]); // → [ ab ]

### Set/get

    _.set(object, 'users[0].name', value);
    _.get(object, 'users[0].name');
    _.get(object, ['users', 0, 'name']);

### Iteration

    _.forEach(list, (item, i) => ...)
    _.forEachRight(list, ...)

    _.map(list, ...)

    _.every(users, (u) => u.active)  // → true|false (aka _.all)
    _.any(users, ...)                // → true|false (aka _.some)

Array
-----

### Arrays

    _.chunk([abcd], 2); // → [ [ab], [cd] ]
    _.compact(list);

    _.fill(Array(4), 'x'); // → [ 'x', 'x', 'x', 'x' ]
    _.flatten;
    _.flattenDeep;

### Filtering

    _.drop([abcdef], 2); // → [   cdef ]
    _.dropRight([abcdef], 2); // → [ abcd   ]
    _.take([abcdef], 2); // → [ ab     ]
    _.takeRight([abcdef], 2); // → [     de ]
    _.slice([abcdef], 2, 4); // → [   cd   ]

    _.initial([abcdef]); // → [ abcde  ] - dropRight(list, 1)
    _.rest([abcdef]); // → [  bcdef ] - takeRight(list, 1)

    _.dropWhile(list, 'active')            // works like filter
    _.dropWhile(list, 'active', true)
    _.dropWhile(list, { active: true })
    _.dropWhile(list, (n) => ...)
    _.dropRightWhile(list, ...)

    _.without([abcde], b); // → [ acde ]

    _.remove(list, (n) => n % 2);

### Accessing

    _.first([abcdef]); // → a
    _.last([abcdef]); // → f

### Sets

    _.uniq();
    _.difference([abc], [bc]); // → [ a    ]
    _.intersection([abc], [bcd]); // → [  bc  ]
    _.union([abc], [bcd]); // → [ abcd ] (unique)

    Array#concat()

### Indexes

    _.findIndex(list, fn);
    _.findLastIndex(list, fn);

    _.sortedIndex(list, val);
    _.sortedLastIndex(list, val);

    _.indexOf(list, val);

Functions
---------

### Currying

    greet = (greeting, name) => `${greeting}, ${name}!`;

{: .-setup}

    fn = _.partial(fn, 'hi');
    fn('joe'); // → 'hi, joe!'

    fn = _.partial(fn, 'joe');
    fn('yo'); // → 'yo, joe!'

    _.curry(greet)('hi'); // → function(name)
    _.curryRight(greet)('joe'); // → function(greet)

Decorating functions
--------------------

### Throttling

    _.throttle(fn);
    _.debounce(fn);

### Limiting

    _.before(5, fn); // only works 5 times
    _.after(5, fn); // works only after 5 times
    _.once(fn); // like _.before(fn, 1)

### Etc

    _.wrap(_.escape, (name) => `hi ${name}`)
    // same as doing `name = _.escape(name)`

    _.delay(fn, 2000)

    _.negate(fn)

    _.memoize(fn)
    _.memoize(fn, ...)

Strings
-------

### Capitalization

    _.capitalize('hello world'); // → 'Hello world'
    _.startCase('hello_world'); // → 'Hello World'
    _.snakeCase('hello world'); // → 'hello_world'
    _.kebabCase('hello world'); // → 'hello-world'
    _.camelCase('hello world'); // → 'helloWorld'

### Padding

    _.pad('abc', 3); // → 'abc'
    _.pad('abc', 8); // → '   abc  '
    _.pad('abc', 8, '_-'); // → '_-abc_-_'
    _.padStart('abc', 3); // → 'abc'
    _.padStart('abc', 6); // → '   abc'
    _.padStart('abc', 6, '_-'); // → '_-_abc'
    _.padEnd('abc', 3); // → 'abc'
    _.padEnd('abc', 6); // → 'abc   '
    _.padEnd('abc', 6, '_-'); // → 'abc_-_'

### Trim

    _.trim('  str  '); // → 'str'
    _.trimLeft('  str  '); // → 'str  '
    _.trimRight('  str  '); // → '  str'

### Etc

    _.repeat('-', 2); // → '--'
    _.deburr('déjà vu'); // → 'deja vu'
    _.trunc('hello world', 5); // → 'hello...'

    _.startsWith('abc', 'a'); // → true
    _.endsWith('abc', 'c'); // → true

Objects
-------

### Keys and values

    _.keys(obj);
    _.values(obj);

Chaining
--------

### Chain and value

    _([1, 2, 3])
        .reduce((total, n) => total + n)
        .map((n) => n * n)
        .tap(console.log)
        .thru((n) => n.reverse())
        .value();
