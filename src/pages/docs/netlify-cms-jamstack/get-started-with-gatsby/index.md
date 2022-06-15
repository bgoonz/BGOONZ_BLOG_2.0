---
title: Get Started With Gatsby
template: docs
excerpt: Get Started With Gatsby
---

1.  Create a new site

It’ll ask for a site title and the name of the project’s directory. Continue following the prompts to choose your preferred language (JavaScript or TypeScript), CMS, styling tools and additional features.

2.  Once everything is downloaded you will see a message with instructions for navigating to your site and running it locally.

The CLI created the site as a new folder with the name you chose in step 1.

Start by going to the directory with

Start the local development server with

Gatsby will start a hot-reloading development environment accessible by default at `http://localhost:8000`.

3.  Now you’re ready to make changes to your site!

Try editing the home page in `src/pages/index.js`. Saved changes will live reload in the browser.

## [](https://www.gatsbyjs.com/docs/quick-start/#whats-next)What’s next?

### [](https://www.gatsbyjs.com/docs/quick-start/#use-flags)Use flags

The CLI also supports two flags:

-   `-y` skips the questionnaire
-   `-ts` initializes your project with the [minimal TypeScript starter](https://github.com/gatsbyjs/gatsby-starter-minimal-ts) instead of the [minimal JavaScript starter](https://github.com/gatsbyjs/gatsby-starter-minimal)

Flags are not positional, so these commands are equivalent:

-   `npm init gatsby -y -ts my-site-name`
-   `npm init gatsby my-site-name -y -ts`



Create a Gatsby site
--------------------

To create your first Gatsby site, you're going to use a command from the Gatsby command line interface (CLI): `gatsby new`. This command brings up an interactive prompt that asks you questions about the site you want to build. After you enter all the information, the CLI uses your answers to automatically generate your new Gatsby site.

[![The welcome message for the interactive "gatsby new" command.](https://www.gatsbyjs.com/static/eab322d4f0a5a12bdc749ef0992c4e7c/321ea/gatsby-new-cli.png "The welcome message for the interactive "gatsby new" command.")](https://www.gatsbyjs.com/static/eab322d4f0a5a12bdc749ef0992c4e7c/e92cd/gatsby-new-cli.png)

**Note:** For this Tutorial, your Gatsby CLI should be v4.8 or newer. To check what version you have installed, run the following command:

Copycopy code to clipboard`

gatsby --version

`

Need to update? Run the command below to get the latest version of the Gatsby CLI:

Copycopy code to clipboard`

npm  install -g gatsby-cli

`

Let's take a closer look at the process:

1.  Open the command line, and use the `cd` command to change directories into the folder where you want to create your new Gatsby site. For example, if you wanted to create your new site on your desktop, you might type:

Copycopy code to clipboard`

cd Desktop

`

1.  Run the following command from the command line. This will start up the interactive prompt to help you create a new Gatsby site.

Desktop

CopyDesktop: copy code to clipboard`

gatsby new

`

**Having trouble with `gatsby new`?** If you had trouble globally installing `gatsby-cli` in Part 0, you can also create a new site by running `npm init gatsby` from the command line instead of `gatsby new`.

1.  When the prompt asks, **"What would you like to call your site?"** enter a name for your site.

Copycopy code to clipboard`

What would you like to call your site?

✔ - My First Gatsby Site

`

1.  When the prompt asks, **"What would you like to name the folder where your site will be created?"** use the default folder name, which will be based on the site name you chose.

Copycopy code to clipboard`

What would you like to name the folder where your site will be created?

✔ Desktop/ my-first-gatsby-site

`

1.  When the prompt asks, **"Will you be using JavaScript or TypeScript?"** choose **JavaScript**.

Copycopy code to clipboard`

Will you be using JavaScript or TypeScript?

❯ JavaScript

 TypeScript

`

This tutorial doesn't require any prior TypeScript knowledge as it uses JavaScript. If you're familiar with TypeScript you can read the [Gatsby and TypeScript guide](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/) to learn about typings, files, and conventions. If you want to use TypeScript we recommend going through the tutorial first and then only afterwards convert the project to TypeScript.

1.  When the prompt asks, **"Will you be using a CMS?"** select **"No (or I'll add it later)"**.

Copycopy code to clipboard`

✔ Will you be using a CMS?

- No (or I'll add it later)

`

In the future, you can use these options to tell `gatsby new` what features you want to add to your site, and `gatsby new` will automatically configure them for you. It's a much quicker way to set up new projects.

But in this first site, you'll set things up manually to learn about how Gatsby's pieces fit together.

1.  When the prompt asks, **"Would you like to install a styling system?"** select **"No (or I'll add it later)"**. (You'll add styles manually later.)

Copycopy code to clipboard`

✔ Would you like to install a styling system?

- No (or I'll add it later)

`

1.  When the prompt asks, **"Would you like to install additional features with other plugins?"** use the arrow and Enter keys to select **"Done"**.

Copycopy code to clipboard`

✔ Would you like to install additional features with other plugins?

- Done

`

1.  The prompt will show you a summary of what `gatsby new` will do. It should look something like the output below.

Copycopy code to clipboard`

Thanks! Here's what we'll now do:

 🛠  Create a new Gatsby site in the folder my-first-gatsby-site

? Shall we do this? (Y/n) › Yes

`

1.  When the prompt asks, **"Shall we do this?"** enter **"Y"**. The `gatsby new` command will start building your site. Your internet download speed will affect how long this command takes to run. After it finishes, you should see a message like this:

Copycopy code to clipboard`

🎉  Your new Gatsby site My First Gatsby Site has been successfully

created at ~/Desktop/my-first-gatsby-site.

Start by going to the directory with

  cd my-first-gatsby-site

Start the local development server with

  npm run develop

See all commands at

 https://www.gatsbyjs.com/docs/gatsby-cli/

`

Congratulations, you're now the owner of a brand-new Gatsby site!

[](https://www.gatsbyjs.com/docs/tutorial/part-1/#run-your-site-locally)Run your site locally
---------------------------------------------------------------------------------------------

So far, you've generated the code for your site, but what does it actually look like in a web browser like Firefox or Google Chrome? To find out, you'll first need to start up your site's local development server.

The **development server** is a useful tool for when you're working on your site locally (from your own computer). When your development server is running, you can use a web browser to interact with your local copy of your site. That way, you can test out changes to your code, to make sure they work before you actually publish a new version of your site to the internet.

To start up your development server, do the following:

1.  In the command line, change into the directory you created for your site:

~/Desktop

Copy~/Desktop: copy code to clipboard`

cd my-first-gatsby-site

`

**Tip:** Whenever you want to run any commands for your site, you need to be in the context for that site. That is, your command line needs to be pointed at the directory where your site's code lives.

1.  From your site directory, start the development server by running the following command:

~/Desktop/my-first-gatsby-site

Copy~/Desktop/my-first-gatsby-site: copy code to clipboard`

gatsby develop

`

If you weren't able to install the Gatsby command line interface globally, you can start your development server using the following command instead:

Copycopy code to clipboard`

npm run develop

`

1.  After a few moments, the command line should output a message like the following, telling you your development server is ready to go!

Copycopy code to clipboard`

You can now view my-first-gatsby-site in the browser.

⠀

 http://localhost:8000/

⠀

View GraphiQL, an in-browser IDE, to explore your site's data and

schema

⠀

 http://localhost:8000/___graphql

`

1.  Open your favorite web browser and navigate to `http://localhost:8000`.

[![The default home page generated by the "gatsby new" command.](https://www.gatsbyjs.com/static/b79cb66545b144295a8c6a5efeaafb20/321ea/localhost-new-site.png "The default home page generated by the "gatsby new" command.")](https://www.gatsbyjs.com/static/b79cb66545b144295a8c6a5efeaafb20/94cea/localhost-new-site.png)

And there it is: your very first Gatsby site! 🎉

You'll be able to visit the site locally at `http://localhost:8000/` for as long as your development server is running. (That's the process you started by running the `gatsby develop` command.) To stop running that process (or to "stop running the development server"), go back to your terminal window, hold down the "control" key, and then hit "c" (`ctrl-c`). To start it again, run `gatsby develop` again!

**Note:** If you are using VM setup like vagrant and/or would like to listen on your local IP address, run `gatsby develop --host=0.0.0.0`. Now, the development server listens on both `http://localhost` and your local IP.

[](https://www.gatsbyjs.com/docs/tutorial/part-1/#set-up-a-github-repo-for-your-site)Set up a GitHub repo for your site
-----------------------------------------------------------------------------------------------------------------------

GitHub is a website that many developers use to back up and share their code online. By uploading your code to GitHub, you'll be able to work on the same codebase from multiple computers. You'll also be able to use Gatsby Cloud to build and host your site.

1.  Each codebase on GitHub is stored in its own **repository** (also called a "repo", for short). To create a new repository for your blog, click the plus icon in the top-right corner of the navigation bar. Select "New repository".

    [![A dropdown in the navigation bar reveals the "New repository" button.](https://www.gatsbyjs.com/static/bf74830c88d3f8b0287b58cf397be992/321ea/new-repo-button.png "A dropdown in the navigation bar reveals the "New repository" button.")](https://www.gatsbyjs.com/static/bf74830c88d3f8b0287b58cf397be992/18539/new-repo-button.png)

2.  When filling out the form for your new repo, you can make it public or private. (This only affects the visibility of your code on GitHub. Your site will still be visible to everyone once you deploy it with Gatsby Cloud.) Leave the initialization option checkboxes unchecked.

    [![The GitHub form to create a new repository. It's set to create a public repo called "my-first-gatsby-site". The options to add a README, .gitignore file, and license are unchecked.](https://www.gatsbyjs.com/static/94ec685d2adefdf4d2aac5b3364acba9/321ea/new-repo-options.png "The GitHub form to create a new repository. It's set to create a public repo called "my-first-gatsby-site". The options to add a README, .gitignore file, and license are unchecked.")](https://www.gatsbyjs.com/static/94ec685d2adefdf4d2aac5b3364acba9/3d68f/new-repo-options.png)

3.  To push your existing code from your computer to your new GitHub repository, enter the commands below in the command line. Be sure to swap out `YOUR_GITHUB_USERNAME` for your actual username and `YOUR_GITHUB_REPO_NAME` with the name you gave your GitHub repo (like `my-first-gatsby-site`).

    Copycopy code to clipboard`

    git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME.git

    git branch -M main

    git push -u origin main

    `

**Using GitHub for the first time?**

If you get an error about permissions when you try to push your code to GitHub for the first time, you might need to set up a **personal access token** for your GitHub account. This lets GitHub know that your computer has permission to push code changes to your remote repos.

For instructions on how to set up a personal access token, follow GitHub's guide: [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Your personal access token will need the **repo** scope to be able to push changes to your repository.

Now you have a copy of your code saved on GitHub's servers. In the next step, you'll connect your Gatsby Cloud account to the GitHub repo you just created.

[](https://www.gatsbyjs.com/docs/tutorial/part-1/#build-your-site-with-gatsby-cloud)Build your site with Gatsby Cloud
---------------------------------------------------------------------------------------------------------------------

Gatsby Cloud is an infrastructure platform that is specifically optimized for building, deploying, and hosting Gatsby sites. Once you connect your Gatsby Cloud account to your GitHub repository, Gatsby Cloud will build your site and make it available for others on the internet to see.

To connect your code on GitHub to your Gatsby Cloud account, do the following:

1.  Go to your [Gatsby Cloud Dashboard](https://www.gatsbyjs.com/dashboard/). Click on the **"Add a site"** button.

    [![An empty Gatsby Cloud dashboard](https://www.gatsbyjs.com/static/9c130998b561f1770834309715c99d5b/321ea/01-create-a-site-button.png "An empty Gatsby Cloud dashboard")](https://www.gatsbyjs.com/static/9c130998b561f1770834309715c99d5b/2b36a/01-create-a-site-button.png)

2.  The next few steps will help you add your site to Gatsby Cloud. First, in the **"Import from a Git repository"** card click the **"GitHub"** icon to select GitHub as your Git provider.

    [![The "Add a site" screen. Select the option for "Import from a Git repository".](https://www.gatsbyjs.com/static/ff5dd96106160a1c11eaa25af6becdda/321ea/02-import-a-git-repo.png "The "Add a site" screen. Select the option for "Import from a Git repository".")](https://www.gatsbyjs.com/static/ff5dd96106160a1c11eaa25af6becdda/0f688/02-import-a-git-repo.png)

3.  If this is your first time connecting GitHub to Gatsby Cloud, you'll need to give Gatsby Cloud permission to access your GitHub account.

    **Note:** If you are part of more than one GitHub organization, you will need to first select the organization with which the repository resides at this step before selecting the repository itself.

4.  A new browser window should open, where GitHub will ask you whether you want to give Gatsby Cloud permission to your GitHub repositories. You can choose whether to give Gatsby Cloud access to all of your GitHub repositories or to only the repository you created (`my-first-gatsby-site`). Then click **"Install"**.

    [![The GitHub permissions page, asking whether you want to give Gatsby Cloud access to your repos. The "All repositories" option is selected.](https://www.gatsbyjs.com/static/4fd11cb2e4af910ca099f70d12aa8421/321ea/03-github-gatsby-cloud-permissions.png "The GitHub permissions page, asking whether you want to give Gatsby Cloud access to your repos. The "All repositories" option is selected.")](https://www.gatsbyjs.com/static/4fd11cb2e4af910ca099f70d12aa8421/0f96c/03-github-gatsby-cloud-permissions.png)

5.  Now, when you go back to the Gatsby Cloud window, the repository list should contain your GitHub repository. Select it.

    [![The "Select a Repository" dropdown in Gatsby Cloud lists the "my-first-gatsby-site" GitHub repository.](https://www.gatsbyjs.com/static/5fb2c6c66c2d25426b180ee40917fd83/321ea/04-select-repository.png "The "Select a Repository" dropdown in Gatsby Cloud lists the "my-first-gatsby-site" GitHub repository.")](https://www.gatsbyjs.com/static/5fb2c6c66c2d25426b180ee40917fd83/65781/04-select-repository.png)

6.  Once you select your repo, you'll be navigated to the configuration step which presents you with a few more inputs. These let you tell Gatsby Cloud where to look in your GitHub repo for your Gatsby site. You can also change what Gatsby Cloud will name your site. **Leave the default settings** and click the **"Next"** button.

    [![The new fields. "Base Branch" is set to "main", "Base Directory" is set to "/", and "Site Name" is set to "my-first-gatsby-site-main".](https://www.gatsbyjs.com/static/61bb418dbf509217b076a19507374eef/321ea/05-add-site-details.png "The new fields. "Base Branch" is set to "main", "Base Directory" is set to "/", and "Site Name" is set to "my-first-gatsby-site-main".")](https://www.gatsbyjs.com/static/61bb418dbf509217b076a19507374eef/65781/05-add-site-details.png)

7.  Gatsby Cloud will ask you if you want to add any integrations to your site. For future projects, this might be useful if you want to use a CMS. Gatsby Cloud will also ask if you want to add any environment variables. Again, this may useful for future projects, but for now, scroll past and click the **"Build Site"** button.

    [![The "Integrations" tab of the "Add a site" screen.](https://www.gatsbyjs.com/static/c36f2eede71bb383cf02e73a7a8cf320/321ea/06-integrations-and-environment-variables.png "The "Integrations" tab of the "Add a site" screen.")](https://www.gatsbyjs.com/static/c36f2eede71bb383cf02e73a7a8cf320/65781/06-integrations-and-environment-variables.png)

8.  Now that your site has been created, you'll be taken to a site dashboard where you can see the status of your builds. Gatsby Cloud should start building your site automatically. You'll see a link to your new site, which is automatically hosted on Gatsby Cloud. You can share this link with anyone, and they'll be able to see your site online!

    [![The Gatsby Cloud dashboard for a new site.](https://www.gatsbyjs.com/static/d82ecf06f74d4195697a9a4c9253049d/321ea/07-site-page.png "The Gatsby Cloud dashboard for a new site.")](https://www.gatsbyjs.com/static/d82ecf06f74d4195697a9a4c9253049d/65781/07-site-page.png)

You did it! Your Gatsby site is now online! 👏

Every time you push a new change to the main branch of your GitHub repo, Gatsby Cloud will see the changes and automatically start a build for the new version of your site.

**Tip:** There will be a unique URL for each build (like `https://build-49535320-b3ae-4761-bbeb-f8f7fa07e0fc.gtsb.io/`), and a URL that always has the latest build (like `my-first-gatsby-site-main.gatsbyjs.io`). You'll mostly want to share the human-readable URL, so that people can always see the most up-to-date version of your site. But in some cases (like when you're trying to debug a specific build of your site) it can be helpful to use the unique build URL.

[](https://www.gatsbyjs.com/docs/tutorial/part-1/#summary)Summary
-----------------------------------------------------------------

In this section, you learned how to create a new Gatsby site and deploy it online using Gatsby Cloud. As a quick review, here's the diagram outlining the process:

[![The workflow for how your code gets from your computer to your users. Extended description below.](https://www.gatsbyjs.com/static/0fd27b745c1de708f034eaf97c4416e0/321ea/deployment-workflow.png "The workflow for how your code gets from your computer to your users. Extended description below.")](https://www.gatsbyjs.com/static/0fd27b745c1de708f034eaf97c4416e0/d61c2/deployment-workflow.png)

*Expand for detailed description*

### [](https://www.gatsbyjs.com/docs/tutorial/part-1/#key-takeaways)Key takeaways

-   To create a new Gatsby site from the command line, you can run the `gatsby new` command.
-   To run your site locally, use the `gatsby develop` command. You can view your site in a web browser at `localhost:8000`.
-   Gatsby Cloud is an infrastructure platform specifically optimized for building, deploying, and hosting Gatsby sites.
    -   When you push a new commit to the `main` branch of the GitHub repository for your site, Gatsby Cloud will detect the changes, rebuild a new version of your site, and then redeploy it.
