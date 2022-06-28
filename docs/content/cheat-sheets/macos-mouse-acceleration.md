---
title: Mouse Acceleration

category: macOS
weight: -1
keywords:
    - 'defaults write .GlobalPreferences com.apple.mouse.scaling -1'
intro: |
    Disable mouse acceleration with this one weird trick.
---

## Acceleration

### Disabling

```bash
defaults write .GlobalPreferences com.apple.mouse.scaling -1
```

Note: Log out to take effect. If you change _Tracking Speed_ under System Preferences, it will undo this fix. Only affects the mouse, not the trackpad.

### Re-enabling

Under _System Preferences_ → _Mouse_, change _Tracking Speed_.

### Trackpad acceleration

```bash
defaults write .GlobalPreferences com.apple.trackpad.scaling -1
```

Works the same way, but only affects trackpads.

## References

-   [Disabling mouse acceleration](https://stackoverflow.com/questions/5782884/disabling-mouse-acceleration-in-mac-os-x) _(stackoverflow.com)_
