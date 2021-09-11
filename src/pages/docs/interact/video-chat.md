---
title: Zumzi Video Conferencing (Mesibo API Backend)
weight: 0
excerpt: lorem-ipsum
seo:
    title: 'Zumzi Video Conference:'
    description: |-
        Features:
        Group Voice and Video Call with unlimited members
        Live Streaming
        Screen Sharing
        Supports video streaming at various resolutions.
    robots: []
    extra:
        - name: 'og:description'
          value: |-
              Features:
              Group Voice and Video Call with unlimited members
              Live Streaming
              Screen Sharing
              Supports video streaming at various resolutions.
          keyName: property
          relativeUrl: false
        - name: 'og:title'
          value: 'Zumzi Video Conference:'
          keyName: property
          relativeUrl: false
        - name: 'og:image'
          value: images/zumzi-video-chat-0aba1c15.png
          keyName: property
          relativeUrl: true
    type: stackbit_page_meta
template: docs
---

# Zumzi Video Conference:

<iframe class="block-content" width="100%  width="800" height="575"
        src="https://zumzi-chat-messenger.vercel.app/web/login.html" title="YouTube video
        player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Zumzi Live Demo

![demo](https://zumzi-chat-messenger.vercel.app/web/login.html)

## Features:

-   Group Voice and Video Call with unlimited members
-   Live Streaming
-   Screen Sharing
-   Fine control over all video & audio parameters and user permissions
-   Supports video streaming at various resolutions: Standard, HD, FHD and 4K
-   Group Chat
-   One-to-One chat
-   Invite Participants

There are two sub-folders:

-   **backend** contains the source code for hosting the backend APIs for the app
-   **web** contains the source code for the app which you can directly integrate into your website.

## Apendix

-   access token:
    > An Access Token needs to be generated for every user who needs to access mesibo real-time messaging API. You can generate Access Token for every user of your application on demand and send it to the user. The user will then use this access token to initialize mesibo client-side API..

---

-   api key
    > API key is a unique alphanumeric identifier associated with your Mesibo account. You can view, change or regenerate the API key from the Mesibo console.

---

-   Application Token
    > is a unique alphanumeric identifier with one of your application. You can view and change the app token from the Mesibo Console.

---

-   Mesibo container
    > A container is a runtime instance of mesibo in-premises docker image.

---

-   MAU
    > MAU is counted when a user connects to mesibo server within monthly billing period. To further clarify, it will be only counted as one when a unique user connects to mesibo server multiple times within monthly billing period

---

-   High-availability clusters
    > (also known as HA clusters or fail-over clusters) are
    > groups of computers that support server applications that can be reliably utilized with a minimum amount of down-time

---

-   namespace
    > in mesibo is refer to a mesibo feature that isolates users and groups of an application from another application. Users can only interact with users and groups of the same application that are part of the same namespace. Namespaces are an important part of Mesibo’s isolation model

---

-   node
    > A \[node]is a physical or virtual machine running an instance of the mesibo.

---

-   On premises deployment
    > Mesibo On-premises deploment allows you to run Mesibo in your own data center or cloud.

---

-   1-1 Communication
    > Communication is between two parties; for example, a chat or a call

---

-   Peer-to-peer
    (P2P)
    > It is a distributed application architecture that partitions tasks or workloads between peers. Peers are equally privileged, equipotent participants in the application.They are said to form a peer-to-peer network of nodes.

---

![zzumzi](https://github.com/bgoonz/zumzi-chat-messenger/blob/master/zumzi.PNG?raw=true)

[.](.)<br>
├── [./backend](./backend)<br>
│   ├── [./backend/activation.php](./backend/activation.php)<br>
│   ├── [./backend/api_functions.php](./backend/api_functions.php)<br>
│   ├── [./backend/api.php](./backend/api.php)<br>
│   ├── [./backend/captcha.php](./backend/captcha.php)<br>
│   ├── [./backend/config.php](./backend/config.php)<br>
│   ├── [./backend/consts.php](./backend/consts.php)<br>
│   ├── [./backend/db.sql](./backend/db.sql)<br>
│   ├── [./backend/errorhandler.php](./backend/errorhandler.php)<br>
│   ├── [./backend/httpheaders.php](./backend/httpheaders.php)<br>
│   ├── [./backend/image.php](./backend/image.php)<br>
│   ├── [./backend/json.php](./backend/json.php)<br>
│   ├── [./backend/mesiboapi.php](./backend/mesiboapi.php)<br>
│   ├── [./backend/mesibohelper.php](./backend/mesibohelper.php)<br>
│   ├── [./backend/mysqldb.php](./backend/mysqldb.php)<br>
│   ├── [./backend/mysql-wrapper.php](./backend/mysql-wrapper.php)<br>
│   ├── [./backend/README.md](./backend/README.md)<br>
│   ├── [./backend/upload.php](./backend/upload.php)<br>
│   └── [./backend/utility.php](./backend/utility.php)<br>
├── [./glossary_files](./glossary_files)<br>
│   ├── [./glossary_files/559862854355634.js](./glossary_files/559862854355634.js)<br>
│   ├── [./glossary_files/analytics.js](./glossary_files/analytics.js)<br>
│   ├── [./glossary_files/archive.js](./glossary_files/archive.js)<br>
│   ├── [./glossary_files/bootstrap.min.css](./glossary_files/bootstrap.min.css)<br>
│   ├── [./glossary_files/bootstrap.min.js](./glossary_files/bootstrap.min.js)<br>
│   ├── [./glossary_files/buttons.js](./glossary_files/buttons.js)<br>
│   ├── [./glossary_files/collections_tocs.js](./glossary_files/collections_tocs.js)<br>
│   ├── [./glossary_files/css.css](./glossary_files/css.css)<br>
│   ├── [./glossary_files/docs.js](./glossary_files/docs.js)<br>
│   ├── [./glossary_files/fbevents.js](./glossary_files/fbevents.js)<br>
│   ├── [./glossary_files/font-awesome.min.css](./glossary_files/font-awesome.min.css)<br>
│   ├── [./glossary_files/github.css](./glossary_files/github.css)<br>
│   ├── [./glossary_files/glossary.js](./glossary_files/glossary.js)<br>
│   ├── [./glossary_files/jquery.js](./glossary_files/jquery.js)<br>
│   ├── [./glossary_files/menu.js](./glossary_files/menu.js)<br>
│   ├── [./glossary_files/mesibo-logo.svg](./glossary_files/mesibo-logo.svg)<br>
│   ├── [./glossary_files/mesibo-logo-white.png](./glossary_files/mesibo-logo-white.png)<br>
│   ├── [./glossary_files/metadata.js](./glossary_files/metadata.js)<br>
│   ├── [./glossary_files/perldoc.css](./glossary_files/perldoc.css)<br>
│   ├── [./glossary_files/stickyfill.min.js](./glossary_files/stickyfill.min.js)<br>
│   ├── [./glossary_files/style.css](./glossary_files/style.css)<br>
│   └── [./glossary_files/toc.js](./glossary_files/toc.js)<br>
├── [./glossary.html](./glossary.html)<br>
├── [./index.html](./index.html)<br>
├── [./package-lock.json](./package-lock.json)<br>
├── [./README.md](./README.md)<br>
├── [./scrap.md](./scrap.md)<br>
├── [./tree.md](./tree.md)<br>
├── [./TREE.md](./TREE.md)<br>
├── [./web](./web)<br>
│   ├── [./web/assets](./web/assets)<br>
│   │   ├── [./web/assets/audio](./web/assets/audio)<br>
│   │   │   ├── [./web/assets/audio/join.mp3](./web/assets/audio/join.mp3)<br>
│   │   │   └── [./web/assets/audio/join.ogg](./web/assets/audio/join.ogg)<br>
│   │   ├── [./web/assets/fonts](./web/assets/fonts)<br>
│   │   │   └── [./web/assets/fonts/font-awesome](./web/assets/fonts/font-awesome)<br>
│   │   │   └── [./web/assets/fonts/font-awesome/css](./web/assets/fonts/font-awesome/css)<br>
│   │   │   └── [./web/assets/fonts/font-awesome/css/font-awesome.css](./web/assets/fonts/font-awesome/css/font-awesome.css)<br>
│   │   ├── [./web/assets/images](./web/assets/images)<br>
│   │   │   ├── [./web/assets/images/blank-white.jpg](./web/assets/images/blank-white.jpg)<br>
│   │   │   ├── [./web/assets/images/file](./web/assets/images/file)<br>
│   │   │   │   └── [./web/assets/images/file/default_file_icon.jpg](./web/assets/images/file/default_file_icon.jpg)<br>
│   │   │   ├── [./web/assets/images/mesibo-logo-m.png](./web/assets/images/mesibo-logo-m.png)<br>
│   │   │   ├── [./web/assets/images/mesibo-logo.png](./web/assets/images/mesibo-logo.png)<br>
│   │   │   ├── [./web/assets/images/profile](./web/assets/images/profile)<br>
│   │   │   │   ├── [./web/assets/images/profile/default-group-icon.jpg](./web/assets/images/profile/default-group-icon.jpg)<br>
│   │   │   │   └── [./web/assets/images/profile/default-profile-icon.jpg](./web/assets/images/profile/default-profile-icon.jpg)<br>
│   │   │   └── [./web/assets/images/social.png](./web/assets/images/social.png)<br>
│   │   └── [./web/assets/scripts](./web/assets/scripts)<br>
│   │   └── [./web/assets/scripts/platform.js](./web/assets/scripts/platform.js)<br>
│   ├── [./web/index.html](./web/index.html)<br>
│   ├── [./web/listing.md](./web/listing.md)<br>
│   ├── [./web/login.html](./web/login.html)<br>
│   ├── [./web/mesibo](./web/mesibo)<br>
│   │   ├── [./web/mesibo/app.js](./web/mesibo/app.js)<br>
│   │   ├── [./web/mesibo/calls.js](./web/mesibo/calls.js)<br>
│   │   ├── [./web/mesibo/config.js](./web/mesibo/config.js)<br>
│   │   ├── [./web/mesibo/files.js](./web/mesibo/files.js)<br>
│   │   ├── [./web/mesibo/notify.js](./web/mesibo/notify.js)<br>
│   │   └── [./web/mesibo/utils.js](./web/mesibo/utils.js)<br>
│   ├── [./web/README.md](./web/README.md)<br>
│   ├── [./web/scripts](./web/scripts)<br>
│   │   ├── [./web/scripts/app-utils.js](./web/scripts/app-utils.js)<br>
│   │   ├── [./web/scripts/controller.js](./web/scripts/controller.js)<br>
│   │   └── [./web/scripts/login.js](./web/scripts/login.js)<br>
│   ├── [./web/styles](./web/styles)<br>
│   │   ├── [./web/styles/live.css](./web/styles/live.css)<br>
│   │   ├── [./web/styles/mesibolive.css](./web/styles/mesibolive.css)<br>
│   │   ├── [./web/styles/popup.css](./web/styles/popup.css)<br>
│   │   └── [./web/styles/popupdesign.css](./web/styles/popupdesign.css)<br>
│   └── [./web/vendor](./web/vendor)<br>
│   ├── [./web/vendor/bootstrap.min.css](./web/vendor/bootstrap.min.css)<br>
│   └── [./web/vendor/bootstrap.min.js](./web/vendor/bootstrap.min.js)<br>
└── [./zumzi-video-chat.PNG](./zumzi-video-chat.PNG)<br>

## Messenger

Edit `config.js` and provide the `AUTH TOKEN` & `APP ID`.

You can obtain the `AUTH TOKEN` and `APP ID` for a user from [Mesibo Console](https://mesibo.com/console/).

Refer to the [Get-Started Guide](https://mesibo.com/documentation/tutorials/get-started) to learn about the basics of mesibo.

To open messenger demo launch `messenger.html`

```javascript
const MESIBO_ACCESS_TOKEN = 'xxxxxxx';
const MESIBO_APP_ID = 'xxxx';
const MESIBO_API_URL = 'https://app.mesibo.com/api.php';
```

If you are hosting mesibo-backend on your own server, you need to change the API URL to point to your server.

### Messenger Login

You can synchronize contacts, by using a phone number to login to mesibo messenger-javascript.

To login to the mesibo messenger web app, in the login screen provide the phone number along with country code starting with `+` For Example, If your country code is `91` and your ten-digit phone number is `XXXXXXXXXX`, enter your phone number as `+91XXXXXXXXXX` (with out any spaces or special characters in between)

Use OTP 123456 to login. Mesibo will generate and store `MESIBO_ACCESS_TOKEN` if login is successful.

Please note that you only need to login once as for later sessions your token will be stored in local storage.

If you DO NOT wish to login with your phone number, make sure you configure a valid `MESIBO_ACCESS_TOKEN` in `config.js` and set `isLoginEnabled = false`

### Synchronizing contacts on Messenger

To synchronize contacts set `isContactSync = true`

For the best experience using the messenger app, make sure you have some contacts who are using Mesibo Messenger. These contacts will be displayed as a list of available users to whom you can send messages or make calls. Optionally, you can also manually provide a list of phone numbers of contacts who are using mesibo in `MESIBO_LOCAL_CONTACTS` or by clicking on the `Add Contact` button.

You can provide a list of local contacts that will be loaded as a list of available users. Set local contacts as follows in `config.js`

    var MESIBO_LOCAL_CONTACTS =[

    {
            "address" : "18885551001",
            "groupid" : 0,
            "picture" : "images/profile/default-profile-icon.jpg",
            "name"    : "MesiboTest",
            "status": "Let's Chat.."
    },

    {
            "groupid" : 104661,
            "picture" : "images/profile/default-group-icon.jpg",
            "name"    : "Mesibo Group",
            "members" : "1:123,456,789"             //Members list. Add 1: to mark as admin
    },

    ]

## Popup

To launch popup demo you can configure the following for setting the displayed user avatar and destination user(to which all messages will be sent) in `config.js` and launch `popup.html`

```javascript
const POPUP_DISPLAY_NAME = 'xxxx';
const POPUP_DISPLAY_PICTURE = 'images/profile/default-profile-icon.jpg';
const POPUP_DESTINATION_USER = 'xxxx';
```

## FAQ & Troubleshooting

### Getting `AUTHFAIL` with getcontacts API

This means the token you have provided in `MESIBO_ACCESS_TOKEN` is not generated or validated with your phone number which is required for synchronizing contacts.

To generate a token by validating your phone number, make sure you have set `isLoginEnabled = true`. A login screen will then appear during app start, where you can enter your phone number(Example +91XXXXXXXXXX), get an OTP, and log in.

If you do not wish to synchronize contacts, set `isContactSync = false` and provide a list of local contacts in `MESIBO_LOCAL_CONTACTS`.

### I do not wish to use phone login, what should I do?

Set `isLoginEnabled = false` and make sure that you provide a valid `MESIBO_ACCESS_TOKEN`

### I do not want to synchronize with my phone contacts, how do I configure that?

If you do not wish to synchronize contacts, set `isContactSync = false` and provide a list of local contacts in `MESIBO_LOCAL_CONTACTS`.

### Do I need to log in with my phone number every time I load the app?

No the first time you log in with your phone number with a valid OTP the token will be stored in localStorage. In future loading of the app, the token will be loaded from local storage. Or if you have provided a valid `MESIBO_ACCESS_TOKEN` in `config.js` that will be loaded.

### Getting $scope.mesibo.X is not a function

Ensure that you perform a hard reload so that you have the latest Mesibo Javascript API

## Install Mesibo Javascript SDK

The easiest way to install Mesibo Javascript SDK is to include following in `<HEAD>` section of your HTML file:

    <script type="text/javascript" src="https://api.mesibo.com/mesibo.js"></script>

You can also use `async` and `defer` attributes inside `script` tag if requires.

Alternatively, you may also use DOM method to load the mesibo JS on demand when it is not possible to use the script tag.

    const script = document.createElement("script");
    script.src = "https://api.mesibo.com/mesibo.js";
    document.body.appendChild(script);

> You must use a secure website (https) to use mesibo javascript. It may NOT work from `http://` or `file://` sites due to browser security restrictions.

## Notes when using it for Calls and Conferencing

Due to the browser security model, camera and microphone access require the following:

-   You MUST use a secure URL (`https://`). The `http://` or `file://` URLs will NOT work.
-   You MUST also use a valid certificate with recognized authority, the self-signed certificate will NOT work.

The browser will not grant the camera and microphone permissions unless your app meets the above requirements. If permissions are not granted, calls and conferencing will not work.

These restrictions are by the browsers and NOT by the mesibo. Refer Security section in the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#security) for more information.

### That’s All!

You can now begin developing features with mesibo.

[javascript chat sdk](https://mesibo.com/documentation/glossary/?term=javascript%20chat%20sdk), [messaging sdk for javascript](https://mesibo.com/documentation/glossary/?term=messaging%20sdk%20for%20javascript), [javascript sdk for chat](https://mesibo.com/documentation/glossary/?term=javascript%20sdk%20for%20chat), [install sdk through javascript](https://mesibo.com/documentation/glossary/?term=install%20sdk%20through%20javascript)
