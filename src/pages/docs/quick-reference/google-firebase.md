---
title: Firebase (Firebasics)
weight: 0
excerpt: "Add Firebase to your JavaScript project\_Note"
seo:
    title: "Add Firebase to your JavaScript project\_Note:"
    description: "Add Firebase to your JavaScript project\_Note:"
    robots: []
    extra: []
template: docs
---

Add Firebase to your JavaScript project **Note:** Upgrading from the version 8 Firebase SDK? Check out our [upgrade guide](https://firebase.google.com/docs/web/modular-upgrade).[####  **Create a Firebase project** ]()**Note:** Using the v9 SDK is strongly recommended, especially for production apps. If you need support for other SDK management options, like **window.firebase**, see [Upgrade from version 8 to the modular Web SDK](https://firebase.google.com/docs/web/modular-upgrade#window-compat).**Note:** You can skip this step if you are using a JavaScript framework CLI tool like the [Angular CLI](https://angular.io/cli), [Next.js](https://nextjs.org/), [Vue CLI](https://cli.vuejs.org/), or [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). Check out [our guide on module bundling](https://firebase.google.com/docs/web/module-bundling) for more information.

Follow this guide to use the Firebase JavaScript SDK in your web app or as a client for end-user access, for example, in a Node.js desktop or IoT application.

## **Step 1**: Create a Firebase project and register your app

Before you can add Firebase to your JavaScript app, you need to create a Firebase project and register your app with that project. When you register your app with Firebase, you'll get a Firebase configuration object that you'll use to connect your app with your Firebase project resources.

Visit [Understand Firebase Projects](https://firebase.google.com/docs/projects/learn-more) to learn more about Firebase projects and best practices for adding apps to projects.

If you don't already have a JavaScript project and just want to try out a Firebase product, you can download one of our [quickstart samples](https://firebase.google.com/docs/samples).

## **Step 2**: Install the SDK and initialize Firebase

This page describes setup instructions for version 9 of the Firebase JS SDK, which uses a [JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) format.

This workflow uses npm and requires module bundlers or JavaScript framework tooling because the v9 SDK is optimized to work with [module bundlers](https://firebase.google.com/docs/web/module-bundling) to eliminate unused code (tree-shaking) and decrease SDK size.

1.  Install Firebase using npm:

2.  Initialize Firebase in your app and create a Firebase App object:

    A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services.

    Do you use ESM and want to use browser modules? Replace all your

    **import**

    lines to use the following pattern:

    **import { } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-SERVICE.js'**

    (where

    **SERVICE**

    is an SDK name such as

    **firebase-firestore**

    ).

    Using browser modules is a quick way to get started, but we recommend using a module bundler for production.

## **Step 3**: Access Firebase in your app

Firebase services (like Cloud Firestore, Authentication, Realtime Database, Remote Config, and more) are available to import within individual sub-packages.

The example below shows how you could use the Cloud Firestore Lite SDK to retrieve a list of data.

## **Step 4**: Use a module bundler (webpack/Rollup) for size reduction

The Firebase Web SDK is designed to work with module bundlers to remove any unused code (tree-shaking). We strongly recommend using this approach for production apps. Tools such as the [Angular CLI](https://angular.io/cli), [Next.js](https://nextjs.org/), [Vue CLI](https://cli.vuejs.org/), or [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) automatically handle module bundling for libraries installed through npm and imported into your codebase.

See our guide [Using module bundlers with Firebase](https://firebase.google.com/docs/web/module-bundling) for more information.
