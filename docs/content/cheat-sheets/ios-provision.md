---
title: iOS Provisioning Profiles
---

### Types of profiles

-   **Development** - deploy to an iPhone via XCode
-   **Adhoc** - deploy via testflightapp.com
-   **Appstore** - only used for submitting to the app store

### Requirements

| What            | Dev | Adhoc | Appstore |
| --------------- | --- | ----- | -------- |
| CSR file        |     | √     | √        |
| Device UDIDs    | √   | √     |          |
| Developers list | √   |       |          |

### Obtaining a CSR file

Needed for Adhoc & Appstore builds.

-   Open _Keychain Access.app_
-   _Keychain Access_ menu -> _Certificate Assistant_ menu -> _Request a
    certificate..._
    -   User email address is _your email_
    -   Common name is _your name_
    -   CA Email address is _blank_
    -   Request is _Saved to disk_

### Get the `.cer` files

Needed for Adhoc & Appstore builds.

-   in the iOS dev portal, go to _Certificates_, and download the certificate.  
    Install it on the dev machine.

### Obtaining device UDIDs

Needed for Dev and Adhoc builds.

-   via iTunes: http://whatsmyudid.com
-   via XCode: cmd+shift+2 (Organizer), Devices

## For developers

Don't ever ask Xcode to _Fix issue..._ for you.

### Using a provisioning profile

No need to use `.mobileprovision` files since XCode 5.

-   Open the `*.mobileprovision` file using Finder
-   XCode Project -> _Build settings_ tab -> _Code signing_ section ->
    _Provisioning Profile_ section
    -   Set _Debug_ to the _development_ profile
    -   Set _Release_ to the _ad-hoc_ profile

### Building an .ipa (Adhoc or Appstore)

-   In the toolbar, select "iOS Device" as the target
-   _Product_ menu -> _Archive_
-   In the Organizer (Cmd+Shift+2) -> _Archives_ tab -> _Distribute..._ button
