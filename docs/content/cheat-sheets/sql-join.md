### Example

    SELECT * FROM order_items \
      LEFT OUTER JOIN orders \
      ON order_items.order_id = orders.id

{: .-wrap}

Joins are typically added to `SELECT` statements to add more columns and records.

### Diagram

    SELECT * FROM `A` INNER JOIN `B`

{: .-setup}

    ┌────────┐
    │ A  ┌───┼────┐
    │    │ ∩ │    │
    └────┼───┘  B │
         └────────┘

{: .-box-chars.-setup}

<table><thead><tr class="header"><th>Join</th><th>What</th></tr></thead><tbody><tr class="odd"><td>Inner join</td><td><code>∩</code></td></tr><tr class="even"><td>Left outer join</td><td><code>A</code> + <code>∩</code></td></tr><tr class="odd"><td>Right outer join</td><td><code>∩</code> + <code>B</code></td></tr><tr class="even"><td>Full outer join</td><td><code>A</code> + <code>∩</code> + <code>B</code></td></tr></tbody></table>
