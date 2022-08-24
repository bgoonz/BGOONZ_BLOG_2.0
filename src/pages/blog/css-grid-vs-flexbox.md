---
title: CSS Grid Vs. Flexbox
template: post
subtitle: similar layout models
date: 2022-08-16T12:27:53.918Z
image: https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png?width=466&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png
thumb_image: https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png?width=466&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/css.yaml
tags:
  - src/data/tags/clean-code.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/adding-css-to-your-html.md
cmseditable: true
---
<!--StartFragment-->

## CSS Grid vs. Flexbox

CSS Grid and Flexbox are layout models that share similarities and can even be used together. The main difference is that you can use CSS Grid to create two-dimensional layouts. In contrast, you can only use Flexbox to create one-dimensional layouts. That means you can place components along the X- and Y-axis in CSS Grid and only one axis in Flexbox.

Let’s walk through each model below starting with CSS Grid. 

With CSS Grid, you can align components into columns and rows. This feature makes it ideal for larger layouts that must be divided into sections. In other words, this type of layout will have elements that need to overlap and layer rather than being linear.

Below is a helpful illustration (by [developer Ayush Gupta](https://medium.com/@guptaji?hubs_post-cta=blognavcard-website)) of a possible layout with CSS Grid.

![Two dimensional layout with CSS Grid illustration](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png?width=466&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.png)

[Source](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412?hubs_post-cta=blognavcard-website)

With Flexbox, you can lay out and align elements in a container even if you don’t know the size of those elements or if the size might change. That’s because a flex container is, well, flexible: it expands the flex elements to fill space when it’s available and shrinks them to prevent overflow when it’s not.

Below is another helpful illustration by [developer Ayush Gupta](https://medium.com/@guptaji?hubs_post-cta=blognavcard-website) that shows a layout that’s possible with Flexbox.

![One dimensional layout with Flexbox illustration](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-3.png?width=519&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-3.png)

[Source](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412?hubs_post-cta=blognavcard-website)

In an [article on CSS Tricks](https://css-tricks.com/css-grid-replace-flexbox/?hubs_post-cta=blognavcard-website), co-founder of CodePen, Chris Coyier made an important note. Like Flexbox, you can use CSS Grid to create one-dimensional layouts. Also like CSS Grid, Flexbox can be used to create two-dimensional layouts. The difference here is that CSS Grid allows you to create 2D layouts in ways that Flexbox does not.

With Flexbox, you can also create multi-line flex containers. You simply have to apply the flex-wrap property with a value of “wrap” to your container. That way, if your items are too large to all display in one line on a particular viewport, they will wrap onto another line rather than shrink to fit in one row.

This creates rows and columns in a sense. But how wrapped flex items line up on a row is independent of how they lined up on the previous row. That’s because you can’t control where flex elements end up like you can in CSS Grid; flex elements simply inch along a single axis and then wrap accordingly. The layout will look more like bricks than a grid as a result.

Here’s a side-by-side comparison of a layout built with Flexbox and one built with CSS Grid that shows this effect.

![Flexbox vs CSS Grid layout comparison illustration ](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-4.png?width=389&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-4.png)

[Source](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/?hubs_post-cta=blognavcard-website)

Before we move on, it’s important to understand that these layout models are not mutually exclusive. You can combine them by using a Flexbox container inside a CSS Grid container. Note, however, that you cannot use a CSS Grid Container inside a Flexbox container.

## Flexbox vs. Bootstrap

It’s important to understand that Bootstrap 4’s grid system is built with Flexbox. What sets Bootstrap apart from using Flexbox alone is the process of writing code. With Bootstrap, you can create a grid using only [HTML](https://blog.hubspot.com/website/html?hubs_post-cta=blognavcard-website). With Flexbox, you must use HTML and CSS. Let’s take a closer look at each process below.

Bootstrap offers a twelve-column system with five default responsive tiers, Sass variables and mixins, and dozens of predefined classes. That means you can use its mobile-first flexbox grid to build unique and complex layouts without having to build them from scratch — it also means you need to understand its unique syntax.

Let’s start with Bootstrap’s column system. Bootstrap has a twelve-column system, which means there can be up to twelve grid columns on a single horizontal block. You can have more than twelve, they’ll just start to wrap rather than show up on a single axis, regardless of the viewport.

Most site owners won’t need anywhere close to twelve columns. In that case, you just need your columns to add up to twelve so they display on a single horizontal block. That means if I want to create two columns, in which one is half the size of the other, I’d use the classes **.col-4** and **.col-8**.

Now let’s say I want to create equal-width columns that display horizontally until they reach a certain screen width and then automatically stack on top of each other. In that case, I’d need to use a responsive grid breakpoint. 

The five default responsive tiers of the Bootstrap 4 grid system are listed below. Please note that the value listed in pixels is the breakpoint at which columns will automatically stack on top of each other.

|              |                     |                                 |
| ------------ | ------------------- | ------------------------------- |
| CLASS PREFIX | DEVICE SIZE         | MAX CONTAINER WIDTH             |
| .col-        | extra small devices | less than 576px                 |
| .col-sm-     | small devices       | equal to or greater than 576px  |
| .col-md-     | medium devices      | equal to or greater than 768px  |
| .col-lg-     | large devices       | equal to or greater than 992px  |
| .col-xl-     | extra-large devices | equal to or greater than 1200px |

Because the column system and responsive tiers work together, you’ll often see a number and a prefix defining the .col class. We’ll see that in the example below.

### Bootstrap Grid Example

Let’s say I want to create six equal-width columns that stack on top of each other on mobile phones or screens that are less than 576px wide. To do so, I’d use the **.col-sm-2** class.

Applying this class to six **<div>** elements, I’d then wrap these in a row, as shown below.

```

```

You’ll see I added some [inline CSS styling](https://blog.hubspot.com/website/add-css-to-html?hubs_post-cta=blognavcard-website) to more clearly see each individual column on the front-end. Here’s the result:

![Responsive Bootstrap Columns example](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-2.gif?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-2.gif)

[Source](https://www.w3schools.com/code/tryit.asp?filename=GFFIR4HBYFBO&hubs_post-cta=blognavcard-website)

Now we’ll walk through an example of building a grid in Flexbox so you can compare both processes.

### Flexbox Grid Example

Let’s say I want to create a flexbox grid with six columns, like the one above. In the body section, I’d simply create six **<div>** elements and wrap them in a **<div>** element with the **.flex-container** class. Here’s the HTML code:

```

```

I’d then add CSS to the head section of my page.

Using the [CSS selector](https://blog.hubspot.com/website/css-selectors?hubs_post-cta=blognavcard-website) **.flex-container**, I’d make the container flexible by setting the display property to flex. I can then specify the height of the container as well as the [background color](https://blog.hubspot.com/website/change-text-color-css?hubs_post-cta=blognavcard-website), as shown below.

```

```

To style the flex items within the container, I’d use the selector **.flex-container >** **div**. I can then set the background color, width, margin, and font size of each item. I can also use the [text-align property to set the alignment of the font](https://blog.hubspot.com/website/center-text-in-css?hubs_post-cta=blognavcard-website) within each item and the line-height property to set how far from the top of the flex container the font will be displayed.

Here’s the CSS code:

```

```

Here’s the result:

![Flexbox container example](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-3.gif?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-3.gif)[Source](https://www.w3schools.com/code/tryit.asp?filename=GFFJP8OMJ2M0&hubs_post-cta=blognavcard-website)

If I want the flex items to fill up the entire container, no matter how the [viewport changes size](https://blog.hubspot.com/website/fluid-design?hubs_post-cta=blognavcard-website), I can simply add the flex-basis property in my CSS. Let’s set it to 1 1 150px so that the items grow and shrink from a flex-basis of 150 pixels. Here’s the new CSS:

```

```

Here’s the result:

![Flexbox container example with flex-basis property set](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.gif?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-1.gif)

[Source](https://www.w3schools.com/code/tryit.asp?filename=GFFP87RLUTXS&hubs_post-cta=blognavcard-website)

Additional flex item properties are order, flex-grow, flex-shrink, flex-basis, and align-self. You can learn more about them in [A Complete Guide to Flexbox on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/?hubs_post-cta=blognavcard-website).

## CSS Grid vs. Bootstrap

Now that we’ve compared CSS Grid vs. Flexbox and Flexbox vs. Bootstrap, let’s compare CSS Grid vs. Bootstrap.

If deciding between these two layout models, ask yourself whether you have your layout structure nailed down or the content. If you’re layout-first, meaning you want to create the layout and then place items into it, then you’ll be better off with CSS Grid. But if you’re content-first, meaning you have items that you want to place into a container and space out evenly, go with Bootstrap. Since Bootstrap is built with Flexbox, you can apply this reasoning to CSS Grid vs. Flexbox as well.

Let’s look at the code of specific examples of grids that can be built with CSS Grid and Bootstrap respectively.

### CSS Grid Example

Creating a grid container is simple. You just have to apply the display property to an element and set the value to grid or inline-grid. Styling it is where it gets tricky.

Let’s say I want to create a layout with five items. Here’s the HTML I’d start with: 

```

```

Then I’d make it a grid container and change its background color to gray with this CSS:

```

```

Now let’s say I want to create three equal-width column tracks. You can use the grid-template-columns and grid-template-rows properties to define the rows and columns on your grid and their size (or you can just define one). I can use any length unit, but I’ll use the **fr** unit. The **fr** unit represents a fraction of the available space in the grid container rather than a set amount and ensures that grid tracks grow and shrink according to the available space. The CSS for my example would now look like this:

```

```

Notice that we used the grid-template-columns property to explicitly define the columns on our grid, but we did not use the grid-template-rows properties to explicitly define rows. That does not mean your CSS grid has no rows; it just means that rows are defined implicitly. You can set the size for tracks created in the implicit grid with the grid-auto-rows and grid-auto-columns properties.

Let’s say I want to ensure that tracks created in my implicit grid are 100 pixels tall. Then I’d add the following CSS so the final result would be:

```

```

Finally, I need to place the five items within the grid container. With CSS Grid, you use the grid-column-start, grid-column-end, grid-row-start and grid-row-end properties and set the value to different grid lines. Grid lines are basically the horizontal and vertical dividers of child items in a grid. The grid lines of this three-column, two-row grid, for example, are numbered below:

![CSS grid lines illustrated example](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-2.png?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap-2.png)

[Source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout?hubs_post-cta=blognavcard-website)

So if I want my box1 to span from the far-left line on the grid to the far-right, then I’d place it against column line one and span it to column line four. And, if I wanted it to span one implicit row track, then I’d begin it at row line one and end it at row line two, as shown below. I also have CSS to style **box2** and **box4**.

```

```

The result would be:

![CSS grid container example](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap.png?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap.png)

[Source](https://www.w3schools.com/code/tryit.asp?filename=GFFRZ5LYP2DJ&hubs_post-cta=blognavcard-website)

You can click the source link to see what CSS I used to style the grid items. It’s from the Flexbox example above.

### Bootstrap Grid System

Now let’s say I want to make a row with two columns, one that’s full-width and one that’s half-width so they stack on top of each other on mobile. Here’s the HTML:

```

```

Let’s say I want to make another row with three columns that take up half of the viewport on mobile and a third on desktop.

```

```

Finally, I want to make one last row with two columns that are always 50% wide, no matter what the screen size. Then I’d use the following HTML:

```

```

Altogether, this is the result:

![Bootstrap mix and match columns example](https://blog.hubspot.com/hs-fs/hubfs/Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap.gif?width=600&name=Heres%20the%20Difference%20Between%20Flexbox,%20CSS%20Grid,%20%26%20Bootstrap.gif)

[Source](https://www.w3schools.com/code/tryit.asp?filename=GFFSLVXXQ4BR&hubs_post-cta=blognavcard-website)

## Creating Unique Layouts

Flexbox, CSS Grid, and Bootstrap are responsive layout models that enable you to create responsive and unique layouts that work across many different browsers and devices. No matter which model you choose, you’ll need some familiarity with HTML and CSS. 

<!--EndFragment-->