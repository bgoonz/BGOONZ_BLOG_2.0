### Query characters

<table><thead><tr class="header"><th>Query</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>@payee</code></td><td>Payee</td></tr><tr class="even"><td><code>%tag</code></td><td>Tag</td></tr><tr class="odd"><td><code>=note</code></td><td>Note</td></tr><tr class="even"><td><code>#code</code></td><td>Code</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>TERM and TERM</code></td><td>Boolean and</td></tr><tr class="odd"><td><code>TERM or TERM</code></td><td>Boolean or</td></tr><tr class="even"><td><code>not TERM</code></td><td>Boolean not</td></tr></tbody></table>

### Examples

    ledger r @taco
    ledger r comment =~ /landline/

References
----------

{: .-one-column}

-   <a href="http://ledger-cli.org/3.0/doc/ledger3.html#Complex-expressions" class="uri">http://ledger-cli.org/3.0/doc/ledger3.html#Complex-expressions</a>
