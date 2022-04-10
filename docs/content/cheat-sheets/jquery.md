### Traversing

    $('.box').children().closest('div').filter(':selected').find('div').has('div').first().next('div').nextUntil('div');

Advanced features
-----------------

### Extending selectors

    $.expr[':'].inline = function (el) {
        return $(el).css('display') === 'inline';
    };

Enables `$(':inline')`

### Extend CSS properties

    $.cssHooks.someCSSProp = {
        get: function (elem, computed, extra) {},
        set: function (elem, value) {}
    };

    // Disable "px"
    $.cssNumber['someCSSProp'] = true;

### fn.animate() hooks

    $.fn.step.someWhatever = function (fx) {
        // ...
    };
