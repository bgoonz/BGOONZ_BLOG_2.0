In this section, we'll cover:

-   [Introduction](https://www.stackbit.com/docs/user-manual/modeling-content/#introduction)
-   [Models](https://www.stackbit.com/docs/user-manual/modeling-content/#models)
-   [Fields](https://www.stackbit.com/docs/user-manual/modeling-content/#fields)
-   [File matching](https://www.stackbit.com/docs/user-manual/modeling-content/#file_matching)

## [](https://www.stackbit.com/docs/user-manual/modeling-content/#introduction)Introduction

Modeling the content of a site that uses a [Stackbit Content Model](https://www.stackbit.com/docs/conceptual-guides/content-model/#stackbit_content_model) is essential to giving your content editors the best experience when adding and editing pages.

The "Content Model" screen is reachable from the Code mode of the Studio and is available to any site, whether built with Stackbit or imported, that doesn't use an external CMS.

![content model directions](https://www.stackbit.com/docs/images/content-model-directions.png)

The file that contains the content model is the [stackbit.yaml file](https://www.stackbit.com/docs/reference/stackbit-yaml/) file. If your site does not have a stackbit.yaml file yet, Stackbit will automatically generate it for you. The same mechanism is used in the Stackbit CLI command [stackbit init](https://www.stackbit.com/docs/reference/stackbit-cli/#init).

![content model generate](https://www.stackbit.com/docs/images/content-model-generate.png)

The "Content Model" screen can be seen below. It is divided into three sections.

-   The left-hand section lists all models by type and the content that they model. Selecting a model or a content item in the left-hand section will update the middle and right-hand sections to present the selected item.
-   The middle section shows all the model options and the field list of the model. As you make changes to the model and its fields, you will receive feedback in the form of validation errors next to the invalid options. These are the same errors that you can get from the Stackbit CLI command [stackbit validate](https://www.stackbit.com/docs/reference/stackbit-cli/#validate).
-   The right-hand section is a tabbed view of the content item currently selected, which can be used as a reference as you update the model, and a preview of how the model will be encoded in the stackbit.yaml file. If the model does not fit the selected content item, a list of warnings will appear above the content item in the right-hand section and the relevant lines will be highlighted.

![content model overview](https://www.stackbit.com/docs/images/content-model-overview.jpg)

## [](https://www.stackbit.com/docs/user-manual/modeling-content/#models)Models

Each model describes a set of content items in the Jamstack site.

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#types_of_models)Types of models

-   [Page models](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) describe the structure of site pages stored in Markdown files. You can read about [page model file matching](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties) in the stackbit.yaml reference.
-   [Data models](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/) describe the structure of the data files stored as JSON, TOML or YAML files. Common examples might be a `data/footer.json` that contains the site's footer configuration or `authors.json` that contains a list of blog post authors. You can read about [data model file matching](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/#data_model_matching_properties) in the stackbit.yaml reference.
-   The config model is very similar to data models, but it describes a site configuration file that is used by the SSG instead of being used by pages.
-   [Object models](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/) describe arbitrary data that can be nested inside page models or data models. Usually these models will describe page components such as Header, Sections, Footer, etc. or common components such as Buttons.

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#adding_a_model)Adding a model

New models can be added by clicking the "Add Model" button above the model list.

![content model add model](https://www.stackbit.com/docs/images/content-model-add-delete-model.png)

You will be prompted to choose the type of model you want to create:

![](https://www.stackbit.com/docs/images/content-model-type.jpg)

When you add a new page model, it will instantly become available in the 'Content' tab when you tap on 'Add page':

![content model new page](https://www.stackbit.com/docs/images/content-model-new-page-available.jpg)

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#editing_a_model)Editing a model

You can edit models by tapping the name model on the left side navbar and then editing its fields in the central panel. As part of editing a model, you may want to change its name (not available yet), edit its fields, [add new fields to it](https://www.stackbit.com/docs/user-manual/modeling-content/#adding_fields), or even merge models as described below.

#### 'Merging' models

Existing models can be very similar, specially if your site have autogenerated your schema (content model) using [Stackbit CLI](https://www.stackbit.com/docs/reference/stackbit-cli/). For example, you may have two different page models one called 'page1' and 'page2' where they have exactly the same fields except 'page2' has two additional fields: author and link.

![Page Model - Page 1](https://www.stackbit.com/docs/images/page-model-page1.jpg)![Page Model - Page 2](https://www.stackbit.com/docs/images/page-model-page2.jpg)

In order to 'merge' these two models, you will want to keep the model with more fields, in our example 'page2', [match the pages currently matched to the 'page1' model to the 'Page 2'](https://www.stackbit.com/docs/user-manual/modeling-content/#file_matching), and then you will be able to delete the 'page1' model.

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#deleting_a_model)Deleting a model

Existing models can be deleted by clicking the delete icon next to the model name as long as there are no content files matched or referencing this model. If that's the case, the matched content files need to be deleted or unlinked first.

![content model delete model](https://www.stackbit.com/docs/images/content-model-delete-model.jpg)

## [](https://www.stackbit.com/docs/user-manual/modeling-content/#fields)Fields

Model fields define the individual fields that make up a particular model. Model fields describe the name, and the type of the data fields, stored in the front-matter of markdown files, and in JSON/TOML/YAML files. As well as their presentation and behavior inside the editing interface of the Stackbit Studio.

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#adding_fields)Adding fields

Adding fields can be done by clicking the "Add Field" button at the bottom of the field list. Field settings can be edited by clicking the settings/gear icon in the field row.

![content model add field](https://www.stackbit.com/docs/images/content-model-add-field.jpg)

There are multiple reasons why you may need to add fields to a model. Here are a a couple of the most common ones:

#### Adding a new field to an existing model

Imagine you have a 'Product' page model with title, description, image, price, and link fields. And now you want to introduce product ratings. From a content modeling perspective, you will need to add a new field to the 'Product' model, give it a name, for example 'rating', and indicate the type, let's say 'number', because you're going to ask buyers to rate the product from 1 to 5.

Go to the product model, tap on 'Add field', and create the new field as shown in the first image below. After you finish, you should see the new field added to your 'Product' page model as shown in the second image.

![](https://www.stackbit.com/docs/images/model-fields-add-rating-field.jpg)![](https://www.stackbit.com/docs/images/model-fields-add-rating.jpg)

Now, you are ready to start using the new 'rating' field on your product pages.

###### Adding an existing field to an existing model

Existing content may contain data that is not defined in the model. Amongst other things, when this happens, this will prevent that field from being editable on Stackbit. In order to make content editable on Stackbit, you need to model that content. Let's see an example.

You have a content file, a post, and its front matter looks like this:

But the page model for a 'Post' is missing the 'subtitle' field:

![](https://www.stackbit.com/docs/images/content-model-missing-fields.jpg)

By adding the subtitle field to the 'Post' model you will now be able to edit that filed on Stackbit:

![content model edit fields](https://www.stackbit.com/docs/images/content-model-edit-fields.jpg)

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#deleting_a_field)Deleting a field

Fields can be deleted by clicking the delete icon in the field row.

![content model delete field](https://www.stackbit.com/docs/images/content-model-delete-field.jpg)

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#ordering_fields)Ordering fields

Fields can be re-ordered clicking the three dots at the beginning of the field row.

![content model order fields](https://www.stackbit.com/docs/images/content-model-order-fields.jpg)

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#referencing_an_object)Referencing an object

The same way you can add a new field to a model, you can also add a reference to another object. In order to do so, tap on 'Add field', select type 'Object', and give it a name. For example, I am going to add 'comments'- with title and comment- to my 'post' page model.

![](https://www.stackbit.com/docs/images/content-model-object-ref.jpg)

Once you've added the new field of type object, you'll see a button to add fields to that object:

![add a field to an object](https://www.stackbit.com/docs/images/add-field-object.jpg)

Add your fields, and voilà.

![object reference fields](https://www.stackbit.com/docs/images/obj-ref-fields.jpg)

### [](https://www.stackbit.com/docs/user-manual/modeling-content/#multiple_references)Multiple references

In the previous example, we added a reference to an object called 'comments' in our 'post' page model. However, this means we are only allowing one comment per post, and we probably want to allow multiple comments per post. In order to achieve that, we need to create a list of models instead. See steps below:

First, create a data model for comments. We're going to call it 'comment' and add its fields, in this case 'title' and 'comment'.

![](https://www.stackbit.com/docs/images/data-model-comments.jpg)

Next, Add a new field to your 'post' page model, but instead of choosing type 'object' as in the previous example, select 'list' as a field type. This will allow us to select a list of elements.

![](https://www.stackbit.com/docs/images/list-of-models.jpg)

Now, choose 'model' as the element to list, and indicate which one of your models to list, in this case the one we just created called 'comment'.

![](https://www.stackbit.com/docs/images/list-of-references-models.jpg)

This is also very helpful when creating landing pages and making sections available (e.g. hero section, features section, grid section, etc.) like in this case:

![](https://www.stackbit.com/docs/images/list-models-landing-page.jpg)

## [](https://www.stackbit.com/docs/user-manual/modeling-content/#file_matching)File matching

Models describe the structure of your content files. In order for Stackbit to correctly match your content files to their respective models, you need to provide [Model Matching Properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#model_matching_properties).

![](https://www.stackbit.com/docs/images/file-matching-layout.jpg)

Click the following links to learn more about each property in the Model Matching section:

-   [Layout Name](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#layout)
-   [File Path](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#filepath)
-   [Folder Path](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#folder)
-   [Match Pattern](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#match)
-   [Exclude Pattern](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#exclude)