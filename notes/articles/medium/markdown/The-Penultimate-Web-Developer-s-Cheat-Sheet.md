The Penultimate Web Developer’s Cheat Sheet
===========================================

I am literally just going to combine a fair number of my Cheat Sheets in no particular order.

------------------------------------------------------------------------

### The Penultimate Web Developer’s Cheat Sheet

I am literally just going to combine a fair number of my Cheat Sheets in no particular order.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Cfl2fI-p4Y1XGAkS.png" class="graf-image" /></figure>### HTML:

    <!-- Document Summary -->

    <!DOCTYPE html>        <!-- Tells the browser that HTML5 version of HTML to be recognized by the browser -->

    <html lang="en"></html>        <!-- The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, -->

    <head></head>     <!-- Contains Information specific to the page like title, styles and scripts -->

    <title></title>        <!-- Title for the page that shows up in the browser title bar -->

    <body></body>     <!-- Content that the user will see -->

    <!-- Document Information -->

    <base/>        <!-- Usefull for specifying relative links in a document -->

    <style></style>        <!-- Contains styles for the html document -->

    <meta/>        <!-- Contains additional information about the page, author, page description and other hidden page info -->

    <script></script>         <!-- Contains all scripts internal or external -->

    <link/>        <!-- Used to create relationships with external pages and stylesheets -->

    <!-- Document Structure -->

    <h1></h1> ... <h6></h6>        <!-- All six levels of heading with 1 being the most promiment and 6 being the least prominent -->

    <p></p>        <!-- Used to organize paragraph text -->

    <div></div>       <!-- A generic container used to denote a page section -->

    <span></span>     <!-- Inline section or block container used for creating inline style elements -->

    <br/>          <!-- Creates a line-break -->

    <hr>           <!-- Creates a sectional break into HTML -->

    <!-- Text Formatting -->

    <strong></strong> and <b></b>     <!-- Makes text contained in the tag as bold -->

    <em></em> and <i></i>     <!-- Alternative way to make the text contained in the tag as italic -->

    <strike></strike>         <!-- Creates a strike through the text element -->

    <pre></pre>       <!-- Preformatted monospace text block with some spacing intact -->

    <blockquote></blockquote>      <!-- Contains long paragraphs of quotations often cited -->

    <abbr></abbr>     <!-- Contains abbreviations while also making the full form avaialable -->

    <address></address>       <!-- Used to display contact information -->

    <code></code>     <!-- Used to display inline code snippets -->

    <q></q>        <!-- Defines a short inline quotation -->

    <sub></sub>       <!--  Defines subscripted text -->

    <sup></sup>       <!-- Defines superscripted text -->

    <kbd></kbd>       <!-- Specifies text as keyboard input -->

    <small></small>        <!-- Specifies small text -->

    <!-- Links Formatting -->

    <a href="url"></a>        <!-- Used to link to external or internal pages of a wbesite -->

    <a href="mailto:email@example.com"></a>        <!-- Used to link to an email address -->

    <a href="name"></a>       <!-- Used to link to a document element -->

    <a href="#name"></a>      <!-- Used to link to specific div element -->

    <a href="tel://####-####-##"></a>      <!-- Used to display phone numbers and make them clickable -->

    <!-- Image Formatting -->

    <img src="url" alt="text">     <!-- Used to display images in a webpage where src="url" contains the link to the image source and alt="" contains an alternative text to display when the image is not displayed -->

    <!-- List Formatting -->

    <ol></ol>         <!-- Used to create ordered lists with numbers in the items -->

    <ul></ul>         <!-- Used to display unordered lists with numbers in the items -->

    <li></li>         <!-- Contains list items inside ordered and unordered lists -->

    <dl></dl>         <!-- Contains list item definitions -->

    <dt></dt>         <!-- Definition of single term inline with body content -->

    <dd></dd>         <!-- The descrpition of the defined term -->

    <!-- Forms Formatting and Attributes -->

    <form action="url"></form>     <!-- Form element creates a form and action="" specifies where the data is to be sent to when the visitor submits the form -->

    <!-- Supported attributes -->

    method="somefunction()"        <!-- Contains the type of request (GET, POST... etc) which dictates how to send the data of the form -->

    enctype=""        <!-- Dictates how the data is to be encoded when the data is sent to the web server. -->

    autocomplete=""        <!-- Specifies if the autocomplete functionality is enabled or not -->

    novalidate        <!-- Dictates if the form will be validated or not -->

    accept-charset=""         <!-- Identifies the character encoding upon form submission -->

    target=""         <!-- Tell where to display the information upon form submission. Possible values: '_blank', '_self', '_parent', '_top' -->

    <fieldset disabled="disabled"></fieldset>      <!-- Identifies the group of all fields in the form -->

    <label for=""></label>    <!-- A simple field label telling the user what to type in the field -->

    <legend></legend>         <!-- The form legend acts as a caption for the fieldset element -->

    <input type="text/email/number/color/date">    <!-- Input is the input field where the user can input various types of data -->

    <!-- Supported attributes -->

    name=""        <!-- Describes the name of the form -->

    width=""          <!-- Specifies the width of an input field -->

    value=""          <!-- Describes the value of the input information field -->

    size=""        <!-- Specifies the input element width in characters -->

    maxlength=""      <!-- Specifies the maximum input character numbers -->

    required=""       <!-- Specifies if the input field is required to fill in before submitting the form -->

    step=""        <!-- Identifies the legal number intervals of the input field -->

    <textarea name="" id="" cols="30" rows="10">      <!-- Specifies a large input text field for longer messages -->

    </textarea>

    <select name=""></select>      <!-- Describes a dropdown box for users to select from variety of choices -->

    <!-- Supported attributes -->

    name=""        <!-- The name for a dropdown combination box -->

    size=""        <!-- Specifies the number of available options -->

    multiple          <!-- Allows for multiple option selections -->

    required          <!-- Requires that a value is selected before submitting the form -->

    autofocus         <!-- Specifies that the dropdown automatically comes to focus once the page loads -->

    <optgroup></optgroup>     <!-- Specifies the entire grouping of available options -->

    <option value=""></option>     <!-- Defines one of the avaialble option from the dropdown list -->

    <button></button>         <!-- A clickable button to submit the form -->

    <!-- Tables Formatting -->

    <table></table>        <!-- Defines and contains all table related content -->

    <caption></caption>       <!-- A description of what table is and what it contains -->

    <thead></thead>        <!-- The table headers contain the type of information defined in each column underneath -->

    <tbody></tbody>        <!-- Contains the tables data or information -->

    <tfoot></tfoot>        <!-- Defines table footer -->

    <tr></tr>         <!-- Contains the information to be included in a table row -->

    <th></th>         <!-- Contains the information to be included in a single table header -->

    <td></td>         <!-- Contains actual information in a table cell -->

    <colgroup></colgroup>     <!-- Groups a single or multiple columns for formatting purposes -->

    <col>          <!-- Defines a single column of information inside a table -->

    <!-- Objects and iFrames -->

    <object data=""></object>      <!-- Describes and embed file type including audio, video, PDF's, images -->

    <!-- Supported attributes -->

    type=""        <!-- Describes the type of media embedded -->

    height=""         <!-- Describes the height of the object in pixels -->

    width=""          <!-- Describes the width of the object in pixels -->

    usemap=""         <!-- This is the name of the client-side image map in the object -->

    <iframe src="" frameborder="0"></iframe>       <!-- Contains an inline frame that allows to embed external information -->

    <embed src="" type="">    <!-- Acts as a container for external application or plug-in -->

    src=""         <!-- The source of the external file you're embedding -->

    width=""          <!-- Describes the width of the iframe in pixels -->

    <!-- HTML5 New Tags -->

    <header></header>         <!-- Defines the header block for a document or a section -->

    <footer></footer>         <!-- Defines the footer block for a document or a section -->

    <main></main>     <!-- Describes the main content of a document -->

    <article></article>       <!-- Identifies an article inside a document -->

    <aside></aside>        <!-- Specifies content contained in a document sidebar -->

    <section></section>       <!-- Defines a section of a document -->

    <details></details>       <!-- Describes additonal information that user can view or hide -->

    <dialog></dialog>         <!-- A dialog box or a window -->

    <figure></figure>         <!-- An independent content block featuring images, diagrams or illustrations -->

    <figcaption></figcaption>      <!-- Caption that describe a figure -->

    <mark></mark>     <!-- Displays a portion of highlighted text with in a page content -->

    <nav></nav>       <!-- Navigation links for the user in a document -->

    <menuitem></menuitem>     <!-- The specific menu item that a user can raise from a pop up menu -->

    <meter></meter>        <!-- Describes the scalar measurement with in a known array -->

    <progress></progress>     <!-- Displays the progress of a task usually a progress bar -->

    <rp></rp>         <!-- Describes text within the browsers that do not support ruby notations -->

    <rt></rt>         <!-- Displays east asian typography character details -->

    <ruby></ruby>     <!-- Describes annotations for east asian typography -->

    <summary></summary>       <!-- Contains a visible heading for details element -->

    <bdi></bdi>       <!-- Helps you format parts of text in a different direction than other text -->

    <time></time>     <!-- Identifies the time and date -->

    <wbr>          <!-- A line break within the content -->

    <!-- Some other useful tags -->

    <canvas></canvas>         <!-- Allows to draw 2D shapes on the web page with the help of javascript -->

    <keygen>          <!-- Represents a control for generating a public-private key pair -->

    <map></map>       <!-- Specifies an image map -->

    <!-- Collective Character Obejcts -->

    &#34; &quot; Quotation Marks - "

    &#38; &amp; Ampersand - &

    &#60; &lt; Less than sign - <

    &#62; &gt; Greater than sign - >

    &#160; &nbsp; Non-breaking space

    &#169; &copy; Copyright Symbol - ©

    &#64; &Uuml; @ symbol - @

    &#149; &ouml; Small bullet - .

    &#153; &ucirc; Trademark Symbol - ™

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### GIT:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### CSS:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

------------------------------------------------------------------------

### Bootstrap:

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### Bash:

> Continued:

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### Python:

-   <span id="37d9">Python is an interpreted, high-level and general-purpose, dynamically typed programming language</span>
-   <span id="bff6">It is also Object oriented, modular oriented and a scripting language.</span>
-   <span id="7582">In Python, everything is considered as an Object.</span>
-   <span id="c52a">A python file has an extension of .py</span>
-   <span id="6d41">Python follows Indentation to separate code blocks instead of flower brackets({}).</span>
-   <span id="bcb1">We can run a python file by the following command in cmd(Windows) or shell(mac/linux).</span>
-   <span id="b333">`python <filename.py>`</span>

#### By default, the python doesn’t require any imports to run a python file.

### Create and execute a program

1.  <span id="e0d4">Open up a terminal/cmd</span>
2.  <span id="07e7">Create the program: nano/cat &gt; <a href="http://nameprogram.py/" class="markup--anchor markup--li-anchor" title="http://nameProgram.py">nameProgram.py</a></span>
3.  <span id="85c1">Write the program and save it</span>
4.  <span id="b0b9">python <a href="http://nameprogram.py/" class="markup--anchor markup--li-anchor" title="http://nameProgram.py">nameProgram.py</a></span>

### Basic Datatypes

<figure><img src="https://cdn-images-1.medium.com/max/800/1*g1SbmDwyQP_-e4jDRkhrpg.png" class="graf-image" /></figure>### Keywords

<figure><img src="https://cdn-images-1.medium.com/max/800/1*XDaTnxa69qOMTSZpdxE1pA.png" class="graf-image" /></figure>### Operators

<figure><img src="https://cdn-images-1.medium.com/max/800/1*WhZHWsF544F3Jou4TOdlvQ.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*G4pUq67UDWJSZsULGe7j2g.png" class="graf-image" /></figure>### Basic Data Structures

### List

-   <span id="0a85">List is a collection which is ordered and changeable. Allows duplicate members.</span>
-   <span id="7fb3">Lists are created using square brackets:</span>

<!-- -->

    thislist = ["apple", "banana", "cherry"]

-   <span id="ad36">List items are ordered, changeable, and allow duplicate values.</span>
-   <span id="b28c">List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.</span>
-   <span id="1ef0">The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.</span>
-   <span id="18ce">To determine how many items a list has, use the `len()` function.</span>
-   <span id="f077">A list can contain different data types:</span>

<!-- -->

    list1 = ["abc", 34, True, 40, "male"]

-   <span id="a2ab">It is also possible to use the list() constructor when creating a new list</span>

<!-- -->

    thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets

### Tuple

-   <span id="9f04">Tuple is a collection which is ordered and unchangeable. Allows duplicate members.</span>
-   <span id="1462">A tuple is a collection which is ordered and unchangeable.</span>
-   <span id="db02">Tuples are written with round brackets.</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry")

-   <span id="0249">Tuple items are ordered, unchangeable, and allow duplicate values.</span>
-   <span id="63df">Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.</span>
-   <span id="49b8">When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.</span>
-   <span id="48f5">Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.</span>
-   <span id="9c3c">Since tuple are indexed, tuples can have items with the same value:</span>
-   <span id="2e5f">Tuples allow duplicate values:</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry", "apple", "cherry")

-   <span id="bb80">To determine how many items a tuple has, use the `len()`function:</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry")
    print(len(thistuple))

-   <span id="8326">To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.</span>

<!-- -->

    thistuple = ("apple",)
    print(type(thistuple))

    #NOT a tuple
    thistuple = ("apple")
    print(type(thistuple))

-   <span id="6c4d">It is also possible to use the tuple() constructor to make a tuple.</span>

<!-- -->

    thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
    print(thistuple)

### Set

-   <span id="1ac0">Set is a collection which is unordered and unindexed. No duplicate members.</span>
-   <span id="99a8">A set is a collection which is both unordered and unindexed.</span>

<!-- -->

    thisset = {"apple", "banana", "cherry"}

-   <span id="636a">Set items are unordered, unchangeable, and do not allow duplicate values.</span>
-   <span id="b19b">Unordered means that the items in a set do not have a defined order.</span>
-   <span id="7cee">Set items can appear in a different order every time you use them, and cannot be referred to by index or key.</span>
-   <span id="6b4a">Sets are unchangeable, meaning that we cannot change the items after the set has been created.</span>
-   <span id="fdcb">Duplicate values will be ignored.</span>
-   <span id="8583">To determine how many items a set has, use the `len()` method.</span>

<!-- -->

    thisset = {"apple", "banana", "cherry"}

    print(len(thisset))

-   <span id="f9cc">Set items can be of any data type:</span>

<!-- -->

    set1 = {"apple", "banana", "cherry"}
    set2 = {1, 5, 7, 9, 3}
    set3 = {True, False, False}
    set4 = {"abc", 34, True, 40, "male"}

-   <span id="7aab">It is also possible to use the `set()` constructor to make a set.</span>

<!-- -->

    thisset = set(("apple", "banana", "cherry")) # note the double round-brackets

### Dictionary

-   <span id="8374">Dictionary is a collection which is unordered and changeable. No duplicate members.</span>
-   <span id="3cd2">Dictionaries are used to store data values in key:value pairs.</span>
-   <span id="4191">Dictionaries are written with curly brackets, and have keys and values:</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }

-   <span id="5cfc">Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }
    print(thisdict["brand"])

-   <span id="d4b0">Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.</span>
-   <span id="3c5c">Dictionaries cannot have two items with the same key.</span>
-   <span id="cd45">Duplicate values will overwrite existing values.</span>
-   <span id="0ee1">To determine how many items a dictionary has, use the `len()` function.</span>

<!-- -->

    print(len(thisdict))

-   <span id="b2fc">The values in dictionary items can be of any data type</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "electric": False,
      "year": 1964,
      "colors": ["red", "white", "blue"]
    }

### Conditional branching

    if condition:
            pass
        elif condition2:
            pass
        else:
            pass

### Loops

Python has two primitive loop commands:

1.  <span id="7947">while loops</span>
2.  <span id="672e">for loops</span>

#### While loop

-   <span id="66af">With the `while` loop we can execute a set of statements as long as a condition is true.</span>
-   <span id="7eb7">Example: Print i as long as i is less than 6</span>

<!-- -->

    i = 1
    while i < 6:
      print(i)
      i += 1

-   <span id="e54c">The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.</span>
-   <span id="b346">With the `break` statement we can stop the loop even if the while condition is true</span>
-   <span id="798e">With the continue statement we can stop the current iteration, and continue with the next.</span>
-   <span id="7718">With the else statement we can run a block of code once when the condition no longer is true.</span>

#### For loop

-   <span id="917e">A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</span>
-   <span id="e381">This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</span>
-   <span id="3635">With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</span>

<!-- -->

    fruits = ["apple", "banana", "cherry"]
    for x in fruits:
      print(x)

-   <span id="f8c0">The for loop does not require an indexing variable to set beforehand.</span>
-   <span id="350f">To loop through a set of code a specified number of times, we can use the range() function.</span>
-   <span id="3824">The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</span>
-   <span id="2b5b">The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).</span>
-   <span id="4fae">The else keyword in a for loop specifies a block of code to be executed when the loop is finished.  
    A nested loop is a loop inside a loop.</span>
-   <span id="897a">The “inner loop” will be executed one time for each iteration of the “outer loop”:</span>

<!-- -->

    adj = ["red", "big", "tasty"]
    fruits = ["apple", "banana", "cherry"]

    for x in adj:
      for y in fruits:
        print(x, y)

-   <span id="2c64">for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.</span>

<!-- -->

    for x in [0, 1, 2]:
      pass

### Function definition

    def function_name():
        return

### Function call

    function_name()

-   <span id="a1f2">We need not to specify the return type of the function.</span>
-   <span id="4c78">Functions by default return `None`</span>
-   <span id="b047">We can return any datatype.</span>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### JavaScript:

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### TypeScript:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### React:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*jUFEdBQ552AU7eeQQ7EdPw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### Node:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### JQuery:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### Markdown:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### JSON:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*nxdyK494Hu-gIs3dSZyrZQ.jpeg" class="graf-image" /></figure>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 29, 2021](https://medium.com/p/a02a423139a4).

<a href="https://medium.com/@bryanguner/the-penultimate-web-developers-cheat-sheet-a02a423139a4" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
