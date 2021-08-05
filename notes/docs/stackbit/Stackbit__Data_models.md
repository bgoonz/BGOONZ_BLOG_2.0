Data models describe the structure of your site's data files (`.json`, `.yaml`, `.toml`). Common examples for such files might be a `data/nav.json` that contains the site's navigation menu configuration or a `data/authors` folder containing `jane.json`, `john.json`, and other blog post authors.

Data Models extend all the [common properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#common_model_properties) and several [model matching properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_matching_properties) defined in the base model.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_model_properties)Data Model Properties

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#islist)`isList`

-   **Allowed values:** boolean
-   **Default value:** `false`
-   **Required:** false

A boolean flag specifying if the outermost level of data stored in a file described by this model is a list.

-   When omitted or set to `false`, use the model's [`fields`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#field_properties) property to specify its structure.
-   When set to `true`, use the model's [`items`](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#items) property to specify the data types of items in the list.

See [Array data files](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#array_data_files) for an example.

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#items)`items`

-   **Allowed values:** Anything that is allowed for the `items` property of a [`list`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#list_field) field
-   **Default value:** undefined
-   **Required:** required if [`isList`](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#islist) is set to `true`

An object specifying the data types of items listed in a data file whose root structure is an array. A data model's `items` property has the same format as the `items` property in a [`list`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#list_field) field.

See [Array data files](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#array_data_files) for an example.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_model_matching_properties)Data Model Matching Properties

Data model matching properties are very similar to [page model matching](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties). With two exceptions:

1.  All data model matching properties are relative to `dataDir` _(be sure to specify one)_.
2.  The `layout` matching property is not available for data models.

The following are data model matching properties:

-   `file` - matches a model to a single file relative to the `dataDir`. Cannot be combined with other matching properties. Default is undefined.
-   `folder` - matches a model to all files inside a folder relative to the `dataDir`. The default value for `folder` is an empty string, which will match all data files in `dataDir`. This value can be combined with the `match` and `exclude` properties to fine tune the files to match.
-   `match` - additional filter that matches file glob(s) relative to the `folder`. Default is all files `**/*`
-   `exclude` - additional filter that excludes file glob(s) relative to the `folder`. Default is undefined.

Visit [page model matching properties](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties) for examples.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#examples)Examples

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_in_the_root_folder)Data in the root folder

If your site's files aren't all contained within a folder like `_data`, you can set `dataDir` to an empty string and specify `file` or `folder` relative to the root folder.

`stackbit.yaml`:

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_file_folders_and_references)Data file folders and references

If part of your site's content model is best suited to storing one data record per file, you may find it useful to group related data files by using the `folder` [data model matching property](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_model_matching_properties) instead of `file`.

For example, to credit a blog post, you could point a [`reference`](https://www.stackbit.com/docs/reference/stackbit-yaml/fields/#reference_field) field to its author's individual data file within an `authors` folder.

`jane.json`:

`john.json`:

`content/posts/using-stackbit-effectively.md`:

`stackbit.yaml`:

A static site generator template can transform the page's `author` data into a byline:

### [](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#array_data_files)Array data files

If you need to model a type of data file whose root structure is an array, set [`isList`](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#islist) to `true` and define list items' schemas with [`items`](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#items).

Array data files are suited to storing collections of data whose records don't each need an independently referenceable file, such as the items in a navigation menu.

`nav.json`:

`stackbit.yaml`:

An `_includes/navigation.html` static site generator component might render your navigation menu with a loop over `_data/nav.json`:
