---
title: npx-create-react-app
weight: 1
seo:
  title: npx-create-react-app
  description: This is the npx-create-react-app page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: npx-create-react-app
      keyName: property
    - name: 'og:description'
      value: This is the npx-create-react-app page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: npx-create-react-app
    - name: 'twitter:description'
      value: This is the npx-create-react-app page
template: docs
---

---
description: takes soooo much time!
---

# Generating React Project

takes soooo much time!

![](.gitbook/assets/image%20%2812%29.png)



```text
npx create-react-app my-app
cd my-app
npm start
```

![](.gitbook/assets/image%20%2818%29.png)

![](.gitbook/assets/image%20%2814%29.png)

![](.gitbook/assets/image%20%2813%29.png)

![](.gitbook/assets/image%20%2819%29.png)

![](.gitbook/assets/image%20%2816%29.png)

![](.gitbook/assets/image%20%2817%29.png)



#### Babel can translate between different versions of javascript so that your code can run on browsers that are limited to ES5 compatibility... included by default with every new react project.



```bash
|15:25:30|bryan@LAPTOP-9LGJ3JGS:[05-installing-nodejs] 05-installing-nodejs_exitstatus:0__________________________________________________________o>

npx create-react-app my-app
y-app
npm start
Creating a new React app in /mnt/c/MY-WEB-DEV/10-React-V3/05-installing-nodejs/my-app.


Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------[4/4] Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ cra-template@1.1.2
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
└─ react@17.0.2
info All dependencies
├─ cra-template@1.1.2
├─ immer@8.0.1
├─ react-dev-utils@11.0.4
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
├─ react@17.0.2
└─ scheduler@0.20.2
Done in 768.43s.

Installing template dependencies using yarnpkg...
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 17 new dependencies.
info Direct dependencies
├─ @testing-library/jest-dom@5.11.10
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ react-dom@17.0.2
├─ react@17.0.2
└─ web-vitals@1.1.1
info All dependencies
├─ @testing-library/dom@7.30.1
├─ @testing-library/jest-dom@5.11.10
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ @types/aria-query@4.2.1
├─ @types/jest@26.0.22
├─ @types/testing-library__jest-dom@5.9.5
├─ css.escape@1.5.1
├─ css@3.0.0
├─ dom-accessibility-api@0.5.4
├─ lz-string@1.4.4
├─ min-indent@1.0.1
├─ react-dom@17.0.2
├─ react@17.0.2
├─ redent@3.0.0
├─ strip-indent@3.0.0
└─ web-vitals@1.1.1
Done in 706.12s.
Removing template package using yarnpkg...

yarn remove v1.22.5
[1/2] Removing module cra-template...
[2/2] Regenerating lockfile and installing missing dependencies...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
success Uninstalled packages.
Done in 619.62s.

Success! Created my-app at /mnt/c/MY-WEB-DEV/10-React-V3/05-installing-nodejs/my-app
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  yarn start

Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.25.168.12:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

```

![](.gitbook/assets/image%20%286%29.png)






















