subtitle

2022-01-03

------------------------------------------------------------------------

title: Input tag category: HTML

weight: -3

------------------------------------------------------------------------

### Input

     <input ...
       disabled
       required
       checked

    autofocus

    autocomplete='off'
    <!-- autocomplete -->
    autocompletetype='cc-exp' autocapitalize='off'
    <!-- for mobiles -->
    pattern='\d*'
    <!-- force numeric input in iOS -->

### Input types

#### Text

-   email
-   hidden
-   **password**
-   tel
-   **text**
-   search {: .-four-column}

#### Time

-   date
-   time {: .-four-column}

#### Time (not widely supported)

-   month
-   week
-   datetime
-   datetime-local {: .-four-column}

#### Etc

-   **file**
-   **radio**
-   **checkbox** {: .-four-column}

#### Buttons

-   button
-   reset
-   submit
-   image {: .-four-column}

#### Numeric

-   number
-   range {: .-four-column}

Examples
--------

### Dates

<table><thead><tr class="header"><th>Type</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>type='date'</code></td><td></td></tr><tr class="even"><td><code>type='time'</code></td><td></td></tr></tbody></table>

### Datetime

<table><thead><tr class="header"><th>Type</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>type='datetime'</code></td><td></td></tr><tr class="even"><td><code>type='datetime-local'</code></td><td></td></tr></tbody></table>

`datetime` and `datetime-local` fields are not widely supported.

### Numbers

<table><thead><tr class="header"><th>Type</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>type='number'</code></td><td></td></tr><tr class="even"><td><code>type='range'</code></td><td></td></tr></tbody></table>

### Text

<table><thead><tr class="header"><th>Type</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>type='text'</code></td><td></td></tr><tr class="even"><td><code>type='password'</code></td><td></td></tr><tr class="odd"><td><code>type='search'</code></td><td></td></tr><tr class="even"><td><code>type='tel'</code></td><td></td></tr></tbody></table>

Also see
--------

-   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" class="uri">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input</a>
