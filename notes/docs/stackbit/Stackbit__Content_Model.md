## [](https://www.stackbit.com/docs/conceptual-guides/content-model/#what_is_content_model_and_why_do_i_need_one)What is Content Model, and why do I need one?

The content model describes the structure of your website's content. Stackbit uses your website's content model to allow you to edit your site's content within the [site preview](https://www.stackbit.com/docs/conceptual-guides/site-preview).

For example, assume your site's blog posts are stored in markdown files with three fields in the frontmatter - "title", "image" and "tags", and with the post content in the body of the markdown file like this:

The content model of the blog post would describe the names and types of blog post fields:

![Post Content Model](https://www.stackbit.com/docs/static/9ee29401e77f1734a4aa3ff5a6aaa6a9/fb933/content-model-post.png 'Post Content Model')

By knowing your site's content model, Stackbit can provide an "on-page" editing experience **without any additional changes to your site's code**.

![Post Preview and Editing using Content Model](https://www.stackbit.com/docs/static/d2761704c855589f9e6da23c18a3d55a/8c557/content-model-post-preview-editor.png 'Post Preview and Editing using Content Model')

Of course, the names and the types of post fields are the bare minimum your content model should have. Depending on the CMS you use, you can also specify the field labels, descriptions, validation rules, and other aspects of your content model.

Your site's content doesn't have to be stored in files. If your site is powered by an API-based CMS, your content and the content model are stored within the CMS. In this case, Stackbit will use the content and the content model defined within the CMS.

As noted above, there are two ways for Stackbit to get your site's content model - from an external CMS or from `stackbit.yaml`. The next section explains these two concepts.

## [](https://www.stackbit.com/docs/conceptual-guides/content-model/#external_content_model)External Content Model

### [](https://www.stackbit.com/docs/conceptual-guides/content-model/#file_based_cms)File-Based CMS

If your site uses file-based CMS, then your site's content model should be defined in CMS specific configuration files. Stackbit will read these configuration files and get the content-model from there. So you won't need to define the content model in `stackbit.yaml`, but only specify which CMS you use.

For example, if your site uses [NetlifyCMS](https://www.netlifycms.org/) as its CMS, your content model is defined within the NetlifyCMS's `config.yml` file. Stackbit will read NetlifyCMS configuration and use the content model from there.

![File based CMS content model](https://www.stackbit.com/docs/2968a013975f283ee805b092b68275a2/content-model-file-based-cms.svg)

### [](https://www.stackbit.com/docs/conceptual-guides/content-model/#api_based_cms)API-Based CMS

If your site uses API-based CMS, then your site's content model is defined within that CMS. Stackbit will fetch the content model via CMS API.

For example, if your site uses Contentful, the content model is defined within Contentful. Stackbit will fetch the content model via Contentful API.

![API based CMS content model](https://www.stackbit.com/docs/4dcda6382bf91fd118710fdab1b37623/content-model-api-based-cms.svg)

**☝️ Note:** in the case of Sanity CMS, the content of your site is stored in Sanity, but the content model is defined within configuration files of Sanity Studio similar to other File-Based CMS's. Therefore, Stackbit will load your site's content model from Sanity Studio configuration files.

**☝️ Note:** even though you don't need to define your site's entire content model in `stackbit.yaml` you still need to define the types of your models and the URL path of your page models. For more info, visit the [`models`](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#example_for_project_with_a_headless_cms) documentation.

## [](https://www.stackbit.com/docs/conceptual-guides/content-model/#stackbit_content_model)Stackbit Content Model

If your project does not use any headless-CMS and stores the content in plain files (.md, .json, .yaml, etc.), you can define your site's content models in [`stackbit.yaml`](https://www.stackbit.com/docs/reference/stackbit-yaml) using [Models](https://www.stackbit.com/docs/reference/stackbit-yaml/models/) and [Fields](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/).

You can create and edit your Stackbit Content Model using the [Content Model screen](https://www.stackbit.com/docs/user-manual/modeling-content/) in the Stackbit Studio.

![Stackbit content model](https://www.stackbit.com/docs/6a6719cdca1a3bd214804a9de9cdd091/content-model-stackbit.svg)

Continuing the previous example, the post's model in `stackbit.yaml` could be defined in the following way:
