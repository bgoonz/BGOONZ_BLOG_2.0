Parsley
-------

### Installing via NPM

    npm install --save parsleyjs

[parsleyjs](https://www.npmjs.com/package/parsleyjs) is the Parsley form validator. (‘parsley’ is a different package)

### Enabling

#### via HTML

    <form data-parsley-validate>
        <!-- ✗ not preferred -->
    </form>

#### via JavaScript

    $('#form').parsley(/* options */);

It’s preferable to explicitly call `$.fn.parsley()`.

### API

#### Form

    $('#myform')
        .parsley()
        .isValid() // → true | null
        .validate()
        .reset()
        .destroy();

#### Input

    $('#myform input').parsley().isValid().validate(); // returns errors

### Validators

    <input ... />

#### Required

    required

#### Types

    type='email'

    type='url' data-parsley-type='url'

#### Length

    maxlength='6' data-parsley-maxlength='6' minlength='10' data-parsley-minlength='10'

#### Numeric

    pattern='\d+' data-parsley-pattern='\d+'

    type='number' data-parsley-type='number' data-parsley-type='integer' data-parsley-type='digits' data-parsley-type='alphanum'

#### Range

    type='range' data-parsley=range='[6, 10]'

    max='10' data-parsley-max='10' min='6' data-parsley-min='6'

#### Checkboxes

    data-parsley-mincheck='1' data-parsley-maxcheck='3' data-parsley-check='[1, 3]'

#### Confirmation

    data-parsley-equalto='#confirm'

Options
-------

### Form options

    // Supported & excluded inputs by default
    inputs: 'input, textarea, select';
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]';

    // Stop validating field on highest priority failing constraint
    priorityEnabled: true;

See: [Options](http://parsleyjs.org/doc/annotated-source/defaults.html)

### Field options

    // identifier used to group together inputs
    // (e.g. radio buttons…)
    multiple: null;

    // identifier (or array of identifiers) used to
    // validate only a select group of inputs
    group: null;

These options are only available for fields.

### UI Options

    // Enable/disable error messages
    uiEnabled: true;

    // Key events threshold before validation
    validationThreshold: 3;

    // Focused field on form validation error. ‘first'|'last'|'none'
    focus: 'first';

    // $.Event() that will trigger validation. eg: keyup, change…
    trigger: false;

    // Class that would be added on every failing validation
    // Parsley field
    errorClass: 'parsley-error';
    successClass: 'parsley-success';

    // Return the $element that will receive these above
    // success or error classes. Could also be (and given
    // directly from DOM) a valid selector like '#div'
      classHandler: function (ParsleyField) {}

    // Return the $element where errors will be appended.
    // Could also be (and given directly from DOM) a valid
    // selector like '#div'
      errorsContainer: function (ParsleyField) {}

    // ul elem that would receive errors' list
    errorsWrapper: '<ul class="parsley-errors-list"></ul>';

    // li elem that would receive error message
    errorTemplate: '<li></li>';

Examples
--------

### Custom container

    $('[data-parsley]').parsley({
        errorsContainer(field) {
            return field.$element.closest('.block, .control');
        }
    });

Appends the error to the closest `.block` or `.control`.

### Custom markup

    $('[data-parsley]').parsley({
        errorClass: '-error',
        successClass: '-success',

        errorsWrapper: '<ul class="parsley-error-list"></ul>',
        errorTemplate: '<li class="parsley-error"></li>'
    });

Uses custom markup.

### Custom fields

    $('[data-parsley]').parsley({
        classHandler(field) {
            const $parent = field.$element.closest('.input-group');
            if ($parent.length) return $parent;

            return field.$element;
        }
    });

Applies the `errorClass` and `successClass` to the closest `.input-group`, if available.

### Custom validator

#### HTML

    <input type="text" data-parsley-multiple-of="3" />

#### JavaScript

    window.Parsley.addValidator('multipleOf', {
        // string | number | integer | date | regexp | boolean
        requirementType: 'integer',

        // validateString | validateDate | validateMultiple
        validateNumber(value, requirement) {
            return 0 === value % requirement;
        },

        messages: {
            en: 'This value should be a multiple of %s'
        }
    });

See: [Custom validators](http://parsleyjs.org/doc/index.html#custom)

Also see
--------

-   [Parsley documentation](http://parsleyjs.org/doc/) *(parsleyjs.org)*
