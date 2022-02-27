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
