---
title: DOM vs BOM
template: post
subtitle: Document Object Model is the hierarchy/representation of the objects
  that comprise a document on the web
excerpt: "used for drawing basic widgets, using operating system UI methods -
  Data Persistence: persistence of data stored in browser,"
date: 2022-08-11T17:14:13.683Z
image: data:image/jpeg;base64,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
thumb_image: data:image/jpeg;base64,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
image_position: top
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/content-management.yaml
tags:
  - src/data/tags/about.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/adding-css-to-your-html.md
  - src/pages/blog/embedding-media-in-html.md
  - src/pages/blog/front-end-interview-questions-part-2.md
cmseditable: true
---
## DOM vs BOM
    - the `Document Object Model` is the hierarchy/representation of the objects that comprise a document on the web (i.e. how all elements in a document are organized). The DOM is a part of the `Browser Object Model`, the hierarchy/representation of all browser objects associated with the web browser. 

**Browser Diagram**
                            User Interface
                                   v
                            Browser Engine   --->   Data Persistence
                                   v
                            Rendering Engine
                        v          v          v
                Networking  JS interpreter  UI backend
                ======================================
    - `User Interface`: everything in browser interface except requested page content
    - `Browser Engine`: manages interactions btwen UI and rendering engine
    - `Rendering Engine`: renders requested page content, parsing HTML & CSS
    - `Networking`: handles network calls, i.e. HTTP requests
    - `JS Interpreter`: parses & executes JS code
    - `UI Backend`: used for drawing basic widgets, using operating system UI methods
    - `Data Persistence`: persistence of data stored in browser, i.e. cookies

    - A browser's main role in the request/response cycle is:
        1. Parsing HTML, CSS, JS
        2. Rendering that information to the user by constructing a DOM tree and rendering it. 

**Request-Response Diagram**

    Click --->          Request --->        Server <----> Data
        Browser
    Page <---           <--- Response      

    Your Computer       The Internet        Data Center

**Window API**
-   the `Window API` includes the methods and properties that you can use on the `window object`, the core of the `BOM`. 
-   using the `Window API` to resize the browser window:
    
    ```js
    //opens a new window
    newWindow = window.open("url", "name", "width=100, height=100")
    //resizes new window
    newWindow.resizeTo(500,500)
    //also resizes by given amount; use `-` to shrink
    newWindow.resizeBy(xDelta, yDelta)
    ```

-   the `context` of an `anonymous function` fun in the browser will be the `window object`. Remember that every function has a context, which we can think of as which object OWNS the function, and context is most often determined by how a function is invoked. 

**Running Scripts**
- Insert a script via a .js document into an .html document:
    ```html
    <html>
    <head>
        <script type="text/javascript" src="dom-ready-script.js"></script>
    </head>
    <body></body>
    <html></html>
    </html>
    ```
- Run the script on DOMContentLoaded (when the doc has been loaded, but without waiting for stylesheets, images, and subframes):
    ```js
    window.addEventListener("DOMContentLoaded", event => {
        console.log("This script loaded when the DOM was ready.");
    });
    ```
- Run the script on page load using window.onload (wait for EVERYTHING to load):
    ```js
    window.onload = () => {
        console.log(
            "This script loaded when all the resources and the DOM were ready."
        );
    };
    ```
- Three ways to prevent script from running until page loads:
    1. Use `DOMContentLoaded`
    2. Place `script tag` at very bottom of HTML file
    3. Add attribute like `async` or `defer`

**async vs defer**
    - `<script>` without any attributes will pause HTML parsing, and a request will be made to fetch the file (if it is external). The script will be executed before parsing is resumed. 
    - `async` downloads the file during HTML parsing and will pause the HTML parser to execute it once it has downloaded. 
    - `defer` downloads the file during HTML parsing, but will only execute it after the parser has completed. 
    - the standard is to use `async`, then `defer`. 

**Cookies vs Web Storage API**
- Cookies - stores stateful info about a user, transfers data to server, under 4KB storage limit
- `sessionStorage` - stores data only for a session, until browser window/tab is closed, does not transfer data to server, 5MB storage limit.
- `localStorage` - stores data w/no expiration date, does not transfer data to server, deleted when browser cache is cleared; maximum storage limit

- Create a cookie:
    ```js
    const firstCookie = "favoriteCat=million";
    document.cookie = firstCookie;
    const secondCookie = "favoriteDog=bambi";
    document.cookie = secondCookie;
    document.cookie; // Returns "favoriteCat=million; favoriteDog=bambi"
    ```
- Delete a cookie by setting a cookie's expiration date to the past (or delete in Developer Tools):
    ```js
    document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie; // Returns "favoriteDog=bambi"
    ```
- Create localStorage data:
    ```js
    //set new localStorage item
    localStorage.setItem("firstThing", "firstValue");
    //retrieve that localStorage item
    localSTorage.getItem("firstThing");
    ```

- When to use the Web Storage API?
    - shopping cart
    - input data on forms
    - info on user i.e. preferences or buying habits
- When to use cookies:
    - Session cookie, stores session info on user login/validation (lost once browser is closed unless you use a persistent cookie)

- You can view cookies and web storage info with Developer Tools (inspect -> Application tab). 

##  Objectives
*BROWSER BASICS & STORAGE*
1. ✓ Explain the difference between BOM (browser object model) and the DOM (document object model).
2. ✓ Given a diagram of all the different parts of the Browser, identify each part.
3. ✓ Use the Window API to change the innerHeight of a user's window. 
4. ✓ Identify the context of an anonymous function running in the Browser (the window).
5. ✓ Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therin when all elements on a page load (using DOMContentLoaded). 
6. ✓ Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads. 
7. ✓ Identify three ways to prevent JS code from executing until an entire HTML page is loaded. 
8. ✓ Label a diagram on the Request/Response cycle. 
9. ✓ Explain the Browser's main role in the request/response cycle (1. Parsing HTML, CSS, JS; 2. Rendering that information to the user by constructing a DOM tree and rendering it.)
10. ✓ Given several detractors - identify which real-world situations could be implemented with the Web Storage API (shopping cart, forms savings inputs, etc.).
11. ✓ Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site, add something to their cart, and then delete that cooking using Chrome Developer tools in order to empty their cart.
12. ✓ Write JS to store the value "I <3 falafel" with the eky "eatz" in the browser's local storage.
13. ✓ Write JS to read the value stored in local storage for the key "paper-trail". 

*ELEMENT SELECTION*
1. Given HTML that includes `<div id="catch-me-if-you-can>HI!</div>`, write a JS statement that stores a reference to the HTMLDivElement with the id "catch-me-if-you-can" in a variable named "divOfInterest".

    ```js
    let divOfInterest = document.getElementById("catch-me-if-you-can");
    ```

2. Given HTML that includes seven SPAN elements each with the class "cloudy", write a JS statement that stores a reference to a NodeList filled with references to the seven HTMLSpanElements in a variable named "cloud

    ```js
    let cloudyNodes = document.querySelectorAll("span.cloudy");
    ```

3. Given an HTML file with HTML, HEAD, TITLE, and BODY elements, create and reference a JS file that in which the JS will create and attach to the BODY element an H1 element with the id "sleeping-giant" with the content "Jell-O, Burled!".

    ```html
    <script type="text/javascript" src="location.file"></script>
    ```
    ```js
    let newHeader = document.createElement("h1");
    newHeader.setAttribute("id", "sleeping-giant");
    newHeader.innerHTML = "Jell-O, Burled!";
    //const newContent = document.createTextNode("Jell-O, Burled!");
    document.body.appendChild(newHeader);
    ```

4. Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with the SCRIPT's SRC attribute referencing an empty JS file, write a script in the JS file to create a DIV element with the id "lickable-frog" and add it as the last child to the BODY element.

    ```html
    <script type="text/javascript" src="location.file"></script>
    ```
    ```js
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "lickable-frog");
    document.body.appendChild(newDiv);
    ```


5. Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with no SRC attribute on the SCRIPT element, write a script in the SCRIPT block to create a UL element with no id, create an LI element with the id "dreamy-eyes, add the LI as a child to the UL element, and add the UL element as the first child of the BODY element. 

    ```html
    <script type="text/javascript">
        let newList = document.createElement("ul");
        let newItem = document.createElement("li");
        newItem.setAttribute("id", "dreamy-eyes");
        newList.appendChild(newItem);
        document.body.prepend(newList);
    </script>
    ```

6. Write JS to add the CSS class "i-got-loaded" to the BODY element when the window fires the DOMContentLoaded event. 

    ```js
    document.addEventListener("DOMContentLoaded", event => {
       document.body.className("i-got-loaded");
    });
    ```

7. Given an HTML file with a UL element with the id "your-best-friend" that has six non-empty ILs as its children, write JS to write the content of each LI to the console. 

    ```js
    let parentList = document.getElementById("your-best-friend");
    let childNodes = parent.childNodes;
    for (let value of childNodes.values()) {
        console.log(value);
    }
    ```

8. Given an HTML file with a UL element with the id "your-worst-enemy" that has no children, write JS to construct a string that contains six LI tags each containing a random number and set the inner HTML property of ul#your-worst-enemy to that string. 

    ```js
    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const liArr = [];
    for (let i = 0, i < 6, i++) {
        liArr.push("<li>" + getRandomInt(10) + "</li>")
    }
    const liString = liArr.join(" ");
    const listElement = document.getElementById("your-worst-enemy")
    listElement.innerHTML = liString;
    ```

9. Write JS to update the title of the document to the current time at a reasonable interval such that it looks like a real clock. 
    ```html
    <title id="title"></title>
    ```
    ```js
    const title = document.getElementById("title");
    const time = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        title.innerHTML = `${hours}:${minutes}:${seconds}`
    };
    setInterval(time, 1000);
    ```

*EVENT HANDLING*
1. Given an HTML page that includes `<button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>`, write JS that increases the value of the content of `span#clicked-count` by 1 every time `button#increment-count` is clicked. 

    ```js
    let incrementButton = document.getElementById("increment-count");
    let incrementSpan = document.getElementById("clicked-count");
    let count = 0
    incrementButton.addEventListener("click", event => {
        count++
        incrementSpan.innerHTML = count
    });
    ```
2. Given an HTML page that includes `<input type="checkbox" id="on-off"><div id="now-you-see-me">Now you see me</div>`, write JS that sets the display of div#now-you-see-me to "none" when input#on-off is checked and "block" when input#on-off is not checked. 

    ```js
    let inputBox = document.getElementById("checkbox");
    let divSee = document.getElementById("now-you-see-me");
    inputBox.addEventListener("click", event => {
        if (inputBox.checked) {
            divSee.style.display = "block";
        } else {
            divSee.style.display = "none";
        };
    });
    ```

3. Given an HTML file that includes `<input id="stopper" type="text" placeholder="Quick! Type STOP">`, write JS that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP". 

    ```js
    let inputStopper = document.getElementById("stopper");
    const stopCyanMadness = () => {
        if (inputStopper.value !== "STOP") {
            document.body.style.backgroundColor = "cyan";
        }
    };
    setTimeout(stopCyanMadness, 5000);
    ```
4. Given an HTML page that includes `<input type="text" id="fancypants">`, write JS that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere. 

    ```js
    const input = document.getElementById("fancypands");
    input.addEventListener("focus", event => {
        event.target.style.backgroundColor = "#E8F5E9";
    });
    input.addEventListener("blur", event => {
        event.target.style.backgroundColor = "initial";
    })
    ```

5. Given an HTML page that includes a form with two password fields, write JS that subscribes to the forms submission event and cancels it if the values in the two password fields differ. 

    ```js
    let form = document.getElementById("signup-form");
    let passwordOne = document.getElementById("password);
    let passwordTwo = document.getElementById("password);
    form.addEventListener("submit", event => {
        if (passwordOne.value !== passwordTwo.value) {
            event.preventDefault();
            alert("Passwords must match!");
        } else {
            alert("The form was submitted!");
        }
    })
    ```

6. Given an HTML page that includes a div styled as a square with a red background, write JS that allows a user to draf the square around the screen. 

    1. Mark the element as draggable:
        ```html
        <div id="red-square" draggable="true"></div>
        ```

7. Given HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.

    ```js
    document.body.addEventListener("click", event => {
        console.log(event.target.id);
    })
    ```

8. Identify the definition of the bubbling principle. 

    When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

*JSON*
1. Identify and generate valid JSON-formatted strings.

    String in JS:   `'this is "text"'`
    String in JSON: `"this is \"text\""`

    - use \n for line breaks
    - keys in JSON objects must be surrounded by \" quotes


2. Use `JSON.parse` to deserialize JSON-formatted strings.

    ```js
    const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
    console.log(JSON.parse(str));
        // prints an array with the following entries:
        //   0: 1
        //   1: "hello, \"world\""
        //   2: 3.14
        //   3: { id: 17 }
    ```

3. Use `JSON.stringify` to serialize JS objects. 

    ```js
    const array = [1, 'hello, "world"', 3.14, { id: 17 }];
    console.log(JSON.stringify(array));
        // prints [1, "hello, \"world\"", 3.14, {"id":17}]
    ```

4. Correctly identify the definition of "serialize". 

    Converting your data into a format that can be sent to another computer. 

5. Correctly idenfity the definition of "deserialize". 

    Getting a message from another computer and converting that message into usable data. 
