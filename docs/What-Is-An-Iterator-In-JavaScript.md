What Is An Iterator In JavaScript?
==================================

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

------------------------------------------------------------------------

### What Is An Iterator In JavaScript?

#### In JavaScript an **iterator** is an object which defines a sequence and potentially a return value upon its termination.

  

<figure><img src="https://cdn-images-1.medium.com/max/800/0*3-Pds8MFCSFYwxkY.png" class="graf-image" /></figure>Specifically, an iterator is any object which implements the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol" class="markup--anchor markup--p-anchor">Iterator protocol</a> by having a `next()` method that returns an object with two properties:

`value`The next value in the iteration sequence.`done`This is `true` if the last value in the sequence has already been consumed. If `value` is present alongside `done`, it is the iterator's return value.

Once created, an iterator object can be iterated explicitly by repeatedly calling `next()`. Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to `next()` should continue to return `{done: true}`.

  

<figure><img src="https://cdn-images-1.medium.com/max/800/0*b-h4LdKMIx8tueUm.gif" alt="But then what’s the value of the [Symbol.iterator] on the values that aren&#39;t iterable?" class="graf-image" /><figcaption>But then what’s the value of the <code class="markup--code markup--figure-code">[Symbol.iterator]</code> on the values that aren't iterable?</figcaption></figure>  

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AVzEb9anFkVjX0A_.gif" alt="[Symbol.iterator] has to return an iterator, containing a next method which returns an object just like we saw before: { value: &#39;...&#39;, done: false/true }." class="graf-image" /><figcaption><code class="markup--code markup--figure-code">[Symbol.iterator]</code> has to return an iterator, containing a <code class="markup--code markup--figure-code">next</code> method which returns an object just like we saw before: <code class="markup--code markup--figure-code">{ value: '...', done: false/true }</code>.</figcaption></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*0tvLo7-NPwgF3oGaLlgZ4g.png" class="graf-image" /></figure>### <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generator_functions" class="markup--anchor markup--h3-anchor" title="Permalink to Generator functions">Generator functions</a>

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. **Generator functions** provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the `function*` syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a **Generator**. When a value is consumed by calling the generator’s `next` method, the Generator function executes until it encounters the `yield` keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators"><strong>Iterators and generators - JavaScript | MDN</strong><br />
<em>Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

  

[View original.](https://medium.com/p/9c2e0f09ac6e)

Exported from [Medium](https://medium.com) on August 10, 2021.
