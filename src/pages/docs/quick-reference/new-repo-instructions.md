---
title: new-repo-git
weight: 2
seo:
  title: new-repo-git
  description: This is the new-repo-git page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: new-repo-git
      keyName: property
    - name: 'og:description'
      value: This is the new-repo-git page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: new-repo-git
    - name: 'twitter:description'
      value: This is the new-repo-git page
template: docs
---

### ...or create a new repository on the command line
```
echo "# React-Self-Study" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/bgoonz/React-Self-Study.git
git push -u origin master
```

### ...or push an existing repository from the command line
```
git remote add origin https://github.com/bgoonz/React-Self-Study.git
git branch -M master
git push -u origin master
```
### ...or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
