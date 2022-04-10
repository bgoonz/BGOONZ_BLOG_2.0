subtitle

2022-01-03

------------------------------------------------------------------------

title: Chai.js category: JavaScript libraries

weight: -3 version: chai v4.x description: | expect(x).to.be.equal(y) 〉 assert.equal(x, y) 〉 .to.be.true 〉 jQuery, assertions, TDD and BDD, and other Chai examples.

------------------------------------------------------------------------

### Assert

    const { assert } = require('chai');

{: .-setup}

    assert(val);
    assert.fail(actual, expected);
    assert.ok(val); // is truthy
    assert.equal(actual, expected); // compare with ==
    assert.strictEqual(actual, expected); // compare with ===
    assert.deepEqual(actual, expected); // deep equal check

    assert.isTrue(val);
    assert.isFalse(val);

    assert.isNull(val);
    assert.isNotNull(val);
    assert.isUndefined(val);
    assert.isDefined(val);
    assert.isFunction(val);
    assert.isObject(val);
    assert.isArray(val);
    assert.isString(val);
    assert.isNumber(val);
    assert.isBoolean(val);

    assert.typeOf(/tea/, 'regexp'); // Object.prototype.toString()
    assert.instanceOf(chai, Tea);
    assert.include([a, b, c], a);
    assert.match(val, /regexp/);
    assert.property(obj, 'tea'); // 'tea' in object
    assert.deepProperty(obj, 'tea.green');
    assert.propertyVal(person, 'name', 'John');
    assert.deepPropertyVal(post, 'author.name', 'John');

    assert.lengthOf(object, 3)
    assert.throws(function() { ... })
    assert.throws(function() { ... }, /reference error/)
    assert.doesNotThrow

    assert.operator(1, '<', 2);
    assert.closeTo(actual, expected);

See: [Assert API](http://chaijs.com/api/assert/) *(chaijs.com)*

### BDD syntax

    const { expect } = require('chai');

{: .-setup}

    expect(object)
        .to.equal(expected)
        .to.eql(expected) // deep equality
        .to.deep.equal(expected) // same as .eql
        .to.be.a('string')
        .to.include(val);

      .be.ok(val)
      .be.true
      .be.false
      .to.exist

      .to.be.null
      .to.be.undefined
      .to.be.empty
      .to.be.arguments
      .to.be.function
      .to.be.instanceOf

      .to.be.gt(5)  // aka: .above .greaterThan
      .to.be.gte(5) // aka: .at.least
      .to.be.lt(5)  // aka: .below

      .to.respondTo('bar')
      .to.satisfy((n) => n > 0)

      .to.have.members([2, 3, 4])
      .to.have.keys(['foo'])
      .to.have.key('foo')
      .to.have.lengthOf(3)

    expect(() => { ··· })
      .to.throw(/not a function/)

See: [BDD](http://chaijs.com/api/bdd/) *(chaijs.com)*

### Should: chains

    .to .be .been .is .that .and .have .with .at .of .same

These don’t do anything and can be chained.

### Should not

    expect(object).not.equal('x');

Chai with jQuery
----------------

### Using chai-jquery

    global.jQuery = ···
    chai.use(require('chai-jquery'))

{: .-setup}

    expect($body).have.attr('foo').have.prop('disabled').have.css('background').have.css('background-color', '#ffffff').have.data('foo');

      .have.class('active')
      .have.id('id')

      .have.html('<em>hi</em>')
      .have.text('hello')
      .have.value('2013')

### Continued

    expect($body);

      .be.visible
      .be.hidden

      .be.checked
      .be.selected

      .be.enabled
      .be.disabled

      .be.empty
      .to.exist
      .to.contain('text')
      .to.have('.selector')
