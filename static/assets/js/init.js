/*
 * reframe.js - Reframe.js: responsive iframes for embedded content
 * @version v2.2.7
 * @link https://github.com/dollarshaveclub/reframe.js#readme
 * @author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
 * @license MIT
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).reframe = t());
})(this, function () {
  "use strict";
  return function (e, t) {
    var i = "string" == typeof e ? document.querySelectorAll(e) : e,
      n = t || "js-reframe";
    "length" in i || (i = [i]);
    for (var o = 0; o < i.length; o += 1) {
      var r = i[o];
      if (
        !(
          -1 !== r.className.split(" ").indexOf(n) ||
          -1 < r.style.width.indexOf("%")
        )
      ) {
        var d =
            ((r.getAttribute("height") || r.offsetHeight) /
              (r.getAttribute("width") || r.offsetWidth)) *
            100,
          f = document.createElement("div");
        f.className = n;
        var s = f.style;
        (s.position = "relative"), (s.width = "100%"), (s.paddingTop = d + "%");
        var a = r.style;
        (a.position = "absolute"),
          (a.width = "100%"),
          (a.height = "100%"),
          (a.left = "0"),
          (a.top = "0"),
          r.parentNode.insertBefore(f, r),
          r.parentNode.removeChild(r),
          f.appendChild(r);
      }
    }
  };
});

// Handle responsive video embeds
window.addVideoEmbedsHandlers = function () {
  reframe('iframe[src*="youtube.com"],iframe[src*="vimeo.com"]');
};

window.removeVideoEmbedsHandlers = function () {
  const frameWrappers = document.querySelectorAll(".js-reframe");
  if (frameWrappers) {
    for (let i = 0; i < frameWrappers.length; i += 1) {
      const frameWrapper = frameWrappers[i];
      const frame = frameWrapper.firstChild;
      frame.removeAttribute("style");
      frameWrapper.parentNode.insertBefore(frame, frameWrapper);
      frameWrapper.parentNode.removeChild(frameWrapper);
    }
  }
};

// Handle main navigation menu toggling on small screens
function navToggleHandler(e) {
  e.preventDefault();
  document.body.classList.toggle("js-nav-open");
}

window.addMainNavigationHandlers = function () {
  const menuToggle = document.querySelectorAll(".js-nav-toggle");
  if (menuToggle) {
    for (let i = 0; i < menuToggle.length; i++) {
      menuToggle[i].addEventListener("click", navToggleHandler, false);
    }
  }
};

window.removeMainNavigationHandlers = function () {
  document.body.classList.remove("js-nav-open");
  const menuToggle = document.querySelectorAll(".js-nav-toggle");
  if (menuToggle) {
    for (let i = 0; i < menuToggle.length; i++) {
      menuToggle[i].removeEventListener("click", navToggleHandler, false);
    }
  }
};

// Handle announcement close button click
const hasLocalStorage = (function () {
  try {
    localStorage.setItem("__test", true);
    localStorage.removeItem("__test");
    return true;
  } catch (exception) {
    return false;
  }
})();

function announcementCloseHandler(e) {
  e.preventDefault();
  const anncmnt = document.querySelector(".js-announcement");
  const anncmntKey = "hide-announcement-bar";
  const currentAnncmnt = anncmnt.dataset.anncmntId;
  anncmnt.classList.add("is-hidden");
  if (hasLocalStorage) {
    localStorage.setItem(anncmntKey, currentAnncmnt);
  }
}

window.addAnnouncementHandlers = function () {
  const anncmnt = document.querySelector(".js-announcement");
  if (anncmnt) {
    const anncmntClose = document.querySelector(".js-announcment-close");
    const anncmntKey = "hide-announcement-bar";
    const currentAnncmnt = anncmnt.dataset.anncmntId;
    if (hasLocalStorage) {
      if (localStorage.getItem(anncmntKey) != currentAnncmnt) {
        anncmnt.classList.remove("is-hidden");
      }
    }
    anncmntClose.addEventListener("click", announcementCloseHandler, false);
  }
};

window.removeAnnouncementHandlers = function () {
  const anncmnt = document.querySelector(".js-announcement");
  if (anncmnt) {
    const anncmntClose = document.querySelector(".js-announcment-close");
    const anncmntKey = "hide-announcement-bar";
    const currentAnncmnt = anncmnt.dataset.anncmntId;
    if (hasLocalStorage) {
      if (localStorage.getItem(anncmntKey) == currentAnncmnt) {
        anncmnt.classList.add("is-hidden");
      }
    }
    anncmntClose.removeEventListener("click", announcementCloseHandler, false);
  }
};

// Handle docs navigation menu toggling on small screens
function docsNavToggleHandler(e) {
  e.preventDefault();
  //document.body.classList.toggle('docs-menu--opened');
  document
    .getElementsByClassName("docs-content")[0]
    .classList.toggle("docs-menu--opened"); // can't attach to body since we limit the scope of the docs.scss to the div docs-content (the one just below div with class docs-css), so we add the docs-menu--opened class to it instead of body
}
// Handle submenu toggling
function submenuToggleHandler(e) {
  e.preventDefault();
  this.parentNode.classList.toggle("active");
}

window.addDocsNavigationHandlers = function () {
  const docsNavToggle = document.getElementById("docs-nav-toggle");
  if (docsNavToggle) {
    docsNavToggle.addEventListener("click", docsNavToggleHandler, false);
  }

  const docsSubmenuToggle = document.querySelectorAll(".docs-submenu-toggle");
  if (docsSubmenuToggle) {
    for (let i = 0; i < docsSubmenuToggle.length; i++) {
      docsSubmenuToggle[i].addEventListener(
        "click",
        submenuToggleHandler,
        false
      );
    }
  }
};

window.removeDocsNavigationHandlers = function () {
  // Remove docs nav related classes on page load
  document.body.classList.remove("docs-menu--opened");

  const docsNavToggle = document.getElementById("docs-nav-toggle");
  if (docsNavToggle) {
    docsNavToggle.removeEventListener("click", docsNavToggleHandler, false);
  }

  const docsSubmenuToggle = document.querySelectorAll(".docs-submenu-toggle");
  if (docsSubmenuToggle) {
    for (let i = 0; i < docsSubmenuToggle.length; i++) {
      docsSubmenuToggle[i].removeEventListener(
        "click",
        submenuToggleHandler,
        false
      );
    }
  }
};

// Table of contents for the docs section
window.addPageNavLinks = function () {
  const pageToc = document.getElementById("page-nav-inside");
  const pageTocContainer = document.getElementById("page-nav-link-container");

  if (pageToc && pageTocContainer) {
    const pageContent = document.querySelector(".type-docs .post-content");

    // Create in-page navigation
    const headerLinks = getHeaderLinks({
      root: pageContent,
    });
    if (headerLinks.length > 0) {
      pageToc.classList.add("has-links");
      renderHeaderLinks(pageTocContainer, headerLinks);
    }

    // Scroll to anchors
    let scroll = new SmoothScroll("[data-scroll]");
    let hash = window.decodeURI(location.hash.replace("#", ""));
    if (hash !== "") {
      window.setTimeout(function () {
        let anchor = document.getElementById(hash);
        if (anchor) {
          scroll.animateScroll(anchor);
        }
      }, 0);
    }

    // Highlight current anchor
    let pageTocLinks = pageTocContainer.getElementsByTagName("a");
    if (pageTocLinks.length > 0) {
      let spy = new Gumshoe("#page-nav-inside a", {
        nested: true,
        nestedClass: "active-parent",
      });
    }

    // Add link to page content headings
    let pageHeadings = getElementsByTagNames(pageContent, ["h2", "h3"]);
    for (let i = 0; i < pageHeadings.length; i++) {
      let heading = pageHeadings[i];
      if (typeof heading.id !== "undefined" && heading.id !== "") {
        heading.insertBefore(anchorForId(heading.id), heading.firstChild);
      }
    }

    // Copy link url
    let clipboard = new ClipboardJS(".hash-link", {
      text: function (trigger) {
        return (
          window.location.href.replace(window.location.hash, "") +
          trigger.getAttribute("href")
        );
      },
    });
  }
};

window.removePageNavLinks = function () {
  const pageToc = document.getElementById("page-nav-inside");
  const pageTocContainer = document.getElementById("page-nav-link-container");

  if (pageToc && pageTocContainer) {
    pageToc.classList.remove("has-links");
    while (pageTocContainer.firstChild) {
      pageTocContainer.removeChild(pageTocContainer.firstChild);
    }
  }
};

function getElementsByTagNames(root, tagNames) {
  let elements = [];
  for (let i = 0; i < root.children.length; i++) {
    let element = root.children[i];
    let tagName = element.nodeName.toLowerCase();
    if (tagNames.includes(tagName)) {
      elements.push(element);
    }
    elements = elements.concat(getElementsByTagNames(element, tagNames));
  }
  return elements;
}

function createLinksForHeaderElements(elements) {
  let result = [];
  let stack = [
    {
      level: 0,
      children: result,
    },
  ];
  let re = /^h(\d)$/;
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let tagName = element.nodeName.toLowerCase();
    let match = re.exec(tagName);
    if (!match) {
      console.warn("can not create links to non header element");
      continue;
    }
    let headerLevel = parseInt(match[1], 10);
    if (!element.id) {
      if (!element.textContent) {
        console.warn(
          "can not create link to element without id and without text content"
        );
        continue;
      }
      element.id = element.textContent
        .toLowerCase()
        .replace(/[^\w]+/g, "_")
        .replace(/^_/, "")
        .replace(/_$/, "");
    }
    let link = document.createElement("a");
    link.href = "#" + element.id;
    link.setAttribute("data-scroll", "");
    link.appendChild(document.createTextNode(element.textContent));
    let obj = {
      id: element.id,
      level: headerLevel,
      textContent: element.textContent,
      element: element,
      link: link,
      children: [],
    };
    if (headerLevel > stack[stack.length - 1].level) {
      stack[stack.length - 1].children.push(obj);
      stack.push(obj);
    } else {
      while (headerLevel <= stack[stack.length - 1].level && stack.length > 1) {
        stack.pop();
      }
      stack[stack.length - 1].children.push(obj);
      stack.push(obj);
    }
  }
  return result;
}

function getHeaderLinks(options = {}) {
  let tagNames = options.tagNames || ["h2", "h3"];
  let root = options.root || document.body;
  let headerElements = getElementsByTagNames(root, tagNames);
  return createLinksForHeaderElements(headerElements);
}

function renderHeaderLinks(element, links) {
  if (links.length === 0) {
    return;
  }
  let ulElm = document.createElement("ul");
  for (let i = 0; i < links.length; i++) {
    let liElm = document.createElement("li");
    liElm.append(links[i].link);
    if (links[i].children.length > 0) {
      renderHeaderLinks(liElm, links[i].children);
    }
    ulElm.appendChild(liElm);
  }
  element.appendChild(ulElm);
}

function anchorForId(id) {
  let anchor = document.createElement("a");
  anchor.setAttribute("class", "hash-link");
  anchor.setAttribute("data-scroll", "");
  anchor.href = "#" + id;
  anchor.innerHTML =
    '<span class="icon-copy" aria-hidden="true"></span><span class="screen-reader-text">Copy</span>';
  return anchor;
}

// Syntax Highlighter
//Prism.highlightAll();
