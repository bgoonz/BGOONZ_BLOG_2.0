Object models describe arbitrary data that can be nested inside [Page Models](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/) or [Data Models](https://www.stackbit.com/docs/reference/stackbit-yaml/data-models/). Usually these models will describe page components such as header, sections, footer, etc. or common components such as buttons.

Object Models extend the [common properties](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#common_model_properties) defined in the base Model.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/#object_model_properties)Object Model Properties

In addition to the common properties, object models define the following properties:

-   **`labelField`:** the name of the field whose value will be used as an item label when the object represented by this model is used inside a list, or as field label when the object is referenced by another object.
-   **`extends`:** list of object models this object extends. The extended object will inherit from its parent all fields and their properties recursively. If the extended object already has a field with the same name as in the parent object, only the properties that resolve to undefined in the extended object will be copied.

To reference object models from within other models, use fields of type `model`.

## [](https://www.stackbit.com/docs/reference/stackbit-yaml/object-models/#example)Example

Example for generic page: