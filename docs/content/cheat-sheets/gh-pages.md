subtitle

2022-01-03

------------------------------------------------------------------------

title: GitHub pages category: Jekyll

------------------------------------------------------------------------

Custom domains
--------------

### Custom domains

    $ echo "foobar.com" > CNAME
    $ git commit && git push

Create a `CNAME` file with your domain on it.

See: [Setting up a custom domain](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) *(github.com)*

### Set up your domain

Subdomain (like www): {: .-setup}

     CNAME => username.github.io

Apex domains: {: .-setup}

     ALIAS => username.github.io

Apex domains (alternative): {: .-setup}

    A => 192.30.252.153
    A => 192.30.252.154

References
----------

{: .-one-column}

-   <a href="https://pages.github.com" class="uri">https://pages.github.com</a>
