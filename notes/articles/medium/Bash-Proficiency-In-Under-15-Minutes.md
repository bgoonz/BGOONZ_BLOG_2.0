Bash Proficiency In Under 15 Minutes
====================================

Cheat sheet and in-depth explanations located below main article contents… The UNIX shell program interprets user commands, which are…

------------------------------------------------------------------------

### Bash Proficiency In Under 15 Minutes

#### Cheat sheet and in-depth explanations located below main article contents… The UNIX shell program interprets user commands, which are either directly entered by the user, or which can be read from a file called the shell script or shell program. Shell scripts are interpreted, not compiled. The shell reads commands from the script line per line and searches for those commands on the system while a compiler converts a program into machine readable form, an executable file.

------------------------------------------------------------------------

### LIFE SAVING PROTIP:

### A nice thing to do is to add on the first line

    #!/bin/bash -x

------------------------------------------------------------------------

> I will go deeper into the explanations behind some of these examples at the bottom of this article.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*QkQexW5Lg0NYrtuD" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/0*gtmOR8KLGdLcUwPt.gif" class="graf-image" /></figure>

#### Here’s some previous articles I’ve written for more advanced users.

<a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a"><strong>Bash Commands That Save Me Time and Frustration</strong><br />
<em>Here’s a list of bash commands that stand between me and insanity.</em>medium.com</a><a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682"><strong>Life Saving Bash Scripts Part 2</strong><br />
<em>I am not saying they’re in any way special compared with other bash scripts… but when I consider that you can never…</em>medium.com</a><a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb"><strong>What Are Bash Aliases And Why Should You Be Using Them!</strong><br />
<em>A Bash alias is a method of supplementing or overriding Bash commands with new ones. Bash aliases make it easy for…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

------------------------------------------------------------------------

### What is Bash?

> Apart from passing commands to the kernel, the main task of a shell is providing a user environment through which they can issue the computer commands via a command line instead of the graphical user interfaces most software consumers are familiar with.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7qlctJzV2Jv3F0cr.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/0*oQWiki9YceuZc9h_.jpeg" alt="fire meme" class="graf-image" /><figcaption>fire meme</figcaption></figure>

#### Here’s a REPL with some examples for you to practice….

> ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ below motivational monologue ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

***Remember: learning is an effortful activity… it’s not comfortable… practice might be unpleasant but if you don’t you might as well skip reading too because without application… reading articles just provides a false sense of accomplishment….***

> <a href="https://resume.github.io/?bgoonz" class="markup--anchor markup--blockquote-anchor">quote by: … <strong>me</strong> 1 minute ago</a> (inspired by veritasium….)

### Aforementioned Repl:

------------------------------------------------------------------------

### <a href="https://egghead.io/lessons/bash-navigate-the-filesystem-in-bash" class="markup--anchor markup--h3-anchor">Navigate the file system</a>

#### Change bash’s current working directory

    cd <file path here>
    # to go up a directory from your current directory
    cd ..

#### List a directory’s contents

    ls
    # for more details, add -l (long)
    ls -l
    # this will output something like this:
    # -rw-r--r--  1 cameronnokes  staff  1237 Jun  2 22:46 index.js
    # in order, those columns are:
    #   permissions for you, your group, all
    #   number of links (hardlinks & softlinks)
    #   owner user
    #   owner group
    #   file size
    #   last modified time
    #   file name

    # to see hidden files/folders (like .git or .npmignore)
    ls -a
    # Note, flags can be combined like so
    ls -la

### <a href="https://egghead.io/lessons/bash-view-files-and-folders-in-bash" class="markup--anchor markup--h3-anchor">View files and folders in bash</a>

#### Output a file to the screen (stdout)

    cat <file name>
    # shows it with line numbers
    cat -n <file name>

#### View a file in bash

    # view the file without dumping it all onto your screen
    less <file name>
    # Some useful shortcuts in less
    #   Shift+g   (jump to end)
    #   g         (go back to top)
    #   /         (search)
    #   q         (quit/close)

#### View file/folder in default application associated with it

    open <file/folder name>
    # view current directory in Finder
    open .
    # specify an application to use
    open <file name> -a TextEdit

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LKzjKI9gdjBFE851.png" alt="folder structure" class="graf-image" /><figcaption>folder structure</figcaption></figure>### <a href="https://egghead.io/lessons/bash-create-and-delete-files-and-folders-in-bash" class="markup--anchor markup--h3-anchor">Create and delete files and folders</a>

#### Create a file

    touch <file name>

#### Set or append to a file

    # set the file's contents
    echo 'hi' > file.txt
    # append to file's contents
    echo 'hi' >> file.txt
    # note that if you pass a file name that doesn't exist, it'll get created on the fly

#### Create a directory

    mkdir <folder name>
    # make intermediary directories as needed
    mkdir -p parent/child/grandchild

#### Remove a file

    # Note, this permanently deletes a file
    rm <file name>
    # Remove a folder and it's contents, recursively
    rm -rf <folder name>

### <a href="https://egghead.io/lessons/bash-move-and-copy-files-and-folders-with-bash" class="markup--anchor markup--h3-anchor">Move and Copy Files and Folders with bash</a>

#### Move a file

    mv <target> <destination>
    # for example, to rename a file
    mv a.js b.js
    # move all files in a folder to another folder
    mv lib/* src

#### Copy a file

    cp <target> <destination>
    # copy everything recursively from one folder to another
    cp -R src/* lib

### <a href="https://egghead.io/lessons/bash-find-files-and-folders-with-find-in-bash" class="markup--anchor markup--h3-anchor">Find Files and Folders with</a> `find` <a href="https://egghead.io/lessons/bash-find-files-and-folders-with-find-in-bash" class="markup--anchor markup--h3-anchor">in bash</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*3hXVYnYPTLCQHe0f.jpg" alt="find" class="graf-image" /><figcaption>find</figcaption></figure># find all the PNGs in a folder
    find <path> -name "*.png"
    # find all the JPGs (case insensitive) in a folder
    find <path> -iname "*.jpg"
    # find only directories
    find <path> -type d
    # delete all matching files
    find <path> -name "*.built.js" -delete
    # execute an arbitrary action on each match
    # remember `{}` will be replaced with the file name
    find <path> -name "*.png" -exec pngquant {} \;

### <a href="https://egghead.io/lessons/grep-search-for-text-with-grep" class="markup--anchor markup--h3-anchor">Search for text with </a>`grep`

    # Basic usage
    grep <pattern> <target file or glob>
    # Useful flags
    # --color     (colorizes matches)
    # -n          (show line numbers)
    # -C <number> (show N lines above/below match for context)
    # -e          (regex search)

### <a href="https://egghead.io/lessons/http-make-http-requests-in-bash-with-curl" class="markup--anchor markup--h3-anchor">Make HTTP requests in bash with </a>`curl`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YmLsGKSXYDZ_vzMp.png" alt="http" class="graf-image" /><figcaption>http</figcaption></figure>The test server is available in the `curl-practice-server` directory. Run `npm install && npm start` to run it.

    curl <url>
    # Useful flags
    # -i    (show response headers only)
    # -L    (follow redirects)
    # -H    (header flag)
    # -X    (set HTTP method)
    # -d    (request body)
    # -o    (output to a file)

    # to POST JSON
    # (technically you don't need -X POST because -d will make it POST automatically, but I like to be explicit)
    curl -X POST -H "Content-Type: application/json" -d '{ "title": "Curling" }' http://localhost:3000/api/posts

    # POST a url encoded form
    curl -X POST --data-urlencode title="Curling again" http://localhost:3000/api/posts

    # multiline curl (applies to any bash command)
    curl -i -X PUT \
    -d '{ "title": "Changed title" }' \
    -H "Content-Type: application/json" \
    http://localhost:3000/api/posts

    # pretty print JSON with jsome
    curl https://swapi.co/api/people/1/ | jsome

Here’s the <a href="https://www.npmjs.com/package/jsome" class="markup--anchor markup--p-anchor">jsome</a> package that pretty prints JSON

### <a href="https://egghead.io/lessons/bash-create-and-run-bash-scripts" class="markup--anchor markup--h3-anchor">Create and run bash scripts</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AC9okBRPVFBSHpwv.png" alt="bash scripting" class="graf-image" /><figcaption>bash scripting</figcaption></figure>echo 'echo Hello World' > script.sh
    chmod u+x script.sh
    ./script.sh

The `init-js.sh` script for scaffolding a JS project

    echo "Initializing JS project at $(pwd)"
    git init
    npm init -y # create package.json with all the defaults
    mkdir src
    touch index.js
    code .

One way to add that script to your `$PATH`:

    cp init-js.sh /usr/local/bin/init-js

### <a href="https://egghead.io/lessons/bash-store-and-use-values-with-bash-variables" class="markup--anchor markup--h3-anchor">Store and Use Values with bash Variables</a>

    # no spaces between name, =, and value
    var=123
    echo $var
    # to make it accessible to all child processes of current shell, export it
    export var
    # this deletes the variable
    unset var

To see all environment variables

    env

`clone-to-temp.sh` script:

    temp=$(mktemp -d)
    git clone --branch $1 $PWD $temp
    echo "branch $1 cloned to $temp"
    # run some tasks, tests, etc here

### <a href="https://egghead.io/lessons/bash-understand-and-use-functions-in-bash" class="markup--anchor markup--h3-anchor">Understand and use functions in bash</a>

    greet() {
      echo "$1 world"
    }

    greeting=$(greet "howdy")

    echo "the greeting is $greeting"

    global=123

    test() {
      echo "global = $global"
      local local_var="i'm a local"
      echo "local_var = $local_var"
    }

    test

    echo "global = $global"
    echo "local_var = $local_var" # will be empty because it's out of scope

### <a href="https://egghead.io/lessons/bash-understand-exit-statuses-in-bash" class="markup--anchor markup--h3-anchor">Understand exit statuses in bash</a>

Get the last run command’s exit status

    ls
    # will be 0 if it ran successfully, 1 - 255 for an error
    echo $?

Exit statuses and functions. `script.sh`

    ok() {
      return 0
    }

    fail() {
      return 1
    }

    fail
    ok

    ./script.sh
    echo $? # exit status is same as the last run function/command

### <a href="https://egghead.io/lessons/bash-use-conditional-statements-in-bash" class="markup--anchor markup--h3-anchor">Use Conditional Statements in bash</a>

Basic form

    # Some conditional primaries that can be used in the if expression:
    #   =, !=      string (in)equality
    #   -eq, -ne   numeric (in)equality
    #   -lt, -gt   less/greater than
    #   -z         check variable is not set
    #   -e         check file/folder exists

    if [[ $USER = 'cameronnokes' ]]; then
      echo "true"
    else
      echo "false"
    fi

Conditionals can be used inline in a more ternary-like format

    [[ $USER = 'cameronnokes' ]] && echo "yes" || echo "no"

`check-status.sh` for checking a URL is responding with a 200

    check_status() {
      local status=$(curl -ILs $1 | head -n 1 | cut -d ' ' -f 2)
      if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
        echo "$1 failed with a $status"
        return 1
      else
        echo "$1 succeeded with a $status"
      fi
    }

    check_status https://example.org
    check_status https://example.org/404

### <a href="https://egghead.io/lessons/bash-chain-commands-with-pipes-and-redirect-output-in-bash" class="markup--anchor markup--h3-anchor">Chain Commands with Pipes and Redirect Output in bash</a>

Pipes

    # ps ax will list all running processes
    ps ax | grep Chrome | less
    # get the file size after uglify + gzip
    uglifyjs -c -m -- index.js | gzip -9 | wc -c

Redirection

    # redirect stdout to a file
    ls > ls.txt
    # append stdout to a file
    echo "hi" >> ls.txt

------------------------------------------------------------------------

### Update(Utility Commands):

***Find files that have been modified on your system in the past 60 minutes***

    find / -mmin 60 -type f

***Find all files larger than 20M***

    find / -type f -size +20M

***Find duplicate files (based on MD5 hash)***

    find -type f -exec md5sum '{}' ';' | sort | uniq --all-repeated=separate -w 33

***Change permission only for files***

    cd /var/www/site && find . -type f -exec chmod 766 {} \;
    cd /var/www/site && find . -type f -exec chmod 664 {} +

***Change permission only for directories***

    cd /var/www/site && find . -type d -exec chmod g+x {} \;
    cd /var/www/site && find . -type d -exec chmod g+rwx {} +

***Find files and directories for specific user/group***

    # User:
    find . -user <username> -print
    find /etc -type f -user <username> -name "*.conf"

    # Group:
    find /opt -group <group>
    find /etc -type f -group <group> -iname "*.conf"

***Find files and directories for all without specific user/group***

    # User:
    find . \! -user <username> -print

    # Group:
    find . \! -group <group>

***Looking for files/directories that only have certain permission***

    # User
    find . -user <username> -perm -u+rw # -rw-r--r--
    find /home -user $(whoami) -perm 777 # -rwxrwxrwx

    # Group:
    find /home -type d -group <group> -perm 755 # -rwxr-xr-x

***Delete older files than 60 days***

    find . -type f -mtime +60 -delete

***Recursively remove all empty sub-directories from a directory***

    find . -depth  -type d  -empty -exec rmdir {} \;

***How to find all hard links to a file***

    find </path/to/dir> -xdev -samefile filename

***Recursively find the latest modified files***

    find . -type f -exec stat --format '%Y :%y %n' "{}" \; | sort -nr | cut -d: -f2- | head

***Recursively find/replace of a string with sed***

    find . -not -path '*/\.git*' -type f -print0 | xargs -0 sed -i 's/foo/bar/g'

***Recursively find/replace of a string in directories and file names***

    find . -depth -name '*test*' -execdir bash -c 'mv -v "$1" "${1//foo/bar}"' _ {} \;

***Recursively find suid executables***

    find / \( -perm -4000 -o -perm -2000 \) -type f -exec ls -la {} \;

------------------------------------------------------------------------

### Additional learning resources

-   <span id="8e12">You can view a command’s documentation right in bash with `man <command name>`.</span>
-   <span id="9b41"><a href="https://www.gnu.org/software/bash/manual/bash.html" class="markup--anchor markup--li-anchor">Official bash manual</a></span>
-   <span id="40a7"><a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" class="markup--anchor markup--li-anchor">TLDP bash programming intro, basic</a></span>
-   <span id="6515"><a href="http://www.tldp.org/LDP/abs/html/" class="markup--anchor markup--li-anchor">TLDP bash programming intro, advanced</a></span>

------------------------------------------------------------------------

### Here’s My Github & Website … feel free to reach out!

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://bg-portfolio.netlify.app/ - bgoonz</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Explanations:

### Pipes

Pipes let you use the output of a program as the input of another one

### simple pipe with sed

This is very simple way to use pipes.

    ls -l | sed -e "s/[aeio]/u/g"

Here, the following happens: first the command ls -l is executed, and it’s output, instead of being printed, is sent (piped) to the sed program, which in turn, prints what it has to.

### an alternative to ls -l \*.txt

Probably, this is a more difficult way to do ls -l \*.txt, but this is for educational purposes.

    ls -l | grep "\.txt$"

> Here, the output of the program ls -l is sent to the grep program, which, in turn, will print lines which match the regex “\\.txt$”.

### Variables

You can use variables as in any programming languages. There are no data types. A variable in bash can contain a number, a character, a string of characters.

You have no need to declare a variable, just assigning a value to its reference will create it.

### Hello World! using variables

    #!/bin/bash          
                STR="Hello World!"
                echo $STR

Line 2 creates a variable called STR and assigns the string “Hello World!” to it. Then the VALUE of this variable is retrieved by putting the ‘$’ in at the beginning. Please notice (try it!) that if you don’t use the ‘$’ sign, the output of the program will be different, and probably not what you want it to be.

### A very simple backup script (little bit better)

    #!/bin/bash          
               OF=/var/my-backup-$(date +%Y%m%d).tgz
               tar -cZf $OF /home/me/

> This script introduces another thing. First of all, you should be familiarized with the variable creation and assignation on line 2. Notice the expression ‘$(date +%Y%m%d)’. If you run the script you’ll notice that it runs the command inside the parenthesis, capturing its output.

> Notice that in this script, the output filename will be different every day, due to the format switch to the date command(+%Y%m%d). You can change this by specifying a different format.

**examples**:

*echo ls*

*echo $(ls)*

### Local variables

Local variables can be created by using the keyword *local*.

    #!/bin/bash
                    HELLO=Hello 
                    function hello {
                            local HELLO=World
                            echo $HELLO
                    }
                    echo $HELLO
                    hello
                    echo $HELLO

### Basic conditional example if .. then

<figure><img src="https://cdn-images-1.medium.com/max/800/0*V2XDOXCJO2I8qYBK.jpg" class="graf-image" /></figure>#!/bin/bash
                if [ "foo" = "foo" ]; then
                   echo expression evaluated as true
                fi

*The code to be executed if the expression within braces is true can be found after the ‘then’ word and before ‘fi’ which indicates the end of the conditionally executed code.*

### Basic conditional example if .. then … else

    #!/bin/bash
                if [ "foo" = "foo" ]; then
                   echo expression evaluated as true
                else
                   echo expression evaluated as false
                fi

### Conditionals with variables

    #!/bin/bash
                T1="foo"
                T2="bar"
                if [ "$T1" = "$T2" ]; then
                    echo expression evaluated as true
                else
                    echo expression evaluated as false
                fi

### Loops

-   <span id="15f6">***for***</span>
-   <span id="4000">***while***</span>

> (there’s another loop called until but I don’t use it so you can look it up if you’d like)

> ***The until loop is almost equal to the while loop, except that the code is executed while the*** <a href="https://www.cs.fsu.edu/~myers/c++/notes/control1.html" class="markup--anchor markup--blockquote-anchor"><strong><em>control expression</em></strong></a> ***evaluates to false.***

The **for** loop is a little bit different from other programming languages. Basically, it let’s you iterate over a series of ‘words’ within a string.

The **while** executes a piece of code if the control expression is true, and only stops when it is false …or a explicit break is found within the executed code.

### For

    #!/bin/bash
            for i in $( ls ); do
                echo item: $i
            done

> On the second line, we declare i to be the variable that will take the different values contained in $( ls ).

> The third line could be longer if needed, or there could be more lines before the done (4).

> ‘done’ (4) indicates that the code that used the value of $i has finished and $i can take a new value.

> A more useful way to use the for loop would be to use it to match only certain files on the previous example

### While

    #!/bin/bash 
             COUNTER=0
             while [  $COUNTER -lt 10 ]; do
                 echo The counter is $COUNTER
                 let COUNTER=COUNTER+1 
             done

### Functions

As in almost any programming language, you can use functions to group pieces of code in a more logical way or practice the divine art of recursion.

Declaring a function is just a matter of writing function my\_func { my\_code }.

Calling a function is just like calling another program, you just write its name.

### Functions ex.)

    #!/bin/bash 
               function quit {
                   exit
               }
               function hello {
                   echo Hello!
               }
               hello
               quit
               echo foo

> Lines 2–4 contain the ‘quit’ function. Lines 5–7 contain the ‘hello’ function If you are not absolutely sure about what this script does, please try it!.

> Notice that a functions don’t need to be declared in any specific order.

> When running the script you’ll notice that first: the function ‘hello’ is called, second the ‘quit’ function, and the program never reaches line 10.

### Functions with parameters

    #!/bin/bash 
                    function quit {
                       exit
                    }  
                    function e {
                        echo $1 
                    }  
                    e Hello
                    e World
                    quit
                    echo foo

### Backup Directory Script:

    #!/bin/bash          
                SRCD="/home/"
                TGTD="/var/backups/"
                OF=home-$(date +%Y%m%d).tgz
                tar -cZf $TGTD$OF $SRCD

### File Renamer:

### Bonus Commands:

#### Included in a gist below (so you can see them syntax highlighted..) I am also including them in text so that they might turn up as a result of google searches … I have a hunch that google’s SEO rankings don’t put much emphasis on the content of github gists.

### Example

    #!/usr/bin/env bash

    NAME="John"
    echo "Hello $NAME!"

### Variables

    NAME="John"
    echo $NAME
    echo "$NAME"
    echo "${NAME}!"

### String quotes

    NAME="John"
    echo "Hi $NAME"  #=> Hi John
    echo 'Hi $NAME'  #=> Hi $NAME

### Shell execution

    echo "I'm in $(pwd)"
    echo "I'm in `pwd`"
    # Same

See <a href="http://wiki.bash-hackers.org/syntax/expansion/cmdsubst" class="markup--anchor markup--p-anchor">Command substitution</a>

### Conditional execution

    git commit && git push
    git commit || echo "Commit failed"

### Functions

{: id=’functions-example’}

    get_name() {
      echo "John"
    }

    echo "You are $(get_name)"

See: <a href="https://bryanguner.medium.com/media/2ab9392fe0f579fca234dcdc71259b1c#functions" class="markup--anchor markup--p-anchor">Functions</a>

### Conditionals

{: id=’conditionals-example’}

    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    fi

See: <a href="https://bryanguner.medium.com/media/2ab9392fe0f579fca234dcdc71259b1c#conditionals" class="markup--anchor markup--p-anchor">Conditionals</a>

### Strict mode

    set -euo pipefail
    IFS=$'\n\t'

See: <a href="http://redsymbol.net/articles/unofficial-bash-strict-mode/" class="markup--anchor markup--p-anchor">Unofficial bash strict mode</a>

### Brace expansion

    echo {A,B}.js

ExpressionDescription`{A,B}`Same as `A B{A,B}.js`Same as `A.js B.js{1..5}`Same as `1 2 3 4 5`

See: <a href="http://wiki.bash-hackers.org/syntax/expansion/brace" class="markup--anchor markup--p-anchor">Brace expansion</a>

### Parameter expansions

{: .-three-column}

### Basics

    name="John"
    echo ${name}
    echo ${name/J/j}    #=> "john" (substitution)
    echo ${name:0:2}    #=> "Jo" (slicing)
    echo ${name::2}     #=> "Jo" (slicing)
    echo ${name::-1}    #=> "Joh" (slicing)
    echo ${name:(-1)}   #=> "n" (slicing from right)
    echo ${name:(-2):1} #=> "h" (slicing from right)
    echo ${food:-Cake}  #=> $food or "Cake"

    length=2
    echo ${name:0:length}  #=> "Jo"

See: <a href="http://wiki.bash-hackers.org/syntax/pe" class="markup--anchor markup--p-anchor">Parameter expansion</a>

    STR="/path/to/foo.cpp"
    echo ${STR%.cpp}    # /path/to/foo
    echo ${STR%.cpp}.o  # /path/to/foo.o
    echo ${STR%/*}      # /path/to

    echo ${STR##*.}     # cpp (extension)
    echo ${STR##*/}     # foo.cpp (basepath)

    echo ${STR#*/}      # path/to/foo.cpp
    echo ${STR##*/}     # foo.cpp

    echo ${STR/foo/bar} # /path/to/bar.cpp

    STR="Hello world"
    echo ${STR:6:5}   # "world"
    echo ${STR: -5:5}  # "world"

    SRC="/path/to/foo.cpp"
    BASE=${SRC##*/}   #=> "foo.cpp" (basepath)
    DIR=${SRC%$BASE}  #=> "/path/to/" (dirpath)

### Substitution

CodeDescription`${FOO%suffix}`Remove suffix`${FOO#prefix}`Remove prefix------`${FOO%%suffix}`Remove long suffix`${FOO##prefix}`Remove long prefix------`${FOO/from/to}`Replace first match`${FOO//from/to}`Replace all------`${FOO/%from/to}`Replace suffix`${FOO/#from/to}`Replace prefix

### Comments

    # Single line comment

    : '
    This is a
    multi line
    comment
    '

### Substrings

ExpressionDescription`${FOO:0:3}`Substring *(position, length)*`${FOO:(-3):3}`Substring from the right

### Length

ExpressionDescription`${#FOO}`Length of `$FOO`

### Manipulation

    STR="HELLO WORLD!"
    echo ${STR,}   #=> "hELLO WORLD!" (lowercase 1st letter)
    echo ${STR,,}  #=> "hello world!" (all lowercase)

    STR="hello world!"
    echo ${STR^}   #=> "Hello world!" (uppercase 1st letter)
    echo ${STR^^}  #=> "HELLO WORLD!" (all uppercase)

### Default values

ExpressionDescription`${FOO:-val}$FOO`, or `val` if unset (or null)`${FOO:=val}`Set `$FOO` to `val` if unset (or null)`${FOO:+val}val` if `$FOO` is set (and not null)`${FOO:?message}`Show error message and exit if `$FOO` is unset (or null)

Omitting the `:` removes the (non)nullity checks, e.g. `${FOO-val}` expands to `val` if unset otherwise `$FOO`.

### Loops

{: .-three-column}

### Basic for loop

    for i in /etc/rc.*; do
      echo $i
    done

### C-like for loop

    for ((i = 0 ; i < 100 ; i++)); do
      echo $i
    done

### Ranges

    for i in {1..5}; do
        echo "Welcome $i"
    done

#### With step size

    for i in {5..50..5}; do
        echo "Welcome $i"
    done

### Reading lines

    cat file.txt | while read line; do
      echo $line
    done

### Forever

    while true; do
      ···
    done

### Functions

{: .-three-column}

### Defining functions

    myfunc() {
        echo "hello $1"
    }

    # Same as above (alternate syntax)
    function myfunc() {
        echo "hello $1"
    }

    myfunc "John"

### Returning values

    myfunc() {
        local myresult='some value'
        echo $myresult
    }

    result="$(myfunc)"

### Raising errors

    myfunc() {
      return 1
    }

    if myfunc; then
      echo "success"
    else
      echo "failure"
    fi

### Arguments

ExpressionDescription`$#`Number of arguments`$*`All postional arguments (as a single word)`$@`All postitional arguments (as separate strings)`$1`First argument`$_`Last argument of the previous command

**Note**: `$@` and `$*` must be quoted in order to perform as described. Otherwise, they do exactly the same thing (arguments as separate strings).

See <a href="http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables" class="markup--anchor markup--p-anchor">Special parameters</a>.

### Conditionals

{: .-three-column}

### Conditions

Note that `[[` is actually a command/program that returns either `0` (true) or `1` (false). Any program that obeys the same logic (like all base utils, such as `grep(1)` or `ping(1)`) can be used as condition, see examples.

ConditionDescription`[[ -z STRING ]]`Empty string`[[ -n STRING ]]`Not empty string`[[ STRING == STRING ]]`Equal`[[ STRING != STRING ]]`Not Equal------`[[ NUM -eq NUM ]]`Equal`[[ NUM -ne NUM ]]`Not equal`[[ NUM -lt NUM ]]`Less than`[[ NUM -le NUM ]]`Less than or equal`[[ NUM -gt NUM ]]`Greater than`[[ NUM -ge NUM ]]`Greater than or equal------`[[ STRING =~ STRING ]]`Regexp------`(( NUM < NUM ))`Numeric conditions

#### More conditions

ConditionDescription`[[ -o noclobber ]]`If OPTIONNAME is enabled------`[[ ! EXPR ]]`Not`[[ X && Y ]]`And\`\[\[ X

### File conditions

ConditionDescription`[[ -e FILE ]]`Exists`[[ -r FILE ]]`Readable`[[ -h FILE ]]`Symlink`[[ -d FILE ]]`Directory`[[ -w FILE ]]`Writable`[[ -s FILE ]]`Size is &gt; 0 bytes`[[ -f FILE ]]`File`[[ -x FILE ]]`Executable------`[[ FILE1 -nt FILE2 ]]`1 is more recent than 2`[[ FILE1 -ot FILE2 ]]`2 is more recent than 1`[[ FILE1 -ef FILE2 ]]`Same files

### Example

    # String
    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    else
      echo "This never happens"
    fi

    # Combinations
    if [[ X && Y ]]; then
      ...
    fi

    # Equal
    if [[ "$A" == "$B" ]]

    # Regex
    if [[ "A" =~ . ]]

    if (( $a < $b )); then
       echo "$a is smaller than $b"
    fi

    if [[ -e "file.txt" ]]; then
      echo "file exists"
    fi

### Arrays

### Defining arrays

    Fruits=('Apple' 'Banana' 'Orange')

    Fruits[0]="Apple"
    Fruits[1]="Banana"
    Fruits[2]="Orange"

### Working with arrays

    echo ${Fruits[0]}           # Element #0
    echo ${Fruits[-1]}          # Last element
    echo ${Fruits[@]}           # All elements, space-separated
    echo ${#Fruits[@]}          # Number of elements
    echo ${#Fruits}             # String length of the 1st element
    echo ${#Fruits[3]}          # String length of the Nth element
    echo ${Fruits[@]:3:2}       # Range (from position 3, length 2)
    echo ${!Fruits[@]}          # Keys of all elements, space-separated

### Operations

    Fruits=("${Fruits[@]}" "Watermelon")    # Push
    Fruits+=('Watermelon')                  # Also Push
    Fruits=( ${Fruits[@]/Ap*/} )            # Remove by regex match
    unset Fruits[2]                         # Remove one item
    Fruits=("${Fruits[@]}")                 # Duplicate
    Fruits=("${Fruits[@]}" "${Veggies[@]}") # Concatenate
    lines=(`cat "logfile"`)                 # Read from file

### Iteration

    for i in "${arrayName[@]}"; do
      echo $i
    done

### Dictionaries

{: .-three-column}

### Defining

    declare -A sounds

    sounds[dog]="bark"
    sounds[cow]="moo"
    sounds[bird]="tweet"
    sounds[wolf]="howl"

Declares `sound` as a Dictionary object (aka associative array).

### Working with dictionaries

    echo ${sounds[dog]} # Dog's sound
    echo ${sounds[@]}   # All values
    echo ${!sounds[@]}  # All keys
    echo ${#sounds[@]}  # Number of elements
    unset sounds[dog]   # Delete dog

### Iteration

#### Iterate over values

    for val in "${sounds[@]}"; do
      echo $val
    done

#### Iterate over keys

    for key in "${!sounds[@]}"; do
      echo $key
    done

### Options

### Options

    set -o noclobber  # Avoid overlay files (echo "hi" > foo)
    set -o errexit    # Used to exit upon error, avoiding cascading errors
    set -o pipefail   # Unveils hidden failures
    set -o nounset    # Exposes unset variables

### Glob options

    shopt -s nullglob    # Non-matching globs are removed  ('*.foo' => '')
    shopt -s failglob    # Non-matching globs throw errors
    shopt -s nocaseglob  # Case insensitive globs
    shopt -s dotglob     # Wildcards match dotfiles ("*.sh" => ".foo.sh")
    shopt -s globstar    # Allow ** for recursive matches ('lib/**/*.rb' => 'lib/a/b/c.rb')

Set `GLOBIGNORE` as a colon-separated list of patterns to be removed from glob matches.

### History

### Commands

CommandDescription`history`Show history`shopt -s histverify`Don't execute expanded result immediately

### Expansions

ExpressionDescription`!$`Expand last parameter of most recent command`!*`Expand all parameters of most recent command`!-n`Expand `n`th most recent command`!n`Expand `n`th command in history`!<command>`Expand most recent invocation of command `<command>`

### Operations

CodeDescription`!!`Execute last command again`!!:s/<FROM>/<TO>/`Replace first occurrence of `<FROM>` to `<TO>` in most recent command`!!:gs/<FROM>/<TO>/`Replace all occurrences of `<FROM>` to `<TO>` in most recent command`!$:t`Expand only basename from last parameter of most recent command`!$:h`Expand only directory from last parameter of most recent command

`!!` and `!$` can be replaced with any valid expansion.

### Slices

CodeDescription`!!:n`Expand only `n`th token from most recent command (command is `0`; first argument is `1`)`!^`Expand first argument from most recent command`!$`Expand last token from most recent command`!!:n-m`Expand range of tokens from most recent command`!!:n-$`Expand `n`th token to last from most recent command

`!!` can be replaced with any valid expansion i.e. `!cat`, `!-2`, `!42`, etc.

### Miscellaneous

### Numeric calculations

    $((a + 200))      # Add 200 to $a

    $(($RANDOM%200))  # Random number 0..199

### Subshells

    (cd somedir; echo "I'm now in $PWD")
    pwd # still in first directory

### Redirection

    python hello.py > output.txt   # stdout to (file)
    python hello.py >> output.txt  # stdout to (file), append
    python hello.py 2> error.log   # stderr to (file)
    python hello.py 2>&1           # stderr to stdout
    python hello.py 2>/dev/null    # stderr to (null)
    python hello.py &>/dev/null    # stdout and stderr to (null)

    python hello.py < foo.txt      # feed foo.txt to stdin for python

### Inspecting commands

    command -V cd
    #=> "cd is a function/alias/whatever"

### Trap errors

    trap 'echo Error at about $LINENO' ERR

or

    traperr() {
      echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
    }

    set -o errtrace
    trap traperr ERR

### Case/switch

    case "$1" in
      start | up)
        vagrant up
        ;;

      *)
        echo "Usage: $0 {start|stop|ssh}"
        ;;
    esac

### Source relative

    source "${0%/*}/../share/foo.sh"

### printf

    printf "Hello %s, I'm %s" Sven Olga
    #=> "Hello Sven, I'm Olga

    printf "1 + 1 = %d" 2
    #=> "1 + 1 = 2"

    printf "This is how you print a float: %f" 2
    #=> "This is how you print a float: 2.000000"

### Directory of script

    DIR="${0%/*}"

### Getting options

    while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
      -V | --version )
        echo $version
        exit
        ;;
      -s | --string )
        shift; string=$1
        ;;
      -f | --flag )
        flag=1
        ;;
    esac; shift; done
    if [[ "$1" == '--' ]]; then shift; fi

### Heredoc

    cat <<END
    hello world
    END

### Reading input

    echo -n "Proceed? [y/n]: "
    read ans
    echo $ans

    read -n 1 ans    # Just one character

### Special variables

ExpressionDescription`$?`Exit status of last task`$!`PID of last background task`$$`PID of shell`$0`Filename of the shell script

See <a href="http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables" class="markup--anchor markup--p-anchor">Special parameters</a>.

### Go to previous directory

    pwd # /home/user/foo
    cd bar/
    pwd # /home/user/foo/bar
    cd -
    pwd # /home/user/foo

### Check for command’s result

    if ping -c 1 google.com; then
      echo "It appears you have a working internet connection"
    fi

### Grep check

    if grep -q 'foo' ~/.bash_history; then
      echo "You appear to have typed 'foo' in the past"
    fi

### Also see

{: .-one-column}

-   <span id="4581"><a href="http://wiki.bash-hackers.org/" class="markup--anchor markup--li-anchor">Bash-hackers wiki</a> *(bash-hackers.org)*</span>
-   <span id="b6a2"><a href="http://wiki.bash-hackers.org/syntax/shellvars" class="markup--anchor markup--li-anchor">Shell vars</a> *(bash-hackers.org)*</span>
-   <span id="a5d4"><a href="https://learnxinyminutes.com/docs/bash/" class="markup--anchor markup--li-anchor">Learn bash in y minutes</a> *(learnxinyminutes.com)*</span>
-   <span id="007b"><a href="http://mywiki.wooledge.org/BashGuide" class="markup--anchor markup--li-anchor">Bash Guide</a> *(mywiki.wooledge.org)*</span>
-   <span id="f2db"><a href="https://www.shellcheck.net/" class="markup--anchor markup--li-anchor">ShellCheck</a> *(shellcheck.net)*</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 9, 2021](https://medium.com/p/3ec9d4e2e65).

<a href="https://medium.com/@bryanguner/bash-proficiency-in-under-15-minutes-3ec9d4e2e65" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
