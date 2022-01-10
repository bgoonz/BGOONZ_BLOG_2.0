# Build troubleshooting tips

This article provides troubleshooting tips for failing builds in Netlify's build service.

In case your build fails on Netlify, first make sure it builds locally in your own development environment. This is a prerequisite to all of the below suggestions.

If your build works locally, the next debugging step is to ensure the package versions we use to build match yours. You can find the settings for these in the [dependency management](https://docs.netlify.com/configure-builds/manage-dependencies/) doc. That's the leading cause of build failure.

Once you've considered the most frequently encountered issues listed below, there is some additional reading linked at the bottom of this article which may help you debug in more depth or find answers to less commonly asked questions.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#command-not-found)Command not found

If your build fails with `jekyll: command not found` or `gulp: command not found` or anything in that pattern, it means that the software required for that command hasn't been installed in your build. You can tell the buildbot to install the software you need by including the proper configuration file, like a `Gemfile` for Ruby programs like `jekyll`, or `package.json` for Node programs like `gulp`.

Check out the [dependency management](https://docs.netlify.com/configure-builds/manage-dependencies/) doc for more details on how to tell us to install your toolchain. Once we find your configuration file, we'll automatically use it before trying to run your build command.

Note that by default the buildbot looks for the configuration file in the root of your repository. If your configuration file is located in a subdirectory, you will need to change your folder structure or [set the site's base directory](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings) to tell us which subdirectory to use.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#build-command-named-build)Build command named `build`

Don't name your build command `build` or try to use the [debug build steps to run a build locally](https://github.com/netlify/build-image#running-locally) in our production build environment. This will fail and give you a strange build log.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#build-fails-with-exit-status-128)Build fails with `exit status 128`

Typically this means that we don't have permission to clone the repository you are trying to deploy. The usual cause for this is that someone made some changes to settings for the parent organization, or repository, some time after linking the repository to your site.

We only have permission to create a copy of your code when you link the repository. If you are seeing your build fail with `exit status 128` in the deploy log, relinking your repo using our UI is a good first attempt to fix things (go to Site settings > Build & deploy > Continuous deployment > Build settings, select Edit settings, then Link to a different repository). If you do this, please check your webhook settings at your Git provider to be sure you don't have any duplicate Netlify webhooks.

Permission levels

Your GitHub, Bitbucket, or GitLab user account may not have the privilege level required to link the repo to Netlify, even if you can log in and access it from the Git host's website. You generally need administrative privileges on the repository, owning organization, or both. Related: [documentation about repository permissions and linking](https://docs.netlify.com/configure-builds/repo-permissions-linking/).

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#build-fails-on-warning-message)Build fails on warning message

In some cases, a build may fail due to a warning message that would not cause a build failure when run locally. This is because some libraries and build tools handle warnings differently when they detect that they are being run in a Continuous Integration (CI) environment.

Like many other CI tools and platforms, Netlify sets a build environment variable, `CI=true`, as a convention to indicate that your build is running in an automated environment. Many libraries use the presence of the `CI` variable to trigger changes in their behavior, such as removing progress spinner animations or user prompts. In some cases, a library may also choose to treat warning messages as errors, failing the build.

Generally, libraries that choose to fail on warnings presume their users will want to fix the issues causing the warnings. If this isn't practical for your use case, you can override the `CI` variable by adding `CI=''` to the beginning of your site [build command](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings). For example:

```
CI='' npm run build

```

"False" isn't always false

Though it seems like the logical opposite of `CI=true`, setting `CI=false` may not work as expected. This is because environment variable values are processed as strings, and many libraries interpret *any* non-empty string value for `CI` as `true`.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#case-sensitivity)Case sensitivity

If you develop on Windows or OSX, and your code includes something like `jQuery/jquery.js` --- the Netlify build may fail as the file system used in Netlify builds is case sensitive while your build environment is not. The error messages that result may not clearly indicate this!

To effectively change case of a file stored in Git from your case insensitive local environment, it may be necessary to `git mv` or `git rm` and then add the file again, as renaming and committing will not have the desired effect.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#large-files-or-sites)Large files or sites

Files over 10 MB in size are not well-supported by our CDN and may fail to upload to our system, causing your entire deploy to fail. You should host large content elsewhere, such as YouTube embedded videos.

Sites with tens of thousands of html files can lead to long processing times. This shouldn't cause the deploy to fail, but even a "quick" manual deploy can take quite awhile (many minutes) to finish if you have tens of thousands of files.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#post-processing)Post processing

There are some situations during build that may lead to a failure in post processing --- many things that fail will lead to a retry; if after 4 retries it still hasn't worked, we fail the deploy. You'll probably need to [contact support](https://www.netlify.com/support/) in this case to get more details about the error, unless you want to follow the next bullet point's advice.

You may try disabling asset optimization (in Site settings > Build & deploy > Post processing > Asset optimization) if your site fails deploy during post processing or some of your assets end up with nonsense paths on the portion of our CDN hosted on Amazon CloudFront. For instance, if you find an incorrect CloudFront URL with a `{$rootfolder}` component in it, you'll need to disable CSS bundling and minification to work around this, or review your CSS as there is likely an incorrect reference causing the behavior.

Redirects or Custom header rules that we can't process at all are mentioned near the end of the build log and in the Deploy Summary for a deploy, but will not cause the build or deploy to fail.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#build-cache)Build cache

In order to make builds run faster, we cache certain directories created when we [install your dependencies](https://docs.netlify.com/configure-builds/manage-dependencies/#dependency-cache).

If a build fails, it's worth retrying with a cleared build cache to check if this works better. You can do this by selecting the Retry deploy button in the header of a failed deploy log page, and then selecting Clear cache and deploy site.

![](https://d33wubrfki0l68.cloudfront.net/6b862d5d0fe47bb42d9c0582f25dec8d7f47e4b5/00d94/images/configure-builds-retry-deploy-dropdown.png)

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#enqueued-builds)Enqueued builds

Builds may be enqueued for any of the three reasons described below. Visit our Forums for a verified Support Guide on reducing build queueing by [optimizing *what* you build](https://answers.netlify.com/t/common-issue-how-can-i-optimize-my-netlify-build-time/3907).

-   System queue: Builds enter a system queue when the number of builds across all customers exceeds the current capacity on the build network. This triggers an increase in system capacity, so enqueued builds may start building as capacity increases as well as when other builds complete. To learn how to reduce your team's exposure to system build queues, [contact sales](https://www.netlify.com/enterprise/contact/).
-   Team queue: Builds enter your team queue when the number of concurrent builds across all sites on your team exceeds your team's [build capacity](https://docs.netlify.com/accounts-and-billing/billing/#builds-usage). Such builds appear in your team's [Builds page](https://docs.netlify.com/monitor-sites/monitor-builds/) with the label: Enqueued: Awaiting Capacity. You can select the Manage build capacity button on that page to increase team build capacity. If you have a build that you'd like to build right away, you can [prioritize](https://docs.netlify.com/monitor-sites/monitor-builds/#prioritize-a-build) it. *(This feature may not be available on all [plans](https://www.netlify.com/pricing/).)* You can also [cancel](https://docs.netlify.com/site-deploys/manage-deploys/#cancel-a-deploy) unneeded team builds to move other builds up in the queue.
-   Context queue: When multiple builds are triggered on the same site, in an *identical* [deploy context](https://docs.netlify.com/site-deploys/overview/#deploy-contexts) (such as the same Deploy Preview number, or the same branch deploy) these builds enter a context queue to ensure they complete sequentially. When the current build completes, the newest enqueued build of identical context begins, skipping any others in the same context queue. To start the newest enqueued build in a given context, you can [cancel](https://docs.netlify.com/site-deploys/manage-deploys/#cancel-a-deploy) the current active build of identical context.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#deploy-previews-and-bitbucket)Deploy Previews and Bitbucket

Due to limitations with Bitbucket's API, we cannot build Deploy Previews for pull requests on Bitbucket repositories. This is specifically due to the fact that they do not send complete refs in their webhooks for pull requests. Bitbucket has an [open issue](https://bitbucket.org/site/master/issues/5814/refify-pull-requests-by-making-them-a-ref) about this.

## [#](https://docs.netlify.com/configure-builds/troubleshooting-tips/?_ga=2.84803921.938315912.1639898242-345723907.1639767886#more-resources)More resources

Though our build environment works for most build pipelines, there are a few special cases that may cause you some difficulty. To get more context on how our builds work, check out [this blog post on how our build bots build your site](https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/). You can also test your build locally using our open source [build image](https://github.com/netlify/build-image).

If your issue doesn't seem to be addressed above, you can visit our [Support Forums](https://answers.netlify.com/categories) to browse posts about common issues or start a new discussion. Many questions about specific build scenarios have also been [asked and answered on StackOverflow](https://stackoverflow.com/questions/tagged/netlify).
