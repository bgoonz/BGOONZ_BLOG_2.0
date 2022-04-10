    /* .projectionist.vim */
    {
      "app/assets/react/components/*.jsx": {
        "type": "component",
        "template": [
          "import React from 'react'",
          "export default {} = React.createClass({ ... })"
        ]
      }

Available options
-----------------

    {
      "lib/*.rb": {
        "type": "lib", /* enables :Elib */
        "alternate": "test/{}_spec.rb", /* for :A */
        "template": [ ... ],

        "path": "include", /* for `gf` i think */

        "console": "node", /* for :Console */
        "dispatch": "node", /* for :Dispatch (dispatch.vim) */
        "start": "rails server", /* for :Start (dispatch.vim) */
        "make": "node", /* for makeprg */
      }
    }

Commands
--------

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>:A</code></td><td>Edit alternate</td></tr><tr class="even"><td><code>:A {file}</code></td><td>Edit file</td></tr><tr class="odd"><td>———</td><td>————-</td></tr><tr class="even"><td><code>:AS</code></td><td>Edit in split</td></tr><tr class="odd"><td><code>:AV</code></td><td>Edit in vsplit</td></tr><tr class="even"><td><code>:AT</code></td><td>Edit in tab</td></tr><tr class="odd"><td>———</td><td>————-</td></tr><tr class="even"><td><code>:AD</code></td><td>Replace with template</td></tr><tr class="odd"><td>———</td><td>————-</td></tr><tr class="even"><td><code>:Cd</code></td><td>cd to root</td></tr><tr class="odd"><td><code>:Cd {path}</code></td><td>cd to path in root</td></tr><tr class="even"><td><code>:Lcd</code></td><td>cd to root using :lcd</td></tr><tr class="odd"><td>———</td><td>————-</td></tr><tr class="even"><td><code>:ProjectDo {cmd}</code></td><td>run command in root</td></tr></tbody></table>

{:.shortcuts}

Reference
---------

See [vim-projectionist](https://github.com/tpope/vim-projectionist).
