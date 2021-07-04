# Unplatform | Guide to Jamstack personalization

> Guide to personalization using Jamstack with optimal web vitals for (headless) e-commerce

Personalization using Jamstack means combining personalization with good performance. Good performance means having a Google Lighthouse score between 90 and 100 (🚀) for your website.

Personalization means displaying user specific content. Think of displaying summer apparel to people located in the South while still displaying spring apparel to people in the colder North.

Traditional personalization services perform personalization at the web browser. This means that personalization is applied after the page and personalization scripts have been loaded. This is fine for personalization scenarios where the personalized content is not visible to the user at first. For example the personalized content is below the fold of the page or is presented in the form of a pop-up promotion banner.

With the traditional approach personalizing content happens after the page is loaded and the scripts are executed. This proces takes at least several seconds (and typically 5-10 seconds or more!). Result is that the user will see the content being changed, e.g. from showing generic content to user specific content. This type of change is called: layout shift.

Google expresses this bad user experience by measuring the total amount of layout shift by the CLS Core Web Vitals metric.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/_next/image?url=%2Farticles%2Fjamstack-personalization%2Fweb-vitals.png&w=3840&q=75)

The exact definition of CLS and how its measured you find [here](https://web.dev/cls/). In practice it means that content in the viewport should not be manipulated by scripts and should thus be present in the page content received from the server.

Many integrated DXP solutions offer server-side personalization which solves the CLS challenge. But integrated DXP solutions lack the ability of a CDN that delivers the (personalized) content. Not using a CDN means slower performance and poorer scores for the LCP and FID Core Web Vitals.

> The challenge is showing personalized content that is immediately visible to the user with a good performance.

Having the personalized content ready as fast as possible from a CDN is where Jamstack technology can help. In the next sections we discuss two Jamstack native personlization services: Outsmartly and Uniform Optimize.

Outsmartly ([https://www.outsmartly.com](https://www.outsmartly.com/))
----------------------------------------------------------------------

Branded as "Revenue as a service" Outsmartly gives you full flexibility in your personalization needs. Outsmartly offers personalization at the CDN edge for ReactJS components. It basically allows you to replace components with a personalized variant by criteria that you define yourself using Javascript. For example, use the geo-location of an incoming request to decide at the CDN edge what content or component to show.

From a technical viewpoint enabling personalization is achieved by by Edge Slice Re-rendering (ESR) React components at the CDN edge. This sounds, and is, very technical but means that parts of your page can be replaced by a personalized variant at the CDN. For more information and a technical deep-dive on ESR see [this](https://www.youtube.com/watch?v=ylRpAG4OzxY)) introduction by Jay Phelps.

Measuring the effectiveness of your personalizations is achieved by a back-end integration using Google Big Query dashboards. This can also be fully configured to your needs and for example allows you to create your own queries and analytics dashboards.

By using a CDN edge network Outsmartly not only fulfills your personalization needs but also improves your overall site speed at the same time.

> Outsmartly gives you very flexible personalization options that can be fully controlled (i.e. programmed) by you.
> 
> ![Outsmartly](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/_next/image?url=%2Farticles%2Fjamstack-personalization%2Foutsmartly-logo.svg&w=640&q=75 "Outsmartly")

Uniform Optimize ([https://www.uniform.dev](https://www.uniform.dev/))
----------------------------------------------------------------------

Uniform Optimize offers Jamstack focused personalization with a backend UI that allows you to specify intents.

Visitors to your site have an _intent_, something they want to accomplish. A reason for their visit. Personalization aims to make it as easy as possible for the visitor to accomplish their intent. For example, an existing customer who is looking to buy an additional product.

Once you have defined an intent, signals enable you to trigger it. Examples of signals are behavior, cookie, page view and events. To bind an intent to personalized content, Uniform offers plugins for Headless CMS-es, for example for Contentful and Sanity.

From a technical viewpoint the entire website gets statically rendered at build time and all variants, personalization configuration etc. are delivered as part of the static site. Depending on the use case personalization and testing can either in the client browser or at the CDN edge\*. The decision on what variant to show is made based on the configured signals. When personalization happens at the browser client it requires Javascript to be enabled and variants will only be displayed after the scripts are evaluated. As discussed earlier, selecting the variant at the client as an impact on your Core Web Vitals score. Personalization at the CDN edge solves this problem.

Uniform integrates with external analytic solutions like Google Analytics. Uniform offers 2-way integration to store personalization statistics in Google Analytics and display efficiency reporting in the Uniform backend UI.

By its intent setup Uniform offers a well-defined framework for you personalization needs that integrates with several Headless CMS-es. Besides Uniform has SDKs for various front-end frameworks, amongst whhich are ReactJS and VueJS.

> Uniform offers a nice back-end UI combined with good Headless CMS integration possibilities.  
> 
> ![Uniform](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/_next/image?url=%2Farticles%2Fjamstack-personalization%2Funiform-logo.svg&w=384&q=75 "Uniform")

(\*) CDN edge personalization is available in private preview

What to choose?
---------------

There are several aspects of Jamstack personalization services: (1) features, (2) ease of use, (3) flexibility, and (4) performance.

Feature wise Uniform Optimize offers a lot of out-of-the-box functionality with their back-end UI and Headless CMS plug-ins. These out-of-the-box integration features mean that it might be less effort to get started with Uniform Optimize. If Uniform Optimize is easier to use in the long run depends on your use-case as Outsmartly can be fully tailored to your needs. A strong point of Outsmartly is its flexibility, for example its geo-location personalization capabilities and fully customizable analytics.

Looking at raw performance, Outsmartly with its CDN edge capabilities will give you a great tool to get to a 100 Google Lighthouse score. Once Uniform's Edge offering is out of preview getting a good Lighthouse score should be possible with Uniform as well. Until that moment Outsmartly has a performance advantage. As speed improvement result in better conversion rates this could be a key feature for your e-commerce website.

Above Jamstack personalization services give you great possibilities to perform in-view personalization while not comprosing on your Web Vitals score.

Is Jamstack personalization worth it? Yes, definitely if you solely look at the better Core Web Vitals score that you get out of it. Maybe not, if you have mainly personalization below the fold of your page and/or if you rely on deep domain knowledge of an existing service and thus require reasonable amount development effort to migrate.

We discussed two Jamstack native services, but there are of course many other personalization services out there. Almost all of these use a traditional approach by performing personalization at user time in the browser. Depending on your use-case this might be or not be a good solution for you.

One example of a highly specialized more traditional personalization service is [Frosmo](https://frosmo.com/). Frosmo focuses on e-commerce and has deep domain knowledge and integration possibilities in this area. Frosmo, for example, integrates based on your Google Enhanced Ecommerce analytics, and will therefore be easy to integrate if you already use this. Using Frosmo for personalizations below the page fold, e.g. for showing product recommendations on a product page, is a good option. For above the fold personalizations you will need assess the performance impact for your use-case.

To conclude, the best personalization for your needs depends on your use-case. Do you have any further questions or need further advice? Feel free to contact us by [contact form](https://www.unplatform.io/#contact) or mail: [info@unplatform.io](mailto://info@unplatform.io).


[Source](https://unplatform.io/stories/guide-to-jamstack-personalization)