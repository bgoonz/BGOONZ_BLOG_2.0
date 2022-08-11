/* eslint-disable no-undef */
window.onGatsbyInitialClientRender = () => {
    /**
     * Main JS file for theme behaviours
     */
    // Responsive video embeds
    const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
    reframe(videoEmbeds.join(','));

    // Handle main navigation menu toggling on small screens
    function menuToggleHandler(e) {
        e.preventDefault();
        document.body.classList.toggle('menu--opened');
    }

    // Handle docs navigation menu toggling on small screens
    function docsNavToggleHandler(e) {
        e.preventDefault();
        document.body.classList.toggle('docs-menu--opened');
    }

    // Handle submenu toggling
    function submenuToggleHandler(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
    }

    window.addMainNavigationHandlers = () => {
        const menuToggle = document.querySelectorAll('.menu-toggle');
        if (menuToggle) {
            for (const element of menuToggle) {
                element.addEventListener('click', menuToggleHandler, false);
            }
        }

        const submenuToggle = document.querySelectorAll('.submenu-toggle');
        if (submenuToggle) {
            for (const element of submenuToggle) {
                element.addEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.removeMainNavigationHandlers = () => {
        // Remove nav related classes on page load
        document.body.classList.remove('menu--opened');

        const menuToggle = document.querySelectorAll('.menu-toggle');
        if (menuToggle) {
            for (const element of menuToggle) {
                element.removeEventListener('click', menuToggleHandler, false);
            }
        }

        const submenuToggle = document.querySelectorAll('.submenu-toggle');
        if (submenuToggle) {
            for (const element of submenuToggle) {
                element.removeEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.addDocsNavigationHandlers = () => {
        const docsNavToggle = document.getElementById('docs-nav-toggle');
        if (docsNavToggle) {
            docsNavToggle.addEventListener('click', docsNavToggleHandler, false);
        }

        const docsSubmenuToggle = document.querySelectorAll('.docs-submenu-toggle');
        if (docsSubmenuToggle) {
            for (const element of docsSubmenuToggle) {
                element.addEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.removeDocsNavigationHandlers = () => {
        // Remove docs nav related classes on page load
        document.body.classList.remove('docs-menu--opened');

        const docsNavToggle = document.getElementById('docs-nav-toggle');
        if (docsNavToggle) {
            docsNavToggle.removeEventListener('click', docsNavToggleHandler, false);
        }

        const docsSubmenuToggle = document.querySelectorAll('.docs-submenu-toggle');
        if (docsSubmenuToggle) {
            for (const element of docsSubmenuToggle) {
                element.removeEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.addPageNavLinks = () => {
        const pageToc = document.getElementById('page-nav-inside');
        const pageTocContainer = document.getElementById('page-nav-link-container');

        if (pageToc && pageTocContainer) {
            const pageContent = document.querySelector('.type-docs .post-content');

            // Create in-page navigation
            const headerLinks = getHeaderLinks({
                root: pageContent
            });
            if (headerLinks.length > 0) {
                pageToc.classList.add('has-links');
                renderHeaderLinks(pageTocContainer, headerLinks);
            }

            // Scroll to anchors
            const scroll = new SmoothScroll('[data-scroll]');
            const hash = window.decodeURI(location.hash.replace('#', ''));
            if (hash !== '') {
                window.setTimeout(() => {
                    const anchor = document.getElementById(hash);
                    if (anchor) {
                        scroll.animateScroll(anchor);
                    }
                }, 0);
            }

            // Add link to page content headings
            const pageHeadings = getElementsByTagNames(pageContent, ['h2', 'h3']);
            for (let heading of pageHeadings) {
                if (typeof heading.id !== 'undefined' && heading.id !== '') {
                    heading.insertBefore(anchorForId(heading.id), heading.firstChild);
                }
            }
        }
    };

    window.removePageNavLinks = () => {
        const pageToc = document.getElementById('page-nav-inside');
        const pageTocContainer = document.getElementById('page-nav-link-container');

        if (pageToc && pageTocContainer) {
            pageToc.classList.remove('has-links');
            while (pageTocContainer.firstChild) {
                pageTocContainer.removeChild(pageTocContainer.firstChild);
            }
        }
    };

    function getElementsByTagNames(root, tagNames) {
        let elements = [];
        for (let element of root.children) {
            const tagName = element.nodeName.toLowerCase();
            if (tagNames.includes(tagName)) {
                elements.push(element);
            }
            elements = elements.concat(getElementsByTagNames(element, tagNames));
        }
        return elements;
    }

    function createLinksForHeaderElements(elements) {
        const result = [];
        const stack = [
            {
                level: 0,
                children: result
            }
        ];
        const re = /^h(\d)$/;
        for (let element of elements) {
            const tagName = element.nodeName.toLowerCase();
            const match = re.exec(tagName);
            if (!match) {
                console.warn('can not create links to non header element');
                continue;
            }
            const headerLevel = parseInt(match[1], 10);
            if (!element.id) {
                if (!element.textContent) {
                    console.warn('can not create link to element without id and without text content');
                    continue;
                }
                element.id = element.textContent
                    .toLowerCase()
                    .replace(/[^\w]+/g, '_')
                    .replace(/^_/, '')
                    .replace(/_$/, '');
            }
            const link = document.createElement('a');
            link.href = `#${element.id}`;
            link.setAttribute('data-scroll', '');
            link.appendChild(document.createTextNode(element.textContent));
            const obj = {
                id: element.id,
                level: headerLevel,
                textContent: element.textContent,
                element,
                link,
                children: []
            };
            if (!(headerLevel > stack[stack.length - 1].level)) {
                while (headerLevel <= stack[stack.length - 1].level && stack.length > 1) {
                    stack.pop();
                }
            }
            stack[stack.length - 1].children.push(obj);
            stack.push(obj);
        }
        return result;
    }

    function getHeaderLinks(options = {}) {
        const tagNames = options.tagNames || ['h2', 'h3'];
        const root = options.root || document.body;
        const headerElements = getElementsByTagNames(root, tagNames);
        return createLinksForHeaderElements(headerElements);
    }

    function renderHeaderLinks(element, links) {
        if (links.length === 0) {
            return;
        }
        const ulElm = document.createElement('ul');
        for (const link of links) {
            const liElm = document.createElement('li');
            liElm.append(link.link);
            if (link.children.length > 0) {
                renderHeaderLinks(liElm, link.children);
            }
            ulElm.appendChild(liElm);
        }
        element.appendChild(ulElm);
    }

    function anchorForId(id) {
        const anchor = document.createElement('a');
        anchor.setAttribute('class', 'hash-link');
        anchor.setAttribute('data-scroll', '');
        anchor.href = `#${id}`;
        anchor.innerHTML = '<span class="screen-reader-text">Copy</span>';
        return anchor;
    }

    // Syntax Highlighter
    Prism.highlightAll();
};
