How To Implement Native(ES6) Data Structures Using Arrays & Objects
===================================================================

Smart data structures and dumb code works better than the other way around -“Eric S. Raymond”

------------------------------------------------------------------------

### How To Implement Native(ES6) Data Structures Using Arrays & Objects

<a href="https://www.azquotes.com/quote/636065?ref=data-structures" class="markup--anchor markup--p-anchor">Smart data structures and dumb code works better than the other way around</a> <a href="https://twitter.com/esrtweet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="markup--anchor markup--p-anchor"><strong>-“Eric S. Raymond”</strong></a>

<figure><img src="https://cdn-images-1.medium.com/max/600/0*ZBBOzoXj5SgXtZb7.png" alt="https://data-flair.training/blogs/javascript-data-structures/" class="graf-image" /><figcaption><a href="https://data-flair.training/blogs/javascript-data-structures/" class="markup--anchor markup--figure-anchor">https://data-flair.training/blogs/javascript-data-structures/</a></figcaption></figure>#### *Abstract Data type (ADT) is a type (or class) for objects whose behavior is*

#### *defined by a set of value and a set of operations. The definition of ADT only mentions what operations are to be performed but not how these operations will be implemented.*

> <a href="https://stackoverflow.com/a/31113335/15158587" class="markup--anchor markup--blockquote-anchor">Abstract Data Type(ADT) is a data type, where only behavior is defined but not implementation.</a>

> <a href="https://stackoverflow.com/a/31113335/15158587" class="markup--anchor markup--blockquote-anchor">Opposite of ADT is Concrete Data Type (CDT), where it contains an implementation of ADT.</a>

> **Examples:**  
> `Array, List, Map, Queue, Set, Stack, Table, Tree, and Vector` are ADTs. Each of these ADTs has many implementations i.e. CDT. The container is a high-level ADT of above all ADTs.

> **Real life example:**  
> book is Abstract (Telephone Book is an implementation)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*mAq2n01VTypXYWh0.jpg" class="graf-image" /></figure><a href="https://stackoverflow.com/a/65771454/15158587" class="markup--anchor markup--p-anchor">Abstract data types, commonly abbreviated ADTs, are a way of classifying data structures based on how they are used and the behaviors they provide.</a> They do not specify how the data structure must be implemented or laid out in memory, but simply provide a minimal expected interface and set of behaviors. For example, a stack is an abstract data type that specifies a linear data structure with LIFO (last in, first out) behavior. Stacks are commonly implemented using arrays or linked lists, but a needlessly complicated implementation using a binary search tree is still a valid implementation. To be clear, it is incorrect to say that stacks are arrays or vice versa. An array can be used as a stack. Likewise, a stack can be implemented using an array.

Since abstract data types don’t specify an implementation, this means it’s also incorrect to talk about the time complexity of a given abstract data type. An associative array may or may not have O(1) average search times. An associative array that is implemented by a hash table does have O(1) average search times.

Further Reading:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#map_object" class="markup--anchor markup--p-anchor">Keyed collections — JavaScript | MDN (mozilla.org)</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages" class="markup--anchor markup--p-anchor">Details of the object model — JavaScript | MDN (mozilla.org)</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" class="markup--anchor markup--p-anchor">Set — JavaScript | MDN (mozilla.org)</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" class="markup--anchor markup--p-anchor">Map — JavaScript | MDN (mozilla.org)</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" class="markup--anchor markup--p-anchor">JavaScript data types and data structures — JavaScript | MDN (mozilla.org)</a>

### For more content… go to :

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 15, 2021](https://medium.com/p/ce953b9f6a07).

<a href="https://medium.com/@bryanguner/how-to-implement-native-es6-data-structures-using-arrays-objects-ce953b9f6a07" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
