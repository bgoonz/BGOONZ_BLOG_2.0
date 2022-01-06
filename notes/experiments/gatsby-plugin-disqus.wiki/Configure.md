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
