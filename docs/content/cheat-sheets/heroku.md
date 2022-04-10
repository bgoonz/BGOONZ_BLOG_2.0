subtitle

2022-01-03

------------------------------------------------------------------------

title: Heroku category: Devops

description: | A one-page reference to common Heroku-CLI commands. intro: | [Heroku](http://heroku.com/) is a web hosting platform supporting many languages, and this guide is a reference to Heroku’s [command-line interface](http://heroku.com/).

------------------------------------------------------------------------

### `create` - Create an app

    heroku create sushi

    git push heroku master

### `access` - Collaboration

#### Manage collaborators

    heroku access                     # List
    heroku access:add me@xy.com
    heroku access:remove me@xy.com

#### Transfer to another owner

    heroku apps:transfer new@owner.com

### `logs` - Show logs

    heroku logs
    heroku logs -t      # --tail (stream)
    heroku logs -s app  # --source (only on app logs)

### `releases`

    heroku releases
    heroku releases:info v25
    heroku rollback

### `pg` - PostgreSQL

#### Start a database

    heroku addons:add heroku-postgresql

#### Enable backups

    heroku addons:add pgbackups:auto-month

See: [Heroku PostgreSQL](https://devcenter.heroku.com/articles/heroku-postgresql) *(devcenter.heroku.com)*

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

Processes
---------

### `ps` - Managing processes

    heroku ps              # list
    heroku ps:scale web=1  # spawn more dynos

### `restart`

    heroku restart

### `run` - Running tasks

    heroku run bash
    heroku run console                  # Rails console
    heroku run rake assets:precompile

Domains
-------

### `domains` - Custom domains

#### Add both!

    heroku domains:add example.com
    heroku domains:add www.example.com

#### Removing

    heroku domains:clear
    heroku domains:remove example.com

See: [Custom domains](https://devcenter.heroku.com/articles/custom-domains) *(devcenter.heroku.com)*

### Wildcard domains

    heroku addons:add wildcard_domains

    *.yourdomain.com => heroku.com

Other tricks
------------

### htpasswd (for PHP apps)

Create an `.htaccess` file in the webroot:

    AuthUserFile /app/www/.htpasswd
    AuthType Basic
    AuthName "Restricted Access"
    Require valid-user

Create a `.htpasswd` file:

    $ htpasswd -c .htpasswd [username]

See: [gist.github.com](https://gist.github.com/3316425)

References
----------

-   <a href="https://addons.heroku.com/" class="uri">https://addons.heroku.com/</a>
-   <a href="https://devcenter.heroku.com/" class="uri">https://devcenter.heroku.com/</a>
