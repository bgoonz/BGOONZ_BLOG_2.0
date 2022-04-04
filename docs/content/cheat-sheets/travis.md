Reference
---------

{:.-three-column}

### Node.js

    language: node_js
    node_js:
        - '4'

Defaults install to `npm install`, and defaults test to `npm test`.

### Ruby

    language: ruby
    rvm:
        - 2.0.0
        - 1.9.3
        - 1.8.7

Defaults install to `bundle install`, defaults test to `rake`.

### Build lifecycle

<table><thead><tr class="header"><th>Lifecycle</th></tr></thead><tbody><tr class="odd"><td><code>before_install</code></td></tr><tr class="even"><td><code>install</code></td></tr><tr class="odd"><td>—</td></tr><tr class="even"><td><code>before_script</code></td></tr><tr class="odd"><td><code>script</code></td></tr><tr class="even"><td>—</td></tr><tr class="odd"><td><code>after_success</code> or <code>after_failure</code></td></tr><tr class="even"><td><code>after_script</code></td></tr><tr class="odd"><td>—</td></tr><tr class="even"><td><code>before_deploy</code> (optional)</td></tr><tr class="odd"><td><code>deploy</code> (optional)</td></tr><tr class="even"><td><code>after_deploy</code> (optional)</td></tr></tbody></table>

### Branches

    branches:
        except: ['..']
        only: ['master']

### Environment vars

    env:
        - 'rack=master'
        - 'rack=1.3.4'

### Custom test command

    script: make test
    before_script: make pretest
    after_script:  make clean

    before_script:
      - make pretest1
      - make pretest2

### Branches

    branches:
        except:
            - legacy

        only:
            - gh-pages
            - /^deploy/

### Apt packages

    before_install:
        - sudo apt-get update -q
        - sudo apt-get install gcc-4.8 -y

<a href="https://docs.travis-ci.com/user/installing-dependencies/" class="uri">https://docs.travis-ci.com/user/installing-dependencies/</a>

### Etc

    gemfile:
        - gemfiles/Gemfile.rails-2.3.x
        - gemfiles/Gemfile.rails-3.0.x

### References

-   http://about.travis-ci.org/docs/user/build-configuration/
-   http://about.travis-ci.org/docs/user/languages/javascript-with-nodejs/
-   http://about.travis-ci.org/docs/user/languages/ruby/
