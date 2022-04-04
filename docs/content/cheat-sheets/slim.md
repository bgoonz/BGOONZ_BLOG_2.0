### Example

    doctype html
    html
      head
        title Slim Examples
        meta[charset='utf-8']
        meta(name="keywords" content="template language")
        meta name="author" content=author
        meta property='og:image' content=asset_url('foo.png')
        meta property='og:image' content=(path_to_user user)
        meta(
          property='description'
          content='this is the song that never ends')

### Attributes

    meta[charset='utf-8']
    meta(name="keywords" content="template language")
    meta name="author" content=author

You can use parentheses, brackets, or none at all.

### Ruby attributes

    a class=[:menu,:highlight]

You can use Ruby expressions in attributes.

### Hash attributes

    .card *{'data-url' => place_path(place)}

You can destructure Ruby hashes as attributes.

### Inline Ruby

    ruby:
      def foobar
        "hello"
      end

    div= foobar

### Inline Markdown

    markdown:
      ### On Markdown

      I am *Markdown* _text_!
      {: .classname}

Slim can handle your [Markdown](https://daringfireball.net/projects/markdown/syntax) content for longer content blocks or `code`. Depending on your parser, like [Kramdown](https://kramdown.gettalong.org/quickref.html), other features might work, like assigning attributes or classes.

### Embedded JavaScript

    javascript:
      alert('Slim supports embedded javascript!')

### Comments

    / Comment
    /! HTML comment

### Ruby

    == yield
    = t('.hello')
    - 3.times do |i|
      div

### Verbatim text

    div
      | This is text
        it is nice

### Advanced whitespaces

    div
      ' This appends a whitespace
    div
      |  This hackily prepends a whitespace
    div
      => 'This appends a whitespace'
    div
      =< 'This prepends a whitespace'

### Inline HTML

    <div class='foo'>
      - if articles.empty?
        | Nothing here
    </div>

### Inline tags

    ul
      li: a(href='/') Home

### References

-   <a href="http://slim-lang.com/" class="uri">http://slim-lang.com/</a>
