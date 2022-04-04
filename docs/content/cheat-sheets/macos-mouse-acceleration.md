Acceleration
------------

### Disabling

    defaults write .GlobalPreferences com.apple.mouse.scaling -1

Note: Log out to take effect. If you change *Tracking Speed* under System Preferences, it will undo this fix. Only affects the mouse, not the trackpad.

### Re-enabling

Under *System Preferences* → *Mouse*, change *Tracking Speed*.

### Trackpad acceleration

    defaults write .GlobalPreferences com.apple.trackpad.scaling -1

Works the same way, but only affects trackpads.

References
----------

-   [Disabling mouse acceleration](https://stackoverflow.com/questions/5782884/disabling-mouse-acceleration-in-mac-os-x) *(stackoverflow.com)*
