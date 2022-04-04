subtitle

2022-01-03

------------------------------------------------------------------------

title: co category: JavaScript libraries

weight: -1 intro: | [co](https://github.com/tj/co) allows you to use generators to manage async flow.

------------------------------------------------------------------------

### Running generators

    co(function * () {
      yield Promise.resolve(true)
    }).then(...)

A generator can `yield` a thunk or promise. Using `co()` will immediately invoke the block inside it.

### Generator → Promise

    var fn = co.wrap(function * (val) {
      return yield Promise.resolve(val)
    })

    fn().then(...)

Use `co.wrap()`. Most of the time, you’ll be using co.wrap.

### Generator → Node callback

    var get = unyield(function * () {
    })

    get(function (err, res) { ... })

Use [unyield](https://github.com/MatthewMueller/unyield). (You can [thunkify](https://github.com/visionmedia/node-thunkify) this later)

### Node callback → Thunk

    var readFile = thunkify(fs.readFile);

    co(function* () {
        var data = yield readFile('index.txt', 'utf-8');
    });

Use [thunkify](https://github.com/visionmedia/node-thunkify). You can yield this. You can also use [thenify](https://www.npmjs.com/package/thenify) too.

### Using Node.js API

    var readFile = require('mz/fs').readFile

    var getLines = co.wrap(function * (filename) {
      var data = yield readFile(filename, 'utf-8')
      return data.split('\n')
    })

    getLines('file.txt').then((lines) => { ... })

Use [mz](https://www.npmjs.com/package/mz) for async Node.js API. You can also either [thunkify](https://github.com/visionmedia/node-thunkify) or [thenify](https://www.npmjs.com/package/thenify) them instead.
