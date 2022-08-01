---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

## title: Google Analytics

### Pageview

    // Analytics.js
    ga('create', 'UA-XXXX-Y', 'auto');
    ga('send', 'pageview');

### Track events

    // ga.js
    // [..., category, action, label, value (int), noninteraction (bool)]
    _gaq.push(['_trackEvent', 'Videos', 'Play', 'Birthday video', true])
    _gaq.push(['_trackEvent', 'Projects', 'Donate', 'Project name'])
    _gaq.push(['_trackEvent', 'Accounts', 'Login'])

    // Analytics.js
    //       ,        ,  category,  action,  label,         value (int)
    ga('send', 'event', 'button',   'click', 'nav buttons', 4);

### Variables

    // [..., index, name, value, scope (optional)]
    _gaq.push(['_setCustomVar', 1, 'Logged in', 'Yes', 2]);

    // Scope = 1 (visitor), 2 (session), 3 (page, default)

https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables
https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide
