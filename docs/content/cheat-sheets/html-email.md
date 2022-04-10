subtitle

2022-01-03

------------------------------------------------------------------------

title: HTML emails category: HTML

------------------------------------------------------------------------

### Properties to avoid

<table><thead><tr class="header"><th>Property</th><th>Where</th></tr></thead><tbody><tr class="odd"><td><code>position</code></td><td>(Outlook, Gmail, Yahoo)</td></tr><tr class="even"><td><code>display</code></td><td>(Outlook, Gmail)</td></tr><tr class="odd"><td><code>float</code></td><td>(Outlook)</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>height</code></td><td>(Outlook)</td></tr><tr class="even"><td><code>width</code> <em>in p/div</em></td><td>(Outlook)</td></tr><tr class="odd"><td><code>padding</code> <em>in p/div</em></td><td>(Outlook)</td></tr><tr class="even"><td><code>background</code></td><td>(Outlook, Gmail)</td></tr><tr class="odd"><td><code>min-width</code></td><td>(Outlook)</td></tr><tr class="even"><td><code>max-width</code></td><td>(Outlook)</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>opacity</code></td><td>(Outlook, Gmail, Yahoo)</td></tr><tr class="odd"><td><code>box-shadow</code></td><td>(Outlook, Gmail, Yahoo)</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>rgba()</code></td><td>(Outlook)</td></tr><tr class="even"><td><code>data-uri</code></td><td>(all webmail)</td></tr></tbody></table>

### Selectors to avoid

`E[attr]` | (Outlook, Gmail) |  
`E:nth-child(n)` | (Outlook, Gmail) |  
`::before` *and* `::after` | (Outlook, Yahoo, Gmail) |  
`E F` | (Gmail) |  
`E + F`, `E > F` *etc* | (Outlook, Gmail) |

Inline your CSS as much as possible.

### Basic layout

    <table cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td width="auto"></td>
            <td width="600" background="#ffffff">···</td>
            <td width="auto"></td>
        </tr>
    </table>

### Responsive

    <style>
        @media only screen and (max-device-width: 480px);
    </style>

`<style>` is supported in the head and body by everything except Gmail. Only use them for responsive styles.

References
----------

{: .-one-column}

-   [CSS support matrix](https://www.campaignmonitor.com/css/) *campaignmonitor.com*
