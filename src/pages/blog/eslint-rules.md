---
title: ' ESLint Rules'
template: post
subtitle: Rules in ESLint are grouped by type to help you understand their purpose
excerpt: These rules relate to possible logic errors in cod
date: 2022-05-22T22:42:01.526Z
image: https://i.ytimg.com/vi/SydnKbGc7W8/maxresdefault.jpg
thumb_image: https://i.ytimg.com/vi/SydnKbGc7W8/maxresdefault.jpg
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
    - src/data/categories/js.yaml
    - src/data/categories/git.yaml
tags:
    - src/data/tags/cms.yaml
    - src/data/tags/javascript.yaml
    - src/data/tags/links.yaml
    - src/data/tags/resources.yaml
show_author_bio: true
cmseditable: true
---

<!--StartFragment-->

# Rules

Rules in ESLint are grouped by type to help you understand their purpose. Each rule has emojis denoting:

if the `"extends": "eslint:recommended"` property in a [configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) enables the rule

if some problems reported by the rule are automatically fixable by the `--fix` [command line](https://eslint.org/docs/user-guide/command-line-interface#--fix) option

if some problems reported by the rule are manually fixable by editor [suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions)

## Possible Problems[](https://eslint.org/docs/rules/#possible-problems)

These rules relate to possible logic errors in code:

|     |     |     |                                                                                                  |                                                                                               |
| --- | --- | --- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
|     |     |     | [array-callback-return](https://eslint.org/docs/rules/array-callback-return)                     | enforce \`return\` statements in callbacks of array methods                                   |
| ✓   |     |     | [constructor-super](https://eslint.org/docs/rules/constructor-super)                             | require \`super()\` calls in constructors                                                     |
| ✓   |     |     | [for-direction](https://eslint.org/docs/rules/for-direction)                                     | enforce "for" loop update clause moving the counter in the right direction.                   |
| ✓   |     |     | [getter-return](https://eslint.org/docs/rules/getter-return)                                     | enforce \`return\` statements in getters                                                      |
| ✓   |     |     | [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)             | disallow using an async function as a Promise executor                                        |
|     |     |     | [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)                               | disallow \`await\` inside of loops                                                            |
| ✓   |     |     | [no-class-assign](https://eslint.org/docs/rules/no-class-assign)                                 | disallow reassigning class members                                                            |
| ✓   |     |     | [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)                         | disallow comparing against -0                                                                 |
| ✓   |     |     | [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)                                   | disallow assignment operators in conditional expressions                                      |
| ✓   |     |     | [no-const-assign](https://eslint.org/docs/rules/no-const-assign)                                 | disallow reassigning \`const\` variables                                                      |
|     |     |     | [no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)     | disallow expressions where the operation doesn't affect the value                             |
| ✓   |     |     | [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)                     | disallow constant expressions in conditions                                                   |
|     |     |     | [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)                     | disallow returning value from constructor                                                     |
| ✓   |     |     | [no-control-regex](https://eslint.org/docs/rules/no-control-regex)                               | disallow control characters in regular expressions                                            |
| ✓   |     |     | [no-debugger](https://eslint.org/docs/rules/no-debugger)                                         | disallow the use of \`debugger\`                                                              |
| ✓   |     |     | [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)                                       | disallow duplicate arguments in \`function\` definitions                                      |
| ✓   |     |     | [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)                     | disallow duplicate class members                                                              |
| ✓   |     |     | [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)                                 | disallow duplicate conditions in if-else-if chains                                            |
| ✓   |     |     | [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)                                       | disallow duplicate keys in object literals                                                    |
| ✓   |     |     | [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)                             | disallow duplicate case labels                                                                |
|     |     |     | [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)                       | disallow duplicate module imports                                                             |
| ✓   |     |     | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)               | disallow empty character classes in regular expressions                                       |
| ✓   |     |     | [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)                               | disallow empty destructuring patterns                                                         |
| ✓   |     |     | [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)                                       | disallow reassigning exceptions in \`catch\` clauses                                          |
| ✓   |     |     | [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)                                   | disallow fallthrough of \`case\` statements                                                   |
| ✓   |     |     | [no-func-assign](https://eslint.org/docs/rules/no-func-assign)                                   | disallow reassigning \`function\` declarations                                                |
| ✓   |     |     | [no-import-assign](https://eslint.org/docs/rules/no-import-assign)                               | disallow assigning to imported bindings                                                       |
| ✓   |     |     | [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)                     | disallow variable or \`function\` declarations in nested blocks                               |
| ✓   |     |     | [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)                             | disallow invalid regular expression strings in \`RegExp\` constructors                        |
| ✓   |     |     | [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)                 | disallow irregular whitespace                                                                 |
| ✓   |     |     | [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)                       | disallow literal numbers that lose precision                                                  |
| ✓   |     | 💡  | [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)     | disallow characters which are made with multiple code points in character class syntax        |
| ✓   |     |     | [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)                                     | disallow \`new\` operators with the \`Symbol\` object                                         |
| ✓   |     |     | [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)                                       | disallow calling global object properties as functions                                        |
|     |     |     | [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)           | disallow returning values from Promise executor functions                                     |
| ✓   |     |     | [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)                     | disallow calling some \`Object.prototype\` methods directly on objects                        |
| ✓   |     |     | [no-self-assign](https://eslint.org/docs/rules/no-self-assign)                                   | disallow assignments where both sides are exactly the same                                    |
|     |     |     | [no-self-compare](https://eslint.org/docs/rules/no-self-compare)                                 | disallow comparisons where both sides are exactly the same                                    |
| ✓   |     |     | [no-setter-return](https://eslint.org/docs/rules/no-setter-return)                               | disallow returning values from setters                                                        |
| ✓   |     |     | [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)                               | disallow sparse arrays                                                                        |
|     |     |     | [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)         | disallow template literal placeholder syntax in regular strings                               |
| ✓   |     |     | [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)                       | disallow \`this\`/\`super\` before calling \`super()\` in constructors                        |
| ✓   |     |     | [no-undef](https://eslint.org/docs/rules/no-undef)                                               | disallow the use of undeclared variables unless mentioned in \`/\*global \*/\` comments       |
| ✓   |     |     | [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)                 | disallow confusing multiline expressions                                                      |
|     |     |     | [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)       | disallow unmodified loop conditions                                                           |
| ✓   |     |     | [no-unreachable](https://eslint.org/docs/rules/no-unreachable)                                   | disallow unreachable code after \`return\`, \`throw\`, \`continue\`, and \`break\` statements |
|     |     |     | [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)                         | disallow loops with a body that allows only one iteration                                     |
| ✓   |     |     | [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)                             | disallow control flow statements in \`finally\` blocks                                        |
| ✓   |     | 💡  | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)                           | disallow negating the left operand of relational operators                                    |
| ✓   |     |     | [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)         | disallow use of optional chaining in contexts where the \`undefined\` value is not allowed    |
|     |     |     | [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members) | disallow unused private class members                                                         |
| ✓   |     |     | [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)                                   | disallow unused variables                                                                     |
|     |     |     | [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)                       | disallow the use of variables before they are defined                                         |
| ✓   |     |     | [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)               | disallow useless backreferences in regular expressions                                        |
|     |     |     | [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)                   | disallow assignments that can lead to race conditions due to usage of \`await\` or \`yield\`  |
| ✓   |     |     | [use-isnan](https://eslint.org/docs/rules/use-isnan)                                             | require calls to \`isNaN()\` when checking for \`NaN\`                                        |
| ✓   |     | 💡  | [valid-typeof](https://eslint.org/docs/rules/valid-typeof)                                       | enforce comparing \`typeof\` expressions against valid strings                                |

## Suggestions[](https://eslint.org/docs/rules/#suggestions)

These rules suggest alternate ways of doing things:

|     |     |     |                                                                                                |                                                                                                                        |
| --- | --- | --- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|     |     |     | [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)                                 | enforce getter and setter pairs in objects and classes                                                                 |
|     | 🔧  |     | [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)                             | require braces around arrow function bodies                                                                            |
|     |     |     | [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)                             | enforce the use of variables within the scope they are defined                                                         |
|     |     |     | [camelcase](https://eslint.org/docs/rules/camelcase)                                           | enforce camelcase naming convention                                                                                    |
|     | 🔧  |     | [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)                     | enforce or disallow capitalization of the first letter of a comment                                                    |
|     |     |     | [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)                 | enforce that class methods utilize \`this\`                                                                            |
|     |     |     | [complexity](https://eslint.org/docs/rules/complexity)                                         | enforce a maximum cyclomatic complexity allowed in a program                                                           |
|     |     |     | [consistent-return](https://eslint.org/docs/rules/consistent-return)                           | require \`return\` statements to either always or never specify values                                                 |
|     |     |     | [consistent-this](https://eslint.org/docs/rules/consistent-this)                               | enforce consistent naming when capturing the current execution context                                                 |
|     | 🔧  |     | [curly](https://eslint.org/docs/rules/curly)                                                   | enforce consistent brace style for all control statements                                                              |
|     |     |     | [default-case](https://eslint.org/docs/rules/default-case)                                     | require \`default\` cases in \`switch\` statements                                                                     |
|     |     |     | [default-case-last](https://eslint.org/docs/rules/default-case-last)                           | enforce default clauses in switch statements to be last                                                                |
|     |     |     | [default-param-last](https://eslint.org/docs/rules/default-param-last)                         | enforce default parameters to be last                                                                                  |
|     | 🔧  |     | [dot-notation](https://eslint.org/docs/rules/dot-notation)                                     | enforce dot notation whenever possible                                                                                 |
|     | 🔧  |     | [eqeqeq](https://eslint.org/docs/rules/eqeqeq)                                                 | require the use of \`===\` and \`!==\`                                                                                 |
|     |     |     | [func-name-matching](https://eslint.org/docs/rules/func-name-matching)                         | require function names to match the name of the variable or property to which they are assigned                        |
|     |     |     | [func-names](https://eslint.org/docs/rules/func-names)                                         | require or disallow named \`function\` expressions                                                                     |
|     |     |     | [func-style](https://eslint.org/docs/rules/func-style)                                         | enforce the consistent use of either \`function\` declarations or expressions                                          |
|     |     |     | [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)                 | require grouped accessor pairs in object literals and classes                                                          |
|     |     |     | [guard-for-in](https://eslint.org/docs/rules/guard-for-in)                                     | require \`for-in\` loops to include an \`if\` statement                                                                |
|     |     |     | [id-denylist](https://eslint.org/docs/rules/id-denylist)                                       | disallow specified identifiers                                                                                         |
|     |     |     | [id-length](https://eslint.org/docs/rules/id-length)                                           | enforce minimum and maximum identifier lengths                                                                         |
|     |     |     | [id-match](https://eslint.org/docs/rules/id-match)                                             | require identifiers to match a specified regular expression                                                            |
|     |     |     | [init-declarations](https://eslint.org/docs/rules/init-declarations)                           | require or disallow initialization in variable declarations                                                            |
|     |     |     | [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)                     | enforce a maximum number of classes per file                                                                           |
|     |     |     | [max-depth](https://eslint.org/docs/rules/max-depth)                                           | enforce a maximum depth that blocks can be nested                                                                      |
|     |     |     | [max-lines](https://eslint.org/docs/rules/max-lines)                                           | enforce a maximum number of lines per file                                                                             |
|     |     |     | [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)                 | enforce a maximum number of lines of code in a function                                                                |
|     |     |     | [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)                     | enforce a maximum depth that callbacks can be nested                                                                   |
|     |     |     | [max-params](https://eslint.org/docs/rules/max-params)                                         | enforce a maximum number of parameters in function definitions                                                         |
|     |     |     | [max-statements](https://eslint.org/docs/rules/max-statements)                                 | enforce a maximum number of statements allowed in function blocks                                                      |
|     | 🔧  |     | [multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)               | enforce a particular style for multiline comments                                                                      |
|     |     |     | [new-cap](https://eslint.org/docs/rules/new-cap)                                               | require constructor names to begin with a capital letter                                                               |
|     |     |     | [no-alert](https://eslint.org/docs/rules/no-alert)                                             | disallow the use of \`alert\`, \`confirm\`, and \`prompt\`                                                             |
|     |     |     | [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)                     | disallow \`Array\` constructors                                                                                        |
|     |     |     | [no-bitwise](https://eslint.org/docs/rules/no-bitwise)                                         | disallow bitwise operators                                                                                             |
|     |     |     | [no-caller](https://eslint.org/docs/rules/no-caller)                                           | disallow the use of \`arguments.caller\` or \`arguments.callee\`                                                       |
| ✓   |     |     | [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)                     | disallow lexical declarations in case clauses                                                                          |
|     | 🔧  |     | [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)                         | disallow arrow functions where they could be confused with comparisons                                                 |
|     |     |     | [no-console](https://eslint.org/docs/rules/no-console)                                         | disallow the use of \`console\`                                                                                        |
|     |     |     | [no-continue](https://eslint.org/docs/rules/no-continue)                                       | disallow \`continue\` statements                                                                                       |
| ✓   |     |     | [no-delete-var](https://eslint.org/docs/rules/no-delete-var)                                   | disallow deleting variables                                                                                            |
|     | 🔧  |     | [no-div-regex](https://eslint.org/docs/rules/no-div-regex)                                     | disallow division operators explicitly at the beginning of regular expressions                                         |
|     | 🔧  |     | [no-else-return](https://eslint.org/docs/rules/no-else-return)                                 | disallow \`else\` blocks after \`return\` statements in \`if\` statements                                              |
| ✓   |     |     | [no-empty](https://eslint.org/docs/rules/no-empty)                                             | disallow empty block statements                                                                                        |
|     |     |     | [no-empty-function](https://eslint.org/docs/rules/no-empty-function)                           | disallow empty functions                                                                                               |
|     |     |     | [no-eq-null](https://eslint.org/docs/rules/no-eq-null)                                         | disallow \`null\` comparisons without type-checking operators                                                          |
|     |     |     | [no-eval](https://eslint.org/docs/rules/no-eval)                                               | disallow the use of \`eval()\`                                                                                         |
|     |     |     | [no-extend-native](https://eslint.org/docs/rules/no-extend-native)                             | disallow extending native types                                                                                        |
|     | 🔧  |     | [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)                                   | disallow unnecessary calls to \`.bind()\`                                                                              |
| ✓   | 🔧  |     | [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)                   | disallow unnecessary boolean casts                                                                                     |
|     | 🔧  |     | [no-extra-label](https://eslint.org/docs/rules/no-extra-label)                                 | disallow unnecessary labels                                                                                            |
| ✓   | 🔧  |     | [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)                                   | disallow unnecessary semicolons                                                                                        |
|     | 🔧  |     | [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)                       | disallow leading or trailing decimal points in numeric literals                                                        |
| ✓   |     |     | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                             | disallow assignments to native objects or read-only global variables                                                   |
|     | 🔧  |     | [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)                     | disallow shorthand type conversions                                                                                    |
|     |     |     | [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)                       | disallow declarations in the global scope                                                                              |
|     |     |     | [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)                               | disallow the use of \`eval()\`-like methods                                                                            |
|     |     |     | [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)                         | disallow inline comments after code                                                                                    |
|     |     |     | [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)                               | disallow use of \`this\` in contexts where the value of \`this\` is \`undefined\`                                      |
|     |     |     | [no-iterator](https://eslint.org/docs/rules/no-iterator)                                       | disallow the use of the \`\_\_iterator\_\_\` property                                                                  |
|     |     |     | [no-label-var](https://eslint.org/docs/rules/no-label-var)                                     | disallow labels that share a name with a variable                                                                      |
|     |     |     | [no-labels](https://eslint.org/docs/rules/no-labels)                                           | disallow labeled statements                                                                                            |
|     |     |     | [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)                                 | disallow unnecessary nested blocks                                                                                     |
|     | 🔧  |     | [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)                                     | disallow \`if\` statements as the only statement in \`else\` blocks                                                    |
|     |     |     | [no-loop-func](https://eslint.org/docs/rules/no-loop-func)                                     | disallow function declarations that contain unsafe references inside loop statements                                   |
|     |     |     | [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)                             | disallow magic numbers                                                                                                 |
|     |     |     | [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)                         | disallow mixed binary operators                                                                                        |
|     |     |     | [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)                               | disallow use of chained assignment expressions                                                                         |
|     |     |     | [no-multi-str](https://eslint.org/docs/rules/no-multi-str)                                     | disallow multiline strings                                                                                             |
|     |     |     | [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)                     | disallow negated conditions                                                                                            |
|     |     |     | [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)                           | disallow nested ternary expressions                                                                                    |
|     |     |     | [no-new](https://eslint.org/docs/rules/no-new)                                                 | disallow \`new\` operators outside of assignments or comparisons                                                       |
|     |     |     | [no-new-func](https://eslint.org/docs/rules/no-new-func)                                       | disallow \`new\` operators with the \`Function\` object                                                                |
|     |     |     | [no-new-object](https://eslint.org/docs/rules/no-new-object)                                   | disallow \`Object\` constructors                                                                                       |
|     |     |     | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)                               | disallow \`new\` operators with the \`String\`, \`Number\`, and \`Boolean\` objects                                    |
| ✓   |     | 💡  | [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)         | disallow \`\8\` and \`\9\` escape sequences in string literals                                                         |
| ✓   |     |     | [no-octal](https://eslint.org/docs/rules/no-octal)                                             | disallow octal literals                                                                                                |
|     |     |     | [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)                               | disallow octal escape sequences in string literals                                                                     |
|     |     |     | [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)                           | disallow reassigning \`function\` parameters                                                                           |
|     |     |     | [no-plusplus](https://eslint.org/docs/rules/no-plusplus)                                       | disallow the unary operators \`++\` and \`--\`                                                                         |
|     |     |     | [no-proto](https://eslint.org/docs/rules/no-proto)                                             | disallow the use of the \`\_\_proto\_\_\` property                                                                     |
| ✓   |     |     | [no-redeclare](https://eslint.org/docs/rules/no-redeclare)                                     | disallow variable redeclaration                                                                                        |
| ✓   | 🔧  |     | [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)                               | disallow multiple spaces in regular expressions                                                                        |
|     |     |     | [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)                   | disallow specified names in exports                                                                                    |
|     |     |     | [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)                   | disallow specified global variables                                                                                    |
|     |     |     | [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)                   | disallow specified modules when loaded by \`import\`                                                                   |
|     |     |     | [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)             | disallow certain properties on certain objects                                                                         |
|     |     |     | [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)                     | disallow specified syntax                                                                                              |
|     |     |     | [no-return-assign](https://eslint.org/docs/rules/no-return-assign)                             | disallow assignment operators in \`return\` statements                                                                 |
|     |     |     | [no-return-await](https://eslint.org/docs/rules/no-return-await)                               | disallow unnecessary \`return await\`                                                                                  |
|     |     |     | [no-script-url](https://eslint.org/docs/rules/no-script-url)                                   | disallow \`javascript:\` urls                                                                                          |
|     |     |     | [no-sequences](https://eslint.org/docs/rules/no-sequences)                                     | disallow comma operators                                                                                               |
|     |     |     | [no-shadow](https://eslint.org/docs/rules/no-shadow)                                           | disallow variable declarations from shadowing variables declared in the outer scope                                    |
| ✓   |     |     | [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)         | disallow identifiers from shadowing restricted names                                                                   |
|     |     |     | [no-ternary](https://eslint.org/docs/rules/no-ternary)                                         | disallow ternary operators                                                                                             |
|     |     |     | [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)                             | disallow throwing literals as exceptions                                                                               |
|     | 🔧  |     | [no-undef-init](https://eslint.org/docs/rules/no-undef-init)                                   | disallow initializing variables to \`undefined\`                                                                       |
|     |     |     | [no-undefined](https://eslint.org/docs/rules/no-undefined)                                     | disallow the use of \`undefined\` as an identifier                                                                     |
|     |     |     | [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)                     | disallow dangling underscores in identifiers                                                                           |
|     | 🔧  |     | [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)                       | disallow ternary operators when simpler alternatives exist                                                             |
|     |     |     | [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)                   | disallow unused expressions                                                                                            |
| ✓   | 🔧  |     | [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)                             | disallow unused labels                                                                                                 |
|     |     |     | [no-useless-call](https://eslint.org/docs/rules/no-useless-call)                               | disallow unnecessary calls to \`.call()\` and \`.apply()\`                                                             |
| ✓   |     |     | [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)                             | disallow unnecessary \`catch\` clauses                                                                                 |
|     | 🔧  |     | [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)               | disallow unnecessary computed property keys in objects and classes                                                     |
|     |     |     | [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)                           | disallow unnecessary concatenation of literals or template literals                                                    |
|     |     |     | [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)                 | disallow unnecessary constructors                                                                                      |
| ✓   |     | 💡  | [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)                           | disallow unnecessary escape characters                                                                                 |
|     | 🔧  |     | [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)                           | disallow renaming import, export, and destructured assignments to the same name                                        |
|     | 🔧  |     | [no-useless-return](https://eslint.org/docs/rules/no-useless-return)                           | disallow redundant return statements                                                                                   |
|     | 🔧  |     | [no-var](https://eslint.org/docs/rules/no-var)                                                 | require \`let\` or \`const\` instead of \`var\`                                                                        |
|     |     |     | [no-void](https://eslint.org/docs/rules/no-void)                                               | disallow \`void\` operators                                                                                            |
|     |     |     | [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)                       | disallow specified warning terms in comments                                                                           |
| ✓   |     |     | [no-with](https://eslint.org/docs/rules/no-with)                                               | disallow \`with\` statements                                                                                           |
|     | 🔧  |     | [object-shorthand](https://eslint.org/docs/rules/object-shorthand)                             | require or disallow method and property shorthand syntax for object literals                                           |
|     | 🔧  |     | [one-var](https://eslint.org/docs/rules/one-var)                                               | enforce variables to be declared either together or separately in functions                                            |
|     | 🔧  |     | [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)     | require or disallow newlines around variable declarations                                                              |
|     | 🔧  |     | [operator-assignment](https://eslint.org/docs/rules/operator-assignment)                       | require or disallow assignment operator shorthand where possible                                                       |
|     | 🔧  |     | [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)                   | require using arrow functions for callbacks                                                                            |
|     | 🔧  |     | [prefer-const](https://eslint.org/docs/rules/prefer-const)                                     | require \`const\` declarations for variables that are never reassigned after declared                                  |
|     | 🔧  |     | [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)                     | require destructuring from arrays and/or objects                                                                       |
|     | 🔧  |     | [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator) | disallow the use of \`Math.pow\` in favor of the \`\*\*\` operator                                                     |
|     |     |     | [prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)         | enforce using named capture group in regular expression                                                                |
|     | 🔧  |     | [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)               | disallow \`parseInt()\` and \`Number.parseInt()\` in favor of binary, octal, and hexadecimal literals                  |
|     | 🔧  |     | [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)                   | disallow use of \`Object.prototype.hasOwnProperty.call()\` and prefer use of \`Object.hasOwn()\`                       |
|     | 🔧  |     | [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)                     | disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. |
|     |     |     | [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)     | require using Error objects as Promise rejection reasons                                                               |
|     |     | 💡  | [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)                   | disallow use of the \`RegExp\` constructor in favor of regular expression literals                                     |
|     |     |     | [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)                         | require rest parameters instead of \`arguments\`                                                                       |
|     |     |     | [prefer-spread](https://eslint.org/docs/rules/prefer-spread)                                   | require spread operators instead of \`.apply()\`                                                                       |
|     | 🔧  |     | [prefer-template](https://eslint.org/docs/rules/prefer-template)                               | require template literals instead of string concatenation                                                              |
|     | 🔧  |     | [quote-props](https://eslint.org/docs/rules/quote-props)                                       | require quotes around object literal property names                                                                    |
|     |     | 💡  | [radix](https://eslint.org/docs/rules/radix)                                                   | enforce the consistent use of the radix argument when using \`parseInt()\`                                             |
|     |     |     | [require-await](https://eslint.org/docs/rules/require-await)                                   | disallow async functions which have no \`await\` expression                                                            |
|     |     |     | [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)                 | enforce the use of \`u\` flag on RegExp                                                                                |
| ✓   |     |     | [require-yield](https://eslint.org/docs/rules/require-yield)                                   | require generator functions to contain \`yield\`                                                                       |
|     | 🔧  |     | [sort-imports](https://eslint.org/docs/rules/sort-imports)                                     | enforce sorted import declarations within modules                                                                      |
|     |     |     | [sort-keys](https://eslint.org/docs/rules/sort-keys)                                           | require object keys to be sorted                                                                                       |
|     | 🔧  |     | [sort-vars](https://eslint.org/docs/rules/sort-vars)                                           | require variables within the same declaration block to be sorted                                                       |
|     | 🔧  |     | [spaced-comment](https://eslint.org/docs/rules/spaced-comment)                                 | enforce consistent spacing after the \`//\` or \`/\*\` in a comment                                                    |
|     | 🔧  |     | [strict](https://eslint.org/docs/rules/strict)                                                 | require or disallow strict mode directives                                                                             |
|     |     |     | [symbol-description](https://eslint.org/docs/rules/symbol-description)                         | require symbol descriptions                                                                                            |
|     |     |     | [vars-on-top](https://eslint.org/docs/rules/vars-on-top)                                       | require \`var\` declarations be placed at the top of their containing scope                                            |
|     | 🔧  |     | [yoda](https://eslint.org/docs/rules/yoda)                                                     | require or disallow "Yoda" conditions                                                                                  |

## Layout & Formatting[](https://eslint.org/docs/rules/#layout-formatting)

These rules care about how the code looks rather than how it executes:

|     |     |     |                                                                                                    |                                                                                          |
| --- | --- | --- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|     | 🔧  |     | [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)                       | enforce linebreaks after opening and before closing array brackets                       |
|     | 🔧  |     | [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)                       | enforce consistent spacing inside array brackets                                         |
|     | 🔧  |     | [array-element-newline](https://eslint.org/docs/rules/array-element-newline)                       | enforce line breaks after each array element                                             |
|     | 🔧  |     | [arrow-parens](https://eslint.org/docs/rules/arrow-parens)                                         | require parentheses around arrow function arguments                                      |
|     | 🔧  |     | [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)                                       | enforce consistent spacing before and after the arrow in arrow functions                 |
|     | 🔧  |     | [block-spacing](https://eslint.org/docs/rules/block-spacing)                                       | disallow or enforce spaces inside of blocks after opening block and before closing block |
|     | 🔧  |     | [brace-style](https://eslint.org/docs/rules/brace-style)                                           | enforce consistent brace style for blocks                                                |
|     | 🔧  |     | [comma-dangle](https://eslint.org/docs/rules/comma-dangle)                                         | require or disallow trailing commas                                                      |
|     | 🔧  |     | [comma-spacing](https://eslint.org/docs/rules/comma-spacing)                                       | enforce consistent spacing before and after commas                                       |
|     | 🔧  |     | [comma-style](https://eslint.org/docs/rules/comma-style)                                           | enforce consistent comma style                                                           |
|     | 🔧  |     | [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)               | enforce consistent spacing inside computed property brackets                             |
|     | 🔧  |     | [dot-location](https://eslint.org/docs/rules/dot-location)                                         | enforce consistent newlines before and after dots                                        |
|     | 🔧  |     | [eol-last](https://eslint.org/docs/rules/eol-last)                                                 | require or disallow newline at the end of files                                          |
|     | 🔧  |     | [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)                               | require or disallow spacing between function identifiers and their invocations           |
|     | 🔧  |     | [function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)     | enforce line breaks between arguments of a function call                                 |
|     | 🔧  |     | [function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)                     | enforce consistent line breaks inside function parentheses                               |
|     | 🔧  |     | [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)                     | enforce consistent spacing around \`\*\` operators in generator functions                |
|     | 🔧  |     | [implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)                 | enforce the location of arrow function bodies                                            |
|     | 🔧  |     | [indent](https://eslint.org/docs/rules/indent)                                                     | enforce consistent indentation                                                           |
|     | 🔧  |     | [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)                                             | enforce the consistent use of either double or single quotes in JSX attributes           |
|     | 🔧  |     | [key-spacing](https://eslint.org/docs/rules/key-spacing)                                           | enforce consistent spacing between keys and values in object literal properties          |
|     | 🔧  |     | [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)                                   | enforce consistent spacing before and after keywords                                     |
|     |     |     | [line-comment-position](https://eslint.org/docs/rules/line-comment-position)                       | enforce position of line comments                                                        |
|     | 🔧  |     | [linebreak-style](https://eslint.org/docs/rules/linebreak-style)                                   | enforce consistent linebreak style                                                       |
|     | 🔧  |     | [lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)                         | require empty lines around comments                                                      |
|     | 🔧  |     | [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)           | require or disallow an empty line between class members                                  |
|     |     |     | [max-len](https://eslint.org/docs/rules/max-len)                                                   | enforce a maximum line length                                                            |
|     |     |     | [max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)                   | enforce a maximum number of statements allowed per line                                  |
|     | 🔧  |     | [multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)                               | enforce newlines between operands of ternary expressions                                 |
|     | 🔧  |     | [new-parens](https://eslint.org/docs/rules/new-parens)                                             | enforce or disallow parentheses when invoking a constructor with no arguments            |
|     | 🔧  |     | [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)                 | require a newline after each call in a method chain                                      |
|     | 🔧  |     | [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)                                   | disallow unnecessary parentheses                                                         |
| ✓   |     |     | [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)                 | disallow mixed spaces and tabs for indentation                                           |
|     | 🔧  |     | [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)                                   | disallow multiple spaces                                                                 |
|     | 🔧  |     | [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)                   | disallow multiple empty lines                                                            |
|     |     |     | [no-tabs](https://eslint.org/docs/rules/no-tabs)                                                   | disallow all tabs                                                                        |
|     | 🔧  |     | [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)                             | disallow trailing whitespace at the end of lines                                         |
|     | 🔧  |     | [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)       | disallow whitespace before properties                                                    |
|     | 🔧  |     | [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position) | enforce the location of single-line statements                                           |
|     | 🔧  |     | [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)                         | enforce consistent line breaks after opening and before closing braces                   |
|     | 🔧  |     | [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)                         | enforce consistent spacing inside braces                                                 |
|     | 🔧  |     | [object-property-newline](https://eslint.org/docs/rules/object-property-newline)                   | enforce placing object properties on separate lines                                      |
|     | 🔧  |     | [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)                             | enforce consistent linebreak style for operators                                         |
|     | 🔧  |     | [padded-blocks](https://eslint.org/docs/rules/padded-blocks)                                       | require or disallow padding within blocks                                                |
|     | 🔧  |     | [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)   | require or disallow padding lines between statements                                     |
|     | 🔧  |     | [quotes](https://eslint.org/docs/rules/quotes)                                                     | enforce the consistent use of either backticks, double, or single quotes                 |
|     | 🔧  |     | [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)                           | enforce spacing between rest and spread operators and their expressions                  |
|     | 🔧  |     | [semi](https://eslint.org/docs/rules/semi)                                                         | require or disallow semicolons instead of ASI                                            |
|     | 🔧  |     | [semi-spacing](https://eslint.org/docs/rules/semi-spacing)                                         | enforce consistent spacing before and after semicolons                                   |
|     | 🔧  |     | [semi-style](https://eslint.org/docs/rules/semi-style)                                             | enforce location of semicolons                                                           |
|     | 🔧  |     | [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)                           | enforce consistent spacing before blocks                                                 |
|     | 🔧  |     | [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)           | enforce consistent spacing before \`function\` definition opening parenthesis            |
|     | 🔧  |     | [space-in-parens](https://eslint.org/docs/rules/space-in-parens)                                   | enforce consistent spacing inside parentheses                                            |
|     | 🔧  |     | [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)                                   | require spacing around infix operators                                                   |
|     | 🔧  |     | [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)                                   | enforce consistent spacing before or after unary operators                               |
|     | 🔧  |     | [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)                         | enforce spacing around colons of switch statements                                       |
|     | 🔧  |     | [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)                     | require or disallow spacing around embedded expressions of template strings              |
|     | 🔧  |     | [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)                         | require or disallow spacing between template tags and their literals                     |
|     | 🔧  |     | [unicode-bom](https://eslint.org/docs/rules/unicode-bom)                                           | require or disallow Unicode byte order mark (BOM)                                        |
|     | 🔧  |     | [wrap-iife](https://eslint.org/docs/rules/wrap-iife)                                               | require parentheses around immediate \`function\` invocations                            |
|     | 🔧  |     | [wrap-regex](https://eslint.org/docs/rules/wrap-regex)                                             | require parenthesis around regex literals                                                |
|     | 🔧  |     | [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)                             | require or disallow spacing around the \`\*\` in \`yield\*\` expressions                 |

## Deprecated[](https://eslint.org/docs/rules/#deprecated)

These rules have been deprecated in accordance with the [deprecation policy](https://eslint.org/docs/user-guide/rule-deprecation), and replaced by newer rules:

| Deprecated rule                                                                | Replaced by                                                                                      |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| [callback-return](https://eslint.org/docs/rules/callback-return)               |                                                                                                  |
| [global-require](https://eslint.org/docs/rules/global-require)                 |                                                                                                  |
| [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)       |                                                                                                  |
| [id-blacklist](https://eslint.org/docs/rules/id-blacklist)                     | [id-denylist](https://eslint.org/docs/rules/id-denylist)                                         |
| [indent-legacy](https://eslint.org/docs/rules/indent-legacy)                   | [indent](https://eslint.org/docs/rules/indent)                                                   |
| [lines-around-directive](https://eslint.org/docs/rules/lines-around-directive) | [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements) |
| [newline-after-var](https://eslint.org/docs/rules/newline-after-var)           | [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements) |
| [newline-before-return](https://eslint.org/docs/rules/newline-before-return)   | [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements) |
| [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)   |                                                                                                  |
| [no-catch-shadow](https://eslint.org/docs/rules/no-catch-shadow)               | [no-shadow](https://eslint.org/docs/rules/no-shadow)                                             |
| [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)           |                                                                                                  |
| [no-native-reassign](https://eslint.org/docs/rules/no-native-reassign)         | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                               |
| [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)           | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)                           |
| [no-new-require](https://eslint.org/docs/rules/no-new-require)                 |                                                                                                  |
| [no-path-concat](https://eslint.org/docs/rules/no-path-concat)                 |                                                                                                  |
| [no-process-env](https://eslint.org/docs/rules/no-process-env)                 |                                                                                                  |
| [no-process-exit](https://eslint.org/docs/rules/no-process-exit)               |                                                                                                  |
| [no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules)   |                                                                                                  |
| [no-spaced-func](https://eslint.org/docs/rules/no-spaced-func)                 | [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)                             |
| [no-sync](https://eslint.org/docs/rules/no-sync)                               |                                                                                                  |
| [prefer-reflect](https://eslint.org/docs/rules/prefer-reflect)                 |                                                                                                  |
| [require-jsdoc](https://eslint.org/docs/rules/require-jsdoc)                   |                                                                                                  |
| [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)                       |                                                                                                  |

## Removed[](https://eslint.org/docs/rules/#removed)

These rules from older versions of ESLint (before the [deprecation policy](https://eslint.org/docs/user-guide/rule-deprecation) existed) have been replaced by newer rules:

| Removed rule                                                                                         | Replaced by                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generator-star](https://eslint.org/docs/rules/generator-star)                                       | [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)                                                                          |
| [global-strict](https://eslint.org/docs/rules/global-strict)                                         | [strict](https://eslint.org/docs/rules/strict)                                                                                                          |
| [no-arrow-condition](https://eslint.org/docs/rules/no-arrow-condition)                               | [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow) [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)     |
| [no-comma-dangle](https://eslint.org/docs/rules/no-comma-dangle)                                     | [comma-dangle](https://eslint.org/docs/rules/comma-dangle)                                                                                              |
| [no-empty-class](https://eslint.org/docs/rules/no-empty-class)                                       | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)                                                                      |
| [no-empty-label](https://eslint.org/docs/rules/no-empty-label)                                       | [no-labels](https://eslint.org/docs/rules/no-labels)                                                                                                    |
| [no-extra-strict](https://eslint.org/docs/rules/no-extra-strict)                                     | [strict](https://eslint.org/docs/rules/strict)                                                                                                          |
| [no-reserved-keys](https://eslint.org/docs/rules/no-reserved-keys)                                   | [quote-props](https://eslint.org/docs/rules/quote-props)                                                                                                |
| [no-space-before-semi](https://eslint.org/docs/rules/no-space-before-semi)                           | [semi-spacing](https://eslint.org/docs/rules/semi-spacing)                                                                                              |
| [no-wrap-func](https://eslint.org/docs/rules/no-wrap-func)                                           | [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)                                                                                        |
| [space-after-function-name](https://eslint.org/docs/rules/space-after-function-name)                 | [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)                                                                |
| [space-after-keywords](https://eslint.org/docs/rules/space-after-keywords)                           | [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)                                                                                        |
| [space-before-function-parentheses](https://eslint.org/docs/rules/space-before-function-parentheses) | [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)                                                                |
| [space-before-keywords](https://eslint.org/docs/rules/space-before-keywords)                         | [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)                                                                                        |
| [space-in-brackets](https://eslint.org/docs/rules/space-in-brackets)                                 | [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing) [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing) |
| [space-return-throw-case](https://eslint.org/docs/rules/space-return-throw-case)                     | [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)                                                                                        |
| [space-unary-word-ops](https://eslint.org/docs/rules/space-unary-word-ops)                           | [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)                                                                                        |
| [spaced-line-comment](https://eslint.org/docs/rules/spaced-line-comment)                             | [spaced-comment](https://eslint.org/docs/rules/spaced-comment)                                                                                          |

<!--EndFragment-->
