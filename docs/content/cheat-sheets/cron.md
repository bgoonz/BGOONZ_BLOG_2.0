subtitle

2022-01-03

------------------------------------------------------------------------

title: Cron category: CLI

weight: -3

------------------------------------------------------------------------

Format
------

{: .-two-column}

### Format

    Min  Hour Day  Mon  Weekday

{: .-setup}

    *    *    *    *    *  command to be executed

    ┬    ┬    ┬    ┬    ┬
    │    │    │    │    └─  Weekday  (0=Sun .. 6=Sat)
    │    │    │    └──────  Month    (1..12)
    │    │    └───────────  Day      (1..31)
    │    └────────────────  Hour     (0..23)
    └─────────────────────  Minute   (0..59)

{: .-setup.-box-chars}

### Operators

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>*</code></td><td>all values</td></tr><tr class="even"><td><code>,</code></td><td>separate individual values</td></tr><tr class="odd"><td><code>-</code></td><td>a range of values</td></tr><tr class="even"><td><code>/</code></td><td>divide a value into steps</td></tr></tbody></table>

### Examples

<table><thead><tr class="header"><th>Example</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>0 * * * *</code></td><td>every hour</td></tr><tr class="even"><td><code>*/15 * * * *</code></td><td>every 15 mins</td></tr><tr class="odd"><td><code>0 */2 * * *</code></td><td>every 2 hours</td></tr><tr class="even"><td><code>0 18 * * 0-6</code></td><td>every week Mon-Sat at 6pm</td></tr><tr class="odd"><td><code>10 2 * * 6,7</code></td><td>every Sat and Thu on 2:10am</td></tr><tr class="even"><td><code>0 0 * * 0</code></td><td>every Sunday midnight</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>@reboot</code></td><td>every reboot</td></tr></tbody></table>

### Crontab

    # Adding tasks easily
    echo "@reboot echo hi" | crontab

    # Open in editor
    crontab -e

    # List tasks
    crontab -l [-u user]
