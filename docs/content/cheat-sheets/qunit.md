    QUnit.module('a');
    QUnit.test('ok', function (t) {
        /* ... */
    });

### Hooks

#### Each test

    // each test
    QUnit.testStart(function)
    QUnit.testEnd(function)

    // each module
    QUnit.moduleStart(function)
    QUnit.moduleEnd(function)

    // all
    QUnit.begin(function)
    QUnit.done(function)

### Assertions

    t.equal(actual, expected);
    t.deepEqual(actual, expected);
    t.strictEqual(actual, expected);
    t.propEqual(actual, expected);
    t.notEqual(actual, expected);
    t.expect(amount);
