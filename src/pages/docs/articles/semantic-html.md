---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
Three different aspects of web site production:



*   Content -- the text, images, etc. What the user wants to read.

*   Style -- how the content is arranged on the page, fonts, colours, page style.

*   Behaviour -- how users interact with the site, data processing, dynamic page elements.

Since each requires different skills, a good (software) design would seperate them.

Each of these areas has a different associated technology in the web world: HTML, Cascading Style Sheets (CSS) and Javascript.

Note that it hasn't always been this way, HTML can do a bunch of Style things (eg. the \<font> tag) but now that we have good standards compliant browser we don't need to use them.

## Document Production

![](http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Metal_movable_type.jpg/640px-Metal_movable_type.jpg)

Moveable type, source [Wikimedia Commons](http://commons.wikimedia.org/wiki/File:Metal_movable_type.jpg)

Many years ago, when printed pages were made with moveable type, the printer who assembled the page of type was responsible for all aspects of the page design. They would choose the typeface, and in the early days even make the matrix and cast the type themselves. They would lay out the lines of text, choosing suitable spacing in each line, deciding where to break the line and adding hyphens to improve the overall look of the page while maintaining readability. The page was then set in the press and pages were printed.

Even before that, the monks who copied manuscripts did everything themselves, copying the text and adding beautiful illuminations to each page to add to the value of the book.

As the industry developed though, the task of type-setter became more mechanical. Other people became expert in how to best lay out pages, what visual design elements would best communicate the desired message etc. The type-setter still made the technical choices to achieve the desired goals, but didn't have to be an expert in design. The production of a printed document would involve a number of people who were expert in their given area, from author to visual designer to type-setter.

This team based approach to document production means that each person can develop their own expertise and to a certain extent, doesn't need to worry about what the people later in the chain will do. The author doesn't worry about how to place figures or images in the page, just that they will be there; the designer doesn't need to be concerned about kerning and the use of em-spaces in type-setting; the type-setter isn't an expert in the content of the text. All can work together to produce a superior printed document.

The world of document production worked like this for a long time until the invention of the personal computer and *Desktop Publishing* software. Suddenly, authors became designers and type-setters through easy to use computer software. They could choose fonts, set margins, force hyphenation and make minute decisions about the layout and look and feel of each page. Not surprisingly, this becomes a significant distraction from the task of creating content, but it also means that the expertise of the specialist designer or type-setter isn't used any more. This might lead to more productivity as the production process is compressed, but it doesn't usually lead to more readable, better presented documents; many of the early self-produced documents were an unsightly mix of fonts, colours and sizes.

If we fast-forward to the software tools we have today for document production, it's interesting to note that the expertise of the designer and typesetter has crept back in to the process. Rather than being involved in the production of every document, these people are now able to write stylesheets and templates as well as contribute to the algorithms used in the software to lay out the text on a page. Most companies will have a standard document template that is used for reports or letters, this has usually been designed by a professional and all the author needs to do is enter the text in the right place. Stylesheets in word processors mean that there will be a consistency of font use throughout the document and importantly, that the decisions on which fonts and how they are used doesn't need to be made by the author.

So, to summarise this little discussion of history, there have always been people who's expertise is the way that a text is rendered on the page. With the onset of desktop publishing software, there has been a tendency for the author to spend time in document design, meaning that the relevant expertise was not being applied. However, modern software now allows for the designer's voice to be heard again through the use of stylesheets and document templates. This leaves the author to concentrate on the text meaning they will be more productive and should produce better looking documents as well.

## Web Document Production

Fundamentally, the web is a technology for delivering content to readers through a document based interface (the web browser). So, producing web content is a document production process and as such, should parallel the ideas discussed above. It's interesting to look at the development of HTML and see how it parallels the developments described above.

Early HTML was a language for encoding content. It included tags for headings, paragraphs, lists etc. but didn't provide any way to change the way these things were rendered by the browser. The browser made sensible decisions and web documents all looked about the same. The focus was on the content. Soon, [graphical browsers](http://www.ncsa.illinois.edu/Projects/mosaic.html) started to appear that allowed images to be included in pages and people started to want to have some control over the appearance of their pages.

The growth of the web into the commercial arena and the wider range of documents being published led to the 'browser wars' between Netscape and Microsoft. One of the features of this war was the arms race of features in each browser designed to make web pages look better. Each vendor would introduce new ways to control the look and feel of pages, for example the \<FONT> tag was introduced by Netscape to allow control of the font used to display text while Microsoft included the \<MARQUEE> tag that displayed text scrolling across the page. Eventually, some of these tags were standardised into a later version of HTML and were implemented by most of the browsers. These tags encouraged authors to get involved in page design, in fact they had to since the only way to control the appearance of a page was to insert codes into the text.

While the \<FONT> tag allowed some control over the appearance of text, there was still a problem of laying out a page as a whole. The solution that became standard practice was to mis-use the \<TABLE> tag and construct the whole page as a table with rows and columns for the different page elements such as header, menu, content and footer. This worked really well, but again meant that the HTML code that an author was writing had to contain a lot of information about the layout of the page. In addition, it was common for people to mis-use tags just for the sake of appearance, for example to have more control over the appearance of headings, one might just encode them using \<B> or \<FONT> tags rather than header tags.

All of these additions to HTML and the mis-use of existing tags meant that a language that was originally designed to allow authors to concentrate on content had turned into a page layout language. Luckily, sense has prevailed and we have now developed ways to control page layout without adding special instructions into the HTML code - that is, we have the Cascading Stylesheet language (CSS). Once again, we can let the author concentrate on content in HTML while all (or most) design decisions are encoded in the stylesheet.

The current suite of web languages understood by your browser (HTML, CSS and Javascript) each serve different roles in the web development process:

*   HTML - Content

*   CSS - Style

*   Javascript - Behaviour

The third of these - Javascript and Behaviour - refer to the way that Javascript can be used to change the way that the user interacts with the page. This doesn't really have an analogue in the print document production world but it's an important aspect of modern web content production. It fits into this framework because the behavioural changes that Javascript can introduce should not be the concern of the content author or the visual designer (though both might have opinions on what they'd like to see).

It is useful to think of these three aspects of web design as independent things. The same web content could be presented using alternate stylesheets and have a completely different impact. Similarly, Javascript can be used to change the way that a user interacts with content, making it more usable. We can see the Style and Behaviour aspects as layers that are applied to the core Content to enhance it for the user.

## The Separation of Concerns

From a Computer Science/Software Engineering point of view there is a very important principle called the [Separation of Concerns](http://en.wikipedia.org/wiki/Separation_of_concerns) (SoC) that is illustrated perfectly by the way that the various web languages have evolved. The SoC principle is about partitioning the work that we do in software development into parts that can be considered separately. This is achieved by *modularisation* within a software project and is helped by things like classes and interface descriptions between modules

*   in fact these things have been developed to support SoC.

The SoC principle allows us to develop large complex software by allowing us to concentrate on different aspects of the solution. It could be that we do that alone, spending time on one aspect and then another, or as a team with different people assigned to different aspects. Either way, being able to work on part of the problem makes it manageable and improves the overall quality of the solution.

In web development, the separation of concerns is supported by the different languages that work together to build a modern web application. It is important to recognise this and make sure that we use each of these tools in such a way as to respect their roles and capabilities. So, while it is possible to use HTML structures to make text large and bold for a heading, we don't, we use one of the header tags and rely on the stylesheet to apply the appropriate settings. Having the author respect good HTML usage means that the designer can make assumptions about the page structure in the stylesheet and ensure that the document appearance is consistent for the user.

## Semantic HTML Markup

One corollary of this kind of thinking is that each component that we use should be used as it was designed and according to it's role in the overall picture. In particular for HTML this implies that the markup we use should encode only the *structure* of the document rather than aspects of the *appearance* which is properly dealt with using CSS. Further, this means that we should use markup in a way that imparts useful *meaning* to the document structure. This is generally known as using *Semantic HTML* ([Wikipedia](http://en.wikipedia.org/wiki/Semantic_HTML), [POSH](http://microformats.org/wiki/posh) on Microformats.org) and is the current best practice in HTML authoring.

To clarify this point we can look at some examples. Writing semantic HTML means using the HTML tags as they were designed to be used - to convey the meaning of a particular document structure or textual element. So a good example is when we want to encode the main heading in a page I would use the H1 tag:

This seems obvious, but in some cases, an author might decide that the default rendering of the H1 tag is too big, so rather than using CSS to define an alternate style, they use the H2 tag instead.

This may seem harmless, after all we've still marked up this text as a heading. The problem is that we've lost the information that this is the main heading in the page that was conveyed by the H1 tag.

Even worse, I could use the B (bold) tag and the now deprecated FONT tag to make my text look like a heading:

In this case the appearance might be ok but the markup is not appropriate for the task. The author's focus has been on the appearance rather than the meaning of the markup; we could say that the author is overstepping their responsibilities a little - the appearance of the text should be the domain of the designer. If the heading is encoded as in this example, the designer will not be able to re-style the headings in a robust way (we could apply a style to bold paragraphs but that would also apply to any other use of this markup in the text).

The example illustrates the importance of using an appropriate markup tag where one exists. In the case of a heading, this is pretty clear but other parts of the document might need a bit of thought to see what markup is appropriate. One common issue is whether to use a TABLE for some information that you want to appear as a list or array. TABLE is meant for data that has columns and rows, for example, the results of a survey or test scores for a class of students.

While it is less common these days, the most frequent mis-use of tables is as a means of laying out all or part of a page as a rectangular grid. You may still see this in the navigation links on a page which the designer might want to appear in a row near the top of the page or a column down the side. Semantically this is a list and should really be marked up as such. If a table-like appearance is needed then CSS rules can be used to acheive this (eg. display: table-row).

TABLE is sometimes used for things that might be more appropriately marked up as lists, eg. using UL (unordered list), OL (ordered list) or DL (description list) tags. An example might be the list of ingredients for a recipe; you might be tempted to encode it as a table because you want the quantities to be lined up in a column on the left. It might be appropriate to use TABLE here but a bit of reflection might tell you that it's really an unordered list - for example you might note that while there's usually a quantity for each ingredient it's not always the case ('salt to taste') so this isn't really columns of data, just list items that might have a distinguished field.

A final example might be the description of a staff member in an online directory, the commonly contains entries for name, office, phone number, email address etc and it might seem natural to encode this as a table if you want a nice neat layout. However, in this case there is more appropriate markup in the DL (description list) tag. Each entry in a description list contains two parts DT (description title) and DD (description data) which are used to mark up the property name and value:

Some authors are put off the description list because of the default style that is associated with it which puts the DT and DD parts on different lines. However, changing this is very easy with CSS so it really should be used for information that is structured in this way.

Using the right semantic markup *adds* information to the text that can be used by the designer to enhance the communicative power of the web page. Using a consistent style for headings makes it easier for a reader to see the structure of a page and understand it. Similarly, I can use inline tags for things like *emphasis* (EM), Abbrv. (abbreviations, ABBR), “a quotation” (Q) or **a strongly emphasised point** (STRONG). Each of these has a default style (or in some cases like ABBR, is just the same as the default text style) but can be re-styled by the designer to achieve a particular look and feel. If these elements are used consistently throughout a text, the overall readability of the text can be greatly improved.

Another motivation for using semantic markup is for users who cannot read via a normal web browser. Blind people make use software that reads out the content of a web page; if the page uses the appropriate semantic markup then the software can make use of this to present the content more appropriately to the user. This might include using the headings to provide a summary of the page or the emphasis tags to generate an appropriate intonation pattern. You might also think about the difference in reading out a list vs. a table of data - that might be a useful way of choosing between the two for a particular part of your page.

### Exercises

1.  Find an appropriate HTML tag to mark up the following items:

    *   the name of a book that you are citing in an essay

    *   a fragment of computer code, eg. a bit of Python

    *   an abbreviation or acronym and it's expansion (e.g. HTML - Hypertext Markup language)

## Extending the Semantics of HTML

The tag set defined by the HTML standard supports a wide range of content and was designed to cover the most common document structures and entities that appear on the web. However, the designers of HTML couldn't forsee everything that you might want to mark in your documents and so an extension mechanism is included such that you can effectively add new semantics to existing tags. This is the HTML class attribute which allows you to enter a user defined class for any tag. It is effectively a specialisation of any tag that can be used to encode special meanings for your documents.

The class attribute is meant to contain one or more class identifiers which are single words that mean something to your application. They can be applied to any HTML tag. An example might be the use of the class important to mark something as important in some way. I can add this to a paragraph or a list item:

In this example, the class attribute is specialising the meaning of the main HTML tag so that we can differentiate important paragraphs and list items from others. We might want to do this so that we can highlight them in some way in the final presentation of the text. In this way, the designer can make the decision about how to emphasise this text (maybe differently on desktop and mobile devices) and the author is free just to decide which things are important. The alternative in this case might have been to use an emphasis EM tag around the text we wanted to emphasise. The advantage of the class attribute is that we identify the whole paragraph or list item as important and we are able to differentiate different kinds of emphasis. This might be useful where, for example, there are some things that are 'important' and others that are 'critical' in a set of instructions. The use of class attributes means that we can transfer the concepts that mean something in the domain of the document directly into the HTML code and then allow the designer to make decisions about how the different ideas are expressed visually.

Sometimes there isn't an HTML tag that really fits what you are trying to express; in these cases you can use the generic DIV and SPAN tags along with a class attribute. For example, it has been common to use a series of DIV tags to denote the overall structure of a web page:

This pattern allows the designer to write a stylesheet that places each section at the right place on the page with the right fonts, colours etc. This pattern has become so common that the new HTML5 standard has included new tags named after some of these classes, so you can now write:

This is part of the evolution of the HTML language; the observation that some kinds of structure are being used very widely leading to the introduction of new elements that properly convey the semantics that are required.

One final note about the use of classes to convey new semantics. It is possible to use more than one class name where that is appropriate to convey more specialisations. For example, all of the code examples in this text are marked up as PRE tags with the class code and another class to denote the language the code is written in, so on this page I have examples like:

Note that I have to encode the HTML markup as entity references using the & notation so that they appear correctly when you view them in the web browser (view source to check this out). Having more than one class name means that I can apply standard styling to code examples and special style for different languages. It also means that I could write a script to pull out all of the examples in a given language if I wanted to check their syntax etc.
