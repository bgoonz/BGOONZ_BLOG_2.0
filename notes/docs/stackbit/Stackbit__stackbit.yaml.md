The `stackbit.yaml` file lets you define the directory structure, the content schema, and other aspects of your site needed to make it work with Stackbit. `stackbit.yaml` should be placed in the root of your repository.

There are two use cases for `stackbit.yaml`. The first use case serves Stackbit Site Builder and provides the data needed to create and configure a new site from a theme repository. The second use case serves Stackbit Studio and provides the necessary information to work with an existing site.

Both Stackbit Site Builder and Stackbit Studio can work without `stackbit.yaml`. They will try to infer the missing data from project files. However, to support advanced capabilities and prevent misconfigurations, we recommend providing this file.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/#stackbit_studio)Stackbit Studio

Stackbit Studio runs your static site generator and shows your site's live preview, enabling you and your collaborators to edit your site with an on-page editing experience and publish it.

When a user [creates a site from a theme](https://www.stackbit.com/docs/conceptual-guides/site-creation/) or imports an existing site, Stackbit Studio uses `stackbit.yaml` to run your SSG. Once your SSG is up and running, Stackbit Studio shows the live site preview allowing you to edit your site pages, create new and delete existing pages, navigate your site via site-map, and other functionalities.

Stackbit Studio synchronizes site content in a bi-directional manner. When you make any content changes in Stackbit Studio, it immediately synchronizes these changes with the headless-CMS. Likewise, when you make any changes in the headless-CMS or the git repository, Stackbit Studio reflects them in live site preview.

Depending on your headless-CMS, Stackbit Studio will work in one of the two modes - "[API-based CMS mode](https://www.stackbit.com/docs/conceptual-guides/api-based-cms)" or "[File-based CMS mode](https://www.stackbit.com/docs/conceptual-guides/file-based-cms)".

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/#generating_stackbit_yaml)Generating stackbit.yaml

In order to get started quickly, you can use Stackbit CLI `init` command to automatically generate `stackbit.yaml`. Although the generated file might not describe your project exactly, it might save you a lot of time defining your content model.

First install the Stackbit CLI:

Then run the `init` command from your project folder:

Click [here](https://www.stackbit.com/docs/reference/stackbit-cli) to learn more about Stackbit CLI.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/#validating_stackbit_yaml)Validating stackbit.yaml

To validate `stackbit.yaml` install Stackbit CLI:

Then run the `validate` command from your project folder:

The `validate` command will validate the structure of your `stackbit.yaml` and validate your site's content files against models defined in `stackbit.yaml`.

Click [here](https://www.stackbit.com/docs/reference/stackbit-cli) to learn more about Stackbit CLI.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/#configuring_stackbit_yaml)Configuring stackbit.yaml

The configuration of `stackbit.yaml` might differ depending on the configuration of your site and the headless-CMS your site use.

As explained in [Conceptual Guides](https://www.stackbit.com/docs/conceptual-guides), if your site is pre-configured to work with a headless-CMS, such as Contentful, then your site's content model is already defined in these CMS. Stackbit will use that content model, so you won't need to define the same content model again in `stackbit.yaml`.

On the other hand, if your site does not use any headless-CMS and stores its content in plain files (md, JSON, YAML, etc.), you will need to define your site's content models in `stackbit.yaml` using [Models](https://www.stackbit.com/docs/reference/stackbit-yaml/models/) and [Fields](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/).

Read the following sections to learn how to configure `stackbit.yaml`

You can create and edit your Stackbit Content Model using the [Content Model screen](https://www.stackbit.com/docs/user-manual/modeling-content/) in the Stackbit Studio.
