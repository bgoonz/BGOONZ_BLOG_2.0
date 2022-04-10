### Types of profiles

-   **Development** - deploy to an iPhone via XCode
-   **Adhoc** - deploy via testflightapp.com
-   **Appstore** - only used for submitting to the app store

### Requirements

<table><thead><tr class="header"><th>What</th><th>Dev</th><th>Adhoc</th><th>Appstore</th></tr></thead><tbody><tr class="odd"><td>CSR file</td><td></td><td>√</td><td>√</td></tr><tr class="even"><td>Device UDIDs</td><td>√</td><td>√</td><td></td></tr><tr class="odd"><td>Developers list</td><td>√</td><td></td><td></td></tr></tbody></table>

### Obtaining a CSR file

Needed for Adhoc & Appstore builds.

-   Open *Keychain Access.app*
-   *Keychain Access* menu -&gt; *Certificate Assistant* menu -&gt; *Request a certificate…*
    -   User email address is *your email*
    -   Common name is *your name*
    -   CA Email address is *blank*
    -   Request is *Saved to disk*

### Get the `.cer` files

Needed for Adhoc & Appstore builds.

-   in the iOS dev portal, go to *Certificates*, and download the certificate.  
    Install it on the dev machine.

### Obtaining device UDIDs

Needed for Dev and Adhoc builds.

-   via iTunes: http://whatsmyudid.com
-   via XCode: cmd+shift+2 (Organizer), Devices

For developers
--------------

Don’t ever ask Xcode to *Fix issue…* for you.

### Using a provisioning profile

No need to use `.mobileprovision` files since XCode 5.

-   Open the `*.mobileprovision` file using Finder
-   XCode Project -&gt; *Build settings* tab -&gt; *Code signing* section -&gt; *Provisioning Profile* section
    -   Set *Debug* to the *development* profile
    -   Set *Release* to the *ad-hoc* profile

### Building an .ipa (Adhoc or Appstore)

-   In the toolbar, select "iOS Device” as the target
-   *Product* menu -&gt; *Archive*
-   In the Organizer (Cmd+Shift+2) -&gt; *Archives* tab -&gt; *Distribute…* button
