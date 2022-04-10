Marking guide for "Fundamental CSS comprehension”
=================================================

The following guide outlines a marking guide for the MDN Learning Area HTML Topic — [Fundamental CSS comprehension](https://developer.mozilla.org/en-US/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension). Each subtask detailed in the assessment is listed below, along with an explanation of how many marks the task is worth, and the mark breakdown.

Note: These are guidelines, not set in stone rules — you are of course free to use your judgement on mark awarding when you meet an edge case, or something that isn’t clear cut.

The overall mark awarded is out of 35. Work out their final mark, and then divide by 35 and multiply by 100 to give a percentage mark. For reference, you can find a [finished business card](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension-finished/) that would be awarded top marks.

Basic setup
-----------

 "create a new file in the same directory as your HTML and image files” (1 mark)   
The first task — creating your CSS file — is only worth one mark. It is pretty easy, although you won’t be able to do much without getting this right.

 "Link your CSS to your HTML file via a `<link>` element” (2 marks)   
Slightly more challenging, but again pretty easy.

 "copy and paste them into the top of your new CSS file. Use them as a test to make sure your CSS is properly applied to your HTML.” (1 mark)   
This is just copy and paste, so not really worth much.

 "Above the two rules, add a CSS comment with some text inside it to indicate that this is a set of general styles for the overall page.”General page styles" would do. Also add three more comments…" (2 marks)   
Good commenting is important. You should award 0.5 marks for each of the four comments, as long as they are written in a sensible place with meaningful text.

Taking care of the provided selectors and rulesets
--------------------------------------------------

 "look at the four selectors, and calculate the specificity for each one.” (2 marks)   
The correct specificity for each one is as follows (half a mark each):

-   0012
-   0011
-   0011
-   0010

 "Now it’s time to put the right selector on the right rule set!” (4 marks)   
The correct pairing are as follows (1 mark for each):

-   `.card article img` goes with the fourth ruleset.
-   `.card footer` goes with the third ruleset.
-   `.card header` goes with the second ruleset.
-   `.card` goes with the first ruleset.

 "Beware! There are two errors in the provided rulesets.” (2 marks)   
The errors are as follows (one mark for fixing each one):

-   `background-colour` in the first ruleset: colour &gt; color.
-   `max-height: 100%` in the fourth rule needs a semi-colon at the end of it.

New rulesets you need to write
------------------------------

 "Write a ruleset that targets both the card header, and card footer…” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L30-L33). Since the default font size as set on the `<html>` element is 10px, 1em is 10px, so the height (30px) should be represented by 3em, and the padding by 1em. 10 + 30 + 10 = 50.

 "The default margin applied to the `<h2>` and `<p>` elements by the browser will interfere with our design” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L24-L26). Simply setting the margin to 0 on all paragraphs and the `<h2>` should be fine.

 "To stop the image from spilling out of the main business card content (the `<article>` element), we need to give it a specific height.” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L57-L60). The height needs to be 12ems (as 12 x the base size of 10px = 120px), and the color needs to be RGBA — black expressed in RGB (0,0,0) with an alpha channel value of about 0.1-0.3.

 "Write a ruleset that gives the `<h2>` an effective font size of 20px (but expressed in ems) and an appropriate line height to place it in the center of the header’s content box…” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L46-L48). The height needs to be 2ems (2 x 10 = 20), and the line height would be expressed best as 1.5 (1.5 x 20px = 30px, the height of the header content.) Setting line height to 30px would also be ok.

 "Write a ruleset that gives the `<p>` an effective font size of 15px (but expressed in ems) and an appropriate line height to place it in the center of the header’s content box…” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L50-L53). The height needs to be 1.5ems (1.5 x 10 = 15), and the line height would be expressed best as 2 (2 x 15px = 30px, the height of the header content.) Setting line height to 30px would also be ok.

 "As a last little touch, give the paragraph inside the `<article>` an appropriate padding value so that its left edge lines up with the `<h2>` and footer paragraph, and set its color to be fairly light so it is easy to read.” (3 marks)   
The correct rule should look [something like this](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension-finished/style.css#L67-L70). The padding needs to be 1em, and the color needs to be set to some kind of lighter color that will show up well against the darker background we set earlier. Pure white would be ok, or something similar.

Other things to think about
---------------------------

 "You’ll get bonus marks if you write your CSS for maximum readability, with a separate declaration on each line.” (2 marks)   
If the CSS is arranged in a readable manner, with a separate declaration on each line (or similar), then they get the marks. If not, then they don’t.

 "You should include `.card` at the start of the selector chain in all your rules, so that these rules wouldn’t interfere with the styling of any other elements if the business card were to be put on a page with a load of other content.” (1 mark)   
A nice little addition to include in the assessment for promoting the idea of "compartmentalisation”, or "namespacing” of CSS so different sets of rules don’t interfere with one another. Not that important in this particular context, but it would be nice for the student to include.
