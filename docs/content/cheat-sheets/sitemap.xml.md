{{ site.url }}/ {% for page in site.pages %}{% if page.type == ‘article’ %}{{ site.url }}{{ page.url | remove: ‘.html’ }} {% endif %}{% endfor %}
