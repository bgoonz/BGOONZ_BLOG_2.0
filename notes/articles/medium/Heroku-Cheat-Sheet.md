Heroku Cheat Sheet
==================

a cheatsheet for using heroku-cli

------------------------------------------------------------------------

### Heroku Cheat Sheet

#### a cheatsheet for using heroku-cli

<figure><img src="https://cdn-images-1.medium.com/max/800/0*x5-iOqgNLWiBDKov.gif" class="graf-image" /></figure><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### `create` - Create an app

    heroku create sushi

    git push heroku master

### `access` - Collaboration

#### Manage collaborators

    heroku access                     # List
    heroku access:add me@xy.com
    heroku access:remove me@xy.com

#### Transfer to another owner

    heroku apps:transfer new@owner.com

### `logs` - Show logs

    heroku logs
    heroku logs -t      # --tail (stream)
    heroku logs -s app  # --source (only on app logs)

### `releases`

    heroku releases
    heroku releases:info v25
    heroku rollback

### `pg` - PostgreSQL

#### Start a database

    heroku addons:add heroku-postgresql

#### Enable backups

    heroku addons:add pgbackups:auto-month

See: <a href="https://devcenter.heroku.com/articles/heroku-postgresql" class="markup--anchor markup--p-anchor" title="https://devcenter.heroku.com/articles/heroku-postgresql">Heroku PostgreSQL</a> *(*<a href="http://devcenter.heroku.com" class="markup--anchor markup--p-anchor" title="http://devcenter.heroku.com"><em>devcenter.heroku.com</em></a>*)*

### `config` - Environment var configuration

#### Listing

    heroku config        # List
    heroku config -s     # List in shell format

#### Getting

    heroku config:get KEY

#### Setting

    heroku config:set KEY=val
    heroku config:set KEY1=val KEY2=val ...

    heroku config:unset KEY1

### `apps` - Applications

    heroku apps                  # list
    heroku apps:create [NAME]
    heroku apps:destroy --app APP
    heroku apps:info
    heroku apps:open             # open in browser
    heroku apps:rename NEWNAME

### `maintenance`

    heroku maintenance:on

    heroku maintenance:off

### Processes

### `ps` - Managing processes

    heroku ps              # list
    heroku ps:scale web=1  # spawn more dynos

### `restart`

    heroku restart

### `run` - Running tasks

    heroku run bash
    heroku run console                  # Rails console
    heroku run rake assets:precompile

### Domains

### `domains` - Custom domains

#### Add both!

    heroku domains:add example.com
    heroku domains:add www.example.com

#### Removing

    heroku domains:clear
    heroku domains:remove example.com

See: <a href="https://devcenter.heroku.com/articles/custom-domains" class="markup--anchor markup--p-anchor" title="https://devcenter.heroku.com/articles/custom-domains">Custom domains</a> *(*<a href="http://devcenter.heroku.com" class="markup--anchor markup--p-anchor" title="http://devcenter.heroku.com"><em>devcenter.heroku.com</em></a>*)*

### Wildcard domains

    heroku addons:add wildcard_domains

    *.yourdomain.com => heroku.com

### Other tricks

### htpasswd (for PHP apps)

Create an `.htaccess` file in the webroot:

    AuthUserFile /app/www/.htpasswd
    AuthType Basic
    AuthName "Restricted Access"
    Require valid-user

Create a `.htpasswd` file:

    $ htpasswd -c .htpasswd [username]

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 14, 2021](https://medium.com/p/6107ce6ba52b).

<a href="https://medium.com/@bryanguner/heroku-cheat-sheet-6107ce6ba52b" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
