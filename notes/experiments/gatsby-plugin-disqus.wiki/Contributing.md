# Contributing

1. Make sure you have `yarn` installed.
2. Create a new folder for your yarn workspace. `mkdir gatsby-disqus-workspace`
3. Inside your workspace folder, clone this repo.
4. `cd` into `gatsby-disqus-workspace/gatsby-plugin-disqus/` and run `yarn && yarn watch`. _Leave this terminal window open._
5. Add a gatsby site that uses `gatsby-plugin-disqus` into your workspace folder for testing purposes.
6. In your workspace folder create a `package.json` and add the following:

```json
{
    "private": true,
    "workspaces": ["your-example-test-site", "gatsby-plugin-disqus/lib"]
}
```

7. In a new terminal window, navigate to your workspace folder and run `yarn && yarn workspace <example-site> run develop`.
