# Netlify CMS Open Authoring

> I like the term "Git-backed CMS." That term works for an emerging style of CMS that looks and behaves much like any other CMS, with a fascinating twist:

I like the term “Git-backed CMS.” That term works for an emerging style of CMS that looks and behaves much like any other CMS, with a fascinating twist: it doesn’t actually store any data for you. These CMSs are connected to a Git repo where the data lives in flat files (e.g. Markdown). You teach the CMS where those files are and how they are structured. Then, as you use the CMS to create, edit, and delete things, **those changes happen as commits** (or pull/merge requests) are made against that repo. So cool.

For example, [CloudCannon](https://docs.cloudcannon.com/files/source-syncing/github/) can do it specifically for hosted Jekyll sites.

But more in the Indie Web / JAMstack spirit, there are players like [Forestry](https://forestry.io/) and the one I have the most experience with: [Netlify CMS.](https://www.netlifycms.org/)

Lemme do a series of screenshots with captions to make the point very clear.

![](https://i1.wp.com/css-tricks.com/wp-content/uploads/2019/11/serverless.png?ssl=1)

The site in question is our [Serverless](https://serverless.css-tricks.com/) site. It happens to be [Gatsby](https://www.gatsbyjs.org/), but the important part is that that the content comes from Markdown files in [a Git repo](https://github.com/CSS-Tricks/serverless).

![](https://i1.wp.com/css-tricks.com/wp-content/uploads/2019/11/Markdown-files.png?ssl=1)

Here’s an example Markdown file (with Frontmatter) in the repo. I like Markdown fine, but I’d prefer to work with content in a GUI CMS honestly. The reason I went this way is so the data is in a repo, meaning I can take content-based pull requests.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2019/11/pull-request.png?ssl=1)

I really do get content-based pull requests. That’s the magic right there. That’s exactly what I want.

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/11/netlify-cms.png?ssl=1)

Netlify CMS is basically two files. An `index.html` that loads up a SPA interface that literally does everything. And a configuration file to teach it about your content.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2019/11/netlify-cms-ui.png?ssl=1)

With Netlify CMS in place, I have my GUI CMS happy place. Any changes in here turn up as commits on the repo.

### OK OK OK. What’s this “Open Authoring” thing?

As I write, it’s [a beta feature](https://www.netlifycms.org/docs/open-authoring/).

Here’s the main thing: I can use Netlify CMS for my site. My team can also use it, because I can invite them specifically to the repo. But you, random person on the internet, cannot. If you wrote to me and told me you wanted to be a volunteer content manager on the site, then maybe, OK, I’ll invite you to the repo. (You being a member of the repo will allow you to auth into Netlify CMS, assuming you are using the GitHub back end, which is the only connection Open Authoring works with right now.)

But that’s a bummer that random internet people can’t submit pull requests on content via Netlify CMS. That would be way easier than the manual process of forking the repo and all that jazz — although to be fair, click the little pencil icon while looking at a Markdown file on GitHub and editing it makes the process pretty simple by opening a pull request automatically (but it doesn’t help you add new content or upload images or anything).

This is where Open Authoring comes in. In my Netlify CMS config I can basically flip it on with one line of config. They explain it well:

> you can use Netlify CMS to accept contributions from GitHub users **without giving them access to your repository**. When they make changes in the CMS, the CMS forks your repository for them behind the scenes, and all the changes are made to the fork. When the contributor is ready to submit their changes, they can set their draft as ready for review in the CMS. This triggers a pull request to your repository, which you can merge using the GitHub UI.

Emphasis mine.

Wanna see the real beauty of this? Now we can put **“Edit this”** buttons on all the content, and if you click it, you’ll head straight into Netlify CMS to do the editing. It works if you are me, my team member, or you, random person from the internet.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2019/11/edit-this.png?ssl=1)

That’s what I’ve always wanted. It makes the site into a wiki! But there is enough public accountability (they have to use a real GitHub account) that I wouldn’t worry about much spam or obnoxious behavior.

[Source](https://css-tricks.com/netlify-cms-open-authoring/)
