In place replacements
---------------------

### In-place replacement (GNU)

    sed -i -e 's/foo/bar/' example.md

In GNU sed: use `-i` without arg.

#### In-place replacement (BSD)

    sed -i '' -e 's/foo/bar/' example.md

In OSX, `-i ''` is required.

File regions
------------

{:.-three-column}

### Print until a certain line is met

    sed '/begin api/q'

### Print until a certain line is met, but not that line

    sed '/^# begin/,$d'

### Print everything after a given line

    sed -n '/end api/,$p'

Print after a given line is found.

### Print everything except matching

    sed -n '/regex/d;'

Print everything except lines matching regex. Useful for printing files with comments.
