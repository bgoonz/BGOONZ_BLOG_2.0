Page Models describe the structure of your site's pages stored in markdown files (`.md`, `.mdx`, `.markdown`).

Page models extend all the [common properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#common_model_properties) and [model matching properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_matching_properties) defined in the base model.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_properties)Page Model Properties

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#hidecontent)`hideContent`

-   **Allowed values:** boolean
-   **Default value:** `false`
-   **Required:** false

Set to `true` for pages that should not have markdown content below the front-matter.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#urlpath)`urlPath`

-   **Allowed values:** a fixed or dynamic URL path
-   **Default value:** `/{slug}`
-   **Required:** false
-   **Example value:** `/blog/{slug}`

Stackbit uses the `urlPath` property to help users create pages and navigate their site.

This can either be a fixed path for page models that are matched to a single `file` or a dynamic pattern for page models that can have multiple pages. To create dynamic pattern use curly braces with tokens: `{title}`.

When using API-based CMS, the tokens should be named after fields available in the model. For example, a blog post model likely has a `slug` field representing the path to the specific post within the blog, so a `post` page model should contain a `slug` token inside `urlPath` - `/blog/{slug}`.

When using file-based content, the `slug` will be extrapolated from the [`filePath`](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#filepath). For example, if the `filePath` is `/blog/{slug}.md` and the file representing the blog post is stored at `/blog/hello.md`, the extrapolated `slug` will be `hello` and the interpolated `urlPath` will be `/blog/hello`.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#filepath)`filePath`

-   **Allowed values:** a file path pattern relative to `pagesDir`
-   **Default value:** computed by appending `.md` to `urlPath`. For the default `urlPath` the value will be `/{slug}.md`.
-   **Required:** false
-   **Example value:** `posts/{slug}.md`

Stackbit uses the `filePath` property to know where to store the new pages. You need to specify this property only when your project uses file-based content.

This can either be a fixed path for page models that are matched to a single `file` or a dynamic pattern for page models that can have multiple pages. To create dynamic pattern use curly braces with tokens: `{title}`.

For example, if your blog posts files are stored in the `blog` folder, you can use the `blog/{slug}.md` pattern. When creating a new blog post in Stackbit Studio, the `{slug}` token will be replaced with a string provided by the user, and the new page will be saved at `{pagesDir}/blog/{slug}.md`.

When the file paths of your page model correspond to their url paths, you don't need to specify `filePath`. For example, if your `pagesDir` is `content` and your page files correspond to their url path, there is no need to specify `filePath` (note `index.md` is always collapsed):

-   `content/index.md` => `/`
-   `content/about` => `/about`
-   `content/articles/index.md` => `/articles`
-   `content/articles/hello.md` => `/articles/foo`
-   `content/articles/world/index.md` => `/articles/world`

On the other hand, if page model files do not correspond to their url paths, you need to specify the correct `filePath`:

-   `_posts/hello.md` => `/blog/hello`
-   `_posts/world.md` => `/blog/world`

In this case, the urlPath would be `/blog/{slug}` and the `filePath` would be `_posts/{slug}.md`

**Note:** Please do not confuse `filePath` with model matching properties such as `file` and `folder`. The former is used by Stackbit to create new pages, while the later is used to match between models and files.

**Example**:

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#singleinstance)`singleInstance`

Should be set too `true` for models that should have only one page instance (e.g.: homepage).

**Example**

Assume a site with three pages represented by two models - `home` and `simple`:

We want our site editors to be able to create additional pages of the `simple` model, but not be able to create additional pages of the `home` model. Therefore, we can set `singleInstance: true` for `home` model and leaving the `simple` model to match all other files in the `content` folder. We also don't need to exclude `index.md` from `simple` model because when a file is marked as `singleInstance` in one model you don't need to exclude that file in other models.

`stackbit.yaml`

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties)Page Model Matching Properties

As described in the base [Model](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_matching_properties) documentation, the model matching properties are used to match the `models` defined in stackbit.yaml to files these models represent. Following are the page model matching properties that are used to match `page` models to markdown files.

For every markdown file, the model matching is executed in the following order and stopped as soon as one of the steps match one or more models:

-   A file is matched to any models with `file` property.
-   A file is matched to any models with `layout` property.
-   A file is matched to any models with `folder`, `match` and `exclude` properties.

If a file is matched to zero or more than 1 model, the file is left unmatched. You can calidate that all of your content files match exactly one model by running the [`stackbit validate`](https://www.stackbit.com/docs/reference/stackbit-cli/#validate) CLI command.

**Note:** If your project is configured to work with an external headless-CMS, you don't need to specify these properties. Stackbit will use CMS data to do the model matching.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#file)`file`

Setting the `file` of your model to a file path, will match that model to that file and that file only. The value of the `file` should be a file path relative to the `pagesDir` folder.

The `file` property cannot be combined with other model matching properties.

The `file` is required if [`singleInstance: true`](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#singleinstance) and vice versa.

**Example**

The `home` model will match the `content/index.md` file only.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#layout)`layout`

Setting the `layout` of your model will match that model to all pages having the same value in a field specified by [`pageLayoutKey`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagelayoutkey).

You can think of the `layout` field as a simple "by value" matcher. The name of the field by which pages will be matched is specified using the [`pageLayoutKey`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagelayoutkey). The default `layout` value is undefined meaning no matching by `layout` will be done.

Historically, we called this property `layout` because some static site generators like Hugo, [Jekyll](https://jekyllrb.com/docs/step-by-step/04-layouts/#use-layouts) and [Eleventy](https://www.11ty.dev/docs/layouts/), provide a way to define the "layout", or the "type", of pages using the frontmatter's `layout` field. The assumption is that pages having the same `layout` would share the same model and fields. Of course the name of the frontmatter's field by which the page model is matched does not have to be `layout`, you can define any other field to be used to match pages using the [`pageLayoutKey`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagelayoutkey).

For example, in the "Gatsby Starter Foundation" the page's `template` field is used to [select the React template for the page](https://github.com/stackrole/gatsby-starter-foundation/blob/v1.0.0/gatsby-node.js#L46-L48). By its nature, every React component has its own set of props. Therefore, it is safe to assume that every React template component can be described by its own model with predefined set of fields. To match pages to models by their `template` field we can set the [`pageLayoutKey`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagelayoutkey) to `template` and then set the `layout` of every model to match the `template` value of pages they describe. This way, pages having the same `template` value as model's `layout` value will be matched to that model:

`src/content/pages/about.md`:

`src/content/pages/contact.md`:

`stackbit.yaml`:

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#folder)`folder`

Setting the `folder` of your model to a folder path, will match that model to all markdown files within that folder. The value of the `folder` should be a folder path relative to the `pagesDir`.

The default value for `folder` is an empty string, meaning if the `folder` is not set it will match all files within the `pagesDir`.

The `folder` can be combined with the `match` and the `exclude` properties to fine tune the model matching. The `match` and `exclude` are glob patterns, or array of glob patterns, relative to the specified `folder`. For example, if the `folder` value is set to `posts` and the `match` value is `["index.md", "about.md"]`, the content model would match `posts/index.md` and `posts/about.md`.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

The `blog` model will match all files inside the posts folder except the `index.md` file.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#match)`match`

A glob pattern, or array of glob patterns used to match page files. The glob pattern is relative to a folder specified in the `folder` property. The default value is `**/*`, which will match all files in all subfolders within the specified `folder`.

The following examples all achieve the same match:

Internally the "[micromatch](https://github.com/micromatch/micromatch)" NPM module is used to match the files.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

The `simple` model will match all files having the `.md` extensions that are the direct children of the `content` folder:

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#exclude)`exclude`

A glob pattern, or array of glob patterns used to exclude page files from being matched. The glob pattern is relative to a folder specified in the `folder` property. The default value is undefined, which will not exclude any files.

Internally the "[micromatch](https://github.com/micromatch/micromatch)" NPM module is used to match the files.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

The `simple` model will match all files having the `.md` extensions that are the direct children of the `content` folder excluding the `index.md` file:

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#example)Example

To better understand how a page model describes a page, let's look at the following example. In this example, all markdown pages are stored inside the `content` folder. The `content` folder has several root pages as well as an `articles` folder containing all the articles of our site.

All site pages can be grouped into 3 types, each represented by its own model:

-   The home page, stored as `index.md` file. This page will be represented by the `home` model.
-   The "other" pages, stored as `about.md` and `contact.md` files. These pages will be represented by the `simple_page` model.
-   The "article" pages, stores in the `articles` folder. These pages will be represented by the `article` model.

Every page type has its own set of fields that is shared among pages of the same type. For example, the following markdown page is one of these articles stored in `content/articles/article-1.md` file. This page has 3 fields shared among all other articles:

To describe our page models, we would need to create the following `stackbit.yaml` file: