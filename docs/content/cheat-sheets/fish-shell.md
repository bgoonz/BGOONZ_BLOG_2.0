subtitle

2022-01-03

------------------------------------------------------------------------

title: Fish shell category: CLI

prism\_languages: \[fish\] weight: -1

------------------------------------------------------------------------

### Keys

<table><thead><tr class="header"><th>Shortcut</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>Alt ←</code> <em>/</em> <code>Alt →</code></td><td>Move word</td></tr><tr class="even"><td><code>^U</code></td><td>Delete to beginning</td></tr><tr class="odd"><td><code>^W</code></td><td>Delete to previous <code>/</code></td></tr><tr class="even"><td><code>^D</code></td><td>Delete next character</td></tr><tr class="odd"><td><code>Alt D</code></td><td>Delete next word</td></tr><tr class="even"><td><code>^C</code></td><td>Cancel line</td></tr><tr class="odd"><td><code>Alt P</code></td><td>Page output</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>Alt ↑</code> <em>/</em> <code>Alt ↓</code></td><td>Previous <em>/</em> next arguments</td></tr><tr class="even"><td><code>Alt E</code> <em>/</em> <code>Alt V</code></td><td>Open in external editor</td></tr><tr class="odd"><td><code>^L</code></td><td>Repaint screen</td></tr></tbody></table>

{: .-shortcuts}

### Help

`Alt H` | Help on word (man) |  
`Alt W` | Help on word (short descriptions) |  
`Alt L` | List directory on cursor |

{: .-shortcuts}

Function
--------

### Writing functions

    function my_function --description "My description"
      ···
    end

### Conditional

    if test -f foo.txt
      ···
    else if test -f bar.txt
      ···
    else
      ···
    end

### Combining tests

    if test -f foo.txt && test -f bar.txt

    if test -f foo.txt -a -f bar.txt

    if test \( -f foo.txt \) -a -f \( bar.txt \)

### Events

#### Emitting

    emit my_event

#### Listening

    function myhook --on-event my_event
      ···
    end

This lets you hook onto events, such as `fish_prompt`.

Completions
-----------

### Creating completions

#### ~/.fish/completions/mycommand.fish

    complete -c mycommand ...
    complete -c mycommand ...
    complete -c mycommand ...

### Options

    complete \
      -c                         # command
      -s                         # short option
      -l                         # long option
      -r, --require-parameter
      -f, --no-files
      -x                         # exclusive (-r -f)
      -n '__fish_use_subcommand' # condition
      --description ".."

#### Example

      complete -c $cmd \
    -n '__fish_use_subcommand' \
    -x -a hello \
    --description 'lol'

### Conditions

<table style="width:99%;"><colgroup><col style="width: 24%" /><col style="width: 75%" /></colgroup><thead><tr class="header"><th>Condition</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-n __fish_complete_directories STRING DESCRIPTION</code></td><td>performs path completion on STRING, allowing only directories, and giving them the description DESCRIPTION.</td></tr><tr class="even"><td><code>-n __fish_complete_path STRING DESCRIPTION</code></td><td>performs path completion on STRING, giving them the description DESCRIPTION.</td></tr><tr class="odd"><td><code>-n __fish_complete_groups</code></td><td>prints a list of all user groups with the groups members as description.</td></tr><tr class="even"><td><code>-n __fish_complete_pids</code></td><td>prints a list of all processes IDs with the command name as description.</td></tr><tr class="odd"><td><code>-n __fish_complete_suffix SUFFIX</code></td><td>performs file completion allowing only files ending in SUFFIX. The mimetype database is used to find a suitable description.</td></tr><tr class="even"><td><code>-n __fish_complete_users</code></td><td>prints a list of all users with their full name as description.</td></tr><tr class="odd"><td><code>-n __fish_print_filesystems</code></td><td>prints a list of all known file systems. Currently, this is a static list, and not dependent on what file systems the host operating system actually understands.</td></tr><tr class="even"><td><code>-n __fish_print_hostnames</code></td><td>prints a list of all known hostnames. This functions searches the fstab for nfs servers, ssh for known hosts and checks the /etc/hosts file.</td></tr><tr class="odd"><td><code>-n __fish_print_interfaces</code></td><td>prints a list of all known network interfaces.</td></tr><tr class="even"><td><code>-n __fish_print_packages</code></td><td>prints a list of all installed packages. This function currently handles Debian, rpm and Gentoo packages.</td></tr><tr class="odd"><td><code>-n __fish_use_subcommand</code></td><td></td></tr><tr class="even"><td><code>-n __fish_seen_subcommand_from init</code></td><td></td></tr></tbody></table>

#### Example

    complete -c ruby -s X -x -a '(__fish_complete_directories (commandline -ct))' --description 'Directory'

### Examples

Start each example with `complete -c cmdname`

    -x
      # no filename completion

    -s d -x -a "read skip"
      # -d {read|skip}

    -s d -x
      # -d <something>

    -s f -r
      # -f FILE

    -s f -l force
      # -f, --force

    -a "(cat /etc/passwd | cut -d : -f 1)"
      # first argument as filename
