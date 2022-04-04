Alternate files
---------------

`:A` | alternate file (test) |  
`:R` | related file (controller/view) |

### What it does

<table><thead><tr class="header"><th>.</th><th>:A</th><th>:R</th></tr></thead><tbody><tr class="odd"><td><strong>Model</strong></td><td>test/models/</td><td>db/schema.rb</td></tr><tr class="even"><td><strong>Controller method</strong></td><td>test/controllers/</td><td>app/views/</td></tr><tr class="odd"><td><strong>View template</strong></td><td>test/views/</td><td>app/controllers</td></tr></tbody></table>

Abbreviations
-------------

Type `:Rabbrev` for a full list.

<table><thead><tr class="header"><th>Abbrev</th><th>Expansion</th></tr></thead><tbody><tr class="odd"><td><code>AC::</code></td><td>ActionController</td></tr><tr class="even"><td><code>AR::</code></td><td>ActiveRecord</td></tr><tr class="odd"><td><code>AV::</code></td><td>ActionView</td></tr><tr class="even"><td><code>...</code></td><td>…</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>logd(</code></td><td>logger.debug</td></tr><tr class="odd"><td><code>logi(</code></td><td>logger.info</td></tr><tr class="even"><td><code>...</code></td><td>…</td></tr></tbody></table>

{:.no-head.greycode}

### Model

<table><thead><tr class="header"><th>Abbrev</th><th>Expansion</th></tr></thead><tbody><tr class="odd"><td><code>bt(</code></td><td><code>belongs_to</code></td></tr><tr class="even"><td><code>hm(</code></td><td><code>has_many</code></td></tr><tr class="odd"><td><code>ho(</code></td><td><code>has_one</code></td></tr><tr class="even"><td><code>habtm(</code></td><td><code>has_and_belongs_to_many</code></td></tr></tbody></table>

{:.no-head.greycode}

### Controllers

<table><thead><tr class="header"><th>Abbrev</th><th>Expansion</th></tr></thead><tbody><tr class="odd"><td><code>pa[</code></td><td>params</td></tr><tr class="even"><td><code>re(</code></td><td>redirect_to</td></tr><tr class="odd"><td><code>rp(</code></td><td>render partial:</td></tr><tr class="even"><td><code>rst(</code></td><td>respond_to</td></tr></tbody></table>

{:.no-head.greycode}

### Views

<table><thead><tr class="header"><th>Abbrev</th><th>Expansion</th></tr></thead><tbody><tr class="odd"><td><code>dotiw</code></td><td><code>distance_of_time_in_words</code></td></tr><tr class="even"><td><code>taiw</code></td><td><code>time_ago_in_words</code></td></tr></tbody></table>

{:.no-head.greycode}

Extracting partials
-------------------

    # from view => app/views/home/_foo_partial.haml
      :Rextract home/foo_partial

    # from model => app/models/concerns/foo_concern.rb
      :Rextract FooConcern

Loading files
-------------

### App

    :Econtroller <file>     # app/controllers/*_controller.rb
    :Ehelper                # app/helpers/*_helper.rb
    :Emodel <file>          # app/models/*.rb
    :Ejob <file>            # app/jobs/*_job.rb
    :Emailer <file>         # app/mailers/*.rb

### DB

    :Emigration <file>     # db/migrations/*.rb
    :Eschema               # db/schema.rb

### Lib

    :Elib <file>      # lib/*.rb
    :Elib             # Gemfile
    :Etask <file>     # lib/tasks/*.rake

### Assets

    :Estylesheet
    :Ejavascript

### Views

    :Eview
    :Elayout

### Test

    :Espec
    :Eunittest
      # test/{unit,models,helpers}/*_test.rb
      # spec/{unit,models,helpers}/*_spec.rb

    :Efunctionaltest
      # test/{functional,controllers,mailers}/*_test.rb
      # spec/{functional,controllers,mailers}/*_spec.rb

    :Eintegrationtest
      # test/integration/*_test.rb
      # spec/{features,requests,integration}/*_spec.rb
      # features/*.feature

    :Efixtures
    :Efunctionaltest

### Config

    :Einitializer <file>          # config/initializers/*.rb
    :Elocale                      # config/locales/*.yml
    :Eenvironment                 # application.rb
    :Eenvironment development     # config/environments/*.rb

Reference
---------

-   [vim-rails](https://github.com/tpope/vim-rails)
