Marking guide for "A cool looking box”
======================================

The following guide outlines a marking guide for the MDN Learning Area CSS assessment — [A cool looking box](https://developer.mozilla.org/en-US/Learn/CSS/Styling_boxes/A_cool_looking_box). Each subtask detailed in the assessment is listed below, along with an explanation of how many marks the task is worth, and the mark breakdown.

Note: These are guidelines, not set in stone rules — you are of course free to use your judgement on mark awarding when you meet an edge case, or something that isn’t clear cut.

The overall mark awarded is out of 22. Work out their final mark, and then divide by 22 and multiply by 100 to give a percentage mark. For reference, you can find a [finished styled box](index.html) that would be awarded top marks.

General tasks
-------------

 "Apply the CSS to the HTML.” (1 mark)   
One mark for creating a suitable `&ltlink>` element, or `<style>` element to apply the CSS with.

Styling the box
---------------

 "A reasonable width for a large button.” (1 mark)   
One mark for giving the paragraph a `width` of around 150-300px. This is fairly hard to not get, as long as it isn’t set to 1000px, or 50px.

 "A reasonable height for a large button, centering the text vertically.” (1 mark)   
One mark for giving the paragraph a `line-height` of around 2-4. Again, award the mark as long as it doesn’t look ridiculous.

 "Centered text.” (1 mark)   
One mark for giving the paragraph `margin` of `0 auto`, or `auto`, or similar.

 "A slight Increase in font size, to around 17-18px computed style. Use rems.” (2 marks)   
One mark for setting an appropriate `font-size` (somewhere between 1.0625-1.125rem), and one mark for a good explanation. Something like recalling that the default font size is 16px, and calculating an exact rem value (e.g. 17/16), or approximating it and checking it in the browser dev tools, will do fine.

 "A base color for the design. Give the box this color as its background color.” (1 mark)   
One mark for choosing a reasonable color and setting it as a `background-color`. Easy.

 "The same color for the text; make it readable using a black text shadow.” (2 marks)   
One mark for setting the same color as before as a `background-color`, and one mark for making it readable with a tight `text-shadow`. Something like `1px 1px 1px black` is fine, but nothing too diffuse.

 "A fairly subtle border radius.” (1 mark)   
One mark for setting a fairly subtle `border-radius` value like 10-15px, or 1rem perhaps. 20px at the most; nothing too ridiculous.

 "A 1 pixel solid border with a color similar to the base color, but a slightly darker shade.” (2 marks)   
One mark for setting the `border` as `1px solid [a color]`, and one mark for setting the color to a slightly darker shade than the base color, e.g. if your base color is `rgb(255,0,0)`, set it to `rgb(200,0,0)`.

 "A linear semi-transparent black gradient that goes towards the top left corner. Make it completely transparent at the start, gradiating to around 0.2 opacity by 30% along, and remaining at the same color until the end.” (4 marks)   
An ideal value would be `background-image: linear-gradient(to top left, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 30%, rgba(0,0,0,0));`. The student can get:

-   One mark for knowing how to use a `linear-gradient`.
-   One mark for getting the direction value right: `to top left` (`to left top` is also fine)
-   One mark for using `rgba()` or `hsla()` colors correctly, with an opacity channel value of 0.2 or similar.
-   One mark for the correct use of an 0.2 opacity color stop at 30% along.

 "Multiple box shadows.” (6 marks)   
The mark scheme is as follows:

-   One mark for getting the basic `box-shadow` syntax correct.
-   One mark for the simple, non-inset box shadow. Something like this is fine: `2px 2px 5px black`. But not too diffuse.
-   Two marks for the top left shadow. It should have a positive offset to move it down and right - making it hug the top and left edges, and use a semi-transparent white. A good example: `inset 2px 2px 3px rgba(255,255,255,0.6)`.
-   Two marks for the bottom right shadow. It should have a negative offset to move it up and left - making it hug the bottom and right edges, and use a semi-transparent black. A good example: `inset -2px -2px 3px rgba(0,0,0,0.6)`.
