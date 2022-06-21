---
title: ' using the DOM'
template: post
subtitle: Examples of web and XML development
excerpt: 'The following example shows the use of the `height` and `width`
    properties alongside images of varying dimensions:'
date: 2022-04-15T07:01:59.356Z
image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/dom.png?raw=true
thumb_image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/dom.png?raw=true
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
    - src/data/categories/html.yaml
    - src/data/categories/js.yaml
tags:
    - src/data/tags/links.yaml
    - src/data/tags/javascript.yaml
    - src/data/tags/react.yaml
    - src/data/tags/resources.yaml
show_author_bio: true
related_posts:
    - src/pages/blog/adding-css-to-your-html.md
cmseditable: true
---

<!--StartFragment-->

# DOM:

## [Example 1: height and width](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_1_height_and_width 'Permalink to Example 1: height and width')

The following example shows the use of the `height` and `width` properties alongside images of varying dimensions:

```

```

Copy to Clipboard

## [Example 2: Image Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_2_image_attributes 'Permalink to Example 2: Image Attributes')

```

```

Copy to Clipboard

## [Example 3: Manipulating Styles](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_3_manipulating_styles 'Permalink to Example 3: Manipulating Styles')

In this simple example, some basic style properties of an HTML paragraph element are accessed using the style object on the element and that object's CSS style properties, which can be retrieved and set from the DOM. In this case, you are manipulating the individual styles directly. In the next example (see Example 4), you can use stylesheets and their rules to change styles for whole documents.

```

```

Copy to Clipboard

## [Example 4: Using Stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_4_using_stylesheets 'Permalink to Example 4: Using Stylesheets')

The [`styleSheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets 'styleSheets') property on the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object returns a list of the stylesheets that have been loaded on that document. You can access these stylesheets and their rules individually using the stylesheet, style, and [`CSSRule`](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule) objects, as demonstrated in this example, which prints out all of the style rule selectors to the console.

```

```

Copy to Clipboard

For a document with a single stylesheet in which the following three rules are defined:

```

```

Copy to Clipboard

This script outputs the following:

```

```

## [Example 5: Event Propagation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation 'Permalink to Example 5: Event Propagation')

This example demonstrates how events fire and are handled in the DOM in a very simple way. When the BODY of this HTML document loads, an event listener is registered with the top row of the TABLE. The event listener handles the event by executing the function stopEvent, which changes the value in the bottom cell of the table.

However, stopEvent also calls an event object method, [`event.stopPropagation`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation), which keeps the event from bubbling any further up into the DOM. Note that the table itself has an [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick 'onclick') event handler that ought to display a message when the table is clicked. But the stopEvent method has stopped propagation, and so after the data in the table is updated, the event phase is effectively ended, and an alert box is displayed to confirm this.

```

```

Copy to Clipboard

## [Example 6: getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_6_getcomputedstyle 'Permalink to Example 6: getComputedStyle')

This example demonstrates how the [`window.getComputedStyle`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method can be used to get the styles of an element that are not set using the `style` attribute or with JavaScript (e.g., `elt.style.backgroundColor="rgb(173, 216, 230)"`). These latter types of styles can be retrieved with the more direct [`elt.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style 'elt.style') property, whose properties are listed in the [DOM CSS Properties List](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

`getComputedStyle()` returns a [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) object, whose individual style properties can be referenced with this object's [`getPropertyValue()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue 'getPropertyValue()') method, as the following example document shows.

```

```

Copy to Clipboard

## [Example 7: Displaying Event Object Properties](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_7_displaying_event_object_properties 'Permalink to Example 7: Displaying Event Object Properties')

This example uses DOM methods to display all the properties of the [`GlobalEventHandlers.onload`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload) [`event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object and their values in a table. It also shows a useful technique of using a for..in loop to iterate over the properties of an object to get their values.

The properties of event objects differs greatly between browsers, the [WHATWG DOM Standard](https://dom.spec.whatwg.org/) lists the standard properties, however many browsers have extended these greatly.

Put the following code into a blank text file and load it into a variety of browsers, you'll be surprised at the different number and names of properties. You might also like to add some elements in the page and call this function from different event handlers.

```

```

Copy to Clipboard

## [Example 8: Using the DOM Table Interface](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_8_using_the_dom_table_interface 'Permalink to Example 8: Using the DOM Table Interface')

The DOM [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) interface provides some convenience methods for creating and manipulating tables. Two frequently used methods are [`HTMLTableElement.insertRow`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow) and [`HTMLTableRowElement.insertCell`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell).

To add a row and some cells to an existing table:

```

```

Copy to Clipboard

### [Notes](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#notes 'Permalink to Notes')

-   A table's [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML 'innerHTML') property should never be used to modify a table, although you can use it to write an entire table or the content of a cell.
-   If DOM Core methods [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [`Node.appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) are used to create rows and cells, IE requires that they are appended to a [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) element, whereas other browsers will allow appending to a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element (the rows will be added to the last `<tbody>` element).
-   There are a number of other convenience methods belonging to the [`HTMLTableElement` interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement#methods) that can be used for creating and modifying tables.

<!--EndFragment-->
