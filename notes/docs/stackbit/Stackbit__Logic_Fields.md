Models describe your site's content structure. Models are defined inside the [`models`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#models) property if the `stackbit.yaml`. The `models` is an object where its keys represent the model names and values are the model definitions.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_types)Model Types

Every model must belong to one of three types:

-   [Page Models](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) (`type: page`) describe the pages of your site stored in markdown files (e.g. `.md`, `.mdx`, `.markdown`).
-   [Data Models](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/) (`type: data`) describe the arbitrary data of your site stored in data files (e.g. `.yml`, `.yaml`, `.toml`, `.json`).
-   [Object Models](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/) (`type: object`) describe the objects that can be nested within other objects of Page and Data models.

Example (for simplicity, all model properties except `type` were omitted):

**Note:** If your project is configured to work with an external headless-CMS, Stackbit will fetch the models from these headless-CMS. Therefore, all you need to specify is which of your models are pages (i.e., `type: page`) and their `urlPath`.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#choosing_a_model_type)Choosing a model type

#### Page

Choose [page](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) when each data record will be stored in a standalone file and will correspond to a unique URL on your web site.

#### Data

Choose [data](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/) for standalone data files that do not correspond to URLs on your site.

#### Object

[Objects](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/) are useful when you need to define a complex data model, but standalone files _(e.g. `home-hero.json`, `about-hero.json`, and `contact-hero.json` page sections)_ could clutter the content authoring experience.

**Tip:** You can nest any of the three model types inside another.

-   To nest a [page](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) or [data](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/) file, link to its filepath with a [`reference`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#reference_field) field.
-   To nest an [object](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/), refer to its definition with a [`model`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#model_field) field.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_naming_rules)Model Naming Rules

As shown in the previous example, models are named as keys within the YAML file and must adhere to the following rules:

-   Must start with and end with a letter
-   Can contain only _lower case_ alphanumeric characters or underscores `_`

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#common_model_properties)Common Model Properties

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#type)`type`

-   **Allowed values:** `page`, `data`, `object`
-   **Required:** true

The type of the model.

**Example**

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#label)`label`

-   **Allowed values:** string
-   **Required:** true

A short, descriptive name for the model. For example if you were creating a page model for a blog page you might use the label "Blog" but you could also use "Article". The model label is displayed besides the name of the content item.

**Example**

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#description)`description`

-   **Allowed values:** string
-   **Required:** false

Description of the model.

**Example**

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#fields)`fields`

-   **Allowed values:** list of [Fields](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/)
-   **Required:** true (forbidden for `data` models with `isList: true`)

The fields that that make up the data within the model.

**Example**

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_matching_properties)Model Matching Properties

Model matching properties are applicable to [Page Models](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) and [Data Models](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/) only. They are used to match the `models` defined in `stackbit.yaml` to content files these models represent. When Stackbit loads your content files, it needs to know which files belong to which models. The process that matches models to content files is called **Model Matching**. To let Stackbit do the model matching, your models should specify the "Model Matching Properties":

-   `file` - matches a model to a single file relative to `pagesDir` for `page` models or `dataDir` for `data` models. Default is undefined.
-   `layout` - matches a model to all pages having the same value in a field specified by the [`pageLayoutKey`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagelayoutkey). Applicable for `page` models only. Default is undefined.
-   `folder` - matches a model to all files inside a folder relative to `pagesDir` for `page` models or `dataDir` for `data` models.
-   `match` - additional filter that matches file glob(s) relative to the `folder`. Default is all files `**/*`
-   `exclude` - additional filter that excludes file glob(s) relative to the `folder`. Default is undefined.

To learn more about model matching properties visit [Page Model Matching Properties](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties) or [Data Models Matching Properties](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_model_matching_properties).

**Note:** If your project is configured to work with an external headless-CMS, you don't need to specify these properties. Stackbit will use CMS data to do the model matching.

Every content file in your site within the [`pagesDir`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagesdir) or the [`dataDir`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#datadir) must match a single model. If a file matches multiple models you will get a validation error when running [`stackbit validate`](https://www.stackbit.com/docs/reference/stackbit-cli/#validate) CLI command.

You may use the global [`excludePages`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#excludepages) to exclude files from being loaded and matched to any model.

**Example**

Assume your site has three types of pages represented by three `page` models - `index`, `post` and `project`. The `post` and `project` pages are located inside `posts` and `projects` folders respectively, and the `index` pages can be located in any folder:

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#examples)Examples

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#project_without_a_headless_cms)Project without a headless-CMS

Assume your site has several post files inside the `content/posts` folder with two properties - `title` and `featured_image`, and another `settings.yaml` file inside the `data` folder:

To model your content you will need to define two models in your `stackbit.yaml`. One model of type `page` called `post` representing your post pages and another model of type `data` called `settings` representing the settings.yaml file. Inside each of these models you will need to define several model properties describing your models and the `fields` of your content files.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#project_with_a_headless_cms)Project with a headless-CMS

As noted before, if your site is configured to work with an external headless-CMS, Stackbit will read the models from that CMS. Therefore, all you need to specify in `stackbit.yaml` is the types of your models (i.e., `type: page`, `type: data`). If your content is file-based then you also need to specify the [`urlPath`](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#urlpath) and [`filePath`](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#filepath) for your page models.

The name of the model in `stackbit.yaml` must match the name of the model in the external CMS.