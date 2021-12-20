---
title: Using Yarn
weight: 0
excerpt: Using Yarn
seo:
  title: 'Using Yarn'
  description: 'Using Yarn'
  robots: []
  extra: []
template: docs
---


# Usage | Yarn

> ## Excerpt
> Fast, reliable, and secure dependency management.

---
Now that you have Yarn [installed](https://classic.yarnpkg.com/en/docs/install), you can start using Yarn. Here are some of the most common commands you’ll need.

**Starting a new project**

**Adding a dependency**

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**Adding a dependency to different categories of dependencies**

Add to `devDependencies`, `peerDependencies`, and `optionalDependencies` respectively:

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**Upgrading a dependency**

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**Removing a dependency**

**Installing all the dependencies of project**