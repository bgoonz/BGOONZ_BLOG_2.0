subtitle

2022-01-03

------------------------------------------------------------------------

title: Haml category: Markup

prism\_languages: \[haml\]

------------------------------------------------------------------------

### Doctype

    !!! 5

### Tags

    %html
      %head
        %title
      %body
        %h1 Hello World
        %br/

### Classes and ID’s

    %p.class-example
    .no-tag-defaults-to-div
    %div#butItCanBeIncluded

### Inline Attributes

Either hash syntax works

    %meta{ name: "viewport", content: "width=device-width, initial-scale=1.0" }
    %input{ :type => "text", :required => true }

### Ruby

    -# This is a comment
    -# Anything starting with a hyphen signals to Haml that Ruby is coming
    - @arr = [1, 2, 3]
    - @str = "test"
    -# Equal signals output
    = render partial: "shared/header"
    = yield
    = link_to page_url
