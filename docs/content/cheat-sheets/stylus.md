Getting started
---------------

### CSS syntax

    .box {
      color: blue;

      .button {
        color: red;
      }
    }

Stylus is a CSS pre-processor.

See: [stylus-lang.com](http://stylus-lang.com/)

### Indent syntax

    .box
      color: blue

      .button
        color: red

Also works! The colon is optional, as well. This is typically the syntax used with Stylus documents.

### Mixins

    caps-type()
      text-transform: uppercase
      letter-spacing: 0.05em

{: data-line="1”}

    h5
      caps-type()

{: data-line="2”}

See [Mixins](#mixins-1) below.

### Variables

    royal-blue = #36a

{: data-line="1”}

    div
      color: royal-blue

Mixins
------

### Without arguments

    red-border()
      border: solid 2px red

{: data-line="1”}

    div
      red-border()

{: data-line="2”}

See: [Mixins](http://stylus-lang.com/docs/mixins.html)

### With arguments

    border-radius(n)
      -webkit-border-radius: n
      border-radius: n

{: data-line="1”}

    div
      border-radius: 2px
      border-radius(2px)

{: data-line="2,3”}

Mixins can be applied in two different ways.

### Argument defaults

    border-radius(n = 2px)
      -webkit-border-radius: n

{: data-line="1”}

### Block mixins

    mobile()
      @media (max-width: 480px)
        {block}

    +mobile()
      width: 10px

{: data-line="1”}

See: [Block mixins](http://stylus-lang.com/docs/mixins.html#block-mixins)

### Rest params

    shadow(offset-x, args...)
      box-shadow: offset-x args
      margin-top: offset-x

{: data-line="1”}

    #login
      shadow: 1px 2px 5px #eee

See: [Rest params](http://stylus-lang.com/docs/vargs.html)

Functions
---------

### Functions

    add(a, b)
      a + b

{: data-line="1”}

    body
      padding: add(10px, 5)

{: data-line="2”}

See: [Functions](http://stylus-lang.com/docs/functions.html)

### Argument defaults

    add(a, b = 2)
      a + b

{: data-line="1”}

See: [Argument defaults](http://stylus-lang.com/docs/functions.html#argument-defaults)

### Named parameters

    shadow(x, y)
      x y (y * 1.5) #000

    .button
      box-shadow: shadow(x: 2, y: 4)

{: data-line="2”}

See: [Named parameters](http://stylus-lang.com/docs/functions.html#named-parameters)

### Multiple return values

    sizes()
      8px 16px

{: data-line="2”}

    sizes()[0]  // → 8px
    sizes()[1]  // → 16px

See: [Multiple return values](http://stylus-lang.com/docs/functions.html#multiple-return-values)

Values
------

### Conditional assignment

    royal-blue = #36a
    royal-blue ?= #89f

{: data-line="2”}

    div
      color: royal-blue  // #36a

`?=` will only set a variable if it’s previously unset.

See: [Conditional assignment](https://stylus-lang.com/docs/operators.html#conditional-assignment--)

### Property lookup

    .logo
      width: w = 150
      margin-left: -(w / 2)
      // or
      height: 80px
      margin-top: -(@height / 2)

{: data-line="2,3”}

See: [Property lookup](https://stylus-lang.com/docs/variables.html#property-lookup)

### Interpolation

    -{prefix}-border-radius: 2px

See: [Interpolation](https://stylus-lang.com/docs/interpolation.html)

### Color operators

    #888 + 50%    // → #c3c3c3 (lighten)
    #888 - 50%    // → #444 (darken)
    #f00 + 50deg  // → #ffd500 (hue)

### Casting

    n = 5px

    foo: (n)em
    foo: (n * 5)%

{: data-line="1,2”}

### Lookup

    light-blue = #3bd
    name = 'blue'
    lookup('light-' + name)

See: [lookup](https://stylus-lang.com/docs/bifs.html#lookupname)

Advanced features
-----------------

### Conditional

    if color == blue
      display: block
    else if true and true
      display: inline
    else if 'hey' is not 'bye'
      display: flex
    else
      display: none

Aliases:

`==` | `is` |  
`!=` | `is not` |  
`!=` | `isnt` |

See: [Conditionals](https://stylus-lang.com/docs/functions.html#conditionals)

### For loops

    font-size-1 = 10px
    font-size-2 = 20px
    font-size-3 = 30px

    for i in 1..3
      .text-{i}
        font-size: lookup('font-size-' + i)

{: data-line="5”}

### Definition check

    if ohnoes is defined
      color: blue

{: data-line="1”}

See: [is defined](https://stylus-lang.com/docs/operators.html#variable-definition-is-defined)

### False values

    0
    null
    false
    ''

### Type check

    if val is a 'string'
    if val is a 'ident'
    if #fff is a 'rgba'    // → true

See: [Instance check](https://stylus-lang.com/docs/operators.html#instance-check-is-a)

Built-in functions
------------------

### Color functions

    alpha(#fff)   //→ 1
    alpha(rgba(0, 0, 0, 0.2))   //→ 0.2

    dark(black)  //→ true
    light(black) //→ false

    hue(#0a0)         //→ 50deg
    saturation(#f00)  //→ 100%
    lightness(#f00)   //→ 50%
    luminosity(#f00)  //→ 0.2126

    hue(#0a0, 0deg)
    saturation(#f00, 50%)
    lightness(#f00)

    lighten(color, 10%)
    darken(color, 10%)
    saturate(color, 10%)
    desaturate(color, 10%)
    invert(color)

    tint(color, 50%)  // mix with white
    shade(color, 50%) // mix with black

    unquote(string)

See: [Built-in functions](http://stylus-lang.com/docs/bifs.html)

### Image size

    width:  image-size('tux.png')[0]
    height: image-size('tux.png')[1]

Returns the width and height of a given image.

See: [image-size](http://stylus-lang.com/docs/bifs.html#image-sizepath)

### Caching

    size($width)
      +cache('w' + $width)
        width: $width
    .a { size: 10px }
    .b { size: 10px }

    // yields: .a, b { width: 10px }

Applies its contents to the given selector on the first call, but would <span class="citation" data-cites="extend">@extend</span> the first call’s selector at the second call with the same params.

See: [cache](http://stylus-lang.com/docs/bifs.html#cachekeys)

### Add Property

    gradient(color)
      add-property('background-image', linear-gradient(top, color, darken(color, 20%)))
      color

    body
      background: gradient(red)

See: [add-property](http://stylus-lang.com/docs/bifs.html#add-propertyname-expr)

### sprintf

    '-webkit-gradient(%s, %s, %s)' % (linear (0 0) (0 100%))
    // → -webkit-gradient(linear, 0 0, 0 100%)

    s("rgba(0, 0, 0, %s)", 0.3)

See: [s](http://stylus-lang.com/docs/bifs.html#sfmt-)

### Embed URL

    background: embedurl('logo.png')
    // → background: url("data:image/png;base64,…")

See: [embedurl](http://stylus-lang.com/docs/bifs.html#embedurlpath-encoding)
