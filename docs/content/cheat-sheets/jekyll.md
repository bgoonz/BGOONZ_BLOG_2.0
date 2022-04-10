{% raw %}

### Installation

    # Install the gems
    gem install jekyll bundler

    # Create a new site at `./myblog`
    jekyll new myblog
    cd myblog

    # Optional: if you're targeting github-pages,
    # use this Gemfile instead.
    cat > Gemfile <<-END
    source 'https://rubygems.org'
    gem 'github-pages', group: :jekyll_plugins
    END

    bundle exec jekyll serve

See: [Jekyll quickstart](http://jekyllrb.com/docs/quickstart/)  
See: [github/pages-gem](https://github.com/github/pages-gem)

### Directories

    ./
    ├── _config.yml
    │
    ├── _data/
    │   └── ...
    │
    ├── _drafts/
    │   └── ...
    │
    ├── _posts/
    │   └── 2014-01-01-hello.md
    │
    ├── _layouts/
    │   ├── default.html
    │   └── post.html
    │
    ├── _includes/             - partials
    │   ├── header.html
    │   └── footer.html
    │
    └── _site/
        └── ...

{: .-box-chars}

Front-matter
------------

### Basic frontmatter

    ---
    layout: post
    title: Hello
    ---
    Hello! this is my post.

{: data-line="1,2,3,4”}

Attach metadata to a page by adding them on top of the page, delimited by `---`. See: [Front-matter](http://jekyllrb.com/docs/frontmatter/)

### Other frontmatter stuff

    permalink: '/hello'
    published: false
    category: apple
    categories: ['html', 'css']
    tags: ['html', 'css']

### Configuration

In `_config.yml`: {: .-setup}

    source: .
    destination: _site
    exclude:
        - Gemfile
        - Gemfile.lock
    include: ['.htaccess']

All config keys are optional. See: [Configuration](http://jekyllrb.com/docs/configuration/)

Markup
------

### Page variables

    <title>{{ page.title }}</title>

{: data-line="2”}

### Filters

    <p>{{ page.description | truncate_words: 20 }}</p>

{: data-line="2”}

### Loops

    {% for post in site.posts %}
    <a href="{{ post.url }}">
        <h2>{{ post.title }}</h2>
        <p>{{ post.date | date_to_string }}</p>
    </a>
    {% endfor %}

{: data-line="1,6”}

### Dates

    {{ page.date | date: "%b %d, %Y" }}

### Conditionals

    {% if page.image.feature %} ... {% elsif xyz %} ... {% else %} ... {% endif %}

{: data-line="1,3,5,7 }

    {% if page.category == 'React' %} {% if page.category == 'React' or page.featured %} {% if page.tags contains 'Featured' %}

### Case

    {% case shipping.title %} {% when 'international' %} Arriving in 2-3 weeks {% when 'Domestic' %} Arriving in 2-3 days {% else %} Thank you for your order! {%
    endcase %}

{: data-line="1,2,4,6,8”}

### Includes (partials)

    {% include header.html %}

{: data-line="1”}

    <!-- Including local vars -->
    {% include header.html page=page %}

{: data-line="2”}

### Comments

    {% comment %} This is a comment! {% endcomment %}

{: data-line="1,3”}

Variables
---------

### Top-level variables

`{{ site }}` | Data from `config.yml` |  
`{{ page }}` | From frontmatter, and page-specific info |  
`{{ content }}` | HTML content (use in layouts) |  
`{{ paginator }}` | Paginator |

See: [Variables](http://jekyllrb.com/docs/variables/)

### Site

    {{ site.time }}

{: .-setup}

`site.time` | Current time |  
`site.pages` | List of pages |  
`site.posts` | List of blog posts |  
`site.related_posts` | List of posts related to current |  
`site.categories.CATEGORY` | List |  
`site.tags.TAG` | List |  
`site.static_files` | List |

### Page

    {{ page.content }} - un-rendered content {{ page.title }} {{ page.excerpt }} - un-rendered excerpt {{ page.url }} {{ page.date }} {{ page.id }} - unique id for
    RSS feeds {{ page.categories }} {{ page.tags }} {{ page.path }} {{ page.dir }} {{ page.excerpt | remove: '
    <p>' | remove: '</p>
    ' }} {{ page.excerpt | strip_html }}

    <!-- blog pagination: -->
    {{ page.next }} {{ page.previous }}

Filters
-------

### Dates

    {{ site.time | date: "%Y %m %d" }}

{: .-setup}

`date_to_xmlschema` | → `2008-11-07T13:07:54-08:00` |  
`date_to_rfc822` | → `Mon, 07 Nov 2008 13:07:54 -0800` |  
`date_to_string` | → `07 Nov 2008` |  
`date_to_long_string` | → `07 November 2008` |  
`date:` *‘%Y %m %d’* | → `2017 Nov 7` |

### Preprocessors

    {{ page.description | markdownify }}

{: .-setup}

<table><thead><tr class="header"><th>Filter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>textilize</code></td><td>Textile</td></tr><tr class="even"><td><code>markdownify</code></td><td>Markdown</td></tr><tr class="odd"><td><code>jsonify</code></td><td>JSON</td></tr><tr class="even"><td><code>sassify</code></td><td>Sass</td></tr><tr class="odd"><td><code>scssify</code></td><td>SCSS</td></tr><tr class="even"><td><code>smartify</code></td><td>Smartypants</td></tr></tbody></table>

### Array filters

    {{ site.pages | where: "year", "2014" }}

{: .-setup}

<table><thead><tr class="header"><th>Filter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>where:</code> <em>"year”, "2014”</em></td><td></td></tr><tr class="even"><td><code>where_exp:</code> <em>"item”, "item.year &gt;= 2014”</em></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>group_by:</code> <em>"genre”</em></td><td>→ <code>{name, items}</code></td></tr><tr class="odd"><td><code>group_by_exp:</code> <em>"item”, "item.genre”</em></td><td>→ <code>{name, items}</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>sort</code></td><td></td></tr><tr class="even"><td><code>sort:</code> <em>‘author’</em></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>uniq</code></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>first</code></td><td></td></tr><tr class="odd"><td><code>last</code></td><td></td></tr><tr class="even"><td><code>join:</code> <em>‘,’</em></td><td></td></tr><tr class="odd"><td><code>array_to_sentence_string</code></td><td>→ <code>"X, Y and Z"</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>map:</code> <em>‘post’</em></td><td>Works like ‘pluck’</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>size</code></td><td></td></tr><tr class="even"><td><code>push:</code> <em>‘xxx’</em></td><td>Adds an item</td></tr></tbody></table>

### String filters

    {{ page.title | default: "xxx" }}

{: .-setup}

<table><thead><tr class="header"><th>Filter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>default:</code> <em>‘xxx’</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>upcase</code></td><td></td></tr><tr class="even"><td><code>downcase</code></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>remove:</code> <em>‘p’</em></td><td></td></tr><tr class="odd"><td><code>replace:</code> <em>‘super’, ‘mega’</em></td><td></td></tr><tr class="even"><td><code>remove_first:</code> <em>‘p’</em></td><td></td></tr><tr class="odd"><td><code>replace_first:</code> <em>‘super’, ‘mega’</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>truncate:</code> <em>5</em></td><td></td></tr><tr class="even"><td><code>truncatewords:</code> <em>20</em></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>prepend:</code> <em>‘Mr. ’</em></td><td></td></tr><tr class="odd"><td><code>append:</code> <em>‘Jr.’</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>camelize</code></td><td></td></tr><tr class="even"><td><code>capitalize</code></td><td></td></tr><tr class="odd"><td><code>strip_html</code></td><td></td></tr><tr class="even"><td><code>strip_newlines</code></td><td></td></tr><tr class="odd"><td><code>newlines_to_br</code></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>split:</code> <em>‘,’</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>escape</code></td><td></td></tr><tr class="even"><td><code>escape_once</code></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>slice:</code> <em>-3, 3</em></td><td></td></tr></tbody></table>

See: [String filters](http://docs.shopify.com/themes/liquid-documentation/filters)

### String filters (Jekyll-only)

    {{ page.excerpt | number_of_words }}

{: .-setup}

<table><thead><tr class="header"><th>Filter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>number_of_words</code></td><td></td></tr><tr class="even"><td><code>slugify</code></td><td></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>xml_escape</code></td><td>→ <code>CDATA</code></td></tr><tr class="odd"><td><code>cgi_escape</code></td><td>→ <code>foo%2Cbar</code></td></tr><tr class="even"><td><code>uri_escape</code></td><td>→ <code>foo,%20bar</code></td></tr></tbody></table>

### Numbers

    {{ site.posts.size | minus: 2 }}

{: .-setup}

<table><thead><tr class="header"><th>Filter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>minus:</code> <em>2</em></td><td></td></tr><tr class="even"><td><code>plus:</code> <em>2</em></td><td></td></tr><tr class="odd"><td><code>times:</code> <em>2</em></td><td></td></tr><tr class="even"><td><code>divided_by:</code> <em>2</em></td><td></td></tr><tr class="odd"><td><code>modulo:</code> <em>2</em></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>ceil</code></td><td></td></tr><tr class="even"><td><code>floor</code></td><td></td></tr><tr class="odd"><td><code>round</code></td><td></td></tr></tbody></table>

Paginator
---------

### Paginator setup

Add this to `_config.yml`: {: .-setup}

    paginate: 5
    paginate_path: 'blog/:num'

See: [Paginator](http://jekyllrb.com/docs/pagination/)

### Numbers

    {{ paginator.page }}         - page number
    {{ paginator.total_posts }}
    {{ paginator.total_pages }}
    {{ paginator.per_page }}

### Iterating through posts

    {% for post in paginator.posts %} ... {% endfor %}

### Previous button

    {% if paginator.total_pages > 1 %}
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path }}">Previous</a>
      {% else %}
      {% endif %}
    {% endif %}

    {{ paginator.next_page }}     - page number
    {{ paginator.next_page_path }}

Blogging
--------

### Paths

    _posts/YEAR-MONTH-DAY-title.md

See: [Blogging](http://jekyllrb.com/docs/posts/)

### Image paths

    ![My helpful screenshot]({{ site.url }}/assets/screenshot.jpg)

See: [Image paths](http://jekyllrb.com/docs/posts/#including-images-and-resources)

### Drafts

    vi _drafts/a-draft-post.md
    jekyll build --drafts

Posts in `_drafts` only show up in development, but not production. See: [Drafts](http://jekyllrb.com/docs/drafts/)

### Defining excerpts

    ---
    title: My blog post
    excerpt: This post is about cats
    ---

    Hello, let's talk about cats. (···)

Put a key `excerpt` in the frontmatter. See: [Excerpts](http://jekyllrb.com/docs/posts/#post-excerpts)

### Displaying excerpts

    {{ post.excerpt }}

    {{ post.excerpt | remove: '
    <p>' | remove: '</p>
    ' }} {{ post.excerpt | strip_html }}

### Excerpt separator

    ---
    excerpt_separator: <!--more-->
    ---

    Excerpt here
    <!--more-->
    More post body here

Alternatively, you can put excerpts inline in your post by defining `excerpt_separator`.

### Permalinks

    # _config.yml
    permalink: date   # /:categories/:year/:month/:day/:title.html
    permalink: pretty # /:categories/:year/:month/:day/:title/
    permalink: none   # /:categories/:title.html
    permalink: "/:title"

See: [Permalinks](http://jekyllrb.com/docs/permalinks/)

More features
-------------

### Data

    _data/members.yml

{: .-setup}

    {% for member in site.data.members %}
      ...
    {% endfor %}

See: [Data](http://jekyllrb.com/docs/datafiles/)

### Collections

    # _config.yml
    collections:
        - authors

{: .-setup}

    # _/authors/a-n-roquelaire.md
    ---
    name: A. N. Roquelaire
    real_name: Anne Rice
    ---

    {% for author in site.authors %}

See: [Collections](http://jekyllrb.com/docs/collections/)

### Code highlighter

    {% highlight ruby linenos %} def show ... end {% endhighlight %}

Integration
-----------

### Bundler

In `_plugins/bundler.rb`: {: .-setup}

    require "bunder/setup"
    Bundler.require :default

### Compass

-   [Compass](https://gist.github.com/parkr/2874934)
-   [Asset pipeline](https://github.com/matthodan/jekyll-asset-pipeline)

Also see
--------

{: .-one-column}

-   [Jekyll docs](http://jekyllrb.com/docs/home/) *jekyllrb.com*
-   [CloudCannon Jekyll cheatsheet](https://learn.cloudcannon.com/jekyll-cheat-sheet/) *cloudcannon.com*
-   [Jekyll: templates](http://jekyllrb.com/docs/templates/) *jekyllrb.com*
-   [Liquid: output](http://docs.shopify.com/themes/liquid-basics/output) *shopify.com*
-   [Liquid: logic](http://docs.shopify.com/themes/liquid-basics/logic) *shopify.com*
-   [Liquid: filters](http://docs.shopify.com/themes/liquid-documentation/filters) *shopify.com*
-   [Liquid for designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) *github.com/Shopify* {: .-also-see}

{% endraw %}
