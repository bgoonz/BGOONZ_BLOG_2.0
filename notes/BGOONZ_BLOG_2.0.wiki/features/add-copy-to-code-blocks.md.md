# gatsby-remark-code-buttons

Add buttons to **markdown** code snippets.

> This plugin doesn't support MDX. Example of [MDX copy button](https://github.com/gatsbyjs/gatsby/pull/15834).

## [](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/#install)Install

```
npm install gatsby-remark-code-buttons --save-dev
```

![](https://media.giphy.com/media/hoHRea4IdkDBrsE4Bu/source.gif)

## [](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/#how-to-use)How to use

in your `gatsby-config.js`

```
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: ['gatsby-remark-code-buttons']
    }
  }
]
```

## [](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/#options)Options

```
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-code-buttons',
          options: {
            // Optional button container class name. Defaults
            // to 'gatsby-code-button-container'.
            buttonContainerClass: `customButtonContainerClass`,
            // Optional button class name. Defaults to 'gatsby-code-button'.
            buttonClass: `customButtonClass`,
            // Optional button text. Defaults to ''.
            buttonText: `customButtonText`,
            // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
            svgIconClass: `customSvgIconClass`,
            // Optional svg icon. Defaults to svg string and can be
            // replaced with any other valid svg. Use custom classes
            // in the svg string and skip `iconClass` option.
            svgIcon: `customSvgIcon`,
            // Optional tooltip text. Defaults to ''.
            tooltipText: `customTooltipText`,
            // Optional toaster class name. Defaults to ''.
            toasterClass: `customToasterClass`,
            // Optional toaster text class name. Defaults to ''.
            toasterTextClass: `customToasterTextClass`,
            // Optional toaster text. Defaults to ''.
            toasterText: 'customToasterText',
            // Optional toaster duration. Defaults to 3500.
            toasterDuration: 5000
          }
        }
      ]
    }
  }
]
```

### [](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/#custom-styling)Custom styling

Now that we've injected the custom button, we need to style it!

```
.gatsby-code-button-container {}
.gatsby-code-button {}
.gatsby-code-button-icon {}
.gatsby-code-button-toaster {}
.gatsby-code-button-toaster-text {}
```

To apply custom styles import stylesheet in your app's root `gatsby-browser.js`.

```
// gatsby-browser.js
import './src/styles/custom-code-buttons.scss';
```

### [](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/#usage-in-markdown)Usage in Markdown

In your Markdown content

````
```js
alert('click to copy 💾');
````

```

This plugin will parse the Markdown AST, pluck the button, and then "clean" the code snippet language for further processing. With the default config options this plugin will create the following structure, injecting a custom `div`:

```

<div
  class="gatsby-code-button-container"
  data-toaster-id=""
  data-toaster-class="gatsby-code-button-toaster"
  data-toaster-text-class="gatsby-code-button-toaster-text"
  data-toaster-text=""
  data-toaster-duration="3500"
  onClick="copyToClipboard(`alert('how cool is this');`)"
>
  <div class="gatsby-code-button" data-tooltip="">
    <svg class="gatsby-code-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
  </div>
</div>
```

With `toasterText` config enabled this plugin will inject a custom toaster node:

```
<div class="gatsby-code-button-toaster">
  <div class="gatsby-code-button-toaster-text">Copied to clipboard</div>
</div>
```

Don't show button

````
```js:clipboard=false
alert('will not be copied 💾');
````

```









---
---
---
---


# OR:



Accessing the OS clipboard using browser JavaScript has been possible for several years using [`document.execCommand()`](https://www.sitepoint.com/javascript-copy-to-clipboard/).

Unfortunately, there are some problems:

-   clipboard access is synchronous, which has performance and security implications
-   support is patchy, especially on older versions of Safari on macOS and iOS
-   permissions access varies across browsers, and
-   the API could never be considered *elegant*

It's finally been superseded by a new [asynchronous Clipboard API](https://developer.mozilla.org/Web/API/Clipboard_API). It's new, and no browser supports all features, but it's easier to use and more robust.

Why Would an App Need to Access the Clipboard?
----------------------------------------------

As a developer, you'll know how the clipboard works and regularly use the following keyboard shortcuts:

-   `Ctrl` | `Cmd` + `C` to copy
-   `Ctrl` | `Cmd` + `X` to cut
-   `Ctrl` | `Cmd` + `V` to paste

Those with less computing experience won't necessarily have that knowledge. They may also be using a touch-screen device where keyboard shortcuts aren't available. Offering easy-to-use cut and paste icons can be useful.

Additionally, you may want to modify content when a clipboard action is completed, such as adding or removing formatting.

Clipboard Access is Dangerous!
------------------------------

Accessing the clipboard programmatically raises several security concerns:

-   Users often copy passwords or private information so no page should be able to arbitrarily read clipboard data.
-   Pages should be restricted when adding data to the clipboard. A nefarious page could replace copied text with a dangerous command or even an executable file.

To avoid potential issues, the Clipboard API can only be used on pages served over HTTPS (`localhost` is also permitted). When running in an iframe, the parent page must also grant `clipboard-read` and/or `clipboard-write` permissions:

```

<iframe
  src="childpage.html"
  allow="clipboard-read; clipboard-write"
></iframe>

```

The API is only available to the active browser tab (not background tabs) and can only be triggered by a user interaction such as a click. When necessary, the user will be prompted for permission to read clipboard data:

![Clipboard API user permission](https://uploads.sitepoint.com/wp-content/uploads/2020/11/1606317380permission.png)

This alert is shown when a page first requests clipboard access. It shouldn't cause any issues, given that the API is asynchronous and returns a Promise. It's also possible to examine and request the status using the [Permissions API](https://developer.mozilla.org/Web/API/Permissions_API).

Clipboard API Feature Detection
-------------------------------

The Clipboard API is available when `navigator.clipboard` returns a truthy result. For example:

```

if (navigator.clipboard) {

console.log('Clipboard API available');

}

```

However, this doesn't guarantee the browser supports all features, so it's necessary to make further checks. For example, at the time of writing, Chrome supports the API's [readText()](https://developer.mozilla.org/Web/API/Clipboard/readText) method, while Firefox doesn't.

Copy and Paste Text
-------------------

Copying and pasting text will be a useful option in most applications. The API is refreshingly simple:

```

// copy text TO the clipboard
await navigator.clipboard.writeText('This text is now in the clipboard');

// get text FROM the clipboard
let text = await navigator.clipboard.readText();

```

You'll require considerably more code to detect support and handle errors ...

[View the Clipboard API text demonstration](https://rawcdn.githack.com/sitepoint-editors/clipboardapi/a8dfad6a1355bbb79381e61a2ae68394af144cc2/demotext.html)

The code can be [downloaded from GitHub](https://github.com/sitepoint-editors/clipboardapi). Refer to [clipboardtext.js](https://github.com/sitepoint-editors/clipboardapi/blob/main/js/clipboardtext.js) for the JavaScript.

This example implements text copying when a `data-copy` attribute is added any HTML element such as a button. You can set this value to either of these:

1.  a hard-coded string --- such as `data-copy="copy this to the clipboard"`.
2.  a CSS selector --- such as `data-copy="#mysection"`. The text content of the first matching element is then copied.

Optionally, you can set a custom success message in a `data-done` attribute:

```

<button data-copy="#mysection" data-done="section copied">
  copy text from #mysection
</button>

```

The button is only shown when `navigator.clipboard.writeText()` is supported. When clicked, the JavaScript event handler locates the text, copies it to the clipboard, and shows an animated success message.

The text paste button is very similar except it defines a `data-paste` attribute which must point to a DOM node:

```

<textarea id="pastehere"></textarea>
<button data-paste="#pastehere">paste</button>

```

Copy and Paste Data
-------------------

The Clipboard API's [`readText()`](https://developer.mozilla.org/Web/API/Clipboard/readText) and [`writeText()`](https://developer.mozilla.org/Web/API/Clipboard/writeText) are convenience options for the more generic `read()` and [`write()`](https://developer.mozilla.org/Web/API/Clipboard/write) methods. These have less browser support but are able to copy and paste any type of data such as binary images.

Copying requires blob data typically returned by a [`fetch()`](https://developer.mozilla.org/Web/API/Fetch_API) or [`canvas.toBlob()`](https://developer.mozilla.org/Web/API/HTMLCanvasElement/toBlob) method. This is passed to a [`ClipboardItem`](https://developer.mozilla.org/Web/API/ClipboardItem) constructor so it can be written to the clipboard:

```

const
image = await fetch('myimage.png'),
blob = await image.blob();

await navigator.clipboard.write([
new ClipboardItem({ [blob.type]: blob })
]);

```

Pasting is more complex because multiple `ClipboardItem` objects can be returned with differing content types. It's therefore necessary to iterate through each type until a useful format is found. For example:

```

const clipboardItems = await navigator.clipboard.read();

for (const clipboardItem of clipboardItems) {

for (const type of clipboardItem.types) {

    if (type === 'image/png') {

      // return PNG blob
      return await clipboardItem.getType(type);

    }

}

}

```

[View the Clipboard API image demonstration](https://rawcdn.githack.com/sitepoint-editors/clipboardapi/a8dfad6a1355bbb79381e61a2ae68394af144cc2/demoblob.html) (supported in Chromium-based browsers).

The code can be [downloaded from GitHub](https://github.com/sitepoint-editors/clipboardapi). Refer to [clipboardblob.js](https://github.com/sitepoint-editors/clipboardapi/blob/main/js/clipboardblob.js) for the JavaScript.

This works in a similar way to the text demonstration, in that copy and paste buttons must point to DOM elements using a CSS selector in `data-copyblob` and `data-pasteblob` attributes. For example:

```

<!-- copy image -->
<img id="myimage" src="myimage.png" alt="any image" />

<button data-copyblob="#myimage" data-done="image copied">
  copy image
</button>

<!-- paste into DOM -->
<div id="imagelist"></div>

<button data-pasteblob="#imagelist">
  paste image
</button>

```

Try copying image data from a graphics application, then use the paste button.

Cut, Copy, and Paste Events
---------------------------

The `cut`, `copy`, and `paste` events fire whenever the user initiates a clipboard action in the browser --- typically with right-click menus or the keyboard shortcuts mentioned above. This is supported in most browsers and handler functions can intercept the events to make changes using a [`clipboardData` object](https://wiki.developer.mozilla.org/en-US/API/ClipboardEvent/clipboardData) passed as a parameter.

The following function forces all cut or copied text to be uppercase. Note that `e.preventDefault()` stops the default cut/copy action which would override it:

```

body.addEventListener('cut', cutCopyHandler);
body.addEventListener('copy', cutCopyHandler);

// cut or copy event handler
function cutCopyHandler(e) {

const selection = document.getSelection();

// send uppercase text to clipboard
e.clipboardData.setData(
'text/plain',
selection.toString().toUpperCase()
);

if (e.type === 'cut') selection.deleteFromDocument();

// stop default cut/copy
e.preventDefault();

}

```

The following code attaches a paste handler to a specific `<textarea>` field. The function clears the existing content and prefixes the text `"pasted:"`:

```

document.getElementById('field1').addEventListener('paste', pasteEvent);

// paste event handler
function pasteEvent(e) {

// add 'pasted:' to pasted text
const paste = 'pasted:\n' +
(e.clipboardData || window.clipboardData).getData('text');

e.target.value = paste;

// stop default paste
e.preventDefault();
}

```

```
