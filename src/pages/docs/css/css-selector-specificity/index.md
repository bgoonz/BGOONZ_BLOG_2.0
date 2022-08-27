---
title: CSS Selector Specificity
template: docs
excerpt: Specificity is a weight that is applied to a given CSS declaration
---

# Specificity

**Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#selectors).

## [How is specificity calculated?](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated 'Permalink to How is specificity calculated?')

Specificity is a weight that is applied to a given CSS declaration, determined by the number of each [selector type](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#selector_types) in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, [directly targeted elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#directly_targeted_elements_vs._inherited_styles) will always take precedence over rules which an element inherits from its ancestor.

**Note:** [Proximity of elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#tree_proximity_ignorance) in the document tree has no effect on the specificity.

### [Selector Types](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#selector_types 'Permalink to Selector Types')

The following list of selector types increases by specificity:

1.  [Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) (e.g., `h1`) and pseudo-elements (e.g., `::before`).
2.  [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`).
3.  [ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) (e.g., `#example`).

Universal selector ([`*`](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)), combinators ([`+`](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator), [`>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator), [`~`](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator), [" "](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), [`||`](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator)) and negation pseudo-class ([`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)) have no effect on specificity. (The selectors declared _inside_ `:not()` do, however.)

For more information, visit: ["Specificity" in "Cascade and inheritance"](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2), you can also visit: [https://specifishity.com](https://specifishity.com)

Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

### [The !important exception](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_!important_exception 'Permalink to The !important exception')

When an `important` rule is used on a style declaration, this declaration overrides any other declarations. Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important,` however, is **bad practice** and should be avoided because it makes debugging more difficult by breaking the natural [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) in your stylesheets. When two conflicting declarations with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.

**Recommended guidelines:**

-   **Always** look for a way to use specificity before even considering `!important`
-   **Only** use `!important` on page-specific CSS that overrides foreign CSS (from external libraries, like Bootstrap or normalize.css).
-   **Never** use `!important` when you're writing a plugin/mashup.
-   **Never** use `!important` on site-wide CSS.

**Instead of using `!important`, consider:**

1.  Make better use of the CSS cascade
2.  Use more specific rules. By indicating one or more elements before the element you're selecting, the rule becomes more specific and gets higher priority:

    ```
    <div id="test">
      <span>Text</span>
    </div>
    ```

    Copy to Clipboard

    ```
    div#test span { color: green; }
    div span { color: blue; }
    span { color: red; }
    ```

    Copy to Clipboard

    No matter the order, text will be green because that rule is most specific. (Also, the rule for blue overwrites the rule for red, notwithstanding the order of the rules)

3.  As a nonsense special case for (2), duplicate simple selectors to increase specificity when you have nothing more to specify.

    ```
    #myId#myId span { color: yellow; }
    .myClass.myClass span { color: orange; }
    ```

    Copy to Clipboard

#### How !important can be used:

##### A) Overriding inline styles

Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered bad practice, but sometimes you need the latter to override the former.

In this case, you could set certain styles in your global CSS file as !important, thus overriding inline styles set directly on elements.

```
<div class="foo" style="color: red;">What color am I?</div>
```

Copy to Clipboard

```
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

Copy to Clipboard

Many JavaScript frameworks and libraries add inline styles. Using `!important` with a very targeted selector is one way to override these inline styles.

##### B) Overriding high specificity

```
#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}
```

Copy to Clipboard

How do you make `awesome` paragraphs always turn red, even ones inside `#someElement`? Without `!important`, the first rule will have more specificity and will win over the second rule.

#### How to override `!important`

A) Add another CSS rule with `!important`, and either give the selector a higher specificity (adding a tag, id or class to the selector), or add a CSS rule with the same selector at a later point than the existing one. This works because in a specificity tie, the last rule defined wins.

Some examples with a higher specificity:

```
table td    { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```

Copy to Clipboard

B) Or add the same selector after the existing one:

```
td { height: 50px !important; }
```

Copy to Clipboard

C) Or, preferably, rewrite the original rule to avoid the use of `!important` altogether.

```
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

Copy to Clipboard

Including an id as part of an attribute selector instead of as an id selector gives it the same specificity as a class. Both selectors above now have the same weight. In a specificity tie, the last rule defined wins.

#### For more information, visit:

-   [https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css](https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css)
-   [https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean](https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean)
-   [https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css](https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css)
-   [https://stackoverflow.com/questions/11178673/how-to-override-important](https://stackoverflow.com/questions/11178673/how-to-override-important)
-   [https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css](https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css)

### [The :is() and :not() exceptions](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_is_and_not_exceptions 'Permalink to The :is() and :not() exceptions')

The matches-any pseudo-class [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) Experimental and the negation pseudo-class [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) are _not_ considered a pseudo-class in the specificity calculation. But selectors placed into the pseudo-class count as normal selectors when determining the count of [selector types](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#selector_types).

This chunk of CSS ...

```
div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
```

Copy to Clipboard

... when used with the following HTML ...

```
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

Copy to Clipboard

... appears on the screen like this:

<iframe class="sample-code-frame" title="The is and not exceptions sample" id="frame_the_is_and_not_exceptions" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/Specificity/_sample_.the_is_and_not_exceptions.html" loading="lazy">
</iframe>
<br>

### [The :where() exception](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_where_exception 'Permalink to The :where() exception')

The specificity-adjustment pseudo-class [`:where()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) Experimental always has its specificity replaced with zero.

This chunk of CSS ...

```
div:where(.outer) p {
  color: orange;
}

div p {
  color: blueviolet;
}
```

Copy to Clipboard

```
#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
```

... when used with the following HTML ...

```
<div id="no-where-support">
⚠️ Your browser doesn't support the <code>
<a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top">:where()</a>
</code> pseudo-class.
</div>
```

```
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

Copy to Clipboard

... appears on the screen like this:

<iframe class="sample-code-frame" title="The where exception sample" id="frame_the_where_exception" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/Specificity/_sample_.the_where_exception.html" loading="lazy">
</iframe>
<br>

### [Form-based specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#form-based_specificity 'Permalink to Form-based specificity')

Specificity is based on the form of a selector. In the following case, the selector `*[id="foo"]` counts as an attribute selector for the purpose of determining the selector's specificity, even though it selects an ID.

The following CSS styles ...

```
*#foo {
  color: green;
}

*[id="foo"] {
  color: purple;
}
```

Copy to Clipboard

... when used with this markup ...

```
<p id="foo">I am a sample text.</p>
```

Copy to Clipboard

... end up looking like this:

<iframe class="sample-code-frame" title="Form-based specificity sample" id="frame_form-based_specificity" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/Specificity/_sample_.form-based_specificity.html" loading="lazy">
</iframe>
<br>

This is because it matches the same element but the ID selector has a higher specificity.

### [Tree proximity ignorance](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#tree_proximity_ignorance 'Permalink to Tree proximity ignorance')

The proximity of an element to other elements that are referenced in a given selector has no impact on specificity. The following style declaration ...

```
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Copy to Clipboard

... with the following HTML ...

```
<html>
  <body>
    <h1>Here is a title!</h1>
  </body>
</html>
```

Copy to Clipboard

... will render as:

<iframe class="sample-code-frame" title="Tree proximity ignorance sample" id="frame_tree_proximity_ignorance" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/Specificity/_sample_.tree_proximity_ignorance.html" loading="lazy">
</iframe>
<br>

This is because the two declarations have equal [selector type](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#selector_types) counts, but the `html h1` selector is declared last.

### [Directly targeted elements vs. inherited styles](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#directly_targeted_elements_vs._inherited_styles 'Permalink to Directly targeted elements vs. inherited styles')

Styles for a directly targeted element will always take precedence over inherited styles, regardless of the specificity of the inherited rule. This CSS ...

```
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

Copy to Clipboard

... with the following HTML ...

```
<html>
  <body id="parent">
    <h1>Here is a title!</h1>
  </body>
</html>
```

Copy to Clipboard

... will also render as:

<iframe class="sample-code-frame" title="Directly targeted elements vs. inherited styles sample" id="frame_directly_targeted_elements_vs._inherited_styles" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/Specificity/_sample_.directly_targeted_elements_vs._inherited_styles.html" loading="lazy">
</iframe>
<br>

This is because the `h1` selector targets the element specifically, but the green selector is only inherited from its parent.
