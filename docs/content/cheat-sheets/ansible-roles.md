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

title: Ansible roles
category: Ansible

---

### Structure

    roles/
      common/
        tasks/
        handlers/
        files/              # 'copy' will refer to this
        templates/          # 'template' will refer to this
        meta/               # Role dependencies here
        vars/
        defaults/
          main.yml

### References

-   http://www.ansibleworks.com/docs/playbooks_roles.html
