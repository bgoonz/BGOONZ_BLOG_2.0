---
title: Media Querries
template: docs
---

---
## [Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax "Permalink to Syntax")

A media query is composed of an optional _media type_ and any number of _media feature_ expressions, which may optionally be combined in various ways using _logical operators_. Media queries are case-insensitive.

-   [Media types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types) define the broad category of device for which the media query applies: `all`, `print`, `screen`. The type is optional (assumed to be `all`) except when using the `not` or `only` logical operators.
-   [Media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) describe a specific characteristic of the [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent), output device, or environment: [`any-hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover), [`any-pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer), [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio), [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color), [`color-gamut`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut), [`color-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index), [`device-aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-aspect-ratio) Deprecated , [`device-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-height) Deprecated , [`device-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-width) Deprecated , [`display-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode), [`forced-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors), [`grid`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid), [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height), [`hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover), [`inverted-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors), [`monochrome`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome), [`orientation`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation), [`overflow-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block), [`overflow-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline), [`pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer), [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast), [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [`resolution`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution), [`scripting`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting), [`update`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update-frequency), [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) For example, the [`hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) feature allows a query to test against whether the device supports hovering over elements. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.
-   [Logical operators](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators) can be used to compose a complex media query: `not`, `and`, and `only`. You can also combine multiple media queries into a single rule by separating them with commas.

A media query computes to `true` when the media type (if specified) matches the device on which a document is being displayed _and_ all media feature expressions compute as true. Queries involving unknown media types are always false.

**Note:** A style sheet with a media query attached to its [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag [will still download](https://scottjehl.github.io/CSS-Download-Tests/) even if the query returns `false`, the download will happen but the priority of downloading will be much lower. Nevertheless, its contents will not apply unless and until the result of the query changes to `true`. You can read why this happens in Tomayac's blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

Media types describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screenreaders. For example, this CSS targets printers:

You can also target multiple devices. For instance, this `@media` rule uses two media queries to target both screen and print devices:

```
@media screen, print { ... }
```

See [media type](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types) for a list of all media types. Because they describe devices in only very broad terms, just a few are available; to target more specific attributes, use _media features_ instead.

Media features describe the specific characteristics of a given [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent), output device, or environment. For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions. This example applies styles when the user's _primary_ input mechanism (such as a mouse) can hover over elements:

```
@media (hover: hover) { ... }
```

Many media features are _range features_, which means they can be prefixed with "min-" or "max-" to express "minimum condition" or "maximum condition" constraints. For example, this CSS will apply styles only if your browser's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport) width is equal to or narrower than 12450px:

```
@media (max-width: 12450px) { ... }
```

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not zero (or `none`, in Level 4). For example, this CSS will apply to any device with a color screen:

If a feature doesn't apply to the device on which the browser is running, expressions involving that media feature are always false.

For more [Media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) examples, please see the reference page for each specific feature.

Sometimes you may want to create a media query that depends on multiple conditions. This is where the _logical operators_ come in: `not`, `and`, and `only`. Furthermore, you can combine multiple media queries into a _comma-separated list_; this allows you to apply the same styles in different situations.

In the previous example, we've already seen the `and` operator used to group a media _type_ with a media _feature_. The `and` operator can also combine multiple media features into a single media query. The `not` operator, meanwhile, negates a media query, basically reversing its normal meaning. The `only` operator prevents older browsers from applying the styles.

**Note:** In most cases, the `all` media type is used by default when no other type is specified.

However, if you use the `not` or `only` operators, you must explicitly specify a media type.

### [Combining multiple types or features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#combining_multiple_types_or_features "Permalink to Combining multiple types or features")

The `and` keyword combines a media feature with a media type _or_ other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:

```
@media (min-width: 30em) and (orientation: landscape) { ... }
```

To limit the styles to devices with a screen, you can chain the media features to the `screen` media type:

```
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### [Testing for multiple queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#testing_for_multiple_queries "Permalink to Testing for multiple queries")

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portrait mode:

```
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

### [Inverting a query's meaning](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#inverting_a_querys_meaning "Permalink to Inverting a query's meaning")

The `not` keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The `not` keyword can't be used to negate an individual feature query, only an entire media query. The `not` is evaluated last in the following query:

```
@media not all and (monochrome) { ... }
```

... so that the above query is evaluated like this:

```
@media not (all and (monochrome)) { ... }
```

... rather than like this:

```
@media (not all) and (monochrome) { ... }
```

As another example, the following media query:

```
@media not screen and (color), print and (color) { ... }
```

... is evaluated like this:

```
@media (not (screen and (color))), print and (color) { ... }
```
