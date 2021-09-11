---
title: lorem-ipsum
subtitle: lorem-ipsum
date: '2021-09-11'
thumb_image_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: post
---

# Javascript Interview Questions:


### Table of Contents

| No. | Questions |
|---- | ---------
|1  | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
|2  | [What is prototype chain](#what-is-a-prototype-chain)|
|3  | [What is the difference between Call, Apply and Bind](#what-is-the-difference-between-call-apply-and-bind)|
|4  | [What is JSON and its common operations](#what-is-json-and-its-common-operations)|
|5  | [What is the purpose of the array slice method](#what-is-the-purpose-of-the-array-slice-method)|
|6  | [What is the purpose of the array splice method](#what-is-the-purpose-of-the-array-splice-method)|
|7  | [What is the difference between slice and splice](#what-is-the-difference-between-slice-and-splice)|
|8  | [How do you compare Object and Map](#how-do-you-compare-object-and-map)|
|9  | [What is the difference between == and === operators](#what-is-the-difference-between--and--operators)|
|10 | [What are lambda or arrow functions](#what-are-lambda-or-arrow-functions)|
|11 | [What is a first class function](#what-is-a-first-class-function)|
|12 | [What is a first order function](#what-is-a-first-order-function)|
|13 | [What is a higher order function](#what-is-a-higher-order-function)|
|14 | [What is a unary function](#what-is-a-unary-function)|
|15 | [What is the currying function](#what-is-the-currying-function)|
|16 | [What is a pure function](#what-is-a-pure-function)|
|17 | [What is the purpose of the let keyword](#what-is-the-purpose-of-the-let-keyword)|
|18 | [What is the difference between let and var](#what-is-the-difference-between-let-and-var)|
|19 | [What is the reason to choose the name let as a keyword](#what-is-the-reason-to-choose-the-name-let-as-a-keyword)|
|20 | [How do you redeclare variables in switch block without an error](#how-do-you-redeclare-variables-in-switch-block-without-an-error)|
|21 | [What is the Temporal Dead Zone](#what-is-the-temporal-dead-zone)|
|22 | [What is IIFE(Immediately Invoked Function Expression)](#what-is-iifeimmediately-invoked-function-expression)|
|23 | [What is the benefit of using modules](#what-is-the-benefit-of-using-modules)|
|24 | [What is memoization](#what-is-memoization)|
|25 | [What is Hoisting](#what-is-hoisting)|
|26 | [What are classes in ES6](#what-are-classes-in-es6)|
|27 | [What are closures](#what-are-closures)|
|28 | [What are modules](#what-are-modules)|
|29 | [Why do you need modules](#why-do-you-need-modules)|
|30 | [What is scope in javascript](#what-is-scope-in-javascript)|
|31 | [What is a service worker](#what-is-a-service-worker)|
|32 | [How do you manipulate DOM using a service worker](#how-do-you-manipulate-dom-using-a-service-worker)|
|33 | [How do you reuse information across service worker restarts](#how-do-you-reuse-information-across-service-worker-restarts)|
|34 | [What is IndexedDB](#what-is-indexeddb)|
|35 | [What is web storage](#what-is-web-storage)|
|36 | [What is a post message](#what-is-a-post-message)|
|37 | [What is a cookie](#what-is-a-cookie)|
|38 | [Why do you need a Cookie](#why-do-you-need-a-cookie)|
|39 | [What are the options in a cookie](#what-are-the-options-in-a-cookie)|
|40 | [How do you delete a cookie](#how-do-you-delete-a-cookie)|
|41 | [What are the differences between cookie, local storage and session storage](#What-are-the-differences-between-cookie-local-storage-and-session-storage)|
|42 | [What is the main difference between localStorage and sessionStorage](#what-is-the-main-difference-between-localstorage-and-sessionstorage)|
|43 | [How do you access web storage](#how-do-you-access-web-storage)|
|44 | [What are the methods available on session storage](#what-are-the-methods-available-on-session-storage)|
|45 | [What is a storage event and its event handler](#what-is-a-storage-event-and-its-event-handler)|
|46 | [Why do you need web storage](#why-do-you-need-web-storage)|
|47 | [How do you check web storage browser support](#how-do-you-check-web-storage-browser-support)|
|48 | [How do you check web workers browser support](#how-do-you-check-web-workers-browser-support)|
|49 | [Give an example of web worker](#give-an-example-of-web-worker)|
|50 | [What are the restrictions of web workers on DOM](#what-are-the-restrictions-of-web-workers-on-dom)|
|51 | [What is a promise](#what-is-a-promise)|
|52 | [Why do you need a promise](#why-do-you-need-a-promise)|
|53 | [What are the three states of promise](#what-are-the-three-states-of-promise)|
|54 | [What is a callback function](#what-is-a-callback-function)|
|55 | [Why do we need callbacks](#why-do-we-need-callbacks)|
|56 | [What is a callback hell](#what-is-a-callback-hell)|
|57 | [What is server-sent events](#what-is-server-sent-events)|
|58 | [How do you receive server-sent event notifications](#how-do-you-receive-server-sent-event-notifications)|
|59 | [How do you check browser support for server-sent events](#how-do-you-check-browser-support-for-server-sent-events)|
|60 | [What are the events available for server sent events](#what-are-the-events-available-for-server-sent-events)|
|61 | [What are the main rules of promise](#what-are-the-main-rules-of-promise)|
|62 | [What is callback in callback](#what-is-callback-in-callback)|
|63 | [What is promise chaining](#what-is-promise-chaining)|
|64 | [What is promise.all](#what-is-promise.all)|
|65 | [What is the purpose of race method in promise](#what-is-the-purpose-of-race-method-in-promise)|
|66 | [What is a strict mode in javascript](#what-is-a-strict-mode-in-javascript)|
|67 | [Why do you need strict mode](#why-do-you-need-strict-mode)|
|68 | [How do you declare strict mode](#how-do-you-declare-strict-mode)|
|69 | [What is the purpose of double exclamation](#what-is-the-purpose-of-double-exclamation)|
|70 | [What is the purpose of delete operator](#what-is-the-purpose-of-delete-operator)|
|71 | [What is typeof operator](#what-is-typeof-operator)|
|72 | [What is undefined property](#what-is-undefined-property)|
|73 | [What is null value](#what-is-null-value)|
|74 | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined)|
|75 | [What is eval](#What-is-eval)|
|76 | [What is the difference between window and document](#what-is-the-difference-between-window-and-document)|
|77 | [How do you access history in javascript](#how-do-you-access-history-in-javascript)|
|78 | [How do you detect caps lock key turned on or not](#how-do-you-detect-caps-lock-key-turned-on-or-not)|
|79 | [What is isNaN](#what-is-isnan)|
|80 | [What are the differences between undeclared and undefined variables](#what-are-the-differences-between-undeclared-and-undefined-variables)|
|81 | [What are global variables](#what-are-global-variables)|
|82 | [What are the problems with global variables](#what-are-the-problems-with-global-variables)|
|83 | [What is NaN property](#what-is-nan-property)|
|84 | [What is the purpose of isFinite function](#what-is-the-purpose-of-isfinite-function)
|85 | [What is an event flow](#what-is-an-event-flow)|
|86 | [What is event bubbling](#what-is-event-bubbling)|
|87 | [What is event capturing](#what-is-event-capturing)|
|88 | [How do you submit a form using JavaScript](#how-do-you-submit-a-form-using-javascript)|
|89 | [How do you find operating system details](#how-do-you-find-operating-system-details)|
|90 | [What is the difference between document load and DOMContentLoaded events](#what-is-the-difference-between-document-load-and-domcontentloaded-events)|
|91 | [What is the difference between native, host and user objects](#what-is-the-difference-between-native,-host-and-user-objects)|
|92 | [What are the tools or techniques used for debugging JavaScript code](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code)|
|93 | [What are the pros and cons of promises over callbacks](#what-are-the-pros-and-cons-of-promises-over-callbacks)|
|94 | [What is the difference between an attribute and a property](#what-is-the-difference-between-an-attribute-and-a-property)|
|95 | [What is same-origin policy](#what-is-same-origin-policy)|
|96 | [What is the purpose of void 0](#what-is-the-purpose-of-void-0)|
|97 | [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language)|
|98 | [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language)|
|99 | [Is there any relation between Java and JavaScript](#is-there-any-relation-between-java-and-javascript)|
|100| [What are events](#what-are-events)|
|101| [Who created javascript](#who-created-javascript)|
|102| [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method)|
|103| [What is the use of stopPropagation method](#what-is-the-use-of-stoppropagation-method)|
|104| [What are the steps involved in return false](#what-are-the-steps-involved-in-return-false)|
|105| [What is BOM](#what-is-bom)|
|106| [What is the use of setTimeout](#what-is-the-use-of-settimeout)|
|107| [What is the use of setInterval](#what-is-the-use-of-setinterval)|
|108| [Why is JavaScript treated as Single threaded](#why-is-javascript-treated-as-single-threaded)|
|109| [What is an event delegation](#what-is-an-event-delegation)|
|110| [What is ECMAScript](#what-is-ecmascript)|
|111| [What is JSON](#what-is-json)|
|112| [What are the syntax rules of JSON](#what-are-the-syntax-rules-of-json)|
|113| [What is the purpose JSON stringify](#what-is-the-purpose-json-stringify)|
|114| [How do you parse JSON string](#how-do-you-parse-json-string)|
|115| [Why do you need JSON](#why-do-you-need-json)|
|116| [What are PWAs](#what-are-pwas?)|
|117| [What is the purpose of clearTimeout method](#what-is-the-purpose-of-cleartimeout-method)|
|118| [What is the purpose of clearInterval method](#what-is-the-purpose-of-clearinterval-method)|
|119| [How do you redirect new page in javascript](#how-do-you-redirect-new-page-in-javascript)|
|120| [How do you check whether a string contains a substring](#how-do-you-check-whether-a-string-contains-a-substring)|
|121| [How do you validate an email in javascript](#how-do-you-validate-an-email-in-javascript)|
|122| [How do you get the current url with javascript](#how-do-you-get-the-current-url-with-javascript)|
|123| [What are the various url properties of location object](#what-are-the-various-url-properties-of-location-object)|
|124| [How do get query string values in javascript](#how-do-get-query-string-values-in-javascript)|
|125| [How do you check if a key exists in an object](#how-do-you-check-if-a-key-exists-in-an-object)|
|126| [How do you loop through or enumerate javascript object](#how-do-you-loop-through-or-enumerate-javascript-object)|
|127| [How do you test for an empty object](#how-do-you-test-for-an-empty-object)|
|128| [What is an arguments object](#what-is-an-arguments-object)|
|129| [How do you make first letter of the string in an uppercase](#how-do-you-make-first-letter-of-the-string-in-an-uppercase)|
|130| [What are the pros and cons of for loop](#what-are-the-pros-and-cons-of-for-loop)|
|131| [How do you display the current date in javascript](#how-do-you-display-the-current-date-in-javascript)|
|132| [How do you compare two date objects](#how-do-you-compare-two-date-objects)|
|133| [How do you check if a string starts with another string](#how-do-you-check-if-a-string-starts-with-another-string)|
|134| [How do you trim a string in javascript](#how-do-you-trim-a-string-in-javascript)|
|135| [How do you add a key value pair in javascript](#how-do-you-add-a-key-value-pair-in-javascript)|
|136| [Is the '!--' notation represents a special operator](#is-the-'!--'-notation-represents-a-special-operator)|
|137| [How do you assign default values to variables](#how-do-you-assign-default-values-to-variables)|
|138| [How do you define multiline strings](#how-do-you-define-multiline-strings)|
|139| [What is an app shell model](#what-is-an-app-shell-model)|
|140| [Can we define properties for functions](#can-we-define-properties-for-functions)|
|141| [What is the way to find the number of parameters expected by a function](#what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function)|
|142| [What is a polyfill](#what-is-a-polyfill)|
|143| [What are break and continue statements](#what-are-break-and-continue-statements)|
|144| [What are js labels](#what-are-js-labels)|
|145| [What are the benefits of keeping declarations at the top](#what-are-the-benefits-of-keeping-declarations-at-the-top)|
|146| [What are the benefits of initializing variables](#what-are-the-benefits-of-initializing-variables)|
|147| [What are the recommendations to create new object](#what-are-the-recommendations-to-create-new-object)|
|148| [How do you define JSON arrays](#how-do-you-define-json-arrays)|
|149| [How do you generate random integers](#how-do-you-generate-random-integers)|
|150| [Can you write a random integers function to print integers with in a range](#can-you-write-a-random-integers-function-to-print-integers-with-in-a-range)|
|151| [What is tree shaking](#what-is-tree-shaking)|
|152| [What is the need of tree shaking](#what-is-the-need-of-tree-shaking)|
|153| [Is it recommended to use eval](#is-it-recommended-to-use-eval)|
|154| [What is a Regular Expression](#what-is-a-regular-expression)|
|155| [What are the string methods available in Regular expression](#what-are-the-string-methods-available-in-regular-expression)|
|156| [What are modifiers in regular expression](#what-are-modifiers-in-regular-expression)|
|157| [What are regular expression patterns](#what-are-regular-expression-patterns)|
|158| [What is a RegExp object](#what-is-a-regexp-object)|
|159| [How do you search a string for a pattern](#how-do-you-search-a-string-for-a-pattern)|
|160| [What is the purpose of exec method](#what-is-the-purpose-of-exec-method)|
|161| [How do you change style of a HTML element](#how-do-you-change-style-of-a-html-element)|
|162| [What would be the result of 1+2+'3'](#what-would-be-the-result-of-1+2+'3')|
|163| [What is a debugger statement](#what-is-a-debugger-statement)|
|164| [What is the purpose of breakpoints in debugging](#what-is-the-purpose-of-breakpoints-indebugging)|
|165| [Can I use reserved words as identifiers](#can-i-use-reserved-words-as-identifiers)|
|166| [How do you detect a mobile browser](#how-do-you-detect-a-mobile-browser)|
|167| [How do you detect a mobile browser without regexp](#how-do-you-detect-a-mobile-browser-without-regexp)|
|168| [How do you get the image width and height using JS](#how-do-you-get-the-image-width-and-height-using-js)|
|169| [How do you make synchronous HTTP request](#how-do-you-make-synchronous-http-request)|
|170| [How do you make asynchronous HTTP request](#how-do-you-make-asynchronous-http-request)|
|171| [How do you convert date to another timezone in javascript](#how-do-you-convert-date-to-another-timezone-in-javascript)|
|172| [What are the properties used to get size of window](#what-are-the-properties-used-to-get-size-of-window)|
|173| [What is a conditional operator in javascript](#what-is-a-conditional-operator-in-javascript)|
|174| [Can you apply chaining on conditional operator](#Can-you-apply-chaining-on-conditional-operator)|
|175| [What are the ways to execute javascript after page load](#what-are-the-ways-to-execute-javascript-after-page-load)|
|176| [What is the difference between proto and prototype](#what-is-the-difference-between-proto-and-prototype)|
|177| [Give an example where do you really need semicolon](#give-an-example-where-do-you-really-need-semicolon)|
|178| [What is a freeze method](#what-is-a-freeze-method)|
|179| [What is the purpose of freeze method](#what-is-the-purpose-of-freeze-method)|
|180| [Why do I need to use freeze method](#why-do-i-need-to-use-freeze-method)|
|181| [How do you detect a browser language preference](#how-do-you-detect-a-browser-language-preference)|
|182| [How to convert string to title case with javascript](#how-to-convert-string-to-title-case-with-javascript)|
|183| [How do you detect javascript disabled in the page](#how-do-you-detect-javascript-disabled-in-the-page)|
|184| [What are various operators supported by javascript](#what-are-various-operators-supported-by-javascript)|
|185| [What is a rest parameter](#what-is-a-rest-parameter)|
|186| [What happens if you do not use rest parameter as a last argument](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument)|
|187| [What are the bitwise operators available in javascript](#what-are-the-bitwise-operators-available-in-javascript)|
|188| [What is a spread operator](#what-is-a-spread-operator)|
|189| [How do you determine whether object is frozen or not](#how-do-you-determine-whether-object-is-frozen-or-not)|
|190| [How do you determine two values same or not using object](#how-do-you-determine-two-values-same-or-not-using-object)|
|191| [What is the purpose of using object is method](#what-is-the-purpose-of-using-object-is-method)|
|192| [How do you copy properties from one object to other](#how-do-you-copy-properties-from-one-object-to-other)|
|193| [What are the applications of assign method](#what-are-the-applications-of-assign-method)|
|194| [What is a proxy object](#what-is-a-proxy-object)|
|195| [What is the purpose of seal method](#what-is-the-purpose-of-seal-method)|
|196| [What are the applications of seal method](#what-are-the-applications-of-seal-method)|
|197| [What are the differences between freeze and seal methods](#what-are-the-differences-between-freeze-and-seal-methods)|
|198| [How do you determine if an object is sealed or not](#how-do-you-determine-if-an-object-is-sealed-or-not)|
|199| [How do you get enumerable key and value pairs](#how-do-you-get-enumerable-key-and-value-pairs)|
|200| [What is the main difference between Object.values and Object.entries method](#what-is-the-main-difference-between-object.values-and-object.entries-method)|
|201| [How can you get the list of keys of any object](#how-can-you-get-the-list-of-keys-of-any-object)|
|202| [How do you create an object with prototype](#how-do-you-create-an-object-with-prototype)|
|203| [What is a WeakSet](#what-is-a-weakset)|
|204| [What are the differences between WeakSet and Set](#what-are-the-differences-between-weakset-and-set)|
|205| [List down the collection of methods available on WeakSet](#list-down-the-collection-of-methods-available-on-weakset)|
|206| [What is a WeakMap](#what-is-a-weakmap)|
|207| [What are the differences between WeakMap and Map](#what-are-the-differences-between-weakmap-and-map)|
|208| [List down the collection of methods available on WeakMap](#list-down-the-collection-of-methods-available-on-weakmap)|
|209| [What is the purpose of uneval](#what-is-the-purpose-of-uneval)|
|210| [How do you encode an URL](#how-do-you-encode-an-url)|
|211| [How do you decode an URL](#how-do-you-decode-an-url)|
|212| [How do you print the contents of web page](#how-do-you-print-the-contents-of-web-page)|
|213| [What is the difference between uneval and eval](#what-is-the-difference-between-uneval-and-eval)|
|214| [What is an anonymous function](#what-is-an-anonymous-function)|
|215| [What is the precedence order between local and global variables](#what-is-the-precedence-order-between-local-and-global-variables)|
|216| [What are javascript accessors](#what-are-javascript-accessors)|
|217| [How do you define property on Object constructor](#how-do-you-define-property-on-object-constructor)|
|218| [What is the difference between get and defineProperty](#what-is-the-difference-between-get-and-defineproperty)|
|219| [What are the advantages of Getters and Setters](#what-are-the-advantages-of-getters-and-setters)|
|220| [Can I add getters and setters using defineProperty method](#can-i-add-getters-and-setters-using-defineproperty-method)|
|221| [What is the purpose of switch-case](#what-is-the-purpose-of-switch-case)|
|222| [What are the conventions to be followed for the usage of swtich case](#what-are-the-conventions-to-be-followed-for-the-usage-of-swtich-case)|
|223| [What are primitive data types](#what-are-primitive-data-types)|
|224| [What are the different ways to access object properties](#what-are-the-different-ways-to-access-object-properties)|
|225| [What are the function parameter rules](#what-are-the-function-parameter-rules)|
|226| [What is an error object](#what-is-an-error-object)|
|227| [When you get a syntax error](#when-you-get-a-syntax-error)|
|228| [What are the different error names from error object](#what-are-the-different-error-names-from-error-object)|
|229| [What are the various statements in error handling](#what-are-the-various-statements-in-error-handling)|
|230| [What are the two types of loops in javascript](#what-are-the-two-types-of-loops-in-javascript)|
|231| [What is nodejs](#what-is-nodejs)|
|232| [What is an Intl object](#what-is-an-intl-object)|
|233| [How do you perform language specific date and time formatting](#how-do-you-perform-language-specific-date-and-time-formatting)|
|234| [What is an Iterator](#what-is-an-iterator)|
|235| [How does synchronous iteration works](#how-does-synchronous-iteration-works)|
|236| [What is an event loop](#what-is-an-event-loop)|
|237| [What is call stack](#what-is-call-stack)|
|238| [What is an event queue](#what-is-an-event-queue)|
|239| [What is a decorator](#what-is-a-decorator)|
|240| [What are the properties of Intl object](#what-are-the-properties-of-intl-object)|
|241| [What is an Unary operator](#what-is-an-unary-operator)|
|242| [How do you sort elements in an array](#how-do-you-sort-elements-in-an-array)|
|243| [What is the purpose of compareFunction while sorting arrays](#what-is-the-purpose-of-comparefunction-while-sorting-arrays)|
|244| [How do you reversing an array](#how-do-you-reversing-an-array)|
|245| [How do you find min and max value in an array](#how-do-you-find-min-and-max-value-in-an-array)|
|246| [How do you find min and max values without Math functions](#how-do-you-find-min-and-max-values-without--math-functions)|
|247| [What is an empty statement and purpose of it](#what-is-an-empty-statement-and-purpose-of-it)|
|248| [How do you get meta data of a module](#how-do-you-get-meta-data-of-a-module)|
|249| [What is a comma operator](#what-is-a-comma-operator)|
|250| [What is the advantage of a comma operator](#what-is-the-advantage-of-a-comma-operator)|
|251| [What is typescript](#what-is-typescript)|
|252| [What are the differences between javascript and typescript](#what-are-the-differences-between-javascript-and-typescript)|
|253| [What are the advantages of typescript over javascript](#what-are-the-advantages-of-typescript-over-javascript)|
|254| [What is an object initializer](#what-is-an-object-initializer)|
|255| [What is a constructor method](#what-is-a-constructor-method)|
|256| [What happens if you write constructor more than once in a class](#what-happens-if-you-write-constructor-more-than-once-in-a-class)|
|257| [How do you call the constructor of a parent class](#how-do-you-call-the-constructor-of-a-parent-class)|
|258| [How do you get the prototype of an object](#how-do-you-get-the-prototype-of-an-object)|
|259| [What happens If I pass string type for getPrototype method](#what-happens-if-i-pass-string-type-for-getprototype-method)|
|260| [How do you set prototype of one object to another](#how-do-you-set-prototype-of-one-object-to-another)|
|261| [How do you check whether an object can be extendable or not](#how-do-you-check-whether-an-object-can-be-extendable-or-not)|
|262| [How do you prevent an object to extend](#how-do-you-prevent-an-object-to-extend)|
|263| [What are the different ways to make an object non-extensible](#what-are-the-different-ways-to-make-an-object-non-extensible)|
|264| [How do you define multiple properties on an object](#how-do-you-define-multiple-properties-on-an-object)|
|265| [What is MEAN in javascript](#what-is-mean-in-javascript)|
|266| [What Is Obfuscation in javascript](#what-is-obfuscation-in-javascript)|
|267| [Why do you need Obfuscation](#why-do-you-need-obfuscation)|
|268| [What is Minification](#what-is-minification)|
|269| [What are the advantages of minification](#what-are-the-advantages-of-minification)|
|270| [What are the differences between Obfuscation and Encryption](#what-are-the-differences-between-obfuscation-and-encryption)|
|271| [What are the common tools used for minification](#what-are-the-common-tools-used-for-minification)|
|272| [How do you perform form validation using javascript](#how-do-you-perform-form-validation-using-javascript)|
|273| [How do you perform form validation without javascript](#how-do-you-perform-form-validation-without-javascript)|
|274| [What are the DOM methods available for constraint validation](#what-are-the-dom-methods-available-for-constraint-validation)|
|275| [What are the available constraint validation DOM properties](#what-are-the-available-constraint-validation-dom-properties)|
|276| [What are the list of validity properties](#what-are-the-list-of-validity-properties)|
|277| [Give an example usage of rangeOverflow property](#give-an-example-usage-of-rangeoverflow-property)|
|278| [Is enums feature available in javascript](#is-enums-feature-available-in-javascript)|
|279| [What is an enum](#What-is-an-enum)|
|280| [How do you list all properties of an object](#how-do-you-list-all-properties-of-an-object)|
|281| [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object)|
|282| [What are the attributes provided by a property descriptor](#what-are-the-attributes-provided-by-a-property-descriptor)|
|283| [How do you extend classes](#how-do-you-extend-classes)|
|284| [How do I modify the url without reloading the page](#how-do-i-modify-the-url-without-reloading-the-page)|
|285| [How do you check whether an array includes a particular value or not](#how-do-you-check-whether-an-array-includes-a-particular-value-or-not)|
|286| [How do you compare scalar arrays](#how-do-you-compare-scalar-arrays)|
|287| [How to get the value from get parameters](#how-to-get-the-value-from-get-parameters)|
|288| [How do you print numbers with commas as thousand separators](#how-do-you-print-numbers-with-commas-as-thousand-separators)|
|289| [What is the difference between java and javascript](#what-is-the-difference-between-java-and-javascript)|
|290| [Does javascript supports namespace](#does-javascript-supports-namespace)|
|291| [How do you declare namespace](#how-do-you-declare-namespace)|
|292| [How do you invoke javascript code in an iframe from parent page](#how-do-you-invoke-javascript-code-in-an-iframe-from-parent-page)|
|293| [How do get the timezone offset from date](#how-do-get-the-timezone-offset-from-date)|
|294| [How do you load CSS and JS files dynamically](#how-do-you-load-css-and-js-files-dynamically)|
|295| [What are the different methods to find HTML elements in DOM](#what-are-the-different-methods-to-find-html-elements-in-dom)|
|296| [What is jQuery](#what-is-jquery)|
|297| [What is V8 JavaScript engine](#what-is-v8-javascript-engine)|
|298| [Why do we call javascript as dynamic language](#why-do-we-call-javascript-as-dynamic-language)|
|299| [What is a void operator](#what-is-a-void-operator)|
|300| [How to set the cursor to wait](#how-to-set-the-cursor-to-wait)|
|301| [How do you create an infinite loop](#how-do-you-create-an-infinite-loop)|
|302| [Why do you need to avoid with statement](#why-do-you-need-to-avoid-with-statement)|
|303| [What is the output of below for loops](#what-is-the-output-of-below-for-loops)|
|304| [List down some of the features of ES6](#list-down-some-of-the-features-of-es6)|
|305| [What is ES6](#what-is-es6)|
|306| [Can I redeclare let and const variables](#can-I-redeclare-let-and-const-variables)|
|307| [Is const variable makes the value immutable](#is-const-variable-makes-the-value-immutable)|
|308| [What are default parameters](#what-are-default-parameters)|
|309| [What are template literals](#what-are-template-literals)|
|310| [How do you write multi-line strings in template literals](#how-do-you-write-multi-line-strings-in-template-literals)|
|311| [What are nesting templates](#what-are-nesting-templates)|
|312| [What are tagged templates](#what-are-tagged-templates)|
|313| [What are raw strings](#what-are-raw-strings)|
|314| [What is destructuring assignment](#what-is-destructuring-assignment)|
|315| [What are default values in destructuring assignment](#what-are-default-values-in-destructuring-assignment)|
|316| [How do you swap variables in destructuring assignment](#how-do-you-swap-variables-in-destructuring-assignment)|
|317| [What are enhanced object literals](#what-are-enhanced-object-literals)|
|318| [What are dynamic imports](#what-are-dynamic-imports)|
|319| [What are the use cases for dynamic imports](#what-are-the-use-cases-for-dynamic-imports)|
|320| [What are typed arrays](#what-are-typed-arrays)|
|321| [What are the advantages of module loaders](#what-are-the-advantages-of-module-loaders)|
|322| [What is collation](#what-is-collation)|
|323| [What is for...of statement](#what-is-for...of-statement)|
|324| [What is the output of below spread operator array](#what-is-the-output-of-below-spread-operator-array)|
|325| [Is PostMessage secure](#is-postmessage-secure)|
|326| [What are the problems with postmessage target origin as wildcard](#what-are-the-problems-with-postmessage-target-origin-as-wildcard)|
|327| [How do you avoid receiving postMessages from attackers](#how-do-you-avoid-receiving-postmessages-from-attackers)|
|328| [Can I avoid using postMessages completely](#can-i-avoid-using-postmessages-completely)|
|329| [Is postMessages synchronous](#is-postmessages-synchronous)|
|330| [What paradigm is Javascript](#what-paradigm-is-javascript)|
|331| [What is the difference between internal and external javascript](#what-is-the-difference-between-internal-and-external-javascript)|
|332| [Is JavaScript faster than server side script](#is-javascript-faster-than-server-side-script)|
|333| [How do you get the status of a checkbox](#how-do-you-get-the-status-of-a-checkbox)|
|334| [What is the purpose of double tilde operator](#what-is-the-purpose-of-double-tilde-operator)|
|335| [How do you convert character to ASCII code](#how-do-you-convert-character-to-ascii-code)|
|336| [What is ArrayBuffer](#what-is-arraybuffer)|
|337| [What is the output of below string expression](#what-is-the-output-of-below-string-expression)|
|338| [What is the purpose of Error object](#what-is-the-purpose-of-error-object)|
|339| [What is the purpose of EvalError object](#what-is-the-purpose-of-evalerror-object)|
|340| [What are the list of cases error thrown from non-strict mode to strict mode](#what-are-the-list-of-cases-error-thrown-from-non-strict-mode-to-strict-mode)|
|341| [Do all objects have prototypes](#do-all-objects-have-prototypes)|
|342| [What is the difference between a parameter and an argument](#what-is-the-difference-between-a-parameter-and-an-argument)|
|343| [What is the purpose of some method in arrays](#what-is-the-purpose-of-some-method-in-arrays)|
|344| [How do you combine two or more arrays](#how-do-you-combine-two-or-more-arrays)|
|345| [What is the difference between Shallow and Deep copy](#what-is-the-difference-between-shallow-and-deep-copy)|
|346| [How do you create specific number of copies of a string](#how-do-you-create-specific-number-of-copies-of-a-string)|
|347| [How do you return all matching strings against a regular expression](#how-do-you-return-all-matching-strings-against-a-regular-expression)|
|348| [How do you trim a string at the beginning or ending](#how-do-you-trim-a-string-at-the-beginning-or-ending)|
|349| [What is the output of below console statement with unary operator](#what-is-the-output-of-below-console-statement-with-unary-operator)|
|350| [Does javascript uses mixins](#does-javascript-uses-mixins)|
|351| [What is a thunk function](#what-is-a-thunk-function)|
|352| [What are asynchronous thunks](#what-are-asynchronous-thunks)|
|353| [What is the output of below function calls](#what-is-the-output-of-below-function-calls)|
|354| [How to remove all line breaks from a string](#how-to-remove-all-line-breaks-from-a-string)|
|355| [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)|
|356| [What happens with negating an array](#what-happens-with-negating-an-array)|
|357| [What happens if we add two arrays](#what-happens-if-we-add-two-arrays)|
|358| [What is the output of prepend additive operator on falsy values](#what-is-the-output-of-prepend-additive-operator-on-falsy-values)|
|359| [How do you create self string using special characters](#how-do-you-create-self-string-using-special-characters)|
|360| [How do you remove falsy values from an array](#how-do-you-remove-falsy-values-from-an-array)|
|361| [How do you get unique values of an array](#how-do-you-get-unique-values-of-an-array)|
|362| [What is destructuring aliases](#what-is-destructuring-aliases)|
|363| [How do you map the array values without using map method](#how-do-you-map-the-array-values-without-using-map-method)|
|364| [How do you empty an array](#how-do-you-empty-an-array)|
|365| [How do you rounding numbers to certain decimals](#how-do-you-rounding-numbers-to-certain-decimals)|
|366| [What is the easiest way to convert an array to an object](#what-is-the-easiest-way-to-convert-an-array-to-an-object)|
|367| [How do you create an array with some data](#how-do-you-create-an-array-with-some-data)|
|368| [What are the placeholders from console object](#what-are-the-placeholders-from-console-object)|
|369| [Is it possible to add CSS to console messages](#is-it-possible-to-add-css-to-console-messages)|
|370| [What is the purpose of dir method of console object](#what-is-the-purpose-of-dir-method-of-console-object)|
|371| [Is it possible to debug HTML elements in console](#is-it-possible-to-debug-html-elements-in-console)|
|372| [How do you display data in a tabular format using console object](#how-do-you-display-data-in-a-tabular-format-using-console-object)|
|373| [How do you verify that an argument is a Number or not](#how-do-you-verify-that-an-argument-is-a-number-or-not)|
|374| [How do you create copy to clipboard button](#how-do-you-create-copy-to-clipboard-button)|
|375| [What is the shortcut to get timestamp](#what-is-the-shortcut-to-get-timestamp)|
|376| [How do you flattening multi dimensional arrays](#how-do-you-flattening-multi-dimensional-arrays)|
|377| [What is the easiest multi condition checking](#what-is-the-easiest-multi-condition-checking)|
|378| [How do you capture browser back button](#how-do-you-capture-browser-back-button)|
|379| [How do you disable right click in the web page](#how-do-you-disable-right-click-in-the-web-page)|
|380| [What are wrapper objects](#what-are-wrapper-objects)|
|381| [What is AJAX](#what-is-ajax)|
|382| [What are the different ways to deal with Asynchronous Code](#what-are-the-different-ways-to-deal-with-asynchronous-code)|
|383| [How to cancel a fetch request](#how-to-cancel-a-fetch-request)|
|384| [What is web speech API](#what-is-web-speech-api)|
|385| [What is minimum timeout throttling](#what-is-minimum-timeout-throttling)|
|386| [How do you implement zero timeout in modern browsers](#how-do-you-implement-zero-timeout-in-modern-browsers)|
|387| [What are tasks in event loop](#what-are-tasks-in-event-loop)|
|388| [What are microtasks](#what-are-microtasks)|
|389| [What are different event loops](#what-are-different-event-loops)|
|390| [What is the purpose of queueMicrotask](#what-is-the-purpose-of-queuemicrotask)|
|391| [How do you use javascript libraries in typescript file](#how-do-you-use-javascript-libraries-in-typescript-file)|
|392| [What are the differences between promises and observables](#what-are-the-differences-between-promises-and-observables)|
|393| [What is heap](#what-is-heap)|
|394| [What is an event table](#what-is-an-event-table)|
|395| [What is a microTask queue](#what-is-a-microtask-queue)|
|396| [What is the difference between shim and polyfill](#what-is-the-difference-between-shim-and-polyfill)|
|397| [How do you detect primitive or non primitive value type](#how-do-you-detect-primitive-or-non-primitive-value-type)|
|398| [What is babel](#what-is-babel)|
|399| [Is Node.js completely single threaded](#is-node.js-completely-single-threaded)|
|400| [What are the common use cases of observables](#what-are-the-common-use-cases-of-observables)|
|401| [What is RxJS](#what-is-rxjs)|
|402| [What is the difference between Function constructor and function declaration](#what-is-the-difference-between-function-constructor-and-function-declaration)|
|403| [What is a Short circuit condition](#what-is-a-short-circuit-condition)|
|404| [What is the easiest way to resize an array](#what-is-the-easiest-way-to-resize-an-array)|
|405| [What is an observable](#what-is-an-observable)|
|406| [What is the difference between function and class declarations](#what-is-the-difference-between-function-and-class-declarations)|
|407| [What is an async function](#what-is-an-async-function)|
|408| [How do you prevent promises swallowing errors](#how-do-you-prevent-promises-swallowing-errors)|
|409| [What is deno](#what-is-deno)|
|410| [How do you make an object iterable in javascript](#how-do-you-make-an-object-iterable-in-javascript)|
|411| [What is a Proper Tail Call](#what-is-a-proper-tail-call)|
|412| [How do you check an object is a promise or not](#how-do-you-check-an-object-is-a-promise-or-not)|
|413| [How to detect if a function is called as constructor](#how-to-detect-if-a-function-is-called-as-constructor)|
|414| [What are the differences between arguments object and rest parameter](#what-are-the-differences-between-arguments-object-and-rest-parameter)|
|415| [What are the differences between spread operator and rest parameter](#what-are-the-differences-between-spread-operator-and-rest-parameter)|
|416| [What are the different kinds of generators](#what-are-the-different-kinds-of-generators)|
|417| [What are the built-in iterables](#what-are-the-built-in-iterables)|
|418| [What are the differences between for...of and for...in statements](#what-are-the-differences-between-for...of-and-for...in-statements)|
|419| [How do you define instance and non-instance properties](#how-do-you-define-instance-and-non-instance-properties)|
|420| [What is the difference between isNaN and Number.isNaN?](#what-is-the-difference-between-isnan-and-number.isnan)|
|421| [How to invoke an IIFE without any extra brackets?](#how-to-invoke-an-iife-without-any-extra-brackets)|
|422| [Is that possible to use expressions in switch cases?](#is-that-possible-to-use-expressions-in-switch-cases)|
|423| [What is the easiest way to ignore promise errors?](#what-is-the-easiest-way-to-ignore-promise-errors)|
|424| [How do style the console output using CSS?](#how-do-style-the-console-output-using-css)|
|425| [What is nullish coalescing operator(??)?](#what-is-nullish-coalescing-operator-(??))|

1. ### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      The object literal syntax is equivalent to create method when it passes null as parameter

      ```javascript
      var object = {};
      ```

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ```javascript
      function Person(name){
         this.name=name;
         this.age=21;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person(){}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ```javascript
      function func {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ```javascript
      class Person {
         constructor(name) {
            this.name = name;
         }
      }

      var object = new Person("Sudheer");
      ```

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new function(){
         this.name = "Sudheer";
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is a prototype chain

    **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 
    
    The prototype on object instance is available through **Object.getPrototypeOf(object)** or **__proto__** property whereas prototype on constructors function is available through **Object.prototype**.

    ![Screenshot](images/prototype_chain.png)

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is the difference between Call, Apply and Bind

    The difference between Call, Apply and Bind can be explained with below examples,

    **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
    invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
    invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
    ```

    **bind:** returns a new function, allowing you to pass any number of arguments

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);
    inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
    inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**. 
    
    Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

    **[⬆ Back to Top](#table-of-contents)**

4. ### What is JSON and its common operations

    **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
    
    **Parsing:** Converting a string to a native object

    ```javascript
    JSON.parse(text)
    ```

    **Stringification:** converting a native object to a string so it can be transmitted across the network

    ```javascript
    JSON.stringify(object)
    ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the array slice method

    The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegers = [1, 2, 3, 4, 5];
    let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
    let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
    let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
    ```

    **Note:** Slice method won't mutate the original array but it returns the subset as a new array.

    **[⬆ Back to Top](#table-of-contents)**

6. ### What is the purpose of the array splice method

    The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array. 
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
    ```

    **Note:** Splice method modifies the original array and returns the deleted array.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice

    Some of the major difference in a tabular form

    | Slice | Splice |
    |---- | ---------
    | Doesn't modify the original array(immutable)  | Modifies the original array(mutable) |
    | Returns the subset of original array | Returns the deleted elements as array  |
    | Used to pick the elements from array | Used to insert or delete elements to/from array|

    **[⬆ Back to Top](#table-of-contents)**

8. ### How do you compare Object and Map

    **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

    1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
    2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
    3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is the difference between == and === operators

    JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
    1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
    2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
       There are two special cases in this,
       1. NaN is not equal to anything, including NaN.
       2. Positive and negative zeros are equal to one another.
    3. Two Boolean operands are strictly equal if both are true or both are false.
    4. Two objects are strictly equal if they refer to the same Object.
    5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
        null===undefined --> false but null==undefined --> true

    Some of the example which covers the above cases,

    ```javascript
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    []==[] or []===[] //false, refer different objects in memory
    {}=={} or {}==={} //false, refer different objects in memory
    ```

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are lambda or arrow functions

    An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.

    **[⬆ Back to Top](#table-of-contents)**

11. ### What is a first class function

    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

    For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

    ```javascript
    const handler = () => console.log ('This is a click handler function');
    document.addEventListener ('click', handler);
    ```

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is a first order function

    First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

    ```javascript
    const firstOrder = () => console.log ('I am a first order function!');
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is a higher order function

    Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

    ```javascript
    const firstOrderFunc = () => console.log ('Hello, I am a First order function');
    const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is a unary function

    Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
    
    Let us take an example of unary function,

    ```javascript
    const unaryFunction = a => console.log (a + 10); // Add 10 to the given argument and display the value
    ```

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is the currying function

    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function. 
    
    Let's take an example of n-ary function and how it turns into a currying function,

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1,2,3));// 6
    
    const curryUnaryFunction = a => b => c => a + b + c;
    curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction (1) (2); // returns a function: c => 3 + c
    curryUnaryFunction (1) (2) (3); // returns the number 6
    ```

    Curried functions are great to improve **code reusability** and **functional composition**.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is a pure function

    A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.
    
    Let's take an example to see the difference between pure and impure functions,

    ```javascript
    //Impure
    let numberArray = [];
    const impureAddNumber = number => numberArray.push(number);
    //Pure
    const pureAddNumber = number => argNumberArray =>
      argNumberArray.concat([number]);

    //Display the results
    console.log (impureAddNumber(6)); // returns 1
    console.log (numberArray); // returns [6]
    console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
    console.log (numberArray); // returns [6]
    ```

    As per above code snippets, **Push** function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas **Concat** on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.
    
    Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.

    **[⬆ Back to Top](#table-of-contents)**

17. ### What is the purpose of the let keyword

    The `let` statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the `var` keyword used to define a variable globally, or locally to an entire function regardless of block scope.
    
    Let's take an example to demonstrate the usage,

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the difference between let and var

    You can list out the differences in a tabular format

    | var | let |
    |---- | ---------
    | It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
    | It has function scope | It has block scope  |
    | Variables will be hoisted | Hoisted but not initialized |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
       if(username) {
         console.log(salary); // undefined due to hoisting
         console.log(age); // ReferenceError: Cannot access 'age' before initialization
         let age = 30;
         var salary = 10000;
       }
       console.log(salary); //10000 (accessible to due function scope)
       console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails('John');
    ```

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is the reason to choose the name let as a keyword

    `let` is a mathematical statement that was adopted by early programming languages like **Scheme** and **Basic**. It has been borrowed from dozens of other languages that use `let` already as a traditional keyword as close to `var` as possible.

    **[⬆ Back to Top](#table-of-contents)**

20. ### How do you redeclare variables in switch block without an error

    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,

    ```javascript
    let counter = 1;
    switch(x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```

    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
        switch(x) {
          case 0: {
            let name;
            break;
          }
          case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
          }
        }
    ```

    **[⬆ Back to Top](#table-of-contents)**

21. ### What is the Temporal Dead Zone

    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
    
    Let's see this behavior with an example,

    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

22. ### What is IIFE(Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function ()
        {
          // logic here
        }
     )
    ();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ```javascript
    (function ()
            {
              var message = "IIFE";
              console.log(message);
            }
     )
    ();
    console.log(message); //Error: message is not defined
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is the benefit of using modules

    There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,
    1. Maintainability
    2. Reusability
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

24. ### What is memoization

    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.  Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizAddition = () => {
      let cache = {};
     return (value) => {
      if (value in cache) {
       console.log('Fetching from cache');
       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      }
      else {
       console.log('Calculating result');
       let result = value + 20;
       cache[value] = result;
       return result;
      }
     }
    }
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What is Hoisting

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
    ```

    The above code looks like as below to the interpreter,

    ```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### What are classes in ES6

    In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ```javascript
    function Bike(model,color) {
        this.model = model;
        this.color = color;
    }

    Bike.prototype.getDetails = function() {
        return this.model + ' bike has' + this.color + ' color';
    };
    ```

    Whereas ES6 classes can be defined as an alternative

    ```javascript
    class Bike{
      constructor(color, model) {
        this.color= color;
        this.model= model;
      }

      getDetails() {
        return this.model + ' bike has' + this.color + ' color';
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

27. ### What are closures

    A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
    
    1. Own scope where variables defined between its curly brackets
    2. Outer function’s variables
    3. Global variables
    
    Let's take an example of closure concept,

    ```javascript
    function Welcome(name){
      var greetingInfo = function(message){
       console.log(message+' '+name);
      }
    return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

    **[⬆ Back to Top](#table-of-contents)**

28. ### What are modules

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns.  Most of the JavaScript modules export an object literal, a function, or a constructor

    **[⬆ Back to Top](#table-of-contents)**

29. ### Why do you need modules

    Below are the list of benefits using modules in javascript ecosystem
    1. Maintainability
    2. Reusability
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

30. ### What is scope in javascript

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

    **[⬆ Back to Top](#table-of-contents)**

31. ### What is a service worker

    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

    **[⬆ Back to Top](#table-of-contents)**

32. ### How do you manipulate DOM using a service worker

    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.

    **[⬆ Back to Top](#table-of-contents)**

33. ### How do you reuse information across service worker restarts

    The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on 