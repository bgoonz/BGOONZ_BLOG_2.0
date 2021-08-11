var mdeps = require('../');
var test = require('tap').test;
var path = require('path');
var fs = require('fs');

test('parse ECMAScript deps', function (t) {
    t.plan(1);
    var d = mdeps();
    var deps = d.parseDeps('main.js', fs.readFileSync(path.join(__dirname, '/es6/main.js'), 'utf8'))
    t.same(deps, ['y'])
});

test('parse Vue component deps', function (t) {
    t.plan(1);
    var d = mdeps();
    var deps = d.parseDeps('Hello.vue', fs.readFileSync(path.join(__dirname, '/vue/Hello.vue'), 'utf8'))
    // Hello.vue imports lodash so it should contain ['lodash'] but we only want to make sure that `parseDeps` does not throw an exception
    t.same(deps, [])
});
