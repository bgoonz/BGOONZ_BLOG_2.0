---
title: Troubleshooting package-lock.json
weight: 0
excerpt: Not only to solve these merge conflicts was getting a pain, but also a situation where our build system simply stopped working because of harmed packages in the npm eco-system.
seo:
  title: 'Troubleshooting package-lock.json'
  description: 'Troubleshooting package-lock.json'
  robots: []
  extra: []
template: docs




Introduction
============

Issues
------

-   I discovered some issues, when co-workers committed their changes including a modified  `package.json`and  `package-lock.json`  --- even they did not want to update anything.
-   We also had an increase of merge conflicts and in general the situation was not happy or clear.
-   Some people say to not commit or delete the  `package-lock.json`  to solve the problem.

> Not only to solve these merge conflicts was getting a pain, but also a situation where our build system simply stopped working because of harmed packages in the npm eco-system.  (as you can read  [here](https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident)).

So i was asking myself, how to do this correctly or in a better way?

Researching
-----------

First, you definitely  should commit  the  `package-lock.json`file.\
More information:  <https://docs.npmjs.com/files/package-lock.json>

Starting to investigate the internet and documentations, I then found out that there is actually a  new cli command  called  `npm ci`, which should be used on build servers / CI  *(continuous integration)*. It solves the problem of installing updated versions of a package --- because it doesn't update any package!

> When I did some research about this and was going over the comments of blogs, my feeling was that a lot of people are  misunderstanding  what  `npm install`  really does now a days. Also I did not find a lot of information about this, thats why I tried to make this article with hopefully useful information.

Compare cli commands
====================

So let's see first what the commands are doing and what differences happen between them. I tried to make a list of cases / processes which can be compared between the two tools:

 cases                                | npm install | npm ci\
 --------------------------------------|-------------|-------------\
  needs package.json                   | no          | yes\
  needs package-lock.json              | no          | yes\
  installs from package.json           | yes         | no\
  installs from package-lock.json      | no          | yes\
  compares both                        | no          | yes\
  updates loose package versions       | yes         | no\
  updates loose dependencies           | yes         | no\
  writes to package.json               | yes         | no\
  writes to package-lock.json          | yes         | no\
  deletes node_modules before install  | no          | yes\
  used for installing separate package | yes         | no\
  should be used on build systems / CI | no          | yes\
  can be used for development          | yes         | yes\
  reproducible installs                | no          | yes

Clarifying differences
======================

npm install
-----------

Is generally used for first install where no  `package-lock.json`  exists. Further it is useful to add separate packages and for updating packages.

-   looks up version information of the packages and its dependencies
-   updates dependencies according to the SemVer
-   updates dependencies of dependencies (also if your dependency version is fixed --- more about this later in the article)
-   writes a lock file which can be used by  `npm ci`for fixed version installs

More information:  <https://docs.npmjs.com/cli/install>

npm ci
------

This command will check the  `package-lock.json`file and install only the mentioned packages in their defined version.

-   compares both package files and fails if dependencies don't match
-   removes  `node_modules`  if it exists
-   installs only the version mentioned in  `package-lock.json`
-   will always install the same packages if  `package-lock.json`  did not change
-   is faster than  `npm install`

More information:  <https://docs.npmjs.com/cli/ci.html>

![](https://miro.medium.com/max/2000/1*dt_1C-Yf9oG8NLwTNPFsAQ.jpeg)

Dependency basics
=================

For example if you install a package with  `npm install webpack --save-dev`, it will define the following dependency in your  `package.json`:

"devDependencies": {\
    "webpack": "^4.28.1"\
}

`^4.28.1`is a loose definition and npm will update whenever there is a new version according to the SemVer.

More information:

-   <https://docs.npmjs.com/files/package-locks>
-   <https://docs.npmjs.com/about-semantic-versioning>  (SemVer)

Fixing the version number
=========================

The wrong way
-------------

Now what you might think you can do is to remove the  `^`  and it will always use the same version:

"devDependencies": {\
    "webpack": "4.28.1"\
}

Which is true for the package  you are doing it  *(for this example webpack)*.\
But if you have a look into the  `package-lock.json`  file, you will see that there are dependencies within webpack itself, and some are defined loose. You can't control this.

`Explaining package-lock.json`
------------------------------

As you can see in the following  `package-lock.json`example, webpack  `4.28.1`  defines a dependency on  `acorn`  with a  *requires*  set to  `^5.6.2`  , which resolved to the version  `5.7.3`  as you can see in the  *dependencies*. (from the last time it was looked up)

...\
"webpack": {\
    "version": "4.28.1",\
    ...\
    "requires": {\
        ...\
        "acorn": "^5.6.2",\
        ...\
    "dependencies": {\
        "acorn": {\
            "version": "5.7.3",\
            ...\
        ...\
    ...\
...

> The `package-lock.json `will update and change whenever you, an other dev or the build server executes `npm install` and a new version of a used package is available!

> In such a large repository like the npm registry, things can fail, even if all the people try to stick to SemVer and don't brake anything, in the end we are all human.
>
> In our case, a referenced package was deleted by npm registry because it was vulnerable, and our build server broke. (because of our wrong setup of version definitions and npm install)

## The right way

If we use `npm ci` it will only install the packages in the versions mentioned in the `package-lock.json` (under _dependencies_).\
No magic updates of packages on the build server anymore. It's that simple.

> Just update your build task / build server / CI to execute `npm ci` instead of `npm install`.

# What about development environments?

The same situation could also help on development environments. Especially if you work in a team with other developers, where they maybe don't want to deal with node/npm stuff.

If the developers make a `npm ci` instead of an `npm install` everyone in the team will have the same versions of all the packages. This should mitigate further issues with any updated packages as it might happen with the install task.

## Package updates

Now you can delegate the task for updating packages to a developer. Merge conflicts will not happen anymore / at least not that often. Of course you should do updates regularly and always check for vulnerabilities.\
`npm audit` or other tools can help you here:

-   <https://docs.npmjs.com/cli/audit>
-   <https://docs.npmjs.com/cli/outdated>
-   <https://docs.npmjs.com/cli/update>

## Merge conflicts

If I did understand correctly, one needs to merge the `package.json` only and then you can make a npm install to update the lock file again.\
I also found out that there is a package which can help out further:

-   Have a look at [npm-merge-driver](https://www.npmjs.com/package/npm-merge-driver) --- automatic merging of lockfiles

> I did not yet try it out...

# Challenges

There might be further challenges, depending on your workflows or setups. Please take care and take note for the following cases:

-   `npm ci` will take a bit longer, when it has to delete the `node_modules`
-   adding `npm ci`to your "project open" might help other devs
-   what about switching branches?
-   make sure `npm ci` is not running too often (not on every local build) --- maybe use [build-if-changed](https://www.npmjs.com/package/build-if-changed) or similar helpers
-   And for the future, keep an eye on [tink](https://www.npmjs.com/package/tink)

> I am thinking about improving and automating the install for other devs in my team, but right now it still seems the best to simply do it manually.

![](https://miro.medium.com/max/60/0*-_vexX_n4O45q-3X?q=20)

![](https://miro.medium.com/max/473/0*-_vexX_n4O45q-3X)

Photo by [Matt Sclarandis](https://unsplash.com/@motornomad?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

# Conclusion

So, now you should:

-   No random surprising fails anymore because of updated packages
-   Use `npm ci` , especially on build servers / CI
-   Know how the `package-lock.json`is used for
-   Understand behaviour and usage of `npm install` better
-   Understand why `npm install` will change the `package-lock.json`
-   Learned maybe also more about the semantical versions (SemVer)
-   Learned to lookup the documentation and follow the changes of new npm releases
