# LOADASH Cheat Sheet

## Lodash cheatsheet

> #### Excerpt
>
> This is not a complete list. · One-page guide to Lodash

---

### #Collections

#### Finding

```
_.filter(list, (n) => n % 2)
_.find(list, (n) => n % 2)
_.findLast(list, ...)
```

Works for both arrays and objects.

#### Accessing

```
_.at([ abcd ], 0)
_.at([ abcd ], [ 0, 1 ])
```

#### Set/get

```
_.set(object, 'users[0].name', value)
_.get(object, 'users[0].name')
_.get(object, ['users', 0, 'name'])
```

#### Iteration

```
_.forEach(list, (item, i) => ...)
_.forEachRight(list, ...)

_.map(list, ...)
```

```
_.every(users, (u) => u.active)
_.any(users, ...)
```

### #Array

#### Arrays

```
_.chunk([ abcd ], 2)
_.compact(list)

_.fill(Array(4), 'x')
_.flatten
_.flattenDeep
```

#### Filtering

```
_.drop([ abcdef ], 2)
_.dropRight([ abcdef ], 2)
_.take([ abcdef ], 2)
_.takeRight([ abcdef ], 2)
_.slice([ abcdef ], 2, 4)
```

```
_.initial([ abcdef ])
_.rest([ abcdef ])
```

```
_.dropWhile(list, 'active')
_.dropWhile(list, 'active', true)
_.dropWhile(list, { active: true })
_.dropWhile(list, (n) => ...)
_.dropRightWhile(list, ...)
```

```
_.without([ abcde ], b)
```

```
_.remove(list, (n) => n % 2)
```

#### Accessing

```
_.first([ abcdef ])
_.last([ abcdef ])
```

#### Sets

```
_.uniq()
_.difference([ abc ], [ bc ])
_.intersection([ abc ], [ bcd ])
_.union([ abc ], [ bcd ])
```

```
Array#concat()
```

#### Indexes

```
_.findIndex(list, fn)
_.findLastIndex(list, fn)
```

```
_.sortedIndex(list, val)
_.sortedLastIndex(list, val)
```

```
_.indexOf(list, val)
```

### #Functions

#### Currying

```
greet = (greeting, name) => `${greeting}, ${name}!`
```

```
fn = _.partial(fn, 'hi')
fn('joe')

fn = _.partial(fn, 'joe')
fn('yo')
```

```
_.curry(greet)('hi')
_.curryRight(greet)('joe')
```

### #Decorating functions

#### Throttling

```
_.throttle(fn)
_.debounce(fn)
```

#### Limiting

```
_.before(5, fn)
_.after(5, fn)
_.once(fn)
```

#### Etc

```
_.wrap(_.escape, (name) => `hi ${name}`)

_.delay(fn, 2000)

_.negate(fn)

_.memoize(fn)
_.memoize(fn, ...)
```

### #Strings

#### Capitalization

```
_.capitalize('hello world')
_.startCase('hello_world')
_.snakeCase('hello world')
_.kebabCase('hello world')
_.camelCase('hello world')
```

#### Padding

```
_.pad('abc', 3)
_.pad('abc', 8)
_.pad('abc', 8, '_-')
_.padStart('abc', 3)
_.padStart('abc', 6)
_.padStart('abc', 6, '_-')
_.padEnd('abc', 3)
_.padEnd('abc', 6)
_.padEnd('abc', 6, '_-')
```

#### Trim

```
_.trim('  str  ')
_.trimLeft('  str  ')
_.trimRight('  str  ')
```

#### Etc

```
_.repeat('-', 2)
_.deburr('déjà vu')
_.trunc('hello world', 5)
```

```
_.startsWith('abc', 'a')
_.endsWith('abc', 'c')
```

### #Objects

#### Keys and values

```
_.keys(obj)
_.values(obj)
```

### #Chaining

#### Chain and value

```
_([1, 2, 3])
  .reduce((total, n) => total + n)
  .map((n) => n * n)
  .tap(console.log)
  .thru((n) => n.reverse())
  .value()
```
