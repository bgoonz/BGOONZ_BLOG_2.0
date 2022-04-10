---
title: Alignment subject
weight: 0
excerpt:
seo:
    title: 'Alignment_Subject'
    description: 'Alignment subject  CSS  Glossary  alignment'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment) the **alignment subject** is the thing (or things) being aligned by the property

For justify-self"and align-self" the alignment subject is the margin box of the box the property is set on, using the writing mode of that box.

For justify-content"and align-content" the writing mode of the box is also used. The definition of the alignment subject depends on the layout mode being used.

-   Block containers (including table cells) : The entire content of the block as a single unit.
-   Multicol containers : The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.
-   Flex containers : For justify-content" the flex items in each flex line.
    For align-content" the flex lines. Note, this only has an effect on multi-line flex containers.
-   Grid containers : The grid tracks in the appropriate axis, with any spacing inserted between tracks added to the relevant gutters. Collapsed gutters are treated as a single opportunity for space insertion.

## See also

-   [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
