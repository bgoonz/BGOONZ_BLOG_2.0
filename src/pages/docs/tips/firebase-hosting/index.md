---
title: Firebase Hosting
template: docs
excerpt: Firebase Hosting integrates with serverless computing options,
    including Cloud Functions for Firebase and Cloud Ru
---

<!--StartFragment-->

# Serve dynamic content and host microservices using Firebase Hosting

\[ ]

Firebase Hosting integrates with serverless computing options, including Cloud Functions for Firebase and Cloud Run. Using Firebase Hosting with these options, you can host microservices by directing HTTPS requests to trigger your functions and containerized apps to run in a managed, secure environment.

**[Cloud Functions for Firebase](https://firebase.google.com/docs/hosting/functions)**: You write and deploy a function, which is backend code that responds to a specific trigger. Then, using Firebase Hosting, you can direct HTTPS requests to trigger your function to run.

**[Cloud Run](https://firebase.google.com/docs/hosting/cloud-run)**: You write and deploy an application packaged in a container image. Then, using Firebase Hosting, you can direct HTTPS requests to trigger your containerized app to run.

## Use cases

How can you use serverless computing options with Firebase Hosting?

-   **Serve dynamic content** — In addition to serving static content on your Hosting site, you can serve dynamically generated responses from a function or containerized app that is performing server-side logic.

    For example, you can point a URL pattern (like `/blog/<blog-post-id>`) to a function that uses the URL's blog post ID parameter to retrieve content dynamically from your database.

-   **Build REST APIs** — You can create a microservice API using functions.

    For instance, functions can handle the sign-in functionality for your website. While your website is hosted at `/`, any request to `/api` is redirected to your microservice API. For an example, check out [this open-source sample](https://github.com/firebase/functions-samples/tree/Node-8/authenticated-json-api).

-   **Cache dynamic content** — You can [configure caching](https://firebase.google.com/docs/hosting/manage-cache) of your dynamic content on a global CDN.

    For example, if a function generates new content only periodically, you can speed up your app by caching the generated content for at least a short period of time. You can also potentially reduce execution costs because the content is served from the CDN rather than via a triggered function or containerized app.

-   **Prerender your single-page apps** — You can improve SEO and optimize sharing across various social networks by creating dynamic `meta` tags. To learn more, watch this [video](https://www.youtube.com/watch?v=82tZAPMHfT4) or check out [this open-source sample](https://github.com/firebase/functions-samples/tree/Node-8/isomorphic-react-app).

## Choosing a serverless option

While both **[Cloud Functions for Firebase](https://firebase.google.com/docs/hosting/functions)** and **[Cloud Run](https://firebase.google.com/docs/hosting/cloud-run)** integrate with Firebase Hosting and offer a fully managed, autoscaling, and secure serverless environment, the two options can be leveraged for different use cases and desired level of customized configuration.

The following table describes some basic considerations for using Cloud Functions for Firebase versus Cloud Run. For a full listing of quotas, limits, and metrics, refer to each product's detailed documentation ([Cloud Functions for Firebase](https://firebase.google.com/docs/functions/quotas) or [Cloud Run](https://cloud.google.com/run/quotas)).

| **Consideration**                   | **Cloud Functions for Firebase**                                                                                                                          | **Cloud Run**                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Setup**                           | The Firebase CLI bundles multiple tasks into single commands, from initializing to building and deploying.                                                | Containers offer more customizable options, so setup, build, and deployment tasks involve discrete steps.                             |
| **Runtime environment**             | Requires Node.js, but you can specify [which version](https://firebase.google.com/docs/functions/manage-functions#set_runtime_options) of Node.js to use. | When [building your container](https://firebase.google.com/docs/hosting/cloud-run#containerize), you specify the runtime environment. |
| **Language and frameworks support** |                                                                                                                                                           |                                                                                                                                       |
| **Timeout for Hosting request**     | 60 seconds (see Note below)                                                                                                                               | 60 seconds (see Note below)                                                                                                           |
| **Concurrency**                     | 1 request per function instance (no concurrency per instance)                                                                                             | Up to 1,000 concurrent requests per container instance                                                                                |
| **Billing**                         | [Cloud Functions usage](https://firebase.google.com/pricing)                                                                                              | [Cloud Run usage](https://cloud.google.com/run/pricing) + [Container Registry storage](https://cloud.google.com/container-registry/)  |

<!--EndFragment-->
