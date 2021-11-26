JavaScript Unit Testing & TDD
=============================

All about Testing

------------------------------------------------------------------------

### JavaScript Unit Testing & TDD

### All about Testing

-   <span id="640f">*The general idea across all testing frameworks is to allow developers to write code that would specify the behavior of a function or module or class.*</span>
-   <span id="11e6">Testing one function at a time is vulnerable to false negatives and false positives.</span>

### Why do we test?

-   <span id="c83e">To make sure everything works.</span>
-   <span id="3070">Increase flexibility & reduce fear of code.</span>

A**utomated Tests** are known as **Specs**, they:

-   <span id="b0d5">Make collaboration easier.</span>
-   <span id="1416">Produce Documentation.</span>

### How We Test

-   <span id="fd4c">**Testing Framework** : Runs the tests and presents them to a user.</span>
-   <span id="8569">**Assertion Libraries** : Backbone of written tests, the code that we use to write our tests.</span>
-   <span id="ec0c">**Mocha** : JS testing framework which is highly flexible; supports a variety of assertion libraries.</span>
-   <span id="b570">**Domain Specific Language** : Refers to a computer language specialized for a particular purpose</span>

### What do we Test?

-   <span id="d93c">The public interface:</span>
-   <span id="9d42">Ask yourself, “What is the public interface of the module or class I’m writing?”</span>
-   <span id="bddd">When in doubt, make sure that you at least have the most important and/or complex parts of that interface working as intended.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-u18Iz0pA_e0pX2p" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*Moc1ywM-IYBKtL1l.png" class="graf-image" /></figure>*The Testing Pyramid*

### Unit Tests : The smallest unit of testing.

-   <span id="ad85">Used to test smallest pieces in isolation before putting everything together.</span>
-   <span id="82a9">Tests ONE THING.</span>

### Integration Tests : Test the interactions between two pieces of your application.

### End to End : Closest automated tests come to testing the actual user experience of your application.

**Reading Tests**

-   <span id="c012">Most important thing about a test is that it is **readable** and **understandable.**</span>

<!-- -->

    describe("avgValue()", function () {
      it("should return the average of an array of numbers", function () {
        assert.equal(avgValue([10, 20]), 15);
      });
    });

-   <span id="70aa">avgValue() =&gt; The function we will be testing.</span>
-   <span id="95ad">it(“string”) =&gt; describes the desired output.</span>

### Test-Driven Development

-   <span id="abf2">TDD is a quick repetitive cycle that revolves around first determining what a piece of code should do and writing tests for that behavior *before actually writing any code*.</span>

### A simple example just to give an idea of what test code looks like… note that it reads more like spoken english than normal code…

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 25, 2021](https://medium.com/p/72908e7730f5).

<a href="https://medium.com/@bryanguner/javascript-unit-testing-tdd-72908e7730f5" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
