subtitle

2022-01-03

------------------------------------------------------------------------

title: AppleScript

category: macOS prism\_languages: \[applescript\]

------------------------------------------------------------------------

### Running

    osascript -e "..."

    display notification "X" with title "Y"

### Comments

    -- This is a single line comment

    # This is another single line comment

    (*
    This is
    a multi
    line comment
    *)

### Say

    -- default voice
    say "Hi I am a Mac"

    -- specified voice
    say "Hi I am a Mac" using "Zarvox"

### Beep

    -- beep once
    beep

    -- beep 10 times
    beep 10

### Delay

    -- delay for 5 seconds
    delay 5
