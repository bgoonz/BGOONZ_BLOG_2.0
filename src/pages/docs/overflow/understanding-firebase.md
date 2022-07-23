---
title: Firebase
weight: 0
excerpt: Firebasics
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---


# Understand Firebase projects

**Note:** If you're using the [Firebase Management REST API](https://firebase.google.com/docs/projects/api/reference/rest?authuser=0) to programmatically create a Firebase project, you must first [create a Google Cloud project](https://cloud.google.com/resource-manager/reference/rest/v1/projects?authuser=0), then [add Firebase services](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects/addFirebase?authuser=0) to the existing project.**Note:** The [project number](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-number) and the [project ID](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-id) are the truly _unique identifiers_ for a project across all of Firebase and Google Cloud.**After Firebase provisions resources for a Firebase project, you cannot change its project ID.** To use a specific identifier for Firebase resources, you must edit the project ID during the initial creation of the project.**Caution:** We do not recommend manually modifying an app's Firebase config file or object. If you initialize an app with invalid or missing values for any of these required "Firebase options", then your end users may experience serious issues.**Note:** For each Android app, if you provide a SHA-1 key for the app, you need to provide a package name and SHA-1 key combination that is globally unique across all of Google Cloud.

This page offers brief overviews of several important concepts about Firebase projects. When available, follow the links to find more detailed information about features, services, and even other platforms. At the bottom of this page, find a listing of [general best practices](https://firebase.google.com/docs/projects/learn-more?authuser=0#best-practices) for Firebase projects.

## Relationship between Firebase projects, apps, and products

A Firebase project is the top-level entity for Firebase. In a project, you create Firebase apps by registering your iOS, Android, or web apps. After you register your apps with Firebase, you can add the Firebase SDKs for any number of [Firebase products](https://firebase.google.com/products/?authuser=0), like Analytics, Cloud Firestore, Performance Monitoring, or Remote Config.

Learn more detailed information about this process in the Getting Started guides ([iOS](https://firebase.google.com/docs/ios/setup?authuser=0) | [Android](https://firebase.google.com/docs/android/setup?authuser=0) | [web](https://firebase.google.com/docs/web/setup?authuser=0) | [Unity](https://firebase.google.com/docs/unity/setup?authuser=0) | [C++](https://firebase.google.com/docs/cpp/setup?authuser=0)).

## Relationship between Firebase projects and Google Cloud

When you create a new Firebase project in the Firebase console, you're actually creating a [Google Cloud project](https://cloud.google.com/docs/overview/?authuser=0#projects) behind the scenes. You can think of a Google Cloud project as a virtual container for data, code, configuration, and services. **A Firebase project is a Google Cloud project that has additional Firebase-specific configurations and services.** You can even create a Google Cloud project first, then add Firebase to the project later.

Since a Firebase project **_is_** a Google Cloud project:

- Projects that appear in the [Firebase console](https://console.firebase.google.com/?authuser=0) also appear in the [Google Cloud Console](https://cloud.google.com/docs/overview/?authuser=0#google-cloud-console) and [Google APIs console](https://console.cloud.google.com/apis/?authuser=0).
- 
- [Billing](https://firebase.google.com/pricing/?authuser=0) and [permissions](https://firebase.google.com/docs/projects/iam/overview?authuser=0) for projects are shared across Firebase and Google Cloud.
- 
- Unique identifiers for a project (like the [project number](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-number) and the [project ID](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-id)) are shared across Firebase and Google Cloud.

- You can use products and APIs from both Firebase and Google Cloud in a project.

- Deleting a project deletes it across Firebase and Google Cloud.

## Setting up a Firebase project and registering apps

You can set up a Firebase project and register apps in the [Firebase console](https://console.firebase.google.com/?authuser=0) (or, for advanced use cases, via the [Firebase Management REST API](https://firebase.google.com/docs/projects/api/reference/rest?authuser=0) or the [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0#management-commands)). When you set up a project and register apps, you need to make some organizational decisions and add Firebase-specific configuration information to your local projects.

Make sure to review some [general project-level best practices](https://firebase.google.com/docs/projects/learn-more?authuser=0#best-practices) (at the bottom of this page) before setting up a project and registering apps.

### The project name

When you create a project, you provide a **project name**. This identifier is the _internal-only name_ for a project in the [Firebase console](https://firebase.google.com/docs/projects/learn-more?authuser=0#manage-console), the [Google Cloud Console](https://cloud.google.com/docs/overview/?authuser=0#google-cloud-console), and the [Firebase CLI](https://firebase.google.com/docs/projects/learn-more?authuser=0#manage-cli). The project name is not exposed in any publicly visible Firebase or Google Cloud product, service, or resource; it simply serves to help you more easily distinguish among multiple projects.

You can edit a project name at any time in the settings [**Project settings**](https://console.firebase.google.com/project/_/settings/general/?authuser=0) of the Firebase console. The project name is displayed in the top pane.

### The project number

A Firebase project (and its [associated Google Cloud project](https://firebase.google.com/docs/projects/learn-more?authuser=0#firebase-cloud-relationship)) has a **project number**. This is the Google-assigned globally unique canonical identifier for the project. Use this identifier when configuring integrations and/or making API calls to Firebase, Google, or third-party services.

#### API calls and the project number

For many API calls, you need to include a unique identifier for a project. Although many APIs accept the [project ID](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-id), it's recommended that you use the **project number** for making API calls to Firebase, Google, or third-party services.

Learn more about using project identifiers, especially the project number, in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).

#### Find the project number

- Firebase console: Click settings [**Project settings**](https://console.firebase.google.com/project/_/settings/general/?authuser=0). The project number is displayed in the top pane.
- 
- Firebase CLI: Run firebase projects:list. The project number is displayed along with all the Firebase projects associated with your account.

- Firebase Management REST API: Call [projects.list](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects/list?authuser=0). The response body contains the project number in the [FirebaseProject](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects?authuser=0#FirebaseProject) object.

### The project ID

A Firebase project (and its [associated Google Cloud project](https://firebase.google.com/docs/projects/learn-more?authuser=0#firebase-cloud-relationship)) has a **project ID**. This is a user-defined unique identifier for the project across all of Firebase and Google Cloud. When you create a Firebase project, Firebase automatically assigns a unique ID to the project, but you can edit it during project setup. This identifier should generally be treated as a convenience alias to reference the project.

If you delete a project, the project ID is also deleted and can never be used again by any other project.

#### Firebase resources and the project ID

The project ID displays in publicly visible Firebase resources, for example:

- Default Hosting subdomain — **PROJECT_ID**.web.app and **PROJECT_ID**.firebaseapp.com
- 
- Default Realtime Database URL — **PROJECT_ID**-default-rtdb.firebaseio.com or **PROJECT_ID**-default-rtdb.**REGION_CODE**.firebasedatabase.app

- Default Cloud Storage bucket name — **PROJECT_ID**.appspot.com

For all of the aforementioned resources, you can create non-default instances. The publicly visible names of non-defaults are fully-customizable. You can [connect custom domains](https://firebase.google.com/docs/hosting/custom-domain?authuser=0) to a Firebase-hosted site, [shard the Realtime Database](https://firebase.google.com/docs/database/usage/sharding?authuser=0), and [create multiple Cloud Storage buckets](https://firebase.google.com/docs/storage?authuser=0) (visit the platform-specific Get Started page).

#### The Firebase CLI and the project ID

For some use cases, you might have multiple Firebase projects associated with the same local app directory. In these situations, when you use the [Firebase CLI](https://firebase.google.com/docs/projects/learn-more?authuser=0#manage-cli), you need to pass the --project flag with the firebase commands to communicate which Firebase project you want to interact with.

You can also set up a [project alias](https://firebase.google.com/docs/cli?authuser=0#project_aliases) for each Firebase project so that you don't have to remember project IDs.

#### API calls and the project ID

For many API calls, you need to include a unique identifier for a project. Although many APIs accept the project ID, it's recommended that you use the [**project number**](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-number) for making API calls to Firebase, Google, or third-party services.

Learn more about using project identifiers, especially the project number, in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).

#### Find the project ID

- Firebase console: Click settings [**Project settings**](https://console.firebase.google.com/project/_/settings/general/?authuser=0). The project ID is displayed in the top pane.
- 
- Firebase CLI: Run firebase projects:list. The project ID is displayed along with all the Firebase projects associated with your account.

- Firebase Management REST API: Call [projects.list](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects/list?authuser=0). The response body contains the project ID in the [FirebaseProject](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects?authuser=0#FirebaseProject) object.

### Firebase config files and objects

When you register an app with a Firebase project, the Firebase console provides a Firebase configuration file (iOS/Android apps) or a configuration object (web apps) that you add directly to your local app directory.

- For iOS apps, you add a GoogleService-Info.plist configuration file.
- 
- For Android apps, you add a google-services.json configuration file.

- For web apps, you add a Firebase configuration object.

At any time, you can [obtain an app's Firebase config file or object](https://support.google.com/firebase/answer/7015592?authuser=0).

A Firebase config file or object associates an app with a specific Firebase project and its resources (databases, storage buckets, etc.). The configuration includes "Firebase options", which are parameters required by Firebase and Google services to communicate with Firebase server APIs and to associate client data with the Firebase project and Firebase app. Here are the required, minimum "Firebase options":

- [**API key**](https://cloud.google.com/docs/authentication/api-keys?authuser=0): a simple encrypted string used when calling certain APIs that don't need to access private user data (example value: AIzaSyDOCAbC123dEf456GhI789jKl012-MnO)
- 
- [**Project ID**](https://firebase.google.com/docs/projects/learn-more?authuser=0#project-id): a user-defined unique identifier for the project across all of Firebase and Google Cloud. This identifier may appear in URLs or names for some Firebase resources, but it should generally be treated as a convenience alias to reference the project. (example value: myapp-project-123)

- **Application ID ("AppID")**: the unique identifier for the Firebase app across all of Firebase with a platform-specific format:

    - Firebase iOS apps: GOOGLE_APP_ID (example value: 1:1234567890:ios:321abc456def7890)
        This is _not_ an Apple bundle ID.

    - Firebase Android apps: mobilesdk_app_id (example value: 1:1234567890:android:321abc456def7890)
        This is _not_ an Android package name or Android application ID.

    - Firebase Web apps: appId (example value: 1:65211879909:web:3ae38ef1cdcb2e01fe5f0c)

The content of the Firebase config file or object is considered public, including the app's platform-specific ID (iOS bundle ID or Android package name) and the Firebase project-specific values, like the API Key, project ID, Realtime Database URL, and Cloud Storage bucket name. Given this, **use Firebase Security Rules** to protect your data and files in [Realtime Database](https://firebase.google.com/docs/database/security?authuser=0), [Cloud Firestore](https://firebase.google.com/docs/firestore/security/get-started?authuser=0), and [Cloud Storage](https://firebase.google.com/docs/storage/security?authuser=0).

For open source projects, we generally do not recommend including the app's Firebase config file or object in source control because, in most cases, your users should create their own Firebase projects and point their apps to their own Firebase resources (via their own Firebase config file or object).

## Managing a Firebase project

Make sure to review the [general project-level best practices](https://firebase.google.com/docs/projects/learn-more?authuser=0#best-practices) (at the bottom of this page) for considerations that might affect how you manage a Firebase project.

### Tools to manage a project

#### Firebase console

The [Firebase console](https://console.firebase.google.com/?authuser=0) offers the richest environment for managing Firebase products, apps, and project-level settings.

![alt-text](https://firebase.google.com/docs/projects/images/firebase_console_overview.png?authuser=0)

The left-side panel of the console lists the Firebase products, organized by top-level categories. At the top of the left-side panel, access a project's settings by clicking settings. A project's settings include [integrations](https://firebase.google.com/integrations?authuser=0), [access permissions](https://firebase.google.com/docs/projects/iam/overview?authuser=0), and [billing](https://firebase.google.com/pricing?authuser=0).

The middle of the console displays buttons that launch setup workflows to register various types of apps. After you start using Firebase, the main area of the console changes into a dashboard that displays stats on the products you use.

#### Firebase CLI (a command line tool)

Firebase also offers the [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0) for configuring and managing specific Firebase products, like Firebase Hosting and Cloud Functions for Firebase.

After installing the CLI, you have access to the [global firebase command](https://firebase.google.com/docs/cli?authuser=0#command_reference). Use the CLI to [link your local app directory to a Firebase project](https://firebase.google.com/docs/cli?authuser=0#initialize_a_firebase_project), then [deploy](https://firebase.google.com/docs/cli?authuser=0#deployment) new versions of Firebase-hosted content or updates to functions.

#### Firebase Management REST API

Using the [Firebase Management REST API](https://firebase.google.com/docs/projects/api/reference/rest?authuser=0), you can programmatically manage a Firebase project. For example, you can programmatically register an app with a project or list the apps that are already registered ([iOS](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps?authuser=0#methods) | [Android](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps?authuser=0#methods) | [web](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.webApps?authuser=0#methods)).

## General best practices

### Adding apps to a project

**Ensure that all apps within a project are platform variants of the same application** from an end-user perspective. It's advisable to register the iOS, Android, and web versions of the same app or game with the same Firebase project. All the apps in a project generally share the same Firebase resources (database, storage buckets, etc.).

If you have **_multiple build variants_** with different iOS bundle IDs or Android package names defined, you can register each variant with a separate Firebase project. However, if you have variants that share the _same_ Firebase resources, register them with the _same_ Firebase project.

Here are some general limits for Firebase projects, apps, and sites:

- **Number of projects per account**

    - Spark pricing plan — Project-creation quota is limited to a lower count of projects (usually around 5-10).

    - Blaze pricing plan — Project-creation quota per account increases substantially as long as the associated Cloud Billing account is in good standing.

    The limit on project-creation quota is rarely a concern for most developers, but if needed, you can [request an increase in project quota](https://support.google.com/cloud/answer/6330231?authuser=0).

    Be aware that the complete deletion of a project requires 30 days and counts toward project quota until the project is fully deleted.

- **Number of apps per project**

    Firebase restricts the total number of Firebase Apps within a Firebase project to 30.

    You should ensure that all Firebase Apps within a single Firebase project are platform variants of the same application from an end-user perspective. Read more about best practices for [multi-tenancy](https://firebase.google.com/docs/projects/learn-more?authuser=0#multi-tenancy) below.

    Learn more about the [limit on apps per project](https://firebase.google.com/support/faq?authuser=0#apps-per-project) in the FAQ.

- **Number of Hosting sites per project**

    The [Firebase Hosting multisite feature](https://firebase.google.com/docs/hosting/multisites?authuser=0) supports a maximum of 36 sites per project.

### Multi-tenancy

Connecting several different logically independent apps and/or web sites to a single Firebase project (often called "multi-tenancy") is not recommended. Multi-tenancy can lead to serious configuration and data privacy concerns problems, including unintended issues with analytics aggregation, shared authentication, overly-complex database structures, and difficulties with security rules.

Generally, **if a set of apps don't share the same data and configurations, strongly consider registering each app with a different Firebase project.**

For example, if you develop a white label application, each independently labelled app should have its own Firebase project, but the iOS and Android versions of that label can be in the same project. Each independently labeled app shouldn't (for privacy reasons) share data with the others.

## Launching your app

- Set up [budget alerts](https://firebase.google.com/docs/projects/billing/avoid-surprise-bills?authuser=0#set-up-budget-alert-emails) for your project in the Google Cloud Console.
- 
- Monitor the [_Usage and billing_ dashboard](https://console.firebase.google.com/project/_/usage?authuser=0) in the Firebase console to get an overall picture of your project's usage across multiple Firebase services.

- Review the [Firebase launch checklist](https://firebase.google.com/support/guides/launch-checklist?authuser=0).
