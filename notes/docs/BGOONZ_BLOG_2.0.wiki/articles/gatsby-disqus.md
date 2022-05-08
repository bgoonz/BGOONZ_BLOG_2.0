# <img src="https://user-images.githubusercontent.com/16360374/60153578-90677300-9799-11e9-994a-d8f932d2efe1.png" height="38"/> Gatsby Plugin Disqus

A plugin that simplifies adding [Disqus](https://disqus.com/) comments to [Gatsby](https://www.gatsbyjs.org/)

## Description

The goal of this plugin is to allow users to bring their content to life and cultivate engaged communities by integrating Disqus comments into their blazing-fast Gatsby websites. After struggling to integrate different Disqus components into my Gatsby site, creating an easily-configured plugin for the Gatsby ecosystem felt like a no-brainer.

## Install

```sh
$ yarn add gatsby-plugin-disqus
```

or

```sh
$ npm install -S gatsby-plugin-disqus
```

If you have unanswered questions or would like help with enhancing or debugging the plugin, feel free create an [issue](https://github.com/tterb/gatsby-plugin-disqus/issues/new) or submit a [pull request](https://github.com/tterb/gatsby-plugin-disqus/pulls).

---

---

# Configure

Add the plugin to your `gatsby-config.js` file with your [Disqus shortname](https://help.disqus.com/installation/whats-a-shortname)

```js
// gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `your-disqus-shortname`
            }
        }
    ]
};
```

## Parameters

All of the following parameters are optional, though providing a `url`, `identifier`, and `title` are recommended as it will prevent threads from being lost in the case that the domain changes or the post is renamed.

| Parameter  | Usage                                                                               |
| ---------- | ----------------------------------------------------------------------------------- |
| url        | Tells the Disqus service the URL of the current page                                |
| identifier | Tells the Disqus service how to identify the current page                           |
| title      | Tells the Disqus service the title of the current page                              |
| language   | Tells the Disqus service to override the default site language for the current page |

---

---

# Usage

You can use the plugin as shown in this brief example:

```jsx
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

const PostTemplate = () => {
    let disqusConfig = {
        url: `${config.siteUrl + location.pathname}`,
        identifier: post.id,
        title: post.title
    };
    return (
        <>
            <h1>{post.title}</h1>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            /* Post Contents */
            <Disqus config={disqusConfig} />
        </>
    );
};

export default PostTemplate;
```

While providing a `url`, `identifier`, and `title` are optional, these attributes are recommended as it will prevent threads from being lost in the case that the domain changes or the post is renamed.
