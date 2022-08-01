# Intl.ListFormat

The `Intl.ListFormat` object enables language-sensitive list formatting.

## Constructor

[`Intl.ListFormat()`](listformat/listformat)  
Creates a new `Intl.ListFormat` object.

## Static methods

[`Intl.ListFormat.supportedLocalesOf()`](listformat/supportedlocalesof)  
Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

[`Intl.ListFormat.prototype.format()`](listformat/format)  
Returns a language-specific formatted string representing the elements of the list.

[`Intl.ListFormat.prototype.formatToParts()`](listformat/formattoparts)  
Returns an array of objects representing the different components that can be used to format a list of values in a locale-aware fashion.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

    const list = ['Motorcycle', 'Bus', 'Car'];

     console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
    // > Motorcycle, Bus and Car

     console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
    // > Motorcycle, Bus or Car

     console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
    // > Motorcycle Bus Car

### Using formatToParts

The following example shows how to create a List formatter returning formatted parts

    const list = ['Motorcycle', 'Bus', 'Car'];
    console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).formatToParts(list));

    // [ { "type": "element", "value": "Motorcycle" },
    //   { "type": "literal", "value": ", " },
    //   { "type": "element", "value": "Bus" },
    //   { "type": "literal", "value": ", and " },
    //   { "type": "element", "value": "Car" } ];

## Polyfill

[formatjs Intl.ListFormat polyfill](https://formatjs.io/docs/polyfills/intl-listformat)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#listformat-objects">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#listformat-objects</span></a></td></tr></tbody></table>

`ListFormat`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`ListFormat`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`format`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`formatToParts`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`resolvedOptions`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`supportedLocalesOf`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

## See also

-   [`Intl`](../intl)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat</a>
