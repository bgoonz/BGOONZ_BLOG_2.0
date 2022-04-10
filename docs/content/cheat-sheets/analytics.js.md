subtitle

2022-01-03

------------------------------------------------------------------------

title: Google Analytics’s analytics.js category: Analytics

intro: | Google Analytics’s analytics.js is deprecated.

------------------------------------------------------------------------

### Page view

    ga('create', 'UA-XXXX-Y', 'auto');
    ga('create', 'UA-XXXX-Y', { userId: 'USER_ID' });

    ga('send', 'pageview');
    ga('send', 'pageview', { dimension15: 'My custom dimension' });

### Events

    ga('send', 'event', 'button', 'click', { color: 'red' });

    ga('send', 'event', 'button', 'click', 'nav buttons', 4);
    /*                  ^category  ^action  ^label          ^value */

### Exceptions

    ga('send', 'exception', {
        exDescription: 'DatabaseError',
        exFatal: false,
        appName: 'myapp',
        appVersion: '0.1.2'
    });
