Testing
-------

### Quick start

    npm install --save-dev jest babel-jest

{: data-line="1”}

    /* Add to package.json */
    "scripts": {
      "test": "jest"
    }

    # Run your tests
    npm test -- --watch

See: [Getting started](http://facebook.github.io/jest/docs/en/getting-started.html)

### Writing tests

    describe('My work', () => {
        test('works', () => {
            expect(2).toEqual(2);
        });
    });

See: [describe()](http://facebook.github.io/jest/docs/en/api.html#describename-fn), [test()](http://facebook.github.io/jest/docs/en/api.html#testname-fn), [expect()](http://facebook.github.io/jest/docs/en/expect.html#content)

### BDD syntax

    describe('My work', () => {
      it('works', () => {
        ···
      })
    })

`it` is an alias for `test`. See: [test()](http://facebook.github.io/jest/docs/en/api.html#testname-fn)

### Setup

    beforeEach(() => { ... })
    afterEach(() => { ... })

    beforeAll(() => { ... })
    afterAll(() => { ... })

See: [afterAll() and more](http://facebook.github.io/jest/docs/en/api.html#afterallfn)

### Focusing tests

    describe.only(···)
    it.only(···) // alias: fit()

See: [test.only](http://facebook.github.io/jest/docs/en/api.html#testonlyname-fn)

### Skipping tests

    describe.skip(···)
    it.skip(···) // alias: xit()

See: [test.skip](http://facebook.github.io/jest/docs/en/api.html#testskipname-fn)

### Optional flags

<table><thead><tr class="header"><th>Flag</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>--coverage</code></td><td>See a summary of test coverage</td></tr><tr class="even"><td><code>--detectOpenHandles</code></td><td>See a summary of ports that didn’t close</td></tr><tr class="odd"><td><code>--runInBand</code></td><td>Run all tests one after the other</td></tr></tbody></table>

Expect
------

### Basic expectations

    expect(value).not.toBe(value).toEqual(value).toBeTruthy();

Note that `toEqual` is a deep equality check. See: [expect()](http://facebook.github.io/jest/docs/en/expect.html#expectvalue)

### Snapshots

    expect(value).toMatchSnapshot().toMatchInlineSnapshot();

Note that `toMatchInlineSnapshot()` requires Prettier to be set up for the project. See: [Inline snapshots](https://jestjs.io/docs/en/snapshot-testing#inline-snapshots)

### Errors

    expect(value).toThrow(error).toThrowErrorMatchingSnapshot();

### Booleans

    expect(value).toBeFalsy().toBeNull().toBeTruthy().toBeUndefined().toBeDefined();

### Numbers

    expect(value).toBeCloseTo(number, numDigits).toBeGreaterThan(number).toBeGreaterThanOrEqual(number).toBeLessThan(number).toBeLessThanOrEqual(number);

### Objects

    expect(value).toBeInstanceOf(Class).toMatchObject(object).toHaveProperty(keyPath, value);

### Objects

    expect(value).toContain(item).toContainEqual(item).toHaveLength(number);

### Strings

    expect(value).toMatch(regexpOrString);

### Others

    expect.extend(matchers);
    expect.any(constructor);
    expect.addSnapshotSerializer(serializer);

    expect.assertions(1);

More features
-------------

### Asynchronous tests

    test('works with promises', () => {
      return new Promise((resolve, reject) => {
        ···
      })
    })

{: data-line="2”}

    test('works with async/await', async () => {
      const hello = await foo()
      ···
    })

{: data-line="2”}

Return promises, or use async/await. See: [Async tutorial](http://facebook.github.io/jest/docs/en/tutorial-async.html)

### Snapshots

    it('works', () => {
        const output = something();
        expect(output).toMatchSnapshot();
    });

First run creates a snapshot. Subsequent runs match the saved snapshot. See: [Snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html)

### React test renderer

    import renderer from 'react-test-renderer';

{: .-setup}

    it('works', () => {
        const tree = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>).toJSON();

        expect(tree).toMatchSnapshot();
    });

{: data-line="2,3,4”}

React’s test renderer can be used for Jest snapshots. See: [Snapshot test](http://facebook.github.io/jest/docs/en/tutorial-react-native.html#snapshot-test)

### Timers

    jest.useFakeTimers();

    it('works', () => {
        jest.runOnlyPendingTimers();
        jest.runTimersToTime(1000);
        jest.runAllTimers();
    });

See: [Timer Mocks](http://facebook.github.io/jest/docs/en/timer-mocks.html)

Mock functions
--------------

### Mock functions

    const fn = jest.fn();

    const fn = jest.fn((n) => n * n);

See: [Mock functions](http://facebook.github.io/jest/docs/en/mock-functions.html#using-a-mock-function)

### Assertions

    expect(fn)
      .toHaveBeenCalled()
      .toHaveBeenCalledTimes(number)
      .toHaveBeenCalledWith(arg1, arg2, ...)
      .toHaveBeenLastCalledWith(arg1, arg2, ...)

    expect(fn)
        .toHaveBeenCalledWith(expect.anything())
        .toHaveBeenCalledWith(expect.any(constructor))
        .toHaveBeenCalledWith(expect.arrayContaining([values]))
        .toHaveBeenCalledWith(expect.objectContaining({ props }))
        .toHaveBeenCalledWith(expect.stringContaining(string))
        .toHaveBeenCalledWith(expect.stringMatching(regexp));

### Instances

    const Fn = jest.fn();

    a = new Fn();
    b = new Fn();

    Fn.mock.instances;
    // → [a, b]

{: data-line="1”}

See: [.mock property](http://facebook.github.io/jest/docs/en/mock-functions.html#mock-property)

### Calls

    const fn = jest.fn();
    fn(123);
    fn(456);

    fn.mock.calls.length; // → 2
    fn.mock.calls[0][0]; // → 123
    fn.mock.calls[1][0]; // → 456

{: data-line="1,2,3”}

See: [.mock property](http://facebook.github.io/jest/docs/en/mock-functions.html#mock-property)

### Return values

    const fn = jest.fn(() => 'hello');

#### or:

    jest.fn().mockReturnValue('hello');
    jest.fn().mockReturnValueOnce('hello');

### Mock implementations

    const fn = jest
        .fn()
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 2);

{: data-line="2,3”}

    fn(); // → 1
    fn(); // → 2

References
----------

{: .-one-column}

-   <a href="http://facebook.github.io/jest/" class="uri">http://facebook.github.io/jest/</a> {: .-also-see}
