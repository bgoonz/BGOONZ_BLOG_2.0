---
title: Form Validation  JavaScript
weight: 0
excerpt: Form Validation  JavaScript
seo:
    title: 'Form Validation  JavaScript'
    description: 'embeded developer tools and utilities'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---



## Form Validation  JavaScript

> ## Excerpt

> Validation of form elements using JavaScript.  Examples for different form elements including: text input, checkbox, combo box, radio buttons and checkbox arrays.  Restricting text input to alphanumeric characters and spaces.  How to use selectedIndex.

---
Validating form input with JavaScript is easy to do and can save a lot of unnecessary calls to the server. It can prevent people from leaving fields blank, from entering too little or too much or from using invalid characters.

User-submitted data should also _always_ be verified using a secure server-side script. Otherwise a browser with JavaScript disabled, or a hacker trying to compromise your site, can easily by-pass client-side validation.

For an alternative approach to client-side form validation, without JavaScript, check out our new article on [HTML5 Form Validation](https://www.the-art-of-web.com/html/html5-form-validation/) which is available now in most modern browsers.

## 1\. Restricting input to alphanumeric characters

In the following example, the single input box, inputfield, must: a) not be empty; and b) contain only alphanumeric characters and spaces. Only if both tests are passed can the form be submitted (when the script returns a value of true).

`<script> function checkForm(form) { _// validation fails if the input is blank_ if(form._inputfield_.value == "") { alert("Error: Input is empty!"); form._inputfield_.focus(); return false; } _// regular expression to match only alphanumeric characters and spaces_ var re = /^[\w ]+$/; _// validation fails if the input doesn't match our regular expression_ if(!re.test(form._inputfield_.value)) { alert("Error: Input contains invalid characters!"); form._inputfield_.focus(); return false; } _// validation was successful_ return true; } </script>`

**The pre-defined class \\w represents any alphanumeric character or the '\_' underscore.**

The regular expression ^\[\\w \]+$ will fail if the input is empty as it requires at least one character (because we used + instead of \*). The first test in the example is therefore only necessary in order to provide a different error message when the input is blank.

The purpose of a form validation script is to return a boolean value (true or false) to the onsubmit event handler. A value of true means that form will be submitted while a false value will block the form from being submitting. The focus() command is used to set the focus to the problem element.

You can test the above script with different input values using this form:

The form HTML is put together as follows:

`<form method="POST" action="_form-handler_" onsubmit="return checkForm(this);"> <p>Input: <input type="text" size="32" name="_inputfield_"> <input type="submit"></p> </form>`

The name attribute of the input field is used to reference that field from within the checkForm function. With the advent of [DHTML](http://www.google.com/search?q=define:DHTML) it's tempting to use id to reference form fields, but that can lead to namespace conflicts and why make things more complicated than necessary.

When the form is submitted - either by hitting Enter or clicking on the Submit button - the onsubmit handler is triggered. This then calls our checkForm() function, passing a reference to itself (the form) as the only variable.

This makes the value of the input box available within the function as form._inputfield_.value (the value of the field called 'inputfield' belonging to the form). In special cases, when the name is a variable or contains special characters, you might also see form.elements\[_inputfield_\].value.

Other form values are available using a similar syntax, although this becomes more complicated if you're using SELECT lists, checkboxes or radio buttons (see below for examples).

The checkForm function tests the form input against our conditions, returning a value of true if the form is to be submitted (when all tests have been passed) or false to abort (cancel) the form submission. It's that simple.

In a real-life situation you will most likely have more fields to check, and more complicated conditions, but the principle remains the same. All you need to do is extend the checkForm function to encompass the new fields and conditions:

`<script> function checkForm(form) { if(!_condition1_) { alert("Error: _error message_"); form._fieldname_.focus(); return false; } if(!_condition2_) { alert("Error: _error message_"); form._fieldname_.focus(); return false; } _..._ return true; } </script>`

When a return command is encountered, execution of the function is halted. In other words if the first condition fails, the second condition will not be tested and so forth. Only when _all_ conditions have been satisfied do we reach the return true command, in which case the form will be submitted.

You'll see that the all validation scripts presented on this and subsequent pages adhere to the same basic format.

**Most modern browsers now support _HTML5 Form Validation_  making it possible to validate form elements without (or before) any JavaScript is triggered.**

<details>

<summary>HTML5 Form Validation</summary>

Before you ask, and someone always does, these examples will currently work in the following browsers: Safari 5, Chrome 6, Opera 9, Firefox 4 Beta and the iPhone/iPad. Also each browser has a slightly different default behaviour.

## 1\. The 'required' attribute

The simplest change you can make to your forms is to mark a text input field as 'required':

`Your Name: <input type="text" name="name" required>`

This informs the (HTML5-aware) web browser that the field is to be considered mandatory. Different browsers may mark the input box in some way (Firefox 4 Beta adds a red box-shadow by default), display a warning (Opera) or even prevent the form from being submitted if this field has no value. Hopefully these behaviours will converge in future releases.

For these examples we have created our own valid/invalid CSS formatting to override the browser default. [More on that below](https://www.the-art-of-web.com/html/html5-form-validation/#cssvalid). That's why you may see something like the following:

![HTML5 required example](https://www.the-art-of-web.com/images/html5-required.png)

Before you type anything into the box a red marker is shown. As soon as a single character has been entered this changes to a green marker to indicate that the input is 'valid'.

Using CSS you can place markers inside or alongside the input box, or simply use background colours and borders as some browsers do by default.

**The required attribute [can also apply to checkboxes](https://www.the-art-of-web.com/html/html5-checkbox-required/) which we've covered separately.**

## 2\. New text INPUT types

This is where HTML5 really gets interesting and more useful. Along with the text input type, there are now a host of other options, including email, url, number, tel, date and many others.

On the iPhone/iPad the different input types are associated with different keyboards, making it easier for people to complete your online forms. In other web browsers they can be used in combination with the required attribute to limit or give advice on allowable input values.

#### INPUT type="email"

By changing the input type to email while also using the required attribute, the browser can be used to validate (in a limited fashion) email addresses:

`Email Address: <input type="email" name="email" required placeholder="Enter a valid email address">`

Note that for this example we've made use of another HTML5 attribute placeholder which lets us display a prompt or instructions inside the field - something that previously had to be implemented using messy onfocus and onblur JavaScript events.

The above code displays an input box as follows:

Again, different browsers implement this differently. In Opera it's sufficient to enter just \*@\* for the input to be accepted. In Safari, Chrome and Firefox you need to enter at least \*@-.-. Obviously neither example is very limiting, but it will prevent people from entering completely wrong values, such as phone number, strings with multiple '@'s or spaces.

Here is how it appears in Safari (with our CSS formatting to show the (in)valid state):

![HTML5 email required example](https://www.the-art-of-web.com/images/html5-email.png)

#### INPUT type="url"

In a similar fashion to the email input type above, this one is designed to accept only properly-formatted URLs. Of course it currently does nothing of the kind, but later you will see how to improve it's behaviour using the pattern attribute.

`Website: <input type="url" name="website" required>`

Again, the input box appears as normal:

This time the minimum requirement for most browsers is one or more letters followed by a colon. Again, not very helpful, but it will stop people trying to input their email address or other such nonsense.

As mentioned above, we can improve on this by making use of the pattern attribute which accepts a JavaScript regular expression. So the code above becomes:

`Website: <input type="url" name="website" required pattern="https?://.+">`

Now our input box will only accept text starting with http:// or https:// and at least one additional character:

If you're not yet familiar with regular expressions, you really should [make it a priority to learn](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp). For those already familiar, note that the ^ and $ are already implicit so the input has to match the entire expression. Pattern modifiers [are not supported](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#the-pattern-attribute).

If anyone wants to contribute a more thorough expression to test for valid email or url format, feel free to post it using the Feedback option above..

#### INPUT type="number" and type="range"

The number and range input types also accept parameters for min, max and step. In most cases you can leave out step as it defaults to 1.

Here you see an example including both a number input, typically displayed as a 'roller' and a range input displayed as a 'slider':

`Age: <input type="number" size="6" name="age" min="18" max="99" value="21"><br> Satisfaction: <input type="range" size="2" name="satisfaction" min="1" max="5" value="3">`

As with other HTML5 input types, browsers that don't recognise the new options will default to simple text inputs. For that reason it's a good idea to include a size for the input box.

The slider option is a bit bizarre in that no values are displayed, but may be useful for more 'analog' inputs. There are some bugs with the number input in that if you don't set a max value, clicking 'down' with the input blank will result in a very large number.

Here is how the two inputs are displayed in Safari:

![HTML5 number and range example](https://www.the-art-of-web.com/images/html5-number.png)

and in Opera:

![HTML5 number and range example](https://www.the-art-of-web.com/images/html5-number-opera.png)

They are currently not supported in Firefox 4 Beta.

If you want to restrict the input of a text field to numbers without having the up/down arrows associated with the input box, you can always just set the input type to text and use a pattern of "\\d+" (one or more numbers).

#### INPUT type="password"

We have a separate article with details on [validating passwords using HTML5](https://www.the-art-of-web.com/javascript/validate-password/), including JavaScript code for customising the browser generated alert messages.

## 3\. Other HTML5 INPUT types

Other HTML5 input types include:

- color
- date
- datetime
- datetime-local
- month
- search
- tel
- time
- week

The search input will, in some browsers, change the styles to match the browser or operating system default search field format. You can see this demonstrated in the Search input above.

The tel input type is handy for the iPhone as it selects a different input keyboard. There is no pattern-matching set by default so you would have to implement that yourself using the pattern attribute to accept only certain characters.

The color input is meant to let you select a hex-code from a colour wheel - or similar - but as yet doesn't appear to have been implemented in the wild.

The other date\- and time\-related options do have an effect at least in Opera, with pop-up calendars and other devices appearing to assist with input. While it would be great to see something like this in every browser, for now you probably need to stick with the ubiquitous JavaScript plugins.

## 4\. Styling valid/invalid inputs using CSS

While the code we're using is slightly more complicated, this should get you started:

`<style type="text/css"> input:required:invalid, input:focus:invalid { _/* insert your own styles for invalid form input */_ -moz-box-shadow: none; } </style>`

The first set of styles can be used to mark an input box as 'invalid', by adding an icon, colouring the text or borders or similar. It will apply to inputs that are required but empty, or to inputs that have a required format/pattern which hasn't yet been met.

The \-moz-box-shadow style is there just to prevent Firefox 4 Beta from adding it's default red border.

For inputs that are both required and 'valid' you can use the following:

`<style type="text/css"> input:required:valid { _/* insert your own styles for valid form input */_ } </style>`

Some of the articles below, particularly the first two, provide other style/scripting options and solutions for supporting older browsers.

## 5\. Sample styling using images and sprites

As shown above, once you've added HTML5 attributes to your form elements, they can be easily styled using CSS so that each input field is clearly marked as valid or invalid.

`<style type="text/css"> input:required:invalid, input:focus:invalid { background-image: url([/images/invalid.png](https://www.the-art-of-web.com/images/invalid.png)); background-position: right top; background-repeat: no-repeat; } input:required:valid { background-image: url([/images/valid.png](https://www.the-art-of-web.com/images/valid.png)); background-position: right top; background-repeat: no-repeat; } </style>`

Here you can see the above styles applied to a required input field:

This solution is still more complicated than it needs to be as it requires two extra images to be loaded. Fortunately, we can assume that all browsers supporting HTML5 form validation techniques will also support images being replaced in the CSS by 'Base64 encoded datasets'.

</details>

## 2\. Validating Text Input Fields

The value of a text input box (or a textarea or password input) is available using the syntax form.fieldname.value. This is **not** the case for other input types.

`form._fieldname_.value`

To check whether two inputs have the same is quite simple:

`if(form._field1_.value == form._field2_.value) { _// values are identical_ }`

**Make sure to always use \== for comparisons. If you use \= (the assignment operator) instead then it can take a long time to debug.**

and to see if they have different values we just reverse the logic:

`if(form._field1_.value != form._field2_.value) { _// values are different_ }`

If you want to test numeric values (or add or subtract them) then you first have to convert them from strings to numbers. By default all form values are accessed as as strings.

`var field1 = [parseInt](http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Guide:Predefined_Functions:parseInt_and_parseFloat_Functions)(form.field1.value); var field2 = parseInt(form.field2.value); if(field1 > field2) { _// field1 as a number is greater than field2 as a number_ }`

**parseFloat is the same as parseInt except that it also works for floating point numbers.**

## 3\. Validating Drop-down Lists

The value of a SELECT input element is accessed using:

`var selectBox = form._fieldname_; var selectedValue = selectBox.options[selectBox.selectedIndex].value var selectedText = selectBox.options[selectBox.selectedIndex].text`

where fieldname is the SELECT element, which has an array of options and a value selectedIndex that tells you which option has been selected. The illustration below shows this relationship:

![](https://www.the-art-of-web.com/images/selectbox.jpg)

Note that the 'I' in selectedIndex needs to be capitalised - JavaScript functions and variables are **always** case-sensitive.

If you define a value for the OPTION elements in your SELECT list, then .value will return that, while .text will return the text that is visible in the browser. Here's an example of what this refers to:

`<option value="_value_">_text_</option>`

**Thanks to Internet Explorer you can now access the current SELECT value using selectBox.value, but this is not good practice.**

If you just want to check that an option has been chosen (ie. that the SELECT box is no longer in it's default state) then you can use:

`if(form._fieldname_.selectedIndex > 0) { _// an option has been selected_ } else { _// the default first option remains selected_ }`

See below for a function for validating both SELECT and multi-SELECT lists.

## 4\. Validating Checkboxes

These really are simple:

`form._checkboxfield_.checked`

will return a [boolean](http://www.google.com/search?q=define:boolean) value (true or false) indicating whether the checkbox is in a 'checked' state.

`function checkForm(form) { if(form._checkboxfield_.checked) { alert("The checkbox IS checked"); } else { alert("The checkbox IS NOT checked"); } return false; }`

**You don't need to test using form.checkboxfield.checked == true as the value is already boolean.**

Read more about the humble checkbox in our [HTML5 Checkbox Validation](https://www.the-art-of-web.com/html/html5-checkbox-required/) article.

## 5\. Validating Radio buttons

Radio buttons are implemented as if they were an array of checkboxes. To find out which value (if any) has been selected, you need to loop through the array until you find which one has been selected:

`<script> function checkRadio(field) { for(var i=0; i < field.length; i++) { if(field[i].checked) return field[i].value; } return false; } </script>`

The form handler function is then the following:

`function checkForm(form) { if(radioValue = checkRadio(form._radiofield_)) { alert("You selected " + radioValue); return true; } else { alert("Error: No value was selected!"); return false; } }`

**Actually, there is a bug in the above function in that it doesn't handle the case when there is only a single radio button. In that case field.length is _undefined_ and the function will always return _false_. Below is a patched version:**

`function checkRadio(field) { if(!field.length) { field = [field]; } for(var i=0; i < field.length; i++) { if(field[i].checked) return field[i].value; } return false; }`

In the case of a single radio button we put the single value into its own Array so we can use the same for loop after all.

### ES6 Syntax

In modern browsers we can make some small optimisations:

`<script> _// Original JavaScript code by Chirp Internet: chirpinternet.eu // Please acknowledge use of this code by including this header._ const checkRadio = (field) => { if(!field.length) { field = [field]; } for(let el of field) { if(el.checked) { return el.value; } } return false; } </script>`

Where const means the function is immutable; (...) => represents a function; for...of iterates over a NodeList; and let defines a locally scoped variable.

## 6\. Validating Checkbox arrays

If you're working with arrays of checkboxes to submit data to a server-side script then you might already have some grey hairs from trying to figure out how to validate the input using JavaScript.

The problem is that, to have the data submitted in a 'nice' format to the server, the name attributes of all the checkboxes in the array are often set to the same value: a name ending with \[\]. This makes it difficult to address them directly using JavaScript.

In this example, the checkboxes are defined as:

`<input type="checkbox" name="_pref[]_" value="_value_"> _label_`

When you submit the form you will be notified through an alert message how many items you checked, and what they were. This is calculated using a new function:

`<script> function checkArray(form, arrayName) { var retval = new Array(); for(var i=0; i < form.elements.length; i++) { var el = form.elements[i]; if(el.type == "checkbox" && el.name == arrayName && el.checked) { retval.push(el.value); } } return retval; } </script>`

The form handler that calls this function and displays the alert is as follows:

`function checkForm(form) { var itemsChecked = checkArray(form, "_pref[]_"); alert("You selected " + itemsChecked.length + " items"); if(itemsChecked.length > 0) { alert("The items selected were:\n\t" + itemsChecked); } return false; }`

The checkArray function returns an array containing all the selected checkbox values.

Normally you would modify this so that you could submit or not submit the form based on the number of items selected. For example "at least two" or "no more than five". This should be a simple exercise.

### ES6 Syntax

Again, we can make the code a lot simpler in supporting browsers:

`<script> _// Original JavaScript code by Chirp Internet: chirpinternet.eu // Please acknowledge use of this code by including this header._ const checkArray = (form, arrayName) => { let retval = []; for(let el of form.elements) { if(el.type == "checkbox" && el.name == arrayName && el.checked) { retval.push(el.value); } } return retval; }; </script>`

## 7\. Validating Multi-Select Boxes

A variation on the standard SELECT input list, is the multiple select list which allows for any number of options to be selected from a single list:

If we try to use selectedIndex as before we only receive the index of the _first_ selected item in the list. So instead we have to use the elements selectedOptions NodeList to identify all the selected options.

With a bit of ingenuity we can create a single method to handle both the singular and multiple select lists returning, respectively, a single object {value, text} or an array of objects:

`<script> _// Original JavaScript code by Chirp Internet: chirpinternet.eu // Please acknowledge use of this code by including this header._ const checkSelect = (field) => { let retval = []; for(let el of field.selectedOptions) { retval.push({ value: el.value, text: el.text }); } return (field.multiple) ? retval : retval[0]; }; </script>`

We can invoke this method from our checkForm function as follows:

`<script> const checkForm = (form) => { let fruit = checkSelect(form._fruit_); alert("Fruit: " + fruit.value); let fruits = checkSelect(form.elements["_fruits[]_"]); let fruitList = []; for(let obj of fruits) { fruitList.push(obj.value); } alert("Fruit Salad: " + fruitList); return false; }; </script>`

From the code you can see that our SELECT inputs are named fruit for the normal drop-down list, while the multi-select list is named fruits\[\]. The \[\] suffix tells a server side script such as PHP to accept multiple values with that name into an array.

**Note that in this section we've been using the new ES6 syntax which may not be available in all browsers.**

## 8\. Combining Form Elements in Conditions

In more complicated forms you will want to set conditions on the form that combine multiple elements. For example, a text input that only needs to have a value if a checkbox is checked:

`<script> const checkForm = function(form) { _..._ if(form._checkboxname_.checked && (form._textinputname_.value == "")) { alert("Error: _error message_"); form._textinputname_.focus(); return false; } _..._ return true; }; </script>`

or conditions that vary according to a radio button selection:

`<script> var checkRadio = function(field) { if(!field.length) { field = [field]; } for(var i=0; i < field.length; i++) { if(field[i].checked) return field[i].value; } return false; }; var checkForm = function(form) { _..._ var radioValue = checkRadio(_radiofield_); switch(radioValue) { case "Red": _// conditions to apply if 'Red' is selected_ break; case "Blue": _// conditions to apply if 'Blue' is selected_ break; default: _// conditions to apply in all other cases_ } _..._ return true; }; </script>`

Using simple logical operators and the functions supplied above you can do all sorts of client-side form validation. To take things a step further you can even explore [Ajax Form Validation](https://www.the-art-of-web.com/javascript/ajax-validate/) which lets you supply real-time feedback using server-side scripts triggered by JavaScript events.

## 9\. Video Tutorial

The team at Webucator.com have made a video based on this article as a part of their [JavaScript training](https://www.webucator.com/webdesign/javascript.cfm) lessons which you can view below. It explains some of the code examples above as well as introducing more advanced concepts:

<iframe width="728" height="432" src="//www.youtube.com/embed/_Z-0cwONN6c?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>

## 10\. Separating FORM from function

We would be remiss in not pointing out that your JavaScript and HTML code should be kept separated as far as possible. In other words, instead of:

`<form _..._ onsubmit="return checkForm(this);"> _..._ </form> <script> function checkForm(form) { if(!_condition_) { return false; } return true; } </script>`

it's better practice to use:

`<form id="_myForm_" _..._> _..._ </form> <script> var checkForm = function(e) { var form = e.target; if(!_condition_) { e.preventDefault(); return; } }; </script>`

with the submit handler applied using:

`<script> document.getElementById("_myForm_").addEventListener("click", checkForm, false); </script>`

Our checkForm function then needs to be defined as a variable (var or const), and instead of returning false we use e.preventDefault() to prevent form submission, and there's no need to return true.
