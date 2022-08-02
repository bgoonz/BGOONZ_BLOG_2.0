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

title: Analytics libraries

category: Analytics

---

### Mixpanel

```js
mixpanel.identify('284');
mixpanel.people.set({ $email: 'hi@gmail.com' });
mixpanel.register({ age: 28, gender: 'male' }); /* set common properties */
```

[mixpanel](./mixpanel)
{: .-crosslink}

### Google Analytics's analytics.js

```js
ga('create', 'UA-XXXX-Y', 'auto');
ga('create', 'UA-XXXX-Y', { userId: 'USER_ID' });
```

```js
ga('send', 'pageview');
ga('send', 'pageview', { dimension15: 'My custom dimension' });
```

[analytics.js](./analytics.js)
{: .-crosslink}
