Marking guide for "Creating fancy letterheaded paper”
=====================================================

The following guide outlines a marking guide for the MDN Learning Area CSS assessment — [Creating fancy letterheaded paper](https://developer.mozilla.org/en-US/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper). Each subtask detailed in the assessment is listed below, along with an explanation of how many marks the task is worth, and the mark breakdown.

Note: These are guidelines, not set in stone rules — you are of course free to use your judgement on mark awarding when you meet an edge case, or something that isn’t clear cut.

The overall mark awarded is out of 19. Work out their final mark, and then divide by 19 and multiply by 100 to give a percentage mark. For reference, you can find a [finished styled letterhead](index.html) that would be awarded top marks.

The main letter
---------------

 "Apply the CSS to the HTML.” (1 mark)   
One mark for creating a suitable `&ltlink>` element, or `<style>` element to apply the CSS with.

 "Add a background declaration to the letter…” (6 marks)   
This requires a `background` property with multiple values. This is the most complicated part of this assessment, and there are a number of marks involved:

-   One mark for getting the basic syntax right and the background applying successfully.
-   One mark for putting the three required backgrounds in the right order — the linear gradient has to go at the top so it is seen over the top of the two images.
-   One mark for getting the top background image correct — `url(top-image.png) no-repeat left top`.
-   One mark for getting the bottom background image correct — `url(bottom-image.png) no-repeat left bottom`.
-   Two marks for getting the linear gradient correct; something like this — `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.2))`

 "Add another background declaration that just adds the top image to the top of the letter, as a fallback for browsers that don’t support the previous declaration.” (2 marks)   
One mark for adding a `background` property that just specifies `url(top-image.png) no-repeat left top` in it’s value; one mark for putting it before the main `background` declaration.

 "Add a white background color to the letter.” (1 mark)   
Easy — `background-color: white;`.

 "Add a 1mm top and bottom solid border to the letter, in a color that is inkeeping with the rest of the color scheme.” (3 marks)   
Two marks for an appropriate `border-top` and `border-bottom` declaration (one for each), and one mark for choosing an appropriate color to go with the top and bottom graphics (e.g. a red or brown for the default provided options).

The logo
--------

 "To the `<h1>`, add the logo as a background image.” (1 mark)   
One mark for an appropriate use of `background` to add the logo image. For example `background-image: url(logo.png);`.

 "Add a filter to the logo to give it a subtle drop shadow.” (2 marks)   
One mark for using the `filter` property, and one mark for a suitable value, e.g. `drop-shadow(3px 3px 3px black)`.

 "Now comment out the filter and implement the drop shadow in a different (slightly more cross-browser compatible) way, which still follows the shape of the round image.” (3 marks)   
The marks available are:

-   One mark for commenting out the filter property.
-   One mark for making the box circular. `border-radius: 64px;` or `border-radius: 50%;` would both be fine.
-   One mark for appropriate use of the `box-shadow` property.
