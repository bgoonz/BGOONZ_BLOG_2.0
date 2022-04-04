subtitle

2022-01-03

------------------------------------------------------------------------

title: Analytics libraries

category: Analytics

------------------------------------------------------------------------

### Mixpanel

    mixpanel.identify('284');
    mixpanel.people.set({ $email: 'hi@gmail.com' });
    mixpanel.register({ age: 28, gender: 'male' }); /* set common properties */

[mixpanel](./mixpanel) {: .-crosslink}

### Google Analytics’s analytics.js

    ga('create', 'UA-XXXX-Y', 'auto');
    ga('create', 'UA-XXXX-Y', { userId: 'USER_ID' });

    ga('send', 'pageview');
    ga('send', 'pageview', { dimension15: 'My custom dimension' });

[analytics.js](./analytics.js) {: .-crosslink}
