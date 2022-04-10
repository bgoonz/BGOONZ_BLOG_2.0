### Basic example

    # syncing folder src into dest:
    rsync -avz ./src /dest
    # syncing the content of src into dest:
    rsync -avz ./src/ /dest

### OSX

    --exclude '.Trashes'
    --exclude '.Spotlight-V100'
    --exclude '.fseventsd'

### Transfer options

    -z, --compress
    -n, --dry-run
        --partial   # allows resuming of aborted syncs
        --bwlimit=RATE    # limit socket I/O bandwidth

### Display options

    -q, --quiet
    -v, --verbose
        --stats
    -h, --human-readable
        --progress
    -P                     # same as --partial --progress

### Skipping options

    -u, --update     # skip files newer on dest
    -c, --checksum   # skip based on checksum, not mod-time & size

### Backup options

    -b, --backup           # backup with suffix
        --suffix=SUFFIX    # default ~ without --backup-dir
        --backup-dir=DIR

### Include options

    --exclude=PATTERN
    --include=PATTERN

    --exclude-from=FILE
    --include-from=FILE
    --files-from=FILE    # read list of filenames from FILE

    -C, --cvs-exclude    # exclude from local/global .cvsignore

### Archive options

    -a, --archive    # archive (-rlptgoD)

    -r, --recursive
    -l, --links      # copy symlinks as links
    -p, --perms      # preserve permissions
    -t, --times      # preserve times
    -g, --group      # preserve group
    -o, --owner      # preserve owner
    -D               # same as --devices --specials

    --delete         # Delete extra files
