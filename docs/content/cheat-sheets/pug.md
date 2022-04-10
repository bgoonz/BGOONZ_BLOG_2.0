Pug
---

### Basic document

    doctype html
    html(lang='en')
      h1.class#id(name='hi')
        | This is some text, hello there,
        = name

      - javascript()

### Elements

    div
      | Just a div

    .search
      | A div, with class 'search'

    h1 A heading with text

    h1= page.title

    div.class
    div.class1.class2
    h1.header

### Attributes

    input(type='text' name='q' autofocus)

    - var authenticated = true
    body(class=authenticated ? 'authed' : 'anon')

See: [Attributes](https://pugjs.org/language/attributes.html)

### Comments

    // This comment will appear in the HTML

    //- This is a silent comment

    //-
      Nesting inside a comment creates
      a comment block

See: [Comments](https://pugjs.org/language/attributes.html)

### Iteration

    ul
      each user in users
        li= user

### Layouts

    //- page.pug
    extends layout.pug

    block title
      | hello

    block content
      | hello

    //- layout.pug
    title
      block title
    body
      block content

### Includes (partials)

    include ./includes/head.pug

    include:markdown article.md

See: [Includes](https://pugjs.org/language/includes.html)

### Multiline text

    p.
      This is text that doesn't need to
      be prefixed by pipes.

{: data-line="1”}

    script.
      // It's great for raw
      // JavaScript and stuff
      alert('hello')

{: data-line="1”}

### Conditionals

    if authenticated
      a(href='/logout') Sign out
    else
      a(href='/login') Sign in

{: data-line="1,3”}

See: [Conditionals](https://pugjs.org/language/conditionals.html)

Mixins
------

### Mixins

    mixin list
      ul
        ···

{: data-line="1”}

    +list

Mixins allow you to create reusable code blocks. See: [Mixins](https://pugjs.org/language/mixins.html)

### Mixin attributes

    mixin pet(name)
      span.pet= name

{: data-line="1”}

    +pet('cat')

See: [Mixin attributes](https://pugjs.org/language/mixins.html#mixin-attributes)

### Mixin blocks

    mixin article(title)
      article
        h2.title= title
        block

{: data-line="1,4”}

    +article('hello there')
      p Content goes here

See: [Mixin blocks](https://pugjs.org/language/mixins.html#mixin-blocks)
