---
title: Atomic design
subtitle: Atomic design
date: '2021-09-30'
thumb_image_alt: Atomic design
excerpt: Atomic design
seo:
    title: ''
    description: 'In searching for inspiration and parallels, I kept coming back to chemistry. The thought is that all matter (whether solid, liquid, gas, simple, complex, etc) is comprised of atoms. Those atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe.'
    robots: []
    extra: []
template: post
thumb_image: https://bradfrost.com/wp-content/uploads/2019/06/atomic-design-product.jpg
image: https://bradfrost.com/wp-content/uploads/2019/06/atomic-design-product.jpg
---






As the craft of Web design continues to evolve, we're recognizing the need to develop thoughtful design systems, rather than creating simple collections of web pages.

A lot has been said about creating [design systems](http://24ways.org/2012/design-systems/ "http://24ways.org/2012/design-systems/"), and much of it focuses on establishing foundations for color, typography, grids, texture and the like. This type of thinking is certainly important, but I'm slightly less interested in these aspects of design because ultimately they are and will always be subjective. Lately I've been more interested in what our interfaces are comprised of and how we can construct design systems in a more methodical way.

In searching for inspiration and parallels, I kept coming back to chemistry. The thought is that all matter (whether solid, liquid, gas, simple, complex, etc) is comprised of atoms. Those atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe.

Similarly, interfaces are made up of smaller components. This means we can break entire interfaces down into fundamental building blocks and work up from there. That's the basic gist of atomic design.

![Periodic Table of the Elements](http://bradfrost.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-13-at-5.15.05-PM.png)

Josh Duck's HTML Periodic Table gives a great breakdown of web designers' atomic elements.

what is atomic design
---------------------

Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:

1.  [Atoms](https://bradfrost.com/blog/post/atomic-web-design/#atoms)
2.  [Molecules](https://bradfrost.com/blog/post/atomic-web-design/#molecules)
3.  [Organisms](https://bradfrost.com/blog/post/atomic-web-design/#organisms)
4.  [Templates](https://bradfrost.com/blog/post/atomic-web-design/#templates)
5.  [Pages](https://bradfrost.com/blog/post/atomic-web-design/#pages)

![The progression of atomic design: atoms to molecules to organiams to templates to pages](http://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)

Let's explore each stage in more detail.

### atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

![Atoms](http://bradfrost.com/wp-content/uploads/2013/06/atoms.jpg)

Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.

Like atoms in nature they're fairly abstract and often not terribly useful on their own. However, they're good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.

### molecules

Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

For example, a form label, input or button aren't too useful by themselves, but combine them together as a form and now they can actually do something together.

![molecule](http://bradfrost.com/wp-content/uploads/2013/06/molecule.jpg)

Building up to molecules from atoms encourages a "do one thing and do it well" mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.

### organisms

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

![organism](http://bradfrost.com/wp-content/uploads/2013/06/organism2.jpg)

![organism-examples](http://bradfrost.com/wp-content/uploads/2013/06/organism-examples.jpg)

We're starting to get increasingly concrete. A client might not be terribly interested in the molecules of a design system, but with organisms we can see the final interface beginning to take shape. Dan Mall (who I'm working with on several projects) uses [element collages](http://danielmall.com/articles/rif-element-collages/ "http://danielmall.com/articles/rif-element-collages/"), which articulate ideas for a few key organisms to facilitate client conversations and shape the visual direction (all without having to construct full comps).

Organisms can consist of similar and/or different molecule types. For example, a masthead organism might consist of diverse components like a logo, primary navigation, search form, and list of social media channels. But a "product grid" organism might consist of the same molecule (possibly containing a product image, product title and price) repeated over and over again.

Building up from molecules to organisms encourages creating standalone, portable, reusable components.

### templates

At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It's here where we start to see the design coming together and start seeing things like layout in action.

![template](http://bradfrost.com/wp-content/uploads/2013/06/template1.jpg)

Templates are very concrete and provide context to all these relatively abstract molecules and organisms. Templates are also where clients start seeing the final design in place. In my experience working with this methodology, templates begin their life as HTML wireframes, but over time increase fidelity to ultimately become the final deliverable. Bearded Studio in Pittsburgh follow [a similar process](http://alistapart.com/article/responsive-comping-obtaining-signoff-with-mockups "http://alistapart.com/article/responsive-comping-obtaining-signoff-with-mockups"), where designs start [grayscale and layout-less](http://aafh-css.heroku.com/wireframes-no-mq "http://aafh-css.heroku.com/wireframes-no-mq") but [slowly](http://aafh-css.heroku.com/wireframes "http://aafh-css.heroku.com/wireframes") [increase](http://aafh-css.heroku.com/v1 "http://aafh-css.heroku.com/v1") [fidelity](http://aafh-css.heroku.com/v2 "http://aafh-css.heroku.com/v2") until the [final design](http://aafh-css.heroku.com/v5 "http://aafh-css.heroku.com/v5") is in place.

### pages

Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

![page](http://bradfrost.com/wp-content/uploads/2013/06/page1.jpg)

Pages are the highest level of fidelity and because they're the most tangible, it's typically where most people in the process spend most of their time and what most reviews revolve around.

The page stage is essential as it's where we test the effectiveness of the design system. Viewing everything in context allows us to loop back to modify our molecules, organisms, and templates to better address the real context of the design.

Pages are also the place to test variations in templates. For example, you might want to articulate what a headline containing 40 characters looks like, but also demonstrate what 340 characters looks like. What does it look like when a user has one item in their shopping cart versus 10 items with a discount code applied? Again, these specific instances influence how we loop back through and construct our system.

why atomic design
-----------------

In a lot of ways, this is how we've been doing things all along, even if we haven't been consciously thinking about it in this specific way.

Atomic design provides a clear methodology for crafting design systems. Clients and team members are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

Atomic design gives us the ability to traverse from abstract to concrete. Because of this, we can create systems that promote consistency and scalability while simultaneously showing things in their final context. And by assembling rather than deconstructing, we're crafting a system right out of the gate instead of cherry picking patterns after the fact.